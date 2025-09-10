import { Router } from 'express';
import { stripeWebhook } from '../controllers/webhook.controller';
import bodyParser from 'body-parser';

const r = Router();
// Stripe requires the raw body to validate signatures
r.post('/webhook', bodyParser.raw({ type: 'application/json' }), (req, _res, next) => {
  (req as any).rawBody = (req as any).body; // pass to controller
  next();
}, stripeWebhook);

export default r;