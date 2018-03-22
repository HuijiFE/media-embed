/**
 * Configure app and startup server.
 */

import * as fs from 'fs';
import * as dotenv from 'dotenv';
if (fs.existsSync('.env')) {
  dotenv.config({ path: '.env' });
} else {
  dotenv.config({ path: '.env.example' });
}

import * as express from 'express';
import * as compression from 'compression';
import * as cors from 'cors';
import * as logger from 'morgan';
import { Server } from 'http';
import * as routers from './routers';

// region ======== Express Configuration ========

const port: string | number = process.env.PORT || 7100;

const app: express.Express = express();
app
  .use(compression())
  .use(cors()) // CORS
  .use(logger('dev'));

Object.entries(routers).forEach(([name, router]) => {
  app.use(`/${name}`, router);
});

// endregion

// region ======== Error Handler ========

app.use((request, response, next) => {
  const error: Error = new Error('Not Found');
  error.status = 404;
  next(error);
});

// development error handler
// will print stacktrace
if (process.env.NODE_ENV === 'development') {
  app.use(
    (
      error: Error,
      request: express.Request,
      response: express.Response,
      next: express.NextFunction
    ) =>
      response.status(error.status || 500).json({
        status: 'error',
        message: error.message,
        error: error,
      })
  );
}

// production error handler
// no stacktrace leaked to user
if (process.env.NODE_ENV === 'production') {
  app.use(
    (
      error: Error,
      request: express.Request,
      response: express.Response,
      next: express.NextFunction
    ) =>
      response.status(error.status || 500).json({
        status: error.status,
        message: error.message,
      })
  );
}

// endregion

// region ======== Startup Server ========

// tslint:disable:no-console
const server: Server = app.listen(port, (error: Error) => {
  if (error) {
    console.log(error);

    return;
  }
  console.log(`  Listening at http://localhost:${port} in ${process.env.NODE_ENV} mode.`);
  console.log('  Press CTRL+C to stop\n');
});

export default server;

// endregion
