import { Router } from 'express';
import { listBooks, getBook, upsertBook, deleteBook } from '../controllers/books.controller';
import { requireAuth } from '../middleware/auth';

const r = Router();

r.get('/', listBooks);
r.get('/:id', getBook);

// Admin-only (example guards)
r.post('/', requireAuth, upsertBook);
r.put('/:id', requireAuth, upsertBook);
r.delete('/:id', requireAuth, deleteBook);

export default r;