# LookerApi31Reference.RenderTaskApi

All URIs are relative to *https://analytics.kollectivecd.com:20000/api/3.1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createDashboardRenderTask**](RenderTaskApi.md#createDashboardRenderTask) | **POST** /render_tasks/dashboards/{dashboard_id}/{result_format} | Create Dashboard Render Task
[**createLookRenderTask**](RenderTaskApi.md#createLookRenderTask) | **POST** /render_tasks/looks/{look_id}/{result_format} | Create Look Render Task
[**createLookmlDashboardRenderTask**](RenderTaskApi.md#createLookmlDashboardRenderTask) | **POST** /render_tasks/lookml_dashboards/{dashboard_id}/{result_format} | Create Lookml Dashboard Render Task
[**createQueryRenderTask**](RenderTaskApi.md#createQueryRenderTask) | **POST** /render_tasks/queries/{query_id}/{result_format} | Create Query Render Task
[**renderTask**](RenderTaskApi.md#renderTask) | **GET** /render_tasks/{render_task_id} | Get Render Task
[**renderTaskResults**](RenderTaskApi.md#renderTaskResults) | **GET** /render_tasks/{render_task_id}/results | Render Task Results


<a name="createDashboardRenderTask"></a>
# **createDashboardRenderTask**
> RenderTask createDashboardRenderTask(dashboardId, resultFormat, body, width, height, opts)

Create Dashboard Render Task

### Create a new task to render a dashboard to a document or image.  Returns a render task object. To check the status of a render task, pass the render_task.id to [Get Render Task](#!/RenderTask/get_render_task). Once the render task is complete, you can download the resulting document or image using [Get Render Task Results](#!/RenderTask/get_render_task_results).  

### Example
```javascript
var LookerApi31Reference = require('looker_api_31_reference');

var apiInstance = new LookerApi31Reference.RenderTaskApi();

var dashboardId = 789; // Number | Id of dashboard to render

var resultFormat = "resultFormat_example"; // String | Output type: pdf, png, or jpg

var body = new LookerApi31Reference.CreateDashboardRenderTask(); // CreateDashboardRenderTask | Dashboard render task parameters

var width = 789; // Number | Output width in pixels

var height = 789; // Number | Output height in pixels

var opts = { 
  'fields': "fields_example", // String | Requested fields.
  'pdfPaperSize': "pdfPaperSize_example", // String | Paper size for pdf
  'pdfLandscape': true // Boolean | Whether to render pdf in landscape
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createDashboardRenderTask(dashboardId, resultFormat, body, width, height, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dashboardId** | **Number**| Id of dashboard to render | 
 **resultFormat** | **String**| Output type: pdf, png, or jpg | 
 **body** | [**CreateDashboardRenderTask**](CreateDashboardRenderTask.md)| Dashboard render task parameters | 
 **width** | **Number**| Output width in pixels | 
 **height** | **Number**| Output height in pixels | 
 **fields** | **String**| Requested fields. | [optional] 
 **pdfPaperSize** | **String**| Paper size for pdf | [optional] 
 **pdfLandscape** | **Boolean**| Whether to render pdf in landscape | [optional] 

### Return type

[**RenderTask**](RenderTask.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createLookRenderTask"></a>
# **createLookRenderTask**
> RenderTask createLookRenderTask(lookId, resultFormat, width, height, opts)

Create Look Render Task

### Create a new task to render a look to an image.  Returns a render task object. To check the status of a render task, pass the render_task.id to [Get Render Task](#!/RenderTask/get_render_task). Once the render task is complete, you can download the resulting document or image using [Get Render Task Results](#!/RenderTask/get_render_task_results).  

### Example
```javascript
var LookerApi31Reference = require('looker_api_31_reference');

var apiInstance = new LookerApi31Reference.RenderTaskApi();

var lookId = 789; // Number | Id of look to render

var resultFormat = "resultFormat_example"; // String | Output type: png, or jpg

var width = 789; // Number | Output width in pixels

var height = 789; // Number | Output height in pixels

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
apiInstance.createLookRenderTask(lookId, resultFormat, width, height, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **lookId** | **Number**| Id of look to render | 
 **resultFormat** | **String**| Output type: png, or jpg | 
 **width** | **Number**| Output width in pixels | 
 **height** | **Number**| Output height in pixels | 
 **fields** | **String**| Requested fields. | [optional] 

### Return type

[**RenderTask**](RenderTask.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createLookmlDashboardRenderTask"></a>
# **createLookmlDashboardRenderTask**
> RenderTask createLookmlDashboardRenderTask(dashboardId, resultFormat, body, width, height, opts)

Create Lookml Dashboard Render Task

### Create a new task to render a lookml dashboard to a document or image.  Returns a render task object. To check the status of a render task, pass the render_task.id to [Get Render Task](#!/RenderTask/get_render_task). Once the render task is complete, you can download the resulting document or image using [Get Render Task Results](#!/RenderTask/get_render_task_results).  

### Example
```javascript
var LookerApi31Reference = require('looker_api_31_reference');

var apiInstance = new LookerApi31Reference.RenderTaskApi();

var dashboardId = "dashboardId_example"; // String | Id of lookml dashboard to render

var resultFormat = "resultFormat_example"; // String | Output type: pdf, png, or jpg

var body = new LookerApi31Reference.CreateDashboardRenderTask(); // CreateDashboardRenderTask | Dashboard render task parameters

var width = 789; // Number | Output width in pixels

var height = 789; // Number | Output height in pixels

var opts = { 
  'fields': "fields_example", // String | Requested fields.
  'pdfPaperSize': "pdfPaperSize_example", // String | Paper size for pdf
  'pdfLandscape': true // Boolean | Whether to render pdf in landscape
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createLookmlDashboardRenderTask(dashboardId, resultFormat, body, width, height, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dashboardId** | **String**| Id of lookml dashboard to render | 
 **resultFormat** | **String**| Output type: pdf, png, or jpg | 
 **body** | [**CreateDashboardRenderTask**](CreateDashboardRenderTask.md)| Dashboard render task parameters | 
 **width** | **Number**| Output width in pixels | 
 **height** | **Number**| Output height in pixels | 
 **fields** | **String**| Requested fields. | [optional] 
 **pdfPaperSize** | **String**| Paper size for pdf | [optional] 
 **pdfLandscape** | **Boolean**| Whether to render pdf in landscape | [optional] 

### Return type

[**RenderTask**](RenderTask.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createQueryRenderTask"></a>
# **createQueryRenderTask**
> RenderTask createQueryRenderTask(queryId, resultFormat, width, height, opts)

Create Query Render Task

### Create a new task to render an existing query to an image.  Returns a render task object. To check the status of a render task, pass the render_task.id to [Get Render Task](#!/RenderTask/get_render_task). Once the render task is complete, you can download the resulting document or image using [Get Render Task Results](#!/RenderTask/get_render_task_results).  

### Example
```javascript
var LookerApi31Reference = require('looker_api_31_reference');

var apiInstance = new LookerApi31Reference.RenderTaskApi();

var queryId = 789; // Number | Id of the query to render

var resultFormat = "resultFormat_example"; // String | Output type: png or jpg

var width = 789; // Number | Output width in pixels

var height = 789; // Number | Output height in pixels

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
apiInstance.createQueryRenderTask(queryId, resultFormat, width, height, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **queryId** | **Number**| Id of the query to render | 
 **resultFormat** | **String**| Output type: png or jpg | 
 **width** | **Number**| Output width in pixels | 
 **height** | **Number**| Output height in pixels | 
 **fields** | **String**| Requested fields. | [optional] 

### Return type

[**RenderTask**](RenderTask.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="renderTask"></a>
# **renderTask**
> RenderTask renderTask(renderTaskId, opts)

Get Render Task

### Get information about a render task.  Returns a render task object. To check the status of a render task, pass the render_task.id to [Get Render Task](#!/RenderTask/get_render_task). Once the render task is complete, you can download the resulting document or image using [Get Render Task Results](#!/RenderTask/get_render_task_results).  

### Example
```javascript
var LookerApi31Reference = require('looker_api_31_reference');

var apiInstance = new LookerApi31Reference.RenderTaskApi();

var renderTaskId = "renderTaskId_example"; // String | Id of render task

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
apiInstance.renderTask(renderTaskId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **renderTaskId** | **String**| Id of render task | 
 **fields** | **String**| Requested fields. | [optional] 

### Return type

[**RenderTask**](RenderTask.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="renderTaskResults"></a>
# **renderTaskResults**
> &#39;String&#39; renderTaskResults(renderTaskId)

Render Task Results

### Get the document or image produced by a completed render task.  Note that the PDF or image result will be a binary blob in the HTTP response, as indicated by the Content-Type in the response headers. This may require specialized (or at least different) handling than text responses such as JSON. You may need to tell your HTTP client that the response is binary so that it does not attempt to parse the binary data as text.  If the render task exists but has not finished rendering the results, the response HTTP status will be **202 Accepted**, the response body will be empty, and the response will have a Retry-After header indicating that the caller should repeat the request at a later time.  Returns 404 if the render task cannot be found, if the cached result has expired, or if the caller does not have permission to view the results.  For detailed information about the status of the render task, use [Render Task](#!/RenderTask/render_task). Polling loops waiting for completion of a render task would be better served by polling **render_task(id)** until the task status reaches completion (or error) instead of polling **render_task_results(id)** alone. 

### Example
```javascript
var LookerApi31Reference = require('looker_api_31_reference');

var apiInstance = new LookerApi31Reference.RenderTaskApi();

var renderTaskId = "renderTaskId_example"; // String | Id of render task


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.renderTaskResults(renderTaskId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **renderTaskId** | **String**| Id of render task | 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: image/jpeg, image/png, application/pdf

