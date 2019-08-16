# LookerApi31Reference.IntegrationHub

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | ID of the hub. | [optional] 
**url** | **String** | URL of the hub. | [optional] 
**label** | **String** | Label of the hub. | [optional] 
**official** | **Boolean** | Whether this hub is a first-party integration hub operated by Looker. | [optional] 
**fetchErrorMessage** | **String** | An error message, present if the integration hub metadata could not be fetched. If this is present, the integration hub is unusable. | [optional] 
**authorizationToken** | **String** | (Write-Only) An authorization key that will be sent to the integration hub on every request. | [optional] 
**hasAuthorizationToken** | **Boolean** | Whether the authorization_token is set for the hub. | [optional] 
**legalAgreementSigned** | **Boolean** | Whether the legal agreement message has been signed by the user. This only matters if legal_agreement_required is true. | [optional] 
**legalAgreementRequired** | **Boolean** | Whether the legal terms for the integration hub are required before use. | [optional] 
**legalAgreementText** | **String** | The legal agreement text for this integration hub. | [optional] 
**can** | **{String: Boolean}** | Operations the current user is able to perform on this object | [optional] 


