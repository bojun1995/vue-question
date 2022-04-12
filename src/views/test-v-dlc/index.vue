<template>
  <div>
    <p>Test V Dlc</p>
    <div>
      <el-v-select :data="cp_data"></el-v-select>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TestVDlc',
  data() {
    return {}
  },
  computed: {
    cp_data() {
      let ret = []
      for (let i = 0; i < 10000; i++) {
        ret.push({
          label: `label-${i}`,
          value: i,
          id: i,
        })
      }
      return ret
    }
  },
  watch: {},
  created() { },
  mounted() { },
  methods: {},
}
</script>

<style lang="scss" rel="stylesheet/scss" type="text/scss" scoped></style>