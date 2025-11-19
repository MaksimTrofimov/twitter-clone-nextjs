# Twitter Clone with Next.js

## Project Overview

Twitter Clone that includes:

- Dynamic feed of tweets with server-side rendering
- Individual tweet pages with dynamic routing
- Responsive design using Tailwind CSS
- Clean, maintainable code structure using Next.js App Router
- MongoDB database with migrations support

## Required Technologies

- Next.js with App Router
- Tailwind CSS
- Server Components
- MongoDB
- Docker & Docker Compose
- Node.js 18+
- npm
- Git & GitHub

## Development Environment

- VS Code (recommended)
- Node.js 18+
- npm
- Docker & Docker Compose
- `.env` file for environment variables (use `.env.example` as template)

## How to Run the Project

```bash
cd twitter-clone-nextjs
npm install
cp .env.example .env
docker-compose up  -d
```

## Working with Database Migrations

Applying migrations

```bash
docker-compose run nextjs npx migrate-mongo up
```
