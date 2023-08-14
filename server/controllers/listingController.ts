import { Request, Response } from 'express';
import Listing from '../models/Listing';
import { StatusCodes } from 'http-status-codes';

export const createListing = async (req: Request, res: Response) => {
	const {
		brand,
		model,
		street,
		city,
		mobileNumber,
		state,
		country,
		zipCode,
		licensePlateNumber,
		carRegistrationNumber,
		carAvailability,
		vehiclePhotos,
	  } = req.body;

	  try {
		const newListing = new Listing({
		  brand,
		  model,
		  street,
		  city,
		  mobileNumber,
		  state,
		  country,
		  zipCode,
		  licensePlateNumber,
		  carRegistrationNumber,
		  carAvailability,
		  vehiclePhotos,
		  user: req.user?.userId
		});
	
		const listing = await Listing.create(newListing)
		res.status(StatusCodes.CREATED).json({listing})
	  } catch (error) {
		res.status(500).json({ error: 'Error creating listing' });
	  }
};

export const getAllListings = async (req: Request, res: Response) => {
	const listings = await Listing.find()
	return res.status(StatusCodes.OK).json({ listings })
}

export const getListingsByUser = async (req: Request, res: Response) => {
	const listingsByUser = await Listing.find({ user: req.user?.userId })
	return res.status(StatusCodes.OK).json({ listingsByUser })
}
