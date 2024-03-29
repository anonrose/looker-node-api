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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.LookerApi31Reference);
  }
}(this, function(expect, LookerApi31Reference) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new LookerApi31Reference.LDAPConfig();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('LDAPConfig', function() {
    it('should create an instance of LDAPConfig', function() {
      // uncomment below and update the code to test LDAPConfig
      //var instance = new LookerApi31Reference.LDAPConfig();
      //expect(instance).to.be.a(LookerApi31Reference.LDAPConfig);
    });

    it('should have the property alternateEmailLoginAllowed (base name: "alternate_email_login_allowed")', function() {
      // uncomment below and update the code to test the property alternateEmailLoginAllowed
      //var instance = new LookerApi31Reference.LDAPConfig();
      //expect(instance).to.be();
    });

    it('should have the property authPassword (base name: "auth_password")', function() {
      // uncomment below and update the code to test the property authPassword
      //var instance = new LookerApi31Reference.LDAPConfig();
      //expect(instance).to.be();
    });

    it('should have the property authRequiresRole (base name: "auth_requires_role")', function() {
      // uncomment below and update the code to test the property authRequiresRole
      //var instance = new LookerApi31Reference.LDAPConfig();
      //expect(instance).to.be();
    });

    it('should have the property authUsername (base name: "auth_username")', function() {
      // uncomment below and update the code to test the property authUsername
      //var instance = new LookerApi31Reference.LDAPConfig();
      //expect(instance).to.be();
    });

    it('should have the property connectionHost (base name: "connection_host")', function() {
      // uncomment below and update the code to test the property connectionHost
      //var instance = new LookerApi31Reference.LDAPConfig();
      //expect(instance).to.be();
    });

    it('should have the property connectionPort (base name: "connection_port")', function() {
      // uncomment below and update the code to test the property connectionPort
      //var instance = new LookerApi31Reference.LDAPConfig();
      //expect(instance).to.be();
    });

    it('should have the property connectionTls (base name: "connection_tls")', function() {
      // uncomment below and update the code to test the property connectionTls
      //var instance = new LookerApi31Reference.LDAPConfig();
      //expect(instance).to.be();
    });

    it('should have the property connectionTlsNoVerify (base name: "connection_tls_no_verify")', function() {
      // uncomment below and update the code to test the property connectionTlsNoVerify
      //var instance = new LookerApi31Reference.LDAPConfig();
      //expect(instance).to.be();
    });

    it('should have the property defaultNewUserGroupIds (base name: "default_new_user_group_ids")', function() {
      // uncomment below and update the code to test the property defaultNewUserGroupIds
      //var instance = new LookerApi31Reference.LDAPConfig();
      //expect(instance).to.be();
    });

    it('should have the property defaultNewUserGroups (base name: "default_new_user_groups")', function() {
      // uncomment below and update the code to test the property defaultNewUserGroups
      //var instance = new LookerApi31Reference.LDAPConfig();
      //expect(instance).to.be();
    });

    it('should have the property defaultNewUserRoleIds (base name: "default_new_user_role_ids")', function() {
      // uncomment below and update the code to test the property defaultNewUserRoleIds
      //var instance = new LookerApi31Reference.LDAPConfig();
      //expect(instance).to.be();
    });

    it('should have the property defaultNewUserRoles (base name: "default_new_user_roles")', function() {
      // uncomment below and update the code to test the property defaultNewUserRoles
      //var instance = new LookerApi31Reference.LDAPConfig();
      //expect(instance).to.be();
    });

    it('should have the property enabled (base name: "enabled")', function() {
      // uncomment below and update the code to test the property enabled
      //var instance = new LookerApi31Reference.LDAPConfig();
      //expect(instance).to.be();
    });

    it('should have the property forceNoPage (base name: "force_no_page")', function() {
      // uncomment below and update the code to test the property forceNoPage
      //var instance = new LookerApi31Reference.LDAPConfig();
      //expect(instance).to.be();
    });

    it('should have the property groups (base name: "groups")', function() {
      // uncomment below and update the code to test the property groups
      //var instance = new LookerApi31Reference.LDAPConfig();
      //expect(instance).to.be();
    });

    it('should have the property groupsBaseDn (base name: "groups_base_dn")', function() {
      // uncomment below and update the code to test the property groupsBaseDn
      //var instance = new LookerApi31Reference.LDAPConfig();
      //expect(instance).to.be();
    });

    it('should have the property groupsFinderType (base name: "groups_finder_type")', function() {
      // uncomment below and update the code to test the property groupsFinderType
      //var instance = new LookerApi31Reference.LDAPConfig();
      //expect(instance).to.be();
    });

    it('should have the property groupsMemberAttribute (base name: "groups_member_attribute")', function() {
      // uncomment below and update the code to test the property groupsMemberAttribute
      //var instance = new LookerApi31Reference.LDAPConfig();
      //expect(instance).to.be();
    });

    it('should have the property groupsObjectclasses (base name: "groups_objectclasses")', function() {
      // uncomment below and update the code to test the property groupsObjectclasses
      //var instance = new LookerApi31Reference.LDAPConfig();
      //expect(instance).to.be();
    });

    it('should have the property groupsUserAttribute (base name: "groups_user_attribute")', function() {
      // uncomment below and update the code to test the property groupsUserAttribute
      //var instance = new LookerApi31Reference.LDAPConfig();
      //expect(instance).to.be();
    });

    it('should have the property groupsWithRoleIds (base name: "groups_with_role_ids")', function() {
      // uncomment below and update the code to test the property groupsWithRoleIds
      //var instance = new LookerApi31Reference.LDAPConfig();
      //expect(instance).to.be();
    });

    it('should have the property hasAuthPassword (base name: "has_auth_password")', function() {
      // uncomment below and update the code to test the property hasAuthPassword
      //var instance = new LookerApi31Reference.LDAPConfig();
      //expect(instance).to.be();
    });

    it('should have the property mergeNewUsersByEmail (base name: "merge_new_users_by_email")', function() {
      // uncomment below and update the code to test the property mergeNewUsersByEmail
      //var instance = new LookerApi31Reference.LDAPConfig();
      //expect(instance).to.be();
    });

    it('should have the property modifiedAt (base name: "modified_at")', function() {
      // uncomment below and update the code to test the property modifiedAt
      //var instance = new LookerApi31Reference.LDAPConfig();
      //expect(instance).to.be();
    });

    it('should have the property modifiedBy (base name: "modified_by")', function() {
      // uncomment below and update the code to test the property modifiedBy
      //var instance = new LookerApi31Reference.LDAPConfig();
      //expect(instance).to.be();
    });

    it('should have the property setRolesFromGroups (base name: "set_roles_from_groups")', function() {
      // uncomment below and update the code to test the property setRolesFromGroups
      //var instance = new LookerApi31Reference.LDAPConfig();
      //expect(instance).to.be();
    });

    it('should have the property testLdapPassword (base name: "test_ldap_password")', function() {
      // uncomment below and update the code to test the property testLdapPassword
      //var instance = new LookerApi31Reference.LDAPConfig();
      //expect(instance).to.be();
    });

    it('should have the property testLdapUser (base name: "test_ldap_user")', function() {
      // uncomment below and update the code to test the property testLdapUser
      //var instance = new LookerApi31Reference.LDAPConfig();
      //expect(instance).to.be();
    });

    it('should have the property userAttributeMapEmail (base name: "user_attribute_map_email")', function() {
      // uncomment below and update the code to test the property userAttributeMapEmail
      //var instance = new LookerApi31Reference.LDAPConfig();
      //expect(instance).to.be();
    });

    it('should have the property userAttributeMapFirstName (base name: "user_attribute_map_first_name")', function() {
      // uncomment below and update the code to test the property userAttributeMapFirstName
      //var instance = new LookerApi31Reference.LDAPConfig();
      //expect(instance).to.be();
    });

    it('should have the property userAttributeMapLastName (base name: "user_attribute_map_last_name")', function() {
      // uncomment below and update the code to test the property userAttributeMapLastName
      //var instance = new LookerApi31Reference.LDAPConfig();
      //expect(instance).to.be();
    });

    it('should have the property userAttributeMapLdapId (base name: "user_attribute_map_ldap_id")', function() {
      // uncomment below and update the code to test the property userAttributeMapLdapId
      //var instance = new LookerApi31Reference.LDAPConfig();
      //expect(instance).to.be();
    });

    it('should have the property userAttributes (base name: "user_attributes")', function() {
      // uncomment below and update the code to test the property userAttributes
      //var instance = new LookerApi31Reference.LDAPConfig();
      //expect(instance).to.be();
    });

    it('should have the property userAttributesWithIds (base name: "user_attributes_with_ids")', function() {
      // uncomment below and update the code to test the property userAttributesWithIds
      //var instance = new LookerApi31Reference.LDAPConfig();
      //expect(instance).to.be();
    });

    it('should have the property userBindBaseDn (base name: "user_bind_base_dn")', function() {
      // uncomment below and update the code to test the property userBindBaseDn
      //var instance = new LookerApi31Reference.LDAPConfig();
      //expect(instance).to.be();
    });

    it('should have the property userCustomFilter (base name: "user_custom_filter")', function() {
      // uncomment below and update the code to test the property userCustomFilter
      //var instance = new LookerApi31Reference.LDAPConfig();
      //expect(instance).to.be();
    });

    it('should have the property userIdAttributeNames (base name: "user_id_attribute_names")', function() {
      // uncomment below and update the code to test the property userIdAttributeNames
      //var instance = new LookerApi31Reference.LDAPConfig();
      //expect(instance).to.be();
    });

    it('should have the property userObjectclass (base name: "user_objectclass")', function() {
      // uncomment below and update the code to test the property userObjectclass
      //var instance = new LookerApi31Reference.LDAPConfig();
      //expect(instance).to.be();
    });

    it('should have the property url (base name: "url")', function() {
      // uncomment below and update the code to test the property url
      //var instance = new LookerApi31Reference.LDAPConfig();
      //expect(instance).to.be();
    });

    it('should have the property can (base name: "can")', function() {
      // uncomment below and update the code to test the property can
      //var instance = new LookerApi31Reference.LDAPConfig();
      //expect(instance).to.be();
    });

  });

}));
