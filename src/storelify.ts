import { isEmpty } from "./utils";

export class Storelify {
  _envName: string;

  constructor(envName: string) {
    this._envName = envName;
  }

  /* The localStorageService stores properties in the _envName object in order to keep things tidy. 
  When you set/get/remove a property you only have to specify the property name (and value if you 
    are using the setItem function), and the service will automatically add it to the _envName localStorage object. 
    It will create the object if it is not yet created */

  setItem(key: string, value: any) {
    let currentLocalStorage = JSON.parse(localStorage.getItem(this._envName));

    /* Check to see if this is the first time we set something in or not */
    if (!currentLocalStorage) {
      currentLocalStorage = {};
      currentLocalStorage[key] = value;
    } else {
      currentLocalStorage[key] = value;
    }

    localStorage.setItem(this._envName, JSON.stringify(currentLocalStorage));
  }

  getItem(key: string) {
    const currentLocalStorage = JSON.parse(localStorage.getItem(this._envName));

    if (!currentLocalStorage || isEmpty(currentLocalStorage)) return undefined;

    return currentLocalStorage[key];
  }

  removeItem(key: string) {
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
