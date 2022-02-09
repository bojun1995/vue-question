<template>
  <div>
    <div>vue2 question</div>
    <div>
      <router-link v-for="(routeName, idx) in cp_linkByRoutes" :key="routeName" :to="{ name: routeName }"><p>{{ routeName }}</p></router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {}
  },
  computed: {
    cp_linkByRoutes() {
      let ret = []
      let routes = this.$router.getRoutes()
      routes.forEach(route => {
        let { name = '' } = route
        ret.push(name)
      })
      return ret
    },
  },
  watch: {},
  created() {},
  mounted() { },
  methods: {
    
  },
}
</script>

<style lang="scss" rel="stylesheet/scss" type="text/scss" scoped></style>