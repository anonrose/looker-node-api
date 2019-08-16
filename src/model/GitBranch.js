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
    root.LookerApi31Reference.GitBranch = factory(root.LookerApi31Reference.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The GitBranch model module.
   * @module model/GitBranch
   * @version 3.1.0
   */

  /**
   * Constructs a new <code>GitBranch</code>.
   * @alias module:model/GitBranch
   * @class
   */
  var exports = function() {
    var _this = this;


















  };

  /**
   * Constructs a <code>GitBranch</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GitBranch} obj Optional instance to populate.
   * @return {module:model/GitBranch} The populated <code>GitBranch</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('remote')) {
        obj['remote'] = ApiClient.convertToType(data['remote'], 'String');
      }
      if (data.hasOwnProperty('remote_name')) {
        obj['remote_name'] = ApiClient.convertToType(data['remote_name'], 'String');
      }
      if (data.hasOwnProperty('error')) {
        obj['error'] = ApiClient.convertToType(data['error'], 'String');
      }
      if (data.hasOwnProperty('message')) {
        obj['message'] = ApiClient.convertToType(data['message'], 'String');
      }
      if (data.hasOwnProperty('owner_name')) {
        obj['owner_name'] = ApiClient.convertToType(data['owner_name'], 'String');
      }
      if (data.hasOwnProperty('readonly')) {
        obj['readonly'] = ApiClient.convertToType(data['readonly'], 'Boolean');
      }
      if (data.hasOwnProperty('personal')) {
        obj['personal'] = ApiClient.convertToType(data['personal'], 'Boolean');
      }
      if (data.hasOwnProperty('is_local')) {
        obj['is_local'] = ApiClient.convertToType(data['is_local'], 'Boolean');
      }
      if (data.hasOwnProperty('is_remote')) {
        obj['is_remote'] = ApiClient.convertToType(data['is_remote'], 'Boolean');
      }
      if (data.hasOwnProperty('is_production')) {
        obj['is_production'] = ApiClient.convertToType(data['is_production'], 'Boolean');
      }
      if (data.hasOwnProperty('ahead_count')) {
        obj['ahead_count'] = ApiClient.convertToType(data['ahead_count'], 'Number');
      }
      if (data.hasOwnProperty('behind_count')) {
        obj['behind_count'] = ApiClient.convertToType(data['behind_count'], 'Number');
      }
      if (data.hasOwnProperty('commit_at')) {
        obj['commit_at'] = ApiClient.convertToType(data['commit_at'], 'Number');
      }
      if (data.hasOwnProperty('ref')) {
        obj['ref'] = ApiClient.convertToType(data['ref'], 'String');
      }
      if (data.hasOwnProperty('remote_ref')) {
        obj['remote_ref'] = ApiClient.convertToType(data['remote_ref'], 'String');
      }
      if (data.hasOwnProperty('can')) {
        obj['can'] = ApiClient.convertToType(data['can'], {'String': 'Boolean'});
      }
    }
    return obj;
  }

  /**
   * The short name on the local. Updating `name` results in `git checkout <new_name>`
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * The name of the remote
   * @member {String} remote
   */
  exports.prototype['remote'] = undefined;
  /**
   * The short name on the remote
   * @member {String} remote_name
   */
  exports.prototype['remote_name'] = undefined;
  /**
   * Name of error
   * @member {String} error
   */
  exports.prototype['error'] = undefined;
  /**
   * Message describing an error if present
   * @member {String} message
   */
  exports.prototype['message'] = undefined;
  /**
   * Name of the owner of a personal branch
   * @member {String} owner_name
   */
  exports.prototype['owner_name'] = undefined;
  /**
   * Whether or not this branch is readonly
   * @member {Boolean} readonly
   */
  exports.prototype['readonly'] = undefined;
  /**
   * Whether or not this branch is a personal branch - readonly for all developers except the owner
   * @member {Boolean} personal
   */
  exports.prototype['personal'] = undefined;
  /**
   * Whether or not a local ref exists for the branch
   * @member {Boolean} is_local
   */
  exports.prototype['is_local'] = undefined;
  /**
   * Whether or not a remote ref exists for the branch
   * @member {Boolean} is_remote
   */
  exports.prototype['is_remote'] = undefined;
  /**
   * Whether or not this is the production branch
   * @member {Boolean} is_production
   */
  exports.prototype['is_production'] = undefined;
  /**
   * Number of commits the local branch is ahead of the remote
   * @member {Number} ahead_count
   */
  exports.prototype['ahead_count'] = undefined;
  /**
   * Number of commits the local branch is behind the remote
   * @member {Number} behind_count
   */
  exports.prototype['behind_count'] = undefined;
  /**
   * UNIX timestamp at which this branch was last committed.
   * @member {Number} commit_at
   */
  exports.prototype['commit_at'] = undefined;
  /**
   * The resolved ref of this branch. Updating `ref` results in `git reset --hard <new_ref>``.
   * @member {String} ref
   */
  exports.prototype['ref'] = undefined;
  /**
   * The resolved ref of this branch remote.
   * @member {String} remote_ref
   */
  exports.prototype['remote_ref'] = undefined;
  /**
   * Operations the current user is able to perform on this object
   * @member {Object.<String, Boolean>} can
   */
  exports.prototype['can'] = undefined;



  return exports;
}));


