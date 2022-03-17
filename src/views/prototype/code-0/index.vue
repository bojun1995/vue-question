<template>
  <div>
    <h1 style="text-align: center;">{{ cp_prototype }}</h1>
  </div>
</template>

<script>
export default {
  name: 'PrototypeCode0',
  data() {
    return {}
  },
  computed: {
    cp_prototype() {
      let ret = ''
      let Product = function () {
        this.name = 'product name'
      }
      let pro1 = new Product()
      let pro2 = Object.create(pro1)
      // 对象的prototype为undefined
      pro1.prototype
      // 对象的__proto__与类的prototype一致
      let isEqual = pro1.__proto__ == Product.prototype

      // 给Product的prototype添加属性后，pro1会自动继承
      // pro1.price == pro1.__proto__.price == Product.prototype.price
      Product.prototype.price = 101
      pro1.price

      let pro3 = {
        name: 'pro3 name'
      }
      Object.prototype
      // pro3.__proto__ --> Object.prototype --> null
      // pro3继承了Object.prototype所有属性
      let pro3HasName = pro3.hasOwnProperty('name')
      let pro3HasPrice = pro3.hasOwnProperty('price')

      let arr1 = [1, true, '11']
      arr1.prototype
      Array.prototype
      // arr1.__proto__ --> Array.prototype --> Object.prototype --> null

      class ClsProduct {
        static address = 'cn'

        constructor() {
          this.name = 'prod name'
        }
      }

      let clsPro = new ClsProduct()
      // static属性只可以通过类调用，不可以通过实例调用
      clsPro.address
      ClsProduct.address

      class _ClsProduct extends ClsProduct {
        constructor(price) {
          super()
          this.price = 11
        }
      }

      let _clsPro1 = new _ClsProduct()
      _clsPro1.__proto__.__proto__.__proto__.__proto__

      debugger
      return ret
    },

  },
  watch: {},
  created() { },
  mounted() { },
  methods: {
  },
}
</script>

<style lang="scss" rel="stylesheet/scss" type="text/scss" scoped></style>