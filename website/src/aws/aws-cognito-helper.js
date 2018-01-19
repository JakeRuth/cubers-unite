import {
  AuthenticationDetails,
  CognitoRefreshToken ,
  CognitoUser,
  CognitoUserPool,
  CognitoUserAttribute,
} from 'amazon-cognito-identity-js';

const poolData = {
  UserPoolId : 'us-east-1_v9CT8tYOc',
  ClientId : '2pdkvqkue2j4da8mekhlgbqkpj',
};

/*
 * This function creates a user in the apps UserPool hosted by aws
 * The prospective user is sent an email with an activation token
 */
export function signUpAwsCognitoUser(email, username, password, successCallback, failureCallBack) {
	const userPool = new CognitoUserPool(poolData);
	const dataEmail = {
		Name: 'email',
		Value: email,
	};
  const attributeEmail = new CognitoUserAttribute(dataEmail);

	userPool.signUp(username, password, [attributeEmail], null, function(err, result) {
    if (err) {
      alert(err);
			failureCallBack();
    } else {
      successCallback(result.user);
    }
  });
}

export function confirmSignUpAwsCognitoUser(verificationCode, username, successCallback, failureCallBack) {
  const cognitoUser = new CognitoUser({
    Username: username,
    Pool: new CognitoUserPool(poolData),
  });

  cognitoUser.confirmRegistration(verificationCode, false, function(err, result) {
    if (err) {
      alert(err);
      failureCallBack();
    } else {
      successCallback();
    }
  });
}

export function authenticateAwsCognitoUser(username, password, successCallback, failureCallBack) {
  const authenticationDetails = new AuthenticationDetails({
    Username: username,
    Password: password,
  });
  const cognitoUser = new CognitoUser({
    Username: username,
    Pool: new CognitoUserPool(poolData),
  });
  cognitoUser.authenticateUser(authenticationDetails, {
    onSuccess: successCallback,
    onFailure: failureCallBack,
  });
}

export function refreshAwsCognitoUserSession(refreshToken, username, callback) {
  const cognitoRefreshToken = new CognitoRefreshToken ({
    RefreshToken: refreshToken,
  });
  const cognitoUser = new CognitoUser({
    Username: username,
    Pool: new CognitoUserPool(poolData),
  });
  cognitoUser.refreshSession(cognitoRefreshToken, callback);
}
