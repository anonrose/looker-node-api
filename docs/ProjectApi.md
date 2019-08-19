# LookerApi31Reference.ProjectApi

All URIs are relative to */api/3.1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**allGitBranches**](ProjectApi.md#allGitBranches) | **GET** /projects/{project_id}/git_branches | Get All Git Branches
[**allGitConnectionTests**](ProjectApi.md#allGitConnectionTests) | **GET** /projects/{project_id}/git_connection_tests | Get All Git Connection Tests
[**allProjectFiles**](ProjectApi.md#allProjectFiles) | **GET** /projects/{project_id}/files | Get All Project Files
[**allProjects**](ProjectApi.md#allProjects) | **GET** /projects | Get All Projects
[**createGitBranch**](ProjectApi.md#createGitBranch) | **POST** /projects/{project_id}/git_branch | Checkout New Git Branch
[**createGitDeployKey**](ProjectApi.md#createGitDeployKey) | **POST** /projects/{project_id}/git/deploy_key | Create Deploy Key
[**createProject**](ProjectApi.md#createProject) | **POST** /projects | Create Project
[**deleteGitBranch**](ProjectApi.md#deleteGitBranch) | **DELETE** /projects/{project_id}/git_branch/{branch_name} | Delete a Git Branch
[**deleteRepositoryCredential**](ProjectApi.md#deleteRepositoryCredential) | **DELETE** /projects/{root_project_id}/credential/{credential_id} | Delete Repository Credential
[**deployToProduction**](ProjectApi.md#deployToProduction) | **POST** /projects/{project_id}/deploy_to_production | Deploy To Production
[**findGitBranch**](ProjectApi.md#findGitBranch) | **GET** /projects/{project_id}/git_branch/{branch_name} | Find a Git Branch
[**getAllRepositoryCredentials**](ProjectApi.md#getAllRepositoryCredentials) | **GET** /projects/{root_project_id}/credentials | Get All Repository Credentials
[**gitBranch**](ProjectApi.md#gitBranch) | **GET** /projects/{project_id}/git_branch | Get Active Git Branch
[**gitDeployKey**](ProjectApi.md#gitDeployKey) | **GET** /projects/{project_id}/git/deploy_key | Git Deploy Key
[**manifest**](ProjectApi.md#manifest) | **GET** /projects/{project_id}/manifest | Get Manifest
[**project**](ProjectApi.md#project) | **GET** /projects/{project_id} | Get Project
[**projectFile**](ProjectApi.md#projectFile) | **GET** /projects/{project_id}/files/file | Get Project File
[**projectValidationResults**](ProjectApi.md#projectValidationResults) | **GET** /projects/{project_id}/validate | Cached Project Validation Results
[**projectWorkspace**](ProjectApi.md#projectWorkspace) | **GET** /projects/{project_id}/current_workspace | Get Project Workspace
[**resetProjectToProduction**](ProjectApi.md#resetProjectToProduction) | **POST** /projects/{project_id}/reset_to_production | Reset To Production
[**resetProjectToRemote**](ProjectApi.md#resetProjectToRemote) | **POST** /projects/{project_id}/reset_to_remote | Reset To Remote
[**runGitConnectionTest**](ProjectApi.md#runGitConnectionTest) | **GET** /projects/{project_id}/git_connection_tests/{test_id} | Run Git Connection Test
[**updateGitBranch**](ProjectApi.md#updateGitBranch) | **PUT** /projects/{project_id}/git_branch | Update Project Git Branch
[**updateProject**](ProjectApi.md#updateProject) | **PATCH** /projects/{project_id} | Update Project
[**updateRepositoryCredential**](ProjectApi.md#updateRepositoryCredential) | **PUT** /projects/{root_project_id}/credential/{credential_id} | Create Repository Credential
[**validateProject**](ProjectApi.md#validateProject) | **POST** /projects/{project_id}/validate | Validate Project


<a name="allGitBranches"></a>
# **allGitBranches**
> [GitBranch] allGitBranches(projectId)

Get All Git Branches

### Get All Git Branches  Returns a list of git branches in the project repository

### Example
```javascript
var LookerApi31Reference = require('looker-node-api');

var apiInstance = new LookerApi31Reference.ProjectApi();

var projectId = "projectId_example"; // String | Project Id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.allGitBranches(projectId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**| Project Id |

### Return type

[**[GitBranch]**](GitBranch.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="allGitConnectionTests"></a>
# **allGitConnectionTests**
> [GitConnectionTest] allGitConnectionTests(projectId, opts)

Get All Git Connection Tests

### Get All Git Connection Tests  Returns a list of tests which can be run against a project&#39;s (or the dependency project for the provided remote_url) git connection. Call [Run Git Connection Test](#!/Project/run_git_connection_test) to execute each test in sequence.  Tests are ordered by increasing specificity. Tests should be run in the order returned because later tests require functionality tested by tests earlier in the test list.  For example, a late-stage test for write access is meaningless if connecting to the git server (an early test) is failing.

### Example
```javascript
var LookerApi31Reference = require('looker-node-api');

var apiInstance = new LookerApi31Reference.ProjectApi();

var projectId = "projectId_example"; // String | Project Id

var opts = {
  'remoteUrl': "remoteUrl_example" // String | (Optional: leave blank for root project) The remote url for remote dependency to test.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.allGitConnectionTests(projectId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**| Project Id |
 **remoteUrl** | **String**| (Optional: leave blank for root project) The remote url for remote dependency to test. | [optional]

### Return type

[**[GitConnectionTest]**](GitConnectionTest.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="allProjectFiles"></a>
# **allProjectFiles**
> [ProjectFile] allProjectFiles(projectId, opts)

Get All Project Files

### Get All Project Files  Returns a list of the files in the project

### Example
```javascript
var LookerApi31Reference = require('looker-node-api');

var apiInstance = new LookerApi31Reference.ProjectApi();

var projectId = "projectId_example"; // String | Project Id

var opts = {
  'fields': "fields_example" // String | Requested fields
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.allProjectFiles(projectId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**| Project Id |
 **fields** | **String**| Requested fields | [optional]

### Return type

[**[ProjectFile]**](ProjectFile.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="allProjects"></a>
# **allProjects**
> [Project] allProjects(opts)

Get All Projects

### Get All Projects  Returns all projects visible to the current user

### Example
```javascript
var LookerApi31Reference = require('looker-node-api');

var apiInstance = new LookerApi31Reference.ProjectApi();

var opts = {
  'fields': "fields_example" // String | Requested fields
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.allProjects(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fields** | **String**| Requested fields | [optional]

### Return type

[**[Project]**](Project.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createGitBranch"></a>
# **createGitBranch**
> GitBranch createGitBranch(projectId, opts)

Checkout New Git Branch

### Create and Checkout a Git Branch  Creates and checks out a new branch in the given project repository Only allowed in development mode   - Call &#x60;update_session&#x60; to select the &#39;dev&#39; workspace.  Optionally specify a branch name, tag name or commit SHA as the start point in the ref field.   If no ref is specified, HEAD of the current branch will be used as the start point for the new branch.

### Example
```javascript
var LookerApi31Reference = require('looker-node-api');

var apiInstance = new LookerApi31Reference.ProjectApi();

var projectId = "projectId_example"; // String | Project Id

var opts = {
  'body': new LookerApi31Reference.GitBranch() // GitBranch | Git Branch
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createGitBranch(projectId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**| Project Id |
 **body** | [**GitBranch**](GitBranch.md)| Git Branch | [optional]

### Return type

[**GitBranch**](GitBranch.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createGitDeployKey"></a>
# **createGitDeployKey**
> &#39;String&#39; createGitDeployKey(projectId)

Create Deploy Key

### Create Git Deploy Key  Create a public/private key pair for authenticating ssh git requests from Looker to a remote git repository for a particular Looker project.  Returns the public key of the generated ssh key pair.  Copy this public key to your remote git repository&#39;s ssh keys configuration so that the remote git service can validate and accept git requests from the Looker server.

### Example
```javascript
var LookerApi31Reference = require('looker-node-api');

var apiInstance = new LookerApi31Reference.ProjectApi();

var projectId = "projectId_example"; // String | Project Id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createGitDeployKey(projectId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**| Project Id |

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: text/plain

<a name="createProject"></a>
# **createProject**
> Project createProject(opts)

Create Project

### Create A Project  dev mode required. - Call &#x60;update_session&#x60; to select the &#39;dev&#39; workspace.  &#x60;name&#x60; is required. &#x60;git_remote_url&#x60; is not allowed. To configure Git for the newly created project, follow the instructions in &#x60;update_project&#x60;.

### Example
```javascript
var LookerApi31Reference = require('looker-node-api');

var apiInstance = new LookerApi31Reference.ProjectApi();

var opts = {
  'body': new LookerApi31Reference.Project() // Project | Project
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createProject(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Project**](Project.md)| Project | [optional]

### Return type

[**Project**](Project.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteGitBranch"></a>
# **deleteGitBranch**
> &#39;String&#39; deleteGitBranch(projectId, branchName)

Delete a Git Branch

### Delete the specified Git Branch  Delete git branch specified in branch_name path param from local and remote of specified project repository

### Example
```javascript
var LookerApi31Reference = require('looker-node-api');

var apiInstance = new LookerApi31Reference.ProjectApi();

var projectId = "projectId_example"; // String | Project Id

var branchName = "branchName_example"; // String | Branch Name


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteGitBranch(projectId, branchName, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**| Project Id |
 **branchName** | **String**| Branch Name |

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteRepositoryCredential"></a>
# **deleteRepositoryCredential**
> &#39;String&#39; deleteRepositoryCredential(rootProjectId, credentialId)

Delete Repository Credential

### Repository Credential for a remote dependency  Admin required.  &#x60;root_project_id&#x60; is required. &#x60;credential_id&#x60; is required.

### Example
```javascript
var LookerApi31Reference = require('looker-node-api');

var apiInstance = new LookerApi31Reference.ProjectApi();

var rootProjectId = "rootProjectId_example"; // String | Root Project Id

var credentialId = "credentialId_example"; // String | Credential Id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteRepositoryCredential(rootProjectId, credentialId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **rootProjectId** | **String**| Root Project Id |
 **credentialId** | **String**| Credential Id |

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deployToProduction"></a>
# **deployToProduction**
> &#39;String&#39; deployToProduction(projectId)

Deploy To Production

### Deploy LookML from this Development Mode Project to Production  Git must have been configured, must be in dev mode and deploy permission required  Deploy is a two / three step process 1. Push commits in current branch of dev mode project to the production branch (origin/master).    Note a. This step is skipped in read-only projects.    Note b. If this step is unsuccessful for any reason (e.g. rejected non-fastforward because production branch has              commits not in current branch), subsequent steps will be skipped. 2. If this is the first deploy of this project, create the production project with git repository. 3. Pull the production branch into the production project.

### Example
```javascript
var LookerApi31Reference = require('looker-node-api');

var apiInstance = new LookerApi31Reference.ProjectApi();

var projectId = "projectId_example"; // String | Id of project


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deployToProduction(projectId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**| Id of project |

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="findGitBranch"></a>
# **findGitBranch**
> GitBranch findGitBranch(projectId, branchName)

Find a Git Branch

### Get the specified Git Branch  Returns the git branch specified in branch_name path param if it exists in the given project repository

### Example
```javascript
var LookerApi31Reference = require('looker-node-api');

var apiInstance = new LookerApi31Reference.ProjectApi();

var projectId = "projectId_example"; // String | Project Id

var branchName = "branchName_example"; // String | Branch Name


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.findGitBranch(projectId, branchName, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**| Project Id |
 **branchName** | **String**| Branch Name |

### Return type

[**GitBranch**](GitBranch.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAllRepositoryCredentials"></a>
# **getAllRepositoryCredentials**
> [RepositoryCredential] getAllRepositoryCredentials(rootProjectId)

Get All Repository Credentials

### Get all Repository Credentials for a project  &#x60;root_project_id&#x60; is required.

### Example
```javascript
var LookerApi31Reference = require('looker-node-api');

var apiInstance = new LookerApi31Reference.ProjectApi();

var rootProjectId = "rootProjectId_example"; // String | Root Project Id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAllRepositoryCredentials(rootProjectId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **rootProjectId** | **String**| Root Project Id |

### Return type

[**[RepositoryCredential]**](RepositoryCredential.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="gitBranch"></a>
# **gitBranch**
> GitBranch gitBranch(projectId)

Get Active Git Branch

### Get the Current Git Branch  Returns the git branch currently checked out in the given project repository

### Example
```javascript
var LookerApi31Reference = require('looker-node-api');

var apiInstance = new LookerApi31Reference.ProjectApi();

var projectId = "projectId_example"; // String | Project Id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.gitBranch(projectId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**| Project Id |

### Return type

[**GitBranch**](GitBranch.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="gitDeployKey"></a>
# **gitDeployKey**
> &#39;String&#39; gitDeployKey(projectId)

Git Deploy Key

### Git Deploy Key  Returns the ssh public key previously created for a project&#39;s git repository.

### Example
```javascript
var LookerApi31Reference = require('looker-node-api');

var apiInstance = new LookerApi31Reference.ProjectApi();

var projectId = "projectId_example"; // String | Project Id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.gitDeployKey(projectId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**| Project Id |

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: text/plain

<a name="manifest"></a>
# **manifest**
> Manifest manifest(projectId)

Get Manifest

### Get A Projects Manifest object  Returns the project with the given project id

### Example
```javascript
var LookerApi31Reference = require('looker-node-api');

var apiInstance = new LookerApi31Reference.ProjectApi();

var projectId = "projectId_example"; // String | Project Id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.manifest(projectId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**| Project Id |

### Return type

[**Manifest**](Manifest.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="project"></a>
# **project**
> Project project(projectId, opts)

Get Project

### Get A Project  Returns the project with the given project id

### Example
```javascript
var LookerApi31Reference = require('looker-node-api');

var apiInstance = new LookerApi31Reference.ProjectApi();

var projectId = "projectId_example"; // String | Project Id

var opts = {
  'fields': "fields_example" // String | Requested fields
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.project(projectId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**| Project Id |
 **fields** | **String**| Requested fields | [optional]

### Return type

[**Project**](Project.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="projectFile"></a>
# **projectFile**
> ProjectFile projectFile(projectId, fileId, opts)

Get Project File

### Get Project File Info  Returns information about a file in the project

### Example
```javascript
var LookerApi31Reference = require('looker-node-api');

var apiInstance = new LookerApi31Reference.ProjectApi();

var projectId = "projectId_example"; // String | Project Id

var fileId = "fileId_example"; // String | File Id

var opts = {
  'fields': "fields_example" // String | Requested fields
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.projectFile(projectId, fileId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**| Project Id |
 **fileId** | **String**| File Id |
 **fields** | **String**| Requested fields | [optional]

### Return type

[**ProjectFile**](ProjectFile.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="projectValidationResults"></a>
# **projectValidationResults**
> ProjectValidationCache projectValidationResults(projectId, opts)

Cached Project Validation Results

### Get Cached Project Validation Results  Returns the cached results of a previous project validation calculation, if any. Returns http status 204 No Content if no validation results exist.  Validating the content of all the files in a project can be computationally intensive for large projects. Use this API to simply fetch the results of the most recent project validation rather than revalidating the entire project from scratch.  A value of &#x60;\&quot;stale\&quot;: true&#x60; in the response indicates that the project has changed since the cached validation results were computed. The cached validation results may no longer reflect the current state of the project.

### Example
```javascript
var LookerApi31Reference = require('looker-node-api');

var apiInstance = new LookerApi31Reference.ProjectApi();

var projectId = "projectId_example"; // String | Project Id

var opts = {
  'fields': "fields_example" // String | Requested fields
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.projectValidationResults(projectId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**| Project Id |
 **fields** | **String**| Requested fields | [optional]

### Return type

[**ProjectValidationCache**](ProjectValidationCache.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="projectWorkspace"></a>
# **projectWorkspace**
> ProjectWorkspace projectWorkspace(projectId, opts)

Get Project Workspace

### Get Project Workspace  Returns information about the state of the project files in the currently selected workspace

### Example
```javascript
var LookerApi31Reference = require('looker-node-api');

var apiInstance = new LookerApi31Reference.ProjectApi();

var projectId = "projectId_example"; // String | Project Id

var opts = {
  'fields': "fields_example" // String | Requested fields
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.projectWorkspace(projectId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**| Project Id |
 **fields** | **String**| Requested fields | [optional]

### Return type

[**ProjectWorkspace**](ProjectWorkspace.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="resetProjectToProduction"></a>
# **resetProjectToProduction**
> &#39;String&#39; resetProjectToProduction(projectId)

Reset To Production

### Reset a project to the revision of the project that is in production.  **DANGER** this will delete any changes that have not been pushed to a remote repository.

### Example
```javascript
var LookerApi31Reference = require('looker-node-api');

var apiInstance = new LookerApi31Reference.ProjectApi();

var projectId = "projectId_example"; // String | Id of project


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.resetProjectToProduction(projectId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**| Id of project |

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="resetProjectToRemote"></a>
# **resetProjectToRemote**
> &#39;String&#39; resetProjectToRemote(projectId)

Reset To Remote

### Reset a project development branch to the revision of the project that is on the remote.  **DANGER** this will delete any changes that have not been pushed to a remote repository.

### Example
```javascript
var LookerApi31Reference = require('looker-node-api');

var apiInstance = new LookerApi31Reference.ProjectApi();

var projectId = "projectId_example"; // String | Id of project


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.resetProjectToRemote(projectId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**| Id of project |

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="runGitConnectionTest"></a>
# **runGitConnectionTest**
> GitConnectionTestResult runGitConnectionTest(projectId, testId, opts)

Run Git Connection Test

### Run a git connection test  Run the named test on the git service used by this project (or the dependency project for the provided remote_url) and return the result. This is intended to help debug git connections when things do not work properly, to give more helpful information about why a git url is not working with Looker.  Tests should be run in the order they are returned by [Get All Git Connection Tests](#!/Project/all_git_connection_tests).

### Example
```javascript
var LookerApi31Reference = require('looker-node-api');

var apiInstance = new LookerApi31Reference.ProjectApi();

var projectId = "projectId_example"; // String | Project Id

var testId = "testId_example"; // String | Test Id

var opts = {
  'remoteUrl': "remoteUrl_example" // String | (Optional: leave blank for root project) The remote url for remote dependency to test.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.runGitConnectionTest(projectId, testId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**| Project Id |
 **testId** | **String**| Test Id |
 **remoteUrl** | **String**| (Optional: leave blank for root project) The remote url for remote dependency to test. | [optional]

### Return type

[**GitConnectionTestResult**](GitConnectionTestResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateGitBranch"></a>
# **updateGitBranch**
> GitBranch updateGitBranch(projectId, body)

Update Project Git Branch

### Checkout and/or reset --hard an existing Git Branch  Only allowed in development mode   - Call &#x60;update_session&#x60; to select the &#39;dev&#39; workspace.  Checkout an existing branch if name field is different from the name of the currently checked out branch.  Optionally specify a branch name, tag name or commit SHA to which the branch should be reset.   **DANGER** hard reset will be force pushed to the remote. Unsaved changes and commits may be permanently lost.

### Example
```javascript
var LookerApi31Reference = require('looker-node-api');

var apiInstance = new LookerApi31Reference.ProjectApi();

var projectId = "projectId_example"; // String | Project Id

var body = new LookerApi31Reference.GitBranch(); // GitBranch | Git Branch


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateGitBranch(projectId, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**| Project Id |
 **body** | [**GitBranch**](GitBranch.md)| Git Branch |

### Return type

[**GitBranch**](GitBranch.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateProject"></a>
# **updateProject**
> Project updateProject(projectId, body, opts)

Update Project

### Update Project Configuration  Apply changes to a project&#39;s configuration.   #### Configuring Git for a Project  To set up a Looker project with a remote git repository, follow these steps:  1. Call &#x60;update_session&#x60; to select the &#39;dev&#39; workspace. 1. Call &#x60;create_git_deploy_key&#x60; to create a new deploy key for the project 1. Copy the deploy key text into the remote git repository&#39;s ssh key configuration 1. Call &#x60;update_project&#x60; to set project&#39;s &#x60;git_remote_url&#x60; ()and &#x60;git_service_name&#x60;, if necessary).  When you modify a project&#39;s &#x60;git_remote_url&#x60;, Looker connects to the remote repository to fetch metadata. The remote git repository MUST be configured with the Looker-generated deploy key for this project prior to setting the project&#39;s &#x60;git_remote_url&#x60;.  To set up a Looker project with a git repository residing on the Looker server (a &#39;bare&#39; git repo): 1. Call &#x60;update_session&#x60; to select the &#39;dev&#39; workspace. 1. Call &#x60;update_project&#x60; setting &#x60;git_remote_url&#x60; to nil and &#x60;git_service_name&#x60; to \&quot;bare\&quot;.

### Example
```javascript
var LookerApi31Reference = require('looker-node-api');

var apiInstance = new LookerApi31Reference.ProjectApi();

var projectId = "projectId_example"; // String | Project Id

var body = new LookerApi31Reference.Project(); // Project | Project

var opts = {
  'fields': "fields_example" // String | Requested fields
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateProject(projectId, body, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**| Project Id |
 **body** | [**Project**](Project.md)| Project |
 **fields** | **String**| Requested fields | [optional]

### Return type

[**Project**](Project.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateRepositoryCredential"></a>
# **updateRepositoryCredential**
> RepositoryCredential updateRepositoryCredential(rootProjectId, credentialId, body)

Create Repository Credential

### Configure Repository Credential for a remote dependency  Admin required.  &#x60;root_project_id&#x60; is required. &#x60;credential_id&#x60; is required.

### Example
```javascript
var LookerApi31Reference = require('looker-node-api');

var apiInstance = new LookerApi31Reference.ProjectApi();

var rootProjectId = "rootProjectId_example"; // String | Root Project Id

var credentialId = "credentialId_example"; // String | Credential Id

var body = new LookerApi31Reference.RepositoryCredential(); // RepositoryCredential | Remote Project Information


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateRepositoryCredential(rootProjectId, credentialId, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **rootProjectId** | **String**| Root Project Id |
 **credentialId** | **String**| Credential Id |
 **body** | [**RepositoryCredential**](RepositoryCredential.md)| Remote Project Information |

### Return type

[**RepositoryCredential**](RepositoryCredential.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="validateProject"></a>
# **validateProject**
> ProjectValidation validateProject(projectId, opts)

Validate Project

### Validate Project  Performs lint validation of all lookml files in the project. Returns a list of errors found, if any.  Validating the content of all the files in a project can be computationally intensive for large projects. For best performance, call &#x60;validate_project(project_id)&#x60; only when you really want to recompute project validation. To quickly display the results of the most recent project validation (without recomputing), use &#x60;project_validation_results(project_id)&#x60;

### Example
```javascript
var LookerApi31Reference = require('looker-node-api');

var apiInstance = new LookerApi31Reference.ProjectApi();

var projectId = "projectId_example"; // String | Project Id

var opts = {
  'fields': "fields_example" // String | Requested fields
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.validateProject(projectId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**| Project Id |
 **fields** | **String**| Requested fields | [optional]

### Return type

[**ProjectValidation**](ProjectValidation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

