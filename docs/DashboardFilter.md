# LookerApi31Reference.DashboardFilter

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Unique Id | [optional] 
**dashboardId** | **String** | Id of Dashboard | [optional] 
**name** | **String** | Name of filter | 
**title** | **String** | Title of filter | 
**type** | **String** | Type of filter: one of date, number, string, or field | 
**defaultValue** | **String** | Default value of filter | [optional] 
**model** | **String** | Model of filter (required if type &#x3D; field) | [optional] 
**explore** | **String** | Explore of filter (required if type &#x3D; field) | [optional] 
**dimension** | **String** | Dimension of filter (required if type &#x3D; field) | [optional] 
**field** | **{String: String}** | Field information | [optional] 
**row** | **Number** | Display order of this filter relative to other filters | [optional] 
**listensToFilters** | **[String]** | Array of listeners for faceted filters | [optional] 
**allowMultipleValues** | **Boolean** | Whether the filter allows multiple filter values | [optional] 
**required** | **Boolean** | Whether the filter requires a value to run the dashboard | [optional] 
**uiConfig** | **{String: String}** | The visual configuration for this filter. Used to set up how the UI for this filter should appear. | [optional] 
**can** | **{String: Boolean}** | Operations the current user is able to perform on this object | [optional] 


