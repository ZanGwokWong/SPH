<template>
  <!-- 头部 -->
  <header class="header">
    <!-- 头部的第一行 -->
    <div class="top">
      <div class="container">
        <div class="loginList">
          <p>尚品汇欢迎您！</p>
          <p v-if="!userName">
            <span>请</span>
            <router-link to='/login'>登录</router-link>
            <router-link to='/register' class="register">免费注册</router-link>
          </p>
          <p v-else>
            <a href="###">{{userName}}</a>
            <a href="###" class="register" @click="logout">退出登录</a>
          </p>
        </div>
        <div class="typeList">
          <router-link to = '/center/myorder'><a href="###">我的订单</a></router-link>
          <router-link to = '/shopcart'> <a href="###">我的购物车</a></router-link>
          <a href="###">我的尚品汇</a>
          <a href="###">尚品汇会员</a>
          <a href="###">企业采购</a>
          <a href="###">关注尚品汇</a>
          <a href="###">合作招商</a>
          <a href="###">商家后台</a>
        </div>
      </div>
    </div>
    <!--头部第二行 搜索区域-->
    <div class="bottom">
      <h1 class="logoArea">
        <router-link class="logo" to='/'>
          <img src="./logo.png" alt="" />
        </router-link>
      </h1>
      <div class="searchArea">
        <form action="###" class="searchForm">
          <input
            type="text"
            id="autocomplete"
            class="input-error input-xxlarge"
            v-model="Keyword"
          />
          <button class="sui-btn btn-xlarge btn-danger" type="button" @click="goSearch">
            搜索
          </button>
        </form>
      </div>
    </div>
  </header>
</template>

<script>
import Store from '@/store'
export default {
  data() {
    return {
      Keyword:''
    }
  },
  methods: {
    goSearch() {
      //代表的是如果有query参数也带过去
      if (this.$route.query) {
        let loction = {
          name: "search",
          params: { keyword:this.Keyword || undefined },
        };
        loction.query = this.$route.query;
        this.$router.push(loction);
      }
    },
    // 退出登录
    async logout(){
      try {
        await this.$store.dispatch('UserLogout')
        this.$router.push('/')
      } catch (error) {
        alert(error.message)
      }
    }
  },
  mounted(){
     //通过全局事件总线清除关键字
    this.$bus.$on("clear", () => {
      this.Keyword = "";
    });
  },
  computed:{
    userName(){
      return Store.state.register.name
    }
  }
};
</script>

 <style lang="less">
        .header {
        &>.top {
            background-color: #eaeaea;
            height: 30px;
            line-height: 30px;

            .container {
                width: 1200px;
                margin: 0 auto;
                overflow: hidden;

                .loginList {
                    float: left;

                    p {
                        float: left;
                        margin-right: 10px;

                        .register {
                            border-left: 1px solid #b3aeae;
                            padding: 0 5px;
                            margin-left: 5px;
                        }
                    }
                }

                .typeList {
                    float: right;

                    a {
                        padding: 0 10px;

                        &+a {
                            border-left: 1px solid #b3aeae;
                        }
                    }

                }

            }
        }

        &>.bottom {
            width: 1200px;
            margin: 0 auto;
            overflow: hidden;

            .logoArea {
                float: left;

                .logo {
                    img {
                        width: 175px;
                        margin: 25px 45px;
                    }
                }
            }

            .searchArea {
                float: right;
                margin-top: 35px;

                .searchForm {
                    overflow: hidden;

                    input {
                        box-sizing: border-box;
                        width: 490px;
                        height: 32px;
                        padding: 0px 4px;
                        border: 2px solid #ea4a36;
                        float: left;

                        &:focus {
                            outline: none;
                        }
                    }

                    button {
                        height: 32px;
                        width: 68px;
                        background-color: #ea4a36;
                        border: none;
                        color: #fff;
                        float: left;
                        cursor: pointer;

                        &:focus {
                            outline: none;
                        }
                    }
                }
            }
        }
    }
 </style>