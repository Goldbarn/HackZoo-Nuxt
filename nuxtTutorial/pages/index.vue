<template>

  <h1>Login to enter the petting zoo:</h1>
  <input type="text" placeholder="usrnm" v-model="state.username" />
  <br /><br />
  <input type="password" placeholder="pswd" v-model="state.password" />
  <br /><br />
  <button @click="performLogin">Log In!</button>

</template>

<script setup>

const state = reactive({
  username: "",
  password: "",
});
async function performLogin(){
  const response = await $fetch("/api/login", {
    method: "post",
    body: state
  });
  console.log(response);
if(response){
  navigateTo("/zoo")
}
}


</script>

<style>
* {
  font-family: sans-serif;
}
</style>
