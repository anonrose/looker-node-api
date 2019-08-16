# LookerApi31Reference.LookmlModel

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allowedDbConnectionNames** | **[String]** | Array of names of connections this model is allowed to use | [optional] 
**explores** | [**[LookmlModelNavExplore]**](LookmlModelNavExplore.md) | Array of explores (if has_content) | [optional] 
**hasContent** | **Boolean** | Does this model declaration have have lookml content? | [optional] 
**label** | **String** | UI-friendly name for this model | [optional] 
**name** | **String** | Name of the model. Also used as the unique identifier | [optional] 
**projectName** | **String** | Name of project containing the model | [optional] 
**unlimitedDbConnections** | **Boolean** | Is this model allowed to use all current and future connections | [optional] 
**can** | **{String: Boolean}** | Operations the current user is able to perform on this object | [optional] 


