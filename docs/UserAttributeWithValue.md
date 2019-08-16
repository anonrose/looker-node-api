# LookerApi31Reference.UserAttributeWithValue

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | Name of user attribute | [optional] 
**label** | **String** | Human-friendly label for user attribute | [optional] 
**rank** | **Number** | Precedence for setting value on user (lowest wins) | [optional] 
**value** | **String** | Value of attribute for user | [optional] 
**userId** | **Number** | Id of User | [optional] 
**userCanEdit** | **Boolean** | Can the user set this value | [optional] 
**valueIsHidden** | **Boolean** | If true, the \&quot;value\&quot; field will be null, because the attribute settings block access to this value | [optional] 
**userAttributeId** | **Number** | Id of User Attribute | [optional] 
**source** | **String** | How user got this value for this attribute | [optional] 
**hiddenValueDomainWhitelist** | **String** | If this user attribute is hidden, whitelist of destinations to which it may be sent. | [optional] 
**can** | **{String: Boolean}** | Operations the current user is able to perform on this object | [optional] 


