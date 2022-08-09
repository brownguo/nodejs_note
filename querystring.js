const querystring = require("querystring")
let payloads = {
    "name": "brown",
    "nikename": "xiaoming"
}
console.log(querystring.stringify(payloads))