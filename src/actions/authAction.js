import axios from "axios";
var constants = require('../constants')
let config = {
  keys: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
};

export async function signUp(params) {
  let body = params
  var responseData = await axios
    .post(constants.SIGNUPURL, body,config)
    .then(res => {
      console.log(res)
      return res;
    })
    .catch(function(err) {
      // alertError(err, "printerConfig");
      // handleErr(err);
      console.log(err)
    });
  return responseData;
}

export async function validateAuth(uid, accessToken, client) {
  debugger
  var body = "?access-token=" + accessToken + "&client=" + client + "&uid=" + uid;
  var responseData = await axios
    .get(constants.VALIDATE_TOKEN + body, config)
    .then(res => {
      debugger
      return res
    })
    .catch(err => {
      if (err.response === undefined) {
        console.log(err.response);
      } else if (err.response.status == "404") {
        console.log("inside error else");
        alert("Network Error");
      }
    });
  return responseData;
}

export async function signInAuth(params) {
  let body = params
  var responseData = await axios
    .post(constants.SIGNINURL, body, config)
    .then(res => {
      return res
    })
    .catch(err => {
      if (err.response === undefined) {
        console.log();
      } else {
        console.log("inside error else");
        alert(err.response.data.errors);
      }
    });
  return responseData;
}
