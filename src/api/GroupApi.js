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
    define(['ApiClient', 'model/Error', 'model/Group', 'model/GroupIdForGroupInclusion', 'model/GroupIdForGroupUserInclusion', 'model/User', 'model/UserAttributeGroupValue', 'model/ValidationError'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Error'), require('../model/Group'), require('../model/GroupIdForGroupInclusion'), require('../model/GroupIdForGroupUserInclusion'), require('../model/User'), require('../model/UserAttributeGroupValue'), require('../model/ValidationError'));
  } else {
    // Browser globals (root is window)
    if (!root.LookerApi31Reference) {
      root.LookerApi31Reference = {};
    }
    root.LookerApi31Reference.GroupApi = factory(root.LookerApi31Reference.ApiClient, root.LookerApi31Reference.Error, root.LookerApi31Reference.Group, root.LookerApi31Reference.GroupIdForGroupInclusion, root.LookerApi31Reference.GroupIdForGroupUserInclusion, root.LookerApi31Reference.User, root.LookerApi31Reference.UserAttributeGroupValue, root.LookerApi31Reference.ValidationError);
  }
}(this, function(ApiClient, Error, Group, GroupIdForGroupInclusion, GroupIdForGroupUserInclusion, User, UserAttributeGroupValue, ValidationError) {
  'use strict';

  /**
   * Group service.
   * @module api/GroupApi
   * @version 3.1.0
   */

  /**
   * Constructs a new GroupApi.
   * @alias module:api/GroupApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addGroupGroup operation.
     * @callback module:api/GroupApi~addGroupGroupCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Group} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add a Group to Group
     * ### Adds a new group to a group.
     * @param {Number} groupId Id of group
     * @param {Object} opts Optional parameters
     * @param {module:model/GroupIdForGroupInclusion} opts.body Group id to add
     * @param {module:api/GroupApi~addGroupGroupCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Group}
     */
    this.addGroupGroup = function(groupId, opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];

      // verify the required parameter 'groupId' is set
      if (groupId === undefined || groupId === null) {
        throw new Error("Missing the required parameter 'groupId' when calling addGroupGroup");
      }


      var pathParams = {
        'group_id': groupId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Group;

      return this.apiClient.callApi(
        '/groups/{group_id}/groups', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addGroupUser operation.
     * @callback module:api/GroupApi~addGroupUserCallback
     * @param {String} error Error message, if any.
     * @param {module:model/User} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add a User to Group
     * ### Adds a new user to a group.
     * @param {Number} groupId Id of group
     * @param {Object} opts Optional parameters
     * @param {module:model/GroupIdForGroupUserInclusion} opts.body User id to add
     * @param {module:api/GroupApi~addGroupUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/User}
     */
    this.addGroupUser = function(groupId, opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];

      // verify the required parameter 'groupId' is set
      if (groupId === undefined || groupId === null) {
        throw new Error("Missing the required parameter 'groupId' when calling addGroupUser");
      }


      var pathParams = {
        'group_id': groupId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = User;

      return this.apiClient.callApi(
        '/groups/{group_id}/users', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the allGroupGroups operation.
     * @callback module:api/GroupApi~allGroupGroupsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Group>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get All Groups in Group
     * ### Get information about all the groups in a group
     * @param {Number} groupId Id of group
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields Requested fields.
     * @param {module:api/GroupApi~allGroupGroupsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Group>}
     */
    this.allGroupGroups = function(groupId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'groupId' is set
      if (groupId === undefined || groupId === null) {
        throw new Error("Missing the required parameter 'groupId' when calling allGroupGroups");
      }


      var pathParams = {
        'group_id': groupId
      };
      var queryParams = {
        'fields': opts['fields'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [Group];

      return this.apiClient.callApi(
        '/groups/{group_id}/groups', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the allGroupUsers operation.
     * @callback module:api/GroupApi~allGroupUsersCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/User>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get All Users in Group
     * ### Get information about all the users directly included in a group.
     * @param {Number} groupId Id of group
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields Requested fields.
     * @param {Number} opts.page Requested page.
     * @param {Number} opts.perPage Results per page.
     * @param {String} opts.sorts Fields to sort by.
     * @param {module:api/GroupApi~allGroupUsersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/User>}
     */
    this.allGroupUsers = function(groupId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'groupId' is set
      if (groupId === undefined || groupId === null) {
        throw new Error("Missing the required parameter 'groupId' when calling allGroupUsers");
      }


      var pathParams = {
        'group_id': groupId
      };
      var queryParams = {
        'fields': opts['fields'],
        'page': opts['page'],
        'per_page': opts['perPage'],
        'sorts': opts['sorts'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [User];

      return this.apiClient.callApi(
        '/groups/{group_id}/users', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the allGroups operation.
     * @callback module:api/GroupApi~allGroupsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Group>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get All Groups
     * ### Get information about all groups.
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields Requested fields.
     * @param {Number} opts.page Requested page.
     * @param {Number} opts.perPage Results per page.
     * @param {String} opts.sorts Fields to sort by.
     * @param {Array.<Number>} opts.ids Optional of ids to get specific groups.
     * @param {Number} opts.contentMetadataId Id of content metadata to which groups must have access.
     * @param {Boolean} opts.canAddToContentMetadata Select only groups that either can/cannot be given access to content.
     * @param {module:api/GroupApi~allGroupsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Group>}
     */
    this.allGroups = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'fields': opts['fields'],
        'page': opts['page'],
        'per_page': opts['perPage'],
        'sorts': opts['sorts'],
        'content_metadata_id': opts['contentMetadataId'],
        'can_add_to_content_metadata': opts['canAddToContentMetadata'],
      };
      var collectionQueryParams = {
        'ids': {
          value: opts['ids'],
          collectionFormat: 'csv'
        },
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [Group];

      return this.apiClient.callApi(
        '/groups', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the createGroup operation.
     * @callback module:api/GroupApi~createGroupCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Group} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create Group
     * ### Creates a new group (admin only).
     * @param {Object} opts Optional parameters
     * @param {module:model/Group} opts.body Group
     * @param {String} opts.fields Requested fields.
     * @param {module:api/GroupApi~createGroupCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Group}
     */
    this.createGroup = function(opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];


      var pathParams = {
      };
      var queryParams = {
        'fields': opts['fields'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Group;

      return this.apiClient.callApi(
        '/groups', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteGroup operation.
     * @callback module:api/GroupApi~deleteGroupCallback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete Group
     * ### Deletes a group (admin only).
     * @param {Number} groupId Id of group
     * @param {module:api/GroupApi~deleteGroupCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'String'}
     */
    this.deleteGroup = function(groupId, callback) {
      var postBody = null;

      // verify the required parameter 'groupId' is set
      if (groupId === undefined || groupId === null) {
        throw new Error("Missing the required parameter 'groupId' when calling deleteGroup");
      }


      var pathParams = {
        'group_id': groupId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = 'String';

      return this.apiClient.callApi(
        '/groups/{group_id}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteGroupFromGroup operation.
     * @callback module:api/GroupApi~deleteGroupFromGroupCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deletes a Group from Group
     * ### Removes a group from a group.
     * @param {Number} groupId Id of group
     * @param {Number} deletingGroupId Id of group to delete
     * @param {module:api/GroupApi~deleteGroupFromGroupCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteGroupFromGroup = function(groupId, deletingGroupId, callback) {
      var postBody = null;

      // verify the required parameter 'groupId' is set
      if (groupId === undefined || groupId === null) {
        throw new Error("Missing the required parameter 'groupId' when calling deleteGroupFromGroup");
      }

      // verify the required parameter 'deletingGroupId' is set
      if (deletingGroupId === undefined || deletingGroupId === null) {
        throw new Error("Missing the required parameter 'deletingGroupId' when calling deleteGroupFromGroup");
      }


      var pathParams = {
        'group_id': groupId,
        'deleting_group_id': deletingGroupId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/groups/{group_id}/groups/{deleting_group_id}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteGroupUser operation.
     * @callback module:api/GroupApi~deleteGroupUserCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Remove a User from Group
     * ### Removes a user from a group.
     * @param {Number} groupId Id of group
     * @param {Number} userId Id of user to remove from group
     * @param {module:api/GroupApi~deleteGroupUserCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteGroupUser = function(groupId, userId, callback) {
      var postBody = null;

      // verify the required parameter 'groupId' is set
      if (groupId === undefined || groupId === null) {
        throw new Error("Missing the required parameter 'groupId' when calling deleteGroupUser");
      }

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling deleteGroupUser");
      }


      var pathParams = {
        'group_id': groupId,
        'user_id': userId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/groups/{group_id}/users/{user_id}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteUserAttributeGroupValue operation.
     * @callback module:api/GroupApi~deleteUserAttributeGroupValueCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete User Attribute Group Value
     * ### Remove a user attribute value from a group.
     * @param {Number} groupId Id of group
     * @param {Number} userAttributeId Id of user attribute
     * @param {module:api/GroupApi~deleteUserAttributeGroupValueCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteUserAttributeGroupValue = function(groupId, userAttributeId, callback) {
      var postBody = null;

      // verify the required parameter 'groupId' is set
      if (groupId === undefined || groupId === null) {
        throw new Error("Missing the required parameter 'groupId' when calling deleteUserAttributeGroupValue");
      }

      // verify the required parameter 'userAttributeId' is set
      if (userAttributeId === undefined || userAttributeId === null) {
        throw new Error("Missing the required parameter 'userAttributeId' when calling deleteUserAttributeGroupValue");
      }


      var pathParams = {
        'group_id': groupId,
        'user_attribute_id': userAttributeId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/groups/{group_id}/attribute_values/{user_attribute_id}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the group operation.
     * @callback module:api/GroupApi~groupCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Group} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Group
     * ### Get information about a group.
     * @param {Number} groupId Id of group
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields Requested fields.
     * @param {module:api/GroupApi~groupCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Group}
     */
    this.group = function(groupId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'groupId' is set
      if (groupId === undefined || groupId === null) {
        throw new Error("Missing the required parameter 'groupId' when calling group");
      }


      var pathParams = {
        'group_id': groupId
      };
      var queryParams = {
        'fields': opts['fields'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Group;

      return this.apiClient.callApi(
        '/groups/{group_id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateGroup operation.
     * @callback module:api/GroupApi~updateGroupCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Group} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update Group
     * ### Updates the a group (admin only).
     * @param {Number} groupId Id of group
     * @param {module:model/Group} body Group
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields Requested fields.
     * @param {module:api/GroupApi~updateGroupCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Group}
     */
    this.updateGroup = function(groupId, body, opts, callback) {
      opts = opts || {};
      var postBody = body;

      // verify the required parameter 'groupId' is set
      if (groupId === undefined || groupId === null) {
        throw new Error("Missing the required parameter 'groupId' when calling updateGroup");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateGroup");
      }


      var pathParams = {
        'group_id': groupId
      };
      var queryParams = {
        'fields': opts['fields'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Group;

      return this.apiClient.callApi(
        '/groups/{group_id}', 'PATCH',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateUserAttributeGroupValue operation.
     * @callback module:api/GroupApi~updateUserAttributeGroupValueCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UserAttributeGroupValue} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Set User Attribute Group Value
     * ### Set the value of a user attribute for a group.  For information about how user attribute values are calculated, see [Set User Attribute Group Values](#!/UserAttribute/set_user_attribute_group_values).
     * @param {Number} groupId Id of group
     * @param {Number} userAttributeId Id of user attribute
     * @param {module:model/UserAttributeGroupValue} body New value for group.
     * @param {module:api/GroupApi~updateUserAttributeGroupValueCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UserAttributeGroupValue}
     */
    this.updateUserAttributeGroupValue = function(groupId, userAttributeId, body, callback) {
      var postBody = body;

      // verify the required parameter 'groupId' is set
      if (groupId === undefined || groupId === null) {
        throw new Error("Missing the required parameter 'groupId' when calling updateUserAttributeGroupValue");
      }

      // verify the required parameter 'userAttributeId' is set
      if (userAttributeId === undefined || userAttributeId === null) {
        throw new Error("Missing the required parameter 'userAttributeId' when calling updateUserAttributeGroupValue");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateUserAttributeGroupValue");
      }


      var pathParams = {
        'group_id': groupId,
        'user_attribute_id': userAttributeId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = UserAttributeGroupValue;

      return this.apiClient.callApi(
        '/groups/{group_id}/attribute_values/{user_attribute_id}', 'PATCH',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
