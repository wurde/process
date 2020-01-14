/**
 * Dependencies
 */

import 'reflect-metadata';
import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import { createConnection } from 'typeorm';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';

/**
 * Constants
 */

const port = process.env.PORT || 4000;

/**
 * Define app
 */

const app = express();

/**
 * Config
 */

app.disable('x-powered-by');

/**
 * Middleware
 */

app.use(helmet());
app.use(cors());
app.use(express.json());

/**
 * Bootstrap server
 */

async function bootstrap() {
  try {
    /**
     * Initialize ORM
     */

    await createConnection();

    /**
     * Define schema
     */

    const schema = await buildSchema({
      resolvers: [__dirname + '/**/*.resolver.ts']
    });

    /**
     * Define and mount GraphQL server
     */

    const server = new ApolloServer({
      schema,
      playground: true
    });
    server.applyMiddleware({ app });

    /**
     * Start server
     */

    app.listen(port, () => {
      console.log(`Express running on port ${port}`);
    });
  } catch (err) {
    console.error(err);
  }
}

bootstrap();
