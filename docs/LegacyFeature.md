# LookerApi31Reference.LegacyFeature

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Unique Id | [optional] 
**name** | **String** | Name | [optional] 
**description** | **String** | Description | [optional] 
**enabledLocally** | **Boolean** | Whether this feature has been enabled by a user | [optional] 
**enabled** | **Boolean** | Whether this feature is currently enabled | [optional] 
**disallowedAsOfVersion** | **String** | Looker version where this feature became a legacy feature | [optional] 
**disableOnUpgradeToVersion** | **String** | Looker version where this feature will be automatically disabled | [optional] 
**endOfLifeVersion** | **String** | Future Looker version where this feature will be removed | [optional] 
**documentationUrl** | **String** | URL for documentation about this feature | [optional] 
**approximateDisableDate** | **Date** | Approximate date that this feature will be automatically disabled. | [optional] 
**approximateEndOfLifeDate** | **Date** | Approximate date that this feature will be removed. | [optional] 
**hasDisabledOnUpgrade** | **Boolean** | Whether this legacy feature may have been automatically disabled when upgrading to the current version. | [optional] 
**can** | **{String: Boolean}** | Operations the current user is able to perform on this object | [optional] 


