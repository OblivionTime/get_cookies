var browserCookie = require('./');
let cookie = new browserCookie()
cookie.GetBrowserCookie()
    .then(() => {
        let res = cookie.GetSpecifiedDomain("google.com", true)
        console.log(res);
    })
