# LookerApi31Reference.ContentApi

All URIs are relative to *https://analytics.kollectivecd.com:20000/api/3.1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**allContentMetadataAccesses**](ContentApi.md#allContentMetadataAccesses) | **GET** /content_metadata_access | Get All Content Metadata Accesses
[**allContentMetadatas**](ContentApi.md#allContentMetadatas) | **GET** /content_metadata | Get All Content Metadatas
[**contentFavorite**](ContentApi.md#contentFavorite) | **GET** /content_favorite/{content_favorite_id} | Get Favorite Content
[**contentMetadata**](ContentApi.md#contentMetadata) | **GET** /content_metadata/{content_metadata_id} | Get Content Metadata
[**contentValidation**](ContentApi.md#contentValidation) | **GET** /content_validation | Validate Content
[**createContentFavorite**](ContentApi.md#createContentFavorite) | **POST** /content_favorite | Create Favorite Content
[**createContentMetadataAccess**](ContentApi.md#createContentMetadataAccess) | **POST** /content_metadata_access | Create Content Metadata Access
[**deleteContentFavorite**](ContentApi.md#deleteContentFavorite) | **DELETE** /content_favorite/{content_favorite_id} | Delete Favorite Content
[**deleteContentMetadataAccess**](ContentApi.md#deleteContentMetadataAccess) | **DELETE** /content_metadata_access/{content_metadata_access_id} | Delete Content Metadata Access
[**searchContentFavorites**](ContentApi.md#searchContentFavorites) | **GET** /content_favorite/search | Search Favorite Contents
[**searchContentViews**](ContentApi.md#searchContentViews) | **GET** /content_view/search | Search Content Views
[**updateContentMetadata**](ContentApi.md#updateContentMetadata) | **PATCH** /content_metadata/{content_metadata_id} | Update Content Metadata
[**updateContentMetadataAccess**](ContentApi.md#updateContentMetadataAccess) | **PUT** /content_metadata_access/{content_metadata_access_id} | Update Content Metadata Access


<a name="allContentMetadataAccesses"></a>
# **allContentMetadataAccesses**
> [ContentMetaGroupUser] allContentMetadataAccesses(contentMetadataId, opts)

Get All Content Metadata Accesses

### All content metadata access records for a content metadata item. 

### Example
```javascript
var LookerApi31Reference = require('looker_api_31_reference');

var apiInstance = new LookerApi31Reference.ContentApi();

var contentMetadataId = 789; // Number | Id of content metadata

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
apiInstance.allContentMetadataAccesses(contentMetadataId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contentMetadataId** | **Number**| Id of content metadata | 
 **fields** | **String**| Requested fields. | [optional] 

### Return type

[**[ContentMetaGroupUser]**](ContentMetaGroupUser.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="allContentMetadatas"></a>
# **allContentMetadatas**
> [ContentMeta] allContentMetadatas(parentId, opts)

Get All Content Metadatas

### Get information about all content metadata in a space. 

### Example
```javascript
var LookerApi31Reference = require('looker_api_31_reference');

var apiInstance = new LookerApi31Reference.ContentApi();

var parentId = 789; // Number | Parent space of content.

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
apiInstance.allContentMetadatas(parentId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parentId** | **Number**| Parent space of content. | 
 **fields** | **String**| Requested fields. | [optional] 

### Return type

[**[ContentMeta]**](ContentMeta.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="contentFavorite"></a>
# **contentFavorite**
> ContentFavorite contentFavorite(contentFavoriteId, opts)

Get Favorite Content

### Get favorite content by its id

### Example
```javascript
var LookerApi31Reference = require('looker_api_31_reference');

var apiInstance = new LookerApi31Reference.ContentApi();

var contentFavoriteId = 789; // Number | Id of favorite content

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
apiInstance.contentFavorite(contentFavoriteId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contentFavoriteId** | **Number**| Id of favorite content | 
 **fields** | **String**| Requested fields. | [optional] 

### Return type

[**ContentFavorite**](ContentFavorite.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="contentMetadata"></a>
# **contentMetadata**
> ContentMeta contentMetadata(contentMetadataId, opts)

Get Content Metadata

### Get information about an individual content metadata record. 

### Example
```javascript
var LookerApi31Reference = require('looker_api_31_reference');

var apiInstance = new LookerApi31Reference.ContentApi();

var contentMetadataId = 789; // Number | Id of content metadata

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
apiInstance.contentMetadata(contentMetadataId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contentMetadataId** | **Number**| Id of content metadata | 
 **fields** | **String**| Requested fields. | [optional] 

### Return type

[**ContentMeta**](ContentMeta.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="contentValidation"></a>
# **contentValidation**
> ContentValidation contentValidation(opts)

Validate Content

### Validate All Content Requires Content Validation Labs Feature be enabled  Performs validation of all looks and dashboards Returns a list of errors found as well as metadata about the content validation run. 

### Example
```javascript
var LookerApi31Reference = require('looker_api_31_reference');

var apiInstance = new LookerApi31Reference.ContentApi();

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
apiInstance.contentValidation(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fields** | **String**| Requested fields. | [optional] 

### Return type

[**ContentValidation**](ContentValidation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createContentFavorite"></a>
# **createContentFavorite**
> ContentFavorite createContentFavorite(opts)

Create Favorite Content

### Create favorite content

### Example
```javascript
var LookerApi31Reference = require('looker_api_31_reference');

var apiInstance = new LookerApi31Reference.ContentApi();

var opts = { 
  'body': new LookerApi31Reference.ContentFavorite() // ContentFavorite | Favorite Content
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createContentFavorite(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ContentFavorite**](ContentFavorite.md)| Favorite Content | [optional] 

### Return type

[**ContentFavorite**](ContentFavorite.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createContentMetadataAccess"></a>
# **createContentMetadataAccess**
> ContentMetaGroupUser createContentMetadataAccess(opts)

Create Content Metadata Access

### Create content metadata access. 

### Example
```javascript
var LookerApi31Reference = require('looker_api_31_reference');

var apiInstance = new LookerApi31Reference.ContentApi();

var opts = { 
  'body': new LookerApi31Reference.ContentMetaGroupUser() // ContentMetaGroupUser | Content Metadata Access
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createContentMetadataAccess(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ContentMetaGroupUser**](ContentMetaGroupUser.md)| Content Metadata Access | [optional] 

### Return type

[**ContentMetaGroupUser**](ContentMetaGroupUser.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteContentFavorite"></a>
# **deleteContentFavorite**
> &#39;String&#39; deleteContentFavorite(contentFavoriteId)

Delete Favorite Content

### Delete favorite content

### Example
```javascript
var LookerApi31Reference = require('looker_api_31_reference');

var apiInstance = new LookerApi31Reference.ContentApi();

var contentFavoriteId = 789; // Number | Id of favorite content


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteContentFavorite(contentFavoriteId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contentFavoriteId** | **Number**| Id of favorite content | 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteContentMetadataAccess"></a>
# **deleteContentMetadataAccess**
> &#39;String&#39; deleteContentMetadataAccess(contentMetadataAccessId)

Delete Content Metadata Access

### Remove content metadata access. 

### Example
```javascript
var LookerApi31Reference = require('looker_api_31_reference');

var apiInstance = new LookerApi31Reference.ContentApi();

var contentMetadataAccessId = 789; // Number | Id of content metadata access


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteContentMetadataAccess(contentMetadataAccessId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contentMetadataAccessId** | **Number**| Id of content metadata access | 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="searchContentFavorites"></a>
# **searchContentFavorites**
> [ContentFavorite] searchContentFavorites(opts)

Search Favorite Contents

### Search Favorite Content  If multiple search params are given and &#x60;filter_or&#x60; is FALSE or not specified, search params are combined in a logical AND operation. Only rows that match *all* search param criteria will be returned.  If &#x60;filter_or&#x60; is TRUE, multiple search params are combined in a logical OR operation. Results will include rows that match **any** of the search criteria.  String search params use case-insensitive matching. String search params can contain &#x60;%&#x60; and &#39;_&#39; as SQL LIKE pattern match wildcard expressions. example&#x3D;\&quot;dan%\&quot; will match \&quot;danger\&quot; and \&quot;Danzig\&quot; but not \&quot;David\&quot; example&#x3D;\&quot;D_m%\&quot; will match \&quot;Damage\&quot; and \&quot;dump\&quot;  Integer search params can accept a single value or a comma separated list of values. The multiple values will be combined under a logical OR operation - results will match at least one of the given values.  Most search params can accept \&quot;IS NULL\&quot; and \&quot;NOT NULL\&quot; as special expressions to match or exclude (respectively) rows where the column is null.  Boolean search params accept only \&quot;true\&quot; and \&quot;false\&quot; as values.  

### Example
```javascript
var LookerApi31Reference = require('looker_api_31_reference');

var apiInstance = new LookerApi31Reference.ContentApi();

var opts = { 
  'id': 789, // Number | Match content favorite id(s)
  'userId': 789, // Number | Match user id(s)
  'contentMetadataId': 789, // Number | Match content metadata id(s)
  'dashboardId': 789, // Number | Match dashboard id(s)
  'lookId': 789, // Number | Match look id(s)
  'limit': 789, // Number | Number of results to return. (used with offset)
  'offset': 789, // Number | Number of results to skip before returning any. (used with limit)
  'sorts': "sorts_example", // String | Fields to sort by.
  'fields': "fields_example", // String | Requested fields.
  'filterOr': true // Boolean | Combine given search criteria in a boolean OR expression
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.searchContentFavorites(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Match content favorite id(s) | [optional] 
 **userId** | **Number**| Match user id(s) | [optional] 
 **contentMetadataId** | **Number**| Match content metadata id(s) | [optional] 
 **dashboardId** | **Number**| Match dashboard id(s) | [optional] 
 **lookId** | **Number**| Match look id(s) | [optional] 
 **limit** | **Number**| Number of results to return. (used with offset) | [optional] 
 **offset** | **Number**| Number of results to skip before returning any. (used with limit) | [optional] 
 **sorts** | **String**| Fields to sort by. | [optional] 
 **fields** | **String**| Requested fields. | [optional] 
 **filterOr** | **Boolean**| Combine given search criteria in a boolean OR expression | [optional] 

### Return type

[**[ContentFavorite]**](ContentFavorite.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="searchContentViews"></a>
# **searchContentViews**
> [ContentView] searchContentViews(opts)

Search Content Views

### Search Content Views  If multiple search params are given and &#x60;filter_or&#x60; is FALSE or not specified, search params are combined in a logical AND operation. Only rows that match *all* search param criteria will be returned.  If &#x60;filter_or&#x60; is TRUE, multiple search params are combined in a logical OR operation. Results will include rows that match **any** of the search criteria.  String search params use case-insensitive matching. String search params can contain &#x60;%&#x60; and &#39;_&#39; as SQL LIKE pattern match wildcard expressions. example&#x3D;\&quot;dan%\&quot; will match \&quot;danger\&quot; and \&quot;Danzig\&quot; but not \&quot;David\&quot; example&#x3D;\&quot;D_m%\&quot; will match \&quot;Damage\&quot; and \&quot;dump\&quot;  Integer search params can accept a single value or a comma separated list of values. The multiple values will be combined under a logical OR operation - results will match at least one of the given values.  Most search params can accept \&quot;IS NULL\&quot; and \&quot;NOT NULL\&quot; as special expressions to match or exclude (respectively) rows where the column is null.  Boolean search params accept only \&quot;true\&quot; and \&quot;false\&quot; as values.  

### Example
```javascript
var LookerApi31Reference = require('looker_api_31_reference');

var apiInstance = new LookerApi31Reference.ContentApi();

var opts = { 
  'viewCount': 789, // Number | Match view count
  'groupId': 789, // Number | Match Group Id
  'lookId': "lookId_example", // String | Match look_id
  'dashboardId': "dashboardId_example", // String | Match dashboard_id
  'contentMetadataId': 789, // Number | Match content metadata id
  'startOfWeekDate': "startOfWeekDate_example", // String | Match start of week date
  'allTime': true, // Boolean | True if only all time view records should be returned
  'userId': 789, // Number | Match user id
  'fields': "fields_example", // String | Requested fields
  'limit': 789, // Number | Number of results to return. Use with `offset` to manage pagination of results
  'offset': 789, // Number | Number of results to skip before returning data
  'sorts': "sorts_example", // String | Fields to sort by
  'filterOr': true // Boolean | Combine given search criteria in a boolean OR expression
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.searchContentViews(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **viewCount** | **Number**| Match view count | [optional] 
 **groupId** | **Number**| Match Group Id | [optional] 
 **lookId** | **String**| Match look_id | [optional] 
 **dashboardId** | **String**| Match dashboard_id | [optional] 
 **contentMetadataId** | **Number**| Match content metadata id | [optional] 
 **startOfWeekDate** | **String**| Match start of week date | [optional] 
 **allTime** | **Boolean**| True if only all time view records should be returned | [optional] 
 **userId** | **Number**| Match user id | [optional] 
 **fields** | **String**| Requested fields | [optional] 
 **limit** | **Number**| Number of results to return. Use with &#x60;offset&#x60; to manage pagination of results | [optional] 
 **offset** | **Number**| Number of results to skip before returning data | [optional] 
 **sorts** | **String**| Fields to sort by | [optional] 
 **filterOr** | **Boolean**| Combine given search criteria in a boolean OR expression | [optional] 

### Return type

[**[ContentView]**](ContentView.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateContentMetadata"></a>
# **updateContentMetadata**
> ContentMeta updateContentMetadata(contentMetadataId, body)

Update Content Metadata

### Move a piece of content. 

### Example
```javascript
var LookerApi31Reference = require('looker_api_31_reference');

var apiInstance = new LookerApi31Reference.ContentApi();

var contentMetadataId = 789; // Number | Id of content metadata

var body = new LookerApi31Reference.ContentMeta(); // ContentMeta | Content Metadata


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateContentMetadata(contentMetadataId, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contentMetadataId** | **Number**| Id of content metadata | 
 **body** | [**ContentMeta**](ContentMeta.md)| Content Metadata | 

### Return type

[**ContentMeta**](ContentMeta.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateContentMetadataAccess"></a>
# **updateContentMetadataAccess**
> ContentMetaGroupUser updateContentMetadataAccess(contentMetadataAccessId, body)

Update Content Metadata Access

### Update type of access for content metadata. 

### Example
```javascript
var LookerApi31Reference = require('looker_api_31_reference');

var apiInstance = new LookerApi31Reference.ContentApi();

var contentMetadataAccessId = 789; // Number | Id of content metadata access

var body = new LookerApi31Reference.ContentMetaGroupUser(); // ContentMetaGroupUser | Content Metadata Access


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateContentMetadataAccess(contentMetadataAccessId, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contentMetadataAccessId** | **Number**| Id of content metadata access | 
 **body** | [**ContentMetaGroupUser**](ContentMetaGroupUser.md)| Content Metadata Access | 

### Return type

[**ContentMetaGroupUser**](ContentMetaGroupUser.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

