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
   * Add key and value to the storage, or update the key's value if already exists.
   *
   * @param {string} key - The wanted number to convert
   * @param {PropertyValue} value - The wanted number to convert
   * @returns {string} - The converted number into string
   *
   * @since 1.0.0
   */
  set(key: string, value: PropertyValue) {
    const currentStorage: string | null = storage.getItem(this._namespace);

    let parsedStorage: ObjectModel | null = parse(currentStorage);

    /* Check to see if this is the first time we set something in or not */
    if (!parsedStorage) {
      parsedStorage = {};
      parsedStorage[key] = value;
    } else {
      parsedStorage[key] = value;
    }

    const stringifiedStorage: string = stringify(parsedStorage);

    storage.setItem(this._namespace, stringifiedStorage);
  }

  get(key: string) {
    const currentLocalStorage = JSON.parse(localStorage.getItem(this._envName));

    if (!currentLocalStorage || isEmpty(currentLocalStorage)) return undefined;

    return currentLocalStorage[key];
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
}
