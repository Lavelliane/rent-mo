import { Request, Response } from "express";
import Listing from "../models/Listing";
import { StatusCodes } from "http-status-codes";
import blobServiceClient from "../utils/azureStorageConfig";
import multer from "multer";
import { v4 as uuidv4 } from "uuid";
import { NotFoundError } from "../errors";
import checkPermissions from "../utils/checkPermissions";

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
    price,
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
      price,
      zipCode,
      licensePlateNumber,
      carRegistrationNumber,
      carAvailability: JSON.parse(carAvailability),
      //carAvailability,
      vehiclePhotos: [""],
      user: req.user?.userId,
    });

    const listing = await Listing.create(newListing);

    const containerClient =
      blobServiceClient.getContainerClient("listing-images");
    const userId = req.user?.userId;
    const listingId = listing._id.toString();

    const { vehiclePhotos }: any =
      req.files as unknown as Express.Multer.File[];

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

export const updateListing = async (req: Request, res: Response) => {
  const listingId = req.params.id; // Assuming you're passing the listing ID as a URL parameter

  try {
    let listing = (await Listing.findById(listingId)) as any;

    if (!listing) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ error: "Listing not found" });
    }

    // Combine both req.body and req.files data
    const formData: any = { ...req.body };
    const vehiclePhotos: any = req.files as unknown as Express.Multer.File[];

    formData.vehiclePhotos = vehiclePhotos;

    const { vehiclePhotosArray } = formData.vehiclePhotos;

    for (const [key, value] of Object.entries(formData)) {
      if (key === "carAvailability") {
        if (typeof value === "string") {
          listing[key] = JSON.parse(value);
        } else {
          throw new Error(`Invalid value for ${key}`);
        }
      } else if (key === "vehiclePhotos") {
        const userId = req.user?.userId;
        const containerClient =
          blobServiceClient.getContainerClient("listing-images");
        const imagePromises = vehiclePhotosArray.map(async (image: any) => {
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
      } else {
        if (typeof value === "string") {
          listing[key] = value;
        } else {
          throw new Error(`Invalid value for ${key}`);
        }
      }
    }

    await listing.save();

    res.status(StatusCodes.OK).json({ listing });
  } catch (error) {
    console.log(error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: "Error updating listing" });
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
