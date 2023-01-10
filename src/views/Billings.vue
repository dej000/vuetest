<template>
  <Navbar2/>

  <div class="container contain mt-5 mb-5">
        
    <h4>Billing & Payments</h4>
    
     </div>
  <section class=" container contain  ">
    <div class="border p-4">
      <div class="row mb-4 " >
        <div class="col">
         <h4>Plan details</h4>
        </div>
        <div class="col">
         <h4 class="text-danger">Check plan benefits</h4>
        </div>
         

       </div>

       <div class="row mb-4 border p-2" >
         <div class="col">
          <p>Plan</p>
          <h5>Discripto Standard</h5>
         </div>
         <div class="col">
          <p >price</p>
          <h5>$14/month</h5>
         </div>
          

        </div>
      

        <div class="row mb-4 " >
         <div class="col">
          <p class="text-danger">Cancel Discripto Standard Plan</p>
         </div>
        
          

        </div>

    </div>
       

    </section>

    <section class=" container contain  ">
      <div class="border p-4">
        <div class="row mb-4  " >
          <div class="col ">
           <h4>Billing history</h4>
          </div>
         </div>
   
         <div class="row mb-4  p-2 " >
           <div class="mb-3 border">
            <p>Discripto Standard Plan Subscription - $14</p>
            <small class="text-secondary">Nov 10, 2022</small>
           </div>
           <div class="border">
             <p>Discripto Standard Plan Subscription - $14</p>
            <small class="text-secondary">Nov 10, 2022</small>
           </div>
            
   
          </div>
        
   
          <div class="row mb-4 " >
           <div class="col">
            <p class="text-danger">Cancel Discripto Standard Plan</p>
           </div>
          
            
   
          </div>
      </div>
      


  </section>
</template>

<script>
import Navbar2 from '../components/Navbar2.vue';
    export default {
       components:{
        Navbar2
       } 
    }
</script>

<style lang="scss" scoped>

</style>