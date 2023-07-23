<template>
  <div>
    <!-- 顶部注释 -->
    <div
      style="border: 1px solid blue; position: fixed; top: 0; left: 0; right: 0;height:5%"
    >
      <input placeholder="请输入内容" /><button>搜索</button>
    </div>
    <div class="intermediateMass" style="position: fixed; top: 5%; left: 0 ;right:0;height:82%">
      <!-- 中间菜单 -->
      <div
        class="middenMenu"
        style="
          border: 1px solid red;
          overflow: hidden;
          margin-top: ;
          background: white;
        "
      >
        <ul>
          <i class="el-icon-food"></i>
          <li>吃</li>
        </ul>

        <ul>
          <i class="el-icon-ice-drink"></i>
          <li>喝</li>
        </ul>

        <ul>
          <i class="el-icon-basketball"></i>
          <li>玩</li>
        </ul>

        <ul>
          <i class="el-icon-headset"></i>
          <li>乐</li>
        </ul>
        <ul>
          <i class="el-icon-shopping-bag-2"></i>
          <li>衣</li>
        </ul>

        <ul>
          <i class="el-icon-dish"></i>
          <li>食</li>
        </ul>

        <ul>
          <i class="el-icon-office-building"></i>
          <li>住</li>
        </ul>

        <ul>
          <i class="el-icon-bicycle"></i>
          <li>行</li>
        </ul>
      </div>
      <!-- 店铺名称 -->
      <div
        class="storeName"
      >
        <div class="oneCard">
          <div>
            <img src="@/assets/img/sl.png" alt="" />
          </div>
          <div>
            <ul>
              <li>小王早餐铺</li>
              <li>面，面包，烧饼，饭团，咖啡等等</li>
            </ul>
          </div>
        </div>
        <div class="oneCard">
          <div>
            <img src="@/assets/img/sl.png" alt="" />
          </div>
          <div>
            <ul>
              <li>小王早餐铺</li>
              <li>面，面包，烧饼，饭团，咖啡等等</li>
              <li class="imgLi"><img src="@/assets/img/sl.png" alt=""></li>
              <li class="imgLi"><img src="@/assets/img/sl.png" alt=""></li>
              <li class="imgLi"><img src="@/assets/img/sl.png" alt=""></li>
              <li class="imgLi"><img src="@/assets/img/sl.png" alt=""></li>
              <li class="imgLi"><img src="@/assets/img/sl.png" alt=""></li>
            </ul>
          </div>
        </div>
        <div class="oneCard">
          <div>
            <img src="@/assets/img/sl.png" alt="" />
          </div>
          <div>
            <ul>
              <li>小王早餐铺</li>
              <li>面，面包，烧饼，饭团，咖啡等等</li>
            </ul>
          </div>
        </div>
        <div class="oneCard">
          <div>
            <img src="@/assets/img/sl.png" alt="" />
          </div>
          <div>
            <ul>
              <li>小王早餐铺</li>
              <li>面，面包，烧饼，饭团，咖啡等等</li>
            </ul>
          </div>
        </div>
        <div class="oneCard">
          <div>
            <img src="@/assets/img/sl.png" alt="" />
          </div>
          <div>
            <ul>
              <li>小王早餐铺</li>
              <li>面，面包，烧饼，饭团，咖啡等等</li>
            </ul>
          </div>
        </div>
        <div class="oneCard">
          <div>
            <img src="@/assets/img/sl.png" alt="" />
          </div>
          <div>
            <ul>
              <li>小王早餐铺</li>
              <li>面，面包，烧饼，饭团，咖啡等等</li>
            </ul>
          </div>
        </div>
        <div class="oneCard">
          <div>
            <img src="@/assets/img/sl.png" alt="" />
          </div>
          <div>
            <ul>
              <li>小王早餐铺</li>
              <li>面，面包，烧饼，饭团，咖啡等等</li>
            </ul>
          </div>
        </div>
        <div class="oneCard">
          <div>
            <img src="@/assets/img/sl.png" alt="" />
          </div>
          <div>
            <ul>
              <li>小王早餐铺</li>
              <li>面，面包，烧饼，饭团，咖啡等等</li>
            </ul>
          </div>
        </div>
        <div class="oneCard">
          <div>
            <img src="@/assets/img/sl.png" alt="" />
          </div>
          <div>
            <ul>
              <li>小王早餐铺</li>
              <li>面，面包，烧饼，饭团，咖啡等等</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- 底部按钮 -->
    <div
      class="bottomButton"
      style="border: 1px solid green; height: 13%; background: white"
    >
      <ul>
        <i class="el-icon-edit"></i>
        <li>首页</li>
      </ul>

      <ul>
        <i class="el-icon-tickets"></i>
        <li>订单</li>
      </ul>

      <ul>
        <i class="el-icon-shopping-cart-2"></i>
        <li>购物车</li>
      </ul>

      <ul>
        <i class="el-icon-user"></i>
        <li>我的</li>
      </ul>
    </div>
  </div>
</template>
<script></script>
<style>
body {
  font-family: "Microsoft YaHei";
  font-size: 14px;
  margin: 0;
  padding: 0;
}
ul {
  list-style-type: none;
}
.bottomButton > ul,
.middenMenu > ul {
  float: left;
  width: 20%;
  list-style-type: none;
  padding-left: 4%;
}
ul > li {
  padding-top: 3px;
}
i {
  font-size: 40px;
}
.bottomButton {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
}
.storeName {
  width: 100%;
  height: 100%;
  position: relative;
  top: 0;
  left: 0;
}
img {
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 10px 100px / 10px
}
.oneCard {
  display: flex;
}
.intermediateMass {
  overflow-y: auto;
  overflow-x:hidden
}
.imgLi{
    width:100%;
    height: 100%;
    padding-top:0;
   

}
.imgLi>img{
    width:30px;
    height: 30px;
    object-fit: cover;
    float: left;
    padding-top: 10px;
    padding-left: 10px;
    border-radius:25% 10%;
}
</style>
