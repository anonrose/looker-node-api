# LookerApi31Reference.SessionConfig

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allowPersistentSessions** | **Boolean** | Allow users to have persistent sessions when they login | [optional] 
**sessionMinutes** | **Number** | Number of minutes for user sessions.  Must be between 5 and 43200 | [optional] 
**unlimitedSessionsPerUser** | **Boolean** | Allow users to have an unbounded number of concurrent sessions (otherwise, users will be limited to only one session at a time). | [optional] 
**useInactivityBasedLogout** | **Boolean** | Enforce session logout for sessions that are inactive for 15 minutes. | [optional] 
**can** | **{String: Boolean}** | Operations the current user is able to perform on this object | [optional] 


