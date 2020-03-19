import testPanel from './panel.vue'
import testToast from './toast.vue'
import testTable from './table.vue'
let index = {}
index.install = function (Vue, options) {
  Vue.prototype.$msg = 'Hello I am index.jss'
  Vue.prototype.$myMethod = function (arr) {
    if (arr.length < 0) {
      return false
    } else {
      arr = arr.join('连接你我')
      return arr
    }
  }
  Vue.component(testPanel.name, testPanel) // testPanel.name 组件的name属性
  Vue.component(testToast.name, testToast) // testPanel.name 组件的name属性
   Vue.component(testTable.name, testTable) // testPanel.name 组件的name属性
}
export default index
