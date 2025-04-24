# Sales Calls Data Management System

A Node.js Express backend service for managing customer sales calls data, built with TypeScript and PostgreSQL.

## Prerequisites

- Node.js (v18 or higher)
- PostgreSQL 14
- TypeScript

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file in the root directory with the following content:
```
PORT=3000
POSTGRES_HOST=localhost
POSTGRES_PORT=5432
POSTGRES_USER=postgres
POSTGRES_PASSWORD=postgres
POSTGRES_DB=sales_calls_db
```

3. Create the database:
```bash
createdb sales_calls_db
```

## Development

To run the server in development mode:
```bash
npm run dev
```

To build the project:
```bash
npm run build
```

To run the built version:
```bash
npm start
```

## Project Structure

```
.
├── src/              # Source files
├── config/           # Configuration files
├── build/           # Compiled files
├── package.json     # Project dependencies
└── tsconfig.json    # TypeScript configuration
``` 