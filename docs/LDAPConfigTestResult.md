# LookerApi31Reference.LDAPConfigTestResult

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**details** | **String** | Additional details for error cases | [optional] 
**issues** | [**[LDAPConfigTestIssue]**](LDAPConfigTestIssue.md) | Array of issues/considerations about the result | [optional] 
**message** | **String** | Short human readable test about the result | [optional] 
**status** | **String** | Test status code: always &#39;success&#39; or &#39;error&#39; | [optional] 
**trace** | **String** | A more detailed trace of incremental results during auth tests | [optional] 
**user** | [**LDAPUser**](LDAPUser.md) | User details from LDAP server for auth tests | [optional] 
**url** | **String** | Link to ldap config | [optional] 
**can** | **{String: Boolean}** | Operations the current user is able to perform on this object | [optional] 


