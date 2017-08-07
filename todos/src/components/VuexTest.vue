<template>
  <div class="hello">
    <h1>{{hello}}</h1>
    <h2>vuex demo</h2>
    <input v-model="inputTxt" v-on:keyup.enter="setNewHello"/> <button v-on:click="setNewHello" >say hi</button>

  </div>
</template>

<script>
export default {
  name: 'VuexTest',
  data () {
    return {
      inputTxt: 'haha'
    }
  },
  computed: {
    hello () {
      return this.$store.state.hello
    }
  },
  methods: {
    setNewHello: function () {
      alert(this.inputTxt)
      this.$store.commit('addNewHello', this.inputTxt)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
.finished {
  text-decoration: line-through;
}
ul {
  padding: 0;
  width: 500px;
  margin: 0 auto;
}

li {
  text-align: left;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
