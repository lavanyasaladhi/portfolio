import { useEffect, useState } from 'react'
import Reveal from './Reveal.jsx'
import SectionHeading from './SectionHeading.jsx'
import LinkButton from './LinkButton.jsx'
import { certificates as configuredCertificates } from '../data/portfolio.js'
import { getPortfolioResource } from '../data/api.js'
import { isSafePortfolioUrl } from '../data/urls.js'

function hasCertificateFile(url = '') {
  return Boolean(url && !url.startsWith('YOUR_') && isSafePortfolioUrl(url))
}

export default function Certifications() {
  const [certificates, setCertificates] = useState(configuredCertificates)
  const [selected, setSelected] = useState(null)
  const [apiNotice, setApiNotice] = useState('')

  useEffect(() => {
    const controller = new AbortController()
    getPortfolioResource('/certificates', controller.signal)
      .then((items) => {
        if (!Array.isArray(items)) throw new Error('The certificates API returned an invalid response.')
        setCertificates(configuredCertificates.map((configured) => {
          const item = items.find((certificate) => certificate.title === configured.title)
          return {
            ...item,
            ...configured,
            issuer: configured.issuer || item?.issuer || 'Issuing organization to be added',
            date: configured.date || item?.date || '',
            certificateUrl: hasCertificateFile(configured.certificateUrl)
              ? configured.certificateUrl
              : item?.certificateUrl || configured.certificateUrl,
          }
        }))
      })
      .catch((error) => {
        if (error.name !== 'AbortError') setApiNotice(`Showing your two configured certificate cards. The certificate API is unavailable: ${error.message}`)
      })
    return () => controller.abort()
  }, [])

  useEffect(() => {
    if (!selected) return undefined
    const closeOnEscape = (event) => event.key === 'Escape' && setSelected(null)
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [selected])

  return (
    <section id="certificates" className="section section-soft" aria-labelledby="certificates-title">
      <div className="container">
        <Reveal>
          <SectionHeading id="certificates-title" title="Certificates">
            Your NPTEL Data Analytics with Python and Infosys Java certificates. Add each file to enable its preview and view button.
          </SectionHeading>
          {apiNotice && <p className="api-notice" role="status">{apiNotice}</p>}
          <div className="cert-grid">
            {certificates.map((certificate) => {
              const certificateUrl = certificate.certificateUrl || certificate.url || ''
              const available = hasCertificateFile(certificateUrl)
              return (
                <article key={certificate.id || certificate.title} className="glass-card cert-card">
                  <div className={`certificate-preview ${available ? 'has-certificate' : ''}`}>
                    {available ? (
                      /\.(png|jpe?g|webp|gif)$/i.test(certificateUrl)
                        ? <img src={certificateUrl} alt={`${certificate.title} certificate`} />
                        : <span className="pdf-mark" aria-hidden="true">PDF</span>
                    ) : (
                      <>
                        <span className="certificate-mark" aria-hidden="true">CERTIFICATE</span>
                        <span className="certificate-placeholder">Certificate file not added</span>
                      </>
                    )}
                  </div>
                  <span className="eyebrow">{available ? 'CERTIFICATE' : 'PLACEHOLDER'}</span>
                  <h3>{certificate.title}</h3>
                  <p className="issuer">{certificate.issuer || 'Issuing organization to be added'}</p>
                  <p>{certificate.date || 'Date to be added'}</p>
                  {available ? (
                    <div className="cert-actions">
                      <button className="btn btn-ghost" type="button" onClick={() => setSelected(certificate)}>Preview Certificate</button>
                      <LinkButton href={certificateUrl} variant="primary">View Certificate</LinkButton>
                    </div>
                  ) : (
                    <button className="btn btn-ghost is-placeholder" type="button" disabled title={`Set ${certificate.id === 'nptel-data-analytics' ? 'YOUR_NPTEL_CERTIFICATE_FILE' : 'YOUR_INFOSYS_JAVA_CERTIFICATE_FILE'} in src/data/portfolio.js`}>
                      Certificate file not added
                    </button>
                  )}
                </article>
              )
            })}
          </div>
          <aside className="certificate-recommendations" aria-label="How to add certificate files">
            <p className="eyebrow">HOW TO ADD YOUR CERTIFICATES</p>
            <ol>
              <li>Copy your certificate PDF or image into <code>public/certificates/</code>.</li>
              <li>In <code>src/data/portfolio.js</code>, replace <code>YOUR_NPTEL_CERTIFICATE_FILE</code> or <code>YOUR_INFOSYS_JAVA_CERTIFICATE_FILE</code> with its path, for example <code>/certificates/nptel-data-analytics-python.pdf</code>.</li>
              <li>Save the file and refresh the portfolio. The preview and <strong>View Certificate</strong> button will become available.</li>
            </ol>
          </aside>
        </Reveal>
      </div>
      {selected && (
        <div className="modal-backdrop" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && setSelected(null)}>
          <section className="certificate-modal glass-card" role="dialog" aria-modal="true" aria-labelledby="certificate-modal-title">
            <button className="modal-close" type="button" onClick={() => setSelected(null)} aria-label="Close certificate preview">×</button>
            <h3 id="certificate-modal-title">{selected.title}</h3>
            {/\.(png|jpe?g|webp|gif)$/i.test(selected.certificateUrl || selected.url || '') ? (
              <img src={selected.certificateUrl || selected.url} alt={`${selected.title} certificate preview`} />
            ) : (
              <iframe title={`${selected.title} PDF preview`} src={selected.certificateUrl || selected.url} />
            )}
          </section>
        </div>
      )}
    </section>
  )
}
