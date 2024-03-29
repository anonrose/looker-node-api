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
    define(['ApiClient', 'model/Error', 'model/Look', 'model/LookWithQuery', 'model/ValidationError'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Error'), require('../model/Look'), require('../model/LookWithQuery'), require('../model/ValidationError'));
  } else {
    // Browser globals (root is window)
    if (!root.LookerApi31Reference) {
      root.LookerApi31Reference = {};
    }
    root.LookerApi31Reference.LookApi = factory(root.LookerApi31Reference.ApiClient, root.LookerApi31Reference.Error, root.LookerApi31Reference.Look, root.LookerApi31Reference.LookWithQuery, root.LookerApi31Reference.ValidationError);
  }
}(this, function(ApiClient, Error, Look, LookWithQuery, ValidationError) {
  'use strict';

  /**
   * Look service.
   * @module api/LookApi
   * @version 3.1.0
   */

  /**
   * Constructs a new LookApi.
   * @alias module:api/LookApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the allLooks operation.
     * @callback module:api/LookApi~allLooksCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Look>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get All Looks
     * ### Get information about all active Looks  Returns an array of **abbreviated Look objects** describing all the looks that the caller has access to. Soft-deleted Looks are **not** included.  Get the **full details** of a specific look by id with [Look](#!/Look/look)  Find **soft-deleted looks** with [Search Looks](#!/Looks/search_looks)
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields Requested fields.
     * @param {module:api/LookApi~allLooksCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Look>}
     */
    this.allLooks = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
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
      var returnType = [Look];

      return this.apiClient.callApi(
        '/looks', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the createLook operation.
     * @callback module:api/LookApi~createLookCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LookWithQuery} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create Look
     * ### Create a Look with specified information.
     * @param {Object} opts Optional parameters
     * @param {module:model/LookWithQuery} opts.body Look
     * @param {String} opts.fields Requested fields.
     * @param {module:api/LookApi~createLookCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/LookWithQuery}
     */
    this.createLook = function(opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];


      var pathParams = {
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
      var returnType = LookWithQuery;

      return this.apiClient.callApi(
        '/looks', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteLook operation.
     * @callback module:api/LookApi~deleteLookCallback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete Look
     * ### Delete the look with a specific id.
     * @param {Number} lookId Id of look
     * @param {module:api/LookApi~deleteLookCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'String'}
     */
    this.deleteLook = function(lookId, callback) {
      var postBody = null;

      // verify the required parameter 'lookId' is set
      if (lookId === undefined || lookId === null) {
        throw new Error("Missing the required parameter 'lookId' when calling deleteLook");
      }


      var pathParams = {
        'look_id': lookId
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
      var returnType = 'String';

      return this.apiClient.callApi(
        '/looks/{look_id}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the look operation.
     * @callback module:api/LookApi~lookCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LookWithQuery} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Look
     * ### Get a Look.  Returns detailed information about a Look and its associated Query.
     * @param {Number} lookId Id of look
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields Requested fields.
     * @param {module:api/LookApi~lookCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/LookWithQuery}
     */
    this.look = function(lookId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'lookId' is set
      if (lookId === undefined || lookId === null) {
        throw new Error("Missing the required parameter 'lookId' when calling look");
      }


      var pathParams = {
        'look_id': lookId
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
      var returnType = LookWithQuery;

      return this.apiClient.callApi(
        '/looks/{look_id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the runLook operation.
     * @callback module:api/LookApi~runLookCallback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Run Look
     * ### Run a Look.  Runs a given look&#39;s query and returns the results in the requested format.  Supported formats:  | result_format | Description | :-----------: | :--- | | json | Plain json | json_detail | Row data plus metadata describing the fields, pivots, table calcs, and other aspects of the query | csv | Comma separated values with a header | txt | Tab separated values with a header | html | Simple html | md | Simple markdown | xlsx | MS Excel spreadsheet | sql | Returns the generated SQL rather than running the query | png | A PNG image of the visualization of the query | jpg | A JPG image of the visualization of the query
     * @param {Number} lookId Id of look
     * @param {String} resultFormat Format of result
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Row limit (may override the limit in the saved query).
     * @param {Boolean} opts.applyFormatting Apply model-specified formatting to each result.
     * @param {Boolean} opts.applyVis Apply visualization options to results.
     * @param {Boolean} opts.cache Get results from cache if available.
     * @param {Number} opts.imageWidth Render width for image formats.
     * @param {Number} opts.imageHeight Render height for image formats.
     * @param {Boolean} opts.generateDrillLinks Generate drill links (only applicable to &#39;json_detail&#39; format.
     * @param {Boolean} opts.forceProduction Force use of production models even if the user is in development mode.
     * @param {Boolean} opts.cacheOnly Retrieve any results from cache even if the results have expired.
     * @param {String} opts.pathPrefix Prefix to use for drill links (url encoded).
     * @param {Boolean} opts.rebuildPdts Rebuild PDTS used in query.
     * @param {Boolean} opts.serverTableCalcs Perform table calculations on query results
     * @param {module:api/LookApi~runLookCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'String'}
     */
    this.runLook = function(lookId, resultFormat, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'lookId' is set
      if (lookId === undefined || lookId === null) {
        throw new Error("Missing the required parameter 'lookId' when calling runLook");
      }

      // verify the required parameter 'resultFormat' is set
      if (resultFormat === undefined || resultFormat === null) {
        throw new Error("Missing the required parameter 'resultFormat' when calling runLook");
      }


      var pathParams = {
        'look_id': lookId,
        'result_format': resultFormat
      };
      var queryParams = {
        'limit': opts['limit'],
        'apply_formatting': opts['applyFormatting'],
        'apply_vis': opts['applyVis'],
        'cache': opts['cache'],
        'image_width': opts['imageWidth'],
        'image_height': opts['imageHeight'],
        'generate_drill_links': opts['generateDrillLinks'],
        'force_production': opts['forceProduction'],
        'cache_only': opts['cacheOnly'],
        'path_prefix': opts['pathPrefix'],
        'rebuild_pdts': opts['rebuildPdts'],
        'server_table_calcs': opts['serverTableCalcs'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['text', 'application/json', 'image/png', 'image/jpg'];
      var returnType = 'String';

      return this.apiClient.callApi(
        '/looks/{look_id}/run/{result_format}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the searchLooks operation.
     * @callback module:api/LookApi~searchLooksCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Look>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search Looks
     * ### Search Looks  Returns an **array of Look objects** that match the specified search criteria.  If multiple search params are given and &#x60;filter_or&#x60; is FALSE or not specified, search params are combined in a logical AND operation. Only rows that match *all* search param criteria will be returned.  If &#x60;filter_or&#x60; is TRUE, multiple search params are combined in a logical OR operation. Results will include rows that match **any** of the search criteria.  String search params use case-insensitive matching. String search params can contain &#x60;%&#x60; and &#39;_&#39; as SQL LIKE pattern match wildcard expressions. example&#x3D;\&quot;dan%\&quot; will match \&quot;danger\&quot; and \&quot;Danzig\&quot; but not \&quot;David\&quot; example&#x3D;\&quot;D_m%\&quot; will match \&quot;Damage\&quot; and \&quot;dump\&quot;  Integer search params can accept a single value or a comma separated list of values. The multiple values will be combined under a logical OR operation - results will match at least one of the given values.  Most search params can accept \&quot;IS NULL\&quot; and \&quot;NOT NULL\&quot; as special expressions to match or exclude (respectively) rows where the column is null.  Boolean search params accept only \&quot;true\&quot; and \&quot;false\&quot; as values.   Get a **single look** by id with [Look](#!/Look/look)
     * @param {Object} opts Optional parameters
     * @param {String} opts.title Match Look title.
     * @param {String} opts.description Match Look description.
     * @param {Number} opts.contentFavoriteId Select looks with a particular content favorite id
     * @param {String} opts.spaceId Select looks in a particular space.
     * @param {String} opts.userId Select looks created by a particular user.
     * @param {String} opts.viewCount Select looks with particular view_count value
     * @param {Boolean} opts.deleted Select soft-deleted looks
     * @param {Number} opts.queryId Select looks that reference a particular query by query_id
     * @param {String} opts.fields Requested fields.
     * @param {Number} opts.page Requested page.
     * @param {Number} opts.perPage Results per page.
     * @param {Number} opts.limit Number of results to return. (used with offset and takes priority over page and per_page)
     * @param {Number} opts.offset Number of results to skip before returning any. (used with limit and takes priority over page and per_page)
     * @param {String} opts.sorts One or more fields to sort results by. Sortable fields: [:title, :user_id, :id, :created_at, :space_id, :description, :updated_at, :last_updater_id, :view_count, :favorite_count, :content_favorite_id, :deleted, :deleted_at, :last_viewed_at, :query_id]
     * @param {Boolean} opts.filterOr Combine given search criteria in a boolean OR expression
     * @param {module:api/LookApi~searchLooksCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Look>}
     */
    this.searchLooks = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'title': opts['title'],
        'description': opts['description'],
        'content_favorite_id': opts['contentFavoriteId'],
        'space_id': opts['spaceId'],
        'user_id': opts['userId'],
        'view_count': opts['viewCount'],
        'deleted': opts['deleted'],
        'query_id': opts['queryId'],
        'fields': opts['fields'],
        'page': opts['page'],
        'per_page': opts['perPage'],
        'limit': opts['limit'],
        'offset': opts['offset'],
        'sorts': opts['sorts'],
        'filter_or': opts['filterOr'],
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
      var returnType = [Look];

      return this.apiClient.callApi(
        '/looks/search', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateLook operation.
     * @callback module:api/LookApi~updateLookCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LookWithQuery} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update Look
     * ### Update the Look with a specific id.
     * @param {Number} lookId Id of look
     * @param {module:model/LookWithQuery} body Look
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields Requested fields.
     * @param {module:api/LookApi~updateLookCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/LookWithQuery}
     */
    this.updateLook = function(lookId, body, opts, callback) {
      opts = opts || {};
      var postBody = body;

      // verify the required parameter 'lookId' is set
      if (lookId === undefined || lookId === null) {
        throw new Error("Missing the required parameter 'lookId' when calling updateLook");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateLook");
      }


      var pathParams = {
        'look_id': lookId
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
      var returnType = LookWithQuery;

      return this.apiClient.callApi(
        '/looks/{look_id}', 'PATCH',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
