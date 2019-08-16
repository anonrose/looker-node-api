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
    instance = new LookerApi31Reference.AuthApi();
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

  describe('AuthApi', function() {
    describe('createOidcTestConfig', function() {
      it('should call createOidcTestConfig successfully', function(done) {
        //uncomment below and update the code to test createOidcTestConfig
        //instance.createOidcTestConfig(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createSamlTestConfig', function() {
      it('should call createSamlTestConfig successfully', function(done) {
        //uncomment below and update the code to test createSamlTestConfig
        //instance.createSamlTestConfig(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteOidcTestConfig', function() {
      it('should call deleteOidcTestConfig successfully', function(done) {
        //uncomment below and update the code to test deleteOidcTestConfig
        //instance.deleteOidcTestConfig(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteSamlTestConfig', function() {
      it('should call deleteSamlTestConfig successfully', function(done) {
        //uncomment below and update the code to test deleteSamlTestConfig
        //instance.deleteSamlTestConfig(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('fetchAndParseSamlIdpMetadata', function() {
      it('should call fetchAndParseSamlIdpMetadata successfully', function(done) {
        //uncomment below and update the code to test fetchAndParseSamlIdpMetadata
        //instance.fetchAndParseSamlIdpMetadata(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('forcePasswordResetAtNextLoginForAllUsers', function() {
      it('should call forcePasswordResetAtNextLoginForAllUsers successfully', function(done) {
        //uncomment below and update the code to test forcePasswordResetAtNextLoginForAllUsers
        //instance.forcePasswordResetAtNextLoginForAllUsers(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('ldapConfig', function() {
      it('should call ldapConfig successfully', function(done) {
        //uncomment below and update the code to test ldapConfig
        //instance.ldapConfig(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('oidcConfig', function() {
      it('should call oidcConfig successfully', function(done) {
        //uncomment below and update the code to test oidcConfig
        //instance.oidcConfig(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('oidcTestConfig', function() {
      it('should call oidcTestConfig successfully', function(done) {
        //uncomment below and update the code to test oidcTestConfig
        //instance.oidcTestConfig(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('parseSamlIdpMetadata', function() {
      it('should call parseSamlIdpMetadata successfully', function(done) {
        //uncomment below and update the code to test parseSamlIdpMetadata
        //instance.parseSamlIdpMetadata(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('passwordConfig', function() {
      it('should call passwordConfig successfully', function(done) {
        //uncomment below and update the code to test passwordConfig
        //instance.passwordConfig(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('samlConfig', function() {
      it('should call samlConfig successfully', function(done) {
        //uncomment below and update the code to test samlConfig
        //instance.samlConfig(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('samlTestConfig', function() {
      it('should call samlTestConfig successfully', function(done) {
        //uncomment below and update the code to test samlTestConfig
        //instance.samlTestConfig(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('sessionConfig', function() {
      it('should call sessionConfig successfully', function(done) {
        //uncomment below and update the code to test sessionConfig
        //instance.sessionConfig(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('testLdapConfigAuth', function() {
      it('should call testLdapConfigAuth successfully', function(done) {
        //uncomment below and update the code to test testLdapConfigAuth
        //instance.testLdapConfigAuth(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('testLdapConfigConnection', function() {
      it('should call testLdapConfigConnection successfully', function(done) {
        //uncomment below and update the code to test testLdapConfigConnection
        //instance.testLdapConfigConnection(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('testLdapConfigUserAuth', function() {
      it('should call testLdapConfigUserAuth successfully', function(done) {
        //uncomment below and update the code to test testLdapConfigUserAuth
        //instance.testLdapConfigUserAuth(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('testLdapConfigUserInfo', function() {
      it('should call testLdapConfigUserInfo successfully', function(done) {
        //uncomment below and update the code to test testLdapConfigUserInfo
        //instance.testLdapConfigUserInfo(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateLdapConfig', function() {
      it('should call updateLdapConfig successfully', function(done) {
        //uncomment below and update the code to test updateLdapConfig
        //instance.updateLdapConfig(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateOidcConfig', function() {
      it('should call updateOidcConfig successfully', function(done) {
        //uncomment below and update the code to test updateOidcConfig
        //instance.updateOidcConfig(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updatePasswordConfig', function() {
      it('should call updatePasswordConfig successfully', function(done) {
        //uncomment below and update the code to test updatePasswordConfig
        //instance.updatePasswordConfig(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateSamlConfig', function() {
      it('should call updateSamlConfig successfully', function(done) {
        //uncomment below and update the code to test updateSamlConfig
        //instance.updateSamlConfig(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateSessionConfig', function() {
      it('should call updateSessionConfig successfully', function(done) {
        //uncomment below and update the code to test updateSessionConfig
        //instance.updateSessionConfig(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
