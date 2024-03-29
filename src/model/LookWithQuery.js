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
    define(['ApiClient', 'model/LookModel', 'model/Query', 'model/SpaceBase', 'model/UserIdOnly'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./LookModel'), require('./Query'), require('./SpaceBase'), require('./UserIdOnly'));
  } else {
    // Browser globals (root is window)
    if (!root.LookerApi31Reference) {
      root.LookerApi31Reference = {};
    }
    root.LookerApi31Reference.LookWithQuery = factory(root.LookerApi31Reference.ApiClient, root.LookerApi31Reference.LookModel, root.LookerApi31Reference.Query, root.LookerApi31Reference.SpaceBase, root.LookerApi31Reference.UserIdOnly);
  }
}(this, function(ApiClient, LookModel, Query, SpaceBase, UserIdOnly) {
  'use strict';




  /**
   * The LookWithQuery model module.
   * @module model/LookWithQuery
   * @version 3.1.0
   */

  /**
   * Constructs a new <code>LookWithQuery</code>.
   * @alias module:model/LookWithQuery
   * @class
   */
  var exports = function() {
    var _this = this;


































  };

  /**
   * Constructs a <code>LookWithQuery</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LookWithQuery} obj Optional instance to populate.
   * @return {module:model/LookWithQuery} The populated <code>LookWithQuery</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('content_metadata_id')) {
        obj['content_metadata_id'] = ApiClient.convertToType(data['content_metadata_id'], 'Number');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('title')) {
        obj['title'] = ApiClient.convertToType(data['title'], 'String');
      }
      if (data.hasOwnProperty('content_favorite_id')) {
        obj['content_favorite_id'] = ApiClient.convertToType(data['content_favorite_id'], 'Number');
      }
      if (data.hasOwnProperty('created_at')) {
        obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
      }
      if (data.hasOwnProperty('deleted')) {
        obj['deleted'] = ApiClient.convertToType(data['deleted'], 'Boolean');
      }
      if (data.hasOwnProperty('deleted_at')) {
        obj['deleted_at'] = ApiClient.convertToType(data['deleted_at'], 'Date');
      }
      if (data.hasOwnProperty('deleter_id')) {
        obj['deleter_id'] = ApiClient.convertToType(data['deleter_id'], 'Number');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('embed_url')) {
        obj['embed_url'] = ApiClient.convertToType(data['embed_url'], 'String');
      }
      if (data.hasOwnProperty('excel_file_url')) {
        obj['excel_file_url'] = ApiClient.convertToType(data['excel_file_url'], 'String');
      }
      if (data.hasOwnProperty('favorite_count')) {
        obj['favorite_count'] = ApiClient.convertToType(data['favorite_count'], 'Number');
      }
      if (data.hasOwnProperty('google_spreadsheet_formula')) {
        obj['google_spreadsheet_formula'] = ApiClient.convertToType(data['google_spreadsheet_formula'], 'String');
      }
      if (data.hasOwnProperty('image_embed_url')) {
        obj['image_embed_url'] = ApiClient.convertToType(data['image_embed_url'], 'String');
      }
      if (data.hasOwnProperty('is_run_on_load')) {
        obj['is_run_on_load'] = ApiClient.convertToType(data['is_run_on_load'], 'Boolean');
      }
      if (data.hasOwnProperty('last_accessed_at')) {
        obj['last_accessed_at'] = ApiClient.convertToType(data['last_accessed_at'], 'Date');
      }
      if (data.hasOwnProperty('last_updater_id')) {
        obj['last_updater_id'] = ApiClient.convertToType(data['last_updater_id'], 'Number');
      }
      if (data.hasOwnProperty('last_viewed_at')) {
        obj['last_viewed_at'] = ApiClient.convertToType(data['last_viewed_at'], 'Date');
      }
      if (data.hasOwnProperty('model')) {
        obj['model'] = LookModel.constructFromObject(data['model']);
      }
      if (data.hasOwnProperty('public')) {
        obj['public'] = ApiClient.convertToType(data['public'], 'Boolean');
      }
      if (data.hasOwnProperty('public_slug')) {
        obj['public_slug'] = ApiClient.convertToType(data['public_slug'], 'String');
      }
      if (data.hasOwnProperty('public_url')) {
        obj['public_url'] = ApiClient.convertToType(data['public_url'], 'String');
      }
      if (data.hasOwnProperty('query_id')) {
        obj['query_id'] = ApiClient.convertToType(data['query_id'], 'Number');
      }
      if (data.hasOwnProperty('short_url')) {
        obj['short_url'] = ApiClient.convertToType(data['short_url'], 'String');
      }
      if (data.hasOwnProperty('space')) {
        obj['space'] = SpaceBase.constructFromObject(data['space']);
      }
      if (data.hasOwnProperty('space_id')) {
        obj['space_id'] = ApiClient.convertToType(data['space_id'], 'String');
      }
      if (data.hasOwnProperty('updated_at')) {
        obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
      }
      if (data.hasOwnProperty('user')) {
        obj['user'] = UserIdOnly.constructFromObject(data['user']);
      }
      if (data.hasOwnProperty('user_id')) {
        obj['user_id'] = ApiClient.convertToType(data['user_id'], 'Number');
      }
      if (data.hasOwnProperty('view_count')) {
        obj['view_count'] = ApiClient.convertToType(data['view_count'], 'Number');
      }
      if (data.hasOwnProperty('query')) {
        obj['query'] = Query.constructFromObject(data['query']);
      }
      if (data.hasOwnProperty('url')) {
        obj['url'] = ApiClient.convertToType(data['url'], 'String');
      }
      if (data.hasOwnProperty('can')) {
        obj['can'] = ApiClient.convertToType(data['can'], {'String': 'Boolean'});
      }
    }
    return obj;
  }

  /**
   * Id of content metadata
   * @member {Number} content_metadata_id
   */
  exports.prototype['content_metadata_id'] = undefined;
  /**
   * Unique Id
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * Look Title
   * @member {String} title
   */
  exports.prototype['title'] = undefined;
  /**
   * Content Favorite Id
   * @member {Number} content_favorite_id
   */
  exports.prototype['content_favorite_id'] = undefined;
  /**
   * Time that the Look was created.
   * @member {Date} created_at
   */
  exports.prototype['created_at'] = undefined;
  /**
   * Whether or not a look is 'soft' deleted.
   * @member {Boolean} deleted
   */
  exports.prototype['deleted'] = undefined;
  /**
   * Time that the Look was deleted.
   * @member {Date} deleted_at
   */
  exports.prototype['deleted_at'] = undefined;
  /**
   * Id of User that deleted the look.
   * @member {Number} deleter_id
   */
  exports.prototype['deleter_id'] = undefined;
  /**
   * Description
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * Embed Url
   * @member {String} embed_url
   */
  exports.prototype['embed_url'] = undefined;
  /**
   * Excel File Url
   * @member {String} excel_file_url
   */
  exports.prototype['excel_file_url'] = undefined;
  /**
   * Number of times favorited
   * @member {Number} favorite_count
   */
  exports.prototype['favorite_count'] = undefined;
  /**
   * Google Spreadsheet Formula
   * @member {String} google_spreadsheet_formula
   */
  exports.prototype['google_spreadsheet_formula'] = undefined;
  /**
   * Image Embed Url
   * @member {String} image_embed_url
   */
  exports.prototype['image_embed_url'] = undefined;
  /**
   * auto-run query when Look viewed
   * @member {Boolean} is_run_on_load
   */
  exports.prototype['is_run_on_load'] = undefined;
  /**
   * Time that the Look was last accessed by any user
   * @member {Date} last_accessed_at
   */
  exports.prototype['last_accessed_at'] = undefined;
  /**
   * Id of User that last updated the look.
   * @member {Number} last_updater_id
   */
  exports.prototype['last_updater_id'] = undefined;
  /**
   * Time last viewed in the Looker web UI
   * @member {Date} last_viewed_at
   */
  exports.prototype['last_viewed_at'] = undefined;
  /**
   * Model
   * @member {module:model/LookModel} model
   */
  exports.prototype['model'] = undefined;
  /**
   * Is Public
   * @member {Boolean} public
   */
  exports.prototype['public'] = undefined;
  /**
   * Public Slug
   * @member {String} public_slug
   */
  exports.prototype['public_slug'] = undefined;
  /**
   * Public Url
   * @member {String} public_url
   */
  exports.prototype['public_url'] = undefined;
  /**
   * Query Id
   * @member {Number} query_id
   */
  exports.prototype['query_id'] = undefined;
  /**
   * Short Url
   * @member {String} short_url
   */
  exports.prototype['short_url'] = undefined;
  /**
   * Space of this Look
   * @member {module:model/SpaceBase} space
   */
  exports.prototype['space'] = undefined;
  /**
   * Space Id
   * @member {String} space_id
   */
  exports.prototype['space_id'] = undefined;
  /**
   * Time that the Look was updated.
   * @member {Date} updated_at
   */
  exports.prototype['updated_at'] = undefined;
  /**
   * User
   * @member {module:model/UserIdOnly} user
   */
  exports.prototype['user'] = undefined;
  /**
   * User Id
   * @member {Number} user_id
   */
  exports.prototype['user_id'] = undefined;
  /**
   * Number of times viewed in the Looker web UI
   * @member {Number} view_count
   */
  exports.prototype['view_count'] = undefined;
  /**
   * Query
   * @member {module:model/Query} query
   */
  exports.prototype['query'] = undefined;
  /**
   * Url
   * @member {String} url
   */
  exports.prototype['url'] = undefined;
  /**
   * Operations the current user is able to perform on this object
   * @member {Object.<String, Boolean>} can
   */
  exports.prototype['can'] = undefined;



  return exports;
}));


