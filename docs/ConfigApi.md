# LookerApi31Reference.ConfigApi

All URIs are relative to *https://analytics.kollectivecd.com:20000/api/3.1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**allLegacyFeatures**](ConfigApi.md#allLegacyFeatures) | **GET** /legacy_features | Get All Legacy Features
[**allLocales**](ConfigApi.md#allLocales) | **GET** /locales | Get All Locales
[**allTimezones**](ConfigApi.md#allTimezones) | **GET** /timezones | Get All Timezones
[**backupConfiguration**](ConfigApi.md#backupConfiguration) | **GET** /backup_configuration | Get Backup Configuration
[**legacyFeature**](ConfigApi.md#legacyFeature) | **GET** /legacy_features/{legacy_feature_id} | Get Legacy Feature
[**updateBackupConfiguration**](ConfigApi.md#updateBackupConfiguration) | **PATCH** /backup_configuration | Update Backup Configuration
[**updateLegacyFeature**](ConfigApi.md#updateLegacyFeature) | **PATCH** /legacy_features/{legacy_feature_id} | Update Legacy Feature
[**updateWhitelabelConfiguration**](ConfigApi.md#updateWhitelabelConfiguration) | **PUT** /whitelabel_configuration | Update Whitelabel configuration
[**versions**](ConfigApi.md#versions) | **GET** /versions | Get ApiVersion
[**whitelabelConfiguration**](ConfigApi.md#whitelabelConfiguration) | **GET** /whitelabel_configuration | Get Whitelabel configuration


<a name="allLegacyFeatures"></a>
# **allLegacyFeatures**
> [LegacyFeature] allLegacyFeatures()

Get All Legacy Features

### Get all legacy features. 

### Example
```javascript
var LookerApi31Reference = require('looker_api_31_reference');

var apiInstance = new LookerApi31Reference.ConfigApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.allLegacyFeatures(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[LegacyFeature]**](LegacyFeature.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="allLocales"></a>
# **allLocales**
> [Locale] allLocales()

Get All Locales

### Get a list of locales that Looker supports. 

### Example
```javascript
var LookerApi31Reference = require('looker_api_31_reference');

var apiInstance = new LookerApi31Reference.ConfigApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.allLocales(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[Locale]**](Locale.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="allTimezones"></a>
# **allTimezones**
> [Timezone] allTimezones()

Get All Timezones

### Get a list of timezones that Looker supports (e.g. useful for scheduling tasks). 

### Example
```javascript
var LookerApi31Reference = require('looker_api_31_reference');

var apiInstance = new LookerApi31Reference.ConfigApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.allTimezones(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[Timezone]**](Timezone.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="backupConfiguration"></a>
# **backupConfiguration**
> BackupConfiguration backupConfiguration()

Get Backup Configuration

### Get the current Looker internal database backup configuration. 

### Example
```javascript
var LookerApi31Reference = require('looker_api_31_reference');

var apiInstance = new LookerApi31Reference.ConfigApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.backupConfiguration(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**BackupConfiguration**](BackupConfiguration.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="legacyFeature"></a>
# **legacyFeature**
> LegacyFeature legacyFeature(legacyFeatureId)

Get Legacy Feature

### Get information about the legacy feature with a specific id. 

### Example
```javascript
var LookerApi31Reference = require('looker_api_31_reference');

var apiInstance = new LookerApi31Reference.ConfigApi();

var legacyFeatureId = 789; // Number | id of legacy feature


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.legacyFeature(legacyFeatureId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **legacyFeatureId** | **Number**| id of legacy feature | 

### Return type

[**LegacyFeature**](LegacyFeature.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateBackupConfiguration"></a>
# **updateBackupConfiguration**
> BackupConfiguration updateBackupConfiguration(body)

Update Backup Configuration

### Update the Looker internal database backup configuration. 

### Example
```javascript
var LookerApi31Reference = require('looker_api_31_reference');

var apiInstance = new LookerApi31Reference.ConfigApi();

var body = new LookerApi31Reference.BackupConfiguration(); // BackupConfiguration | Options for Backup Configuration


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateBackupConfiguration(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**BackupConfiguration**](BackupConfiguration.md)| Options for Backup Configuration | 

### Return type

[**BackupConfiguration**](BackupConfiguration.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateLegacyFeature"></a>
# **updateLegacyFeature**
> LegacyFeature updateLegacyFeature(legacyFeatureId, body)

Update Legacy Feature

### Update information about the legacy feature with a specific id. 

### Example
```javascript
var LookerApi31Reference = require('looker_api_31_reference');

var apiInstance = new LookerApi31Reference.ConfigApi();

var legacyFeatureId = 789; // Number | id of legacy feature

var body = new LookerApi31Reference.LegacyFeature(); // LegacyFeature | Legacy Feature


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateLegacyFeature(legacyFeatureId, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **legacyFeatureId** | **Number**| id of legacy feature | 
 **body** | [**LegacyFeature**](LegacyFeature.md)| Legacy Feature | 

### Return type

[**LegacyFeature**](LegacyFeature.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateWhitelabelConfiguration"></a>
# **updateWhitelabelConfiguration**
> WhitelabelConfiguration updateWhitelabelConfiguration(body)

Update Whitelabel configuration

### Update the whitelabel configuration 

### Example
```javascript
var LookerApi31Reference = require('looker_api_31_reference');

var apiInstance = new LookerApi31Reference.ConfigApi();

var body = new LookerApi31Reference.WhitelabelConfiguration(); // WhitelabelConfiguration | Whitelabel configuration


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateWhitelabelConfiguration(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**WhitelabelConfiguration**](WhitelabelConfiguration.md)| Whitelabel configuration | 

### Return type

[**WhitelabelConfiguration**](WhitelabelConfiguration.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="versions"></a>
# **versions**
> ApiVersion versions(opts)

Get ApiVersion

### Get information about all API versions supported by this Looker instance. 

### Example
```javascript
var LookerApi31Reference = require('looker_api_31_reference');

var apiInstance = new LookerApi31Reference.ConfigApi();

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
apiInstance.versions(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fields** | **String**| Requested fields. | [optional] 

### Return type

[**ApiVersion**](ApiVersion.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="whitelabelConfiguration"></a>
# **whitelabelConfiguration**
> WhitelabelConfiguration whitelabelConfiguration(opts)

Get Whitelabel configuration

### This feature is enabled only by special license. ### Gets the whitelabel configuration, which includes hiding documentation links, custom favicon uploading, etc. 

### Example
```javascript
var LookerApi31Reference = require('looker_api_31_reference');

var apiInstance = new LookerApi31Reference.ConfigApi();

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
apiInstance.whitelabelConfiguration(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fields** | **String**| Requested fields. | [optional] 

### Return type

[**WhitelabelConfiguration**](WhitelabelConfiguration.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

