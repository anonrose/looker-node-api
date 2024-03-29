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
    define(['ApiClient', 'model/CredentialsApi3', 'model/CredentialsEmail', 'model/CredentialsEmbed', 'model/CredentialsGoogle', 'model/CredentialsLDAP', 'model/CredentialsLookerOpenid', 'model/CredentialsOIDC', 'model/CredentialsSaml', 'model/CredentialsTotp', 'model/Session'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CredentialsApi3'), require('./CredentialsEmail'), require('./CredentialsEmbed'), require('./CredentialsGoogle'), require('./CredentialsLDAP'), require('./CredentialsLookerOpenid'), require('./CredentialsOIDC'), require('./CredentialsSaml'), require('./CredentialsTotp'), require('./Session'));
  } else {
    // Browser globals (root is window)
    if (!root.LookerApi31Reference) {
      root.LookerApi31Reference = {};
    }
    root.LookerApi31Reference.User = factory(root.LookerApi31Reference.ApiClient, root.LookerApi31Reference.CredentialsApi3, root.LookerApi31Reference.CredentialsEmail, root.LookerApi31Reference.CredentialsEmbed, root.LookerApi31Reference.CredentialsGoogle, root.LookerApi31Reference.CredentialsLDAP, root.LookerApi31Reference.CredentialsLookerOpenid, root.LookerApi31Reference.CredentialsOIDC, root.LookerApi31Reference.CredentialsSaml, root.LookerApi31Reference.CredentialsTotp, root.LookerApi31Reference.Session);
  }
}(this, function(ApiClient, CredentialsApi3, CredentialsEmail, CredentialsEmbed, CredentialsGoogle, CredentialsLDAP, CredentialsLookerOpenid, CredentialsOIDC, CredentialsSaml, CredentialsTotp, Session) {
  'use strict';




  /**
   * The User model module.
   * @module model/User
   * @version 3.1.0
   */

  /**
   * Constructs a new <code>User</code>.
   * @alias module:model/User
   * @class
   */
  var exports = function() {
    var _this = this;































  };

  /**
   * Constructs a <code>User</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/User} obj Optional instance to populate.
   * @return {module:model/User} The populated <code>User</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('avatar_url')) {
        obj['avatar_url'] = ApiClient.convertToType(data['avatar_url'], 'String');
      }
      if (data.hasOwnProperty('credentials_api3')) {
        obj['credentials_api3'] = ApiClient.convertToType(data['credentials_api3'], [CredentialsApi3]);
      }
      if (data.hasOwnProperty('credentials_email')) {
        obj['credentials_email'] = CredentialsEmail.constructFromObject(data['credentials_email']);
      }
      if (data.hasOwnProperty('credentials_embed')) {
        obj['credentials_embed'] = ApiClient.convertToType(data['credentials_embed'], [CredentialsEmbed]);
      }
      if (data.hasOwnProperty('credentials_google')) {
        obj['credentials_google'] = CredentialsGoogle.constructFromObject(data['credentials_google']);
      }
      if (data.hasOwnProperty('credentials_ldap')) {
        obj['credentials_ldap'] = CredentialsLDAP.constructFromObject(data['credentials_ldap']);
      }
      if (data.hasOwnProperty('credentials_looker_openid')) {
        obj['credentials_looker_openid'] = CredentialsLookerOpenid.constructFromObject(data['credentials_looker_openid']);
      }
      if (data.hasOwnProperty('credentials_oidc')) {
        obj['credentials_oidc'] = CredentialsOIDC.constructFromObject(data['credentials_oidc']);
      }
      if (data.hasOwnProperty('credentials_saml')) {
        obj['credentials_saml'] = CredentialsSaml.constructFromObject(data['credentials_saml']);
      }
      if (data.hasOwnProperty('credentials_totp')) {
        obj['credentials_totp'] = CredentialsTotp.constructFromObject(data['credentials_totp']);
      }
      if (data.hasOwnProperty('display_name')) {
        obj['display_name'] = ApiClient.convertToType(data['display_name'], 'String');
      }
      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('embed_group_space_id')) {
        obj['embed_group_space_id'] = ApiClient.convertToType(data['embed_group_space_id'], 'Number');
      }
      if (data.hasOwnProperty('first_name')) {
        obj['first_name'] = ApiClient.convertToType(data['first_name'], 'String');
      }
      if (data.hasOwnProperty('group_ids')) {
        obj['group_ids'] = ApiClient.convertToType(data['group_ids'], ['Number']);
      }
      if (data.hasOwnProperty('home_space_id')) {
        obj['home_space_id'] = ApiClient.convertToType(data['home_space_id'], 'String');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('is_disabled')) {
        obj['is_disabled'] = ApiClient.convertToType(data['is_disabled'], 'Boolean');
      }
      if (data.hasOwnProperty('last_name')) {
        obj['last_name'] = ApiClient.convertToType(data['last_name'], 'String');
      }
      if (data.hasOwnProperty('locale')) {
        obj['locale'] = ApiClient.convertToType(data['locale'], 'String');
      }
      if (data.hasOwnProperty('looker_versions')) {
        obj['looker_versions'] = ApiClient.convertToType(data['looker_versions'], ['String']);
      }
      if (data.hasOwnProperty('models_dir_validated')) {
        obj['models_dir_validated'] = ApiClient.convertToType(data['models_dir_validated'], 'Boolean');
      }
      if (data.hasOwnProperty('personal_space_id')) {
        obj['personal_space_id'] = ApiClient.convertToType(data['personal_space_id'], 'Number');
      }
      if (data.hasOwnProperty('presumed_looker_employee')) {
        obj['presumed_looker_employee'] = ApiClient.convertToType(data['presumed_looker_employee'], 'Boolean');
      }
      if (data.hasOwnProperty('role_ids')) {
        obj['role_ids'] = ApiClient.convertToType(data['role_ids'], ['Number']);
      }
      if (data.hasOwnProperty('sessions')) {
        obj['sessions'] = ApiClient.convertToType(data['sessions'], [Session]);
      }
      if (data.hasOwnProperty('ui_state')) {
        obj['ui_state'] = ApiClient.convertToType(data['ui_state'], {'String': 'String'});
      }
      if (data.hasOwnProperty('verified_looker_employee')) {
        obj['verified_looker_employee'] = ApiClient.convertToType(data['verified_looker_employee'], 'Boolean');
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
   * URL for the avatar image (may be generic)
   * @member {String} avatar_url
   */
  exports.prototype['avatar_url'] = undefined;
  /**
   * API 3 credentials
   * @member {Array.<module:model/CredentialsApi3>} credentials_api3
   */
  exports.prototype['credentials_api3'] = undefined;
  /**
   * Email/Password login credentials
   * @member {module:model/CredentialsEmail} credentials_email
   */
  exports.prototype['credentials_email'] = undefined;
  /**
   * Embed credentials
   * @member {Array.<module:model/CredentialsEmbed>} credentials_embed
   */
  exports.prototype['credentials_embed'] = undefined;
  /**
   * Google auth credentials
   * @member {module:model/CredentialsGoogle} credentials_google
   */
  exports.prototype['credentials_google'] = undefined;
  /**
   * LDAP credentials
   * @member {module:model/CredentialsLDAP} credentials_ldap
   */
  exports.prototype['credentials_ldap'] = undefined;
  /**
   * LookerOpenID credentials. Used for login by Looker Analysts
   * @member {module:model/CredentialsLookerOpenid} credentials_looker_openid
   */
  exports.prototype['credentials_looker_openid'] = undefined;
  /**
   * OpenID Connect auth credentials
   * @member {module:model/CredentialsOIDC} credentials_oidc
   */
  exports.prototype['credentials_oidc'] = undefined;
  /**
   * Saml auth credentials
   * @member {module:model/CredentialsSaml} credentials_saml
   */
  exports.prototype['credentials_saml'] = undefined;
  /**
   * Two-factor credentials
   * @member {module:model/CredentialsTotp} credentials_totp
   */
  exports.prototype['credentials_totp'] = undefined;
  /**
   * Full name for display (available only if both first_name and last_name are set)
   * @member {String} display_name
   */
  exports.prototype['display_name'] = undefined;
  /**
   * EMail address
   * @member {String} email
   */
  exports.prototype['email'] = undefined;
  /**
   * (Embed only) ID of user's group space based on the external_group_id optionally specified during embed user login
   * @member {Number} embed_group_space_id
   */
  exports.prototype['embed_group_space_id'] = undefined;
  /**
   * First name
   * @member {String} first_name
   */
  exports.prototype['first_name'] = undefined;
  /**
   * Array of ids of the groups for this user
   * @member {Array.<Number>} group_ids
   */
  exports.prototype['group_ids'] = undefined;
  /**
   * ID string for user's home space
   * @member {String} home_space_id
   */
  exports.prototype['home_space_id'] = undefined;
  /**
   * Unique Id
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * Account has been disabled
   * @member {Boolean} is_disabled
   */
  exports.prototype['is_disabled'] = undefined;
  /**
   * Last name
   * @member {String} last_name
   */
  exports.prototype['last_name'] = undefined;
  /**
   * User's preferred locale. User locale takes precedence over Looker's system-wide default locale. Locale determines language of display strings and date and numeric formatting in API responses. Locale string must be a 2 letter language code or a combination of language code and region code: 'en' or 'en-US', for example.
   * @member {String} locale
   */
  exports.prototype['locale'] = undefined;
  /**
   * Array of strings representing the Looker versions that this user has used (this only goes back as far as '3.54.0')
   * @member {Array.<String>} looker_versions
   */
  exports.prototype['looker_versions'] = undefined;
  /**
   * User's dev workspace has been checked for presence of applicable production projects
   * @member {Boolean} models_dir_validated
   */
  exports.prototype['models_dir_validated'] = undefined;
  /**
   * ID of user's personal space
   * @member {Number} personal_space_id
   */
  exports.prototype['personal_space_id'] = undefined;
  /**
   * User is identified as an employee of Looker
   * @member {Boolean} presumed_looker_employee
   */
  exports.prototype['presumed_looker_employee'] = undefined;
  /**
   * Array of ids of the roles for this user
   * @member {Array.<Number>} role_ids
   */
  exports.prototype['role_ids'] = undefined;
  /**
   * Active sessions
   * @member {Array.<module:model/Session>} sessions
   */
  exports.prototype['sessions'] = undefined;
  /**
   * Per user dictionary of undocumented state information owned by the Looker UI.
   * @member {Object.<String, String>} ui_state
   */
  exports.prototype['ui_state'] = undefined;
  /**
   * User is identified as an employee of Looker who has been verified via Looker corporate authentication
   * @member {Boolean} verified_looker_employee
   */
  exports.prototype['verified_looker_employee'] = undefined;
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


