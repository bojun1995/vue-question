<template>
  <div>
    <h1 ref='h1' v-if="show">nowcoder</h1>
  </div>
</template>

<script>
export default {
  name: 'Render0',
  data() {
    return {
      show: false
    }
  },
  computed: {},
  watch: {},
  created() { },
  mounted() {
    this.init()
    this.doLog()
  },
  methods: {
    init() {
      this.show = true
    },
    doLog() {
      // debugger
      // console.log(this.$refs.h1.offsetWidth)
      this.$nextTick(() => {
        debugger
        console.log(this.$refs.h1.offsetWidth)
      })
    },
  },
}
</script>

<style lang="scss" rel="stylesheet/scss" type="text/scss" scoped></style>