# LookerApi31Reference.ScheduledPlanApi

All URIs are relative to */api/3.1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**allScheduledPlans**](ScheduledPlanApi.md#allScheduledPlans) | **GET** /scheduled_plans | Get All Scheduled Plans
[**createScheduledPlan**](ScheduledPlanApi.md#createScheduledPlan) | **POST** /scheduled_plans | Create Scheduled Plan
[**deleteScheduledPlan**](ScheduledPlanApi.md#deleteScheduledPlan) | **DELETE** /scheduled_plans/{scheduled_plan_id} | Delete Scheduled Plan
[**scheduledPlan**](ScheduledPlanApi.md#scheduledPlan) | **GET** /scheduled_plans/{scheduled_plan_id} | Get Scheduled Plan
[**scheduledPlanRunOnce**](ScheduledPlanApi.md#scheduledPlanRunOnce) | **POST** /scheduled_plans/run_once | Run Scheduled Plan Once
[**scheduledPlansForDashboard**](ScheduledPlanApi.md#scheduledPlansForDashboard) | **GET** /scheduled_plans/dashboard/{dashboard_id} | Scheduled Plans for Dashboard
[**scheduledPlansForLook**](ScheduledPlanApi.md#scheduledPlansForLook) | **GET** /scheduled_plans/look/{look_id} | Scheduled Plans for Look
[**scheduledPlansForLookmlDashboard**](ScheduledPlanApi.md#scheduledPlansForLookmlDashboard) | **GET** /scheduled_plans/lookml_dashboard/{lookml_dashboard_id} | Scheduled Plans for LookML Dashboard
[**scheduledPlansForSpace**](ScheduledPlanApi.md#scheduledPlansForSpace) | **GET** /scheduled_plans/space/{space_id} | Scheduled Plans for Space
[**updateScheduledPlan**](ScheduledPlanApi.md#updateScheduledPlan) | **PATCH** /scheduled_plans/{scheduled_plan_id} | Update Scheduled Plan


<a name="allScheduledPlans"></a>
# **allScheduledPlans**
> [ScheduledPlan] allScheduledPlans(opts)

Get All Scheduled Plans

### List All Scheduled Plans  Returns all scheduled plans which belong to the caller or given user.  If no user_id is provided, this function returns the scheduled plans owned by the caller.   To list all schedules for all users, pass &#x60;all_users&#x3D;true&#x60;.   The caller must have &#x60;see_schedules&#x60; permission to see other users&#39; scheduled plans.

### Example
```javascript
var LookerApi31Reference = require('looker-node-api');

var apiInstance = new LookerApi31Reference.ScheduledPlanApi();

var opts = {
  'userId': 789, // Number | Return scheduled plans belonging to this user_id. If not provided, returns scheduled plans owned by the caller.
  'fields': "fields_example", // String | Comma delimited list of field names. If provided, only the fields specified will be included in the response
  'allUsers': true // Boolean | Return scheduled plans belonging to all users (caller needs see_schedules permission)
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.allScheduledPlans(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Number**| Return scheduled plans belonging to this user_id. If not provided, returns scheduled plans owned by the caller. | [optional]
 **fields** | **String**| Comma delimited list of field names. If provided, only the fields specified will be included in the response | [optional]
 **allUsers** | **Boolean**| Return scheduled plans belonging to all users (caller needs see_schedules permission) | [optional]

### Return type

[**[ScheduledPlan]**](ScheduledPlan.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createScheduledPlan"></a>
# **createScheduledPlan**
> ScheduledPlan createScheduledPlan(opts)

Create Scheduled Plan

### Create a Scheduled Plan  Create a scheduled plan to render a Look or Dashboard on a recurring schedule.  The queries that provide the data for the look or dashboard are run in the context of user account that owns the scheduled plan.  Admins can create scheduled plans on behalf of other users by specifying a user id.  Scheduled plan destinations must specify the data format to produce and send to the destination  Scheduled Plan Destination formats:  | format | Description | :-----------: | :--- | | json | A JSON object containing a &#x60;data&#x60; property which contains an array of JSON objects, one per row. No metadata. | json_detail | Row data plus metadata describing the fields, pivots, table calcs, and other aspects of the query | inline_json | Same as the JSON format, except that the &#x60;data&#x60; property is a string containing JSON-escaped row data. Additional properties describe the data operation. This format is primarily used to send data to web hooks so that the web hook doesn&#39;t have to re-encode the JSON row data in order to pass it on to its ultimate destination. | csv | Comma separated values with a header | txt | Tab separated values with a header | html | Simple html | xlsx | MS Excel spreadsheet | wysiwyg_pdf | Dashboard rendered in a tiled layout to produce a PDF document | assembled_pdf | Dashboard rendered in a single column layout to produce a PDF document | wysiwyg_png | Dashboard rendered in a tiled layout to produce a PNG image ||  Valid formats vary by destination type and source object. &#x60;wysiwyg_pdf&#x60; is only valid for dashboards, for example.

### Example
```javascript
var LookerApi31Reference = require('looker-node-api');

var apiInstance = new LookerApi31Reference.ScheduledPlanApi();

var opts = {
  'body': new LookerApi31Reference.ScheduledPlan() // ScheduledPlan | Scheduled Plan
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createScheduledPlan(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ScheduledPlan**](ScheduledPlan.md)| Scheduled Plan | [optional]

### Return type

[**ScheduledPlan**](ScheduledPlan.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteScheduledPlan"></a>
# **deleteScheduledPlan**
> &#39;String&#39; deleteScheduledPlan(scheduledPlanId)

Delete Scheduled Plan

### Delete a Scheduled Plan  Normal users can only delete their own scheduled plans. Admins can delete other users&#39; scheduled plans.

### Example
```javascript
var LookerApi31Reference = require('looker-node-api');

var apiInstance = new LookerApi31Reference.ScheduledPlanApi();

var scheduledPlanId = 789; // Number | Scheduled Plan Id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteScheduledPlan(scheduledPlanId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scheduledPlanId** | **Number**| Scheduled Plan Id |

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="scheduledPlan"></a>
# **scheduledPlan**
> ScheduledPlan scheduledPlan(scheduledPlanId, opts)

Get Scheduled Plan

### Get Information About a Scheduled Plan  Admins can fetch information about other users&#39; Scheduled Plans.

### Example
```javascript
var LookerApi31Reference = require('looker-node-api');

var apiInstance = new LookerApi31Reference.ScheduledPlanApi();

var scheduledPlanId = 789; // Number | Scheduled Plan Id

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
apiInstance.scheduledPlan(scheduledPlanId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scheduledPlanId** | **Number**| Scheduled Plan Id |
 **fields** | **String**| Requested fields. | [optional]

### Return type

[**ScheduledPlan**](ScheduledPlan.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="scheduledPlanRunOnce"></a>
# **scheduledPlanRunOnce**
> ScheduledPlan scheduledPlanRunOnce(opts)

Run Scheduled Plan Once

### Run a Scheduled Plan Immediately  Create a scheduled plan that runs only once, and immediately.  This can be useful for testing a Scheduled Plan before committing to a production schedule.  Admins can create scheduled plans on behalf of other users by specifying a user id.  This API is rate limited to prevent it from being used for relay spam or DoS attacks  Scheduled plan destinations must specify the data format to produce and send to the destination  Scheduled Plan Destination formats:  | format | Description | :-----------: | :--- | | json | A JSON object containing a &#x60;data&#x60; property which contains an array of JSON objects, one per row. No metadata. | json_detail | Row data plus metadata describing the fields, pivots, table calcs, and other aspects of the query | inline_json | Same as the JSON format, except that the &#x60;data&#x60; property is a string containing JSON-escaped row data. Additional properties describe the data operation. This format is primarily used to send data to web hooks so that the web hook doesn&#39;t have to re-encode the JSON row data in order to pass it on to its ultimate destination. | csv | Comma separated values with a header | txt | Tab separated values with a header | html | Simple html | xlsx | MS Excel spreadsheet | wysiwyg_pdf | Dashboard rendered in a tiled layout to produce a PDF document | assembled_pdf | Dashboard rendered in a single column layout to produce a PDF document | wysiwyg_png | Dashboard rendered in a tiled layout to produce a PNG image ||  Valid formats vary by destination type and source object. &#x60;wysiwyg_pdf&#x60; is only valid for dashboards, for example.

### Example
```javascript
var LookerApi31Reference = require('looker-node-api');

var apiInstance = new LookerApi31Reference.ScheduledPlanApi();

var opts = {
  'body': new LookerApi31Reference.ScheduledPlan() // ScheduledPlan | Scheduled Plan
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.scheduledPlanRunOnce(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ScheduledPlan**](ScheduledPlan.md)| Scheduled Plan | [optional]

### Return type

[**ScheduledPlan**](ScheduledPlan.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="scheduledPlansForDashboard"></a>
# **scheduledPlansForDashboard**
> [ScheduledPlan] scheduledPlansForDashboard(dashboardId, opts)

Scheduled Plans for Dashboard

### Get Scheduled Plans for a Dashboard  Returns all scheduled plans for a dashboard which belong to the caller or given user.  If no user_id is provided, this function returns the scheduled plans owned by the caller.   To list all schedules for all users, pass &#x60;all_users&#x3D;true&#x60;.   The caller must have &#x60;see_schedules&#x60; permission to see other users&#39; scheduled plans.

### Example
```javascript
var LookerApi31Reference = require('looker-node-api');

var apiInstance = new LookerApi31Reference.ScheduledPlanApi();

var dashboardId = 789; // Number | Dashboard Id

var opts = {
  'userId': 789, // Number | User Id (default is requesting user if not specified)
  'allUsers': true, // Boolean | Return scheduled plans belonging to all users for the dashboard
  'fields': "fields_example" // String | Requested fields.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.scheduledPlansForDashboard(dashboardId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dashboardId** | **Number**| Dashboard Id |
 **userId** | **Number**| User Id (default is requesting user if not specified) | [optional]
 **allUsers** | **Boolean**| Return scheduled plans belonging to all users for the dashboard | [optional]
 **fields** | **String**| Requested fields. | [optional]

### Return type

[**[ScheduledPlan]**](ScheduledPlan.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="scheduledPlansForLook"></a>
# **scheduledPlansForLook**
> [ScheduledPlan] scheduledPlansForLook(lookId, opts)

Scheduled Plans for Look

### Get Scheduled Plans for a Look  Returns all scheduled plans for a look which belong to the caller or given user.  If no user_id is provided, this function returns the scheduled plans owned by the caller.   To list all schedules for all users, pass &#x60;all_users&#x3D;true&#x60;.   The caller must have &#x60;see_schedules&#x60; permission to see other users&#39; scheduled plans.

### Example
```javascript
var LookerApi31Reference = require('looker-node-api');

var apiInstance = new LookerApi31Reference.ScheduledPlanApi();

var lookId = 789; // Number | Look Id

var opts = {
  'userId': 789, // Number | User Id (default is requesting user if not specified)
  'fields': "fields_example", // String | Requested fields.
  'allUsers': true // Boolean | Return scheduled plans belonging to all users for the look
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.scheduledPlansForLook(lookId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **lookId** | **Number**| Look Id |
 **userId** | **Number**| User Id (default is requesting user if not specified) | [optional]
 **fields** | **String**| Requested fields. | [optional]
 **allUsers** | **Boolean**| Return scheduled plans belonging to all users for the look | [optional]

### Return type

[**[ScheduledPlan]**](ScheduledPlan.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="scheduledPlansForLookmlDashboard"></a>
# **scheduledPlansForLookmlDashboard**
> [ScheduledPlan] scheduledPlansForLookmlDashboard(lookmlDashboardId, opts)

Scheduled Plans for LookML Dashboard

### Get Scheduled Plans for a LookML Dashboard  Returns all scheduled plans for a LookML Dashboard which belong to the caller or given user.  If no user_id is provided, this function returns the scheduled plans owned by the caller.   To list all schedules for all users, pass &#x60;all_users&#x3D;true&#x60;.   The caller must have &#x60;see_schedules&#x60; permission to see other users&#39; scheduled plans.

### Example
```javascript
var LookerApi31Reference = require('looker-node-api');

var apiInstance = new LookerApi31Reference.ScheduledPlanApi();

var lookmlDashboardId = 789; // Number | LookML Dashboard Id

var opts = {
  'userId': 789, // Number | User Id (default is requesting user if not specified)
  'fields': "fields_example", // String | Requested fields.
  'allUsers': true // Boolean | Return scheduled plans belonging to all users for the dashboard
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.scheduledPlansForLookmlDashboard(lookmlDashboardId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **lookmlDashboardId** | **Number**| LookML Dashboard Id |
 **userId** | **Number**| User Id (default is requesting user if not specified) | [optional]
 **fields** | **String**| Requested fields. | [optional]
 **allUsers** | **Boolean**| Return scheduled plans belonging to all users for the dashboard | [optional]

### Return type

[**[ScheduledPlan]**](ScheduledPlan.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="scheduledPlansForSpace"></a>
# **scheduledPlansForSpace**
> [ScheduledPlan] scheduledPlansForSpace(spaceId, opts)

Scheduled Plans for Space

### Get Scheduled Plans for a Space  Returns scheduled plans owned by the caller for a given space id.

### Example
```javascript
var LookerApi31Reference = require('looker-node-api');

var apiInstance = new LookerApi31Reference.ScheduledPlanApi();

var spaceId = 789; // Number | Space Id

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
apiInstance.scheduledPlansForSpace(spaceId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **spaceId** | **Number**| Space Id |
 **fields** | **String**| Requested fields. | [optional]

### Return type

[**[ScheduledPlan]**](ScheduledPlan.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateScheduledPlan"></a>
# **updateScheduledPlan**
> ScheduledPlan updateScheduledPlan(scheduledPlanId, body)

Update Scheduled Plan

### Update a Scheduled Plan  Admins can update other users&#39; Scheduled Plans.  Note: Any scheduled plan destinations specified in an update will **replace** all scheduled plan destinations currently defined for the scheduled plan.  For Example: If a scheduled plan has destinations A, B, and C, and you call update on this scheduled plan specifying only B in the destinations, then destinations A and C will be deleted by the update.  Scheduled plan destinations must specify the data format to produce and send to the destination  Scheduled Plan Destination formats:  | format | Description | :-----------: | :--- | | json | A JSON object containing a &#x60;data&#x60; property which contains an array of JSON objects, one per row. No metadata. | json_detail | Row data plus metadata describing the fields, pivots, table calcs, and other aspects of the query | inline_json | Same as the JSON format, except that the &#x60;data&#x60; property is a string containing JSON-escaped row data. Additional properties describe the data operation. This format is primarily used to send data to web hooks so that the web hook doesn&#39;t have to re-encode the JSON row data in order to pass it on to its ultimate destination. | csv | Comma separated values with a header | txt | Tab separated values with a header | html | Simple html | xlsx | MS Excel spreadsheet | wysiwyg_pdf | Dashboard rendered in a tiled layout to produce a PDF document | assembled_pdf | Dashboard rendered in a single column layout to produce a PDF document | wysiwyg_png | Dashboard rendered in a tiled layout to produce a PNG image ||  Valid formats vary by destination type and source object. &#x60;wysiwyg_pdf&#x60; is only valid for dashboards, for example.

### Example
```javascript
var LookerApi31Reference = require('looker-node-api');

var apiInstance = new LookerApi31Reference.ScheduledPlanApi();

var scheduledPlanId = 789; // Number | Scheduled Plan Id

var body = new LookerApi31Reference.ScheduledPlan(); // ScheduledPlan | Scheduled Plan


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateScheduledPlan(scheduledPlanId, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scheduledPlanId** | **Number**| Scheduled Plan Id |
 **body** | [**ScheduledPlan**](ScheduledPlan.md)| Scheduled Plan |

### Return type

[**ScheduledPlan**](ScheduledPlan.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

