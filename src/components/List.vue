<template>
    <div>
        <mt-header fixed title="固定在顶部"></mt-header>
        <mt-tabbar v-model="selected">
  <mt-tab-item id="外卖">
    <img slot="icon" src="../assets/menu1.png">
    外卖
  </mt-tab-item>
  <mt-tab-item id="订单">
    <img slot="icon" src="../assets/menu2.png">
    订单
  </mt-tab-item>
  <mt-tab-item id="发现">
    <img slot="icon" src="../assets/menu3.png">
    发现
  </mt-tab-item>
  <mt-tab-item id="我的">
    <img slot="icon" src="../assets/menu4.png">
    我的
  </mt-tab-item>
</mt-tabbar>

    <mt-button @click.native="handleClick">点击触发 handleClick</mt-button>

    </div>
</template>
<script>
import { Toast } from 'mint-ui';
import { MessageBox } from 'mint-ui';
export default {
    name: 'Login',
    data: function(){
        return {
            selected: 1
        }
    },
    methods: {
        handleClick(){
            MessageBox({
                title: '提示',
                message: '确定执行此操作?',
                showCancelButton: true
            });
        }
    }
}
</script>
<style>
    
</style>