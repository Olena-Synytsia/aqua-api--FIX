import dotenv from 'dotenv';
import initMongoConnection from './src/db/initMongoConnection.js';
import setupServer from './src/server.js';

dotenv.config();

initMongoConnection().then(() => {
  setupServer();
});

// const bootstrap = async () => {
//   try {
//     await initMongoConnection();
//     setupServer();
//   } catch (error) {
//     console.error('Initialization failed:', error);
//     process.exit(1);
//   }
// };

// void bootstrap();
