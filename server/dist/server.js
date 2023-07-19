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
require("express-async-errors");
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const morgan_1 = __importDefault(require("morgan"));
const not_found_js_1 = __importDefault(require("./middleware/not-found.js"));
const error_handler_js_1 = __importDefault(require("./middleware/error-handler.js"));
const connect_js_1 = __importDefault(require("./db/connect.js"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const helmet_1 = __importDefault(require("helmet"));
const xss_clean_1 = __importDefault(require("xss-clean"));
const cookie_session_1 = __importDefault(require("cookie-session"));
const authRoutes_js_1 = __importDefault(require("./routes/authRoutes.js"));
const bookingRouter_js_1 = __importDefault(require("./routes/bookingRouter.js"));
const auth_js_1 = __importDefault(require("./middleware/auth.js"));
const passport_1 = __importDefault(require("passport"));
require("./config/passport");
dotenv_1.default.config();
const app = (0, express_1.default)();
app.get('/api/v1', (req, res) => {
    res.status(200).json({ msg: "Hello" });
});
if (process.env.NODE_ENV !== 'production') {
    app.use((0, morgan_1.default)('dev'));
}
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
app.use((0, helmet_1.default)());
app.use((0, xss_clean_1.default)());
app.use((0, cookie_session_1.default)({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [process.env.JWT_SECRET],
}));
// initialize passport
app.use(passport_1.default.initialize());
app.use(passport_1.default.session());
app.use('/api/v1/auth', authRoutes_js_1.default);
app.use('/api/v1/booking', auth_js_1.default, bookingRouter_js_1.default);
app.use(not_found_js_1.default);
app.use(error_handler_js_1.default);
const port = 5000;
const start = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, connect_js_1.default)(process.env.MONGO_URL);
        app.listen(port, () => {
            console.log(`app listening at http://localhost:${port}`);
        });
    }
    catch (error) {
        console.log(error);
    }
});
start();
