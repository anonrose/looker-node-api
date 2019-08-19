# LookerApi31Reference.FolderApi

All URIs are relative to */api/3.1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**allFolders**](FolderApi.md#allFolders) | **GET** /folders | Get All Folders
[**createFolder**](FolderApi.md#createFolder) | **POST** /folders | Create Folder
[**deleteFolder**](FolderApi.md#deleteFolder) | **DELETE** /folders/{folder_id} | Delete Folder
[**folder**](FolderApi.md#folder) | **GET** /folders/{folder_id} | Get Folder
[**folderAncestors**](FolderApi.md#folderAncestors) | **GET** /folders/{folder_id}/ancestors | Get Folder Ancestors
[**folderChildren**](FolderApi.md#folderChildren) | **GET** /folders/{folder_id}/children | Get Folder Children
[**folderChildrenSearch**](FolderApi.md#folderChildrenSearch) | **GET** /folders/{folder_id}/children/search | Search Folder Children
[**folderDashboards**](FolderApi.md#folderDashboards) | **GET** /folders/{folder_id}/dashboards | Get Folder Dashboards
[**folderLooks**](FolderApi.md#folderLooks) | **GET** /folders/{folder_id}/looks | Get Folder Looks
[**folderParent**](FolderApi.md#folderParent) | **GET** /folders/{folder_id}/parent | Get Folder Parent
[**searchFolders**](FolderApi.md#searchFolders) | **GET** /folders/search | Search Folders
[**updateFolder**](FolderApi.md#updateFolder) | **PATCH** /folders/{folder_id} | Update Folder


<a name="allFolders"></a>
# **allFolders**
> [Folder] allFolders(opts)

Get All Folders

### Get information about all folders.

### Example
```javascript
var LookerApi31Reference = require('looker-node-api');

var apiInstance = new LookerApi31Reference.FolderApi();

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
apiInstance.allFolders(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fields** | **String**| Requested fields. | [optional]

### Return type

[**[Folder]**](Folder.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createFolder"></a>
# **createFolder**
> Folder createFolder(opts)

Create Folder

### Create a folder with specified information.  Caller must have permission to edit the parent folder and to create folders, otherwise the request returns 404 Not Found.

### Example
```javascript
var LookerApi31Reference = require('looker-node-api');

var apiInstance = new LookerApi31Reference.FolderApi();

var opts = {
  'body': new LookerApi31Reference.Folder() // Folder | Folder
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createFolder(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Folder**](Folder.md)| Folder | [optional]

### Return type

[**Folder**](Folder.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteFolder"></a>
# **deleteFolder**
> &#39;String&#39; deleteFolder(folderId)

Delete Folder

### Delete the folder with a specific id including any children folders. **DANGER** this will delete all looks and dashboards in the folder.

### Example
```javascript
var LookerApi31Reference = require('looker-node-api');

var apiInstance = new LookerApi31Reference.FolderApi();

var folderId = "folderId_example"; // String | Id of folder


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteFolder(folderId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **folderId** | **String**| Id of folder |

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="folder"></a>
# **folder**
> Folder folder(folderId, opts)

Get Folder

### Get information about the folder with a specific id.

### Example
```javascript
var LookerApi31Reference = require('looker-node-api');

var apiInstance = new LookerApi31Reference.FolderApi();

var folderId = "folderId_example"; // String | Id of folder

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
apiInstance.folder(folderId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **folderId** | **String**| Id of folder |
 **fields** | **String**| Requested fields. | [optional]

### Return type

[**Folder**](Folder.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="folderAncestors"></a>
# **folderAncestors**
> [Folder] folderAncestors(folderId, opts)

Get Folder Ancestors

### Get the ancestors of a folder

### Example
```javascript
var LookerApi31Reference = require('looker-node-api');

var apiInstance = new LookerApi31Reference.FolderApi();

var folderId = "folderId_example"; // String | Id of folder

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
apiInstance.folderAncestors(folderId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **folderId** | **String**| Id of folder |
 **fields** | **String**| Requested fields. | [optional]

### Return type

[**[Folder]**](Folder.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="folderChildren"></a>
# **folderChildren**
> [Space] folderChildren(folderId, opts)

Get Folder Children

### Get the children of a folder.

### Example
```javascript
var LookerApi31Reference = require('looker-node-api');

var apiInstance = new LookerApi31Reference.FolderApi();

var folderId = "folderId_example"; // String | Id of folder

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
apiInstance.folderChildren(folderId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **folderId** | **String**| Id of folder |
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

<a name="folderChildrenSearch"></a>
# **folderChildrenSearch**
> [Folder] folderChildrenSearch(folderId, opts)

Search Folder Children

### Search the children of a folder

### Example
```javascript
var LookerApi31Reference = require('looker-node-api');

var apiInstance = new LookerApi31Reference.FolderApi();

var folderId = "folderId_example"; // String | Id of folder

var opts = {
  'fields': "fields_example", // String | Requested fields.
  'sorts': "sorts_example", // String | Fields to sort by.
  'name': "name_example" // String | Match folder name.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.folderChildrenSearch(folderId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **folderId** | **String**| Id of folder |
 **fields** | **String**| Requested fields. | [optional]
 **sorts** | **String**| Fields to sort by. | [optional]
 **name** | **String**| Match folder name. | [optional]

### Return type

[**[Folder]**](Folder.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="folderDashboards"></a>
# **folderDashboards**
> [Dashboard] folderDashboards(folderId, opts)

Get Folder Dashboards

### Get the dashboards in a folder

### Example
```javascript
var LookerApi31Reference = require('looker-node-api');

var apiInstance = new LookerApi31Reference.FolderApi();

var folderId = "folderId_example"; // String | Id of folder

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
apiInstance.folderDashboards(folderId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **folderId** | **String**| Id of folder |
 **fields** | **String**| Requested fields. | [optional]

### Return type

[**[Dashboard]**](Dashboard.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="folderLooks"></a>
# **folderLooks**
> [LookWithQuery] folderLooks(folderId, opts)

Get Folder Looks

### Get the looks in a folder

### Example
```javascript
var LookerApi31Reference = require('looker-node-api');

var apiInstance = new LookerApi31Reference.FolderApi();

var folderId = "folderId_example"; // String | Id of folder

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
apiInstance.folderLooks(folderId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **folderId** | **String**| Id of folder |
 **fields** | **String**| Requested fields. | [optional]

### Return type

[**[LookWithQuery]**](LookWithQuery.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="folderParent"></a>
# **folderParent**
> Folder folderParent(folderId, opts)

Get Folder Parent

### Get the parent of a folder

### Example
```javascript
var LookerApi31Reference = require('looker-node-api');

var apiInstance = new LookerApi31Reference.FolderApi();

var folderId = "folderId_example"; // String | Id of folder

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
apiInstance.folderParent(folderId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **folderId** | **String**| Id of folder |
 **fields** | **String**| Requested fields. | [optional]

### Return type

[**Folder**](Folder.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="searchFolders"></a>
# **searchFolders**
> [Folder] searchFolders(opts)

Search Folders

Search for folders by creator id, parent id, name, etc

### Example
```javascript
var LookerApi31Reference = require('looker-node-api');

var apiInstance = new LookerApi31Reference.FolderApi();

var opts = {
  'fields': "fields_example", // String | Requested fields.
  'page': 789, // Number | Requested page.
  'perPage': 789, // Number | Results per page.
  'limit': 789, // Number | Number of results to return. (used with offset and takes priority over page and per_page)
  'offset': 789, // Number | Number of results to skip before returning any. (used with limit and takes priority over page and per_page)
  'sorts': "sorts_example", // String | Fields to sort by.
  'name': "name_example", // String | Match Space title.
  'id': 789, // Number | Match Space id
  'parentId': "parentId_example", // String | Filter on a children of a particular folder.
  'creatorId': "creatorId_example", // String | Filter on folder created by a particular user.
  'filterOr': true // Boolean | Combine given search criteria in a boolean OR expression
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.searchFolders(opts, callback);
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
 **parentId** | **String**| Filter on a children of a particular folder. | [optional]
 **creatorId** | **String**| Filter on folder created by a particular user. | [optional]
 **filterOr** | **Boolean**| Combine given search criteria in a boolean OR expression | [optional]

### Return type

[**[Folder]**](Folder.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateFolder"></a>
# **updateFolder**
> Folder updateFolder(folderId, body)

Update Folder

### Update the folder with a specific id.

### Example
```javascript
var LookerApi31Reference = require('looker-node-api');

var apiInstance = new LookerApi31Reference.FolderApi();

var folderId = "folderId_example"; // String | Id of folder

var body = new LookerApi31Reference.Folder(); // Folder | Folder


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateFolder(folderId, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **folderId** | **String**| Id of folder |
 **body** | [**Folder**](Folder.md)| Folder |

### Return type

[**Folder**](Folder.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

