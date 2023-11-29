import {findUserWithUsername} from "../data.js"

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  console.log('received request with body:', body);
  const existing = findUserWithUsername(body.username)
if (existing == null){
  return false;
} else {
  console.log("Got username with correct password")
  setCookie(event, "username", body.username);
  return true;
}


});
