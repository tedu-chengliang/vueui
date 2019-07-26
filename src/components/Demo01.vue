<template>
    <div>
        <h2>ajax请求</h2>
        <button @click="handleClick">按钮</button>
    </div>
</template>
<script>

export default {
    name: 'Login',
    data: function(){
        return {
            selected: 1
        }
    },
    methods: {
        handleClick(){
            this.$http.get('/movie/top250').then((result) => {
                console.log(result);
            }).catch((err) => {
                
            });
        }
    },
}
</script>
<style>
    
</style>