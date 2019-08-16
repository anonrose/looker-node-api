# LookerApi31Reference.UserAttributeGroupValue

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | Unique Id of this group-attribute relation | [optional] 
**groupId** | **Number** | Id of group | [optional] 
**userAttributeId** | **Number** | Id of user attribute | [optional] 
**valueIsHidden** | **Boolean** | If true, the \&quot;value\&quot; field will be null, because the attribute settings block access to this value | [optional] 
**rank** | **Number** | Precedence for resolving value for user | [optional] 
**value** | **String** | Value of user attribute for group | [optional] 
**can** | **{String: Boolean}** | Operations the current user is able to perform on this object | [optional] 


