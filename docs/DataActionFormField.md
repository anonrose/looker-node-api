# LookerApi31Reference.DataActionFormField

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | Name | [optional] 
**label** | **String** | Human-readable label | [optional] 
**description** | **String** | Description of field | [optional] 
**type** | **String** | Type of field. | [optional] 
**_default** | **String** | Default value of the field. | [optional] 
**oauthUrl** | **String** | The URL for an oauth link, if type is &#39;oauth_link&#39;. | [optional] 
**required** | **Boolean** | Whether or not the field is required. This is a user-interface hint. A user interface displaying this form should not submit it without a value for this field. The action server must also perform this validation. | [optional] 
**options** | [**[DataActionFormSelectOption]**](DataActionFormSelectOption.md) | If the form type is &#39;select&#39;, a list of options to be selected from. | [optional] 


