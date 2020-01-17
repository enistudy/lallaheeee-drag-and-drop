import { Router } from 'express';
import {
  preloadHandler,
  postHandler,
  getHandler,
  putHandler,
  deleteHandler,
} from './controller';

const router = Router();

router.post('/', postHandler);
router.param('domainId', preloadHandler);

router
  .route('/:domainId')
  .get(getHandler)
  .put(putHandler)
  .delete(deleteHandler);

export default router;
