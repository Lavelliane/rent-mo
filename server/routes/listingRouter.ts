import express from 'express';
import { createBooking } from '../controllers/listingController';
import authenticateUser from '../middleware/auth';

const router = express.Router();

router.route('/new/rental').post(createBooking);

export default router;
