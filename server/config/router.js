import { Router } from 'express';
import DomainRouter from '../domain/router';

const router = Router();

router.use('/domains', DomainRouter);

export default router;
