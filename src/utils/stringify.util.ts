import { ObjectModel, PropertyValue } from "../models";

/**
 * @name stringify
 * @description
 * Return constructed string described by passed value or object
 *
 * @param {string} value The wanted object to stringify
 * @returns {string} Constructed string
 */
export const stringify = (value: ObjectModel): string => JSON.stringify(value);
