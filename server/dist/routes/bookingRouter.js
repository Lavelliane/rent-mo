"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bookingsController_1 = require("../controllers/bookingsController");
const router = express_1.default.Router();
router.route('/new/rental').post(bookingsController_1.createBooking);
exports.default = router;
//# sourceMappingURL=bookingRouter.js.map