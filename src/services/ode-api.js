/* eslint-disable max-classes-per-file */
/* eslint-disable no-unused-vars */
import {
  ApiClient,
  UserApi,
} from '../../api-client/src';

const API_BASE_PATH = 'https://ode-back-staging.herokuapp.com'.replace(/\/+$/, '');
class CustomApiClient extends ApiClient {
  callApi(path, httpMethod, pathParams, queryParams, collectionQueryParams,
    headerParams, formParams, bodyParam, authNames, contentTypes, accepts,
    returnType, callback) {
    const url = this.buildUrl(path, pathParams, API_BASE_PATH);

    return fetch(`${url}`,
      {
        method: httpMethod,
        mode: 'cors',
        credentials: 'include',
        headers: {
          Accept: '*/*',
          'Content-Type': 'application/json',
          headerParams,
          // Authorization: `Bearer ${DEMO_TOKEN}`,
        },
        body: JSON.stringify(formParams),
      });
  }
}

class UsersApi extends UserApi {
  constructor() {
    super(new CustomApiClient());
  }
}

export {
  UsersApi,
};
