# Lavanya — Portfolio

A responsive React portfolio with a Spring Boot REST API and MySQL persistence.
The site describes Lavanya as a learner and aspiring Java Full Stack Developer;
certificate cards and unavailable external URLs are deliberately marked as placeholders.

## Project structure

```text
src/                         React + Vite frontend
  components/                Reusable page sections and controls
  data/portfolio.js          Editable profile, project, skill, education, and certificate configuration
  data/api.js                REST API client
backend/                     Spring Boot + MySQL REST API
  src/main/java/...          Controllers, services, repositories, entities, and DTOs
```

## Run the frontend

Requirements: Node.js 18 or newer.

```sh
npm install
npm run dev
```

The frontend runs at `http://localhost:5173`. It uses `http://localhost:8080/api`
for API requests by default. To use another API address, create a `.env` file with:

```text
VITE_API_BASE_URL=https://your-api.example/api
```

## Run the backend

Requirements: Java 17+, Maven, and MySQL 8+.

1. Create the database: `CREATE DATABASE lavanya_portfolio;`
2. Set the database connection environment variables. Do not put database secrets
   in frontend files or commit them.

PowerShell:

```powershell
$env:DB_USERNAME = "your_mysql_username"
$env:DB_PASSWORD = "your_mysql_password"
```

Optional overrides are `DB_URL` and `FRONTEND_ORIGINS`. The defaults point to the
local MySQL database and Vite development/preview origins.

```sh
cd backend
mvn spring-boot:run
```

The API listens on `http://localhost:8080/api`. On first startup, the backend
creates the tables and inserts the two project records and clearly marked
NPTEL Data Analytics with Python and Infosys Java certificate placeholders if
they are not already present.

## API

- `GET /api/projects` — project cards and project details
- `GET /api/certificates` — certificates/placeholders
- `POST /api/contact` — validated contact message; JSON body: `{"name":"...","email":"...","message":"..."}`

The contact form reports an explicit error when the API is unavailable. A success
message is only shown after the backend confirms that the message was stored.

## Personalize the portfolio

Edit `src/data/portfolio.js` to update profile links, each project's URLs/images,
certificate files/issuer/date, and education years. The Infosys Java certificate
already in `certificates/` is copied to `public/certificates/infosys-java-programming.pdf`
and linked in the portfolio. To add the NPTEL certificate, copy it to
`public/certificates/` and replace `YOUR_NPTEL_CERTIFICATE_FILE` with a path like
`/certificates/nptel-data-analytics-python.pdf`. Supported previews include PDF
and common image formats. Each project has its own GitHub
and deployed-demo placeholders, and each certificate has its own file placeholder.
Replace these with real `https://...` URLs or files stored under `public/` (for
example `/certificates/nptel-data-analytics-python.pdf`). The buttons stay disabled
until a valid URL or file path is provided. The certificate section displays only
NPTEL Data Analytics with Python and Infosys Java. Resume
uses `YOUR_RESUME_URL`. Project and certificate records are also seeded in
`backend/src/main/java/com/lavanya/portfolio/config/PortfolioDataInitializer.java`
for local API use.

For custom persistent content, update the seed data before the first backend
startup, or manage the corresponding rows in MySQL after startup.
