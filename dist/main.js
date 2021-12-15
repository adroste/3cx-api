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
Object.defineProperty(exports, "__esModule", { value: true });
exports.createClient = void 0;
const axios_1 = require("axios");
const util_1 = require("./util");
/**
 * Create logged in HTTP client
 * @param {string} baseURL
 * @param {ICredentials} credentials
 * @returns {Promise<IHttpClient>}
 */
function createClient(baseURL, credentials) {
    return __awaiter(this, void 0, void 0, function* () {
        const http = axios_1.default.create({ baseURL, withCredentials: true });
        if ((yield (0, util_1.login)(http, credentials)) !== 'AuthSuccess') {
            throw new Error('Invalid credentials');
        }
        return http;
    });
}
exports.createClient = createClient;
