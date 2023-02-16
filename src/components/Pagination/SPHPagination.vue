<template>
  <div class="pagination">
    <!-- 上一页 -->
    <button :disabled="pageNo == 1" @click="$emit('getPageNo', pageNo - 1)">
      上一页
    </button>
    <!-- 第一页 -->
    <button v-if="StartAndEnd.start > 1" @click="$emit('getPageNo', 1)">
      1
    </button>
    <button v-if="StartAndEnd.start > 2">...</button>

    <!-- 中间页数 -->
    <button
      v-for="(page, index) in StartAndEnd.end"
      :key="index"
      v-show="page >= StartAndEnd.start"
      @click="$emit('getPageNo', page)"
      :class="{ active: pageNo == page }"
    >
      {{ page }}
    </button>

    <button v-if="StartAndEnd.end < totalPage - 1">...</button>
    <!-- 总页数 -->
    <button
      v-if="StartAndEnd.end < totalPage"
      @click="$emit('getPageNo', totalPage)"
    >
      {{ totalPage }}
    </button>
    <!-- 下一页 -->
    <button
      :disabled="pageNo == totalPage"
      @click="$emit('getPageNo', pageNo + 1)"
    >
      下一页
    </button>
    <!-- 总条数 -->
    <button>共 {{ total }} 条</button>
  </div>
</template>

<script>
export default {
  name: "SPHPagination",
  props: ["pageNo", "pageSize", "total", "continues"],
  computed: {
    // 总共多少页
    totalPage() {
      // 向上取整
      return Math.ceil(this.total / this.pageSize);
    },
    // 连续页码数continues=5 假如当前页码数pageNo=8 页面应该显示码数为  6 7 8 9 10 页面显示始终在最中间
    StartAndEnd() {
      // 解构 方便使用
      const { continues, pageNo, totalPage } = this;
      // 页码开始值start 页码结束值end
      let start = 0,
        end = 0;
      // 不正常现象 连续页码数大于页面总数时
      if (continues > totalPage) {
        start = 1;
        end = totalPage;
      } else {
        // 正常现象
        start = pageNo - parseInt(continues / 2);
        end = pageNo + parseInt(continues / 2);
      }
      // 页码开始值 < 1
      if (start < 1) {
        start = 1;
        end = continues;
      }
      // 页码结束值 > 总页数
      if (end > totalPage) {
        start = totalPage - continues + 1;
        end = totalPage;
      }
      return { start, end };
    },
  },
};
</script>

<style lang='less'>
.pagination {
  text-align: center;
  button {
    margin: 0 5px;
    background-color: #f4f4f5;
    color: #606266;
    outline: none;
    border-radius: 2px;
    padding: 0 4px;
    vertical-align: top;
    display: inline-block;
    font-size: 13px;
    min-width: 35.5px;
    height: 28px;
    line-height: 28px;
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    border: 0;

    &[disabled] {
      color: #c0c4cc;
      cursor: not-allowed;
    }

    &.active {
      cursor: not-allowed;
      background-color: #409eff;
      color: #fff;
    }
  }
}
.active {
  background: skyblue;
}
</style>