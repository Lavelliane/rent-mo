"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authController_js_1 = require("../controllers/authController.js");
const passport_1 = __importDefault(require("passport"));
const router = express_1.default.Router();
router.route('/register').post(authController_js_1.register);
router.route('/login').post(authController_js_1.login);
router.route('/updateUser').post(authController_js_1.updateUser);
router.route('/google').get(passport_1.default.authenticate("google", {
    scope: ["email", "profile"],
}));
router.route("/google/redirect").get(passport_1.default.authenticate("google", {
    successRedirect: '/',
    failureRedirect: '/landing'
}));
exports.default = router;
