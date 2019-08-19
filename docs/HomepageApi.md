# LookerApi31Reference.HomepageApi

All URIs are relative to */api/3.1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**allHomepageItems**](HomepageApi.md#allHomepageItems) | **GET** /homepage_items | Get All Homepage Items
[**allHomepageSections**](HomepageApi.md#allHomepageSections) | **GET** /homepage_sections | Get All Homepage sections
[**allHomepages**](HomepageApi.md#allHomepages) | **GET** /homepages | Get All Homepages
[**createHomepage**](HomepageApi.md#createHomepage) | **POST** /homepages | Create Homepage
[**createHomepageItem**](HomepageApi.md#createHomepageItem) | **POST** /homepage_items | Create Homepage Item
[**createHomepageSection**](HomepageApi.md#createHomepageSection) | **POST** /homepage_sections | Create Homepage section
[**deleteHomepage**](HomepageApi.md#deleteHomepage) | **DELETE** /homepages/{homepage_id} | Delete Homepage
[**deleteHomepageItem**](HomepageApi.md#deleteHomepageItem) | **DELETE** /homepage_items/{homepage_item_id} | Delete Homepage Item
[**deleteHomepageSection**](HomepageApi.md#deleteHomepageSection) | **DELETE** /homepage_sections/{homepage_section_id} | Delete Homepage section
[**homepage**](HomepageApi.md#homepage) | **GET** /homepages/{homepage_id} | Get Homepage
[**homepageItem**](HomepageApi.md#homepageItem) | **GET** /homepage_items/{homepage_item_id} | Get Homepage Item
[**homepageSection**](HomepageApi.md#homepageSection) | **GET** /homepage_sections/{homepage_section_id} | Get Homepage section
[**searchHomepages**](HomepageApi.md#searchHomepages) | **GET** /homepages/search | Search Homepages
[**updateHomepage**](HomepageApi.md#updateHomepage) | **PATCH** /homepages/{homepage_id} | Update Homepage
[**updateHomepageItem**](HomepageApi.md#updateHomepageItem) | **PATCH** /homepage_items/{homepage_item_id} | Update Homepage Item
[**updateHomepageSection**](HomepageApi.md#updateHomepageSection) | **PATCH** /homepage_sections/{homepage_section_id} | Update Homepage section


<a name="allHomepageItems"></a>
# **allHomepageItems**
> [HomepageItem] allHomepageItems(opts)

Get All Homepage Items

### Get information about all homepage items.

### Example
```javascript
var LookerApi31Reference = require('looker-node-api');

var apiInstance = new LookerApi31Reference.HomepageApi();

var opts = {
  'fields': "fields_example", // String | Requested fields.
  'sorts': "sorts_example", // String | Fields to sort by.
  'homepageSectionId': "homepageSectionId_example" // String | Filter to a specific homepage section
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.allHomepageItems(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fields** | **String**| Requested fields. | [optional]
 **sorts** | **String**| Fields to sort by. | [optional]
 **homepageSectionId** | **String**| Filter to a specific homepage section | [optional]

### Return type

[**[HomepageItem]**](HomepageItem.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="allHomepageSections"></a>
# **allHomepageSections**
> [HomepageSection] allHomepageSections(opts)

Get All Homepage sections

### Get information about all homepage sections.

### Example
```javascript
var LookerApi31Reference = require('looker-node-api');

var apiInstance = new LookerApi31Reference.HomepageApi();

var opts = {
  'fields': "fields_example", // String | Requested fields.
  'sorts': "sorts_example" // String | Fields to sort by.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.allHomepageSections(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fields** | **String**| Requested fields. | [optional]
 **sorts** | **String**| Fields to sort by. | [optional]

### Return type

[**[HomepageSection]**](HomepageSection.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="allHomepages"></a>
# **allHomepages**
> [Homepage] allHomepages(opts)

Get All Homepages

### Get information about all homepages.

### Example
```javascript
var LookerApi31Reference = require('looker-node-api');

var apiInstance = new LookerApi31Reference.HomepageApi();

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
apiInstance.allHomepages(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fields** | **String**| Requested fields. | [optional]

### Return type

[**[Homepage]**](Homepage.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createHomepage"></a>
# **createHomepage**
> Homepage createHomepage(opts)

Create Homepage

### Create a new homepage.

### Example
```javascript
var LookerApi31Reference = require('looker-node-api');

var apiInstance = new LookerApi31Reference.HomepageApi();

var opts = {
  'body': new LookerApi31Reference.Homepage(), // Homepage | Homepage
  'fields': "fields_example" // String | Requested fields.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createHomepage(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Homepage**](Homepage.md)| Homepage | [optional]
 **fields** | **String**| Requested fields. | [optional]

### Return type

[**Homepage**](Homepage.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createHomepageItem"></a>
# **createHomepageItem**
> HomepageItem createHomepageItem(opts)

Create Homepage Item

### Create a new homepage item.

### Example
```javascript
var LookerApi31Reference = require('looker-node-api');

var apiInstance = new LookerApi31Reference.HomepageApi();

var opts = {
  'body': new LookerApi31Reference.HomepageItem(), // HomepageItem | Homepage Item
  'fields': "fields_example" // String | Requested fields.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createHomepageItem(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**HomepageItem**](HomepageItem.md)| Homepage Item | [optional]
 **fields** | **String**| Requested fields. | [optional]

### Return type

[**HomepageItem**](HomepageItem.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createHomepageSection"></a>
# **createHomepageSection**
> HomepageSection createHomepageSection(opts)

Create Homepage section

### Create a new homepage section.

### Example
```javascript
var LookerApi31Reference = require('looker-node-api');

var apiInstance = new LookerApi31Reference.HomepageApi();

var opts = {
  'body': new LookerApi31Reference.HomepageSection(), // HomepageSection | Homepage section
  'fields': "fields_example" // String | Requested fields.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createHomepageSection(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**HomepageSection**](HomepageSection.md)| Homepage section | [optional]
 **fields** | **String**| Requested fields. | [optional]

### Return type

[**HomepageSection**](HomepageSection.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteHomepage"></a>
# **deleteHomepage**
> &#39;String&#39; deleteHomepage(homepageId)

Delete Homepage

### Delete a homepage.

### Example
```javascript
var LookerApi31Reference = require('looker-node-api');

var apiInstance = new LookerApi31Reference.HomepageApi();

var homepageId = 789; // Number | Id of homepage


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteHomepage(homepageId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **homepageId** | **Number**| Id of homepage |

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteHomepageItem"></a>
# **deleteHomepageItem**
> &#39;String&#39; deleteHomepageItem(homepageItemId)

Delete Homepage Item

### Delete a homepage item.

### Example
```javascript
var LookerApi31Reference = require('looker-node-api');

var apiInstance = new LookerApi31Reference.HomepageApi();

var homepageItemId = 789; // Number | Id of homepage_item


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteHomepageItem(homepageItemId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **homepageItemId** | **Number**| Id of homepage_item |

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteHomepageSection"></a>
# **deleteHomepageSection**
> &#39;String&#39; deleteHomepageSection(homepageSectionId)

Delete Homepage section

### Delete a homepage section.

### Example
```javascript
var LookerApi31Reference = require('looker-node-api');

var apiInstance = new LookerApi31Reference.HomepageApi();

var homepageSectionId = 789; // Number | Id of homepage_section


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteHomepageSection(homepageSectionId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **homepageSectionId** | **Number**| Id of homepage_section |

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="homepage"></a>
# **homepage**
> Homepage homepage(homepageId, opts)

Get Homepage

### Get information about a homepage.

### Example
```javascript
var LookerApi31Reference = require('looker-node-api');

var apiInstance = new LookerApi31Reference.HomepageApi();

var homepageId = 789; // Number | Id of homepage

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
apiInstance.homepage(homepageId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **homepageId** | **Number**| Id of homepage |
 **fields** | **String**| Requested fields. | [optional]

### Return type

[**Homepage**](Homepage.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="homepageItem"></a>
# **homepageItem**
> HomepageItem homepageItem(homepageItemId, opts)

Get Homepage Item

### Get information about a homepage item.

### Example
```javascript
var LookerApi31Reference = require('looker-node-api');

var apiInstance = new LookerApi31Reference.HomepageApi();

var homepageItemId = 789; // Number | Id of homepage item

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
apiInstance.homepageItem(homepageItemId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **homepageItemId** | **Number**| Id of homepage item |
 **fields** | **String**| Requested fields. | [optional]

### Return type

[**HomepageItem**](HomepageItem.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="homepageSection"></a>
# **homepageSection**
> HomepageSection homepageSection(homepageSectionId, opts)

Get Homepage section

### Get information about a homepage section.

### Example
```javascript
var LookerApi31Reference = require('looker-node-api');

var apiInstance = new LookerApi31Reference.HomepageApi();

var homepageSectionId = 789; // Number | Id of homepage section

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
apiInstance.homepageSection(homepageSectionId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **homepageSectionId** | **Number**| Id of homepage section |
 **fields** | **String**| Requested fields. | [optional]

### Return type

[**HomepageSection**](HomepageSection.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="searchHomepages"></a>
# **searchHomepages**
> [Homepage] searchHomepages(opts)

Search Homepages

### Search Homepages  If multiple search params are given and &#x60;filter_or&#x60; is FALSE or not specified, search params are combined in a logical AND operation. Only rows that match *all* search param criteria will be returned.  If &#x60;filter_or&#x60; is TRUE, multiple search params are combined in a logical OR operation. Results will include rows that match **any** of the search criteria.  String search params use case-insensitive matching. String search params can contain &#x60;%&#x60; and &#39;_&#39; as SQL LIKE pattern match wildcard expressions. example&#x3D;\&quot;dan%\&quot; will match \&quot;danger\&quot; and \&quot;Danzig\&quot; but not \&quot;David\&quot; example&#x3D;\&quot;D_m%\&quot; will match \&quot;Damage\&quot; and \&quot;dump\&quot;  Integer search params can accept a single value or a comma separated list of values. The multiple values will be combined under a logical OR operation - results will match at least one of the given values.  Most search params can accept \&quot;IS NULL\&quot; and \&quot;NOT NULL\&quot; as special expressions to match or exclude (respectively) rows where the column is null.  Boolean search params accept only \&quot;true\&quot; and \&quot;false\&quot; as values.

### Example
```javascript
var LookerApi31Reference = require('looker-node-api');

var apiInstance = new LookerApi31Reference.HomepageApi();

var opts = {
  'title': "title_example", // String | Matches homepage title.
  'createdAt': "createdAt_example", // String | Matches the timestamp for when the homepage was created.
  'firstName': "firstName_example", // String | The first name of the user who created this homepage.
  'lastName': "lastName_example", // String | The last name of the user who created this homepage.
  'fields': "fields_example", // String | Requested fields.
  'favorited': true, // Boolean | Return favorited homepages when true.
  'sorts': "sorts_example", // String | The fields to sort the results by
  'page': 789, // Number | The page to return.
  'perPage': 789, // Number | The number of items in the returned page.
  'offset': 789, // Number | The number of items to skip before returning any. (used with limit and takes priority over page and per_page)
  'limit': 789, // Number | The maximum number of items to return. (used with offset and takes priority over page and per_page)
  'filterOr': true // Boolean | Combine given search criteria in a boolean OR expression
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.searchHomepages(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **title** | **String**| Matches homepage title. | [optional]
 **createdAt** | **String**| Matches the timestamp for when the homepage was created. | [optional]
 **firstName** | **String**| The first name of the user who created this homepage. | [optional]
 **lastName** | **String**| The last name of the user who created this homepage. | [optional]
 **fields** | **String**| Requested fields. | [optional]
 **favorited** | **Boolean**| Return favorited homepages when true. | [optional]
 **sorts** | **String**| The fields to sort the results by | [optional]
 **page** | **Number**| The page to return. | [optional]
 **perPage** | **Number**| The number of items in the returned page. | [optional]
 **offset** | **Number**| The number of items to skip before returning any. (used with limit and takes priority over page and per_page) | [optional]
 **limit** | **Number**| The maximum number of items to return. (used with offset and takes priority over page and per_page) | [optional]
 **filterOr** | **Boolean**| Combine given search criteria in a boolean OR expression | [optional]

### Return type

[**[Homepage]**](Homepage.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateHomepage"></a>
# **updateHomepage**
> Homepage updateHomepage(homepageId, body, opts)

Update Homepage

### Update a homepage definition.

### Example
```javascript
var LookerApi31Reference = require('looker-node-api');

var apiInstance = new LookerApi31Reference.HomepageApi();

var homepageId = 789; // Number | Id of homepage

var body = new LookerApi31Reference.Homepage(); // Homepage | Homepage

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
apiInstance.updateHomepage(homepageId, body, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **homepageId** | **Number**| Id of homepage |
 **body** | [**Homepage**](Homepage.md)| Homepage |
 **fields** | **String**| Requested fields. | [optional]

### Return type

[**Homepage**](Homepage.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateHomepageItem"></a>
# **updateHomepageItem**
> HomepageItem updateHomepageItem(homepageItemId, body, opts)

Update Homepage Item

### Update a homepage item definition.

### Example
```javascript
var LookerApi31Reference = require('looker-node-api');

var apiInstance = new LookerApi31Reference.HomepageApi();

var homepageItemId = 789; // Number | Id of homepage item

var body = new LookerApi31Reference.HomepageItem(); // HomepageItem | Homepage Item

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
apiInstance.updateHomepageItem(homepageItemId, body, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **homepageItemId** | **Number**| Id of homepage item |
 **body** | [**HomepageItem**](HomepageItem.md)| Homepage Item |
 **fields** | **String**| Requested fields. | [optional]

### Return type

[**HomepageItem**](HomepageItem.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateHomepageSection"></a>
# **updateHomepageSection**
> HomepageSection updateHomepageSection(homepageSectionId, body, opts)

Update Homepage section

### Update a homepage section definition.

### Example
```javascript
var LookerApi31Reference = require('looker-node-api');

var apiInstance = new LookerApi31Reference.HomepageApi();

var homepageSectionId = 789; // Number | Id of homepage section

var body = new LookerApi31Reference.HomepageSection(); // HomepageSection | Homepage section

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
apiInstance.updateHomepageSection(homepageSectionId, body, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **homepageSectionId** | **Number**| Id of homepage section |
 **body** | [**HomepageSection**](HomepageSection.md)| Homepage section |
 **fields** | **String**| Requested fields. | [optional]

### Return type

[**HomepageSection**](HomepageSection.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

