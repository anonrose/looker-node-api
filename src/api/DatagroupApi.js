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
    define(['ApiClient', 'model/Datagroup', 'model/Error', 'model/ValidationError'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Datagroup'), require('../model/Error'), require('../model/ValidationError'));
  } else {
    // Browser globals (root is window)
    if (!root.LookerApi31Reference) {
      root.LookerApi31Reference = {};
    }
    root.LookerApi31Reference.DatagroupApi = factory(root.LookerApi31Reference.ApiClient, root.LookerApi31Reference.Datagroup, root.LookerApi31Reference.Error, root.LookerApi31Reference.ValidationError);
  }
}(this, function(ApiClient, Datagroup, Error, ValidationError) {
  'use strict';

  /**
   * Datagroup service.
   * @module api/DatagroupApi
   * @version 3.1.0
   */

  /**
   * Constructs a new DatagroupApi. 
   * @alias module:api/DatagroupApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the allDatagroups operation.
     * @callback module:api/DatagroupApi~allDatagroupsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Datagroup>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get All Datagroups
     * ### Get information about all datagroups. 
     * @param {module:api/DatagroupApi~allDatagroupsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Datagroup>}
     */
    this.allDatagroups = function(callback) {
      var postBody = null;


      var pathParams = {
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
      var accepts = ['application/json'];
      var returnType = [Datagroup];

      return this.apiClient.callApi(
        '/datagroups', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the datagroup operation.
     * @callback module:api/DatagroupApi~datagroupCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Datagroup} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Datagroup
     * ### Get information about a datagroup. 
     * @param {String} datagroupId ID of datagroup.
     * @param {module:api/DatagroupApi~datagroupCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Datagroup}
     */
    this.datagroup = function(datagroupId, callback) {
      var postBody = null;

      // verify the required parameter 'datagroupId' is set
      if (datagroupId === undefined || datagroupId === null) {
        throw new Error("Missing the required parameter 'datagroupId' when calling datagroup");
      }


      var pathParams = {
        'datagroup_id': datagroupId
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
      var accepts = ['application/json'];
      var returnType = Datagroup;

      return this.apiClient.callApi(
        '/datagroups/{datagroup_id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateDatagroup operation.
     * @callback module:api/DatagroupApi~updateDatagroupCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Datagroup} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update Datagroup
     * ### Update a datagroup using the specified params. 
     * @param {String} datagroupId ID of datagroup.
     * @param {module:model/Datagroup} body Datagroup
     * @param {module:api/DatagroupApi~updateDatagroupCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Datagroup}
     */
    this.updateDatagroup = function(datagroupId, body, callback) {
      var postBody = body;

      // verify the required parameter 'datagroupId' is set
      if (datagroupId === undefined || datagroupId === null) {
        throw new Error("Missing the required parameter 'datagroupId' when calling updateDatagroup");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateDatagroup");
      }


      var pathParams = {
        'datagroup_id': datagroupId
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
      var accepts = ['application/json'];
      var returnType = Datagroup;

      return this.apiClient.callApi(
        '/datagroups/{datagroup_id}', 'PATCH',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));