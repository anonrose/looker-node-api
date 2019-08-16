# LookerApi31Reference.OIDCConfig

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alternateEmailLoginAllowed** | **Boolean** | Allow alternate email-based login via &#39;/login/email&#39; for admins and for specified users with the &#39;login_special_email&#39; permission. This option is useful as a fallback during ldap setup, if ldap config problems occur later, or if you need to support some users who are not in your ldap directory. Looker email/password logins are always disabled for regular users when ldap is enabled. | [optional] 
**audience** | **String** | OpenID Provider Audience | [optional] 
**authRequiresRole** | **Boolean** | Users will not be allowed to login at all unless a role for them is found in OIDC if set to true | [optional] 
**authorizationEndpoint** | **String** | OpenID Provider Authorization Url | [optional] 
**defaultNewUserGroupIds** | **[Number]** | (Write-Only) Array of ids of groups that will be applied to new users the first time they login via OIDC | [optional] 
**defaultNewUserGroups** | [**[Group]**](Group.md) | (Read-only) Groups that will be applied to new users the first time they login via OIDC | [optional] 
**defaultNewUserRoleIds** | **[Number]** | (Write-Only) Array of ids of roles that will be applied to new users the first time they login via OIDC | [optional] 
**defaultNewUserRoles** | [**[Role]**](Role.md) | (Read-only) Roles that will be applied to new users the first time they login via OIDC | [optional] 
**enabled** | **Boolean** | Enable/Disable OIDC authentication for the server | [optional] 
**groups** | [**[OIDCGroupRead]**](OIDCGroupRead.md) | (Read-only) Array of mappings between OIDC Groups and Looker Roles | [optional] 
**groupsAttribute** | **String** | Name of user record attributes used to indicate groups. Used when &#39;groups_finder_type&#39; is set to &#39;grouped_attribute_values&#39; | [optional] 
**groupsWithRoleIds** | [**[OIDCGroupWrite]**](OIDCGroupWrite.md) | (Read/Write) Array of mappings between OIDC Groups and arrays of Looker Role ids | [optional] 
**identifier** | **String** | Relying Party Identifier (provided by OpenID Provider) | [optional] 
**issuer** | **String** | OpenID Provider Issuer | [optional] 
**modifiedAt** | **Date** | When this config was last modified | [optional] 
**modifiedBy** | **Number** | User id of user who last modified this config | [optional] 
**newUserMigrationTypes** | **String** | Merge first-time oidc login to existing user account by email addresses. When a user logs in for the first time via oidc this option will connect this user into their existing account by finding the account with a matching email address by testing the given types of credentials for existing users. Otherwise a new user account will be created for the user. This list (if provided) must be a comma separated list of string like &#39;email,ldap,google&#39; | [optional] 
**scopes** | **[String]** | Array of scopes to request. | [optional] 
**secret** | **String** | (Write-Only) Relying Party Secret (provided by OpenID Provider) | [optional] 
**setRolesFromGroups** | **Boolean** | Set user roles in Looker based on groups from OIDC | [optional] 
**testSlug** | **String** | Slug to identify configurations that are created in order to run a OIDC config test | [optional] 
**tokenEndpoint** | **String** | OpenID Provider Token Url | [optional] 
**userAttributeMapEmail** | **String** | Name of user record attributes used to indicate email address field | [optional] 
**userAttributeMapFirstName** | **String** | Name of user record attributes used to indicate first name | [optional] 
**userAttributeMapLastName** | **String** | Name of user record attributes used to indicate last name | [optional] 
**userAttributes** | [**[OIDCUserAttributeRead]**](OIDCUserAttributeRead.md) | (Read-only) Array of mappings between OIDC User Attributes and Looker User Attributes | [optional] 
**userAttributesWithIds** | [**[OIDCUserAttributeWrite]**](OIDCUserAttributeWrite.md) | (Read/Write) Array of mappings between OIDC User Attributes and arrays of Looker User Attribute ids | [optional] 
**userinfoEndpoint** | **String** | OpenID Provider User Information Url | [optional] 
**url** | **String** | Link to get this item | [optional] 
**can** | **{String: Boolean}** | Operations the current user is able to perform on this object | [optional] 


