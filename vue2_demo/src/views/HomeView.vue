<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import axios from 'axios'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },
  created() {
    axios({
      method: 'post',
      url: '/api/',
      data: {
        a: 1,
        lastName: '564786879786576435',
        asd: {
          a: 12,
          b: 123,
          c: [1,2,3],
          d: true
        }
      }
    });
  }
}
</script>
