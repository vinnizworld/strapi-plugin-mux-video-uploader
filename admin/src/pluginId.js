"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var package_json_1 = __importDefault(require("../../package.json"));
var pluginId = package_json_1.default.name.replace(/^strapi-plugin-/i, '');
exports.default = pluginId;
