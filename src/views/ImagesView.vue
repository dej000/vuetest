<template>
    <Navbar2/>
    <TabNav :tabs="['Images','Batch Images']" :selected="selected" @selected="setSelected">
        <tab :isSelected="selected ==='Images'">
            <h4>Images</h4>
            <section class=" container  col-12  ">
                <div class="d-flex flex-column  align-items-center   " >
                
                 <table class="table">
                    <thead>
                      <tr  class="table-secondary">
                        <th scope="col">S/No</th>
                        <th scope="col">Picture</th>
                        <th scope="col">Picture ID</th>
                        <th scope="col">Date Mined</th>
                        <th scope="col">Details</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="image in images" :key="image.id">
                        <th scope="row">{{}}</th>
                        <td>{{}}</td>
                        <td>{{}}</td>
                        <td>{{}}</td>
                        <td>{{}}</td>
                        <td>{{}}</td>
                      </tr>
                     
                    </tbody>
                  </table>
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
import instance from '../helper/helper'
    export default {
        components:{
       Navbar2,
       TabNav,
       Tab
      }, 
      data(){
        return {
          selected:'Images',
          mined_image:null,
          images: [
        { id: 1, name: 'John', age: 25 },
        { id: 2, name: 'Jane', age: 30 },
        { id: 3, name: 'Bob', age: 35 },
      ],
        }

      },
      methods :{
          setSelected(tab){
            this.selected= tab;
          },
          minedImage(){
          instance.get('admin/mined-images').then((res)=>{
           console.log(res)
           this.mined_image = res.data.data
          })
          },
        },
        beforeMount(){
         this.minedImage()
         
        },

    }
</script>

<style scoped>
.contain{
    padding-left: 180px;
    padding-right: 40px;
}
</style>