# LookerApi31Reference.Datagroup

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**createdAt** | **Number** | UNIX timestamp at which this entry was created. | [optional] 
**id** | **Number** | ID of the datagroup. Also used as the unique identifier. | [optional] 
**modelName** | **String** | Name of the model containing the datagroup. Unique when combined with name. | [optional] 
**name** | **String** | Name of the datagroup. Unique when combined with model_name. | [optional] 
**staleBefore** | **Number** | UNIX timestamp before which cache entries are considered stale. Cannot be in the future. | [optional] 
**triggerCheckAt** | **Number** | UNIX timestamp at which this entry trigger was last checked. | [optional] 
**triggerError** | **String** | The message returned with the error of the last trigger check. | [optional] 
**triggerValue** | **String** | The value of the trigger when last checked. | [optional] 
**triggeredAt** | **Number** | UNIX timestamp at which this entry became triggered. Cannot be in the future. | [optional] 
**can** | **{String: Boolean}** | Operations the current user is able to perform on this object | [optional] 


