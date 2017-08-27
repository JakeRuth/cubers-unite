import {
  CognitoUser,
  CognitoUserPool,
  CognitoUserAttribute,
} from 'amazon-cognito-identity-js';

const poolData = {
  UserPoolId : 'us-east-1_dpklMirbO',
  ClientId : '21sjapbsmji2lfna9sp51kn9of',
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
  })

  cognitoUser.confirmRegistration(verificationCode, false, function(err, result) {
    if (err) {
      alert(err);
      failureCallBack();
    } else {
      successCallback();
    }
  });
}
