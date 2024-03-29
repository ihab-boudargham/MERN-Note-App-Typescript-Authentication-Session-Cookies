import app from './app';
import 'dotenv/config';
import mongoose from 'mongoose';
import env from './util/validateEnv';

const port = env.PORT;

// connect returns a promise like async functions, so after that we should define what happens next
mongoose
  .connect(env.MONGO_CONNECTION_STRING)
  .then(() => {
    console.log('Mongoose connected');

    app.listen(port, () => {
      console.log(`Server running on port: ${port}`);
    });
  })
  .catch(console.error);
