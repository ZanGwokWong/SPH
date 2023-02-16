<template>
  <div>
    <SPHHeader/>
    <router-view></router-view>
    <SPHFooter v-show="$route.meta.show"  />
  </div>
</template>

<script>
import SPHHeader from "./components/Header/SPHHeader.vue";
import SPHFooter from "./components/Footer/SPHFooter.vue";
export default {
  name: "App",
  components: {
    SPHHeader,
    SPHFooter,
  },
};
</script>

