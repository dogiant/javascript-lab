const TODOS_STORAGE_KEY = 'todos_key'
export default {
  fetch: function () {
    return JSON.parse(window.localStorage.getItem(TODOS_STORAGE_KEY)) || []
  },
  store: function (items) {
    window.localStorage.setItem(TODOS_STORAGE_KEY, JSON.stringify(items))
  }
}
