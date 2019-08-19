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
    define(['ApiClient', 'model/ContentFavorite', 'model/ContentMeta', 'model/ContentMetaGroupUser', 'model/ContentValidation', 'model/ContentView', 'model/Error', 'model/ValidationError'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ContentFavorite'), require('../model/ContentMeta'), require('../model/ContentMetaGroupUser'), require('../model/ContentValidation'), require('../model/ContentView'), require('../model/Error'), require('../model/ValidationError'));
  } else {
    // Browser globals (root is window)
    if (!root.LookerApi31Reference) {
      root.LookerApi31Reference = {};
    }
    root.LookerApi31Reference.ContentApi = factory(root.LookerApi31Reference.ApiClient, root.LookerApi31Reference.ContentFavorite, root.LookerApi31Reference.ContentMeta, root.LookerApi31Reference.ContentMetaGroupUser, root.LookerApi31Reference.ContentValidation, root.LookerApi31Reference.ContentView, root.LookerApi31Reference.Error, root.LookerApi31Reference.ValidationError);
  }
}(this, function(ApiClient, ContentFavorite, ContentMeta, ContentMetaGroupUser, ContentValidation, ContentView, Error, ValidationError) {
  'use strict';

  /**
   * Content service.
   * @module api/ContentApi
   * @version 3.1.0
   */

  /**
   * Constructs a new ContentApi.
   * @alias module:api/ContentApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the allContentMetadataAccesses operation.
     * @callback module:api/ContentApi~allContentMetadataAccessesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ContentMetaGroupUser>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get All Content Metadata Accesses
     * ### All content metadata access records for a content metadata item.
     * @param {Number} contentMetadataId Id of content metadata
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields Requested fields.
     * @param {module:api/ContentApi~allContentMetadataAccessesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ContentMetaGroupUser>}
     */
    this.allContentMetadataAccesses = function(contentMetadataId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'contentMetadataId' is set
      if (contentMetadataId === undefined || contentMetadataId === null) {
        throw new Error("Missing the required parameter 'contentMetadataId' when calling allContentMetadataAccesses");
      }


      var pathParams = {
      };
      var queryParams = {
        'content_metadata_id': contentMetadataId,
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
      var returnType = [ContentMetaGroupUser];

      return this.apiClient.callApi(
        '/content_metadata_access', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the allContentMetadatas operation.
     * @callback module:api/ContentApi~allContentMetadatasCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ContentMeta>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get All Content Metadatas
     * ### Get information about all content metadata in a space.
     * @param {Number} parentId Parent space of content.
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields Requested fields.
     * @param {module:api/ContentApi~allContentMetadatasCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ContentMeta>}
     */
    this.allContentMetadatas = function(parentId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'parentId' is set
      if (parentId === undefined || parentId === null) {
        throw new Error("Missing the required parameter 'parentId' when calling allContentMetadatas");
      }


      var pathParams = {
      };
      var queryParams = {
        'parent_id': parentId,
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
      var returnType = [ContentMeta];

      return this.apiClient.callApi(
        '/content_metadata', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the contentFavorite operation.
     * @callback module:api/ContentApi~contentFavoriteCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ContentFavorite} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Favorite Content
     * ### Get favorite content by its id
     * @param {Number} contentFavoriteId Id of favorite content
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields Requested fields.
     * @param {module:api/ContentApi~contentFavoriteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ContentFavorite}
     */
    this.contentFavorite = function(contentFavoriteId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'contentFavoriteId' is set
      if (contentFavoriteId === undefined || contentFavoriteId === null) {
        throw new Error("Missing the required parameter 'contentFavoriteId' when calling contentFavorite");
      }


      var pathParams = {
        'content_favorite_id': contentFavoriteId
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
      var returnType = ContentFavorite;

      return this.apiClient.callApi(
        '/content_favorite/{content_favorite_id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the contentMetadata operation.
     * @callback module:api/ContentApi~contentMetadataCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ContentMeta} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Content Metadata
     * ### Get information about an individual content metadata record.
     * @param {Number} contentMetadataId Id of content metadata
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields Requested fields.
     * @param {module:api/ContentApi~contentMetadataCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ContentMeta}
     */
    this.contentMetadata = function(contentMetadataId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'contentMetadataId' is set
      if (contentMetadataId === undefined || contentMetadataId === null) {
        throw new Error("Missing the required parameter 'contentMetadataId' when calling contentMetadata");
      }


      var pathParams = {
        'content_metadata_id': contentMetadataId
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
      var returnType = ContentMeta;

      return this.apiClient.callApi(
        '/content_metadata/{content_metadata_id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the contentValidation operation.
     * @callback module:api/ContentApi~contentValidationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ContentValidation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Validate Content
     * ### Validate All Content Requires Content Validation Labs Feature be enabled  Performs validation of all looks and dashboards Returns a list of errors found as well as metadata about the content validation run.
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields Requested fields.
     * @param {module:api/ContentApi~contentValidationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ContentValidation}
     */
    this.contentValidation = function(opts, callback) {
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
      var returnType = ContentValidation;

      return this.apiClient.callApi(
        '/content_validation', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the createContentFavorite operation.
     * @callback module:api/ContentApi~createContentFavoriteCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ContentFavorite} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create Favorite Content
     * ### Create favorite content
     * @param {Object} opts Optional parameters
     * @param {module:model/ContentFavorite} opts.body Favorite Content
     * @param {module:api/ContentApi~createContentFavoriteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ContentFavorite}
     */
    this.createContentFavorite = function(opts, callback) {
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

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ContentFavorite;

      return this.apiClient.callApi(
        '/content_favorite', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the createContentMetadataAccess operation.
     * @callback module:api/ContentApi~createContentMetadataAccessCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ContentMetaGroupUser} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create Content Metadata Access
     * ### Create content metadata access.
     * @param {Object} opts Optional parameters
     * @param {module:model/ContentMetaGroupUser} opts.body Content Metadata Access
     * @param {module:api/ContentApi~createContentMetadataAccessCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ContentMetaGroupUser}
     */
    this.createContentMetadataAccess = function(opts, callback) {
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

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ContentMetaGroupUser;

      return this.apiClient.callApi(
        '/content_metadata_access', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteContentFavorite operation.
     * @callback module:api/ContentApi~deleteContentFavoriteCallback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete Favorite Content
     * ### Delete favorite content
     * @param {Number} contentFavoriteId Id of favorite content
     * @param {module:api/ContentApi~deleteContentFavoriteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'String'}
     */
    this.deleteContentFavorite = function(contentFavoriteId, callback) {
      var postBody = null;

      // verify the required parameter 'contentFavoriteId' is set
      if (contentFavoriteId === undefined || contentFavoriteId === null) {
        throw new Error("Missing the required parameter 'contentFavoriteId' when calling deleteContentFavorite");
      }


      var pathParams = {
        'content_favorite_id': contentFavoriteId
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
        '/content_favorite/{content_favorite_id}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteContentMetadataAccess operation.
     * @callback module:api/ContentApi~deleteContentMetadataAccessCallback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete Content Metadata Access
     * ### Remove content metadata access.
     * @param {Number} contentMetadataAccessId Id of content metadata access
     * @param {module:api/ContentApi~deleteContentMetadataAccessCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'String'}
     */
    this.deleteContentMetadataAccess = function(contentMetadataAccessId, callback) {
      var postBody = null;

      // verify the required parameter 'contentMetadataAccessId' is set
      if (contentMetadataAccessId === undefined || contentMetadataAccessId === null) {
        throw new Error("Missing the required parameter 'contentMetadataAccessId' when calling deleteContentMetadataAccess");
      }


      var pathParams = {
        'content_metadata_access_id': contentMetadataAccessId
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
        '/content_metadata_access/{content_metadata_access_id}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the searchContentFavorites operation.
     * @callback module:api/ContentApi~searchContentFavoritesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ContentFavorite>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search Favorite Contents
     * ### Search Favorite Content  If multiple search params are given and &#x60;filter_or&#x60; is FALSE or not specified, search params are combined in a logical AND operation. Only rows that match *all* search param criteria will be returned.  If &#x60;filter_or&#x60; is TRUE, multiple search params are combined in a logical OR operation. Results will include rows that match **any** of the search criteria.  String search params use case-insensitive matching. String search params can contain &#x60;%&#x60; and &#39;_&#39; as SQL LIKE pattern match wildcard expressions. example&#x3D;\&quot;dan%\&quot; will match \&quot;danger\&quot; and \&quot;Danzig\&quot; but not \&quot;David\&quot; example&#x3D;\&quot;D_m%\&quot; will match \&quot;Damage\&quot; and \&quot;dump\&quot;  Integer search params can accept a single value or a comma separated list of values. The multiple values will be combined under a logical OR operation - results will match at least one of the given values.  Most search params can accept \&quot;IS NULL\&quot; and \&quot;NOT NULL\&quot; as special expressions to match or exclude (respectively) rows where the column is null.  Boolean search params accept only \&quot;true\&quot; and \&quot;false\&quot; as values.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.id Match content favorite id(s)
     * @param {Number} opts.userId Match user id(s)
     * @param {Number} opts.contentMetadataId Match content metadata id(s)
     * @param {Number} opts.dashboardId Match dashboard id(s)
     * @param {Number} opts.lookId Match look id(s)
     * @param {Number} opts.limit Number of results to return. (used with offset)
     * @param {Number} opts.offset Number of results to skip before returning any. (used with limit)
     * @param {String} opts.sorts Fields to sort by.
     * @param {String} opts.fields Requested fields.
     * @param {Boolean} opts.filterOr Combine given search criteria in a boolean OR expression
     * @param {module:api/ContentApi~searchContentFavoritesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ContentFavorite>}
     */
    this.searchContentFavorites = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'id': opts['id'],
        'user_id': opts['userId'],
        'content_metadata_id': opts['contentMetadataId'],
        'dashboard_id': opts['dashboardId'],
        'look_id': opts['lookId'],
        'limit': opts['limit'],
        'offset': opts['offset'],
        'sorts': opts['sorts'],
        'fields': opts['fields'],
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
      var returnType = [ContentFavorite];

      return this.apiClient.callApi(
        '/content_favorite/search', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the searchContentViews operation.
     * @callback module:api/ContentApi~searchContentViewsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ContentView>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search Content Views
     * ### Search Content Views  If multiple search params are given and &#x60;filter_or&#x60; is FALSE or not specified, search params are combined in a logical AND operation. Only rows that match *all* search param criteria will be returned.  If &#x60;filter_or&#x60; is TRUE, multiple search params are combined in a logical OR operation. Results will include rows that match **any** of the search criteria.  String search params use case-insensitive matching. String search params can contain &#x60;%&#x60; and &#39;_&#39; as SQL LIKE pattern match wildcard expressions. example&#x3D;\&quot;dan%\&quot; will match \&quot;danger\&quot; and \&quot;Danzig\&quot; but not \&quot;David\&quot; example&#x3D;\&quot;D_m%\&quot; will match \&quot;Damage\&quot; and \&quot;dump\&quot;  Integer search params can accept a single value or a comma separated list of values. The multiple values will be combined under a logical OR operation - results will match at least one of the given values.  Most search params can accept \&quot;IS NULL\&quot; and \&quot;NOT NULL\&quot; as special expressions to match or exclude (respectively) rows where the column is null.  Boolean search params accept only \&quot;true\&quot; and \&quot;false\&quot; as values.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.viewCount Match view count
     * @param {Number} opts.groupId Match Group Id
     * @param {String} opts.lookId Match look_id
     * @param {String} opts.dashboardId Match dashboard_id
     * @param {Number} opts.contentMetadataId Match content metadata id
     * @param {String} opts.startOfWeekDate Match start of week date
     * @param {Boolean} opts.allTime True if only all time view records should be returned
     * @param {Number} opts.userId Match user id
     * @param {String} opts.fields Requested fields
     * @param {Number} opts.limit Number of results to return. Use with &#x60;offset&#x60; to manage pagination of results
     * @param {Number} opts.offset Number of results to skip before returning data
     * @param {String} opts.sorts Fields to sort by
     * @param {Boolean} opts.filterOr Combine given search criteria in a boolean OR expression
     * @param {module:api/ContentApi~searchContentViewsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ContentView>}
     */
    this.searchContentViews = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'view_count': opts['viewCount'],
        'group_id': opts['groupId'],
        'look_id': opts['lookId'],
        'dashboard_id': opts['dashboardId'],
        'content_metadata_id': opts['contentMetadataId'],
        'start_of_week_date': opts['startOfWeekDate'],
        'all_time': opts['allTime'],
        'user_id': opts['userId'],
        'fields': opts['fields'],
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
      var returnType = [ContentView];

      return this.apiClient.callApi(
        '/content_view/search', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateContentMetadata operation.
     * @callback module:api/ContentApi~updateContentMetadataCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ContentMeta} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update Content Metadata
     * ### Move a piece of content.
     * @param {Number} contentMetadataId Id of content metadata
     * @param {module:model/ContentMeta} body Content Metadata
     * @param {module:api/ContentApi~updateContentMetadataCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ContentMeta}
     */
    this.updateContentMetadata = function(contentMetadataId, body, callback) {
      var postBody = body;

      // verify the required parameter 'contentMetadataId' is set
      if (contentMetadataId === undefined || contentMetadataId === null) {
        throw new Error("Missing the required parameter 'contentMetadataId' when calling updateContentMetadata");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateContentMetadata");
      }


      var pathParams = {
        'content_metadata_id': contentMetadataId
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
      var returnType = ContentMeta;

      return this.apiClient.callApi(
        '/content_metadata/{content_metadata_id}', 'PATCH',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateContentMetadataAccess operation.
     * @callback module:api/ContentApi~updateContentMetadataAccessCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ContentMetaGroupUser} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update Content Metadata Access
     * ### Update type of access for content metadata.
     * @param {Number} contentMetadataAccessId Id of content metadata access
     * @param {module:model/ContentMetaGroupUser} body Content Metadata Access
     * @param {module:api/ContentApi~updateContentMetadataAccessCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ContentMetaGroupUser}
     */
    this.updateContentMetadataAccess = function(contentMetadataAccessId, body, callback) {
      var postBody = body;

      // verify the required parameter 'contentMetadataAccessId' is set
      if (contentMetadataAccessId === undefined || contentMetadataAccessId === null) {
        throw new Error("Missing the required parameter 'contentMetadataAccessId' when calling updateContentMetadataAccess");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateContentMetadataAccess");
      }


      var pathParams = {
        'content_metadata_access_id': contentMetadataAccessId
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
      var returnType = ContentMetaGroupUser;

      return this.apiClient.callApi(
        '/content_metadata_access/{content_metadata_access_id}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
