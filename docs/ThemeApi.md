# LookerApi31Reference.ThemeApi

All URIs are relative to *https://analytics.kollectivecd.com:20000/api/3.1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**activeThemes**](ThemeApi.md#activeThemes) | **GET** /themes/active | Get Active Themes
[**allThemes**](ThemeApi.md#allThemes) | **GET** /themes | Get All Themes
[**createTheme**](ThemeApi.md#createTheme) | **POST** /themes | Create Theme
[**defaultTheme**](ThemeApi.md#defaultTheme) | **GET** /themes/default | Get Default Theme
[**deleteTheme**](ThemeApi.md#deleteTheme) | **DELETE** /themes/{theme_id} | Delete Theme
[**searchThemes**](ThemeApi.md#searchThemes) | **GET** /themes/search | Search Themes
[**setDefaultTheme**](ThemeApi.md#setDefaultTheme) | **PUT** /themes/default | Set Default Theme
[**theme**](ThemeApi.md#theme) | **GET** /themes/{theme_id} | Get Theme
[**themeOrDefault**](ThemeApi.md#themeOrDefault) | **GET** /themes/theme_or_default | Get Theme or Default
[**updateTheme**](ThemeApi.md#updateTheme) | **PATCH** /themes/{theme_id} | Update Theme
[**validateTheme**](ThemeApi.md#validateTheme) | **POST** /themes/validate | Validate Theme


<a name="activeThemes"></a>
# **activeThemes**
> [Theme] activeThemes(opts)

Get Active Themes

### Get active themes  Returns an array of active themes.  If the &#x60;name&#x60; parameter is specified, it will return an array with one theme if it&#39;s active and found.  The optional &#x60;ts&#x60; parameter can specify a different timestamp than \&quot;now.\&quot;  **Note**: Custom themes needs to be enabled by Looker. Unless custom themes are enabled, only the automatically generated default theme can be used. Please contact your Account Manager or support@looker.com to update your license for this feature.   

### Example
```javascript
var LookerApi31Reference = require('looker_api_31_reference');

var apiInstance = new LookerApi31Reference.ThemeApi();

var opts = { 
  'name': "name_example", // String | Name of theme
  'ts': new Date("2013-10-20T19:20:30+01:00"), // Date | Timestamp representing the target datetime for the active period. Defaults to 'now'
  'fields': "fields_example" // String | Requested fields.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.activeThemes(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| Name of theme | [optional] 
 **ts** | **Date**| Timestamp representing the target datetime for the active period. Defaults to &#39;now&#39; | [optional] 
 **fields** | **String**| Requested fields. | [optional] 

### Return type

[**[Theme]**](Theme.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="allThemes"></a>
# **allThemes**
> [Theme] allThemes(opts)

Get All Themes

### Get an array of all existing themes  Get a **single theme** by id with [Theme](#!/Theme/theme)  This method returns an array of all existing themes. The active time for the theme is not considered.  **Note**: Custom themes needs to be enabled by Looker. Unless custom themes are enabled, only the automatically generated default theme can be used. Please contact your Account Manager or support@looker.com to update your license for this feature.  

### Example
```javascript
var LookerApi31Reference = require('looker_api_31_reference');

var apiInstance = new LookerApi31Reference.ThemeApi();

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
apiInstance.allThemes(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fields** | **String**| Requested fields. | [optional] 

### Return type

[**[Theme]**](Theme.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createTheme"></a>
# **createTheme**
> Theme createTheme(opts)

Create Theme

### Create a theme with the specified information  Creates a new theme object, returning the theme details, including the created id.  If &#x60;settings&#x60; are not specified, the default theme settings will be copied into the new theme.  The theme &#x60;name&#x60; can only contain alphanumeric characters or underscores. Theme names should not contain any confidential information, such as customer names.  **Update** an existing theme with [Update Theme](#!/Theme/update_theme)  **Permanently delete** an existing theme with [Delete Theme](#!/Theme/delete_theme)  For more information, see [Creating and Applying Themes](https://docs.looker.com/r/admin/themes)  **Note**: Custom themes needs to be enabled by Looker. Unless custom themes are enabled, only the automatically generated default theme can be used. Please contact your Account Manager or support@looker.com to update your license for this feature.  

### Example
```javascript
var LookerApi31Reference = require('looker_api_31_reference');

var apiInstance = new LookerApi31Reference.ThemeApi();

var opts = { 
  'body': new LookerApi31Reference.Theme() // Theme | Theme
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createTheme(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Theme**](Theme.md)| Theme | [optional] 

### Return type

[**Theme**](Theme.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="defaultTheme"></a>
# **defaultTheme**
> Theme defaultTheme(opts)

Get Default Theme

### Get the default theme  Returns the active theme object set as the default.  The **default** theme name can be set in the UI on the Admin|Theme UI page  The optional &#x60;ts&#x60; parameter can specify a different timestamp than \&quot;now.\&quot; If specified, it returns the default theme at the time indicated. 

### Example
```javascript
var LookerApi31Reference = require('looker_api_31_reference');

var apiInstance = new LookerApi31Reference.ThemeApi();

var opts = { 
  'ts': new Date("2013-10-20T19:20:30+01:00") // Date | Timestamp representing the target datetime for the active period. Defaults to 'now'
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.defaultTheme(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ts** | **Date**| Timestamp representing the target datetime for the active period. Defaults to &#39;now&#39; | [optional] 

### Return type

[**Theme**](Theme.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteTheme"></a>
# **deleteTheme**
> &#39;String&#39; deleteTheme(themeId)

Delete Theme

### Delete a specific theme by id  This operation permanently deletes the identified theme from the database.  Because multiple themes can have the same name (with different activation time spans) themes can only be deleted by ID.  All IDs associated with a theme name can be retrieved by searching for the theme name with [Theme Search](#!/Theme/search).  **Note**: Custom themes needs to be enabled by Looker. Unless custom themes are enabled, only the automatically generated default theme can be used. Please contact your Account Manager or support@looker.com to update your license for this feature.  

### Example
```javascript
var LookerApi31Reference = require('looker_api_31_reference');

var apiInstance = new LookerApi31Reference.ThemeApi();

var themeId = "themeId_example"; // String | Id of theme


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteTheme(themeId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **themeId** | **String**| Id of theme | 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="searchThemes"></a>
# **searchThemes**
> [Theme] searchThemes(opts)

Search Themes

### Search all themes for matching criteria.  Returns an **array of theme objects** that match the specified search criteria.  | Search Parameters | Description | :-------------------: | :------ | | &#x60;begin_at&#x60; only | Find themes active at or after &#x60;begin_at&#x60; | &#x60;end_at&#x60; only | Find themes active at or before &#x60;end_at&#x60; | both set | Find themes with an active inclusive period between &#x60;begin_at&#x60; and &#x60;end_at&#x60;  Note: Range matching requires boolean AND logic. When using &#x60;begin_at&#x60; and &#x60;end_at&#x60; together, do not use &#x60;filter_or&#x60;&#x3D;TRUE  If multiple search params are given and &#x60;filter_or&#x60; is FALSE or not specified, search params are combined in a logical AND operation. Only rows that match *all* search param criteria will be returned.  If &#x60;filter_or&#x60; is TRUE, multiple search params are combined in a logical OR operation. Results will include rows that match **any** of the search criteria.  String search params use case-insensitive matching. String search params can contain &#x60;%&#x60; and &#39;_&#39; as SQL LIKE pattern match wildcard expressions. example&#x3D;\&quot;dan%\&quot; will match \&quot;danger\&quot; and \&quot;Danzig\&quot; but not \&quot;David\&quot; example&#x3D;\&quot;D_m%\&quot; will match \&quot;Damage\&quot; and \&quot;dump\&quot;  Integer search params can accept a single value or a comma separated list of values. The multiple values will be combined under a logical OR operation - results will match at least one of the given values.  Most search params can accept \&quot;IS NULL\&quot; and \&quot;NOT NULL\&quot; as special expressions to match or exclude (respectively) rows where the column is null.  Boolean search params accept only \&quot;true\&quot; and \&quot;false\&quot; as values.   Get a **single theme** by id with [Theme](#!/Theme/theme)  **Note**: Custom themes needs to be enabled by Looker. Unless custom themes are enabled, only the automatically generated default theme can be used. Please contact your Account Manager or support@looker.com to update your license for this feature.  

### Example
```javascript
var LookerApi31Reference = require('looker_api_31_reference');

var apiInstance = new LookerApi31Reference.ThemeApi();

var opts = { 
  'id': 789, // Number | Match theme id.
  'name': "name_example", // String | Match theme name.
  'beginAt': new Date("2013-10-20T19:20:30+01:00"), // Date | Timestamp for activation.
  'endAt': new Date("2013-10-20T19:20:30+01:00"), // Date | Timestamp for expiration.
  'limit': 789, // Number | Number of results to return (used with `offset`).
  'offset': 789, // Number | Number of results to skip before returning any (used with `limit`).
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
apiInstance.searchThemes(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Match theme id. | [optional] 
 **name** | **String**| Match theme name. | [optional] 
 **beginAt** | **Date**| Timestamp for activation. | [optional] 
 **endAt** | **Date**| Timestamp for expiration. | [optional] 
 **limit** | **Number**| Number of results to return (used with &#x60;offset&#x60;). | [optional] 
 **offset** | **Number**| Number of results to skip before returning any (used with &#x60;limit&#x60;). | [optional] 
 **sorts** | **String**| Fields to sort by. | [optional] 
 **fields** | **String**| Requested fields. | [optional] 
 **filterOr** | **Boolean**| Combine given search criteria in a boolean OR expression | [optional] 

### Return type

[**[Theme]**](Theme.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="setDefaultTheme"></a>
# **setDefaultTheme**
> Theme setDefaultTheme(name)

Set Default Theme

### Set the global default theme by theme name  Only Admin users can call this function.  Only an active theme with no expiration (&#x60;end_at&#x60; not set) can be assigned as the default theme. As long as a theme has an active record with no expiration, it can be set as the default.  [Create Theme](#!/Theme/create) has detailed information on rules for default and active themes  Returns the new specified default theme object.  **Note**: Custom themes needs to be enabled by Looker. Unless custom themes are enabled, only the automatically generated default theme can be used. Please contact your Account Manager or support@looker.com to update your license for this feature.  

### Example
```javascript
var LookerApi31Reference = require('looker_api_31_reference');

var apiInstance = new LookerApi31Reference.ThemeApi();

var name = "name_example"; // String | Name of theme to set as default


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.setDefaultTheme(name, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| Name of theme to set as default | 

### Return type

[**Theme**](Theme.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="theme"></a>
# **theme**
> Theme theme(themeId, opts)

Get Theme

### Get a theme by ID  Use this to retrieve a specific theme, whether or not it&#39;s currently active.  **Note**: Custom themes needs to be enabled by Looker. Unless custom themes are enabled, only the automatically generated default theme can be used. Please contact your Account Manager or support@looker.com to update your license for this feature.  

### Example
```javascript
var LookerApi31Reference = require('looker_api_31_reference');

var apiInstance = new LookerApi31Reference.ThemeApi();

var themeId = "themeId_example"; // String | Id of theme

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
apiInstance.theme(themeId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **themeId** | **String**| Id of theme | 
 **fields** | **String**| Requested fields. | [optional] 

### Return type

[**Theme**](Theme.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="themeOrDefault"></a>
# **themeOrDefault**
> Theme themeOrDefault(name, opts)

Get Theme or Default

### Get the named theme if it&#39;s active. Otherwise, return the default theme  The optional &#x60;ts&#x60; parameter can specify a different timestamp than \&quot;now.\&quot; Note: API users with &#x60;show&#x60; ability can call this function  **Note**: Custom themes needs to be enabled by Looker. Unless custom themes are enabled, only the automatically generated default theme can be used. Please contact your Account Manager or support@looker.com to update your license for this feature.  

### Example
```javascript
var LookerApi31Reference = require('looker_api_31_reference');

var apiInstance = new LookerApi31Reference.ThemeApi();

var name = "name_example"; // String | Name of theme

var opts = { 
  'ts': new Date("2013-10-20T19:20:30+01:00") // Date | Timestamp representing the target datetime for the active period. Defaults to 'now'
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.themeOrDefault(name, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| Name of theme | 
 **ts** | **Date**| Timestamp representing the target datetime for the active period. Defaults to &#39;now&#39; | [optional] 

### Return type

[**Theme**](Theme.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateTheme"></a>
# **updateTheme**
> Theme updateTheme(themeId, body)

Update Theme

### Update the theme by id.  **Note**: Custom themes needs to be enabled by Looker. Unless custom themes are enabled, only the automatically generated default theme can be used. Please contact your Account Manager or support@looker.com to update your license for this feature.  

### Example
```javascript
var LookerApi31Reference = require('looker_api_31_reference');

var apiInstance = new LookerApi31Reference.ThemeApi();

var themeId = "themeId_example"; // String | Id of theme

var body = new LookerApi31Reference.Theme(); // Theme | Theme


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateTheme(themeId, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **themeId** | **String**| Id of theme | 
 **body** | [**Theme**](Theme.md)| Theme | 

### Return type

[**Theme**](Theme.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="validateTheme"></a>
# **validateTheme**
> ValidationError validateTheme(opts)

Validate Theme

### Validate a theme with the specified information  Validates all values set for the theme, returning any errors encountered, or 200 OK if valid  See [Create Theme](#!/Theme/create_theme) for constraints  **Note**: Custom themes needs to be enabled by Looker. Unless custom themes are enabled, only the automatically generated default theme can be used. Please contact your Account Manager or support@looker.com to update your license for this feature.  

### Example
```javascript
var LookerApi31Reference = require('looker_api_31_reference');

var apiInstance = new LookerApi31Reference.ThemeApi();

var opts = { 
  'body': new LookerApi31Reference.Theme() // Theme | Theme
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.validateTheme(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Theme**](Theme.md)| Theme | [optional] 

### Return type

[**ValidationError**](ValidationError.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

