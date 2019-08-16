# LookerApi31Reference.Theme

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**beginAt** | **Date** | Timestamp for when this theme becomes active. Null&#x3D;always | [optional] 
**endAt** | **Date** | Timestamp for when this theme expires. Null&#x3D;never | [optional] 
**id** | **Number** | Unique Id | [optional] 
**name** | **String** | Name of theme. Can only be alphanumeric and underscores. | [optional] 
**settings** | [**ThemeSettings**](ThemeSettings.md) | Hash of name/value pairs for theme settings. These names get validated. | [optional] 
**can** | **{String: Boolean}** | Operations the current user is able to perform on this object | [optional] 


