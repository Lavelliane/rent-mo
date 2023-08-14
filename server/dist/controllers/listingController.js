"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getListingsByUser = exports.getAllListings = exports.createListing = void 0;
const Listing_1 = __importDefault(require("../models/Listing"));
const http_status_codes_1 = require("http-status-codes");
const createListing = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const { brand, model, street, city, mobileNumber, state, country, zipCode, licensePlateNumber, carRegistrationNumber, carAvailability, vehiclePhotos, } = req.body;
    try {
        const newListing = new Listing_1.default({
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
            user: (_a = req.user) === null || _a === void 0 ? void 0 : _a.userId
        });
        const listing = yield Listing_1.default.create(newListing);
        res.status(http_status_codes_1.StatusCodes.CREATED).json({ listing });
    }
    catch (error) {
        res.status(500).json({ error: 'Error creating listing' });
    }
});
exports.createListing = createListing;
const getAllListings = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listings = yield Listing_1.default.find();
    return res.status(http_status_codes_1.StatusCodes.OK).json({ listings });
});
exports.getAllListings = getAllListings;
const getListingsByUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _b;
    const listingsByUser = yield Listing_1.default.find({ user: (_b = req.user) === null || _b === void 0 ? void 0 : _b.userId });
    return res.status(http_status_codes_1.StatusCodes.OK).json({ listingsByUser });
});
exports.getListingsByUser = getListingsByUser;
//# sourceMappingURL=listingController.js.map