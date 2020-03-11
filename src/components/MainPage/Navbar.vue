<template>
  <div>
    <div v-bind:key="Navbar.id" v-for="Navbar in NavbarList" class="Navbar">
      <p>{{Navbar.title}}</p>
    </div>
  </div>
</template>

<script lang="ts">
// @Component
// export default class HelloWorld extends Vue {
//   @Prop() private msg!: string;
// }

export default {
  name: "Navbar",
  components: {},
  props: ["NavbarList"]
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.Navbar {
  display: inline-block;
  padding: 0 10px 0 10px;
  font-style: normal;
  font-size: 17px;
  line-height: 30px;
  text-align: center;
}

p {
  color: white;
}
</style>
