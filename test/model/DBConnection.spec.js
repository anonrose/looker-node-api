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
    instance = new LookerApi31Reference.DBConnection();
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

  describe('DBConnection', function() {
    it('should create an instance of DBConnection', function() {
      // uncomment below and update the code to test DBConnection
      //var instance = new LookerApi31Reference.DBConnection();
      //expect(instance).to.be.a(LookerApi31Reference.DBConnection);
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new LookerApi31Reference.DBConnection();
      //expect(instance).to.be();
    });

    it('should have the property dialect (base name: "dialect")', function() {
      // uncomment below and update the code to test the property dialect
      //var instance = new LookerApi31Reference.DBConnection();
      //expect(instance).to.be();
    });

    it('should have the property snippets (base name: "snippets")', function() {
      // uncomment below and update the code to test the property snippets
      //var instance = new LookerApi31Reference.DBConnection();
      //expect(instance).to.be();
    });

    it('should have the property host (base name: "host")', function() {
      // uncomment below and update the code to test the property host
      //var instance = new LookerApi31Reference.DBConnection();
      //expect(instance).to.be();
    });

    it('should have the property port (base name: "port")', function() {
      // uncomment below and update the code to test the property port
      //var instance = new LookerApi31Reference.DBConnection();
      //expect(instance).to.be();
    });

    it('should have the property username (base name: "username")', function() {
      // uncomment below and update the code to test the property username
      //var instance = new LookerApi31Reference.DBConnection();
      //expect(instance).to.be();
    });

    it('should have the property password (base name: "password")', function() {
      // uncomment below and update the code to test the property password
      //var instance = new LookerApi31Reference.DBConnection();
      //expect(instance).to.be();
    });

    it('should have the property usesOauth (base name: "uses_oauth")', function() {
      // uncomment below and update the code to test the property usesOauth
      //var instance = new LookerApi31Reference.DBConnection();
      //expect(instance).to.be();
    });

    it('should have the property certificate (base name: "certificate")', function() {
      // uncomment below and update the code to test the property certificate
      //var instance = new LookerApi31Reference.DBConnection();
      //expect(instance).to.be();
    });

    it('should have the property fileType (base name: "file_type")', function() {
      // uncomment below and update the code to test the property fileType
      //var instance = new LookerApi31Reference.DBConnection();
      //expect(instance).to.be();
    });

    it('should have the property database (base name: "database")', function() {
      // uncomment below and update the code to test the property database
      //var instance = new LookerApi31Reference.DBConnection();
      //expect(instance).to.be();
    });

    it('should have the property dbTimezone (base name: "db_timezone")', function() {
      // uncomment below and update the code to test the property dbTimezone
      //var instance = new LookerApi31Reference.DBConnection();
      //expect(instance).to.be();
    });

    it('should have the property queryTimezone (base name: "query_timezone")', function() {
      // uncomment below and update the code to test the property queryTimezone
      //var instance = new LookerApi31Reference.DBConnection();
      //expect(instance).to.be();
    });

    it('should have the property schema (base name: "schema")', function() {
      // uncomment below and update the code to test the property schema
      //var instance = new LookerApi31Reference.DBConnection();
      //expect(instance).to.be();
    });

    it('should have the property maxConnections (base name: "max_connections")', function() {
      // uncomment below and update the code to test the property maxConnections
      //var instance = new LookerApi31Reference.DBConnection();
      //expect(instance).to.be();
    });

    it('should have the property maxBillingGigabytes (base name: "max_billing_gigabytes")', function() {
      // uncomment below and update the code to test the property maxBillingGigabytes
      //var instance = new LookerApi31Reference.DBConnection();
      //expect(instance).to.be();
    });

    it('should have the property ssl (base name: "ssl")', function() {
      // uncomment below and update the code to test the property ssl
      //var instance = new LookerApi31Reference.DBConnection();
      //expect(instance).to.be();
    });

    it('should have the property verifySsl (base name: "verify_ssl")', function() {
      // uncomment below and update the code to test the property verifySsl
      //var instance = new LookerApi31Reference.DBConnection();
      //expect(instance).to.be();
    });

    it('should have the property tmpDbName (base name: "tmp_db_name")', function() {
      // uncomment below and update the code to test the property tmpDbName
      //var instance = new LookerApi31Reference.DBConnection();
      //expect(instance).to.be();
    });

    it('should have the property jdbcAdditionalParams (base name: "jdbc_additional_params")', function() {
      // uncomment below and update the code to test the property jdbcAdditionalParams
      //var instance = new LookerApi31Reference.DBConnection();
      //expect(instance).to.be();
    });

    it('should have the property poolTimeout (base name: "pool_timeout")', function() {
      // uncomment below and update the code to test the property poolTimeout
      //var instance = new LookerApi31Reference.DBConnection();
      //expect(instance).to.be();
    });

    it('should have the property dialectName (base name: "dialect_name")', function() {
      // uncomment below and update the code to test the property dialectName
      //var instance = new LookerApi31Reference.DBConnection();
      //expect(instance).to.be();
    });

    it('should have the property createdAt (base name: "created_at")', function() {
      // uncomment below and update the code to test the property createdAt
      //var instance = new LookerApi31Reference.DBConnection();
      //expect(instance).to.be();
    });

    it('should have the property userId (base name: "user_id")', function() {
      // uncomment below and update the code to test the property userId
      //var instance = new LookerApi31Reference.DBConnection();
      //expect(instance).to.be();
    });

    it('should have the property example (base name: "example")', function() {
      // uncomment below and update the code to test the property example
      //var instance = new LookerApi31Reference.DBConnection();
      //expect(instance).to.be();
    });

    it('should have the property userDbCredentials (base name: "user_db_credentials")', function() {
      // uncomment below and update the code to test the property userDbCredentials
      //var instance = new LookerApi31Reference.DBConnection();
      //expect(instance).to.be();
    });

    it('should have the property userAttributeFields (base name: "user_attribute_fields")', function() {
      // uncomment below and update the code to test the property userAttributeFields
      //var instance = new LookerApi31Reference.DBConnection();
      //expect(instance).to.be();
    });

    it('should have the property maintenanceCron (base name: "maintenance_cron")', function() {
      // uncomment below and update the code to test the property maintenanceCron
      //var instance = new LookerApi31Reference.DBConnection();
      //expect(instance).to.be();
    });

    it('should have the property lastRegenAt (base name: "last_regen_at")', function() {
      // uncomment below and update the code to test the property lastRegenAt
      //var instance = new LookerApi31Reference.DBConnection();
      //expect(instance).to.be();
    });

    it('should have the property lastReapAt (base name: "last_reap_at")', function() {
      // uncomment below and update the code to test the property lastReapAt
      //var instance = new LookerApi31Reference.DBConnection();
      //expect(instance).to.be();
    });

    it('should have the property sqlRunnerPrecacheTables (base name: "sql_runner_precache_tables")', function() {
      // uncomment below and update the code to test the property sqlRunnerPrecacheTables
      //var instance = new LookerApi31Reference.DBConnection();
      //expect(instance).to.be();
    });

    it('should have the property afterConnectStatements (base name: "after_connect_statements")', function() {
      // uncomment below and update the code to test the property afterConnectStatements
      //var instance = new LookerApi31Reference.DBConnection();
      //expect(instance).to.be();
    });

    it('should have the property pdtContextOverride (base name: "pdt_context_override")', function() {
      // uncomment below and update the code to test the property pdtContextOverride
      //var instance = new LookerApi31Reference.DBConnection();
      //expect(instance).to.be();
    });

    it('should have the property can (base name: "can")', function() {
      // uncomment below and update the code to test the property can
      //var instance = new LookerApi31Reference.DBConnection();
      //expect(instance).to.be();
    });

  });

}));
