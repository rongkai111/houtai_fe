<template>
  <el-container style="height: 100%; border: 1px solid #eee">
    <el-aside width="200px" style="background-color: #324157">
      <!-- :default-openeds="['1', '3']" -->
      <!-- 刷新页面自动打开列表 -->
      <el-menu
        background-color="#324157"
        text-color="#fff"
        active-text-color="#ffd04b"
        style="border: none"
      >
        <el-menu-item index="manage">
          <i class="el-icon-menu"></i>
          <router-link to="/home" active-class="active" class="font-color color-active">首页</router-link>
        </el-menu-item>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-document"></i>
            <span class="font-color">数据管理</span>
          </template>
          <el-menu-item index="userList" class="bg-color">
            <router-link to="/userlist" active-class="active" class="font-color color-active">用户列表</router-link>
          </el-menu-item>
          <el-menu-item index="shop" class="bg-color">
            <router-link to="/shop" active-class="active" class="font-color color-active">商家列表</router-link>
          </el-menu-item>
          <el-menu-item index="foodList" class="bg-color">
            <router-link to="/foodlist" active-class="active" class="font-color color-active">食品列表</router-link>
          </el-menu-item>
          <el-menu-item index="orderList" class="bg-color">
            <router-link to="/orderlist" active-class="active" class="font-color color-active">订单列表</router-link>
          </el-menu-item>
          <el-menu-item index="adminList" class="bg-color">
            <router-link to="/adminlist" active-class="active" class="font-color color-active">管理员列表</router-link>
          </el-menu-item>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-plus"></i>
            <span class="font-color">添加数据</span>
          </template>
          <el-menu-item index="addShop" class="bg-color">
            <router-link to="/addshop" active-class="active" class="font-color color-active">添加商铺</router-link>
          </el-menu-item>
          <el-menu-item index="addGoods" class="bg-color">
            <router-link to="/addfoods" active-class="active" class="font-color color-active">添加商品</router-link>
          </el-menu-item>
        </el-submenu>
        <el-submenu index="4">
          <template slot="title">
            <i class="el-icon-star-on"></i>
            <span class="font-color">图表</span>
          </template>
          <el-menu-item index="visitor" class="bg-color">
            <router-link to="/visitor" active-class="active" class="font-color color-active">用户分布</router-link>
          </el-menu-item>
        </el-submenu>
        <el-submenu index="5">
          <template slot="title">
            <i class="el-icon-edit"></i>
            <span class="font-color">编辑</span>
          </template>
          <el-menu-item index="vueEdit" class="bg-color">
            <router-link to="/vueedit" active-class="active" class="font-color color-active">文本编辑</router-link>
          </el-menu-item>
        </el-submenu>
        <el-submenu index="6">
          <template slot="title">
            <i class="el-icon-setting"></i>
            <span class="font-color">设置</span>
          </template>
          <el-menu-item index="adminSet" class="bg-color">
            <router-link to="/adminset" active-class="active" class="font-color color-active">管理员设置</router-link>
          </el-menu-item>
        </el-submenu>
        <el-submenu index="7">
          <template slot="title">
            <i class="el-icon-warning"></i>
            <span class="font-color">说明</span>
          </template>
          <el-menu-item index="explain" class="bg-color">
            <router-link to="/explain" active-class="active" class="font-color color-active">说明</router-link>
          </el-menu-item>
        </el-submenu>
      </el-menu>
    </el-aside>

    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <!-- <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/manage' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item v-for="(item, index) in $route.meta" :key="index">{{item}}</el-breadcrumb-item>
        </el-breadcrumb>-->
        <el-dropdown>
          <i class="el-icon-setting" style="margin-right: 15px"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="home">
              <router-link to="/home" active-class="active">首页</router-link>
            </el-dropdown-item>
            <el-dropdown-item command="signout">
              <router-link to="/home" active-class="active">退出</router-link>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <span>嘿嘿哈嘿</span>
      </el-header>

      <el-main>
        <keep-alive :include="$route.meta.name">
          <router-view></router-view>
        </keep-alive>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    // console.log(this.$route);
  }
};
</script>

<style lang="stylus">
.el-header {
  background-color: #eff2f7;
  color: #333;
  line-height: 60px;
}

.bg-color {
  background-color: #1f2d3d !important;

  &:hover {
    background-color: #48576a !important;
  }
}

.font-color {
  color: #bfcbd9 !important;
}

.color-active {
  &.active {
    color: #20a0ff !important;
  }
}

a {
  display: inline-block;
  width: 100%;
  height: 100%;
}

.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.avatar-uploader .el-upload:hover {
  border-color: #20a0ff;
}

.avatar-uploader-icon {
  font-size: 20px;
  color: #8c939d;
  width: 120px;
  height: 120px;
  line-height: 120px;
  text-align: center;

  &::before {
    line-height: 120px;
  }
}

.avatar {
  width: 120px;
  height: 120px;
  display: block;
}
</style>