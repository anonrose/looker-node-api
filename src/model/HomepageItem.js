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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.LookerApi31Reference) {
      root.LookerApi31Reference = {};
    }
    root.LookerApi31Reference.HomepageItem = factory(root.LookerApi31Reference.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The HomepageItem model module.
   * @module model/HomepageItem
   * @version 3.1.0
   */

  /**
   * Constructs a new <code>HomepageItem</code>.
   * @alias module:model/HomepageItem
   * @class
   */
  var exports = function() {
    var _this = this;





























  };

  /**
   * Constructs a <code>HomepageItem</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/HomepageItem} obj Optional instance to populate.
   * @return {module:model/HomepageItem} The populated <code>HomepageItem</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('content_created_by')) {
        obj['content_created_by'] = ApiClient.convertToType(data['content_created_by'], 'String');
      }
      if (data.hasOwnProperty('content_favorite_id')) {
        obj['content_favorite_id'] = ApiClient.convertToType(data['content_favorite_id'], 'Number');
      }
      if (data.hasOwnProperty('content_metadata_id')) {
        obj['content_metadata_id'] = ApiClient.convertToType(data['content_metadata_id'], 'Number');
      }
      if (data.hasOwnProperty('content_updated_at')) {
        obj['content_updated_at'] = ApiClient.convertToType(data['content_updated_at'], 'String');
      }
      if (data.hasOwnProperty('custom_description')) {
        obj['custom_description'] = ApiClient.convertToType(data['custom_description'], 'String');
      }
      if (data.hasOwnProperty('custom_image_data_base64')) {
        obj['custom_image_data_base64'] = ApiClient.convertToType(data['custom_image_data_base64'], 'String');
      }
      if (data.hasOwnProperty('custom_image_url')) {
        obj['custom_image_url'] = ApiClient.convertToType(data['custom_image_url'], 'String');
      }
      if (data.hasOwnProperty('custom_title')) {
        obj['custom_title'] = ApiClient.convertToType(data['custom_title'], 'String');
      }
      if (data.hasOwnProperty('custom_url')) {
        obj['custom_url'] = ApiClient.convertToType(data['custom_url'], 'String');
      }
      if (data.hasOwnProperty('dashboard_id')) {
        obj['dashboard_id'] = ApiClient.convertToType(data['dashboard_id'], 'Number');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('favorite_count')) {
        obj['favorite_count'] = ApiClient.convertToType(data['favorite_count'], 'Number');
      }
      if (data.hasOwnProperty('homepage_section_id')) {
        obj['homepage_section_id'] = ApiClient.convertToType(data['homepage_section_id'], 'String');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('image_url')) {
        obj['image_url'] = ApiClient.convertToType(data['image_url'], 'String');
      }
      if (data.hasOwnProperty('location')) {
        obj['location'] = ApiClient.convertToType(data['location'], 'String');
      }
      if (data.hasOwnProperty('look_id')) {
        obj['look_id'] = ApiClient.convertToType(data['look_id'], 'Number');
      }
      if (data.hasOwnProperty('lookml_dashboard_id')) {
        obj['lookml_dashboard_id'] = ApiClient.convertToType(data['lookml_dashboard_id'], 'String');
      }
      if (data.hasOwnProperty('order')) {
        obj['order'] = ApiClient.convertToType(data['order'], 'Number');
      }
      if (data.hasOwnProperty('section_fetch_time')) {
        obj['section_fetch_time'] = ApiClient.convertToType(data['section_fetch_time'], 'Number');
      }
      if (data.hasOwnProperty('title')) {
        obj['title'] = ApiClient.convertToType(data['title'], 'String');
      }
      if (data.hasOwnProperty('url')) {
        obj['url'] = ApiClient.convertToType(data['url'], 'String');
      }
      if (data.hasOwnProperty('use_custom_description')) {
        obj['use_custom_description'] = ApiClient.convertToType(data['use_custom_description'], 'Boolean');
      }
      if (data.hasOwnProperty('use_custom_image')) {
        obj['use_custom_image'] = ApiClient.convertToType(data['use_custom_image'], 'Boolean');
      }
      if (data.hasOwnProperty('use_custom_title')) {
        obj['use_custom_title'] = ApiClient.convertToType(data['use_custom_title'], 'Boolean');
      }
      if (data.hasOwnProperty('use_custom_url')) {
        obj['use_custom_url'] = ApiClient.convertToType(data['use_custom_url'], 'Boolean');
      }
      if (data.hasOwnProperty('view_count')) {
        obj['view_count'] = ApiClient.convertToType(data['view_count'], 'Number');
      }
      if (data.hasOwnProperty('can')) {
        obj['can'] = ApiClient.convertToType(data['can'], {'String': 'Boolean'});
      }
    }
    return obj;
  }

  /**
   * Name of user who created the content this item is based on
   * @member {String} content_created_by
   */
  exports.prototype['content_created_by'] = undefined;
  /**
   * Content favorite id associated with the item this content is based on
   * @member {Number} content_favorite_id
   */
  exports.prototype['content_favorite_id'] = undefined;
  /**
   * Content metadata id associated with the item this content is based on
   * @member {Number} content_metadata_id
   */
  exports.prototype['content_metadata_id'] = undefined;
  /**
   * Last time the content that this item is based on was updated
   * @member {String} content_updated_at
   */
  exports.prototype['content_updated_at'] = undefined;
  /**
   * Custom description entered by the user, if present
   * @member {String} custom_description
   */
  exports.prototype['custom_description'] = undefined;
  /**
   * (Write-Only) base64 encoded image data
   * @member {String} custom_image_data_base64
   */
  exports.prototype['custom_image_data_base64'] = undefined;
  /**
   * Custom image_url entered by the user, if present
   * @member {String} custom_image_url
   */
  exports.prototype['custom_image_url'] = undefined;
  /**
   * Custom title entered by the user, if present
   * @member {String} custom_title
   */
  exports.prototype['custom_title'] = undefined;
  /**
   * Custom url entered by the user, if present
   * @member {String} custom_url
   */
  exports.prototype['custom_url'] = undefined;
  /**
   * Dashboard to base this item on
   * @member {Number} dashboard_id
   */
  exports.prototype['dashboard_id'] = undefined;
  /**
   * The actual description for display
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * Number of times content has been favorited, if present
   * @member {Number} favorite_count
   */
  exports.prototype['favorite_count'] = undefined;
  /**
   * Associated Homepage Section
   * @member {String} homepage_section_id
   */
  exports.prototype['homepage_section_id'] = undefined;
  /**
   * Unique Id
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * The actual image_url for display
   * @member {String} image_url
   */
  exports.prototype['image_url'] = undefined;
  /**
   * The container folder name of the content
   * @member {String} location
   */
  exports.prototype['location'] = undefined;
  /**
   * Look to base this item on
   * @member {Number} look_id
   */
  exports.prototype['look_id'] = undefined;
  /**
   * LookML Dashboard to base this item on
   * @member {String} lookml_dashboard_id
   */
  exports.prototype['lookml_dashboard_id'] = undefined;
  /**
   * An arbitrary integer representing the sort order within the section
   * @member {Number} order
   */
  exports.prototype['order'] = undefined;
  /**
   * Number of seconds it took to fetch the section this item is in
   * @member {Number} section_fetch_time
   */
  exports.prototype['section_fetch_time'] = undefined;
  /**
   * The actual title for display
   * @member {String} title
   */
  exports.prototype['title'] = undefined;
  /**
   * The actual url for display
   * @member {String} url
   */
  exports.prototype['url'] = undefined;
  /**
   * Whether the custom description should be used instead of the content description, if the item is associated with content
   * @member {Boolean} use_custom_description
   */
  exports.prototype['use_custom_description'] = undefined;
  /**
   * Whether the custom image should be used instead of the content image, if the item is associated with content
   * @member {Boolean} use_custom_image
   */
  exports.prototype['use_custom_image'] = undefined;
  /**
   * Whether the custom title should be used instead of the content title, if the item is associated with content
   * @member {Boolean} use_custom_title
   */
  exports.prototype['use_custom_title'] = undefined;
  /**
   * Whether the custom url should be used instead of the content url, if the item is associated with content
   * @member {Boolean} use_custom_url
   */
  exports.prototype['use_custom_url'] = undefined;
  /**
   * Number of times content has been viewed, if present
   * @member {Number} view_count
   */
  exports.prototype['view_count'] = undefined;
  /**
   * Operations the current user is able to perform on this object
   * @member {Object.<String, Boolean>} can
   */
  exports.prototype['can'] = undefined;



  return exports;
}));


