import { Request, Response } from "express";
import Listing from "../models/Listing";
import { StatusCodes } from "http-status-codes";
import blobServiceClient from "../utils/azureStorageConfig";
import multer from "multer";
import { v4 as uuidv4 } from "uuid";


// Configure Multer for image upload

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
	  //POSTMAN: carAvailability: JSON.parse
      carAvailability,
      vehiclePhotos: [""],
      user: req.user?.userId,
    });

    const listing = await Listing.create(newListing);

    const containerClient = blobServiceClient.getContainerClient("listing-images");
    const userId = req.user?.userId;
    const listingId = listing._id.toString();

    const { vehiclePhotos }: any = req.files as unknown as Express.Multer.File[];

    const imagePromises = vehiclePhotos.map(async (image: any) => {
      const imageId = uuidv4(); // Generate a unique filename
      const blobClient = containerClient.getBlockBlobClient(
        `${userId}/${listingId}/${imageId}`
      );

      await blobClient.upload(image.data.buffer, image.data.length, {
		blobHTTPHeaders: { blobContentType: image.mimetype },
	  });
	  

      return blobClient.url;
    });

    const uploadedImageUrls = await Promise.all(imagePromises);

    listing.vehiclePhotos = uploadedImageUrls;
    await listing.save();

    res.status(StatusCodes.CREATED).json({ listing });
  } catch (error) {
    console.log(error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: "Error creating listing" });
  }
};

export const getAllListings = async (req: Request, res: Response) => {
  const listings = await Listing.find();
  return res.status(StatusCodes.OK).json({ listings });
};

export const getListingsByUser = async (req: Request, res: Response) => {
  const listingsByUser = await Listing.find({ user: req.user?.userId });
  return res.status(StatusCodes.OK).json({ listingsByUser });
};
