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
    define(['ApiClient', 'model/ApiVersion', 'model/BackupConfiguration', 'model/Error', 'model/LegacyFeature', 'model/Locale', 'model/Timezone', 'model/ValidationError', 'model/WhitelabelConfiguration'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ApiVersion'), require('../model/BackupConfiguration'), require('../model/Error'), require('../model/LegacyFeature'), require('../model/Locale'), require('../model/Timezone'), require('../model/ValidationError'), require('../model/WhitelabelConfiguration'));
  } else {
    // Browser globals (root is window)
    if (!root.LookerApi31Reference) {
      root.LookerApi31Reference = {};
    }
    root.LookerApi31Reference.ConfigApi = factory(root.LookerApi31Reference.ApiClient, root.LookerApi31Reference.ApiVersion, root.LookerApi31Reference.BackupConfiguration, root.LookerApi31Reference.Error, root.LookerApi31Reference.LegacyFeature, root.LookerApi31Reference.Locale, root.LookerApi31Reference.Timezone, root.LookerApi31Reference.ValidationError, root.LookerApi31Reference.WhitelabelConfiguration);
  }
}(this, function(ApiClient, ApiVersion, BackupConfiguration, Error, LegacyFeature, Locale, Timezone, ValidationError, WhitelabelConfiguration) {
  'use strict';

  /**
   * Config service.
   * @module api/ConfigApi
   * @version 3.1.0
   */

  /**
   * Constructs a new ConfigApi. 
   * @alias module:api/ConfigApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the allLegacyFeatures operation.
     * @callback module:api/ConfigApi~allLegacyFeaturesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/LegacyFeature>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get All Legacy Features
     * ### Get all legacy features. 
     * @param {module:api/ConfigApi~allLegacyFeaturesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/LegacyFeature>}
     */
    this.allLegacyFeatures = function(callback) {
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
      var returnType = [LegacyFeature];

      return this.apiClient.callApi(
        '/legacy_features', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the allLocales operation.
     * @callback module:api/ConfigApi~allLocalesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Locale>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get All Locales
     * ### Get a list of locales that Looker supports. 
     * @param {module:api/ConfigApi~allLocalesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Locale>}
     */
    this.allLocales = function(callback) {
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
      var returnType = [Locale];

      return this.apiClient.callApi(
        '/locales', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the allTimezones operation.
     * @callback module:api/ConfigApi~allTimezonesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Timezone>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get All Timezones
     * ### Get a list of timezones that Looker supports (e.g. useful for scheduling tasks). 
     * @param {module:api/ConfigApi~allTimezonesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Timezone>}
     */
    this.allTimezones = function(callback) {
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
      var returnType = [Timezone];

      return this.apiClient.callApi(
        '/timezones', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the backupConfiguration operation.
     * @callback module:api/ConfigApi~backupConfigurationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BackupConfiguration} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Backup Configuration
     * ### Get the current Looker internal database backup configuration. 
     * @param {module:api/ConfigApi~backupConfigurationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BackupConfiguration}
     */
    this.backupConfiguration = function(callback) {
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
      var returnType = BackupConfiguration;

      return this.apiClient.callApi(
        '/backup_configuration', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the legacyFeature operation.
     * @callback module:api/ConfigApi~legacyFeatureCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LegacyFeature} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Legacy Feature
     * ### Get information about the legacy feature with a specific id. 
     * @param {Number} legacyFeatureId id of legacy feature
     * @param {module:api/ConfigApi~legacyFeatureCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/LegacyFeature}
     */
    this.legacyFeature = function(legacyFeatureId, callback) {
      var postBody = null;

      // verify the required parameter 'legacyFeatureId' is set
      if (legacyFeatureId === undefined || legacyFeatureId === null) {
        throw new Error("Missing the required parameter 'legacyFeatureId' when calling legacyFeature");
      }


      var pathParams = {
        'legacy_feature_id': legacyFeatureId
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
      var returnType = LegacyFeature;

      return this.apiClient.callApi(
        '/legacy_features/{legacy_feature_id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateBackupConfiguration operation.
     * @callback module:api/ConfigApi~updateBackupConfigurationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BackupConfiguration} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update Backup Configuration
     * ### Update the Looker internal database backup configuration. 
     * @param {module:model/BackupConfiguration} body Options for Backup Configuration
     * @param {module:api/ConfigApi~updateBackupConfigurationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BackupConfiguration}
     */
    this.updateBackupConfiguration = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateBackupConfiguration");
      }


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
      var returnType = BackupConfiguration;

      return this.apiClient.callApi(
        '/backup_configuration', 'PATCH',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateLegacyFeature operation.
     * @callback module:api/ConfigApi~updateLegacyFeatureCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LegacyFeature} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update Legacy Feature
     * ### Update information about the legacy feature with a specific id. 
     * @param {Number} legacyFeatureId id of legacy feature
     * @param {module:model/LegacyFeature} body Legacy Feature
     * @param {module:api/ConfigApi~updateLegacyFeatureCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/LegacyFeature}
     */
    this.updateLegacyFeature = function(legacyFeatureId, body, callback) {
      var postBody = body;

      // verify the required parameter 'legacyFeatureId' is set
      if (legacyFeatureId === undefined || legacyFeatureId === null) {
        throw new Error("Missing the required parameter 'legacyFeatureId' when calling updateLegacyFeature");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateLegacyFeature");
      }


      var pathParams = {
        'legacy_feature_id': legacyFeatureId
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
      var returnType = LegacyFeature;

      return this.apiClient.callApi(
        '/legacy_features/{legacy_feature_id}', 'PATCH',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateWhitelabelConfiguration operation.
     * @callback module:api/ConfigApi~updateWhitelabelConfigurationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/WhitelabelConfiguration} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update Whitelabel configuration
     * ### Update the whitelabel configuration 
     * @param {module:model/WhitelabelConfiguration} body Whitelabel configuration
     * @param {module:api/ConfigApi~updateWhitelabelConfigurationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/WhitelabelConfiguration}
     */
    this.updateWhitelabelConfiguration = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateWhitelabelConfiguration");
      }


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
      var returnType = WhitelabelConfiguration;

      return this.apiClient.callApi(
        '/whitelabel_configuration', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the versions operation.
     * @callback module:api/ConfigApi~versionsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiVersion} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get ApiVersion
     * ### Get information about all API versions supported by this Looker instance. 
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields Requested fields.
     * @param {module:api/ConfigApi~versionsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiVersion}
     */
    this.versions = function(opts, callback) {
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
      var returnType = ApiVersion;

      return this.apiClient.callApi(
        '/versions', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the whitelabelConfiguration operation.
     * @callback module:api/ConfigApi~whitelabelConfigurationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/WhitelabelConfiguration} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Whitelabel configuration
     * ### This feature is enabled only by special license. ### Gets the whitelabel configuration, which includes hiding documentation links, custom favicon uploading, etc. 
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields Requested fields.
     * @param {module:api/ConfigApi~whitelabelConfigurationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/WhitelabelConfiguration}
     */
    this.whitelabelConfiguration = function(opts, callback) {
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
      var returnType = WhitelabelConfiguration;

      return this.apiClient.callApi(
        '/whitelabel_configuration', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));