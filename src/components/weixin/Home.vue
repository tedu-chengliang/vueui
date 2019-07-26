<template>
    <div>
        <titlebar></titlebar>
        <mt-tabbar v-model="selected">
            <mt-tab-item id="tab1">
                <img slot="icon" src="../../assets/img/100x100.png">
                tab1
            </mt-tab-item>
            <mt-tab-item id="tab2">
                <img slot="icon" src="../../assets/img/100x100.png">
                tab2
            </mt-tab-item>
            <mt-tab-item id="tab3">
                <img slot="icon" src="../../assets/img/100x100.png">
                tab3
            </mt-tab-item>
            <mt-tab-item id="tab4">
                <img slot="icon" src="../../assets/img/100x100.png">
                tab4
            </mt-tab-item>
        </mt-tabbar>
    </div>
</template>
<script>
import TitleBar from './common/TitleBar'
export default {
    data() {
        return {
            selected:'tab1'
        }
    },
    components:{
        "titlebar":TitleBar
    }
}
</script>
<style lang="" scoped>
    
</style>