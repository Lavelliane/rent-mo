import express from 'express';
import { createListing, getAllListings, updateListing, getListingsByUser } from '../controllers/listingController';
import authenticateUser from '../middleware/auth';

const router = express.Router();

router.route('/listing/create').post(authenticateUser, createListing);
router.route('/listing/my-listings').get(authenticateUser, getListingsByUser);
router.route('/listings').get(getAllListings);
router.route('/listing/:id').patch(authenticateUser, updateListing);

export default router;
