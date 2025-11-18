import { Router } from 'express';
import multer from 'multer';
import CategoryController from './app/models/controllers/CategoryController.js';
import ProductController from './app/models/controllers/ProductController.js';
import SessionController from './app/models/controllers/SessionController.js';
import UserController from './app/models/controllers/UserController.js';
import multerConfig from './Config/multer.cjs';
import authMiddleware from './middleware/auth.js';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/users', UserController.store);
routes.post('/session', SessionController.store);

routes.use(authMiddleware);
routes.post('/products', authMiddleware, upload.single('file'), ProductController.store);
routes.put('/products/:id', authMiddleware, upload.single('file'), ProductController.update);



routes.get('/products', ProductController.index);

routes.post('/categories', authMiddleware, upload.single('file'), CategoryController.store);
routes.put('/categories/:id', authMiddleware, upload.single('file'), CategoryController.update);
routes.get('/categories', CategoryController.index);


export default routes;
