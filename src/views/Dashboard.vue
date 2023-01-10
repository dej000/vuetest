<template>
      <Navbar2/>
      <TabNav :tabs="['Batch Upload','Single Upload']" :selected="selected" @selected="setSelected">
       <tab :isSelected="selected ==='Batch Upload'">
        <section class="contain">
         

          <div class="d-flex justify-content-end mb-5">
           <div class="box col-3  text-center p-4">
             <p class="mb-2">Total number of batches</p> 
              <p >{{batch_count}}</p>
             </div>
          </div>
             

            
        </section>


        <section class="mb-5 ">
          <div class="container">
            <div class="dropdown d-flex justify-content-between align-items-center  ms-5  border border-warning pt-2 pb-2">
              <div>
                <p class="ms-5">Last 5 Days Activity</p>
              </div>
              <div>
              <button class="btn border-0 dropdown-toggle " type="button" data-bs-toggle="dropdown" aria-expanded="true" fdprocessedid="33qo0c">
                
            </button>
            <ul class="dropdown-menu dropdown-menu" style="position: absolute; inset: 10px auto auto 0px; margin-top: 10px ; transform: translate3d(0px, 40px, 0px) ;    width: 100%;" data-popper-placement="bottom-start">
              <li><a class="dropdown-item active" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="#">Separated link</a></li>
            </ul>
              </div>
              
            </div>
               
        
          </div>
          
         </section>
         <section  class=" d-flex flex-column  justify-content-center align-items-center mt-4 mb-5">
          <ul class="d-flex gap-5 list-unstyled align-items-center ">
            <li><span class="dot"></span> Tagged</li>
            <li><span class="dot1"></span>Untagged</li>
          </ul>
         

          <!-- <LineChart :chartData="testData" class="col-8 container"/> -->
      </section>
       </tab>

       <tab :isSelected="selected ==='Single Upload'">
        <section class="contain">
         

          <div class="d-flex justify-content-end mb-5">
           <div class="box col-3  text-center p-4">
             <p class="mb-2">Total Mined Images</p> 
              <p >{{batch_count}}</p>
             </div>
          </div>
             

            
        </section>

       </tab>
      </TabNav>
    
        

         
  
</template>

<script>

import Screenshot from '../assets/Screenshot.png'
import instance from '../helper/helper'
import Navbar2 from '../components/Navbar2.vue';
import TabNav from '../components/TabNav.vue'
import { LineChart } from 'vue-chart-3';
import { Chart, registerables } from "chart.js";
import Tab from '../components/Tab.vue';

Chart.register(...registerables);
    export default {
      data(){
        return {
          Screenshot:Screenshot,
          batch_count:null,
          selected:'Batch Upload',
           testData : {
      labels: [],
      datasets: [
        {
          data: [30, 40, 60, 70, 5],
          backgroundColor: ['#77CEFF', '#0079AF', '#123E6B', '#97B0C4', '#A5C8ED'],
        },
      ],
    }

        }

      },
      components:{
       Navbar2,
       TabNav,
       LineChart,
            Tab 
      },

        
        methods :{
          countProcess(){
          instance.get('batch-service/count-process').then((res)=>{
          this.batch_count = res.data.batch_count
          })
          },
          countBatch(){
            instance.get('batch-service/count-batches').then((res)=>{
          this.testData.datasets[0].data  = res.data;
          this.testData.labels=res.data;
          })
          },
          setSelected(tab){
            this.selected= tab;
          }
        },

        beforeMount(){
          this.countProcess(),
          this.countBatch()
        },
    }
</script>

<style scoped>


.tablist {
    background: #fffbfa;
    border: 1px solid #ff6c00;
    border-radius: 8px;
    margin-bottom: 20px;
   max-width: 550px;
    padding: 8px;
    align-items: center;
  }

.contain{
    padding-left: 180px;
    padding-right: 40px;
}


.sign{
    width: 200px;
    background-color: #FF6C00;
    color: white;
  
  }
  .box{
    background-color: #f1e5dc;
   
  }

  .box2{
    background-color: #f4f2f1;
    display: flex;
    gap: 12rem;
  }

 h5,p{
    margin: 0;
  }
  .dropdown-menu{
    margin-top: 10px !important;
  }
  .dot {
    height: 15px;
    width: 15px;
    background-color:#FF6C00;
    border-radius: 50%;
    display: inline-block;
  }

  .dot1{
    height: 15px;
    width: 15px;
    background-color:#000000;
    border-radius: 50%;
    display: inline-block;
  }
 
</style>