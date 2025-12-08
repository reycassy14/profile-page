import { Router, Request, Response } from 'express';
import authRouter from './controllers/authRoutes';



const routes = Router()

routes.use(authRouter)

export default routes;

routes.get('', (req, res) => {
  res.status(200).json({
    status: true,
    message: 'SUCCESS FROM API',
  });
});