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
    root.LookerApi31Reference.ScheduledPlanDestination = factory(root.LookerApi31Reference.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ScheduledPlanDestination model module.
   * @module model/ScheduledPlanDestination
   * @version 3.1.0
   */

  /**
   * Constructs a new <code>ScheduledPlanDestination</code>.
   * @alias module:model/ScheduledPlanDestination
   * @class
   */
  var exports = function() {
    var _this = this;













  };

  /**
   * Constructs a <code>ScheduledPlanDestination</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ScheduledPlanDestination} obj Optional instance to populate.
   * @return {module:model/ScheduledPlanDestination} The populated <code>ScheduledPlanDestination</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('scheduled_plan_id')) {
        obj['scheduled_plan_id'] = ApiClient.convertToType(data['scheduled_plan_id'], 'Number');
      }
      if (data.hasOwnProperty('format')) {
        obj['format'] = ApiClient.convertToType(data['format'], 'String');
      }
      if (data.hasOwnProperty('apply_formatting')) {
        obj['apply_formatting'] = ApiClient.convertToType(data['apply_formatting'], 'Boolean');
      }
      if (data.hasOwnProperty('apply_vis')) {
        obj['apply_vis'] = ApiClient.convertToType(data['apply_vis'], 'Boolean');
      }
      if (data.hasOwnProperty('address')) {
        obj['address'] = ApiClient.convertToType(data['address'], 'String');
      }
      if (data.hasOwnProperty('looker_recipient')) {
        obj['looker_recipient'] = ApiClient.convertToType(data['looker_recipient'], 'Boolean');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('parameters')) {
        obj['parameters'] = ApiClient.convertToType(data['parameters'], 'String');
      }
      if (data.hasOwnProperty('secret_parameters')) {
        obj['secret_parameters'] = ApiClient.convertToType(data['secret_parameters'], 'String');
      }
      if (data.hasOwnProperty('message')) {
        obj['message'] = ApiClient.convertToType(data['message'], 'String');
      }
      if (data.hasOwnProperty('can')) {
        obj['can'] = ApiClient.convertToType(data['can'], {'String': 'Boolean'});
      }
    }
    return obj;
  }

  /**
   * Unique Id
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * Id of a scheduled plan you own
   * @member {Number} scheduled_plan_id
   */
  exports.prototype['scheduled_plan_id'] = undefined;
  /**
   * The data format to send to the given destination. Supported formats vary by destination, but include: \"txt\", \"csv\", \"inline_json\", \"json\", \"json_detail\", \"xlsx\", \"html\", \"wysiwyg_pdf\", \"assembled_pdf\", \"wysiwyg_png\"
   * @member {String} format
   */
  exports.prototype['format'] = undefined;
  /**
   * Are values formatted? (containing currency symbols, digit separators, etc.
   * @member {Boolean} apply_formatting
   */
  exports.prototype['apply_formatting'] = undefined;
  /**
   * Whether visualization options are applied to the results.
   * @member {Boolean} apply_vis
   */
  exports.prototype['apply_vis'] = undefined;
  /**
   * Address for recipient. For email e.g. 'user@example.com'. For webhooks e.g. 'https://domain/path'. For Amazon S3 e.g. 's3://bucket-name/path/'. For SFTP e.g. 'sftp://host-name/path/'. 
   * @member {String} address
   */
  exports.prototype['address'] = undefined;
  /**
   * Whether the recipient is a Looker user on the current instance (only applicable for email recipients)
   * @member {Boolean} looker_recipient
   */
  exports.prototype['looker_recipient'] = undefined;
  /**
   * Type of the address ('email', 'webhook', 's3', or 'sftp')
   * @member {String} type
   */
  exports.prototype['type'] = undefined;
  /**
   * JSON object containing parameters for external scheduling. For Amazon S3, this requires keys and values for access_key_id and region. For SFTP, this requires a key and value for username.
   * @member {String} parameters
   */
  exports.prototype['parameters'] = undefined;
  /**
   * (Write-Only) JSON object containing secret parameters for external scheduling. For Amazon S3, this requires a key and value for secret_access_key. For SFTP, this requires a key and value for password.
   * @member {String} secret_parameters
   */
  exports.prototype['secret_parameters'] = undefined;
  /**
   * Optional message to be included in scheduled emails
   * @member {String} message
   */
  exports.prototype['message'] = undefined;
  /**
   * Operations the current user is able to perform on this object
   * @member {Object.<String, Boolean>} can
   */
  exports.prototype['can'] = undefined;



  return exports;
}));


