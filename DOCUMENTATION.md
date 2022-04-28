[storelify](../README.md) / [Exports](../modules.md) / Storelify

# Class: Storelify

**`todo`**
Add methods bellow:
- size: return total length of properties
- keys: return an array of properties names
- has: return an boolean flag if a property key already exist

## Table of contents

### Constructors

- [constructor](Storelify.md#constructor)

### Properties

- [\_namespace](Storelify.md#_namespace)

### Methods

- [\_getJSON](Storelify.md#_getjson)
- [\_setStorage](Storelify.md#_setstorage)
- [clearAll](Storelify.md#clearall)
- [get](Storelify.md#get)
- [remove](Storelify.md#remove)
- [set](Storelify.md#set)

## Constructors

### constructor

• **new Storelify**(`namespace`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `namespace` | `string` |

#### Defined in

[storelify.ts:22](https://github.com/ionleu/storegify/blob/4ccad23/src/storelify.ts#L22)

## Properties

### \_namespace

• `Private` **\_namespace**: `string`

#### Defined in

[storelify.ts:20](https://github.com/ionleu/storegify/blob/4ccad23/src/storelify.ts#L20)

## Methods

### \_getJSON

▸ `Private` **_getJSON**(): `undefined` \| `ObjectModel`

**`name`** getJSON

**`description`**
Return JSON object of current local storage

**`since`** 1.0.2

#### Returns

`undefined` \| `ObjectModel`

Constructed key's value

#### Defined in

[storelify.ts:131](https://github.com/ionleu/storegify/blob/4ccad23/src/storelify.ts#L131)

___

### \_setStorage

▸ `Private` **_setStorage**(`parsedStorage`): `void`

**`name`** setStorage

**`description`**
Set localStorage namespace's value in string format

**`since`** 1.0.2

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parsedStorage` | `ObjectModel` | Object model in JSON format |

#### Returns

`void`

#### Defined in

[storelify.ts:115](https://github.com/ionleu/storegify/blob/4ccad23/src/storelify.ts#L115)

___

### clearAll

▸ **clearAll**(): `void`

**`name`** clearAll

**`description`**
Clear local storage by emptying it

**`since`** 1.0.0

#### Returns

`void`

#### Defined in

[storelify.ts:97](https://github.com/ionleu/storegify/blob/4ccad23/src/storelify.ts#L97)

___

### get

▸ **get**(`key`): `undefined` \| `PropertyValue`

**`name`** get

**`description`**
Return passed key's value if exists

**`since`** 1.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` | A string containing the name of the key you want to retrieve the value of |

#### Returns

`undefined` \| `PropertyValue`

Constructed key's value

#### Defined in

[storelify.ts:61](https://github.com/ionleu/storegify/blob/4ccad23/src/storelify.ts#L61)

___

### remove

▸ **remove**(`key`): `void`

**`name`** remove

**`description`**
Remove passed key from the local storage

**`since`** 1.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` | A string containing the name of the key you want to delete |

#### Returns

`void`

#### Defined in

[storelify.ts:78](https://github.com/ionleu/storegify/blob/4ccad23/src/storelify.ts#L78)

___

### set

▸ **set**(`key`, `value`): `void`

**`name`** set

**`description`**
Add key and value to the storage, or update the key's value if already exists

**`since`** 1.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` | A string containing the name of the key you want to create/update |
| `value` | `PropertyValue` | A string containing the value you want to give the key you are creating/updating |

#### Returns

`void`

#### Defined in

[storelify.ts:36](https://github.com/ionleu/storegify/blob/4ccad23/src/storelify.ts#L36)
