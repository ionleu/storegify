
<a name="readmemd"></a>

storelify / [Exports](#modulesmd)

# storelify

Storelify is a front-end package that help you to storage all data into one localStorage object in order to keep things tidy.

Storelify stores properties in the `_namespace` object in order to keep things tidy. When you set/get/remove/clearAll a property you only have to specify the property name (and value if you are using the `set` function), and the service will automatically add it to the `_namespace` local storage object. It will create the object if it is not yet created.

Before: <br />
<img src="./assets/before.png" />

After: <br />
<img src="./assets/after.png" />

## Usage

```sh
npm i -S storelify
```

Now, you should be able to use Storelify in your components.

Example:

```ts
import { Storelify } from "storelify";

// Don't forget to pass an env variable name where all properties will be saved, on initialization.
const storelify = new Storelify("__fmb_dev");

storelify.set("__enable_mock", true);
console.log("Is mock enabled?", storelify.get("__enable_mock")); // true
```

Avalaiable methods:

```ts
class Storelify {
  set(key: string, value: PropertyValue): void;
  get(key: string): PropertyValue | undefined;
  remove(key: string): void;
  clearAll(): void;
}
```

> **More detalied documentation [here](DOCUMENTATION.md)**

This project includes:

- [TypeScript](https://www.typescriptlang.org/)
- [Rollup](https://rollupjs.org/)
- [Microsoft API Extractor](https://api-extractor.com/)
- [TypeDoc](https://typedoc.org/)

# Classes


<a name="classesstorelifymd"></a>

[storelify](#readmemd) / [Exports](#modulesmd) / Storelify

## Class: Storelify

### Table of contents

#### Constructors

- [constructor](#constructor)

#### Properties

- [\_namespace](#_namespace)

#### Methods

- [\_getJSON](#_getjson)
- [\_setStorage](#_setstorage)
- [clearAll](#clearall)
- [get](#get)
- [has](#has)
- [keys](#keys)
- [remove](#remove)
- [set](#set)
- [size](#size)

### Constructors

#### constructor

• **new Storelify**(`namespace`)

##### Parameters

| Name | Type |
| :------ | :------ |
| `namespace` | `string` |

##### Defined in

[storelify.ts:15](https://github.com/ionleu/storegify/blob/0ef5409/src/storelify.ts#L15)

### Properties

#### \_namespace

• `Private` **\_namespace**: `string`

##### Defined in

[storelify.ts:13](https://github.com/ionleu/storegify/blob/0ef5409/src/storelify.ts#L13)

### Methods

#### \_getJSON

▸ `Private` **_getJSON**(): `ObjectModel`

**`name`** getJSON

**`description`**
Return JSON object of current local storage

**`since`** 1.0.2

##### Returns

`ObjectModel`

Constructed key's value

##### Defined in

[storelify.ts:169](https://github.com/ionleu/storegify/blob/0ef5409/src/storelify.ts#L169)

___

#### \_setStorage

▸ `Private` **_setStorage**(`parsedStorage`): `void`

**`name`** setStorage

**`description`**
Set localStorage namespace's value in string format

**`since`** 1.0.2

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parsedStorage` | `ObjectModel` | Object model in JSON format |

##### Returns

`void`

##### Defined in

[storelify.ts:153](https://github.com/ionleu/storegify/blob/0ef5409/src/storelify.ts#L153)

___

#### clearAll

▸ **clearAll**(): `void`

**`name`** clearAll

**`description`**
Clear local storage by emptying it

**`since`** 1.0.0

##### Returns

`void`

##### Defined in

[storelify.ts:90](https://github.com/ionleu/storegify/blob/0ef5409/src/storelify.ts#L90)

___

#### get

▸ **get**(`key`): `undefined` \| `PropertyValue`

**`name`** get

**`description`**
Return passed key's value if exists

**`since`** 1.0.0

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` | A string containing the name of the key you want to retrieve the value of |

##### Returns

`undefined` \| `PropertyValue`

Constructed key's value

##### Defined in

[storelify.ts:54](https://github.com/ionleu/storegify/blob/0ef5409/src/storelify.ts#L54)

___

#### has

▸ **has**(`key`): `boolean`

**`name`** has

**`description`**
Return an boolean flag if a property key already exist

**`since`** 1.1.0

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` | A string containing the name of the key you want to check |

##### Returns

`boolean`

Boolean flag

##### Defined in

[storelify.ts:137](https://github.com/ionleu/storegify/blob/0ef5409/src/storelify.ts#L137)

___

#### keys

▸ **keys**(): `string`[]

**`name`** keys

**`description`**
Return an array of properties names in the local store namespace

**`since`** 1.1.0

##### Returns

`string`[]

Array of key's name

##### Defined in

[storelify.ts:120](https://github.com/ionleu/storegify/blob/0ef5409/src/storelify.ts#L120)

___

#### remove

▸ **remove**(`key`): `void`

**`name`** remove

**`description`**
Remove passed key from the local storage

**`since`** 1.0.0

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` | A string containing the name of the key you want to delete |

##### Returns

`void`

##### Defined in

[storelify.ts:71](https://github.com/ionleu/storegify/blob/0ef5409/src/storelify.ts#L71)

___

#### set

▸ **set**(`key`, `value`): `void`

**`name`** set

**`description`**
Add key and value to the storage, or update the key's value if already exists

**`since`** 1.0.0

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` | A string containing the name of the key you want to create/update |
| `value` | `PropertyValue` | A string containing the value you want to give the key you are creating/updating |

##### Returns

`void`

##### Defined in

[storelify.ts:29](https://github.com/ionleu/storegify/blob/0ef5409/src/storelify.ts#L29)

___

#### size

▸ **size**(): `number`

**`name`** size

**`description`**
Return total number of proprieties stored in the local store namespace

**`since`** 1.1.0

##### Returns

`number`

Total number of proprieties

##### Defined in

[storelify.ts:107](https://github.com/ionleu/storegify/blob/0ef5409/src/storelify.ts#L107)


<a name="modulesmd"></a>

[storelify](#readmemd) / Exports

# storelify

## Table of contents

### Classes

- [Storelify](#classesstorelifymd)
