<template>
    
    <nav class="navbar  fixed contain ">
         
        <div class="container p-2 mb d-flex d-flex justify-content-end">
       
          <div class="user-image d-flex align-items-center ">
            <img class="rounded-circle m-2" :src="Screenshot" alt="">
            <div class="profile-name"><h6>Ayodeji Ajani</h6>
                </div>
            
            <div class="dropdown">
                <button class="btn dropdown-toggle border-0" type="button" data-bs-toggle="dropdown" aria-expanded="true">
                  
                </button>
                <ul class="dropdown-menu dropdown-menu-light">
                  <li><a class="dropdown-item active" href="#">Set profile picture </a></li>
                  <li><a class="dropdown-item" href="#">Account settings</a></li>
                  <li><a class="dropdown-item" href="#">Logout</a></li>
                  
                </ul>
              </div>
        </div>
        </div>
      </nav>

    
</template>

<script>
    export default {
        
    }
</script>

<style  scoped>
a{
  color: black;
}
.user-image img{
    width: 40px;
    height: 40px;
    border-radius: 50%;
   object-fit: cover;
   
}


.contain{
    padding-left: 180px;
    padding-right: 40px;
}

.tablist {
    background: #fffbfa;
    border: 1px solid #ff6c00;
    border-radius: 8px;
    margin-bottom: 20px;
   max-width: 550px;
    padding: 8px;
    align-items: center;
  }
  .dropdown-menu[data-bs-popper] {
    top: 100%;
    left: -156px;
    margin-top: var(--bs-dropdown-spacer);
}

</style>