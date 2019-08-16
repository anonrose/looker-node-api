# LookerApi31Reference.ApiAuthApi

All URIs are relative to *https://analytics.kollectivecd.com:20000/api/3.1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**login**](ApiAuthApi.md#login) | **POST** /login | Login
[**loginUser**](ApiAuthApi.md#loginUser) | **POST** /login/{user_id} | Login user
[**logout**](ApiAuthApi.md#logout) | **DELETE** /logout | Logout


<a name="login"></a>
# **login**
> AccessToken login(opts)

Login

### Present client credentials to obtain an authorization token  Looker API implements the OAuth2 [Resource Owner Password Credentials Grant](https://looker.com/docs/r/api/outh2_resource_owner_pc) pattern. The client credentials required for this login must be obtained by creating an API3 key on a user account in the Looker Admin console. The API3 key consists of a public &#x60;client_id&#x60; and a private &#x60;client_secret&#x60;.  The access token returned by &#x60;login&#x60; must be used in the HTTP Authorization header of subsequent API requests, like this: &#x60;&#x60;&#x60; Authorization: token 4QDkCyCtZzYgj4C2p2cj3csJH7zqS5RzKs2kTnG4 &#x60;&#x60;&#x60; Replace \&quot;4QDkCy...\&quot; with the &#x60;access_token&#x60; value returned by &#x60;login&#x60;. The word &#x60;token&#x60; is a string literal and must be included exactly as shown.  This function can accept &#x60;client_id&#x60; and &#x60;client_secret&#x60; parameters as URL query params or as www-form-urlencoded params in the body of the HTTP request. Since there is a small risk that URL parameters may be visible to intermediate nodes on the network route (proxies, routers, etc), passing credentials in the body of the request is considered more secure than URL params.  Example of passing credentials in the HTTP request body: &#x60;&#x60;&#x60;&#x60; POST HTTP /login Content-Type: application/x-www-form-urlencoded  client_id&#x3D;CGc9B7v7J48dQSJvxxx&amp;client_secret&#x3D;nNVS9cSS3xNpSC9JdsBvvvvv &#x60;&#x60;&#x60;&#x60;  ### Best Practice: Always pass credentials in body params. Pass credentials in URL query params **only** when you cannot pass body params due to application, tool, or other limitations.  For more information and detailed examples of Looker API authorization, see [How to Authenticate to Looker API3](https://github.com/looker/looker-sdk-ruby/blob/master/authentication.md). 

### Example
```javascript
var LookerApi31Reference = require('looker_api_31_reference');

var apiInstance = new LookerApi31Reference.ApiAuthApi();

var opts = { 
  'clientId': "clientId_example", // String | client_id part of API3 Key.
  'clientSecret': "clientSecret_example" // String | client_secret part of API3 Key.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.login(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientId** | **String**| client_id part of API3 Key. | [optional] 
 **clientSecret** | **String**| client_secret part of API3 Key. | [optional] 

### Return type

[**AccessToken**](AccessToken.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="loginUser"></a>
# **loginUser**
> AccessToken loginUser(userId)

Login user

### Create an access token for a given user.  This can only be called by an authenticated admin user. It allows that admin to generate a new authentication token for the user with the given user id. That token can then be used for subsequent API calls - which are then performed *as* that target user.  The target user does *not* need to have a pre-existing API client_id/client_secret pair. And, no such credentials are created by this call.  This allows for building systems where api user authentication for an arbitrary number of users is done outside of Looker and funneled through a single &#39;service account&#39; with admin permissions. Note that a new access token is generated on each call. If target users are going to be making numerous API calls in a short period then it is wise to cache this authentication token rather than call this before each of those API calls.  See &#39;login&#39; for more detail on the access token and how to use it. 

### Example
```javascript
var LookerApi31Reference = require('looker_api_31_reference');

var apiInstance = new LookerApi31Reference.ApiAuthApi();

var userId = 789; // Number | Id of user.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.loginUser(userId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Number**| Id of user. | 

### Return type

[**AccessToken**](AccessToken.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="logout"></a>
# **logout**
> &#39;String&#39; logout()

Logout

### Logout of the API and invalidate the current access token. 

### Example
```javascript
var LookerApi31Reference = require('looker_api_31_reference');

var apiInstance = new LookerApi31Reference.ApiAuthApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.logout(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

