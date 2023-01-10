<template>
    <Navbar2/>
    <TabNav :tabs="['Images','Batch Images']" :selected="selected" @selected="setSelected">
        <tab :isSelected="selected ==='Images'">
            <h4>Images</h4>
            <section class=" d-flex  justify-content-center align-items-center mt-4 mb-5 container contain ">
                <div class="d-flex flex-column  align-items-center   " >
                 <h4>0 Image mined (no data to show yet)</h4>
                </div>
            </section>
        </tab>
 
        <tab :isSelected="selected ==='Batch Images'">
        
        </tab>
       </TabNav>
     <div class="container contain">
        
   
    
     </div>
     
</template>

<script>
import Navbar2 from '../components/Navbar2.vue';
import TabNav from '../components/TabNav.vue'
import Tab from '../components/Tab.vue';
    export default {
        components:{
       Navbar2,
       TabNav,
       Tab
      }, 
      data(){
        return {
          selected:'Images',
        }

      },
      methods :{
          setSelected(tab){
            this.selected= tab;
          }
        },

    }
</script>

<style scoped>
.contain{
    padding-left: 180px;
    padding-right: 40px;
}
</style>