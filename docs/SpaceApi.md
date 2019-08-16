# LookerApi31Reference.SpaceApi

All URIs are relative to *https://analytics.kollectivecd.com:20000/api/3.1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**allSpaces**](SpaceApi.md#allSpaces) | **GET** /spaces | Get All Spaces
[**createSpace**](SpaceApi.md#createSpace) | **POST** /spaces | Create Space
[**deleteSpace**](SpaceApi.md#deleteSpace) | **DELETE** /spaces/{space_id} | Delete Space
[**searchSpaces**](SpaceApi.md#searchSpaces) | **GET** /spaces/search | Search Spaces
[**space**](SpaceApi.md#space) | **GET** /spaces/{space_id} | Get Space
[**spaceAncestors**](SpaceApi.md#spaceAncestors) | **GET** /spaces/{space_id}/ancestors | Get Space Ancestors
[**spaceChildren**](SpaceApi.md#spaceChildren) | **GET** /spaces/{space_id}/children | Get Space Children
[**spaceChildrenSearch**](SpaceApi.md#spaceChildrenSearch) | **GET** /spaces/{space_id}/children/search | Search Space Children
[**spaceDashboards**](SpaceApi.md#spaceDashboards) | **GET** /spaces/{space_id}/dashboards | Get Space Dashboards
[**spaceLooks**](SpaceApi.md#spaceLooks) | **GET** /spaces/{space_id}/looks | Get Space Looks
[**spaceParent**](SpaceApi.md#spaceParent) | **GET** /spaces/{space_id}/parent | Get Space Parent
[**updateSpace**](SpaceApi.md#updateSpace) | **PATCH** /spaces/{space_id} | Update Space


<a name="allSpaces"></a>
# **allSpaces**
> [SpaceBase] allSpaces(opts)

Get All Spaces

### Get information about all spaces.

### Example
```javascript
var LookerApi31Reference = require('looker_api_31_reference');

var apiInstance = new LookerApi31Reference.SpaceApi();

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
apiInstance.allSpaces(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fields** | **String**| Requested fields. | [optional] 

### Return type

[**[SpaceBase]**](SpaceBase.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createSpace"></a>
# **createSpace**
> Space createSpace(opts)

Create Space

### Create a space with specified information.  Caller must have permission to edit the parent space and to create spaces, otherwise the request returns 404 Not Found. 

### Example
```javascript
var LookerApi31Reference = require('looker_api_31_reference');

var apiInstance = new LookerApi31Reference.SpaceApi();

var opts = { 
  'body': new LookerApi31Reference.Space() // Space | Space
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createSpace(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Space**](Space.md)| Space | [optional] 

### Return type

[**Space**](Space.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteSpace"></a>
# **deleteSpace**
> &#39;String&#39; deleteSpace(spaceId)

Delete Space

### Delete the space with a specific id including any children spaces. **DANGER** this will delete all looks and dashboards in the space. 

### Example
```javascript
var LookerApi31Reference = require('looker_api_31_reference');

var apiInstance = new LookerApi31Reference.SpaceApi();

var spaceId = "spaceId_example"; // String | Id of space


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteSpace(spaceId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **spaceId** | **String**| Id of space | 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="searchSpaces"></a>
# **searchSpaces**
> [Space] searchSpaces(opts)

Search Spaces

### Search Spaces    Returns an **array of space objects** that match the given search criteria.    If multiple search params are given and &#x60;filter_or&#x60; is FALSE or not specified, search params are combined in a logical AND operation. Only rows that match *all* search param criteria will be returned.  If &#x60;filter_or&#x60; is TRUE, multiple search params are combined in a logical OR operation. Results will include rows that match **any** of the search criteria.  String search params use case-insensitive matching. String search params can contain &#x60;%&#x60; and &#39;_&#39; as SQL LIKE pattern match wildcard expressions. example&#x3D;\&quot;dan%\&quot; will match \&quot;danger\&quot; and \&quot;Danzig\&quot; but not \&quot;David\&quot; example&#x3D;\&quot;D_m%\&quot; will match \&quot;Damage\&quot; and \&quot;dump\&quot;  Integer search params can accept a single value or a comma separated list of values. The multiple values will be combined under a logical OR operation - results will match at least one of the given values.  Most search params can accept \&quot;IS NULL\&quot; and \&quot;NOT NULL\&quot; as special expressions to match or exclude (respectively) rows where the column is null.  Boolean search params accept only \&quot;true\&quot; and \&quot;false\&quot; as values.     The parameters &#x60;limit&#x60;, and &#x60;offset&#x60; are recommended for fetching results in page-size chunks.    Get a **single space** by id with [Space](#!/Space/space) 

### Example
```javascript
var LookerApi31Reference = require('looker_api_31_reference');

var apiInstance = new LookerApi31Reference.SpaceApi();

var opts = { 
  'fields': "fields_example", // String | Requested fields.
  'page': 789, // Number | Requested page.
  'perPage': 789, // Number | Results per page.
  'limit': 789, // Number | Number of results to return. (used with offset and takes priority over page and per_page)
  'offset': 789, // Number | Number of results to skip before returning any. (used with limit and takes priority over page and per_page)
  'sorts': "sorts_example", // String | Fields to sort by.
  'name': "name_example", // String | Match Space title.
  'id': 789, // Number | Match Space id
  'parentId': "parentId_example", // String | Filter on a children of a particular space.
  'creatorId': "creatorId_example", // String | Filter on spaces created by a particular user.
  'filterOr': true // Boolean | Combine given search criteria in a boolean OR expression
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.searchSpaces(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fields** | **String**| Requested fields. | [optional] 
 **page** | **Number**| Requested page. | [optional] 
 **perPage** | **Number**| Results per page. | [optional] 
 **limit** | **Number**| Number of results to return. (used with offset and takes priority over page and per_page) | [optional] 
 **offset** | **Number**| Number of results to skip before returning any. (used with limit and takes priority over page and per_page) | [optional] 
 **sorts** | **String**| Fields to sort by. | [optional] 
 **name** | **String**| Match Space title. | [optional] 
 **id** | **Number**| Match Space id | [optional] 
 **parentId** | **String**| Filter on a children of a particular space. | [optional] 
 **creatorId** | **String**| Filter on spaces created by a particular user. | [optional] 
 **filterOr** | **Boolean**| Combine given search criteria in a boolean OR expression | [optional] 

### Return type

[**[Space]**](Space.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="space"></a>
# **space**
> Space space(spaceId, opts)

Get Space

### Get information about the space with a specific id.

### Example
```javascript
var LookerApi31Reference = require('looker_api_31_reference');

var apiInstance = new LookerApi31Reference.SpaceApi();

var spaceId = "spaceId_example"; // String | Id of space

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
apiInstance.space(spaceId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **spaceId** | **String**| Id of space | 
 **fields** | **String**| Requested fields. | [optional] 

### Return type

[**Space**](Space.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="spaceAncestors"></a>
# **spaceAncestors**
> [Space] spaceAncestors(spaceId, opts)

Get Space Ancestors

### Get the ancestors of a space

### Example
```javascript
var LookerApi31Reference = require('looker_api_31_reference');

var apiInstance = new LookerApi31Reference.SpaceApi();

var spaceId = "spaceId_example"; // String | Id of space

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
apiInstance.spaceAncestors(spaceId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **spaceId** | **String**| Id of space | 
 **fields** | **String**| Requested fields. | [optional] 

### Return type

[**[Space]**](Space.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="spaceChildren"></a>
# **spaceChildren**
> [Space] spaceChildren(spaceId, opts)

Get Space Children

### Get the children of a space.

### Example
```javascript
var LookerApi31Reference = require('looker_api_31_reference');

var apiInstance = new LookerApi31Reference.SpaceApi();

var spaceId = "spaceId_example"; // String | Id of space

var opts = { 
  'fields': "fields_example", // String | Requested fields.
  'page': 789, // Number | Requested page.
  'perPage': 789, // Number | Results per page.
  'sorts': "sorts_example" // String | Fields to sort by.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.spaceChildren(spaceId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **spaceId** | **String**| Id of space | 
 **fields** | **String**| Requested fields. | [optional] 
 **page** | **Number**| Requested page. | [optional] 
 **perPage** | **Number**| Results per page. | [optional] 
 **sorts** | **String**| Fields to sort by. | [optional] 

### Return type

[**[Space]**](Space.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="spaceChildrenSearch"></a>
# **spaceChildrenSearch**
> [Space] spaceChildrenSearch(spaceId, opts)

Search Space Children

### Search the children of a space

### Example
```javascript
var LookerApi31Reference = require('looker_api_31_reference');

var apiInstance = new LookerApi31Reference.SpaceApi();

var spaceId = "spaceId_example"; // String | Id of space

var opts = { 
  'fields': "fields_example", // String | Requested fields.
  'sorts': "sorts_example", // String | Fields to sort by.
  'name': "name_example" // String | Match Space name.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.spaceChildrenSearch(spaceId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **spaceId** | **String**| Id of space | 
 **fields** | **String**| Requested fields. | [optional] 
 **sorts** | **String**| Fields to sort by. | [optional] 
 **name** | **String**| Match Space name. | [optional] 

### Return type

[**[Space]**](Space.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="spaceDashboards"></a>
# **spaceDashboards**
> [Dashboard] spaceDashboards(spaceId, opts)

Get Space Dashboards

### Get the dashboards in a space

### Example
```javascript
var LookerApi31Reference = require('looker_api_31_reference');

var apiInstance = new LookerApi31Reference.SpaceApi();

var spaceId = "spaceId_example"; // String | Id of space

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
apiInstance.spaceDashboards(spaceId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **spaceId** | **String**| Id of space | 
 **fields** | **String**| Requested fields. | [optional] 

### Return type

[**[Dashboard]**](Dashboard.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="spaceLooks"></a>
# **spaceLooks**
> [LookWithQuery] spaceLooks(spaceId, opts)

Get Space Looks

### Get the looks in a space

### Example
```javascript
var LookerApi31Reference = require('looker_api_31_reference');

var apiInstance = new LookerApi31Reference.SpaceApi();

var spaceId = "spaceId_example"; // String | Id of space

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
apiInstance.spaceLooks(spaceId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **spaceId** | **String**| Id of space | 
 **fields** | **String**| Requested fields. | [optional] 

### Return type

[**[LookWithQuery]**](LookWithQuery.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="spaceParent"></a>
# **spaceParent**
> Space spaceParent(spaceId, opts)

Get Space Parent

### Get the parent of a space

### Example
```javascript
var LookerApi31Reference = require('looker_api_31_reference');

var apiInstance = new LookerApi31Reference.SpaceApi();

var spaceId = "spaceId_example"; // String | Id of space

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
apiInstance.spaceParent(spaceId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **spaceId** | **String**| Id of space | 
 **fields** | **String**| Requested fields. | [optional] 

### Return type

[**Space**](Space.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateSpace"></a>
# **updateSpace**
> Space updateSpace(spaceId, body)

Update Space

### Update the space with a specific id.

### Example
```javascript
var LookerApi31Reference = require('looker_api_31_reference');

var apiInstance = new LookerApi31Reference.SpaceApi();

var spaceId = "spaceId_example"; // String | Id of space

var body = new LookerApi31Reference.Space(); // Space | Space


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateSpace(spaceId, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **spaceId** | **String**| Id of space | 
 **body** | [**Space**](Space.md)| Space | 

### Return type

[**Space**](Space.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

