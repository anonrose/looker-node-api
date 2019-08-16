# LookerApi31Reference.Query

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | Unique Id | [optional] 
**model** | **String** | Model | 
**view** | **String** | Explore Name | 
**fields** | **[String]** | Fields | [optional] 
**pivots** | **[String]** | Pivots | [optional] 
**fillFields** | **[String]** | Fill Fields | [optional] 
**filters** | **{String: String}** | Filters | [optional] 
**filterExpression** | **String** | Filter Expression | [optional] 
**sorts** | **[String]** | Sorting for the query results. Use the format &#x60;[\&quot;view.field\&quot;, ...]&#x60; to sort on fields in ascending order. Use the format &#x60;[\&quot;view.field desc\&quot;, ...]&#x60; to sort on fields in descending order. Use &#x60;[\&quot;__UNSORTED__\&quot;]&#x60; (2 underscores before and after) to disable sorting entirely. Empty sorts &#x60;[]&#x60; will trigger a default sort. | [optional] 
**limit** | **String** | Limit | [optional] 
**columnLimit** | **String** | Column Limit | [optional] 
**total** | **Boolean** | Total | [optional] 
**rowTotal** | **String** | Raw Total | [optional] 
**subtotals** | **[String]** | Fields on which to run subtotals | [optional] 
**runtime** | **Number** | Runtime | [optional] 
**visConfig** | **{String: String}** | Visualization configuration properties. These properties are typically opaque and differ based on the type of visualization used. There is no specified set of allowed keys. The values can be any type supported by JSON. A \&quot;type\&quot; key with a string value is often present, and is used by Looker to determine which visualization to present. Visualizations ignore unknown vis_config properties. | [optional] 
**filterConfig** | **{String: String}** | The filter_config represents the state of the filter UI on the explore page for a given query. When running a query via the Looker UI, this parameter takes precedence over \&quot;filters\&quot;. When creating a query or modifying an existing query, \&quot;filter_config\&quot; should be set to null. Setting it to any other value could cause unexpected filtering behavior. The format should be considered opaque. | [optional] 
**visibleUiSections** | **String** | Visible UI Sections | [optional] 
**slug** | **String** | Slug | [optional] 
**dynamicFields** | **String** | Dynamic Fields | [optional] 
**clientId** | **String** | Client Id: used to generate shortened explore URLs. If set by client, must be a unique 22 character alphanumeric string. Otherwise one will be generated. | [optional] 
**shareUrl** | **String** | Share Url | [optional] 
**expandedShareUrl** | **String** | Expanded Share Url | [optional] 
**url** | **String** | Expanded Url | [optional] 
**queryTimezone** | **String** | Query Timezone | [optional] 
**hasTableCalculations** | **Boolean** | Has Table Calculations | [optional] 
**can** | **{String: Boolean}** | Operations the current user is able to perform on this object | [optional] 


