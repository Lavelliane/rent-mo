import express from 'express';
import { createBooking } from '../controllers/bookingsController';
import authenticateUser from '../middleware/auth';

const router = express.Router();

router.route('/new/rental').post(createBooking);

export default router;
