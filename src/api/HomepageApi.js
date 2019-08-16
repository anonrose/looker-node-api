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
    define(['ApiClient', 'model/Error', 'model/Homepage', 'model/HomepageItem', 'model/HomepageSection', 'model/ValidationError'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Error'), require('../model/Homepage'), require('../model/HomepageItem'), require('../model/HomepageSection'), require('../model/ValidationError'));
  } else {
    // Browser globals (root is window)
    if (!root.LookerApi31Reference) {
      root.LookerApi31Reference = {};
    }
    root.LookerApi31Reference.HomepageApi = factory(root.LookerApi31Reference.ApiClient, root.LookerApi31Reference.Error, root.LookerApi31Reference.Homepage, root.LookerApi31Reference.HomepageItem, root.LookerApi31Reference.HomepageSection, root.LookerApi31Reference.ValidationError);
  }
}(this, function(ApiClient, Error, Homepage, HomepageItem, HomepageSection, ValidationError) {
  'use strict';

  /**
   * Homepage service.
   * @module api/HomepageApi
   * @version 3.1.0
   */

  /**
   * Constructs a new HomepageApi. 
   * @alias module:api/HomepageApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the allHomepageItems operation.
     * @callback module:api/HomepageApi~allHomepageItemsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/HomepageItem>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get All Homepage Items
     * ### Get information about all homepage items. 
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields Requested fields.
     * @param {String} opts.sorts Fields to sort by.
     * @param {String} opts.homepageSectionId Filter to a specific homepage section
     * @param {module:api/HomepageApi~allHomepageItemsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/HomepageItem>}
     */
    this.allHomepageItems = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'fields': opts['fields'],
        'sorts': opts['sorts'],
        'homepage_section_id': opts['homepageSectionId'],
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
      var returnType = [HomepageItem];

      return this.apiClient.callApi(
        '/homepage_items', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the allHomepageSections operation.
     * @callback module:api/HomepageApi~allHomepageSectionsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/HomepageSection>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get All Homepage sections
     * ### Get information about all homepage sections. 
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields Requested fields.
     * @param {String} opts.sorts Fields to sort by.
     * @param {module:api/HomepageApi~allHomepageSectionsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/HomepageSection>}
     */
    this.allHomepageSections = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'fields': opts['fields'],
        'sorts': opts['sorts'],
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
      var returnType = [HomepageSection];

      return this.apiClient.callApi(
        '/homepage_sections', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the allHomepages operation.
     * @callback module:api/HomepageApi~allHomepagesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Homepage>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get All Homepages
     * ### Get information about all homepages. 
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields Requested fields.
     * @param {module:api/HomepageApi~allHomepagesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Homepage>}
     */
    this.allHomepages = function(opts, callback) {
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
      var returnType = [Homepage];

      return this.apiClient.callApi(
        '/homepages', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the createHomepage operation.
     * @callback module:api/HomepageApi~createHomepageCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Homepage} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create Homepage
     * ### Create a new homepage. 
     * @param {Object} opts Optional parameters
     * @param {module:model/Homepage} opts.body Homepage
     * @param {String} opts.fields Requested fields.
     * @param {module:api/HomepageApi~createHomepageCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Homepage}
     */
    this.createHomepage = function(opts, callback) {
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
      var returnType = Homepage;

      return this.apiClient.callApi(
        '/homepages', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the createHomepageItem operation.
     * @callback module:api/HomepageApi~createHomepageItemCallback
     * @param {String} error Error message, if any.
     * @param {module:model/HomepageItem} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create Homepage Item
     * ### Create a new homepage item. 
     * @param {Object} opts Optional parameters
     * @param {module:model/HomepageItem} opts.body Homepage Item
     * @param {String} opts.fields Requested fields.
     * @param {module:api/HomepageApi~createHomepageItemCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/HomepageItem}
     */
    this.createHomepageItem = function(opts, callback) {
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
      var returnType = HomepageItem;

      return this.apiClient.callApi(
        '/homepage_items', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the createHomepageSection operation.
     * @callback module:api/HomepageApi~createHomepageSectionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/HomepageSection} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create Homepage section
     * ### Create a new homepage section. 
     * @param {Object} opts Optional parameters
     * @param {module:model/HomepageSection} opts.body Homepage section
     * @param {String} opts.fields Requested fields.
     * @param {module:api/HomepageApi~createHomepageSectionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/HomepageSection}
     */
    this.createHomepageSection = function(opts, callback) {
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
      var returnType = HomepageSection;

      return this.apiClient.callApi(
        '/homepage_sections', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteHomepage operation.
     * @callback module:api/HomepageApi~deleteHomepageCallback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete Homepage
     * ### Delete a homepage. 
     * @param {Number} homepageId Id of homepage
     * @param {module:api/HomepageApi~deleteHomepageCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'String'}
     */
    this.deleteHomepage = function(homepageId, callback) {
      var postBody = null;

      // verify the required parameter 'homepageId' is set
      if (homepageId === undefined || homepageId === null) {
        throw new Error("Missing the required parameter 'homepageId' when calling deleteHomepage");
      }


      var pathParams = {
        'homepage_id': homepageId
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
        '/homepages/{homepage_id}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteHomepageItem operation.
     * @callback module:api/HomepageApi~deleteHomepageItemCallback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete Homepage Item
     * ### Delete a homepage item. 
     * @param {Number} homepageItemId Id of homepage_item
     * @param {module:api/HomepageApi~deleteHomepageItemCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'String'}
     */
    this.deleteHomepageItem = function(homepageItemId, callback) {
      var postBody = null;

      // verify the required parameter 'homepageItemId' is set
      if (homepageItemId === undefined || homepageItemId === null) {
        throw new Error("Missing the required parameter 'homepageItemId' when calling deleteHomepageItem");
      }


      var pathParams = {
        'homepage_item_id': homepageItemId
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
        '/homepage_items/{homepage_item_id}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteHomepageSection operation.
     * @callback module:api/HomepageApi~deleteHomepageSectionCallback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete Homepage section
     * ### Delete a homepage section. 
     * @param {Number} homepageSectionId Id of homepage_section
     * @param {module:api/HomepageApi~deleteHomepageSectionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'String'}
     */
    this.deleteHomepageSection = function(homepageSectionId, callback) {
      var postBody = null;

      // verify the required parameter 'homepageSectionId' is set
      if (homepageSectionId === undefined || homepageSectionId === null) {
        throw new Error("Missing the required parameter 'homepageSectionId' when calling deleteHomepageSection");
      }


      var pathParams = {
        'homepage_section_id': homepageSectionId
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
        '/homepage_sections/{homepage_section_id}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the homepage operation.
     * @callback module:api/HomepageApi~homepageCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Homepage} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Homepage
     * ### Get information about a homepage. 
     * @param {Number} homepageId Id of homepage
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields Requested fields.
     * @param {module:api/HomepageApi~homepageCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Homepage}
     */
    this.homepage = function(homepageId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'homepageId' is set
      if (homepageId === undefined || homepageId === null) {
        throw new Error("Missing the required parameter 'homepageId' when calling homepage");
      }


      var pathParams = {
        'homepage_id': homepageId
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
      var returnType = Homepage;

      return this.apiClient.callApi(
        '/homepages/{homepage_id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the homepageItem operation.
     * @callback module:api/HomepageApi~homepageItemCallback
     * @param {String} error Error message, if any.
     * @param {module:model/HomepageItem} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Homepage Item
     * ### Get information about a homepage item. 
     * @param {Number} homepageItemId Id of homepage item
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields Requested fields.
     * @param {module:api/HomepageApi~homepageItemCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/HomepageItem}
     */
    this.homepageItem = function(homepageItemId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'homepageItemId' is set
      if (homepageItemId === undefined || homepageItemId === null) {
        throw new Error("Missing the required parameter 'homepageItemId' when calling homepageItem");
      }


      var pathParams = {
        'homepage_item_id': homepageItemId
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
      var returnType = HomepageItem;

      return this.apiClient.callApi(
        '/homepage_items/{homepage_item_id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the homepageSection operation.
     * @callback module:api/HomepageApi~homepageSectionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/HomepageSection} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Homepage section
     * ### Get information about a homepage section. 
     * @param {Number} homepageSectionId Id of homepage section
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields Requested fields.
     * @param {module:api/HomepageApi~homepageSectionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/HomepageSection}
     */
    this.homepageSection = function(homepageSectionId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'homepageSectionId' is set
      if (homepageSectionId === undefined || homepageSectionId === null) {
        throw new Error("Missing the required parameter 'homepageSectionId' when calling homepageSection");
      }


      var pathParams = {
        'homepage_section_id': homepageSectionId
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
      var returnType = HomepageSection;

      return this.apiClient.callApi(
        '/homepage_sections/{homepage_section_id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the searchHomepages operation.
     * @callback module:api/HomepageApi~searchHomepagesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Homepage>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search Homepages
     * ### Search Homepages  If multiple search params are given and &#x60;filter_or&#x60; is FALSE or not specified, search params are combined in a logical AND operation. Only rows that match *all* search param criteria will be returned.  If &#x60;filter_or&#x60; is TRUE, multiple search params are combined in a logical OR operation. Results will include rows that match **any** of the search criteria.  String search params use case-insensitive matching. String search params can contain &#x60;%&#x60; and &#39;_&#39; as SQL LIKE pattern match wildcard expressions. example&#x3D;\&quot;dan%\&quot; will match \&quot;danger\&quot; and \&quot;Danzig\&quot; but not \&quot;David\&quot; example&#x3D;\&quot;D_m%\&quot; will match \&quot;Damage\&quot; and \&quot;dump\&quot;  Integer search params can accept a single value or a comma separated list of values. The multiple values will be combined under a logical OR operation - results will match at least one of the given values.  Most search params can accept \&quot;IS NULL\&quot; and \&quot;NOT NULL\&quot; as special expressions to match or exclude (respectively) rows where the column is null.  Boolean search params accept only \&quot;true\&quot; and \&quot;false\&quot; as values.  
     * @param {Object} opts Optional parameters
     * @param {String} opts.title Matches homepage title.
     * @param {String} opts.createdAt Matches the timestamp for when the homepage was created.
     * @param {String} opts.firstName The first name of the user who created this homepage.
     * @param {String} opts.lastName The last name of the user who created this homepage.
     * @param {String} opts.fields Requested fields.
     * @param {Boolean} opts.favorited Return favorited homepages when true.
     * @param {String} opts.sorts The fields to sort the results by
     * @param {Number} opts.page The page to return.
     * @param {Number} opts.perPage The number of items in the returned page.
     * @param {Number} opts.offset The number of items to skip before returning any. (used with limit and takes priority over page and per_page)
     * @param {Number} opts.limit The maximum number of items to return. (used with offset and takes priority over page and per_page)
     * @param {Boolean} opts.filterOr Combine given search criteria in a boolean OR expression
     * @param {module:api/HomepageApi~searchHomepagesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Homepage>}
     */
    this.searchHomepages = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'title': opts['title'],
        'created_at': opts['createdAt'],
        'first_name': opts['firstName'],
        'last_name': opts['lastName'],
        'fields': opts['fields'],
        'favorited': opts['favorited'],
        'sorts': opts['sorts'],
        'page': opts['page'],
        'per_page': opts['perPage'],
        'offset': opts['offset'],
        'limit': opts['limit'],
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
      var returnType = [Homepage];

      return this.apiClient.callApi(
        '/homepages/search', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateHomepage operation.
     * @callback module:api/HomepageApi~updateHomepageCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Homepage} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update Homepage
     * ### Update a homepage definition. 
     * @param {Number} homepageId Id of homepage
     * @param {module:model/Homepage} body Homepage
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields Requested fields.
     * @param {module:api/HomepageApi~updateHomepageCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Homepage}
     */
    this.updateHomepage = function(homepageId, body, opts, callback) {
      opts = opts || {};
      var postBody = body;

      // verify the required parameter 'homepageId' is set
      if (homepageId === undefined || homepageId === null) {
        throw new Error("Missing the required parameter 'homepageId' when calling updateHomepage");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateHomepage");
      }


      var pathParams = {
        'homepage_id': homepageId
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
      var returnType = Homepage;

      return this.apiClient.callApi(
        '/homepages/{homepage_id}', 'PATCH',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateHomepageItem operation.
     * @callback module:api/HomepageApi~updateHomepageItemCallback
     * @param {String} error Error message, if any.
     * @param {module:model/HomepageItem} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update Homepage Item
     * ### Update a homepage item definition. 
     * @param {Number} homepageItemId Id of homepage item
     * @param {module:model/HomepageItem} body Homepage Item
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields Requested fields.
     * @param {module:api/HomepageApi~updateHomepageItemCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/HomepageItem}
     */
    this.updateHomepageItem = function(homepageItemId, body, opts, callback) {
      opts = opts || {};
      var postBody = body;

      // verify the required parameter 'homepageItemId' is set
      if (homepageItemId === undefined || homepageItemId === null) {
        throw new Error("Missing the required parameter 'homepageItemId' when calling updateHomepageItem");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateHomepageItem");
      }


      var pathParams = {
        'homepage_item_id': homepageItemId
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
      var returnType = HomepageItem;

      return this.apiClient.callApi(
        '/homepage_items/{homepage_item_id}', 'PATCH',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateHomepageSection operation.
     * @callback module:api/HomepageApi~updateHomepageSectionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/HomepageSection} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update Homepage section
     * ### Update a homepage section definition. 
     * @param {Number} homepageSectionId Id of homepage section
     * @param {module:model/HomepageSection} body Homepage section
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields Requested fields.
     * @param {module:api/HomepageApi~updateHomepageSectionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/HomepageSection}
     */
    this.updateHomepageSection = function(homepageSectionId, body, opts, callback) {
      opts = opts || {};
      var postBody = body;

      // verify the required parameter 'homepageSectionId' is set
      if (homepageSectionId === undefined || homepageSectionId === null) {
        throw new Error("Missing the required parameter 'homepageSectionId' when calling updateHomepageSection");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateHomepageSection");
      }


      var pathParams = {
        'homepage_section_id': homepageSectionId
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
      var returnType = HomepageSection;

      return this.apiClient.callApi(
        '/homepage_sections/{homepage_section_id}', 'PATCH',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));