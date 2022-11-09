<template>
  <div style="border: 1px solid green">
    我是List.vue组件, 我收到了Object
    {{ dictData }}
  </div>
</template>
<script>
import lodash from "lodash"
export default {
  props: {
    dictData: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      inner_dict_data: {
        1: {
          id: 1,
          name: "张三",
          address: {
            longitude: 120,
            latitude: 23,
            province: "江苏",
          }
        }
      },
    }
  },
  mounted() {
    let function_dict_data = {
      1: {
        id: 1,
        name: "张三",
        address: {
          longitude: 120,
          latitude: 23,
          province: "江苏",
        }
      }
    }
    console.info("info的数据一样")
    console.info(this.dictData)
    console.info(function_dict_data)
    console.table(this.dictData)
    console.info("直接看info有1的, 但是table里就没有, table的数据不一样")
    console.table(this.inner_dict_data)
    console.table(function_dict_data)
    console.info("json出来的值完全一样")
    console.info(
      JSON.stringify(function_dict_data) == JSON.stringify(this.inner_dict_data)
    )
    console.info("但是lodash拿得到keys")
    console.info(lodash.map(this.dictData, "id"))
    console.info(lodash.map(this.inner_dict_data, "id"))
    console.info(lodash.map(function_dict_data, "id"))
  },
}
</script>

