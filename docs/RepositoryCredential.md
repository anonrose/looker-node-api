# LookerApi31Reference.RepositoryCredential

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Unique Id | [optional] 
**rootProjectId** | **String** | Root project Id | [optional] 
**remoteUrl** | **String** | Git remote repository url | [optional] 
**gitUsername** | **String** | Git username for HTTPS authentication. | [optional] 
**gitPassword** | **String** | (Write-Only) Git password for HTTPS authentication. | [optional] 
**sshPublicKey** | **String** | Public deploy key for SSH authentication. | [optional] 
**isConfigured** | **Boolean** | Whether the credentials have been configured for the Git Repository. | [optional] 
**can** | **{String: Boolean}** | Operations the current user is able to perform on this object | [optional] 


