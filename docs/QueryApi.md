# LookerApi31Reference.QueryApi

All URIs are relative to */api/3.1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**allRunningQueries**](QueryApi.md#allRunningQueries) | **GET** /running_queries | Get All Running Queries
[**createMergeQuery**](QueryApi.md#createMergeQuery) | **POST** /merge_queries | Create Merge Query
[**createQuery**](QueryApi.md#createQuery) | **POST** /queries | Create Query
[**createQueryTask**](QueryApi.md#createQueryTask) | **POST** /query_tasks | Run Query Async
[**createSqlQuery**](QueryApi.md#createSqlQuery) | **POST** /sql_queries | Create SQL Runner Query
[**killQuery**](QueryApi.md#killQuery) | **DELETE** /running_queries/{query_task_id} | Kill Running Query
[**mergeQuery**](QueryApi.md#mergeQuery) | **GET** /merge_queries/{merge_query_id} | Get Merge Query
[**query**](QueryApi.md#query) | **GET** /queries/{query_id} | Get Query
[**queryForSlug**](QueryApi.md#queryForSlug) | **GET** /queries/slug/{slug} | Get Query for Slug
[**queryTask**](QueryApi.md#queryTask) | **GET** /query_tasks/{query_task_id} | Get Async Query Info
[**queryTaskMultiResults**](QueryApi.md#queryTaskMultiResults) | **GET** /query_tasks/multi_results | Get Multiple Async Query Results
[**queryTaskResults**](QueryApi.md#queryTaskResults) | **GET** /query_tasks/{query_task_id}/results | Get Async Query Results
[**runInlineQuery**](QueryApi.md#runInlineQuery) | **POST** /queries/run/{result_format} | Run Inline Query
[**runQuery**](QueryApi.md#runQuery) | **GET** /queries/{query_id}/run/{result_format} | Run Query
[**runSqlQuery**](QueryApi.md#runSqlQuery) | **POST** /sql_queries/{slug}/run/{result_format} | Run SQL Runner Query
[**runUrlEncodedQuery**](QueryApi.md#runUrlEncodedQuery) | **GET** /queries/models/{model_name}/views/{view_name}/run/{result_format} | Run Url Encoded Query
[**sqlQuery**](QueryApi.md#sqlQuery) | **GET** /sql_queries/{slug} | Get SQL Runner Query


<a name="allRunningQueries"></a>
# **allRunningQueries**
> [RunningQueries] allRunningQueries()

Get All Running Queries

Get information about all running queries.

### Example
```javascript
var LookerApi31Reference = require('looker-node-api');

var apiInstance = new LookerApi31Reference.QueryApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.allRunningQueries(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[RunningQueries]**](RunningQueries.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createMergeQuery"></a>
# **createMergeQuery**
> MergeQuery createMergeQuery(opts)

Create Merge Query

### Create Merge Query  Creates a new merge query object.  A merge query takes the results of one or more queries and combines (merges) the results according to field mapping definitions. The result is similar to a SQL left outer join.  A merge query can merge results of queries from different SQL databases.  The order that queries are defined in the source_queries array property is significant. The first query in the array defines the primary key into which the results of subsequent queries will be merged.  Like model/view query objects, merge queries are immutable and have structural identity - if you make a request to create a new merge query that is identical to an existing merge query, the existing merge query will be returned instead of creating a duplicate. Conversely, any change to the contents of a merge query will produce a new object with a new id.

### Example
```javascript
var LookerApi31Reference = require('looker-node-api');

var apiInstance = new LookerApi31Reference.QueryApi();

var opts = {
  'body': new LookerApi31Reference.MergeQuery(), // MergeQuery | Merge Query
  'fields': "fields_example" // String | Requested fields
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createMergeQuery(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**MergeQuery**](MergeQuery.md)| Merge Query | [optional]
 **fields** | **String**| Requested fields | [optional]

### Return type

[**MergeQuery**](MergeQuery.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createQuery"></a>
# **createQuery**
> Query createQuery(opts)

Create Query

### Create a query.  This allows you to create a new query that you can later run. Looker queries are immutable once created and are not deleted. If you create a query that is exactly like an existing query then the existing query will be returned and no new query will be created. Whether a new query is created or not, you can use the &#39;id&#39; in the returned query with the &#39;run&#39; method.  The query parameters are passed as json in the body of the request.

### Example
```javascript
var LookerApi31Reference = require('looker-node-api');

var apiInstance = new LookerApi31Reference.QueryApi();

var opts = {
  'body': new LookerApi31Reference.Query(), // Query | Query
  'fields': "fields_example" // String | Requested fields.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createQuery(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Query**](Query.md)| Query | [optional]
 **fields** | **String**| Requested fields. | [optional]

### Return type

[**Query**](Query.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createQueryTask"></a>
# **createQueryTask**
> QueryTask createQueryTask(body, opts)

Run Query Async

### Run a saved query asynchronously.  Runs a previously created query asynchronously. Returns a Query Task ID which can be used to fetch the results from the Query Tasks results endpoint.

### Example
```javascript
var LookerApi31Reference = require('looker-node-api');

var apiInstance = new LookerApi31Reference.QueryApi();

var body = new LookerApi31Reference.CreateQueryTask(); // CreateQueryTask | Query parameters

var opts = {
  'limit': 789, // Number | Row limit (may override the limit in the saved query).
  'applyFormatting': true, // Boolean | Apply model-specified formatting to each result.
  'applyVis': true, // Boolean | Apply visualization options to results.
  'cache': true, // Boolean | Get results from cache if available.
  'imageWidth': 789, // Number | Render width for image formats.
  'imageHeight': 789, // Number | Render height for image formats.
  'generateDrillLinks': true, // Boolean | Generate drill links (only applicable to 'json_detail' format.
  'forceProduction': true, // Boolean | Force use of production models even if the user is in development mode.
  'cacheOnly': true, // Boolean | Retrieve any results from cache even if the results have expired.
  'pathPrefix': "pathPrefix_example", // String | Prefix to use for drill links (url encoded).
  'rebuildPdts': true, // Boolean | Rebuild PDTS used in query.
  'serverTableCalcs': true, // Boolean | Perform table calculations on query results
  'fields': "fields_example" // String | Requested fields
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createQueryTask(body, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CreateQueryTask**](CreateQueryTask.md)| Query parameters |
 **limit** | **Number**| Row limit (may override the limit in the saved query). | [optional]
 **applyFormatting** | **Boolean**| Apply model-specified formatting to each result. | [optional]
 **applyVis** | **Boolean**| Apply visualization options to results. | [optional]
 **cache** | **Boolean**| Get results from cache if available. | [optional]
 **imageWidth** | **Number**| Render width for image formats. | [optional]
 **imageHeight** | **Number**| Render height for image formats. | [optional]
 **generateDrillLinks** | **Boolean**| Generate drill links (only applicable to &#39;json_detail&#39; format. | [optional]
 **forceProduction** | **Boolean**| Force use of production models even if the user is in development mode. | [optional]
 **cacheOnly** | **Boolean**| Retrieve any results from cache even if the results have expired. | [optional]
 **pathPrefix** | **String**| Prefix to use for drill links (url encoded). | [optional]
 **rebuildPdts** | **Boolean**| Rebuild PDTS used in query. | [optional]
 **serverTableCalcs** | **Boolean**| Perform table calculations on query results | [optional]
 **fields** | **String**| Requested fields | [optional]

### Return type

[**QueryTask**](QueryTask.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createSqlQuery"></a>
# **createSqlQuery**
> SqlQuery createSqlQuery(body)

Create SQL Runner Query

Create a SQL Runner query.

### Example
```javascript
var LookerApi31Reference = require('looker-node-api');

var apiInstance = new LookerApi31Reference.QueryApi();

var body = new LookerApi31Reference.SqlQueryCreate(); // SqlQueryCreate | SQL Runner Query


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createSqlQuery(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**SqlQueryCreate**](SqlQueryCreate.md)| SQL Runner Query |

### Return type

[**SqlQuery**](SqlQuery.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="killQuery"></a>
# **killQuery**
> &#39;String&#39; killQuery(queryTaskId)

Kill Running Query

Kill a query with a specific query_task_id.

### Example
```javascript
var LookerApi31Reference = require('looker-node-api');

var apiInstance = new LookerApi31Reference.QueryApi();

var queryTaskId = "queryTaskId_example"; // String | Query task id.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.killQuery(queryTaskId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **queryTaskId** | **String**| Query task id. |

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="mergeQuery"></a>
# **mergeQuery**
> MergeQuery mergeQuery(mergeQueryId, opts)

Get Merge Query

### Get Merge Query  Returns a merge query object given its id.

### Example
```javascript
var LookerApi31Reference = require('looker-node-api');

var apiInstance = new LookerApi31Reference.QueryApi();

var mergeQueryId = "mergeQueryId_example"; // String | Merge Query Id

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
apiInstance.mergeQuery(mergeQueryId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mergeQueryId** | **String**| Merge Query Id |
 **fields** | **String**| Requested fields | [optional]

### Return type

[**MergeQuery**](MergeQuery.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="query"></a>
# **query**
> Query query(queryId, opts)

Get Query

### Get a previously created query by id.  A Looker query object includes the various parameters that define a database query that has been run or could be run in the future. These parameters include: model, view, fields, filters, pivots, etc. Query *results* are not part of the query object.  Query objects are unique and immutable. Query objects are created automatically in Looker as users explore data. Looker does not delete them; they become part of the query history. When asked to create a query for any given set of parameters, Looker will first try to find an existing query object with matching parameters and will only create a new object when an appropriate object can not be found.  This &#39;get&#39; method is used to get the details about a query for a given id. See the other methods here to &#39;create&#39; and &#39;run&#39; queries.  Note that some fields like &#39;filter_config&#39; and &#39;vis_config&#39; etc are specific to how the Looker UI builds queries and visualizations and are not generally useful for API use. They are not required when creating new queries and can usually just be ignored.

### Example
```javascript
var LookerApi31Reference = require('looker-node-api');

var apiInstance = new LookerApi31Reference.QueryApi();

var queryId = 789; // Number | Id of query

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
apiInstance.query(queryId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **queryId** | **Number**| Id of query |
 **fields** | **String**| Requested fields. | [optional]

### Return type

[**Query**](Query.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="queryForSlug"></a>
# **queryForSlug**
> Query queryForSlug(slug, opts)

Get Query for Slug

### Get the query for a given query slug.  This returns the query for the &#39;slug&#39; in a query share URL.  The &#39;slug&#39; is a randomly chosen short string that is used as an alternative to the query&#39;s id value for use in URLs etc. This method exists as a convenience to help you use the API to &#39;find&#39; queries that have been created using the Looker UI.  You can use the Looker explore page to build a query and then choose the &#39;Share&#39; option to show the share url for the query. Share urls generally look something like &#39;https://looker.yourcompany/x/vwGSbfc&#39;. The trailing &#39;vwGSbfc&#39; is the share slug. You can pass that string to this api method to get details about the query. Those details include the &#39;id&#39; that you can use to run the query. Or, you can copy the query body (perhaps with your own modification) and use that as the basis to make/run new queries.  This will also work with slugs from Looker explore urls like &#39;https://looker.yourcompany/explore/ecommerce/orders?qid&#x3D;aogBgL6o3cKK1jN3RoZl5s&#39;. In this case &#39;aogBgL6o3cKK1jN3RoZl5s&#39; is the slug.

### Example
```javascript
var LookerApi31Reference = require('looker-node-api');

var apiInstance = new LookerApi31Reference.QueryApi();

var slug = "slug_example"; // String | Slug of query

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
apiInstance.queryForSlug(slug, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **slug** | **String**| Slug of query |
 **fields** | **String**| Requested fields. | [optional]

### Return type

[**Query**](Query.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="queryTask"></a>
# **queryTask**
> QueryTask queryTask(queryTaskId, opts)

Get Async Query Info

Returns information about a Query Task.  Query Tasks are generated by running queries asynchronously. They are represented by a GUID returned from one of the async query endpoints.

### Example
```javascript
var LookerApi31Reference = require('looker-node-api');

var apiInstance = new LookerApi31Reference.QueryApi();

var queryTaskId = "queryTaskId_example"; // String | ID of the Query Task

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
apiInstance.queryTask(queryTaskId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **queryTaskId** | **String**| ID of the Query Task |
 **fields** | **String**| Requested fields. | [optional]

### Return type

[**QueryTask**](QueryTask.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="queryTaskMultiResults"></a>
# **queryTaskMultiResults**
> {&#39;String&#39;: &#39;String&#39;} queryTaskMultiResults(queryTaskIds)

Get Multiple Async Query Results

Fetch the results of multiple async Query Tasks in one response.  For Query Tasks that are not completed, the response will include the execution status of the Query Task but will not include query results. Query Tasks whose results have expired will have a status of &#39;expired&#39;. If the user making the API request does not have sufficient privileges to view a Query Task result, the result will have a status of &#39;missing&#39;

### Example
```javascript
var LookerApi31Reference = require('looker-node-api');

var apiInstance = new LookerApi31Reference.QueryApi();

var queryTaskIds = ["queryTaskIds_example"]; // [String] | List of Query Task IDs


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.queryTaskMultiResults(queryTaskIds, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **queryTaskIds** | [**[String]**](String.md)| List of Query Task IDs |

### Return type

**{&#39;String&#39;: &#39;String&#39;}**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="queryTaskResults"></a>
# **queryTaskResults**
> {&#39;String&#39;: &#39;String&#39;} queryTaskResults(queryTaskId)

Get Async Query Results

Returns the results of an async Query Task if the query has completed.

### Example
```javascript
var LookerApi31Reference = require('looker-node-api');

var apiInstance = new LookerApi31Reference.QueryApi();

var queryTaskId = "queryTaskId_example"; // String | ID of the Query Task


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.queryTaskResults(queryTaskId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **queryTaskId** | **String**| ID of the Query Task |

### Return type

**{&#39;String&#39;: &#39;String&#39;}**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: text, application/json

<a name="runInlineQuery"></a>
# **runInlineQuery**
> &#39;String&#39; runInlineQuery(resultFormat, body, opts)

Run Inline Query

### Run the query that is specified inline in the posted body.  This allows running a query as defined in json in the posted body. This combines the two actions of posting &amp; running a query into one step.  Here is an example body in json: &#x60;&#x60;&#x60; {   \&quot;model\&quot;:\&quot;thelook\&quot;,   \&quot;view\&quot;:\&quot;inventory_items\&quot;,   \&quot;fields\&quot;:[\&quot;category.name\&quot;,\&quot;inventory_items.days_in_inventory_tier\&quot;,\&quot;products.count\&quot;],   \&quot;filters\&quot;:{\&quot;category.name\&quot;:\&quot;socks\&quot;},   \&quot;sorts\&quot;:[\&quot;products.count desc 0\&quot;],   \&quot;limit\&quot;:\&quot;500\&quot;,   \&quot;query_timezone\&quot;:\&quot;America/Los_Angeles\&quot; } &#x60;&#x60;&#x60;  When using the Ruby SDK this would be passed as a Ruby hash like: &#x60;&#x60;&#x60; {  :model&#x3D;&gt;\&quot;thelook\&quot;,  :view&#x3D;&gt;\&quot;inventory_items\&quot;,  :fields&#x3D;&gt;   [\&quot;category.name\&quot;,    \&quot;inventory_items.days_in_inventory_tier\&quot;,    \&quot;products.count\&quot;],  :filters&#x3D;&gt;{:\&quot;category.name\&quot;&#x3D;&gt;\&quot;socks\&quot;},  :sorts&#x3D;&gt;[\&quot;products.count desc 0\&quot;],  :limit&#x3D;&gt;\&quot;500\&quot;,  :query_timezone&#x3D;&gt;\&quot;America/Los_Angeles\&quot;, } &#x60;&#x60;&#x60;  This will return the result of running the query in the format specified by the &#39;result_format&#39; parameter.  Supported formats:  | result_format | Description | :-----------: | :--- | | json | Plain json | json_detail | Row data plus metadata describing the fields, pivots, table calcs, and other aspects of the query | csv | Comma separated values with a header | txt | Tab separated values with a header | html | Simple html | md | Simple markdown | xlsx | MS Excel spreadsheet | sql | Returns the generated SQL rather than running the query | png | A PNG image of the visualization of the query | jpg | A JPG image of the visualization of the query

### Example
```javascript
var LookerApi31Reference = require('looker-node-api');

var apiInstance = new LookerApi31Reference.QueryApi();

var resultFormat = "resultFormat_example"; // String | Format of result

var body = new LookerApi31Reference.Query(); // Query | inline query

var opts = {
  'limit': 789, // Number | Row limit (may override the limit in the saved query).
  'applyFormatting': true, // Boolean | Apply model-specified formatting to each result.
  'applyVis': true, // Boolean | Apply visualization options to results.
  'cache': true, // Boolean | Get results from cache if available.
  'imageWidth': 789, // Number | Render width for image formats.
  'imageHeight': 789, // Number | Render height for image formats.
  'generateDrillLinks': true, // Boolean | Generate drill links (only applicable to 'json_detail' format.
  'forceProduction': true, // Boolean | Force use of production models even if the user is in development mode.
  'cacheOnly': true, // Boolean | Retrieve any results from cache even if the results have expired.
  'pathPrefix': "pathPrefix_example", // String | Prefix to use for drill links (url encoded).
  'rebuildPdts': true, // Boolean | Rebuild PDTS used in query.
  'serverTableCalcs': true // Boolean | Perform table calculations on query results
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.runInlineQuery(resultFormat, body, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resultFormat** | **String**| Format of result |
 **body** | [**Query**](Query.md)| inline query |
 **limit** | **Number**| Row limit (may override the limit in the saved query). | [optional]
 **applyFormatting** | **Boolean**| Apply model-specified formatting to each result. | [optional]
 **applyVis** | **Boolean**| Apply visualization options to results. | [optional]
 **cache** | **Boolean**| Get results from cache if available. | [optional]
 **imageWidth** | **Number**| Render width for image formats. | [optional]
 **imageHeight** | **Number**| Render height for image formats. | [optional]
 **generateDrillLinks** | **Boolean**| Generate drill links (only applicable to &#39;json_detail&#39; format. | [optional]
 **forceProduction** | **Boolean**| Force use of production models even if the user is in development mode. | [optional]
 **cacheOnly** | **Boolean**| Retrieve any results from cache even if the results have expired. | [optional]
 **pathPrefix** | **String**| Prefix to use for drill links (url encoded). | [optional]
 **rebuildPdts** | **Boolean**| Rebuild PDTS used in query. | [optional]
 **serverTableCalcs** | **Boolean**| Perform table calculations on query results | [optional]

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: text, application/json, image/png, image/jpg

<a name="runQuery"></a>
# **runQuery**
> &#39;String&#39; runQuery(queryId, resultFormat, opts)

Run Query

### Run a saved query.  This runs a previously saved query. You can use this on a query that was generated in the Looker UI or one that you have explicitly created using the API. You can also use a query &#39;id&#39; from a saved &#39;Look&#39;.  The &#39;result_format&#39; parameter specifies the desired structure and format of the response.  Supported formats:  | result_format | Description | :-----------: | :--- | | json | Plain json | json_detail | Row data plus metadata describing the fields, pivots, table calcs, and other aspects of the query | csv | Comma separated values with a header | txt | Tab separated values with a header | html | Simple html | md | Simple markdown | xlsx | MS Excel spreadsheet | sql | Returns the generated SQL rather than running the query | png | A PNG image of the visualization of the query | jpg | A JPG image of the visualization of the query

### Example
```javascript
var LookerApi31Reference = require('looker-node-api');

var apiInstance = new LookerApi31Reference.QueryApi();

var queryId = 789; // Number | Id of query

var resultFormat = "resultFormat_example"; // String | Format of result

var opts = {
  'limit': 789, // Number | Row limit (may override the limit in the saved query).
  'applyFormatting': true, // Boolean | Apply model-specified formatting to each result.
  'applyVis': true, // Boolean | Apply visualization options to results.
  'cache': true, // Boolean | Get results from cache if available.
  'imageWidth': 789, // Number | Render width for image formats.
  'imageHeight': 789, // Number | Render height for image formats.
  'generateDrillLinks': true, // Boolean | Generate drill links (only applicable to 'json_detail' format.
  'forceProduction': true, // Boolean | Force use of production models even if the user is in development mode.
  'cacheOnly': true, // Boolean | Retrieve any results from cache even if the results have expired.
  'pathPrefix': "pathPrefix_example", // String | Prefix to use for drill links (url encoded).
  'rebuildPdts': true, // Boolean | Rebuild PDTS used in query.
  'serverTableCalcs': true // Boolean | Perform table calculations on query results
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.runQuery(queryId, resultFormat, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **queryId** | **Number**| Id of query |
 **resultFormat** | **String**| Format of result |
 **limit** | **Number**| Row limit (may override the limit in the saved query). | [optional]
 **applyFormatting** | **Boolean**| Apply model-specified formatting to each result. | [optional]
 **applyVis** | **Boolean**| Apply visualization options to results. | [optional]
 **cache** | **Boolean**| Get results from cache if available. | [optional]
 **imageWidth** | **Number**| Render width for image formats. | [optional]
 **imageHeight** | **Number**| Render height for image formats. | [optional]
 **generateDrillLinks** | **Boolean**| Generate drill links (only applicable to &#39;json_detail&#39; format. | [optional]
 **forceProduction** | **Boolean**| Force use of production models even if the user is in development mode. | [optional]
 **cacheOnly** | **Boolean**| Retrieve any results from cache even if the results have expired. | [optional]
 **pathPrefix** | **String**| Prefix to use for drill links (url encoded). | [optional]
 **rebuildPdts** | **Boolean**| Rebuild PDTS used in query. | [optional]
 **serverTableCalcs** | **Boolean**| Perform table calculations on query results | [optional]

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: text, application/json, image/png, image/jpg

<a name="runSqlQuery"></a>
# **runSqlQuery**
> &#39;String&#39; runSqlQuery(slug, resultFormat, opts)

Run SQL Runner Query

Execute a SQL Runner query in a given result_format.

### Example
```javascript
var LookerApi31Reference = require('looker-node-api');

var apiInstance = new LookerApi31Reference.QueryApi();

var slug = "slug_example"; // String | slug of query

var resultFormat = "resultFormat_example"; // String | Format of result, options are: [\"json\", \"json_detail\", \"json_fe\", \"csv\", \"html\", \"md\", \"txt\", \"xlsx\", \"gsxml\"]

var opts = {
  'download': "download_example" // String | Defaults to false. If set to true, the HTTP response will have content-disposition and other headers set to make the HTTP response behave as a downloadable attachment instead of as inline content.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.runSqlQuery(slug, resultFormat, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **slug** | **String**| slug of query |
 **resultFormat** | **String**| Format of result, options are: [\&quot;json\&quot;, \&quot;json_detail\&quot;, \&quot;json_fe\&quot;, \&quot;csv\&quot;, \&quot;html\&quot;, \&quot;md\&quot;, \&quot;txt\&quot;, \&quot;xlsx\&quot;, \&quot;gsxml\&quot;] |
 **download** | **String**| Defaults to false. If set to true, the HTTP response will have content-disposition and other headers set to make the HTTP response behave as a downloadable attachment instead of as inline content. | [optional]

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: text, application/json, image/png, image/jpg

<a name="runUrlEncodedQuery"></a>
# **runUrlEncodedQuery**
> &#39;String&#39; runUrlEncodedQuery(modelName, viewName, resultFormat)

Run Url Encoded Query

### Run an URL encoded query.  This requires the caller to encode the specifiers for the query into the URL query part using Looker-specific syntax as explained below.  Generally, you would want to use one of the methods that takes the parameters as json in the POST body for creating and/or running queries. This method exists for cases where one really needs to encode the parameters into the URL of a single &#39;GET&#39; request. This matches the way that the Looker UI formats &#39;explore&#39; URLs etc.  The parameters here are very similar to the json body formatting except that the filter syntax is tricky. Unfortunately, this format makes this method not currently callible via the &#39;Try it out!&#39; button in this documentation page. But, this is callable  when creating URLs manually or when using the Looker SDK.  Here is an example inline query URL:  &#x60;&#x60;&#x60; https://looker.mycompany.com:19999/api/3.0/queries/models/thelook/views/inventory_items/run/json?fields&#x3D;category.name,inventory_items.days_in_inventory_tier,products.count&amp;f[category.name]&#x3D;socks&amp;sorts&#x3D;products.count+desc+0&amp;limit&#x3D;500&amp;query_timezone&#x3D;America/Los_Angeles &#x60;&#x60;&#x60;  When invoking this endpoint with the Ruby SDK, pass the query parameter parts as a hash. The hash to match the above would look like:  &#x60;&#x60;&#x60;ruby query_params &#x3D; {   :fields &#x3D;&gt; \&quot;category.name,inventory_items.days_in_inventory_tier,products.count\&quot;,   :\&quot;f[category.name]\&quot; &#x3D;&gt; \&quot;socks\&quot;,   :sorts &#x3D;&gt; \&quot;products.count desc 0\&quot;,   :limit &#x3D;&gt; \&quot;500\&quot;,   :query_timezone &#x3D;&gt; \&quot;America/Los_Angeles\&quot; } response &#x3D; ruby_sdk.run_url_encoded_query(&#39;thelook&#39;,&#39;inventory_items&#39;,&#39;json&#39;, query_params)  &#x60;&#x60;&#x60;  Again, it is generally easier to use the variant of this method that passes the full query in the POST body. This method is available for cases where other alternatives won&#39;t fit the need.  Supported formats:  | result_format | Description | :-----------: | :--- | | json | Plain json | json_detail | Row data plus metadata describing the fields, pivots, table calcs, and other aspects of the query | csv | Comma separated values with a header | txt | Tab separated values with a header | html | Simple html | md | Simple markdown | xlsx | MS Excel spreadsheet | sql | Returns the generated SQL rather than running the query | png | A PNG image of the visualization of the query | jpg | A JPG image of the visualization of the query

### Example
```javascript
var LookerApi31Reference = require('looker-node-api');

var apiInstance = new LookerApi31Reference.QueryApi();

var modelName = "modelName_example"; // String | Model name

var viewName = "viewName_example"; // String | View name

var resultFormat = "resultFormat_example"; // String | Format of result


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.runUrlEncodedQuery(modelName, viewName, resultFormat, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **modelName** | **String**| Model name |
 **viewName** | **String**| View name |
 **resultFormat** | **String**| Format of result |

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: text, application/json, image/png, image/jpg

<a name="sqlQuery"></a>
# **sqlQuery**
> SqlQuery sqlQuery(slug)

Get SQL Runner Query

Get a SQL Runner query.

### Example
```javascript
var LookerApi31Reference = require('looker-node-api');

var apiInstance = new LookerApi31Reference.QueryApi();

var slug = "slug_example"; // String | slug of query


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.sqlQuery(slug, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **slug** | **String**| slug of query |

### Return type

[**SqlQuery**](SqlQuery.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

