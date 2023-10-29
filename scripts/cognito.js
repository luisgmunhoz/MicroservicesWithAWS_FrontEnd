const config = {
    cognito: {
        identityPoolId: "us-east-1_HZ9q7xHiX",
        cognitoDomain: "hotelbookingcourse.auth.us-east-1.amazoncognito.com",
        appId: "2nd11abfgvj2co020poll89aon"
    }
}

var cognitoApp = {
    auth: {},
    Init: function () {

        var authData = {
            ClientId: config.cognito.appId,
            AppWebDomain: config.cognito.cognitoDomain,
            TokenScopesArray: ['email', 'openid', 'profile'],
            RedirectUriSignIn: 'http://localhost:8080/',
            RedirectUriSignOut: 'http://localhost:8080/',
            UserPoolId: config.cognito.identityPoolId,
            AdvancedSecurityDataCollectionFlag: false,
            Storage: null
        };

        cognitoApp.auth = new AmazonCognitoIdentity.CognitoAuth(authData);
        cognitoApp.auth.userhandler = {
            onSuccess: function (result) {

            },
            onFailure: function (err) {
            }
        };
    }
}