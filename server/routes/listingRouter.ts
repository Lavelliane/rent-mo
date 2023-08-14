import express from 'express';
import { createListing } from '../controllers/listingController';


const router = express.Router();

router.route('/listing/create').post(createListing);

export default router;
