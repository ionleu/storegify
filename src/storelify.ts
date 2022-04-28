/**
 * @file Manage all functionalities of Storelify package
 * @author Ion Leu <ion.leu@gmail.com>
 * @version 1.0.2
 */

import { ObjectModel, PropertyValue } from "./models";
import { isEmpty, parse, stringify } from "./utils";

const storage = localStorage || window.localStorage;

/**
 * @TODO
 * Add methods bellow:
 * - size: return total length of properties
 * - keys: return an array of properties names
 * - has: return an boolean flag if a property key already exist
 */
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
    let parsedStorage: ObjectModel | null = this.getJSON()

    /* Check to see if this is the first time we set something in or not */
    if (!parsedStorage) {
      parsedStorage = {};
      parsedStorage[key] = value;
    } else {
      parsedStorage[key] = value;
    }

    this._setStorage(parsedStorage)
  }

  /**
   * @name get
   * @description
   * Return passed key's value if exists
   *
   * @param {string} key - A string containing the name of the key you want to retrieve the value of.
   * 
   * @returns {PropertyValue | undefined} Constructed key's value
   *
   * @since 1.0.0
   */
  get(key: string): PropertyValue | undefined {
    let parsedStorage: ObjectModel | null = this.getJSON()

    if (!parsedStorage || isEmpty(parsedStorage)) return undefined;

    return parsedStorage[key];
  }

  remove(key: string) {
    let currentLocalStorage = JSON.parse(localStorage.getItem(this._envName));

    if (!currentLocalStorage) {
      currentLocalStorage = {};
    } else {
      delete currentLocalStorage[key];
    }

    localStorage.setItem(this._envName, JSON.stringify(currentLocalStorage));
  }

  clearAll() {
    let currentLocalStorage = JSON.parse(localStorage.getItem(this._envName));

    currentLocalStorage = {};

    localStorage.setItem(this._envName, JSON.stringify(currentLocalStorage));
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
   * @returns {PropertyValue | undefined} Constructed key's value
   *
   * @since 1.0.2
   */
  private _getJSON() {
   return parse(storage.getItem(this._namespace););
  }
}
