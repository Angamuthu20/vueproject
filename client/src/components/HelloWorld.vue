
<template>
 <div>
<h1>Register</h1>
  <input
  type="email"
  v-model="email"
  name="email" />
<br>
  <input
  type="password"
  v-model="password"
  name="password" />
<br>
<div class="error" v-html="error"/>
<br>
  <button
  @click="login">
  login
  </button>
 </div>
</template>

<script>
import AuthService from '@/services/AuthService'

export default {
  data () {
    return {
      email: 'dsfdsf',
      password: 'dfsdfsdfsd'
    }
  },
  methods: {
    async login () {
      const response = await AuthService.login({
        email: this.email,
        password: this.password
      })
      console.log(response.data)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
