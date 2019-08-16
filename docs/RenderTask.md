# LookerApi31Reference.RenderTask

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**createdAt** | **String** | Date/Time render task was created | [optional] 
**dashboardFilters** | **String** | Filter values to apply to the dashboard queries, in URL query format | [optional] 
**dashboardId** | **Number** | Id of dashboard to render | [optional] 
**dashboardStyle** | **String** | Dashboard layout style: single_column or tiled | [optional] 
**finalizedAt** | **String** | Date/Time render task was completed | [optional] 
**height** | **Number** | Output height in pixels. Flowed layouts may ignore this value. | [optional] 
**id** | **String** | Id of this render task | [optional] 
**lookId** | **Number** | Id of look to render | [optional] 
**lookmlDashboardId** | **String** | Id of lookml dashboard to render | [optional] 
**queryId** | **Number** | Id of query to render | [optional] 
**queryRuntime** | **Number** | Number of seconds elapsed running queries | [optional] 
**renderRuntime** | **Number** | Number of seconds elapsed rendering data | [optional] 
**resultFormat** | **String** | Output format: pdf, png, or jpg | [optional] 
**runtime** | **Number** | Total seconds elapsed for render task | [optional] 
**status** | **String** | Render task status: enqueued_for_query, querying, enqueued_for_render, rendering, success, failure | [optional] 
**statusDetail** | **String** | Additional information about the current status | [optional] 
**userId** | **Number** | The user account permissions in which the render task will execute | [optional] 
**width** | **Number** | Output width in pixels | [optional] 
**can** | **{String: Boolean}** | Operations the current user is able to perform on this object | [optional] 


