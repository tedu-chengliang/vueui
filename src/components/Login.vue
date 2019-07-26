<template>
    <div>
        <h2>这是登录的网页</h2>
        <mt-button type="default">default</mt-button>
        <mt-button type="primary">primary</mt-button>
        <mt-button type="danger">danger</mt-button>
        <h2>tabbar</h2>
        <mt-cell title="标题文字"></mt-cell>
        <mt-cell title="标题文字" value="说明文字"></mt-cell>
        <h2>NavBar</h2>
    </div>
</template>
<script>

export default {
    name: 'Login',
    data: function(){
        return {
            selected: 1
        }
    }
}
</script>
<style>
    
</style>