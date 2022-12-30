<template>
    <SideNavVue/>
  
    
        <nav class="navbar fixed contain ">
         
           <div class="container p-2 mb-4">
           
             <form class="d-flex col-8" role="search">
               <input class="form-control me-2 " type="search" placeholder="Search" aria-label="Search">
           
             </form>
             <div class="user-image d-flex">
               <img class="rounded-circle m-2" :src="Screenshot" alt="">
               <div class="profile-name"><h6>Ayodeji Ajani</h6>
                   <small>Admin ID no.1234</small></div>
               
               <div class="dropdown">
                   <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                     
                   </button>
                   
                 </div>
           </div>
           </div>
         </nav>
         <section class="contain">
            <div class="container d-flex justify-content-between  p-3 mb-4">
           
                <div class="box p-4 col-3 text-center" >
                  <h4>Images</h4>
                  <p>0</p>
                </div>
                <div class="">
                      <button class="btn sign ">View Documentation</button>     
              </div>
              </div>

              <div class="container">
                <h4 class="mb-4">API Details:</h4>
                <div class="d-flex flex-column gap-4">
                    <div class="box2  p-2">
                       <h5 class="">API Key</h5>
                        <p class="">acc_g87388d6f96b564</p>
                            <p>ggg</p>       
                    </div>

                    <div class="box2  p-2">
                        <h5 class="">API Key</h5>
                         <p class="">acc_g87388d6f96b564</p>
                             <p>ggg</p>       
                     </div>

                     <div class="box2  p-2">
                        <h5 class="">API Key</h5>
                         <p class="">acc_g87388d6f96b564</p>
                             <p>ggg</p>       
                     </div>

                     <div class="box2  p-2">
                        <h5 class="">API Key</h5>
                         <p class="">acc_g87388d6f96b564</p>
                             <p>ggg</p>       
                     </div>
                    
                  </div>
              </div>
              
         </section>
        
  
</template>

<script>
import SideNavVue from '../components/SideNav.vue';
import Screenshot from '../assets/Screenshot.png'
    export default {
      data(){
        return {
          Screenshot:Screenshot
        }
      },
        components :{
            SideNavVue
            
        }
    }
</script>

<style scoped>
.contain{
    padding-left: 180px;
    padding-right: 40px;
}
.user-image img{
    width: 40px;
    height: 40px;
    border-radius: 50%;
   object-fit: cover;
   
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
</style>