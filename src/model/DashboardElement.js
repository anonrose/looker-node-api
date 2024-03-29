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
    define(['ApiClient', 'model/LookWithQuery', 'model/Query', 'model/ResultMakerWithIdVisConfigAndDynamicFields'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./LookWithQuery'), require('./Query'), require('./ResultMakerWithIdVisConfigAndDynamicFields'));
  } else {
    // Browser globals (root is window)
    if (!root.LookerApi31Reference) {
      root.LookerApi31Reference = {};
    }
    root.LookerApi31Reference.DashboardElement = factory(root.LookerApi31Reference.ApiClient, root.LookerApi31Reference.LookWithQuery, root.LookerApi31Reference.Query, root.LookerApi31Reference.ResultMakerWithIdVisConfigAndDynamicFields);
  }
}(this, function(ApiClient, LookWithQuery, Query, ResultMakerWithIdVisConfigAndDynamicFields) {
  'use strict';




  /**
   * The DashboardElement model module.
   * @module model/DashboardElement
   * @version 3.1.0
   */

  /**
   * Constructs a new <code>DashboardElement</code>.
   * @alias module:model/DashboardElement
   * @class
   */
  var exports = function() {
    var _this = this;



























  };

  /**
   * Constructs a <code>DashboardElement</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DashboardElement} obj Optional instance to populate.
   * @return {module:model/DashboardElement} The populated <code>DashboardElement</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('body_text')) {
        obj['body_text'] = ApiClient.convertToType(data['body_text'], 'String');
      }
      if (data.hasOwnProperty('body_text_as_html')) {
        obj['body_text_as_html'] = ApiClient.convertToType(data['body_text_as_html'], 'String');
      }
      if (data.hasOwnProperty('dashboard_id')) {
        obj['dashboard_id'] = ApiClient.convertToType(data['dashboard_id'], 'String');
      }
      if (data.hasOwnProperty('edit_uri')) {
        obj['edit_uri'] = ApiClient.convertToType(data['edit_uri'], 'String');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('look')) {
        obj['look'] = LookWithQuery.constructFromObject(data['look']);
      }
      if (data.hasOwnProperty('look_id')) {
        obj['look_id'] = ApiClient.convertToType(data['look_id'], 'String');
      }
      if (data.hasOwnProperty('lookml_link_id')) {
        obj['lookml_link_id'] = ApiClient.convertToType(data['lookml_link_id'], 'String');
      }
      if (data.hasOwnProperty('merge_result_id')) {
        obj['merge_result_id'] = ApiClient.convertToType(data['merge_result_id'], 'String');
      }
      if (data.hasOwnProperty('note_display')) {
        obj['note_display'] = ApiClient.convertToType(data['note_display'], 'String');
      }
      if (data.hasOwnProperty('note_state')) {
        obj['note_state'] = ApiClient.convertToType(data['note_state'], 'String');
      }
      if (data.hasOwnProperty('note_text')) {
        obj['note_text'] = ApiClient.convertToType(data['note_text'], 'String');
      }
      if (data.hasOwnProperty('note_text_as_html')) {
        obj['note_text_as_html'] = ApiClient.convertToType(data['note_text_as_html'], 'String');
      }
      if (data.hasOwnProperty('query')) {
        obj['query'] = Query.constructFromObject(data['query']);
      }
      if (data.hasOwnProperty('query_id')) {
        obj['query_id'] = ApiClient.convertToType(data['query_id'], 'Number');
      }
      if (data.hasOwnProperty('refresh_interval')) {
        obj['refresh_interval'] = ApiClient.convertToType(data['refresh_interval'], 'String');
      }
      if (data.hasOwnProperty('refresh_interval_to_i')) {
        obj['refresh_interval_to_i'] = ApiClient.convertToType(data['refresh_interval_to_i'], 'Number');
      }
      if (data.hasOwnProperty('result_maker')) {
        obj['result_maker'] = ResultMakerWithIdVisConfigAndDynamicFields.constructFromObject(data['result_maker']);
      }
      if (data.hasOwnProperty('result_maker_id')) {
        obj['result_maker_id'] = ApiClient.convertToType(data['result_maker_id'], 'Number');
      }
      if (data.hasOwnProperty('subtitle_text')) {
        obj['subtitle_text'] = ApiClient.convertToType(data['subtitle_text'], 'String');
      }
      if (data.hasOwnProperty('title')) {
        obj['title'] = ApiClient.convertToType(data['title'], 'String');
      }
      if (data.hasOwnProperty('title_hidden')) {
        obj['title_hidden'] = ApiClient.convertToType(data['title_hidden'], 'Boolean');
      }
      if (data.hasOwnProperty('title_text')) {
        obj['title_text'] = ApiClient.convertToType(data['title_text'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('alert_count')) {
        obj['alert_count'] = ApiClient.convertToType(data['alert_count'], 'Number');
      }
      if (data.hasOwnProperty('can')) {
        obj['can'] = ApiClient.convertToType(data['can'], {'String': 'Boolean'});
      }
    }
    return obj;
  }

  /**
   * Text tile body text
   * @member {String} body_text
   */
  exports.prototype['body_text'] = undefined;
  /**
   * Text tile body text as Html
   * @member {String} body_text_as_html
   */
  exports.prototype['body_text_as_html'] = undefined;
  /**
   * Id of Dashboard
   * @member {String} dashboard_id
   */
  exports.prototype['dashboard_id'] = undefined;
  /**
   * Relative path of URI of LookML file to edit the dashboard element (LookML dashboard only).
   * @member {String} edit_uri
   */
  exports.prototype['edit_uri'] = undefined;
  /**
   * Unique Id
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * Look
   * @member {module:model/LookWithQuery} look
   */
  exports.prototype['look'] = undefined;
  /**
   * Id Of Look
   * @member {String} look_id
   */
  exports.prototype['look_id'] = undefined;
  /**
   * LookML link ID
   * @member {String} lookml_link_id
   */
  exports.prototype['lookml_link_id'] = undefined;
  /**
   * ID of merge result
   * @member {String} merge_result_id
   */
  exports.prototype['merge_result_id'] = undefined;
  /**
   * Note Display
   * @member {String} note_display
   */
  exports.prototype['note_display'] = undefined;
  /**
   * Note State
   * @member {String} note_state
   */
  exports.prototype['note_state'] = undefined;
  /**
   * Note Text
   * @member {String} note_text
   */
  exports.prototype['note_text'] = undefined;
  /**
   * Note Text as Html
   * @member {String} note_text_as_html
   */
  exports.prototype['note_text_as_html'] = undefined;
  /**
   * Query
   * @member {module:model/Query} query
   */
  exports.prototype['query'] = undefined;
  /**
   * Id Of Query
   * @member {Number} query_id
   */
  exports.prototype['query_id'] = undefined;
  /**
   * Refresh Interval
   * @member {String} refresh_interval
   */
  exports.prototype['refresh_interval'] = undefined;
  /**
   * Refresh Interval as integer
   * @member {Number} refresh_interval_to_i
   */
  exports.prototype['refresh_interval_to_i'] = undefined;
  /**
   * Data about the result maker.
   * @member {module:model/ResultMakerWithIdVisConfigAndDynamicFields} result_maker
   */
  exports.prototype['result_maker'] = undefined;
  /**
   * ID of the ResultMakerLookup entry.
   * @member {Number} result_maker_id
   */
  exports.prototype['result_maker_id'] = undefined;
  /**
   * Text tile subtitle text
   * @member {String} subtitle_text
   */
  exports.prototype['subtitle_text'] = undefined;
  /**
   * Title of dashboard element
   * @member {String} title
   */
  exports.prototype['title'] = undefined;
  /**
   * Whether title is hidden
   * @member {Boolean} title_hidden
   */
  exports.prototype['title_hidden'] = undefined;
  /**
   * Text tile title
   * @member {String} title_text
   */
  exports.prototype['title_text'] = undefined;
  /**
   * Type
   * @member {String} type
   */
  exports.prototype['type'] = undefined;
  /**
   * Count of Alerts associated to a dashboard element
   * @member {Number} alert_count
   */
  exports.prototype['alert_count'] = undefined;
  /**
   * Operations the current user is able to perform on this object
   * @member {Object.<String, Boolean>} can
   */
  exports.prototype['can'] = undefined;



  return exports;
}));


