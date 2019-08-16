/**
 * Looker API 3.1 Reference
 * ### Authorization  The Looker API uses Looker **API3** credentials for authorization and access control. Looker admins can create API3 credentials on Looker's **Admin/Users** page. Pass API3 credentials to the **_/login** endpoint to obtain a temporary access_token. Include that access_token in the Authorization header of Looker API requests. For details, see [Looker API Authorization](https://looker.com/docs/r/api/authorization)  ### Client SDKs  The Looker API is a RESTful system that should be usable by any programming language capable of making HTTPS requests. Client SDKs for a variety of programming languages can be generated from the Looker API's Swagger JSON metadata to streamline use of the Looker API in your applications. A client SDK for Ruby is available as an example. For more information, see [Looker API Client SDKs](https://looker.com/docs/r/api/client_sdks)  ### Try It Out!  The 'api-docs' page served by the Looker instance includes 'Try It Out!' buttons for each API method. After logging in with API3 credentials, you can use the \"Try It Out!\" buttons to call the API directly from the documentation page to interactively explore API features and responses.  Note! With great power comes great responsibility: The \"Try It Out!\" button makes API calls to your live Looker instance. Be especially careful with destructive API operations such as `delete_user` or similar. There is no \"undo\" for API operations.  ### Versioning  Future releases of Looker will expand this API release-by-release to securely expose more and more of the core power of Looker to API client applications. API endpoints marked as \"beta\" may receive breaking changes without warning (but we will try to avoid doing that). Stable (non-beta) API endpoints should not receive breaking changes in future releases. For more information, see [Looker API Versioning](https://looker.com/docs/r/api/versioning)  This **API 3.1** is in active development. This is where support for new Looker features will appear as non-breaking additions - new functions, new optional parameters on existing functions, or new optional properties in existing types. Additive changes should not impact your existing application code that calls the Looker API. Your existing application code will not be aware of any new Looker API functionality until you choose to upgrade your app to use a newer Looker API client SDK release.  The following are a few examples of noteworthy items that have changed between API 3.0 and API 3.1. For more comprehensive coverage of API changes, please see the release notes for your Looker release.   ### Examples of new things added in API 3.1:  * Dashboard construction APIs * Themes and custom color collections APIs * Create and run SQL_runner queries * Create and run merged results queries * Create and modify dashboard filters * Create and modify password requirements   ### Deprecated in API 3.0  The following functions and properties have been deprecated in API 3.0.  They continue to exist and work in API 3.0 for the next several Looker releases but they have not been carried forward to API 3.1:  * Dashboard Prefetch functions * User access_filter functions * User API 1.0 credentials functions * Space.is_root and Space.is_user_root properties. Use Space.is_shared_root and Space.is_users_root instead.   ### Semantic changes in API 3.1:  * `all_looks` no longer includes soft-deleted looks, matching `all_dashboards` behavior. You can find soft-deleted looks using `search_looks` with the `deleted` param set to True. * `all_spaces` no longer includes duplicate items * `search_users` no longer accepts Y,y,1,0,N,n for Boolean params, only \"true\" and \"false\". * For greater client and network compatibility, `render_task_results` now returns HTTP status ***202 Accepted*** instead of HTTP status ***102 Processing*** * `all_running_queries` and `kill_query` functions have moved into the `Query` function group.   If you have application code which relies on the old behavior of the APIs above, you may continue using the API 3.0 functions in this Looker release. We strongly suggest you update your code to use API 3.1 analogs as soon as possible.  
 *
 * OpenAPI spec version: 3.1.0
 * Contact: support@looker.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.7
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/CreateDashboardRenderTask', 'model/Error', 'model/RenderTask', 'model/ValidationError'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/CreateDashboardRenderTask'), require('../model/Error'), require('../model/RenderTask'), require('../model/ValidationError'));
  } else {
    // Browser globals (root is window)
    if (!root.LookerApi31Reference) {
      root.LookerApi31Reference = {};
    }
    root.LookerApi31Reference.RenderTaskApi = factory(root.LookerApi31Reference.ApiClient, root.LookerApi31Reference.CreateDashboardRenderTask, root.LookerApi31Reference.Error, root.LookerApi31Reference.RenderTask, root.LookerApi31Reference.ValidationError);
  }
}(this, function(ApiClient, CreateDashboardRenderTask, Error, RenderTask, ValidationError) {
  'use strict';

  /**
   * RenderTask service.
   * @module api/RenderTaskApi
   * @version 3.1.0
   */

  /**
   * Constructs a new RenderTaskApi. 
   * @alias module:api/RenderTaskApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the createDashboardRenderTask operation.
     * @callback module:api/RenderTaskApi~createDashboardRenderTaskCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RenderTask} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create Dashboard Render Task
     * ### Create a new task to render a dashboard to a document or image.  Returns a render task object. To check the status of a render task, pass the render_task.id to [Get Render Task](#!/RenderTask/get_render_task). Once the render task is complete, you can download the resulting document or image using [Get Render Task Results](#!/RenderTask/get_render_task_results).  
     * @param {Number} dashboardId Id of dashboard to render
     * @param {String} resultFormat Output type: pdf, png, or jpg
     * @param {module:model/CreateDashboardRenderTask} body Dashboard render task parameters
     * @param {Number} width Output width in pixels
     * @param {Number} height Output height in pixels
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields Requested fields.
     * @param {String} opts.pdfPaperSize Paper size for pdf
     * @param {Boolean} opts.pdfLandscape Whether to render pdf in landscape
     * @param {module:api/RenderTaskApi~createDashboardRenderTaskCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RenderTask}
     */
    this.createDashboardRenderTask = function(dashboardId, resultFormat, body, width, height, opts, callback) {
      opts = opts || {};
      var postBody = body;

      // verify the required parameter 'dashboardId' is set
      if (dashboardId === undefined || dashboardId === null) {
        throw new Error("Missing the required parameter 'dashboardId' when calling createDashboardRenderTask");
      }

      // verify the required parameter 'resultFormat' is set
      if (resultFormat === undefined || resultFormat === null) {
        throw new Error("Missing the required parameter 'resultFormat' when calling createDashboardRenderTask");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createDashboardRenderTask");
      }

      // verify the required parameter 'width' is set
      if (width === undefined || width === null) {
        throw new Error("Missing the required parameter 'width' when calling createDashboardRenderTask");
      }

      // verify the required parameter 'height' is set
      if (height === undefined || height === null) {
        throw new Error("Missing the required parameter 'height' when calling createDashboardRenderTask");
      }


      var pathParams = {
        'dashboard_id': dashboardId,
        'result_format': resultFormat
      };
      var queryParams = {
        'width': width,
        'height': height,
        'fields': opts['fields'],
        'pdf_paper_size': opts['pdfPaperSize'],
        'pdf_landscape': opts['pdfLandscape'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = RenderTask;

      return this.apiClient.callApi(
        '/render_tasks/dashboards/{dashboard_id}/{result_format}', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the createLookRenderTask operation.
     * @callback module:api/RenderTaskApi~createLookRenderTaskCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RenderTask} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create Look Render Task
     * ### Create a new task to render a look to an image.  Returns a render task object. To check the status of a render task, pass the render_task.id to [Get Render Task](#!/RenderTask/get_render_task). Once the render task is complete, you can download the resulting document or image using [Get Render Task Results](#!/RenderTask/get_render_task_results).  
     * @param {Number} lookId Id of look to render
     * @param {String} resultFormat Output type: png, or jpg
     * @param {Number} width Output width in pixels
     * @param {Number} height Output height in pixels
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields Requested fields.
     * @param {module:api/RenderTaskApi~createLookRenderTaskCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RenderTask}
     */
    this.createLookRenderTask = function(lookId, resultFormat, width, height, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'lookId' is set
      if (lookId === undefined || lookId === null) {
        throw new Error("Missing the required parameter 'lookId' when calling createLookRenderTask");
      }

      // verify the required parameter 'resultFormat' is set
      if (resultFormat === undefined || resultFormat === null) {
        throw new Error("Missing the required parameter 'resultFormat' when calling createLookRenderTask");
      }

      // verify the required parameter 'width' is set
      if (width === undefined || width === null) {
        throw new Error("Missing the required parameter 'width' when calling createLookRenderTask");
      }

      // verify the required parameter 'height' is set
      if (height === undefined || height === null) {
        throw new Error("Missing the required parameter 'height' when calling createLookRenderTask");
      }


      var pathParams = {
        'look_id': lookId,
        'result_format': resultFormat
      };
      var queryParams = {
        'width': width,
        'height': height,
        'fields': opts['fields'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = RenderTask;

      return this.apiClient.callApi(
        '/render_tasks/looks/{look_id}/{result_format}', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the createLookmlDashboardRenderTask operation.
     * @callback module:api/RenderTaskApi~createLookmlDashboardRenderTaskCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RenderTask} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create Lookml Dashboard Render Task
     * ### Create a new task to render a lookml dashboard to a document or image.  Returns a render task object. To check the status of a render task, pass the render_task.id to [Get Render Task](#!/RenderTask/get_render_task). Once the render task is complete, you can download the resulting document or image using [Get Render Task Results](#!/RenderTask/get_render_task_results).  
     * @param {String} dashboardId Id of lookml dashboard to render
     * @param {String} resultFormat Output type: pdf, png, or jpg
     * @param {module:model/CreateDashboardRenderTask} body Dashboard render task parameters
     * @param {Number} width Output width in pixels
     * @param {Number} height Output height in pixels
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields Requested fields.
     * @param {String} opts.pdfPaperSize Paper size for pdf
     * @param {Boolean} opts.pdfLandscape Whether to render pdf in landscape
     * @param {module:api/RenderTaskApi~createLookmlDashboardRenderTaskCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RenderTask}
     */
    this.createLookmlDashboardRenderTask = function(dashboardId, resultFormat, body, width, height, opts, callback) {
      opts = opts || {};
      var postBody = body;

      // verify the required parameter 'dashboardId' is set
      if (dashboardId === undefined || dashboardId === null) {
        throw new Error("Missing the required parameter 'dashboardId' when calling createLookmlDashboardRenderTask");
      }

      // verify the required parameter 'resultFormat' is set
      if (resultFormat === undefined || resultFormat === null) {
        throw new Error("Missing the required parameter 'resultFormat' when calling createLookmlDashboardRenderTask");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createLookmlDashboardRenderTask");
      }

      // verify the required parameter 'width' is set
      if (width === undefined || width === null) {
        throw new Error("Missing the required parameter 'width' when calling createLookmlDashboardRenderTask");
      }

      // verify the required parameter 'height' is set
      if (height === undefined || height === null) {
        throw new Error("Missing the required parameter 'height' when calling createLookmlDashboardRenderTask");
      }


      var pathParams = {
        'dashboard_id': dashboardId,
        'result_format': resultFormat
      };
      var queryParams = {
        'width': width,
        'height': height,
        'fields': opts['fields'],
        'pdf_paper_size': opts['pdfPaperSize'],
        'pdf_landscape': opts['pdfLandscape'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = RenderTask;

      return this.apiClient.callApi(
        '/render_tasks/lookml_dashboards/{dashboard_id}/{result_format}', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the createQueryRenderTask operation.
     * @callback module:api/RenderTaskApi~createQueryRenderTaskCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RenderTask} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create Query Render Task
     * ### Create a new task to render an existing query to an image.  Returns a render task object. To check the status of a render task, pass the render_task.id to [Get Render Task](#!/RenderTask/get_render_task). Once the render task is complete, you can download the resulting document or image using [Get Render Task Results](#!/RenderTask/get_render_task_results).  
     * @param {Number} queryId Id of the query to render
     * @param {String} resultFormat Output type: png or jpg
     * @param {Number} width Output width in pixels
     * @param {Number} height Output height in pixels
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields Requested fields.
     * @param {module:api/RenderTaskApi~createQueryRenderTaskCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RenderTask}
     */
    this.createQueryRenderTask = function(queryId, resultFormat, width, height, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'queryId' is set
      if (queryId === undefined || queryId === null) {
        throw new Error("Missing the required parameter 'queryId' when calling createQueryRenderTask");
      }

      // verify the required parameter 'resultFormat' is set
      if (resultFormat === undefined || resultFormat === null) {
        throw new Error("Missing the required parameter 'resultFormat' when calling createQueryRenderTask");
      }

      // verify the required parameter 'width' is set
      if (width === undefined || width === null) {
        throw new Error("Missing the required parameter 'width' when calling createQueryRenderTask");
      }

      // verify the required parameter 'height' is set
      if (height === undefined || height === null) {
        throw new Error("Missing the required parameter 'height' when calling createQueryRenderTask");
      }


      var pathParams = {
        'query_id': queryId,
        'result_format': resultFormat
      };
      var queryParams = {
        'width': width,
        'height': height,
        'fields': opts['fields'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = RenderTask;

      return this.apiClient.callApi(
        '/render_tasks/queries/{query_id}/{result_format}', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the renderTask operation.
     * @callback module:api/RenderTaskApi~renderTaskCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RenderTask} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Render Task
     * ### Get information about a render task.  Returns a render task object. To check the status of a render task, pass the render_task.id to [Get Render Task](#!/RenderTask/get_render_task). Once the render task is complete, you can download the resulting document or image using [Get Render Task Results](#!/RenderTask/get_render_task_results).  
     * @param {String} renderTaskId Id of render task
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields Requested fields.
     * @param {module:api/RenderTaskApi~renderTaskCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RenderTask}
     */
    this.renderTask = function(renderTaskId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'renderTaskId' is set
      if (renderTaskId === undefined || renderTaskId === null) {
        throw new Error("Missing the required parameter 'renderTaskId' when calling renderTask");
      }


      var pathParams = {
        'render_task_id': renderTaskId
      };
      var queryParams = {
        'fields': opts['fields'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = RenderTask;

      return this.apiClient.callApi(
        '/render_tasks/{render_task_id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the renderTaskResults operation.
     * @callback module:api/RenderTaskApi~renderTaskResultsCallback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Render Task Results
     * ### Get the document or image produced by a completed render task.  Note that the PDF or image result will be a binary blob in the HTTP response, as indicated by the Content-Type in the response headers. This may require specialized (or at least different) handling than text responses such as JSON. You may need to tell your HTTP client that the response is binary so that it does not attempt to parse the binary data as text.  If the render task exists but has not finished rendering the results, the response HTTP status will be **202 Accepted**, the response body will be empty, and the response will have a Retry-After header indicating that the caller should repeat the request at a later time.  Returns 404 if the render task cannot be found, if the cached result has expired, or if the caller does not have permission to view the results.  For detailed information about the status of the render task, use [Render Task](#!/RenderTask/render_task). Polling loops waiting for completion of a render task would be better served by polling **render_task(id)** until the task status reaches completion (or error) instead of polling **render_task_results(id)** alone. 
     * @param {String} renderTaskId Id of render task
     * @param {module:api/RenderTaskApi~renderTaskResultsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'String'}
     */
    this.renderTaskResults = function(renderTaskId, callback) {
      var postBody = null;

      // verify the required parameter 'renderTaskId' is set
      if (renderTaskId === undefined || renderTaskId === null) {
        throw new Error("Missing the required parameter 'renderTaskId' when calling renderTaskResults");
      }


      var pathParams = {
        'render_task_id': renderTaskId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['image/jpeg', 'image/png', 'application/pdf'];
      var returnType = 'String';

      return this.apiClient.callApi(
        '/render_tasks/{render_task_id}/results', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));