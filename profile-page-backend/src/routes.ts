import { Router, Request, Response } from 'express';



const routes = Router()

export default routes;

routes.get('', (req, res) => {
  res.status(200).json({
    status: true,
    message: 'SUCCESS FROM API',
  });
});