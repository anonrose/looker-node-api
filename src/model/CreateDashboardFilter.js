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
    root.LookerApi31Reference.CreateDashboardFilter = factory(root.LookerApi31Reference.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CreateDashboardFilter model module.
   * @module model/CreateDashboardFilter
   * @version 3.1.0
   */

  /**
   * Constructs a new <code>CreateDashboardFilter</code>.
   * @alias module:model/CreateDashboardFilter
   * @class
   * @param dashboardId {String} Id of Dashboard
   * @param name {String} Name of filter
   * @param title {String} Title of filter
   * @param type {String} Type of filter: one of date, number, string, or field
   */
  var exports = function(dashboardId, name, title, type) {
    var _this = this;


    _this['dashboard_id'] = dashboardId;
    _this['name'] = name;
    _this['title'] = title;
    _this['type'] = type;











  };

  /**
   * Constructs a <code>CreateDashboardFilter</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateDashboardFilter} obj Optional instance to populate.
   * @return {module:model/CreateDashboardFilter} The populated <code>CreateDashboardFilter</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('dashboard_id')) {
        obj['dashboard_id'] = ApiClient.convertToType(data['dashboard_id'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('title')) {
        obj['title'] = ApiClient.convertToType(data['title'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('default_value')) {
        obj['default_value'] = ApiClient.convertToType(data['default_value'], 'String');
      }
      if (data.hasOwnProperty('model')) {
        obj['model'] = ApiClient.convertToType(data['model'], 'String');
      }
      if (data.hasOwnProperty('explore')) {
        obj['explore'] = ApiClient.convertToType(data['explore'], 'String');
      }
      if (data.hasOwnProperty('dimension')) {
        obj['dimension'] = ApiClient.convertToType(data['dimension'], 'String');
      }
      if (data.hasOwnProperty('field')) {
        obj['field'] = ApiClient.convertToType(data['field'], {'String': 'String'});
      }
      if (data.hasOwnProperty('row')) {
        obj['row'] = ApiClient.convertToType(data['row'], 'Number');
      }
      if (data.hasOwnProperty('listens_to_filters')) {
        obj['listens_to_filters'] = ApiClient.convertToType(data['listens_to_filters'], ['String']);
      }
      if (data.hasOwnProperty('allow_multiple_values')) {
        obj['allow_multiple_values'] = ApiClient.convertToType(data['allow_multiple_values'], 'Boolean');
      }
      if (data.hasOwnProperty('required')) {
        obj['required'] = ApiClient.convertToType(data['required'], 'Boolean');
      }
      if (data.hasOwnProperty('ui_config')) {
        obj['ui_config'] = ApiClient.convertToType(data['ui_config'], {'String': 'String'});
      }
      if (data.hasOwnProperty('can')) {
        obj['can'] = ApiClient.convertToType(data['can'], {'String': 'Boolean'});
      }
    }
    return obj;
  }

  /**
   * Unique Id
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * Id of Dashboard
   * @member {String} dashboard_id
   */
  exports.prototype['dashboard_id'] = undefined;
  /**
   * Name of filter
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * Title of filter
   * @member {String} title
   */
  exports.prototype['title'] = undefined;
  /**
   * Type of filter: one of date, number, string, or field
   * @member {String} type
   */
  exports.prototype['type'] = undefined;
  /**
   * Default value of filter
   * @member {String} default_value
   */
  exports.prototype['default_value'] = undefined;
  /**
   * Model of filter (required if type = field)
   * @member {String} model
   */
  exports.prototype['model'] = undefined;
  /**
   * Explore of filter (required if type = field)
   * @member {String} explore
   */
  exports.prototype['explore'] = undefined;
  /**
   * Dimension of filter (required if type = field)
   * @member {String} dimension
   */
  exports.prototype['dimension'] = undefined;
  /**
   * Field information
   * @member {Object.<String, String>} field
   */
  exports.prototype['field'] = undefined;
  /**
   * Display order of this filter relative to other filters
   * @member {Number} row
   */
  exports.prototype['row'] = undefined;
  /**
   * Array of listeners for faceted filters
   * @member {Array.<String>} listens_to_filters
   */
  exports.prototype['listens_to_filters'] = undefined;
  /**
   * Whether the filter allows multiple filter values
   * @member {Boolean} allow_multiple_values
   */
  exports.prototype['allow_multiple_values'] = undefined;
  /**
   * Whether the filter requires a value to run the dashboard
   * @member {Boolean} required
   */
  exports.prototype['required'] = undefined;
  /**
   * The visual configuration for this filter. Used to set up how the UI for this filter should appear.
   * @member {Object.<String, String>} ui_config
   */
  exports.prototype['ui_config'] = undefined;
  /**
   * Operations the current user is able to perform on this object
   * @member {Object.<String, Boolean>} can
   */
  exports.prototype['can'] = undefined;



  return exports;
}));


