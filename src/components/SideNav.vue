<template>
    <div class="sidebar p-4 ">
      <a class="navbar-brand mb-5" href="/"><img :src="Logo" alt=""></a>
      <ul class="list-unstyled d-grid gap-4  "  id="myDIV" >
          <li>   <router-link   class="btn log "  to="/dashboard">Dashboard</router-link></li>
          <li> <router-link   class="btn log "  to="/imageupload">Image Upload</router-link></li>
          <li><router-link   class="btn log "  to="/images">Images</router-link></li>
          <li>   <router-link   class="btn log "  to="/billing">Billings</router-link></li>
      </ul>
    </div>
  
  </template>
  
  
  <script>
  import Logo from '../assets/Logo.svg'
  
      export default {
        
          data(){
            return{
              Logo:Logo
            }
       
          }
      }
  </script>
  
  <style scoped>
   .sidebar{
      color: black;
      background: #FBFBFB;
     float: left;
     position: fixed;
     z-index: 1;
     top: 0;
     left: 0;
     bottom: 0;
     display: flex;
     flex-direction: column;
  
   }
  
   a{
      text-decoration: none;
      color: black;
      gap: 10px;
   }

   .sidebar li:hover {
    background: rgba(255,226,204,.5);
    border-radius: 4px;
    border-right: 4px solid #ff6c00;
}

a  .router-link-exact-active{
  background: rgba(255,226,204,.5);
  border-radius: 4px;
  border-right: 4px solid #ff6c00;
}

  </style>