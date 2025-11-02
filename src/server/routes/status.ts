import { Router } from 'express';
import type { Request, Response } from 'express';

const router = Router();

router.get('/status', (_req: Request, res: Response) => {
  res.send({
    message: 'Server is running!',
    uptime: process.uptime(),
    memoryUsage: process.memoryUsage(),
  });
});

export default router;