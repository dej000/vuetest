<template>
    <div class="sidebar p-4 ">
      <a class="navbar-brand mb-5" href="/"><img :src="Logo" alt=""></a>
      <ul class="list-unstyled d-grid gap-4  " >
          <li><a href="">Dashboard</a></li>
          <li><a href="">Image Upload</a></li>
          <li><a href="">Images</a></li>
          <li><a href="">Billings</a></li>
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
  </style>