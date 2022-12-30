<template>
    
    <footer class="text-white ">
        <div class="container foot d-flex gap-5  ">
            <div class="d-flex  foot1  col-8  ">
                <div >
                    <h4>COMPANY</h4>
                    <ul class="list-unstyled text-center">
                    <li>About</li>
                    <li>FAQ</li>
                    <li>How it Works</li>
                    <li>Get in Touch</li>
                    </ul>
                </div>
    
                <div>
                    <h4>Resources</h4>
                    <ul class="list-unstyled  text-center">
                    <li >Pricing</li>
                    <li>Why Discripto</li>
                    </ul>
                </div>
    
                <div>
                    <h4>Legal</h4>
                    <ul class="list-unstyled  text-center">
                    <li>Terms</li>
                
                    </ul>
                </div>

                
            </div>
           

           
            <div class="">
                <img class="mb-3" src="https://discripto.hng.tech/static/media/logo-footer.de94562dbe8a93c2014723bfa93e9b8b.svg" alt="">
                <p>Subscibe to our newsletter</p>
                <form action="">
                    <input class="p-3" type="email" placeholder="Enter Email Address">
                    <button>subscribe</button>
                </form>
    
            </div>
          
        
       
        </div>
        <div class="d-flex justify-content-center align-items-center ">
            <div class="bord"></div>
            <p class="text-center f-5 me-2">© 2022 Discripto. All rights reserved.</p>
            <div class="bord"></div>
        </div>
      
    </footer>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.bord{
    background-color: white;
    height: 2px;
    width: 30%;
    display: block;
}
.foot1{
  display: flex;
  gap: 150px;
}
footer{
    background-color: #09264C;
    height: 100%;
    padding: 30px;
}

input{
    border-radius: 10px 0 0 10px;
    height: 54px;
    outline: none;
   
}
button{
    height: 51px;
    border-top-right-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
    color: white;
    background-color: #FF6C00;
    border: #FF6C00;
}

li{
 padding-bottom: 20px;
}

form{
    width: 100%;
    margin-bottom: 20px;
}

@media(max-width:1140px){
    .foot1 {
        display: flex;
        gap: 100px;
    }
}

@media(max-width:990px){
    footer{
        padding: 15px;
    }
    .foot{
        display: flex;
        flex-direction:column ;
        align-items: center;
         gap: 20px;
       
    }

    .foot1{
        display: flex;
        flex-direction:column ;
        align-items: center;
        width: 60%;
        gap: 30px;
    }
    h4{
        font-size: 24px;
    }
    .bord{
        display: none;
    }
}

</style>