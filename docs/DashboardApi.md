# LookerApi31Reference.DashboardApi

All URIs are relative to */api/3.1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**allDashboards**](DashboardApi.md#allDashboards) | **GET** /dashboards | Get All Dashboards
[**createDashboard**](DashboardApi.md#createDashboard) | **POST** /dashboards | Create Dashboard
[**createDashboardElement**](DashboardApi.md#createDashboardElement) | **POST** /dashboard_elements | Create DashboardElement
[**createDashboardFilter**](DashboardApi.md#createDashboardFilter) | **POST** /dashboard_filters | Create Dashboard Filter
[**createDashboardLayout**](DashboardApi.md#createDashboardLayout) | **POST** /dashboard_layouts | Create DashboardLayout
[**dashboard**](DashboardApi.md#dashboard) | **GET** /dashboards/{dashboard_id} | Get Dashboard
[**dashboardDashboardElements**](DashboardApi.md#dashboardDashboardElements) | **GET** /dashboards/{dashboard_id}/dashboard_elements | Get All DashboardElements
[**dashboardDashboardFilters**](DashboardApi.md#dashboardDashboardFilters) | **GET** /dashboards/{dashboard_id}/dashboard_filters | Get All Dashboard Filters
[**dashboardDashboardLayouts**](DashboardApi.md#dashboardDashboardLayouts) | **GET** /dashboards/{dashboard_id}/dashboard_layouts | Get All DashboardLayouts
[**dashboardElement**](DashboardApi.md#dashboardElement) | **GET** /dashboard_elements/{dashboard_element_id} | Get DashboardElement
[**dashboardFilter**](DashboardApi.md#dashboardFilter) | **GET** /dashboard_filters/{dashboard_filter_id} | Get Dashboard Filter
[**dashboardLayout**](DashboardApi.md#dashboardLayout) | **GET** /dashboard_layouts/{dashboard_layout_id} | Get DashboardLayout
[**dashboardLayoutComponent**](DashboardApi.md#dashboardLayoutComponent) | **GET** /dashboard_layout_components/{dashboard_layout_component_id} | Get DashboardLayoutComponent
[**dashboardLayoutDashboardLayoutComponents**](DashboardApi.md#dashboardLayoutDashboardLayoutComponents) | **GET** /dashboard_layouts/{dashboard_layout_id}/dashboard_layout_components | Get All DashboardLayoutComponents
[**deleteDashboard**](DashboardApi.md#deleteDashboard) | **DELETE** /dashboards/{dashboard_id} | Delete Dashboard
[**deleteDashboardElement**](DashboardApi.md#deleteDashboardElement) | **DELETE** /dashboard_elements/{dashboard_element_id} | Delete DashboardElement
[**deleteDashboardFilter**](DashboardApi.md#deleteDashboardFilter) | **DELETE** /dashboard_filters/{dashboard_filter_id} | Delete Dashboard Filter
[**deleteDashboardLayout**](DashboardApi.md#deleteDashboardLayout) | **DELETE** /dashboard_layouts/{dashboard_layout_id} | Delete DashboardLayout
[**importLookmlDashboard**](DashboardApi.md#importLookmlDashboard) | **POST** /dashboards/{lookml_dashboard_id}/import/{space_id} | Import LookML Dashboard
[**searchDashboardElements**](DashboardApi.md#searchDashboardElements) | **GET** /dashboard_elements/search | Search Dashboard Elements
[**searchDashboards**](DashboardApi.md#searchDashboards) | **GET** /dashboards/search | Search Dashboards
[**syncLookmlDashboard**](DashboardApi.md#syncLookmlDashboard) | **PATCH** /dashboards/{lookml_dashboard_id}/sync | Sync LookML Dashboard
[**updateDashboard**](DashboardApi.md#updateDashboard) | **PATCH** /dashboards/{dashboard_id} | Update Dashboard
[**updateDashboardElement**](DashboardApi.md#updateDashboardElement) | **PATCH** /dashboard_elements/{dashboard_element_id} | Update DashboardElement
[**updateDashboardFilter**](DashboardApi.md#updateDashboardFilter) | **PATCH** /dashboard_filters/{dashboard_filter_id} | Update Dashboard Filter
[**updateDashboardLayout**](DashboardApi.md#updateDashboardLayout) | **PATCH** /dashboard_layouts/{dashboard_layout_id} | Update DashboardLayout
[**updateDashboardLayoutComponent**](DashboardApi.md#updateDashboardLayoutComponent) | **PATCH** /dashboard_layout_components/{dashboard_layout_component_id} | Update DashboardLayoutComponent


<a name="allDashboards"></a>
# **allDashboards**
> [DashboardBase] allDashboards(opts)

Get All Dashboards

### Get information about all active dashboards.  Returns an array of **abbreviated dashboard objects**. Dashboards marked as deleted are excluded from this list.  Get the **full details** of a specific dashboard by id with [Dashboard](#!/Dashboard/dashboard)  Find **deleted dashboards** with [Search Dashboards](#!/Dashboard/search_dashboards)

### Example
```javascript
var LookerApi31Reference = require('looker-node-api');

var apiInstance = new LookerApi31Reference.DashboardApi();

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
apiInstance.allDashboards(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fields** | **String**| Requested fields. | [optional]

### Return type

[**[DashboardBase]**](DashboardBase.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createDashboard"></a>
# **createDashboard**
> Dashboard createDashboard(opts)

Create Dashboard

### Create a dashboard with the specified information  Creates a new dashboard object, returning the dashboard details, including the created id.  **Update** an existing dashboard with [Update Dashboard](#!/Dashboard/update_dashboard)  **Permanently delete** an existing dashboard with [Delete Dashboard](#!/Dashboard/delete_dashboard)

### Example
```javascript
var LookerApi31Reference = require('looker-node-api');

var apiInstance = new LookerApi31Reference.DashboardApi();

var opts = {
  'body': new LookerApi31Reference.Dashboard() // Dashboard | Dashboard
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createDashboard(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Dashboard**](Dashboard.md)| Dashboard | [optional]

### Return type

[**Dashboard**](Dashboard.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createDashboardElement"></a>
# **createDashboardElement**
> DashboardElement createDashboardElement(opts)

Create DashboardElement

### Create a dashboard element on the dashboard with a specific id.

### Example
```javascript
var LookerApi31Reference = require('looker-node-api');

var apiInstance = new LookerApi31Reference.DashboardApi();

var opts = {
  'body': new LookerApi31Reference.DashboardElement(), // DashboardElement | DashboardElement
  'fields': "fields_example" // String | Requested fields.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createDashboardElement(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**DashboardElement**](DashboardElement.md)| DashboardElement | [optional]
 **fields** | **String**| Requested fields. | [optional]

### Return type

[**DashboardElement**](DashboardElement.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createDashboardFilter"></a>
# **createDashboardFilter**
> DashboardFilter createDashboardFilter(body, opts)

Create Dashboard Filter

### Create a dashboard filter on the dashboard with a specific id.

### Example
```javascript
var LookerApi31Reference = require('looker-node-api');

var apiInstance = new LookerApi31Reference.DashboardApi();

var body = new LookerApi31Reference.CreateDashboardFilter(); // CreateDashboardFilter | Dashboard Filter

var opts = {
  'fields': "fields_example" // String | Requested fields
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createDashboardFilter(body, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CreateDashboardFilter**](CreateDashboardFilter.md)| Dashboard Filter |
 **fields** | **String**| Requested fields | [optional]

### Return type

[**DashboardFilter**](DashboardFilter.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createDashboardLayout"></a>
# **createDashboardLayout**
> DashboardLayout createDashboardLayout(opts)

Create DashboardLayout

### Create a dashboard layout on the dashboard with a specific id.

### Example
```javascript
var LookerApi31Reference = require('looker-node-api');

var apiInstance = new LookerApi31Reference.DashboardApi();

var opts = {
  'body': new LookerApi31Reference.DashboardLayout(), // DashboardLayout | DashboardLayout
  'fields': "fields_example" // String | Requested fields.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createDashboardLayout(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**DashboardLayout**](DashboardLayout.md)| DashboardLayout | [optional]
 **fields** | **String**| Requested fields. | [optional]

### Return type

[**DashboardLayout**](DashboardLayout.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="dashboard"></a>
# **dashboard**
> Dashboard dashboard(dashboardId, opts)

Get Dashboard

### Get information about the dashboard with the specified id  Returns the full details of the identified dashboard object  Get a **summary list** of all active dashboards with [All Dashboards](#!/Dashboard/all_dashboards)  **Search** for dashboards with [Search Dashboards](#!/Dashboard/search_dashboards)

### Example
```javascript
var LookerApi31Reference = require('looker-node-api');

var apiInstance = new LookerApi31Reference.DashboardApi();

var dashboardId = "dashboardId_example"; // String | Id of dashboard

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
apiInstance.dashboard(dashboardId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dashboardId** | **String**| Id of dashboard |
 **fields** | **String**| Requested fields. | [optional]

### Return type

[**Dashboard**](Dashboard.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="dashboardDashboardElements"></a>
# **dashboardDashboardElements**
> [DashboardElement] dashboardDashboardElements(dashboardId, opts)

Get All DashboardElements

### Get information about all the dashboard elements on a dashboard with a specific id.

### Example
```javascript
var LookerApi31Reference = require('looker-node-api');

var apiInstance = new LookerApi31Reference.DashboardApi();

var dashboardId = "dashboardId_example"; // String | Id of dashboard

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
apiInstance.dashboardDashboardElements(dashboardId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dashboardId** | **String**| Id of dashboard |
 **fields** | **String**| Requested fields. | [optional]

### Return type

[**[DashboardElement]**](DashboardElement.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="dashboardDashboardFilters"></a>
# **dashboardDashboardFilters**
> [DashboardFilter] dashboardDashboardFilters(dashboardId, opts)

Get All Dashboard Filters

### Get information about all the dashboard filters on a dashboard with a specific id.

### Example
```javascript
var LookerApi31Reference = require('looker-node-api');

var apiInstance = new LookerApi31Reference.DashboardApi();

var dashboardId = "dashboardId_example"; // String | Id of dashboard

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
apiInstance.dashboardDashboardFilters(dashboardId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dashboardId** | **String**| Id of dashboard |
 **fields** | **String**| Requested fields. | [optional]

### Return type

[**[DashboardFilter]**](DashboardFilter.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="dashboardDashboardLayouts"></a>
# **dashboardDashboardLayouts**
> [DashboardLayout] dashboardDashboardLayouts(dashboardId, opts)

Get All DashboardLayouts

### Get information about all the dashboard elements on a dashboard with a specific id.

### Example
```javascript
var LookerApi31Reference = require('looker-node-api');

var apiInstance = new LookerApi31Reference.DashboardApi();

var dashboardId = "dashboardId_example"; // String | Id of dashboard

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
apiInstance.dashboardDashboardLayouts(dashboardId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dashboardId** | **String**| Id of dashboard |
 **fields** | **String**| Requested fields. | [optional]

### Return type

[**[DashboardLayout]**](DashboardLayout.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="dashboardElement"></a>
# **dashboardElement**
> DashboardElement dashboardElement(dashboardElementId, opts)

Get DashboardElement

### Get information about the dashboard element with a specific id.

### Example
```javascript
var LookerApi31Reference = require('looker-node-api');

var apiInstance = new LookerApi31Reference.DashboardApi();

var dashboardElementId = "dashboardElementId_example"; // String | Id of dashboard element

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
apiInstance.dashboardElement(dashboardElementId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dashboardElementId** | **String**| Id of dashboard element |
 **fields** | **String**| Requested fields. | [optional]

### Return type

[**DashboardElement**](DashboardElement.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="dashboardFilter"></a>
# **dashboardFilter**
> DashboardFilter dashboardFilter(dashboardFilterId, opts)

Get Dashboard Filter

### Get information about the dashboard filters with a specific id.

### Example
```javascript
var LookerApi31Reference = require('looker-node-api');

var apiInstance = new LookerApi31Reference.DashboardApi();

var dashboardFilterId = "dashboardFilterId_example"; // String | Id of dashboard filters

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
apiInstance.dashboardFilter(dashboardFilterId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dashboardFilterId** | **String**| Id of dashboard filters |
 **fields** | **String**| Requested fields. | [optional]

### Return type

[**DashboardFilter**](DashboardFilter.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="dashboardLayout"></a>
# **dashboardLayout**
> DashboardLayout dashboardLayout(dashboardLayoutId, opts)

Get DashboardLayout

### Get information about the dashboard layouts with a specific id.

### Example
```javascript
var LookerApi31Reference = require('looker-node-api');

var apiInstance = new LookerApi31Reference.DashboardApi();

var dashboardLayoutId = "dashboardLayoutId_example"; // String | Id of dashboard layouts

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
apiInstance.dashboardLayout(dashboardLayoutId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dashboardLayoutId** | **String**| Id of dashboard layouts |
 **fields** | **String**| Requested fields. | [optional]

### Return type

[**DashboardLayout**](DashboardLayout.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="dashboardLayoutComponent"></a>
# **dashboardLayoutComponent**
> DashboardLayoutComponent dashboardLayoutComponent(dashboardLayoutComponentId, opts)

Get DashboardLayoutComponent

### Get information about the dashboard elements with a specific id.

### Example
```javascript
var LookerApi31Reference = require('looker-node-api');

var apiInstance = new LookerApi31Reference.DashboardApi();

var dashboardLayoutComponentId = "dashboardLayoutComponentId_example"; // String | Id of dashboard layout component

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
apiInstance.dashboardLayoutComponent(dashboardLayoutComponentId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dashboardLayoutComponentId** | **String**| Id of dashboard layout component |
 **fields** | **String**| Requested fields. | [optional]

### Return type

[**DashboardLayoutComponent**](DashboardLayoutComponent.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="dashboardLayoutDashboardLayoutComponents"></a>
# **dashboardLayoutDashboardLayoutComponents**
> [DashboardLayoutComponent] dashboardLayoutDashboardLayoutComponents(dashboardLayoutId, opts)

Get All DashboardLayoutComponents

### Get information about all the dashboard layout components for a dashboard layout with a specific id.

### Example
```javascript
var LookerApi31Reference = require('looker-node-api');

var apiInstance = new LookerApi31Reference.DashboardApi();

var dashboardLayoutId = "dashboardLayoutId_example"; // String | Id of dashboard layout component

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
apiInstance.dashboardLayoutDashboardLayoutComponents(dashboardLayoutId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dashboardLayoutId** | **String**| Id of dashboard layout component |
 **fields** | **String**| Requested fields. | [optional]

### Return type

[**[DashboardLayoutComponent]**](DashboardLayoutComponent.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteDashboard"></a>
# **deleteDashboard**
> &#39;String&#39; deleteDashboard(dashboardId)

Delete Dashboard

### Delete the dashboard with the specified id  Permanently **deletes** a dashboard. (The dashboard cannot be recovered after this operation.)  \&quot;Soft\&quot; delete or hide a dashboard by setting its &#x60;deleted&#x60; status to &#x60;True&#x60; with [Update Dashboard](#!/Dashboard/update_dashboard).  Note: When a dashboard is deleted in the UI, it is soft deleted. Use this API call to permanently remove it, if desired.

### Example
```javascript
var LookerApi31Reference = require('looker-node-api');

var apiInstance = new LookerApi31Reference.DashboardApi();

var dashboardId = "dashboardId_example"; // String | Id of dashboard


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteDashboard(dashboardId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dashboardId** | **String**| Id of dashboard |

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteDashboardElement"></a>
# **deleteDashboardElement**
> &#39;String&#39; deleteDashboardElement(dashboardElementId)

Delete DashboardElement

### Delete a dashboard element with a specific id.

### Example
```javascript
var LookerApi31Reference = require('looker-node-api');

var apiInstance = new LookerApi31Reference.DashboardApi();

var dashboardElementId = "dashboardElementId_example"; // String | Id of dashboard element


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteDashboardElement(dashboardElementId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dashboardElementId** | **String**| Id of dashboard element |

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteDashboardFilter"></a>
# **deleteDashboardFilter**
> &#39;String&#39; deleteDashboardFilter(dashboardFilterId)

Delete Dashboard Filter

### Delete a dashboard filter with a specific id.

### Example
```javascript
var LookerApi31Reference = require('looker-node-api');

var apiInstance = new LookerApi31Reference.DashboardApi();

var dashboardFilterId = "dashboardFilterId_example"; // String | Id of dashboard filter


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteDashboardFilter(dashboardFilterId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dashboardFilterId** | **String**| Id of dashboard filter |

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteDashboardLayout"></a>
# **deleteDashboardLayout**
> &#39;String&#39; deleteDashboardLayout(dashboardLayoutId)

Delete DashboardLayout

### Delete a dashboard layout with a specific id.

### Example
```javascript
var LookerApi31Reference = require('looker-node-api');

var apiInstance = new LookerApi31Reference.DashboardApi();

var dashboardLayoutId = "dashboardLayoutId_example"; // String | Id of dashboard layout


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteDashboardLayout(dashboardLayoutId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dashboardLayoutId** | **String**| Id of dashboard layout |

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="importLookmlDashboard"></a>
# **importLookmlDashboard**
> Dashboard importLookmlDashboard(lookmlDashboardId, spaceId, opts)

Import LookML Dashboard

### Import a LookML dashboard to a space as a UDD Creates a UDD (a dashboard which exists in the Looker database rather than as a LookML file) from the LookML dashboard and puts it in the space specified. The created UDD will have a lookml_link_id which links to the original LookML dashboard.  To give the imported dashboard specify a (e.g. title: \&quot;my title\&quot;) in the body of your request, otherwise the imported dashboard will have the same title as the original LookML dashboard.  For this operation to succeed the user must have permission to see the LookML dashboard in question, and have permission to create content in the space the dashboard is being imported to.  **Sync** a linked UDD with [Sync LookML Dashboard] (#!/Dashboard/sync_lookml_dashboard) **Unlink** a linked UDD by setting lookml_link_id to null with [Update Dashboard](#!/Dashboard/update_dashboard)

### Example
```javascript
var LookerApi31Reference = require('looker-node-api');

var apiInstance = new LookerApi31Reference.DashboardApi();

var lookmlDashboardId = "lookmlDashboardId_example"; // String | Id of LookML dashboard

var spaceId = "spaceId_example"; // String | Id of space to import the dashboard to

var opts = {
  'body': new LookerApi31Reference.Dashboard(), // Dashboard | Dashboard
  'rawLocale': true // Boolean | If true, and this dashboard is localized, export it with the raw keys, not localized.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.importLookmlDashboard(lookmlDashboardId, spaceId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **lookmlDashboardId** | **String**| Id of LookML dashboard |
 **spaceId** | **String**| Id of space to import the dashboard to |
 **body** | [**Dashboard**](Dashboard.md)| Dashboard | [optional]
 **rawLocale** | **Boolean**| If true, and this dashboard is localized, export it with the raw keys, not localized. | [optional]

### Return type

[**Dashboard**](Dashboard.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="searchDashboardElements"></a>
# **searchDashboardElements**
> [DashboardElement] searchDashboardElements(opts)

Search Dashboard Elements

### Search Dashboard Elements  Returns an **array of DashboardElement objects** that match the specified search criteria.  If multiple search params are given and &#x60;filter_or&#x60; is FALSE or not specified, search params are combined in a logical AND operation. Only rows that match *all* search param criteria will be returned.  If &#x60;filter_or&#x60; is TRUE, multiple search params are combined in a logical OR operation. Results will include rows that match **any** of the search criteria.  String search params use case-insensitive matching. String search params can contain &#x60;%&#x60; and &#39;_&#39; as SQL LIKE pattern match wildcard expressions. example&#x3D;\&quot;dan%\&quot; will match \&quot;danger\&quot; and \&quot;Danzig\&quot; but not \&quot;David\&quot; example&#x3D;\&quot;D_m%\&quot; will match \&quot;Damage\&quot; and \&quot;dump\&quot;  Integer search params can accept a single value or a comma separated list of values. The multiple values will be combined under a logical OR operation - results will match at least one of the given values.  Most search params can accept \&quot;IS NULL\&quot; and \&quot;NOT NULL\&quot; as special expressions to match or exclude (respectively) rows where the column is null.  Boolean search params accept only \&quot;true\&quot; and \&quot;false\&quot; as values.

### Example
```javascript
var LookerApi31Reference = require('looker-node-api');

var apiInstance = new LookerApi31Reference.DashboardApi();

var opts = {
  'dashboardId': 789, // Number | Select elements that refer to a given dashboard id
  'lookId': 789, // Number | Select elements that refer to a given look id
  'title': "title_example", // String | Match the title of element
  'deleted': true, // Boolean | Select soft-deleted dashboard elements
  'fields': "fields_example", // String | Requested fields.
  'filterOr': true, // Boolean | Combine given search criteria in a boolean OR expression
  'sorts': "sorts_example" // String | Fields to sort by. Sortable fields: [:look_id, :dashboard_id, :deleted, :title]
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.searchDashboardElements(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dashboardId** | **Number**| Select elements that refer to a given dashboard id | [optional]
 **lookId** | **Number**| Select elements that refer to a given look id | [optional]
 **title** | **String**| Match the title of element | [optional]
 **deleted** | **Boolean**| Select soft-deleted dashboard elements | [optional]
 **fields** | **String**| Requested fields. | [optional]
 **filterOr** | **Boolean**| Combine given search criteria in a boolean OR expression | [optional]
 **sorts** | **String**| Fields to sort by. Sortable fields: [:look_id, :dashboard_id, :deleted, :title] | [optional]

### Return type

[**[DashboardElement]**](DashboardElement.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="searchDashboards"></a>
# **searchDashboards**
> [Dashboard] searchDashboards(opts)

Search Dashboards

### Search Dashboards  Returns an **array of dashboard objects** that match the specified search criteria.  If multiple search params are given and &#x60;filter_or&#x60; is FALSE or not specified, search params are combined in a logical AND operation. Only rows that match *all* search param criteria will be returned.  If &#x60;filter_or&#x60; is TRUE, multiple search params are combined in a logical OR operation. Results will include rows that match **any** of the search criteria.  String search params use case-insensitive matching. String search params can contain &#x60;%&#x60; and &#39;_&#39; as SQL LIKE pattern match wildcard expressions. example&#x3D;\&quot;dan%\&quot; will match \&quot;danger\&quot; and \&quot;Danzig\&quot; but not \&quot;David\&quot; example&#x3D;\&quot;D_m%\&quot; will match \&quot;Damage\&quot; and \&quot;dump\&quot;  Integer search params can accept a single value or a comma separated list of values. The multiple values will be combined under a logical OR operation - results will match at least one of the given values.  Most search params can accept \&quot;IS NULL\&quot; and \&quot;NOT NULL\&quot; as special expressions to match or exclude (respectively) rows where the column is null.  Boolean search params accept only \&quot;true\&quot; and \&quot;false\&quot; as values.   The parameters &#x60;limit&#x60;, and &#x60;offset&#x60; are recommended for fetching results in page-size chunks.  Get a **single dashboard** by id with [Dashboard](#!/Dashboard/dashboard)

### Example
```javascript
var LookerApi31Reference = require('looker-node-api');

var apiInstance = new LookerApi31Reference.DashboardApi();

var opts = {
  'id': 789, // Number | Match dashboard id.
  'slug': "slug_example", // String | Match dashboard slug.
  'title': "title_example", // String | Match Dashboard title.
  'description': "description_example", // String | Match Dashboard description.
  'contentFavoriteId': 789, // Number | Filter on a content favorite id.
  'spaceId': "spaceId_example", // String | Filter on a particular space.
  'deleted': "deleted_example", // String | Filter on dashboards deleted status.
  'userId': "userId_example", // String | Filter on dashboards created by a particular user.
  'viewCount': "viewCount_example", // String | Filter on a particular value of view_count
  'contentMetadataId': 789, // Number | Filter on a content favorite id.
  'fields': "fields_example", // String | Requested fields.
  'page': 789, // Number | Requested page.
  'perPage': 789, // Number | Results per page.
  'limit': 789, // Number | Number of results to return. (used with offset and takes priority over page and per_page)
  'offset': 789, // Number | Number of results to skip before returning any. (used with limit and takes priority over page and per_page)
  'sorts': "sorts_example", // String | One or more fields to sort by. Sortable fields: [:title, :user_id, :id, :created_at, :space_id, :description, :view_count, :favorite_count, :slug, :content_favorite_id, :content_metadata_id, :deleted, :deleted_at, :last_viewed_at]
  'filterOr': true // Boolean | Combine given search criteria in a boolean OR expression
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.searchDashboards(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Match dashboard id. | [optional]
 **slug** | **String**| Match dashboard slug. | [optional]
 **title** | **String**| Match Dashboard title. | [optional]
 **description** | **String**| Match Dashboard description. | [optional]
 **contentFavoriteId** | **Number**| Filter on a content favorite id. | [optional]
 **spaceId** | **String**| Filter on a particular space. | [optional]
 **deleted** | **String**| Filter on dashboards deleted status. | [optional]
 **userId** | **String**| Filter on dashboards created by a particular user. | [optional]
 **viewCount** | **String**| Filter on a particular value of view_count | [optional]
 **contentMetadataId** | **Number**| Filter on a content favorite id. | [optional]
 **fields** | **String**| Requested fields. | [optional]
 **page** | **Number**| Requested page. | [optional]
 **perPage** | **Number**| Results per page. | [optional]
 **limit** | **Number**| Number of results to return. (used with offset and takes priority over page and per_page) | [optional]
 **offset** | **Number**| Number of results to skip before returning any. (used with limit and takes priority over page and per_page) | [optional]
 **sorts** | **String**| One or more fields to sort by. Sortable fields: [:title, :user_id, :id, :created_at, :space_id, :description, :view_count, :favorite_count, :slug, :content_favorite_id, :content_metadata_id, :deleted, :deleted_at, :last_viewed_at] | [optional]
 **filterOr** | **Boolean**| Combine given search criteria in a boolean OR expression | [optional]

### Return type

[**[Dashboard]**](Dashboard.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="syncLookmlDashboard"></a>
# **syncLookmlDashboard**
> [&#39;Number&#39;] syncLookmlDashboard(lookmlDashboardId, body, opts)

Sync LookML Dashboard

### Update all linked dashboards to match the specified LookML dashboard.  Any UDD (a dashboard which exists in the Looker database rather than as a LookML file) which has a &#x60;lookml_link_id&#x60; property value referring to a LookML dashboard&#39;s id (model::dashboardname) will be updated so that it matches the current state of the LookML dashboard.  For this operation to succeed the user must have permission to view the LookML dashboard, and only linked dashboards that the user has permission to update will be synced.  To **link** or **unlink** a UDD set the &#x60;lookml_link_id&#x60; property with [Update Dashboard](#!/Dashboard/update_dashboard)

### Example
```javascript
var LookerApi31Reference = require('looker-node-api');

var apiInstance = new LookerApi31Reference.DashboardApi();

var lookmlDashboardId = "lookmlDashboardId_example"; // String | Id of LookML dashboard, in the form 'model::dashboardname'

var body = new LookerApi31Reference.Dashboard(); // Dashboard | Dashboard

var opts = {
  'rawLocale': true // Boolean | If true, and this dashboard is localized, export it with the raw keys, not localized.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.syncLookmlDashboard(lookmlDashboardId, body, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **lookmlDashboardId** | **String**| Id of LookML dashboard, in the form &#39;model::dashboardname&#39; |
 **body** | [**Dashboard**](Dashboard.md)| Dashboard |
 **rawLocale** | **Boolean**| If true, and this dashboard is localized, export it with the raw keys, not localized. | [optional]

### Return type

**[&#39;Number&#39;]**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateDashboard"></a>
# **updateDashboard**
> Dashboard updateDashboard(dashboardId, body)

Update Dashboard

### Update the dashboard with the specified id  Changes simple (scalar) properties of the dashboard.

### Example
```javascript
var LookerApi31Reference = require('looker-node-api');

var apiInstance = new LookerApi31Reference.DashboardApi();

var dashboardId = "dashboardId_example"; // String | Id of dashboard

var body = new LookerApi31Reference.Dashboard(); // Dashboard | Dashboard


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateDashboard(dashboardId, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dashboardId** | **String**| Id of dashboard |
 **body** | [**Dashboard**](Dashboard.md)| Dashboard |

### Return type

[**Dashboard**](Dashboard.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateDashboardElement"></a>
# **updateDashboardElement**
> DashboardElement updateDashboardElement(dashboardElementId, body, opts)

Update DashboardElement

### Update the dashboard element with a specific id.

### Example
```javascript
var LookerApi31Reference = require('looker-node-api');

var apiInstance = new LookerApi31Reference.DashboardApi();

var dashboardElementId = "dashboardElementId_example"; // String | Id of dashboard element

var body = new LookerApi31Reference.DashboardElement(); // DashboardElement | DashboardElement

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
apiInstance.updateDashboardElement(dashboardElementId, body, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dashboardElementId** | **String**| Id of dashboard element |
 **body** | [**DashboardElement**](DashboardElement.md)| DashboardElement |
 **fields** | **String**| Requested fields. | [optional]

### Return type

[**DashboardElement**](DashboardElement.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateDashboardFilter"></a>
# **updateDashboardFilter**
> DashboardFilter updateDashboardFilter(dashboardFilterId, body, opts)

Update Dashboard Filter

### Update the dashboard filter with a specific id.

### Example
```javascript
var LookerApi31Reference = require('looker-node-api');

var apiInstance = new LookerApi31Reference.DashboardApi();

var dashboardFilterId = "dashboardFilterId_example"; // String | Id of dashboard filter

var body = new LookerApi31Reference.DashboardFilter(); // DashboardFilter | Dashboard Filter

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
apiInstance.updateDashboardFilter(dashboardFilterId, body, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dashboardFilterId** | **String**| Id of dashboard filter |
 **body** | [**DashboardFilter**](DashboardFilter.md)| Dashboard Filter |
 **fields** | **String**| Requested fields. | [optional]

### Return type

[**DashboardFilter**](DashboardFilter.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateDashboardLayout"></a>
# **updateDashboardLayout**
> DashboardLayout updateDashboardLayout(dashboardLayoutId, body, opts)

Update DashboardLayout

### Update the dashboard layout with a specific id.

### Example
```javascript
var LookerApi31Reference = require('looker-node-api');

var apiInstance = new LookerApi31Reference.DashboardApi();

var dashboardLayoutId = "dashboardLayoutId_example"; // String | Id of dashboard layout

var body = new LookerApi31Reference.DashboardLayout(); // DashboardLayout | DashboardLayout

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
apiInstance.updateDashboardLayout(dashboardLayoutId, body, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dashboardLayoutId** | **String**| Id of dashboard layout |
 **body** | [**DashboardLayout**](DashboardLayout.md)| DashboardLayout |
 **fields** | **String**| Requested fields. | [optional]

### Return type

[**DashboardLayout**](DashboardLayout.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateDashboardLayoutComponent"></a>
# **updateDashboardLayoutComponent**
> DashboardLayoutComponent updateDashboardLayoutComponent(dashboardLayoutComponentId, body, opts)

Update DashboardLayoutComponent

### Update the dashboard element with a specific id.

### Example
```javascript
var LookerApi31Reference = require('looker-node-api');

var apiInstance = new LookerApi31Reference.DashboardApi();

var dashboardLayoutComponentId = "dashboardLayoutComponentId_example"; // String | Id of dashboard layout component

var body = new LookerApi31Reference.DashboardLayoutComponent(); // DashboardLayoutComponent | DashboardLayoutComponent

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
apiInstance.updateDashboardLayoutComponent(dashboardLayoutComponentId, body, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dashboardLayoutComponentId** | **String**| Id of dashboard layout component |
 **body** | [**DashboardLayoutComponent**](DashboardLayoutComponent.md)| DashboardLayoutComponent |
 **fields** | **String**| Requested fields. | [optional]

### Return type

[**DashboardLayoutComponent**](DashboardLayoutComponent.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

