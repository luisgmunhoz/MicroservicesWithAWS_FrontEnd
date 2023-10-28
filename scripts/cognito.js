const config = {
    cognito: {
        identityPoolId: process.env.IDENTITY_POOL_ID,
        cognitoDomain: process.env.COGNITO_DOMAIN,
        appId: process.env.APP_ID,
    },
};

var cognitoApp = {
    auth: {},
    Init: function () {
        var authData = {
            ClientId: config.cognito.appId,
            AppWebDomain: config.cognito.cognitoDomain,
            TokenScopesArray: ["email", "openid", "profile"],
            RedirectUriSignIn: "http://localhost:8080/",
            RedirectUriSignOut: "http://localhost:8080/",
            UserPoolId: config.cognito.identityPoolId,
            AdvancedSecurityDataCollectionFlag: false,
            Storage: null,
        };

        cognitoApp.auth = new AmazonCognitoIdentity.CognitoAuth(authData);
        cognitoApp.auth.userhandler = {
            onSuccess: function (result) {},
            onFailure: function (err) {},
        };
    },
};
