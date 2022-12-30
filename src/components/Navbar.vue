
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
<template>
  <nav class="navbar navbar-expand-lg bg-light ">
      <div class="container">
        <a class="navbar-brand" href="/"><img :src="Logo" alt=""/></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end gap-3 " id="navbarNav">
          <ul class="navbar-nav gap-3">
            
            <li class="nav-item">
              <a class="nav-link  text-black" href="#">API Documentation</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-black" href="#">Pricing</a>
            </li>
          
          </ul>
          <div class="d-flex gap-4 ">
     <router-link   class="btn log "  to="/login">login</router-link>
            <router-link  class="btn sign " to="/signup">Sign Up</router-link>
             
          </div>
        </div>
      </div>
    </nav>
</template>
<style scoped>
 .log{
    border: 1.5px solid #FF6C00;
    color: #FF6C00;
    width: 150px;
 }

 .sign{
    width: 150px;
    background-color: #FF6C00;
    color: white;

 }
</style>