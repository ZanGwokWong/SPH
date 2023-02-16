<template>
  <div>
    <!-- typenav已注册为全局组件 不需要再引入 -->
    <TypeNav />
    <ListContainer />
    <TodayRecommend />
    <SPHRank />
    <SPHLike />
    <!-- 遍历floor栏 并把里面的数据穿给子元素floor进行渲染 -->
    <SPHFloor v-for="(floor) in floorList" :key='floor.id' :list = floor />
    <SPHBrand />
  </div>
</template>

<script>
import ListContainer from "./Container/ListContainer.vue";
import TodayRecommend from "./Recommend/TodayRecommend.vue";
import SPHRank from "./Rank/SPHRenk.vue";
import SPHLike from "./Like/SPHLike.vue";
import SPHFloor from "./Floor/SPHFloor.vue";
import SPHBrand from './Brand/SPHBrand.vue'
import { mapState } from "vuex";
export default {
  components: {
    ListContainer,
    TodayRecommend,
    SPHRank,
    SPHLike,
    SPHFloor,
    SPHBrand,
  },
    mounted(){
      // 向仓库获取floor栏数据
    this.$store.dispatch('getfloorList')
    this.$store.dispatch('getUserInfo')
  },
  computed:{
    // 拿到floor栏数据
        ...mapState({
      floorList : (state) => state.home.floorList
    })
  }
};
</script>
