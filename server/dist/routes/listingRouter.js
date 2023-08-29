"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const listingController_1 = require("../controllers/listingController");
const router = express_1.default.Router();
router.route('/listing/create').post(listingController_1.createListing);
router.route('/listings').get(listingController_1.getAllListings);
router.route('/listing/:id').patch(listingController_1.updateListing).delete(listingController_1.deleteListing);
exports.default = router;
//# sourceMappingURL=listingRouter.js.map