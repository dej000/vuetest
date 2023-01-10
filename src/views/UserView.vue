<template>
    <div>
        <SideNavVue/>
        <router-view></router-view>
    </div>
</template>

<script>
import SideNavVue from '../components/SideNav.vue';
export default {
    data () {
        

        return {}
    },
    components :{
            SideNavVue
            
        },
}
</script>

<style lang="scss" scoped>

</style>