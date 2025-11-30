import dotenv from 'dotenv';
dotenv.config();

import { createServer } from 'http';
import app from './app.ts';

// Choose DB based on config
import { connectMongo } from './db/mongo.ts';
import { connectMySQL } from './db/mysql.ts';

const PORT = Number(process.env.PORT) || 9001;

async function startServer() {
  if (process.env.USE_MONGO === 'true') {
    await connectMongo();
  }
  
  if (process.env.USE_MYSQL === 'true') {
    await connectMySQL();
  }

  const server = createServer(app);

  server.listen(PORT, () => {
    console.log(`API started on http://localhost:${PORT}`);
  });

}

startServer();