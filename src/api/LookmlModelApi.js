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
    define(['ApiClient', 'model/Error', 'model/LookmlModel', 'model/LookmlModelExplore', 'model/ValidationError'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Error'), require('../model/LookmlModel'), require('../model/LookmlModelExplore'), require('../model/ValidationError'));
  } else {
    // Browser globals (root is window)
    if (!root.LookerApi31Reference) {
      root.LookerApi31Reference = {};
    }
    root.LookerApi31Reference.LookmlModelApi = factory(root.LookerApi31Reference.ApiClient, root.LookerApi31Reference.Error, root.LookerApi31Reference.LookmlModel, root.LookerApi31Reference.LookmlModelExplore, root.LookerApi31Reference.ValidationError);
  }
}(this, function(ApiClient, Error, LookmlModel, LookmlModelExplore, ValidationError) {
  'use strict';

  /**
   * LookmlModel service.
   * @module api/LookmlModelApi
   * @version 3.1.0
   */

  /**
   * Constructs a new LookmlModelApi.
   * @alias module:api/LookmlModelApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the allLookmlModels operation.
     * @callback module:api/LookmlModelApi~allLookmlModelsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/LookmlModel>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get All LookML Models
     * ### Get information about all lookml models.
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields Requested fields.
     * @param {module:api/LookmlModelApi~allLookmlModelsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/LookmlModel>}
     */
    this.allLookmlModels = function(opts, callback) {
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

      var authNames = ['oauth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [LookmlModel];

      return this.apiClient.callApi(
        '/lookml_models', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the createLookmlModel operation.
     * @callback module:api/LookmlModelApi~createLookmlModelCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LookmlModel} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create LookML Model
     * ### Create a lookml model using the specified configuration.
     * @param {Object} opts Optional parameters
     * @param {module:model/LookmlModel} opts.body LookML Model
     * @param {module:api/LookmlModelApi~createLookmlModelCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/LookmlModel}
     */
    this.createLookmlModel = function(opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];


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

      var authNames = ['oauth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = LookmlModel;

      return this.apiClient.callApi(
        '/lookml_models', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteLookmlModel operation.
     * @callback module:api/LookmlModelApi~deleteLookmlModelCallback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete LookML Model
     * ### Delete a lookml model.
     * @param {String} lookmlModelName Name of lookml model.
     * @param {module:api/LookmlModelApi~deleteLookmlModelCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'String'}
     */
    this.deleteLookmlModel = function(lookmlModelName, callback) {
      var postBody = null;

      // verify the required parameter 'lookmlModelName' is set
      if (lookmlModelName === undefined || lookmlModelName === null) {
        throw new Error("Missing the required parameter 'lookmlModelName' when calling deleteLookmlModel");
      }


      var pathParams = {
        'lookml_model_name': lookmlModelName
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = 'String';

      return this.apiClient.callApi(
        '/lookml_models/{lookml_model_name}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the lookmlModel operation.
     * @callback module:api/LookmlModelApi~lookmlModelCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LookmlModel} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get LookML Model
     * ### Get information about a lookml model.
     * @param {String} lookmlModelName Name of lookml model.
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields Requested fields.
     * @param {module:api/LookmlModelApi~lookmlModelCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/LookmlModel}
     */
    this.lookmlModel = function(lookmlModelName, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'lookmlModelName' is set
      if (lookmlModelName === undefined || lookmlModelName === null) {
        throw new Error("Missing the required parameter 'lookmlModelName' when calling lookmlModel");
      }


      var pathParams = {
        'lookml_model_name': lookmlModelName
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

      var authNames = ['oauth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = LookmlModel;

      return this.apiClient.callApi(
        '/lookml_models/{lookml_model_name}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the lookmlModelExplore operation.
     * @callback module:api/LookmlModelApi~lookmlModelExploreCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LookmlModelExplore} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get LookML Model Explore
     * ### Get information about a lookml model explore.
     * @param {String} lookmlModelName Name of lookml model.
     * @param {String} exploreName Name of explore.
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields Requested fields.
     * @param {module:api/LookmlModelApi~lookmlModelExploreCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/LookmlModelExplore}
     */
    this.lookmlModelExplore = function(lookmlModelName, exploreName, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'lookmlModelName' is set
      if (lookmlModelName === undefined || lookmlModelName === null) {
        throw new Error("Missing the required parameter 'lookmlModelName' when calling lookmlModelExplore");
      }

      // verify the required parameter 'exploreName' is set
      if (exploreName === undefined || exploreName === null) {
        throw new Error("Missing the required parameter 'exploreName' when calling lookmlModelExplore");
      }


      var pathParams = {
        'lookml_model_name': lookmlModelName,
        'explore_name': exploreName
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

      var authNames = ['oauth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = LookmlModelExplore;

      return this.apiClient.callApi(
        '/lookml_models/{lookml_model_name}/explores/{explore_name}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateLookmlModel operation.
     * @callback module:api/LookmlModelApi~updateLookmlModelCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LookmlModel} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update LookML Model
     * ### Update a lookml model using the specified configuration.
     * @param {String} lookmlModelName Name of lookml model.
     * @param {module:model/LookmlModel} body LookML Model
     * @param {module:api/LookmlModelApi~updateLookmlModelCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/LookmlModel}
     */
    this.updateLookmlModel = function(lookmlModelName, body, callback) {
      var postBody = body;

      // verify the required parameter 'lookmlModelName' is set
      if (lookmlModelName === undefined || lookmlModelName === null) {
        throw new Error("Missing the required parameter 'lookmlModelName' when calling updateLookmlModel");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateLookmlModel");
      }


      var pathParams = {
        'lookml_model_name': lookmlModelName
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = LookmlModel;

      return this.apiClient.callApi(
        '/lookml_models/{lookml_model_name}', 'PATCH',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
