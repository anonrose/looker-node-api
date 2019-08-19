# LookerApi31Reference.IntegrationApi

All URIs are relative to */api/3.1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**acceptIntegrationHubLegalAgreement**](IntegrationApi.md#acceptIntegrationHubLegalAgreement) | **POST** /integration_hubs/{integration_hub_id}/accept_legal_agreement | Accept Integration Hub Legal Agreement
[**allIntegrationHubs**](IntegrationApi.md#allIntegrationHubs) | **GET** /integration_hubs | Get All Integration Hubs
[**allIntegrations**](IntegrationApi.md#allIntegrations) | **GET** /integrations | Get All Integrations
[**createIntegrationHub**](IntegrationApi.md#createIntegrationHub) | **POST** /integration_hubs | Create Integration Hub
[**deleteIntegrationHub**](IntegrationApi.md#deleteIntegrationHub) | **DELETE** /integration_hubs/{integration_hub_id} | Delete Integration Hub
[**fetchIntegrationForm**](IntegrationApi.md#fetchIntegrationForm) | **POST** /integrations/{integration_id}/form | Fetch Remote Integration Form
[**integration**](IntegrationApi.md#integration) | **GET** /integrations/{integration_id} | Get Integration
[**integrationHub**](IntegrationApi.md#integrationHub) | **GET** /integration_hubs/{integration_hub_id} | Get Integration Hub
[**testIntegration**](IntegrationApi.md#testIntegration) | **POST** /integrations/{integration_id}/test | Test integration
[**updateIntegration**](IntegrationApi.md#updateIntegration) | **PATCH** /integrations/{integration_id} | Update Integration
[**updateIntegrationHub**](IntegrationApi.md#updateIntegrationHub) | **PATCH** /integration_hubs/{integration_hub_id} | Update Integration Hub


<a name="acceptIntegrationHubLegalAgreement"></a>
# **acceptIntegrationHubLegalAgreement**
> IntegrationHub acceptIntegrationHubLegalAgreement(integrationHubId)

Accept Integration Hub Legal Agreement

Accepts the legal agreement for a given integration hub. This only works for integration hubs that have legal_agreement_required set to true and legal_agreement_signed set to false.

### Example
```javascript
var LookerApi31Reference = require('looker-node-api');

var apiInstance = new LookerApi31Reference.IntegrationApi();

var integrationHubId = 789; // Number | Id of integration_hub


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.acceptIntegrationHubLegalAgreement(integrationHubId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **integrationHubId** | **Number**| Id of integration_hub |

### Return type

[**IntegrationHub**](IntegrationHub.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="allIntegrationHubs"></a>
# **allIntegrationHubs**
> [IntegrationHub] allIntegrationHubs(opts)

Get All Integration Hubs

### Get information about all Integration Hubs.

### Example
```javascript
var LookerApi31Reference = require('looker-node-api');

var apiInstance = new LookerApi31Reference.IntegrationApi();

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
apiInstance.allIntegrationHubs(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fields** | **String**| Requested fields. | [optional]

### Return type

[**[IntegrationHub]**](IntegrationHub.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="allIntegrations"></a>
# **allIntegrations**
> [Integration] allIntegrations(opts)

Get All Integrations

### Get information about all Integrations.

### Example
```javascript
var LookerApi31Reference = require('looker-node-api');

var apiInstance = new LookerApi31Reference.IntegrationApi();

var opts = {
  'fields': "fields_example", // String | Requested fields.
  'integrationHubId': "integrationHubId_example" // String | Filter to a specific provider
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.allIntegrations(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fields** | **String**| Requested fields. | [optional]
 **integrationHubId** | **String**| Filter to a specific provider | [optional]

### Return type

[**[Integration]**](Integration.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createIntegrationHub"></a>
# **createIntegrationHub**
> IntegrationHub createIntegrationHub(opts)

Create Integration Hub

### Create a new Integration Hub.

### Example
```javascript
var LookerApi31Reference = require('looker-node-api');

var apiInstance = new LookerApi31Reference.IntegrationApi();

var opts = {
  'body': new LookerApi31Reference.IntegrationHub(), // IntegrationHub | Integration Hub
  'fields': "fields_example" // String | Requested fields.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createIntegrationHub(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**IntegrationHub**](IntegrationHub.md)| Integration Hub | [optional]
 **fields** | **String**| Requested fields. | [optional]

### Return type

[**IntegrationHub**](IntegrationHub.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteIntegrationHub"></a>
# **deleteIntegrationHub**
> &#39;String&#39; deleteIntegrationHub(integrationHubId)

Delete Integration Hub

### Delete a Integration Hub.

### Example
```javascript
var LookerApi31Reference = require('looker-node-api');

var apiInstance = new LookerApi31Reference.IntegrationApi();

var integrationHubId = 789; // Number | Id of integration_hub


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteIntegrationHub(integrationHubId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **integrationHubId** | **Number**| Id of integration_hub |

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="fetchIntegrationForm"></a>
# **fetchIntegrationForm**
> DataActionForm fetchIntegrationForm(integrationId)

Fetch Remote Integration Form

Returns the Integration form for presentation to the user.

### Example
```javascript
var LookerApi31Reference = require('looker-node-api');

var apiInstance = new LookerApi31Reference.IntegrationApi();

var integrationId = 789; // Number | Id of Integration


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.fetchIntegrationForm(integrationId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **integrationId** | **Number**| Id of Integration |

### Return type

[**DataActionForm**](DataActionForm.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="integration"></a>
# **integration**
> Integration integration(integrationId, opts)

Get Integration

### Get information about a Integration.

### Example
```javascript
var LookerApi31Reference = require('looker-node-api');

var apiInstance = new LookerApi31Reference.IntegrationApi();

var integrationId = 789; // Number | Id of Integration

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
apiInstance.integration(integrationId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **integrationId** | **Number**| Id of Integration |
 **fields** | **String**| Requested fields. | [optional]

### Return type

[**Integration**](Integration.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="integrationHub"></a>
# **integrationHub**
> IntegrationHub integrationHub(integrationHubId, opts)

Get Integration Hub

### Get information about a Integration Hub.

### Example
```javascript
var LookerApi31Reference = require('looker-node-api');

var apiInstance = new LookerApi31Reference.IntegrationApi();

var integrationHubId = 789; // Number | Id of Integration Hub

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
apiInstance.integrationHub(integrationHubId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **integrationHubId** | **Number**| Id of Integration Hub |
 **fields** | **String**| Requested fields. | [optional]

### Return type

[**IntegrationHub**](IntegrationHub.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="testIntegration"></a>
# **testIntegration**
> IntegrationTestResult testIntegration(integrationId)

Test integration

Tests the integration to make sure all the settings are working.

### Example
```javascript
var LookerApi31Reference = require('looker-node-api');

var apiInstance = new LookerApi31Reference.IntegrationApi();

var integrationId = 789; // Number | Id of Integration


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.testIntegration(integrationId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **integrationId** | **Number**| Id of Integration |

### Return type

[**IntegrationTestResult**](IntegrationTestResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateIntegration"></a>
# **updateIntegration**
> Integration updateIntegration(integrationId, body, opts)

Update Integration

### Update parameters on a Integration.

### Example
```javascript
var LookerApi31Reference = require('looker-node-api');

var apiInstance = new LookerApi31Reference.IntegrationApi();

var integrationId = 789; // Number | Id of Integration

var body = new LookerApi31Reference.Integration(); // Integration | Integration

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
apiInstance.updateIntegration(integrationId, body, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **integrationId** | **Number**| Id of Integration |
 **body** | [**Integration**](Integration.md)| Integration |
 **fields** | **String**| Requested fields. | [optional]

### Return type

[**Integration**](Integration.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateIntegrationHub"></a>
# **updateIntegrationHub**
> IntegrationHub updateIntegrationHub(integrationHubId, body, opts)

Update Integration Hub

### Update a Integration Hub definition.

### Example
```javascript
var LookerApi31Reference = require('looker-node-api');

var apiInstance = new LookerApi31Reference.IntegrationApi();

var integrationHubId = 789; // Number | Id of Integration Hub

var body = new LookerApi31Reference.IntegrationHub(); // IntegrationHub | Integration Hub

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
apiInstance.updateIntegrationHub(integrationHubId, body, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **integrationHubId** | **Number**| Id of Integration Hub |
 **body** | [**IntegrationHub**](IntegrationHub.md)| Integration Hub |
 **fields** | **String**| Requested fields. | [optional]

### Return type

[**IntegrationHub**](IntegrationHub.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

