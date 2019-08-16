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
    root.LookerApi31Reference.Session = factory(root.LookerApi31Reference.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Session model module.
   * @module model/Session
   * @version 3.1.0
   */

  /**
   * Constructs a new <code>Session</code>.
   * @alias module:model/Session
   * @class
   */
  var exports = function() {
    var _this = this;
















  };

  /**
   * Constructs a <code>Session</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Session} obj Optional instance to populate.
   * @return {module:model/Session} The populated <code>Session</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('ip_address')) {
        obj['ip_address'] = ApiClient.convertToType(data['ip_address'], 'String');
      }
      if (data.hasOwnProperty('browser')) {
        obj['browser'] = ApiClient.convertToType(data['browser'], 'String');
      }
      if (data.hasOwnProperty('operating_system')) {
        obj['operating_system'] = ApiClient.convertToType(data['operating_system'], 'String');
      }
      if (data.hasOwnProperty('city')) {
        obj['city'] = ApiClient.convertToType(data['city'], 'String');
      }
      if (data.hasOwnProperty('state')) {
        obj['state'] = ApiClient.convertToType(data['state'], 'String');
      }
      if (data.hasOwnProperty('country')) {
        obj['country'] = ApiClient.convertToType(data['country'], 'String');
      }
      if (data.hasOwnProperty('credentials_type')) {
        obj['credentials_type'] = ApiClient.convertToType(data['credentials_type'], 'String');
      }
      if (data.hasOwnProperty('extended_at')) {
        obj['extended_at'] = ApiClient.convertToType(data['extended_at'], 'String');
      }
      if (data.hasOwnProperty('extended_count')) {
        obj['extended_count'] = ApiClient.convertToType(data['extended_count'], 'Number');
      }
      if (data.hasOwnProperty('sudo_user_id')) {
        obj['sudo_user_id'] = ApiClient.convertToType(data['sudo_user_id'], 'Number');
      }
      if (data.hasOwnProperty('created_at')) {
        obj['created_at'] = ApiClient.convertToType(data['created_at'], 'String');
      }
      if (data.hasOwnProperty('expires_at')) {
        obj['expires_at'] = ApiClient.convertToType(data['expires_at'], 'String');
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
   * Unique Id
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * IP address of user when this session was initiated
   * @member {String} ip_address
   */
  exports.prototype['ip_address'] = undefined;
  /**
   * User's browser type
   * @member {String} browser
   */
  exports.prototype['browser'] = undefined;
  /**
   * User's Operating System
   * @member {String} operating_system
   */
  exports.prototype['operating_system'] = undefined;
  /**
   * City component of user location (derived from IP address)
   * @member {String} city
   */
  exports.prototype['city'] = undefined;
  /**
   * State component of user location (derived from IP address)
   * @member {String} state
   */
  exports.prototype['state'] = undefined;
  /**
   * Country component of user location (derived from IP address)
   * @member {String} country
   */
  exports.prototype['country'] = undefined;
  /**
   * Type of credentials used for logging in this session
   * @member {String} credentials_type
   */
  exports.prototype['credentials_type'] = undefined;
  /**
   * Time when this session was last extended by the user
   * @member {String} extended_at
   */
  exports.prototype['extended_at'] = undefined;
  /**
   * Number of times this session was extended
   * @member {Number} extended_count
   */
  exports.prototype['extended_count'] = undefined;
  /**
   * Actual user in the case when this session represents one user sudo'ing as another
   * @member {Number} sudo_user_id
   */
  exports.prototype['sudo_user_id'] = undefined;
  /**
   * Time when this session was initiated
   * @member {String} created_at
   */
  exports.prototype['created_at'] = undefined;
  /**
   * Time when this session will expire
   * @member {String} expires_at
   */
  exports.prototype['expires_at'] = undefined;
  /**
   * Link to get this item
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


