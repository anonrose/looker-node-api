# LookerApi31Reference.Project

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Project Id | [optional] 
**name** | **String** | Project display name | [optional] 
**usesGit** | **Boolean** | If true the project is configured with a git repository | [optional] 
**gitRemoteUrl** | **String** | Git remote repository url | [optional] 
**gitUsername** | **String** | Git username for HTTPS authentication. (For production only, if using user attributes.) | [optional] 
**gitPassword** | **String** | (Write-Only) Git password for HTTPS authentication. (For production only, if using user attributes.) | [optional] 
**gitUsernameUserAttribute** | **String** | User attribute name for username in per-user HTTPS authentication. | [optional] 
**gitPasswordUserAttribute** | **String** | User attribute name for password in per-user HTTPS authentication. | [optional] 
**gitServiceName** | **String** | Name of the git service provider | [optional] 
**deploySecret** | **String** | (Write-Only) Optional secret token with which to authenticate requests to the webhook deploy endpoint. If not set, endpoint is unauthenticated. | [optional] 
**unsetDeploySecret** | **Boolean** | (Write-Only) When true, unsets the deploy secret to allow unauthenticated access to the webhook deploy endpoint. | [optional] 
**pullRequestMode** | **String** | The git pull request policy for this project. Valid values are: \&quot;off\&quot;, \&quot;links\&quot;, \&quot;recommended\&quot;, \&quot;required\&quot;. | [optional] 
**validationRequired** | **Boolean** | Validation policy: If true, the project must pass validation checks before project changes can be committed to the git repository | [optional] 
**foldersEnabled** | **Boolean** | If true, folders are enabled for this project | [optional] 
**allowWarnings** | **Boolean** | Validation policy: If true, the project can be committed with warnings when &#x60;validation_required&#x60; is true. (&#x60;allow_warnings&#x60; does nothing if &#x60;validation_required&#x60; is false). | [optional] 
**isExample** | **Boolean** | If true the project is an example project and cannot be modified | [optional] 
**can** | **{String: Boolean}** | Operations the current user is able to perform on this object | [optional] 


