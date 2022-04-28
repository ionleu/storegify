import { ObjectModel } from "../models";

/**
 * @name isEmpty
 * @description
 * Return if passed object is empty or not by checking length of object keys
 *
 * @param {ObjectModel} obj The wanted object to check
 * @returns {boolean} A boolean flag
 */
export const isEmpty = (obj: ObjectModel): boolean => !Object.keys(obj).length;
