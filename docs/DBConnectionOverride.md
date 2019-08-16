# LookerApi31Reference.DBConnectionOverride

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**context** | **String** | Context in which to override (&#x60;pdt&#x60; is the only allowed value) | [optional] 
**host** | **String** | Host name/address of server | [optional] 
**port** | **String** | Port number on server | [optional] 
**username** | **String** | Username for server authentication | [optional] 
**password** | **String** | (Write-Only) Password for server authentication | [optional] 
**hasPassword** | **Boolean** | Whether or not the password is overridden in this context | [optional] 
**certificate** | **String** | (Write-Only) Base64 encoded Certificate body for server authentication (when appropriate for dialect). | [optional] 
**fileType** | **String** | (Write-Only) Certificate keyfile type - .json or .p12 | [optional] 
**database** | **String** | Database name | [optional] 
**schema** | **String** | Scheme name | [optional] 
**jdbcAdditionalParams** | **String** | Additional params to add to JDBC connection string | [optional] 
**afterConnectStatements** | **String** | SQL statements (semicolon separated) to issue after connecting to the database. Requires &#x60;custom_after_connect_statements&#x60; license feature | [optional] 
**can** | **{String: Boolean}** | Operations the current user is able to perform on this object | [optional] 


