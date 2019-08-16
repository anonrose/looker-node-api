# LookerApi31Reference.DataActionApi

All URIs are relative to *https://analytics.kollectivecd.com:20000/api/3.1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**fetchRemoteDataActionForm**](DataActionApi.md#fetchRemoteDataActionForm) | **POST** /data_actions/form | Fetch Remote Data Action Form
[**performDataAction**](DataActionApi.md#performDataAction) | **POST** /data_actions | Send a Data Action


<a name="fetchRemoteDataActionForm"></a>
# **fetchRemoteDataActionForm**
> DataActionForm fetchRemoteDataActionForm(body)

Fetch Remote Data Action Form

For some data actions, the remote server may supply a form requesting further user input. This endpoint takes a data action, asks the remote server to generate a form for it, and returns that form to you for presentation to the user.

### Example
```javascript
var LookerApi31Reference = require('looker_api_31_reference');

var apiInstance = new LookerApi31Reference.DataActionApi();

var body = null; // Object | Data Action Request


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.fetchRemoteDataActionForm(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **Object**| Data Action Request | 

### Return type

[**DataActionForm**](DataActionForm.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="performDataAction"></a>
# **performDataAction**
> DataActionResponse performDataAction(body)

Send a Data Action

Perform a data action. The data action object can be obtained from query results, and used to perform an arbitrary action.

### Example
```javascript
var LookerApi31Reference = require('looker_api_31_reference');

var apiInstance = new LookerApi31Reference.DataActionApi();

var body = new LookerApi31Reference.DataActionRequest(); // DataActionRequest | Data Action Request


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.performDataAction(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**DataActionRequest**](DataActionRequest.md)| Data Action Request | 

### Return type

[**DataActionResponse**](DataActionResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

