# LookerApi31Reference.Integration

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | ID of the integration. | [optional] 
**integrationHubId** | **Number** | ID of the integration hub. | [optional] 
**label** | **String** | Label for the integration. | [optional] 
**description** | **String** | Description of the integration. | [optional] 
**enabled** | **Boolean** | Whether the integration is available to users. | [optional] 
**params** | [**[IntegrationParam]**](IntegrationParam.md) | Array of params for the integration. | [optional] 
**supportedFormats** | **[String]** | A list of data formats the integration supports. If unspecified, this will default to [\&quot;txt\&quot;, \&quot;csv\&quot;, \&quot;inline_json\&quot;, \&quot;json\&quot;, \&quot;json_detail\&quot;, \&quot;json_detail_lite_stream\&quot;, \&quot;xlsx\&quot;, \&quot;html\&quot;, \&quot;wysiwyg_pdf\&quot;, \&quot;assembled_pdf\&quot;, \&quot;wysiwyg_png\&quot;, \&quot;csv_zip\&quot;]. Valid values are: \&quot;txt\&quot;, \&quot;csv\&quot;, \&quot;inline_json\&quot;, \&quot;json\&quot;, \&quot;json_detail\&quot;, \&quot;json_detail_lite_stream\&quot;, \&quot;xlsx\&quot;, \&quot;html\&quot;, \&quot;wysiwyg_pdf\&quot;, \&quot;assembled_pdf\&quot;, \&quot;wysiwyg_png\&quot;, \&quot;csv_zip\&quot;. | [optional] 
**supportedActionTypes** | **[String]** | A list of action types the integration supports. Valid values are: \&quot;cell\&quot;, \&quot;query\&quot;, \&quot;dashboard\&quot;. | [optional] 
**supportedFormattings** | **[String]** | A list of formatting options the integration supports. If unspecified, this will default to [\&quot;formatted\&quot;, \&quot;unformatted\&quot;]. Valid values are: \&quot;formatted\&quot;, \&quot;unformatted\&quot;. | [optional] 
**supportedVisualizationFormattings** | **[String]** | A list of visualization formatting options the integration supports. If unspecified, this will default to [\&quot;apply\&quot;, \&quot;noapply\&quot;]. Valid values are: \&quot;apply\&quot;, \&quot;noapply\&quot;. | [optional] 
**supportedDownloadSettings** | **[String]** | A list of all the download mechanisms the integration supports. The order is undefined: Looker will select the most appropriate supported download mechanism for a given query. The integration must ensure it can handle any of the mechanisms it claims to support. If unspecified, this will default to [\&quot;push\&quot;]. Valid values are: \&quot;push\&quot;, \&quot;url\&quot;. | [optional] 
**iconUrl** | **String** | URL to an icon for the integration. | [optional] 
**usesOauth** | **Boolean** | Whether the integration uses oauth. | [optional] 
**requiredFields** | [**[IntegrationRequiredField]**](IntegrationRequiredField.md) | A list of descriptions of required fields that this integration is compatible with. If there are multiple entries in this list, the integration requires more than one field. If unspecified, no fields will be required. | [optional] 
**can** | **{String: Boolean}** | Operations the current user is able to perform on this object | [optional] 


