# LookerApi31Reference.LookApi

All URIs are relative to */api/3.1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**allLooks**](LookApi.md#allLooks) | **GET** /looks | Get All Looks
[**createLook**](LookApi.md#createLook) | **POST** /looks | Create Look
[**deleteLook**](LookApi.md#deleteLook) | **DELETE** /looks/{look_id} | Delete Look
[**look**](LookApi.md#look) | **GET** /looks/{look_id} | Get Look
[**runLook**](LookApi.md#runLook) | **GET** /looks/{look_id}/run/{result_format} | Run Look
[**searchLooks**](LookApi.md#searchLooks) | **GET** /looks/search | Search Looks
[**updateLook**](LookApi.md#updateLook) | **PATCH** /looks/{look_id} | Update Look


<a name="allLooks"></a>
# **allLooks**
> [Look] allLooks(opts)

Get All Looks

### Get information about all active Looks  Returns an array of **abbreviated Look objects** describing all the looks that the caller has access to. Soft-deleted Looks are **not** included.  Get the **full details** of a specific look by id with [Look](#!/Look/look)  Find **soft-deleted looks** with [Search Looks](#!/Looks/search_looks)

### Example
```javascript
var LookerApi31Reference = require('looker-node-api');

var apiInstance = new LookerApi31Reference.LookApi();

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
apiInstance.allLooks(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fields** | **String**| Requested fields. | [optional]

### Return type

[**[Look]**](Look.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createLook"></a>
# **createLook**
> LookWithQuery createLook(opts)

Create Look

### Create a Look with specified information.

### Example
```javascript
var LookerApi31Reference = require('looker-node-api');

var apiInstance = new LookerApi31Reference.LookApi();

var opts = {
  'body': new LookerApi31Reference.LookWithQuery(), // LookWithQuery | Look
  'fields': "fields_example" // String | Requested fields.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createLook(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**LookWithQuery**](LookWithQuery.md)| Look | [optional]
 **fields** | **String**| Requested fields. | [optional]

### Return type

[**LookWithQuery**](LookWithQuery.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteLook"></a>
# **deleteLook**
> &#39;String&#39; deleteLook(lookId)

Delete Look

### Delete the look with a specific id.

### Example
```javascript
var LookerApi31Reference = require('looker-node-api');

var apiInstance = new LookerApi31Reference.LookApi();

var lookId = 789; // Number | Id of look


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteLook(lookId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **lookId** | **Number**| Id of look |

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="look"></a>
# **look**
> LookWithQuery look(lookId, opts)

Get Look

### Get a Look.  Returns detailed information about a Look and its associated Query.

### Example
```javascript
var LookerApi31Reference = require('looker-node-api');

var apiInstance = new LookerApi31Reference.LookApi();

var lookId = 789; // Number | Id of look

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
apiInstance.look(lookId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **lookId** | **Number**| Id of look |
 **fields** | **String**| Requested fields. | [optional]

### Return type

[**LookWithQuery**](LookWithQuery.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="runLook"></a>
# **runLook**
> &#39;String&#39; runLook(lookId, resultFormat, opts)

Run Look

### Run a Look.  Runs a given look&#39;s query and returns the results in the requested format.  Supported formats:  | result_format | Description | :-----------: | :--- | | json | Plain json | json_detail | Row data plus metadata describing the fields, pivots, table calcs, and other aspects of the query | csv | Comma separated values with a header | txt | Tab separated values with a header | html | Simple html | md | Simple markdown | xlsx | MS Excel spreadsheet | sql | Returns the generated SQL rather than running the query | png | A PNG image of the visualization of the query | jpg | A JPG image of the visualization of the query

### Example
```javascript
var LookerApi31Reference = require('looker-node-api');

var apiInstance = new LookerApi31Reference.LookApi();

var lookId = 789; // Number | Id of look

var resultFormat = "resultFormat_example"; // String | Format of result

var opts = {
  'limit': 789, // Number | Row limit (may override the limit in the saved query).
  'applyFormatting': true, // Boolean | Apply model-specified formatting to each result.
  'applyVis': true, // Boolean | Apply visualization options to results.
  'cache': true, // Boolean | Get results from cache if available.
  'imageWidth': 789, // Number | Render width for image formats.
  'imageHeight': 789, // Number | Render height for image formats.
  'generateDrillLinks': true, // Boolean | Generate drill links (only applicable to 'json_detail' format.
  'forceProduction': true, // Boolean | Force use of production models even if the user is in development mode.
  'cacheOnly': true, // Boolean | Retrieve any results from cache even if the results have expired.
  'pathPrefix': "pathPrefix_example", // String | Prefix to use for drill links (url encoded).
  'rebuildPdts': true, // Boolean | Rebuild PDTS used in query.
  'serverTableCalcs': true // Boolean | Perform table calculations on query results
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.runLook(lookId, resultFormat, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **lookId** | **Number**| Id of look |
 **resultFormat** | **String**| Format of result |
 **limit** | **Number**| Row limit (may override the limit in the saved query). | [optional]
 **applyFormatting** | **Boolean**| Apply model-specified formatting to each result. | [optional]
 **applyVis** | **Boolean**| Apply visualization options to results. | [optional]
 **cache** | **Boolean**| Get results from cache if available. | [optional]
 **imageWidth** | **Number**| Render width for image formats. | [optional]
 **imageHeight** | **Number**| Render height for image formats. | [optional]
 **generateDrillLinks** | **Boolean**| Generate drill links (only applicable to &#39;json_detail&#39; format. | [optional]
 **forceProduction** | **Boolean**| Force use of production models even if the user is in development mode. | [optional]
 **cacheOnly** | **Boolean**| Retrieve any results from cache even if the results have expired. | [optional]
 **pathPrefix** | **String**| Prefix to use for drill links (url encoded). | [optional]
 **rebuildPdts** | **Boolean**| Rebuild PDTS used in query. | [optional]
 **serverTableCalcs** | **Boolean**| Perform table calculations on query results | [optional]

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: text, application/json, image/png, image/jpg

<a name="searchLooks"></a>
# **searchLooks**
> [Look] searchLooks(opts)

Search Looks

### Search Looks  Returns an **array of Look objects** that match the specified search criteria.  If multiple search params are given and &#x60;filter_or&#x60; is FALSE or not specified, search params are combined in a logical AND operation. Only rows that match *all* search param criteria will be returned.  If &#x60;filter_or&#x60; is TRUE, multiple search params are combined in a logical OR operation. Results will include rows that match **any** of the search criteria.  String search params use case-insensitive matching. String search params can contain &#x60;%&#x60; and &#39;_&#39; as SQL LIKE pattern match wildcard expressions. example&#x3D;\&quot;dan%\&quot; will match \&quot;danger\&quot; and \&quot;Danzig\&quot; but not \&quot;David\&quot; example&#x3D;\&quot;D_m%\&quot; will match \&quot;Damage\&quot; and \&quot;dump\&quot;  Integer search params can accept a single value or a comma separated list of values. The multiple values will be combined under a logical OR operation - results will match at least one of the given values.  Most search params can accept \&quot;IS NULL\&quot; and \&quot;NOT NULL\&quot; as special expressions to match or exclude (respectively) rows where the column is null.  Boolean search params accept only \&quot;true\&quot; and \&quot;false\&quot; as values.   Get a **single look** by id with [Look](#!/Look/look)

### Example
```javascript
var LookerApi31Reference = require('looker-node-api');

var apiInstance = new LookerApi31Reference.LookApi();

var opts = {
  'title': "title_example", // String | Match Look title.
  'description': "description_example", // String | Match Look description.
  'contentFavoriteId': 789, // Number | Select looks with a particular content favorite id
  'spaceId': "spaceId_example", // String | Select looks in a particular space.
  'userId': "userId_example", // String | Select looks created by a particular user.
  'viewCount': "viewCount_example", // String | Select looks with particular view_count value
  'deleted': true, // Boolean | Select soft-deleted looks
  'queryId': 789, // Number | Select looks that reference a particular query by query_id
  'fields': "fields_example", // String | Requested fields.
  'page': 789, // Number | Requested page.
  'perPage': 789, // Number | Results per page.
  'limit': 789, // Number | Number of results to return. (used with offset and takes priority over page and per_page)
  'offset': 789, // Number | Number of results to skip before returning any. (used with limit and takes priority over page and per_page)
  'sorts': "sorts_example", // String | One or more fields to sort results by. Sortable fields: [:title, :user_id, :id, :created_at, :space_id, :description, :updated_at, :last_updater_id, :view_count, :favorite_count, :content_favorite_id, :deleted, :deleted_at, :last_viewed_at, :query_id]
  'filterOr': true // Boolean | Combine given search criteria in a boolean OR expression
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.searchLooks(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **title** | **String**| Match Look title. | [optional]
 **description** | **String**| Match Look description. | [optional]
 **contentFavoriteId** | **Number**| Select looks with a particular content favorite id | [optional]
 **spaceId** | **String**| Select looks in a particular space. | [optional]
 **userId** | **String**| Select looks created by a particular user. | [optional]
 **viewCount** | **String**| Select looks with particular view_count value | [optional]
 **deleted** | **Boolean**| Select soft-deleted looks | [optional]
 **queryId** | **Number**| Select looks that reference a particular query by query_id | [optional]
 **fields** | **String**| Requested fields. | [optional]
 **page** | **Number**| Requested page. | [optional]
 **perPage** | **Number**| Results per page. | [optional]
 **limit** | **Number**| Number of results to return. (used with offset and takes priority over page and per_page) | [optional]
 **offset** | **Number**| Number of results to skip before returning any. (used with limit and takes priority over page and per_page) | [optional]
 **sorts** | **String**| One or more fields to sort results by. Sortable fields: [:title, :user_id, :id, :created_at, :space_id, :description, :updated_at, :last_updater_id, :view_count, :favorite_count, :content_favorite_id, :deleted, :deleted_at, :last_viewed_at, :query_id] | [optional]
 **filterOr** | **Boolean**| Combine given search criteria in a boolean OR expression | [optional]

### Return type

[**[Look]**](Look.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateLook"></a>
# **updateLook**
> LookWithQuery updateLook(lookId, body, opts)

Update Look

### Update the Look with a specific id.

### Example
```javascript
var LookerApi31Reference = require('looker-node-api');

var apiInstance = new LookerApi31Reference.LookApi();

var lookId = 789; // Number | Id of look

var body = new LookerApi31Reference.LookWithQuery(); // LookWithQuery | Look

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
apiInstance.updateLook(lookId, body, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **lookId** | **Number**| Id of look |
 **body** | [**LookWithQuery**](LookWithQuery.md)| Look |
 **fields** | **String**| Requested fields. | [optional]

### Return type

[**LookWithQuery**](LookWithQuery.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

