import { ObjectModel } from "../models";

/**
 * @name parse
 * @description
 * Return constructed value or object described by passed string
 *
 * @param {string} value The wanted string to parse
 * @returns {ObjectModel} The object model
 */
export const parse = (value: string): ObjectModel => JSON.parse(value);
