# LookerApi31Reference.ColorCollectionApi

All URIs are relative to */api/3.1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**allColorCollections**](ColorCollectionApi.md#allColorCollections) | **GET** /color_collections | Get all Color Collections
[**colorCollection**](ColorCollectionApi.md#colorCollection) | **GET** /color_collections/{collection_id} | Get Color Collection by ID
[**colorCollectionsCustom**](ColorCollectionApi.md#colorCollectionsCustom) | **GET** /color_collections/custom | Get all Custom Color Collections
[**colorCollectionsStandard**](ColorCollectionApi.md#colorCollectionsStandard) | **GET** /color_collections/standard | Get all Standard Color Collections
[**createColorCollection**](ColorCollectionApi.md#createColorCollection) | **POST** /color_collections | Create ColorCollection
[**defaultColorCollection**](ColorCollectionApi.md#defaultColorCollection) | **GET** /color_collections/default | Get Default Color Collection
[**deleteColorCollection**](ColorCollectionApi.md#deleteColorCollection) | **DELETE** /color_collections/{collection_id} | Delete ColorCollection
[**setDefaultColorCollection**](ColorCollectionApi.md#setDefaultColorCollection) | **PUT** /color_collections/default | Set Default Color Collection
[**updateColorCollection**](ColorCollectionApi.md#updateColorCollection) | **PATCH** /color_collections/{collection_id} | Update Custom Color collection


<a name="allColorCollections"></a>
# **allColorCollections**
> [ColorCollection] allColorCollections(opts)

Get all Color Collections

### Get an array of all existing Color Collections Get a **single** color collection by id with [ColorCollection](#!/ColorCollection/color_collection)  Get all **standard** color collections with [ColorCollection](#!/ColorCollection/color_collections_standard)  Get all **custom** color collections with [ColorCollection](#!/ColorCollection/color_collections_custom)  **Note**: Only an API user with the Admin role can call this endpoint. Unauthorized requests will return &#x60;Not Found&#x60; (404) errors.

### Example
```javascript
var LookerApi31Reference = require('looker-node-api');

var apiInstance = new LookerApi31Reference.ColorCollectionApi();

var opts = {
  'fields': "fields_example" // String | Requested fields.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.allColorCollections(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fields** | **String**| Requested fields. | [optional]

### Return type

[**[ColorCollection]**](ColorCollection.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="colorCollection"></a>
# **colorCollection**
> ColorCollection colorCollection(collectionId, opts)

Get Color Collection by ID

### Get a Color Collection by ID  Use this to retrieve a specific Color Collection. Get a **single** color collection by id with [ColorCollection](#!/ColorCollection/color_collection)  Get all **standard** color collections with [ColorCollection](#!/ColorCollection/color_collections_standard)  Get all **custom** color collections with [ColorCollection](#!/ColorCollection/color_collections_custom)  **Note**: Only an API user with the Admin role can call this endpoint. Unauthorized requests will return &#x60;Not Found&#x60; (404) errors.

### Example
```javascript
var LookerApi31Reference = require('looker-node-api');

var apiInstance = new LookerApi31Reference.ColorCollectionApi();

var collectionId = "collectionId_example"; // String | Id of Color Collection

var opts = {
  'fields': "fields_example" // String | Requested fields.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.colorCollection(collectionId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **collectionId** | **String**| Id of Color Collection |
 **fields** | **String**| Requested fields. | [optional]

### Return type

[**ColorCollection**](ColorCollection.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="colorCollectionsCustom"></a>
# **colorCollectionsCustom**
> [ColorCollection] colorCollectionsCustom(opts)

Get all Custom Color Collections

### Get an array of all existing **Custom** Color Collections Get a **single** color collection by id with [ColorCollection](#!/ColorCollection/color_collection)  Get all **standard** color collections with [ColorCollection](#!/ColorCollection/color_collections_standard)  **Note**: Only an API user with the Admin role can call this endpoint. Unauthorized requests will return &#x60;Not Found&#x60; (404) errors.

### Example
```javascript
var LookerApi31Reference = require('looker-node-api');

var apiInstance = new LookerApi31Reference.ColorCollectionApi();

var opts = {
  'fields': "fields_example" // String | Requested fields.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.colorCollectionsCustom(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fields** | **String**| Requested fields. | [optional]

### Return type

[**[ColorCollection]**](ColorCollection.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="colorCollectionsStandard"></a>
# **colorCollectionsStandard**
> [ColorCollection] colorCollectionsStandard(opts)

Get all Standard Color Collections

### Get an array of all existing **Standard** Color Collections Get a **single** color collection by id with [ColorCollection](#!/ColorCollection/color_collection)  Get all **custom** color collections with [ColorCollection](#!/ColorCollection/color_collections_custom)  **Note**: Only an API user with the Admin role can call this endpoint. Unauthorized requests will return &#x60;Not Found&#x60; (404) errors.

### Example
```javascript
var LookerApi31Reference = require('looker-node-api');

var apiInstance = new LookerApi31Reference.ColorCollectionApi();

var opts = {
  'fields': "fields_example" // String | Requested fields.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.colorCollectionsStandard(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fields** | **String**| Requested fields. | [optional]

### Return type

[**[ColorCollection]**](ColorCollection.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createColorCollection"></a>
# **createColorCollection**
> ColorCollection createColorCollection(opts)

Create ColorCollection

### Create a custom color collection with the specified information  Creates a new custom color collection object, returning the details, including the created id.  **Update** an existing color collection with [Update Color Collection](#!/ColorCollection/update_color_collection)  **Permanently delete** an existing custom color collection with [Delete Color Collection](#!/ColorCollection/delete_color_collection)  **Note**: Only an API user with the Admin role can call this endpoint. Unauthorized requests will return &#x60;Not Found&#x60; (404) errors.

### Example
```javascript
var LookerApi31Reference = require('looker-node-api');

var apiInstance = new LookerApi31Reference.ColorCollectionApi();

var opts = {
  'body': new LookerApi31Reference.ColorCollection() // ColorCollection | ColorCollection
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createColorCollection(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ColorCollection**](ColorCollection.md)| ColorCollection | [optional]

### Return type

[**ColorCollection**](ColorCollection.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="defaultColorCollection"></a>
# **defaultColorCollection**
> ColorCollection defaultColorCollection()

Get Default Color Collection

### Get the default color collection  Use this to retrieve the default Color Collection.  Set the default color collection with [ColorCollection](#!/ColorCollection/set_default_color_collection)

### Example
```javascript
var LookerApi31Reference = require('looker-node-api');

var apiInstance = new LookerApi31Reference.ColorCollectionApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.defaultColorCollection(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**ColorCollection**](ColorCollection.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteColorCollection"></a>
# **deleteColorCollection**
> deleteColorCollection(collectionId)

Delete ColorCollection

### Delete a custom color collection by id  This operation permanently deletes the identified **Custom** color collection.  **Standard** color collections cannot be deleted  Because multiple color collections can have the same label, they must be deleted by ID, not name. **Note**: Only an API user with the Admin role can call this endpoint. Unauthorized requests will return &#x60;Not Found&#x60; (404) errors.

### Example
```javascript
var LookerApi31Reference = require('looker-node-api');

var apiInstance = new LookerApi31Reference.ColorCollectionApi();

var collectionId = "collectionId_example"; // String | Id of Color Collection


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteColorCollection(collectionId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **collectionId** | **String**| Id of Color Collection |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="setDefaultColorCollection"></a>
# **setDefaultColorCollection**
> ColorCollection setDefaultColorCollection(collectionId)

Set Default Color Collection

### Set the global default Color Collection by ID  Returns the new specified default Color Collection object. **Note**: Only an API user with the Admin role can call this endpoint. Unauthorized requests will return &#x60;Not Found&#x60; (404) errors.

### Example
```javascript
var LookerApi31Reference = require('looker-node-api');

var apiInstance = new LookerApi31Reference.ColorCollectionApi();

var collectionId = "collectionId_example"; // String | ID of color collection to set as default


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.setDefaultColorCollection(collectionId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **collectionId** | **String**| ID of color collection to set as default |

### Return type

[**ColorCollection**](ColorCollection.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateColorCollection"></a>
# **updateColorCollection**
> ColorCollection updateColorCollection(collectionId, body)

Update Custom Color collection

### Update a custom color collection by id. **Note**: Only an API user with the Admin role can call this endpoint. Unauthorized requests will return &#x60;Not Found&#x60; (404) errors.

### Example
```javascript
var LookerApi31Reference = require('looker-node-api');

var apiInstance = new LookerApi31Reference.ColorCollectionApi();

var collectionId = "collectionId_example"; // String | Id of Custom Color Collection

var body = new LookerApi31Reference.ColorCollection(); // ColorCollection | ColorCollection


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateColorCollection(collectionId, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **collectionId** | **String**| Id of Custom Color Collection |
 **body** | [**ColorCollection**](ColorCollection.md)| ColorCollection |

### Return type

[**ColorCollection**](ColorCollection.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

