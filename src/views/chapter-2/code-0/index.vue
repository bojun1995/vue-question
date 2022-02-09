<template>
  <div>
    <div>Object.defineProperty</div>
  </div>
</template>

<script>
export default {
  name: 'Chapter2Code0',
  data() {
    return {

    }
  },
  computed: {},
  watch: {},
  created() { },
  mounted() {
    let testObj = {}
    this.defineReactive(testObj, 'a', 'aVal')
    testObj.a = '11'
    testObj.b = '22'
    let test = testObj.a
  },
  methods: {
    defineReactive(data, key, val) {
      Object.defineProperty(data, key, {
        get: () => {
          console.log(`get val=${val}`)
          return val
        },
        set: (newVal) => {
          val = newVal
          console.log(`set val=${val}`)
        }
      })
    }
  },
}
</script>

<style lang="scss" rel="stylesheet/scss" type="text/scss" scoped></style>