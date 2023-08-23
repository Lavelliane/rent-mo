import express from 'express';
import { createListing, getAllListings, updateListing } from '../controllers/listingController';


const router = express.Router();

router.route('/listing/create').post(createListing);
router.route('/listings').get(getAllListings)
router.route('/listing/:id').patch(updateListing)

export default router;
