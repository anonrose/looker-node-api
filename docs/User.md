# LookerApi31Reference.User

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**avatarUrl** | **String** | URL for the avatar image (may be generic) | [optional] 
**credentialsApi3** | [**[CredentialsApi3]**](CredentialsApi3.md) | API 3 credentials | [optional] 
**credentialsEmail** | [**CredentialsEmail**](CredentialsEmail.md) | Email/Password login credentials | [optional] 
**credentialsEmbed** | [**[CredentialsEmbed]**](CredentialsEmbed.md) | Embed credentials | [optional] 
**credentialsGoogle** | [**CredentialsGoogle**](CredentialsGoogle.md) | Google auth credentials | [optional] 
**credentialsLdap** | [**CredentialsLDAP**](CredentialsLDAP.md) | LDAP credentials | [optional] 
**credentialsLookerOpenid** | [**CredentialsLookerOpenid**](CredentialsLookerOpenid.md) | LookerOpenID credentials. Used for login by Looker Analysts | [optional] 
**credentialsOidc** | [**CredentialsOIDC**](CredentialsOIDC.md) | OpenID Connect auth credentials | [optional] 
**credentialsSaml** | [**CredentialsSaml**](CredentialsSaml.md) | Saml auth credentials | [optional] 
**credentialsTotp** | [**CredentialsTotp**](CredentialsTotp.md) | Two-factor credentials | [optional] 
**displayName** | **String** | Full name for display (available only if both first_name and last_name are set) | [optional] 
**email** | **String** | EMail address | [optional] 
**embedGroupSpaceId** | **Number** | (Embed only) ID of user&#39;s group space based on the external_group_id optionally specified during embed user login | [optional] 
**firstName** | **String** | First name | [optional] 
**groupIds** | **[Number]** | Array of ids of the groups for this user | [optional] 
**homeSpaceId** | **String** | ID string for user&#39;s home space | [optional] 
**id** | **Number** | Unique Id | [optional] 
**isDisabled** | **Boolean** | Account has been disabled | [optional] 
**lastName** | **String** | Last name | [optional] 
**locale** | **String** | User&#39;s preferred locale. User locale takes precedence over Looker&#39;s system-wide default locale. Locale determines language of display strings and date and numeric formatting in API responses. Locale string must be a 2 letter language code or a combination of language code and region code: &#39;en&#39; or &#39;en-US&#39;, for example. | [optional] 
**lookerVersions** | **[String]** | Array of strings representing the Looker versions that this user has used (this only goes back as far as &#39;3.54.0&#39;) | [optional] 
**modelsDirValidated** | **Boolean** | User&#39;s dev workspace has been checked for presence of applicable production projects | [optional] 
**personalSpaceId** | **Number** | ID of user&#39;s personal space | [optional] 
**presumedLookerEmployee** | **Boolean** | User is identified as an employee of Looker | [optional] 
**roleIds** | **[Number]** | Array of ids of the roles for this user | [optional] 
**sessions** | [**[Session]**](Session.md) | Active sessions | [optional] 
**uiState** | **{String: String}** | Per user dictionary of undocumented state information owned by the Looker UI. | [optional] 
**verifiedLookerEmployee** | **Boolean** | User is identified as an employee of Looker who has been verified via Looker corporate authentication | [optional] 
**url** | **String** | Link to get this item | [optional] 
**can** | **{String: Boolean}** | Operations the current user is able to perform on this object | [optional] 


