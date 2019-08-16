# LookerApi31Reference.GitBranch

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | The short name on the local. Updating &#x60;name&#x60; results in &#x60;git checkout &lt;new_name&gt;&#x60; | [optional] 
**remote** | **String** | The name of the remote | [optional] 
**remoteName** | **String** | The short name on the remote | [optional] 
**error** | **String** | Name of error | [optional] 
**message** | **String** | Message describing an error if present | [optional] 
**ownerName** | **String** | Name of the owner of a personal branch | [optional] 
**readonly** | **Boolean** | Whether or not this branch is readonly | [optional] 
**personal** | **Boolean** | Whether or not this branch is a personal branch - readonly for all developers except the owner | [optional] 
**isLocal** | **Boolean** | Whether or not a local ref exists for the branch | [optional] 
**isRemote** | **Boolean** | Whether or not a remote ref exists for the branch | [optional] 
**isProduction** | **Boolean** | Whether or not this is the production branch | [optional] 
**aheadCount** | **Number** | Number of commits the local branch is ahead of the remote | [optional] 
**behindCount** | **Number** | Number of commits the local branch is behind the remote | [optional] 
**commitAt** | **Number** | UNIX timestamp at which this branch was last committed. | [optional] 
**ref** | **String** | The resolved ref of this branch. Updating &#x60;ref&#x60; results in &#x60;git reset --hard &lt;new_ref&gt;&#x60;&#x60;. | [optional] 
**remoteRef** | **String** | The resolved ref of this branch remote. | [optional] 
**can** | **{String: Boolean}** | Operations the current user is able to perform on this object | [optional] 


