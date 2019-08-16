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
    instance = new LookerApi31Reference.Dashboard();
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

  describe('Dashboard', function() {
    it('should create an instance of Dashboard', function() {
      // uncomment below and update the code to test Dashboard
      //var instance = new LookerApi31Reference.Dashboard();
      //expect(instance).to.be.a(LookerApi31Reference.Dashboard);
    });

    it('should have the property contentFavoriteId (base name: "content_favorite_id")', function() {
      // uncomment below and update the code to test the property contentFavoriteId
      //var instance = new LookerApi31Reference.Dashboard();
      //expect(instance).to.be();
    });

    it('should have the property contentMetadataId (base name: "content_metadata_id")', function() {
      // uncomment below and update the code to test the property contentMetadataId
      //var instance = new LookerApi31Reference.Dashboard();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new LookerApi31Reference.Dashboard();
      //expect(instance).to.be();
    });

    it('should have the property hidden (base name: "hidden")', function() {
      // uncomment below and update the code to test the property hidden
      //var instance = new LookerApi31Reference.Dashboard();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new LookerApi31Reference.Dashboard();
      //expect(instance).to.be();
    });

    it('should have the property model (base name: "model")', function() {
      // uncomment below and update the code to test the property model
      //var instance = new LookerApi31Reference.Dashboard();
      //expect(instance).to.be();
    });

    it('should have the property queryTimezone (base name: "query_timezone")', function() {
      // uncomment below and update the code to test the property queryTimezone
      //var instance = new LookerApi31Reference.Dashboard();
      //expect(instance).to.be();
    });

    it('should have the property readonly (base name: "readonly")', function() {
      // uncomment below and update the code to test the property readonly
      //var instance = new LookerApi31Reference.Dashboard();
      //expect(instance).to.be();
    });

    it('should have the property refreshInterval (base name: "refresh_interval")', function() {
      // uncomment below and update the code to test the property refreshInterval
      //var instance = new LookerApi31Reference.Dashboard();
      //expect(instance).to.be();
    });

    it('should have the property refreshIntervalToI (base name: "refresh_interval_to_i")', function() {
      // uncomment below and update the code to test the property refreshIntervalToI
      //var instance = new LookerApi31Reference.Dashboard();
      //expect(instance).to.be();
    });

    it('should have the property space (base name: "space")', function() {
      // uncomment below and update the code to test the property space
      //var instance = new LookerApi31Reference.Dashboard();
      //expect(instance).to.be();
    });

    it('should have the property title (base name: "title")', function() {
      // uncomment below and update the code to test the property title
      //var instance = new LookerApi31Reference.Dashboard();
      //expect(instance).to.be();
    });

    it('should have the property userId (base name: "user_id")', function() {
      // uncomment below and update the code to test the property userId
      //var instance = new LookerApi31Reference.Dashboard();
      //expect(instance).to.be();
    });

    it('should have the property backgroundColor (base name: "background_color")', function() {
      // uncomment below and update the code to test the property backgroundColor
      //var instance = new LookerApi31Reference.Dashboard();
      //expect(instance).to.be();
    });

    it('should have the property createdAt (base name: "created_at")', function() {
      // uncomment below and update the code to test the property createdAt
      //var instance = new LookerApi31Reference.Dashboard();
      //expect(instance).to.be();
    });

    it('should have the property dashboardElements (base name: "dashboard_elements")', function() {
      // uncomment below and update the code to test the property dashboardElements
      //var instance = new LookerApi31Reference.Dashboard();
      //expect(instance).to.be();
    });

    it('should have the property dashboardFilters (base name: "dashboard_filters")', function() {
      // uncomment below and update the code to test the property dashboardFilters
      //var instance = new LookerApi31Reference.Dashboard();
      //expect(instance).to.be();
    });

    it('should have the property dashboardLayouts (base name: "dashboard_layouts")', function() {
      // uncomment below and update the code to test the property dashboardLayouts
      //var instance = new LookerApi31Reference.Dashboard();
      //expect(instance).to.be();
    });

    it('should have the property deleted (base name: "deleted")', function() {
      // uncomment below and update the code to test the property deleted
      //var instance = new LookerApi31Reference.Dashboard();
      //expect(instance).to.be();
    });

    it('should have the property deletedAt (base name: "deleted_at")', function() {
      // uncomment below and update the code to test the property deletedAt
      //var instance = new LookerApi31Reference.Dashboard();
      //expect(instance).to.be();
    });

    it('should have the property deleterId (base name: "deleter_id")', function() {
      // uncomment below and update the code to test the property deleterId
      //var instance = new LookerApi31Reference.Dashboard();
      //expect(instance).to.be();
    });

    it('should have the property editUri (base name: "edit_uri")', function() {
      // uncomment below and update the code to test the property editUri
      //var instance = new LookerApi31Reference.Dashboard();
      //expect(instance).to.be();
    });

    it('should have the property favoriteCount (base name: "favorite_count")', function() {
      // uncomment below and update the code to test the property favoriteCount
      //var instance = new LookerApi31Reference.Dashboard();
      //expect(instance).to.be();
    });

    it('should have the property lastAccessedAt (base name: "last_accessed_at")', function() {
      // uncomment below and update the code to test the property lastAccessedAt
      //var instance = new LookerApi31Reference.Dashboard();
      //expect(instance).to.be();
    });

    it('should have the property lastViewedAt (base name: "last_viewed_at")', function() {
      // uncomment below and update the code to test the property lastViewedAt
      //var instance = new LookerApi31Reference.Dashboard();
      //expect(instance).to.be();
    });

    it('should have the property loadConfiguration (base name: "load_configuration")', function() {
      // uncomment below and update the code to test the property loadConfiguration
      //var instance = new LookerApi31Reference.Dashboard();
      //expect(instance).to.be();
    });

    it('should have the property lookmlLinkId (base name: "lookml_link_id")', function() {
      // uncomment below and update the code to test the property lookmlLinkId
      //var instance = new LookerApi31Reference.Dashboard();
      //expect(instance).to.be();
    });

    it('should have the property showFiltersBar (base name: "show_filters_bar")', function() {
      // uncomment below and update the code to test the property showFiltersBar
      //var instance = new LookerApi31Reference.Dashboard();
      //expect(instance).to.be();
    });

    it('should have the property showTitle (base name: "show_title")', function() {
      // uncomment below and update the code to test the property showTitle
      //var instance = new LookerApi31Reference.Dashboard();
      //expect(instance).to.be();
    });

    it('should have the property slug (base name: "slug")', function() {
      // uncomment below and update the code to test the property slug
      //var instance = new LookerApi31Reference.Dashboard();
      //expect(instance).to.be();
    });

    it('should have the property spaceId (base name: "space_id")', function() {
      // uncomment below and update the code to test the property spaceId
      //var instance = new LookerApi31Reference.Dashboard();
      //expect(instance).to.be();
    });

    it('should have the property textTileTextColor (base name: "text_tile_text_color")', function() {
      // uncomment below and update the code to test the property textTileTextColor
      //var instance = new LookerApi31Reference.Dashboard();
      //expect(instance).to.be();
    });

    it('should have the property tileBackgroundColor (base name: "tile_background_color")', function() {
      // uncomment below and update the code to test the property tileBackgroundColor
      //var instance = new LookerApi31Reference.Dashboard();
      //expect(instance).to.be();
    });

    it('should have the property tileTextColor (base name: "tile_text_color")', function() {
      // uncomment below and update the code to test the property tileTextColor
      //var instance = new LookerApi31Reference.Dashboard();
      //expect(instance).to.be();
    });

    it('should have the property titleColor (base name: "title_color")', function() {
      // uncomment below and update the code to test the property titleColor
      //var instance = new LookerApi31Reference.Dashboard();
      //expect(instance).to.be();
    });

    it('should have the property viewCount (base name: "view_count")', function() {
      // uncomment below and update the code to test the property viewCount
      //var instance = new LookerApi31Reference.Dashboard();
      //expect(instance).to.be();
    });

    it('should have the property can (base name: "can")', function() {
      // uncomment below and update the code to test the property can
      //var instance = new LookerApi31Reference.Dashboard();
      //expect(instance).to.be();
    });

  });

}));
