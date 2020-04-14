
> Layered architecture should have at three layer 
1) **Presentation layer** (UI layer) or Angular components 
2) **Business Layer** (vanilla typescript) this define application logic and keep logic saperage. UI layer hold the reference of this layer
3) **Data layer** (vanilla typescript) this contains data and server interaction it should not be directly accessed by Presentation layer. Only business layer will interact with this.


## API deprecation 
API deprecation framework should be implemented from the beginning of the project. 

```javascript
// Rest api endpoint
// https://example.come/${version}/users

/*------------------------------------------*/

/** Deprecation in Response body */
{
    /*When there is an error*/
    "error":{
        /*error code define by the application architeture*/
        "code":"",
        "msg":"error"
    },
    
    /*response codes 2xx, 3xx, 4xx*/
    "responseCode":200,
    
    /*When api provider decide to obsolete previous version and provide newer version of api*/
    "deprecation": {
        "msg":"This api version ${veresion} will be deperecated. use api version ${version} this instead.",
        "deprecationDate":"UTC date time"
    },

    /*Respose data defined by the application architecture*/
    "data":{
        
    }
}

/*------or---------*/

/**Deprecation in Response header*/
{
    headers:[
        {"X-API-Deprecation-Date": "UTC date"},
        {"X-API-Deprecation-Info": "https://example.com/${version}-api-deprecation-info?"}
    ]
}
```

## Authorization header
The following is the basic syntax for request header when api try to access api which require authorization access code which was given at the time of user authentication (login)

```javascript
Authorization: <type> <credentials>
```

There are following type of authorization

* **Basic** (see [RFC 7617](https://tools.ietf.org/html/rfc7617), base64-encoded credentials. See below for more information.),
* **Bearer** (see [RFC 6750](https://tools.ietf.org/html/rfc6750), bearer tokens to access OAuth 2.0-protected resources),
* **Digest** (see [RFC 7616](https://tools.ietf.org/html/rfc7616), only md5 hashing is supported in Firefox, see bug 472823 for SHA encryption support),
* **HOBA** (see [RFC 7486](https://tools.ietf.org/html/rfc7486), Section 3, HTTP Origin-Bound Authentication, digital-signature-based),
* **Mutual** (see [RFC 8120](https://tools.ietf.org/html/rfc8120)),
* **AWS4-HMAC-SHA256** (see [AWS docs](http://docs.aws.amazon.com/AmazonS3/latest/API/sigv4-auth-using-authorization-header.html)).



References:
* [swagger](https://swagger.io/docs/specification/authentication/bearer-authentication/)
* [mdn authorization](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Authorization)
* [uthentication_schemes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication#Authentication_schemes)