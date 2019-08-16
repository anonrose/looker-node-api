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
    instance = new LookerApi31Reference.UserAttributeWithValue();
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

  describe('UserAttributeWithValue', function() {
    it('should create an instance of UserAttributeWithValue', function() {
      // uncomment below and update the code to test UserAttributeWithValue
      //var instance = new LookerApi31Reference.UserAttributeWithValue();
      //expect(instance).to.be.a(LookerApi31Reference.UserAttributeWithValue);
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new LookerApi31Reference.UserAttributeWithValue();
      //expect(instance).to.be();
    });

    it('should have the property label (base name: "label")', function() {
      // uncomment below and update the code to test the property label
      //var instance = new LookerApi31Reference.UserAttributeWithValue();
      //expect(instance).to.be();
    });

    it('should have the property rank (base name: "rank")', function() {
      // uncomment below and update the code to test the property rank
      //var instance = new LookerApi31Reference.UserAttributeWithValue();
      //expect(instance).to.be();
    });

    it('should have the property value (base name: "value")', function() {
      // uncomment below and update the code to test the property value
      //var instance = new LookerApi31Reference.UserAttributeWithValue();
      //expect(instance).to.be();
    });

    it('should have the property userId (base name: "user_id")', function() {
      // uncomment below and update the code to test the property userId
      //var instance = new LookerApi31Reference.UserAttributeWithValue();
      //expect(instance).to.be();
    });

    it('should have the property userCanEdit (base name: "user_can_edit")', function() {
      // uncomment below and update the code to test the property userCanEdit
      //var instance = new LookerApi31Reference.UserAttributeWithValue();
      //expect(instance).to.be();
    });

    it('should have the property valueIsHidden (base name: "value_is_hidden")', function() {
      // uncomment below and update the code to test the property valueIsHidden
      //var instance = new LookerApi31Reference.UserAttributeWithValue();
      //expect(instance).to.be();
    });

    it('should have the property userAttributeId (base name: "user_attribute_id")', function() {
      // uncomment below and update the code to test the property userAttributeId
      //var instance = new LookerApi31Reference.UserAttributeWithValue();
      //expect(instance).to.be();
    });

    it('should have the property source (base name: "source")', function() {
      // uncomment below and update the code to test the property source
      //var instance = new LookerApi31Reference.UserAttributeWithValue();
      //expect(instance).to.be();
    });

    it('should have the property hiddenValueDomainWhitelist (base name: "hidden_value_domain_whitelist")', function() {
      // uncomment below and update the code to test the property hiddenValueDomainWhitelist
      //var instance = new LookerApi31Reference.UserAttributeWithValue();
      //expect(instance).to.be();
    });

    it('should have the property can (base name: "can")', function() {
      // uncomment below and update the code to test the property can
      //var instance = new LookerApi31Reference.UserAttributeWithValue();
      //expect(instance).to.be();
    });

  });

}));