<template>
  <div style="border: 1px solid red">
    我是Dict组件, 我传入了一个Object
    <List :dict-data="dict_data" v-if="loaded"/>
  </div>
</template>
<script>
import List from "./List"

export default {
  components: {
    List
  },
  data() {
    return {
      loaded: false,
      dict_data: {},
    }
  },
  mounted() {
    setTimeout(
      ()=>{
        this.loaded = true
        this.$set(
          this.dict_data, 2, {
            id: 2,
            name: "李四",
            address: {
              longitude: 120,
              latitude: 23,
              province: "上海",
            }
          }
        )
        this.dict_data[1] = {
          id: 1,
          name: "张三",
          address: {
            longitude: 120,
            latitude: 23,
            province: "江苏",
          }
        }
      },
      1000
    )
  },
}
</script>

