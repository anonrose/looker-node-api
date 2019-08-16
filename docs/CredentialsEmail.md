# LookerApi31Reference.CredentialsEmail

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**createdAt** | **String** | Timestamp for the creation of this credential | [optional] 
**email** | **String** | EMail address used for user login | [optional] 
**forcedPasswordResetAtNextLogin** | **Boolean** | Force the user to change their password upon their next login | [optional] 
**isDisabled** | **Boolean** | Has this credential been disabled? | [optional] 
**loggedInAt** | **String** | Timestamp for most recent login using credential | [optional] 
**passwordResetUrl** | **String** | Url with one-time use secret token that the user can use to reset password | [optional] 
**type** | **String** | Short name for the type of this kind of credential | [optional] 
**url** | **String** | Link to get this item | [optional] 
**userUrl** | **String** | Link to get this user | [optional] 
**can** | **{String: Boolean}** | Operations the current user is able to perform on this object | [optional] 


