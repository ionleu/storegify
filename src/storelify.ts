/**
 * @file Manage all functionalities of Storelify package
 * @author Ion Leu <ion.leu@gmail.com>
 * @version 1.2.1
 */

import { ObjectModel, PropertyValue } from "./models";
import { isEmpty, parse, stringify } from "./utils";

const storage = localStorage || window.localStorage;

export class Storelify {
  private _namespace: string;

  constructor(namespace: string) {
    this._namespace = namespace;
  }

  /**
   * @name set
   * @description
   * Add key and value to the storage, or update the key's value if already exists
   *
   * @param {string} key - A string containing the name of the key you want to create/update
   * @param {PropertyValue} value - A string containing the value you want to give the key you are creating/updating
   *
   * @since 1.0.0
   */
  set(key: string, value: PropertyValue) {
    let parsedStorage: ObjectModel = this._getJSON();

    /* Check to see if this is the first time we set something in or not */
    if (!parsedStorage) {
      parsedStorage = {};
      parsedStorage[key] = value;
    } else {
      parsedStorage[key] = value;
    }

    this._setStorage(parsedStorage);
  }

  /**
   * @name get
   * @description
   * Return passed key's value if exists
   *
   * @param {string} key - A string containing the name of the key you want to retrieve the value of
   *
   * @returns {PropertyValue | undefined} Constructed key's value
   *
   * @since 1.0.0
   */
  get(key: string): PropertyValue | undefined {
    let parsedStorage: ObjectModel = this._getJSON();

    if (!parsedStorage || isEmpty(parsedStorage)) return undefined;

    return parsedStorage[key];
  }

  /**
   * @name remove
   * @description
   * Remove passed key from the local storage
   *
   * @param {string} key - A string containing the name of the key you want to delete
   *
   * @since 1.0.0
   */
  remove(key: string) {
    let parsedStorage: ObjectModel = this._getJSON();

    if (!parsedStorage) {
      parsedStorage = {};
    } else {
      delete parsedStorage[key];
    }

    this._setStorage(parsedStorage);
  }

  /**
   * @name clearAll
   * @description
   * Clear local storage by emptying it
   *
   * @since 1.0.0
   */
  clearAll() {
    let parsedStorage: ObjectModel = this._getJSON();

    parsedStorage = {};

    this._setStorage(parsedStorage);
  }

  /**
   * @name size
   * @description
   * Return total number of proprieties stored in the local store namespace
   *
   * @returns {number} Total number of proprieties
   *
   * @since 1.1.0
   */
  size() {
    return this.keys().length;
  }

  /**
   * @name keys
   * @description
   * Return an array of properties names in the local store namespace
   *
   * @returns {string[]} Array of key's name
   *
   * @since 1.1.0
   */
  keys() {
    let parsedStorage: ObjectModel = this._getJSON();

    return Object.keys(parsedStorage);
  }

  /**
   * @name has
   * @description
   * Return an boolean flag if a property key already exist
   *
   * @param {string} key A string containing the name of the key you want to check
   *
   * @returns {string[]} Boolean flag
   *
   * @since 1.1.0
   */
  has(key: string) {
    const keys = this.keys();

    return keys.includes(key);
  }

  /**
   * @private
   * @name setStorage
   * @description
   * Set localStorage namespace's value in string format
   *
   * @param {ObjectModel} parsedStorage - Object model in JSON format
   *
   * @since 1.0.2
   */
  private _setStorage(parsedStorage: ObjectModel) {
    const stringifiedStorage: string = stringify(parsedStorage);

    storage.setItem(this._namespace, stringifiedStorage);
  }

  /**
   * @private
   * @name getJSON
   * @description
   * Return JSON object of current local storage
   *
   * @returns {PropertyValue | object} Constructed key's value
   *
   * @since 1.0.2
   */
  private _getJSON() {
    const currentStorage = storage.getItem(this._namespace);

    if (!currentStorage) return {};

    return parse(currentStorage);
  }
}
