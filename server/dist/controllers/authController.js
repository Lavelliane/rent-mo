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
exports.updateUser = exports.login = exports.register = void 0;
const User_1 = __importDefault(require("../models/User"));
const errors_1 = require("../errors");
const http_status_codes_1 = require("http-status-codes");
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { firstName, lastName, email, password, country, state, city, phoneNumber } = req.body;
        if (!firstName || !lastName || !email || !password || !country || !state || !city || !phoneNumber) {
            throw new errors_1.BadRequestError("Please provide all values");
        }
        const userAlreadyExists = yield User_1.default.findOne({ email });
        if (userAlreadyExists) {
            throw new errors_1.BadRequestError("User already exists");
        }
        const user = yield User_1.default.create({
            firstName,
            lastName,
            email,
            password,
            country,
            state,
            city,
            phoneNumber
        });
        const token = user.createJWT();
        res
            .status(http_status_codes_1.StatusCodes.CREATED)
            .json({
            user: {
                email: user.email,
                name: user.name,
                location: `${user.city}, ${user.state}, ${user.country}`
            },
            token,
        });
    }
    catch (error) {
        throw new errors_1.BadRequestError("Invalid credentials. Please try again");
    }
});
exports.register = register;
const login = (req, res) => {
    res.send("login user");
};
exports.login = login;
const updateUser = (req, res) => {
    res.send("updateUser");
};
exports.updateUser = updateUser;
