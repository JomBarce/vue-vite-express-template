# Vue + Vite + Express + Typescript Template

This Template helps you get started quickly with a modern TypeScript-based stack featuring:

- Vue
- Vite
- Express.js API server
- TypeScript across both frontend and backend

---

## What's Included

- Vue + Vite frontend
- Express.js REST API backend
- Unified TypeScript setup
- Monorepo-style project structure
- CORS, JSON body parsing, and routing out of the box
- Hot module reload:
    - Vite for the client
    - Nodemon + ts-node for the server
- Preconfigured:
    - CORS
    - dotenv
    - Routing structure
    - ESLint
    - Prettier
- Vue ecosystem tooling:
    - Pinia state management
    - Vue Router
    - vue-tsc for type checking

---

## Getting Started

#### 1. [Create a new repo from this template](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template).

#### 2. Install dependencies:
```bash
npm install
```

#### 3. Run the scripts in development mode:

The PORTS are:

- 9000 for the client
- 9001 for the server

To run both the frontend and backend concurrently in development mode:

```bash
npm run dev
```

Alternatively, you can run them independently:

- Frontend (React + Vite):
  ```bash
  npm run dev-client
  ```
- Backend (Express + tsx):
  ```bash
  npm run dev-server
  ```

---

### Health Check & Example API

Express server includes:

- `GET /api/health` → `{ status: "ok" }`
- `GET /api/hello` → `{ message: "Hello World!" }`

These are defined in [`app.ts`](./src/server/app.ts).

---
### Linting & Formatting

ESLint and Prettier are configured for code quality and formatting consistency.

To run linting:

```bash
npm run lint
```

To run formatting:

```bash
npm run format
```

---
### Environment Variables

Create a `.env` file to configure environment variables. Copy the `.env.example` and rename it to `.env`.

| Key  | Description                        | Value |
| ---- | ---------------------------------- | ----- |
| PORT | Port number for the Express server | 9001  |

---

## Production Workflow

Once you're ready to deploy or build the project for production:

#### 1. Build both client and server:

```bash
npm run build
```

#### 2. Start the production server:

After building, start the server with:

```bash
npm start
```