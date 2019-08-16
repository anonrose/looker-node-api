# LookerApi31Reference.ContentMeta

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | Unique Id | [optional] 
**name** | **String** | Name or title of underlying content | [optional] 
**parentId** | **Number** | Id of Parent Content | [optional] 
**spaceId** | **String** | Id of associated space when content_type is \&quot;space\&quot; | [optional] 
**dashboardId** | **String** | Id of associated dashboard when content_type is \&quot;dashboard\&quot; | [optional] 
**lookId** | **Number** | Id of associated look when content_type is \&quot;look\&quot; | [optional] 
**contentType** | **String** | Content Type (\&quot;dashboard\&quot;, \&quot;look\&quot;, or \&quot;space\&quot;) | [optional] 
**inherits** | **Boolean** | Whether content inherits its access levels from parent | [optional] 
**inheritingId** | **Number** | Id of Inherited Content | [optional] 
**slug** | **String** | Content Slug | [optional] 
**can** | **{String: Boolean}** | Operations the current user is able to perform on this object | [optional] 


