# KissanConnect - Backend Template

Ready-to-run Node.js + Express + MongoDB backend template with basic route structure for a farmer assistance platform.

## Features
- User authentication (JWT)
- Farmer & Product routes (CRUD)
- Basic project structure: models, controllers, routes, middlewares
- .env.example for configuration
- Instructions to run and deploy

## Quick start
1. Copy `.env.example` to `.env` and fill values.
2. `npm install`
3. `npm run dev`

## To push to GitHub
```bash
git init
git add .
git commit -m "Initial commit - KissanConnect backend template"
gh repo create your-username/kissanconnect-backend --public --source=. --remote=origin
git push -u origin main
```