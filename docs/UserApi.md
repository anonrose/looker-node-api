# LookerApi31Reference.UserApi

All URIs are relative to *https://analytics.kollectivecd.com:20000/api/3.1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**allUserCredentialsApi3s**](UserApi.md#allUserCredentialsApi3s) | **GET** /users/{user_id}/credentials_api3 | Get All API 3 Credentials
[**allUserCredentialsEmbeds**](UserApi.md#allUserCredentialsEmbeds) | **GET** /users/{user_id}/credentials_embed | Get All Embedding Credentials
[**allUserSessions**](UserApi.md#allUserSessions) | **GET** /users/{user_id}/sessions | Get All Web Login Sessions
[**allUsers**](UserApi.md#allUsers) | **GET** /users | Get All Users
[**createUser**](UserApi.md#createUser) | **POST** /users | Create User
[**createUserCredentialsApi3**](UserApi.md#createUserCredentialsApi3) | **POST** /users/{user_id}/credentials_api3 | Create API 3 Credential
[**createUserCredentialsEmail**](UserApi.md#createUserCredentialsEmail) | **POST** /users/{user_id}/credentials_email | Create Email/Password Credential
[**createUserCredentialsEmailPasswordReset**](UserApi.md#createUserCredentialsEmailPasswordReset) | **POST** /users/{user_id}/credentials_email/password_reset | Create Password Reset Token
[**createUserCredentialsTotp**](UserApi.md#createUserCredentialsTotp) | **POST** /users/{user_id}/credentials_totp | Create Two-Factor Credential
[**deleteUser**](UserApi.md#deleteUser) | **DELETE** /users/{user_id} | Delete User
[**deleteUserAttributeUserValue**](UserApi.md#deleteUserAttributeUserValue) | **DELETE** /users/{user_id}/attribute_values/{user_attribute_id} | Delete User Attribute User Value
[**deleteUserCredentialsApi3**](UserApi.md#deleteUserCredentialsApi3) | **DELETE** /users/{user_id}/credentials_api3/{credentials_api3_id} | Delete API 3 Credential
[**deleteUserCredentialsEmail**](UserApi.md#deleteUserCredentialsEmail) | **DELETE** /users/{user_id}/credentials_email | Delete Email/Password Credential
[**deleteUserCredentialsEmbed**](UserApi.md#deleteUserCredentialsEmbed) | **DELETE** /users/{user_id}/credentials_embed/{credentials_embed_id} | Delete Embedding Credential
[**deleteUserCredentialsGoogle**](UserApi.md#deleteUserCredentialsGoogle) | **DELETE** /users/{user_id}/credentials_google | Delete Google Auth Credential
[**deleteUserCredentialsLdap**](UserApi.md#deleteUserCredentialsLdap) | **DELETE** /users/{user_id}/credentials_ldap | Delete LDAP Credential
[**deleteUserCredentialsLookerOpenid**](UserApi.md#deleteUserCredentialsLookerOpenid) | **DELETE** /users/{user_id}/credentials_looker_openid | Delete Looker OpenId Credential
[**deleteUserCredentialsOidc**](UserApi.md#deleteUserCredentialsOidc) | **DELETE** /users/{user_id}/credentials_oidc | Delete OIDC Auth Credential
[**deleteUserCredentialsSaml**](UserApi.md#deleteUserCredentialsSaml) | **DELETE** /users/{user_id}/credentials_saml | Delete Saml Auth Credential
[**deleteUserCredentialsTotp**](UserApi.md#deleteUserCredentialsTotp) | **DELETE** /users/{user_id}/credentials_totp | Delete Two-Factor Credential
[**deleteUserSession**](UserApi.md#deleteUserSession) | **DELETE** /users/{user_id}/sessions/{session_id} | Delete Web Login Session
[**me**](UserApi.md#me) | **GET** /user | Get Current User
[**searchUsers**](UserApi.md#searchUsers) | **GET** /users/search | Search Users
[**searchUsersNames**](UserApi.md#searchUsersNames) | **GET** /users/search/names/{pattern} | Search User Names
[**setUserAttributeUserValue**](UserApi.md#setUserAttributeUserValue) | **PATCH** /users/{user_id}/attribute_values/{user_attribute_id} | Set User Attribute User Value
[**setUserRoles**](UserApi.md#setUserRoles) | **PUT** /users/{user_id}/roles | Set User Roles
[**updateUser**](UserApi.md#updateUser) | **PATCH** /users/{user_id} | Update User
[**updateUserCredentialsEmail**](UserApi.md#updateUserCredentialsEmail) | **PATCH** /users/{user_id}/credentials_email | Update Email/Password Credential
[**user**](UserApi.md#user) | **GET** /users/{user_id} | Get User by Id
[**userAttributeUserValues**](UserApi.md#userAttributeUserValues) | **GET** /users/{user_id}/attribute_values | Get User Attribute Values
[**userCredentialsApi3**](UserApi.md#userCredentialsApi3) | **GET** /users/{user_id}/credentials_api3/{credentials_api3_id} | Get API 3 Credential
[**userCredentialsEmail**](UserApi.md#userCredentialsEmail) | **GET** /users/{user_id}/credentials_email | Get Email/Password Credential
[**userCredentialsEmbed**](UserApi.md#userCredentialsEmbed) | **GET** /users/{user_id}/credentials_embed/{credentials_embed_id} | Get Embedding Credential
[**userCredentialsGoogle**](UserApi.md#userCredentialsGoogle) | **GET** /users/{user_id}/credentials_google | Get Google Auth Credential
[**userCredentialsLdap**](UserApi.md#userCredentialsLdap) | **GET** /users/{user_id}/credentials_ldap | Get LDAP Credential
[**userCredentialsLookerOpenid**](UserApi.md#userCredentialsLookerOpenid) | **GET** /users/{user_id}/credentials_looker_openid | Get Looker OpenId Credential
[**userCredentialsOidc**](UserApi.md#userCredentialsOidc) | **GET** /users/{user_id}/credentials_oidc | Get OIDC Auth Credential
[**userCredentialsSaml**](UserApi.md#userCredentialsSaml) | **GET** /users/{user_id}/credentials_saml | Get Saml Auth Credential
[**userCredentialsTotp**](UserApi.md#userCredentialsTotp) | **GET** /users/{user_id}/credentials_totp | Get Two-Factor Credential
[**userForCredential**](UserApi.md#userForCredential) | **GET** /users/credential/{credential_type}/{credential_id} | Get User by Credential Id
[**userRoles**](UserApi.md#userRoles) | **GET** /users/{user_id}/roles | Get User Roles
[**userSession**](UserApi.md#userSession) | **GET** /users/{user_id}/sessions/{session_id} | Get Web Login Session


<a name="allUserCredentialsApi3s"></a>
# **allUserCredentialsApi3s**
> [CredentialsApi3] allUserCredentialsApi3s(userId, opts)

Get All API 3 Credentials

### API 3 login information for the specified user. This is for the newer API keys that can be added for any user.

### Example
```javascript
var LookerApi31Reference = require('looker_api_31_reference');

var apiInstance = new LookerApi31Reference.UserApi();

var userId = 789; // Number | id of user

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
apiInstance.allUserCredentialsApi3s(userId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Number**| id of user | 
 **fields** | **String**| Requested fields. | [optional] 

### Return type

[**[CredentialsApi3]**](CredentialsApi3.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="allUserCredentialsEmbeds"></a>
# **allUserCredentialsEmbeds**
> [CredentialsEmbed] allUserCredentialsEmbeds(userId, opts)

Get All Embedding Credentials

### Embed login information for the specified user.

### Example
```javascript
var LookerApi31Reference = require('looker_api_31_reference');

var apiInstance = new LookerApi31Reference.UserApi();

var userId = 789; // Number | id of user

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
apiInstance.allUserCredentialsEmbeds(userId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Number**| id of user | 
 **fields** | **String**| Requested fields. | [optional] 

### Return type

[**[CredentialsEmbed]**](CredentialsEmbed.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="allUserSessions"></a>
# **allUserSessions**
> [Session] allUserSessions(userId, opts)

Get All Web Login Sessions

### Web login session for the specified user.

### Example
```javascript
var LookerApi31Reference = require('looker_api_31_reference');

var apiInstance = new LookerApi31Reference.UserApi();

var userId = 789; // Number | id of user

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
apiInstance.allUserSessions(userId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Number**| id of user | 
 **fields** | **String**| Requested fields. | [optional] 

### Return type

[**[Session]**](Session.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="allUsers"></a>
# **allUsers**
> [User] allUsers(opts)

Get All Users

### Get information about all users. 

### Example
```javascript
var LookerApi31Reference = require('looker_api_31_reference');

var apiInstance = new LookerApi31Reference.UserApi();

var opts = { 
  'fields': "fields_example", // String | Requested fields.
  'page': 789, // Number | Requested page.
  'perPage': 789, // Number | Results per page.
  'sorts': "sorts_example", // String | Fields to sort by.
  'ids': [3.4] // [Number] | Optional list of ids to get specific users.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.allUsers(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fields** | **String**| Requested fields. | [optional] 
 **page** | **Number**| Requested page. | [optional] 
 **perPage** | **Number**| Results per page. | [optional] 
 **sorts** | **String**| Fields to sort by. | [optional] 
 **ids** | [**[Number]**](Number.md)| Optional list of ids to get specific users. | [optional] 

### Return type

[**[User]**](User.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createUser"></a>
# **createUser**
> User createUser(opts)

Create User

### Create a user with the specified information. 

### Example
```javascript
var LookerApi31Reference = require('looker_api_31_reference');

var apiInstance = new LookerApi31Reference.UserApi();

var opts = { 
  'body': new LookerApi31Reference.User(), // User | User
  'fields': "fields_example" // String | Requested fields.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createUser(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**User**](User.md)| User | [optional] 
 **fields** | **String**| Requested fields. | [optional] 

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createUserCredentialsApi3"></a>
# **createUserCredentialsApi3**
> CredentialsApi3 createUserCredentialsApi3(userId, opts)

Create API 3 Credential

### API 3 login information for the specified user. This is for the newer API keys that can be added for any user.

### Example
```javascript
var LookerApi31Reference = require('looker_api_31_reference');

var apiInstance = new LookerApi31Reference.UserApi();

var userId = 789; // Number | id of user

var opts = { 
  'body': new LookerApi31Reference.CredentialsApi3(), // CredentialsApi3 | API 3 Credential
  'fields': "fields_example" // String | Requested fields.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createUserCredentialsApi3(userId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Number**| id of user | 
 **body** | [**CredentialsApi3**](CredentialsApi3.md)| API 3 Credential | [optional] 
 **fields** | **String**| Requested fields. | [optional] 

### Return type

[**CredentialsApi3**](CredentialsApi3.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createUserCredentialsEmail"></a>
# **createUserCredentialsEmail**
> CredentialsEmail createUserCredentialsEmail(userId, opts)

Create Email/Password Credential

### Email/password login information for the specified user.

### Example
```javascript
var LookerApi31Reference = require('looker_api_31_reference');

var apiInstance = new LookerApi31Reference.UserApi();

var userId = 789; // Number | id of user

var opts = { 
  'body': new LookerApi31Reference.CredentialsEmail(), // CredentialsEmail | Email/Password Credential
  'fields': "fields_example" // String | Requested fields.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createUserCredentialsEmail(userId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Number**| id of user | 
 **body** | [**CredentialsEmail**](CredentialsEmail.md)| Email/Password Credential | [optional] 
 **fields** | **String**| Requested fields. | [optional] 

### Return type

[**CredentialsEmail**](CredentialsEmail.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createUserCredentialsEmailPasswordReset"></a>
# **createUserCredentialsEmailPasswordReset**
> CredentialsEmail createUserCredentialsEmailPasswordReset(userId, opts)

Create Password Reset Token

### Create a password reset token. This will create a cryptographically secure random password reset token for the user. If the user already has a password reset token then this invalidates the old token and creates a new one. The token is expressed as the &#39;password_reset_url&#39; of the user&#39;s email/password credential object. This takes an optional &#39;expires&#39; param to indicate if the new token should be an expiring token. Tokens that expire are typically used for self-service password resets for existing users. Invitation emails for new users typically are not set to expire. The expire period is always 60 minutes when expires is enabled. This method can be called with an empty body. 

### Example
```javascript
var LookerApi31Reference = require('looker_api_31_reference');

var apiInstance = new LookerApi31Reference.UserApi();

var userId = 789; // Number | Id of user

var opts = { 
  'expires': true, // Boolean | Expiring token.
  'fields': "fields_example" // String | Requested fields.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createUserCredentialsEmailPasswordReset(userId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Number**| Id of user | 
 **expires** | **Boolean**| Expiring token. | [optional] 
 **fields** | **String**| Requested fields. | [optional] 

### Return type

[**CredentialsEmail**](CredentialsEmail.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createUserCredentialsTotp"></a>
# **createUserCredentialsTotp**
> CredentialsTotp createUserCredentialsTotp(userId, opts)

Create Two-Factor Credential

### Two-factor login information for the specified user.

### Example
```javascript
var LookerApi31Reference = require('looker_api_31_reference');

var apiInstance = new LookerApi31Reference.UserApi();

var userId = 789; // Number | id of user

var opts = { 
  'body': new LookerApi31Reference.CredentialsTotp(), // CredentialsTotp | Two-Factor Credential
  'fields': "fields_example" // String | Requested fields.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createUserCredentialsTotp(userId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Number**| id of user | 
 **body** | [**CredentialsTotp**](CredentialsTotp.md)| Two-Factor Credential | [optional] 
 **fields** | **String**| Requested fields. | [optional] 

### Return type

[**CredentialsTotp**](CredentialsTotp.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteUser"></a>
# **deleteUser**
> &#39;String&#39; deleteUser(userId)

Delete User

### Delete the user with a specific id.  **DANGER** this will delete the user and all looks and other information owned by the user. 

### Example
```javascript
var LookerApi31Reference = require('looker_api_31_reference');

var apiInstance = new LookerApi31Reference.UserApi();

var userId = 789; // Number | Id of user


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteUser(userId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Number**| Id of user | 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteUserAttributeUserValue"></a>
# **deleteUserAttributeUserValue**
> deleteUserAttributeUserValue(userId, userAttributeId)

Delete User Attribute User Value

### Delete a user attribute value from a user&#39;s account settings.  After the user attribute value is deleted from the user&#39;s account settings, subsequent requests for the user attribute value for this user will draw from the user&#39;s groups or the default value of the user attribute. See [Get User Attribute Values](#!/User/user_attribute_user_values) for more information about how user attribute values are resolved. 

### Example
```javascript
var LookerApi31Reference = require('looker_api_31_reference');

var apiInstance = new LookerApi31Reference.UserApi();

var userId = 789; // Number | Id of user

var userAttributeId = 789; // Number | Id of user attribute


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteUserAttributeUserValue(userId, userAttributeId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Number**| Id of user | 
 **userAttributeId** | **Number**| Id of user attribute | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteUserCredentialsApi3"></a>
# **deleteUserCredentialsApi3**
> &#39;String&#39; deleteUserCredentialsApi3(userId, credentialsApi3Id)

Delete API 3 Credential

### API 3 login information for the specified user. This is for the newer API keys that can be added for any user.

### Example
```javascript
var LookerApi31Reference = require('looker_api_31_reference');

var apiInstance = new LookerApi31Reference.UserApi();

var userId = 789; // Number | id of user

var credentialsApi3Id = 789; // Number | id of API 3 Credential


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteUserCredentialsApi3(userId, credentialsApi3Id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Number**| id of user | 
 **credentialsApi3Id** | **Number**| id of API 3 Credential | 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteUserCredentialsEmail"></a>
# **deleteUserCredentialsEmail**
> &#39;String&#39; deleteUserCredentialsEmail(userId)

Delete Email/Password Credential

### Email/password login information for the specified user.

### Example
```javascript
var LookerApi31Reference = require('looker_api_31_reference');

var apiInstance = new LookerApi31Reference.UserApi();

var userId = 789; // Number | id of user


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteUserCredentialsEmail(userId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Number**| id of user | 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteUserCredentialsEmbed"></a>
# **deleteUserCredentialsEmbed**
> &#39;String&#39; deleteUserCredentialsEmbed(userId, credentialsEmbedId)

Delete Embedding Credential

### Embed login information for the specified user.

### Example
```javascript
var LookerApi31Reference = require('looker_api_31_reference');

var apiInstance = new LookerApi31Reference.UserApi();

var userId = 789; // Number | id of user

var credentialsEmbedId = 789; // Number | id of Embedding Credential


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteUserCredentialsEmbed(userId, credentialsEmbedId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Number**| id of user | 
 **credentialsEmbedId** | **Number**| id of Embedding Credential | 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteUserCredentialsGoogle"></a>
# **deleteUserCredentialsGoogle**
> &#39;String&#39; deleteUserCredentialsGoogle(userId)

Delete Google Auth Credential

### Google authentication login information for the specified user.

### Example
```javascript
var LookerApi31Reference = require('looker_api_31_reference');

var apiInstance = new LookerApi31Reference.UserApi();

var userId = 789; // Number | id of user


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteUserCredentialsGoogle(userId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Number**| id of user | 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteUserCredentialsLdap"></a>
# **deleteUserCredentialsLdap**
> &#39;String&#39; deleteUserCredentialsLdap(userId)

Delete LDAP Credential

### LDAP login information for the specified user.

### Example
```javascript
var LookerApi31Reference = require('looker_api_31_reference');

var apiInstance = new LookerApi31Reference.UserApi();

var userId = 789; // Number | id of user


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteUserCredentialsLdap(userId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Number**| id of user | 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteUserCredentialsLookerOpenid"></a>
# **deleteUserCredentialsLookerOpenid**
> &#39;String&#39; deleteUserCredentialsLookerOpenid(userId)

Delete Looker OpenId Credential

### Looker Openid login information for the specified user. Used by Looker Analysts.

### Example
```javascript
var LookerApi31Reference = require('looker_api_31_reference');

var apiInstance = new LookerApi31Reference.UserApi();

var userId = 789; // Number | id of user


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteUserCredentialsLookerOpenid(userId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Number**| id of user | 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteUserCredentialsOidc"></a>
# **deleteUserCredentialsOidc**
> &#39;String&#39; deleteUserCredentialsOidc(userId)

Delete OIDC Auth Credential

### OpenID Connect (OIDC) authentication login information for the specified user.

### Example
```javascript
var LookerApi31Reference = require('looker_api_31_reference');

var apiInstance = new LookerApi31Reference.UserApi();

var userId = 789; // Number | id of user


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteUserCredentialsOidc(userId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Number**| id of user | 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteUserCredentialsSaml"></a>
# **deleteUserCredentialsSaml**
> &#39;String&#39; deleteUserCredentialsSaml(userId)

Delete Saml Auth Credential

### Saml authentication login information for the specified user.

### Example
```javascript
var LookerApi31Reference = require('looker_api_31_reference');

var apiInstance = new LookerApi31Reference.UserApi();

var userId = 789; // Number | id of user


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteUserCredentialsSaml(userId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Number**| id of user | 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteUserCredentialsTotp"></a>
# **deleteUserCredentialsTotp**
> &#39;String&#39; deleteUserCredentialsTotp(userId)

Delete Two-Factor Credential

### Two-factor login information for the specified user.

### Example
```javascript
var LookerApi31Reference = require('looker_api_31_reference');

var apiInstance = new LookerApi31Reference.UserApi();

var userId = 789; // Number | id of user


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteUserCredentialsTotp(userId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Number**| id of user | 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteUserSession"></a>
# **deleteUserSession**
> &#39;String&#39; deleteUserSession(userId, sessionId)

Delete Web Login Session

### Web login session for the specified user.

### Example
```javascript
var LookerApi31Reference = require('looker_api_31_reference');

var apiInstance = new LookerApi31Reference.UserApi();

var userId = 789; // Number | id of user

var sessionId = 789; // Number | id of Web Login Session


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteUserSession(userId, sessionId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Number**| id of user | 
 **sessionId** | **Number**| id of Web Login Session | 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="me"></a>
# **me**
> User me(opts)

Get Current User

### Get information about the current user; i.e. the user account currently calling the API. 

### Example
```javascript
var LookerApi31Reference = require('looker_api_31_reference');

var apiInstance = new LookerApi31Reference.UserApi();

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
apiInstance.me(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fields** | **String**| Requested fields. | [optional] 

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="searchUsers"></a>
# **searchUsers**
> [User] searchUsers(opts)

Search Users

### Search users  Returns all&lt;sup&gt;*&lt;/sup&gt; user records that match the given search criteria.  If multiple search params are given and &#x60;filter_or&#x60; is FALSE or not specified, search params are combined in a logical AND operation. Only rows that match *all* search param criteria will be returned.  If &#x60;filter_or&#x60; is TRUE, multiple search params are combined in a logical OR operation. Results will include rows that match **any** of the search criteria.  String search params use case-insensitive matching. String search params can contain &#x60;%&#x60; and &#39;_&#39; as SQL LIKE pattern match wildcard expressions. example&#x3D;\&quot;dan%\&quot; will match \&quot;danger\&quot; and \&quot;Danzig\&quot; but not \&quot;David\&quot; example&#x3D;\&quot;D_m%\&quot; will match \&quot;Damage\&quot; and \&quot;dump\&quot;  Integer search params can accept a single value or a comma separated list of values. The multiple values will be combined under a logical OR operation - results will match at least one of the given values.  Most search params can accept \&quot;IS NULL\&quot; and \&quot;NOT NULL\&quot; as special expressions to match or exclude (respectively) rows where the column is null.  Boolean search params accept only \&quot;true\&quot; and \&quot;false\&quot; as values.   (&lt;sup&gt;*&lt;/sup&gt;) Results are always filtered to the level of information the caller is permitted to view. Looker admins can see all user details; normal users in an open system can see names of other users but no details; normal users in a closed system can only see names of other users who are members of the same group as the user.  

### Example
```javascript
var LookerApi31Reference = require('looker_api_31_reference');

var apiInstance = new LookerApi31Reference.UserApi();

var opts = { 
  'fields': "fields_example", // String | Include only these fields in the response
  'page': 789, // Number | Return only page N of paginated results
  'perPage': 789, // Number | Return N rows of data per page
  'sorts': "sorts_example", // String | Fields to sort by.
  'id': 789, // Number | Match User Id.
  'firstName': "firstName_example", // String | Match First name.
  'lastName': "lastName_example", // String | Match Last name.
  'verifiedLookerEmployee': true, // Boolean | Search for user accounts associated with Looker employees
  'email': "email_example", // String | Search for the user with this email address
  'isDisabled': true, // Boolean | Search for disabled user accounts
  'filterOr': true, // Boolean | Combine given search criteria in a boolean OR expression
  'contentMetadataId': 789, // Number | Search for users who have access to this content_metadata item
  'groupId': 789 // Number | Search for users who are direct members of this group
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.searchUsers(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fields** | **String**| Include only these fields in the response | [optional] 
 **page** | **Number**| Return only page N of paginated results | [optional] 
 **perPage** | **Number**| Return N rows of data per page | [optional] 
 **sorts** | **String**| Fields to sort by. | [optional] 
 **id** | **Number**| Match User Id. | [optional] 
 **firstName** | **String**| Match First name. | [optional] 
 **lastName** | **String**| Match Last name. | [optional] 
 **verifiedLookerEmployee** | **Boolean**| Search for user accounts associated with Looker employees | [optional] 
 **email** | **String**| Search for the user with this email address | [optional] 
 **isDisabled** | **Boolean**| Search for disabled user accounts | [optional] 
 **filterOr** | **Boolean**| Combine given search criteria in a boolean OR expression | [optional] 
 **contentMetadataId** | **Number**| Search for users who have access to this content_metadata item | [optional] 
 **groupId** | **Number**| Search for users who are direct members of this group | [optional] 

### Return type

[**[User]**](User.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="searchUsersNames"></a>
# **searchUsersNames**
> [User] searchUsersNames(pattern, opts)

Search User Names

### Search for user accounts by name  Returns all user accounts where &#x60;first_name&#x60; OR &#x60;last_name&#x60; OR &#x60;email&#x60; field values match a pattern. The pattern can contain &#x60;%&#x60; and &#x60;_&#x60; wildcards as in SQL LIKE expressions.  Any additional search params will be combined into a logical AND expression. 

### Example
```javascript
var LookerApi31Reference = require('looker_api_31_reference');

var apiInstance = new LookerApi31Reference.UserApi();

var pattern = "pattern_example"; // String | Pattern to match

var opts = { 
  'fields': "fields_example", // String | Include only these fields in the response
  'page': 789, // Number | Return only page N of paginated results
  'perPage': 789, // Number | Return N rows of data per page
  'sorts': "sorts_example", // String | Fields to sort by
  'id': 789, // Number | Match User Id
  'firstName': "firstName_example", // String | Match First name
  'lastName': "lastName_example", // String | Match Last name
  'verifiedLookerEmployee': true, // Boolean | Match Verified Looker employee
  'email': "email_example", // String | Match Email Address
  'isDisabled': true // Boolean | Include or exclude disabled accounts in the results
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.searchUsersNames(pattern, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pattern** | **String**| Pattern to match | 
 **fields** | **String**| Include only these fields in the response | [optional] 
 **page** | **Number**| Return only page N of paginated results | [optional] 
 **perPage** | **Number**| Return N rows of data per page | [optional] 
 **sorts** | **String**| Fields to sort by | [optional] 
 **id** | **Number**| Match User Id | [optional] 
 **firstName** | **String**| Match First name | [optional] 
 **lastName** | **String**| Match Last name | [optional] 
 **verifiedLookerEmployee** | **Boolean**| Match Verified Looker employee | [optional] 
 **email** | **String**| Match Email Address | [optional] 
 **isDisabled** | **Boolean**| Include or exclude disabled accounts in the results | [optional] 

### Return type

[**[User]**](User.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="setUserAttributeUserValue"></a>
# **setUserAttributeUserValue**
> UserAttributeWithValue setUserAttributeUserValue(userId, userAttributeId, body)

Set User Attribute User Value

### Store a custom value for a user attribute in a user&#39;s account settings.  Per-user user attribute values take precedence over group or default values. 

### Example
```javascript
var LookerApi31Reference = require('looker_api_31_reference');

var apiInstance = new LookerApi31Reference.UserApi();

var userId = 789; // Number | Id of user

var userAttributeId = 789; // Number | Id of user attribute

var body = new LookerApi31Reference.UserAttributeWithValue(); // UserAttributeWithValue | New attribute value for user.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.setUserAttributeUserValue(userId, userAttributeId, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Number**| Id of user | 
 **userAttributeId** | **Number**| Id of user attribute | 
 **body** | [**UserAttributeWithValue**](UserAttributeWithValue.md)| New attribute value for user. | 

### Return type

[**UserAttributeWithValue**](UserAttributeWithValue.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="setUserRoles"></a>
# **setUserRoles**
> [Role] setUserRoles(userId, body, opts)

Set User Roles

### Set roles of the user with a specific id. 

### Example
```javascript
var LookerApi31Reference = require('looker_api_31_reference');

var apiInstance = new LookerApi31Reference.UserApi();

var userId = 789; // Number | id of user

var body = [new LookerApi31Reference.[Number]()]; // [Number] | array of roles ids for user

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
apiInstance.setUserRoles(userId, body, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Number**| id of user | 
 **body** | **[Number]**| array of roles ids for user | 
 **fields** | **String**| Requested fields. | [optional] 

### Return type

[**[Role]**](Role.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateUser"></a>
# **updateUser**
> User updateUser(userId, body, opts)

Update User

### Update information about the user with a specific id. 

### Example
```javascript
var LookerApi31Reference = require('looker_api_31_reference');

var apiInstance = new LookerApi31Reference.UserApi();

var userId = 789; // Number | Id of user

var body = new LookerApi31Reference.User(); // User | User

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
apiInstance.updateUser(userId, body, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Number**| Id of user | 
 **body** | [**User**](User.md)| User | 
 **fields** | **String**| Requested fields. | [optional] 

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateUserCredentialsEmail"></a>
# **updateUserCredentialsEmail**
> CredentialsEmail updateUserCredentialsEmail(userId, body, opts)

Update Email/Password Credential

### Email/password login information for the specified user.

### Example
```javascript
var LookerApi31Reference = require('looker_api_31_reference');

var apiInstance = new LookerApi31Reference.UserApi();

var userId = 789; // Number | id of user

var body = new LookerApi31Reference.CredentialsEmail(); // CredentialsEmail | Email/Password Credential

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
apiInstance.updateUserCredentialsEmail(userId, body, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Number**| id of user | 
 **body** | [**CredentialsEmail**](CredentialsEmail.md)| Email/Password Credential | 
 **fields** | **String**| Requested fields. | [optional] 

### Return type

[**CredentialsEmail**](CredentialsEmail.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="user"></a>
# **user**
> User user(userId, opts)

Get User by Id

### Get information about the user with a specific id.  If the caller is an admin or the caller is the user being specified, then full user information will be returned. Otherwise, a minimal &#39;public&#39; variant of the user information will be returned. This contains The user name and avatar url, but no sensitive information. 

### Example
```javascript
var LookerApi31Reference = require('looker_api_31_reference');

var apiInstance = new LookerApi31Reference.UserApi();

var userId = 789; // Number | Id of user

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
apiInstance.user(userId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Number**| Id of user | 
 **fields** | **String**| Requested fields. | [optional] 

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="userAttributeUserValues"></a>
# **userAttributeUserValues**
> [UserAttributeWithValue] userAttributeUserValues(userId, opts)

Get User Attribute Values

### Get user attribute values for a given user.  Returns the values of specified user attributes (or all user attributes) for a certain user.  A value for each user attribute is searched for in the following locations, in this order: 1. in the user&#39;s account information 1. in groups that the user is a member of 1. the default value of the user attribute  If more than one group has a value defined for a user attribute, the group with the lowest rank wins.  The response will only include user attributes for which values were found. Use &#x60;include_unset&#x3D;true&#x60; to include empty records for user attributes with no value.  The value of all hidden user attributes will be blank. 

### Example
```javascript
var LookerApi31Reference = require('looker_api_31_reference');

var apiInstance = new LookerApi31Reference.UserApi();

var userId = 789; // Number | Id of user

var opts = { 
  'fields': "fields_example", // String | Requested fields.
  'userAttributeIds': [3.4], // [Number] | Specific user attributes to request. Omit or leave blank to request all user attributes.
  'allValues': true, // Boolean | If true, returns all values in the search path instead of just the first value found. Useful for debugging group precedence.
  'includeUnset': true // Boolean | If true, returns an empty record for each requested attribute that has no user, group, or default value.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.userAttributeUserValues(userId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Number**| Id of user | 
 **fields** | **String**| Requested fields. | [optional] 
 **userAttributeIds** | [**[Number]**](Number.md)| Specific user attributes to request. Omit or leave blank to request all user attributes. | [optional] 
 **allValues** | **Boolean**| If true, returns all values in the search path instead of just the first value found. Useful for debugging group precedence. | [optional] 
 **includeUnset** | **Boolean**| If true, returns an empty record for each requested attribute that has no user, group, or default value. | [optional] 

### Return type

[**[UserAttributeWithValue]**](UserAttributeWithValue.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="userCredentialsApi3"></a>
# **userCredentialsApi3**
> CredentialsApi3 userCredentialsApi3(userId, credentialsApi3Id, opts)

Get API 3 Credential

### API 3 login information for the specified user. This is for the newer API keys that can be added for any user.

### Example
```javascript
var LookerApi31Reference = require('looker_api_31_reference');

var apiInstance = new LookerApi31Reference.UserApi();

var userId = 789; // Number | Id of user

var credentialsApi3Id = 789; // Number | Id of API 3 Credential

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
apiInstance.userCredentialsApi3(userId, credentialsApi3Id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Number**| Id of user | 
 **credentialsApi3Id** | **Number**| Id of API 3 Credential | 
 **fields** | **String**| Requested fields. | [optional] 

### Return type

[**CredentialsApi3**](CredentialsApi3.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="userCredentialsEmail"></a>
# **userCredentialsEmail**
> CredentialsEmail userCredentialsEmail(userId, opts)

Get Email/Password Credential

### Email/password login information for the specified user.

### Example
```javascript
var LookerApi31Reference = require('looker_api_31_reference');

var apiInstance = new LookerApi31Reference.UserApi();

var userId = 789; // Number | id of user

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
apiInstance.userCredentialsEmail(userId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Number**| id of user | 
 **fields** | **String**| Requested fields. | [optional] 

### Return type

[**CredentialsEmail**](CredentialsEmail.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="userCredentialsEmbed"></a>
# **userCredentialsEmbed**
> CredentialsEmbed userCredentialsEmbed(userId, credentialsEmbedId, opts)

Get Embedding Credential

### Embed login information for the specified user.

### Example
```javascript
var LookerApi31Reference = require('looker_api_31_reference');

var apiInstance = new LookerApi31Reference.UserApi();

var userId = 789; // Number | Id of user

var credentialsEmbedId = 789; // Number | Id of Embedding Credential

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
apiInstance.userCredentialsEmbed(userId, credentialsEmbedId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Number**| Id of user | 
 **credentialsEmbedId** | **Number**| Id of Embedding Credential | 
 **fields** | **String**| Requested fields. | [optional] 

### Return type

[**CredentialsEmbed**](CredentialsEmbed.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="userCredentialsGoogle"></a>
# **userCredentialsGoogle**
> CredentialsGoogle userCredentialsGoogle(userId, opts)

Get Google Auth Credential

### Google authentication login information for the specified user.

### Example
```javascript
var LookerApi31Reference = require('looker_api_31_reference');

var apiInstance = new LookerApi31Reference.UserApi();

var userId = 789; // Number | id of user

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
apiInstance.userCredentialsGoogle(userId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Number**| id of user | 
 **fields** | **String**| Requested fields. | [optional] 

### Return type

[**CredentialsGoogle**](CredentialsGoogle.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="userCredentialsLdap"></a>
# **userCredentialsLdap**
> CredentialsLDAP userCredentialsLdap(userId, opts)

Get LDAP Credential

### LDAP login information for the specified user.

### Example
```javascript
var LookerApi31Reference = require('looker_api_31_reference');

var apiInstance = new LookerApi31Reference.UserApi();

var userId = 789; // Number | id of user

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
apiInstance.userCredentialsLdap(userId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Number**| id of user | 
 **fields** | **String**| Requested fields. | [optional] 

### Return type

[**CredentialsLDAP**](CredentialsLDAP.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="userCredentialsLookerOpenid"></a>
# **userCredentialsLookerOpenid**
> CredentialsLookerOpenid userCredentialsLookerOpenid(userId, opts)

Get Looker OpenId Credential

### Looker Openid login information for the specified user. Used by Looker Analysts.

### Example
```javascript
var LookerApi31Reference = require('looker_api_31_reference');

var apiInstance = new LookerApi31Reference.UserApi();

var userId = 789; // Number | id of user

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
apiInstance.userCredentialsLookerOpenid(userId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Number**| id of user | 
 **fields** | **String**| Requested fields. | [optional] 

### Return type

[**CredentialsLookerOpenid**](CredentialsLookerOpenid.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="userCredentialsOidc"></a>
# **userCredentialsOidc**
> CredentialsOIDC userCredentialsOidc(userId, opts)

Get OIDC Auth Credential

### OpenID Connect (OIDC) authentication login information for the specified user.

### Example
```javascript
var LookerApi31Reference = require('looker_api_31_reference');

var apiInstance = new LookerApi31Reference.UserApi();

var userId = 789; // Number | id of user

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
apiInstance.userCredentialsOidc(userId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Number**| id of user | 
 **fields** | **String**| Requested fields. | [optional] 

### Return type

[**CredentialsOIDC**](CredentialsOIDC.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="userCredentialsSaml"></a>
# **userCredentialsSaml**
> CredentialsSaml userCredentialsSaml(userId, opts)

Get Saml Auth Credential

### Saml authentication login information for the specified user.

### Example
```javascript
var LookerApi31Reference = require('looker_api_31_reference');

var apiInstance = new LookerApi31Reference.UserApi();

var userId = 789; // Number | id of user

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
apiInstance.userCredentialsSaml(userId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Number**| id of user | 
 **fields** | **String**| Requested fields. | [optional] 

### Return type

[**CredentialsSaml**](CredentialsSaml.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="userCredentialsTotp"></a>
# **userCredentialsTotp**
> CredentialsTotp userCredentialsTotp(userId, opts)

Get Two-Factor Credential

### Two-factor login information for the specified user.

### Example
```javascript
var LookerApi31Reference = require('looker_api_31_reference');

var apiInstance = new LookerApi31Reference.UserApi();

var userId = 789; // Number | id of user

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
apiInstance.userCredentialsTotp(userId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Number**| id of user | 
 **fields** | **String**| Requested fields. | [optional] 

### Return type

[**CredentialsTotp**](CredentialsTotp.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="userForCredential"></a>
# **userForCredential**
> User userForCredential(credentialType, credentialId, opts)

Get User by Credential Id

### Get information about the user with a credential of given type with specific id.  This is used to do things like find users by their embed external_user_id. Or, find the user with a given api3 client_id, etc. The &#39;credential_type&#39; matchs the &#39;type&#39; name of the various credential types. It must be one of the values listed in the table below. The &#39;credential_id&#39; is your unique Id for the user and is specific to each type of credential.  An example using the Ruby sdk might look like:  &#x60;sdk.user_for_credential(&#39;embed&#39;, &#39;customer-4959425&#39;)&#x60;  This table shows the supported &#39;Credential Type&#39; strings. The right column is for reference; it shows which field in the given credential type is actually searched when finding a user with the supplied &#39;credential_id&#39;.  | Credential Types | Id Field Matched | | ---------------- | ---------------- | | email            | email            | | google           | google_user_id   | | saml             | saml_user_id     | | oidc             | oidc_user_id     | | ldap             | ldap_id          | | api              | token            | | api3             | client_id        | | embed            | external_user_id | | looker_openid    | email            |  NOTE: The &#39;api&#39; credential type was only used with the legacy Looker query API and is no longer supported. The credential type for API you are currently looking at is &#39;api3&#39;.  

### Example
```javascript
var LookerApi31Reference = require('looker_api_31_reference');

var apiInstance = new LookerApi31Reference.UserApi();

var credentialType = "credentialType_example"; // String | Type name of credential

var credentialId = "credentialId_example"; // String | Id of credential

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
apiInstance.userForCredential(credentialType, credentialId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **credentialType** | **String**| Type name of credential | 
 **credentialId** | **String**| Id of credential | 
 **fields** | **String**| Requested fields. | [optional] 

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="userRoles"></a>
# **userRoles**
> [Role] userRoles(userId, opts)

Get User Roles

### Get information about roles of a given user 

### Example
```javascript
var LookerApi31Reference = require('looker_api_31_reference');

var apiInstance = new LookerApi31Reference.UserApi();

var userId = 789; // Number | id of user

var opts = { 
  'fields': "fields_example", // String | Requested fields.
  'directAssociationOnly': true // Boolean | Get only roles associated directly with the user: exclude those only associated through groups.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.userRoles(userId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Number**| id of user | 
 **fields** | **String**| Requested fields. | [optional] 
 **directAssociationOnly** | **Boolean**| Get only roles associated directly with the user: exclude those only associated through groups. | [optional] 

### Return type

[**[Role]**](Role.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="userSession"></a>
# **userSession**
> Session userSession(userId, sessionId, opts)

Get Web Login Session

### Web login session for the specified user.

### Example
```javascript
var LookerApi31Reference = require('looker_api_31_reference');

var apiInstance = new LookerApi31Reference.UserApi();

var userId = 789; // Number | Id of user

var sessionId = 789; // Number | Id of Web Login Session

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
apiInstance.userSession(userId, sessionId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Number**| Id of user | 
 **sessionId** | **Number**| Id of Web Login Session | 
 **fields** | **String**| Requested fields. | [optional] 

### Return type

[**Session**](Session.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

