import express from 'express';
import fileRouteConfig from './Config/fileRoutes.cjs';
import routes from './routes.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/product-file', fileRouteConfig);
app.use('/categoy-file', fileRouteConfig);

app.use(routes);
export default app;
