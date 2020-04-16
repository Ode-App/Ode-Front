# OdeApp.UserApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1UserAuthenticatePost**](UserApi.md#v1UserAuthenticatePost) | **POST** /v1/user/authenticate | 
[**v1UserRegisterPost**](UserApi.md#v1UserRegisterPost) | **POST** /v1/user/register | 



## v1UserAuthenticatePost

> v1UserAuthenticatePost(user)



Authenticate user.

### Example

```javascript
import OdeApp from 'ode_app';

let apiInstance = new OdeApp.UserApi();
let user = {"username":"Luard","password":"luard123"}; // User | 
apiInstance.v1UserAuthenticatePost(user, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user** | [**User**](User.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## v1UserRegisterPost

> v1UserRegisterPost(user)



Register user.

### Example

```javascript
import OdeApp from 'ode_app';

let apiInstance = new OdeApp.UserApi();
let user = {"username":"Luard","password":"luard123","firstName":"Luard","lastName":"Castellanos","email":"luard.developer@gmail.com"}; // User | 
apiInstance.v1UserRegisterPost(user, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user** | [**User**](User.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

