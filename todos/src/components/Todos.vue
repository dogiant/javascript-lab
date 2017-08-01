<template>
  <div class="hello">
    <h1>{{hello}}</h1>
    <h2>Add your todos</h2>
    <input v-model="newItem" v-on:keyup.enter="addNewItem"/> <button v-on:click="addNewItem" >增加Todo</button>
    <ul>
      <li v-for="item in items" v-bind:class="{finished : item.isFinished}" v-on:click="toggleFinished(item)">
        {{item.label}}
      </li>
    </ul>
  </div>
</template>

<script>
import Store from '../service/StoreService'
console.log(Store)
export default {
  name: 'todos',
  data () {
    return {
      hello: 'Welcome to my first Vue.js App Todos',
      items: Store.fetch(),
      newItem: ''
    }
  },
  watch: {
    items: {
      handler: function (items) {
        Store.store(items)
      },
      deep: true
    }
  },
  methods: {
    toggleFinished: function (item) {
      item.isFinished = !item.isFinished
    },
    addNewItem: function () {
      this.items.push({
        label: this.newItem,
        isFinished: false
      })
      this.newItem = ''
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
