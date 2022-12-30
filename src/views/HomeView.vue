<template>
  <NavbarVue/>
  <section id="home" class="">
    <div class="container hero text-center mb-5 ">
      <h2 class="mb-5">Discripto, Easy and Fast Image <br> Categorization Tool</h2>
      <p class="text-secondary mb-5">Discripto provides quick and simple large-scale <br> image categorization</p>
       <button class=" btn log">Watch Demo Video</button>
     </div>
  </section> 
   
   <section class="sec2 mb-5 ">
    <div class="container text-center  ">
      <h3 class="p-5">A Few of our Integrated <span>Industries</span> </h3>

      <div class="row gap-5 ">
        <div class="col">
          <div class="card" style="width: ;">
            <div class="card-body">
              <h3 class="card-title">E-Commerce</h3>
              <p class="card-text">The quickest, easiest way to get your products classified and categorized, cuts down on process time, so you can focus.</p>
              <a href="#" class="btn log2">Learn More</a>
            </div>
          </div>
        </div>
  
  
        
        <div class="col">
          <div class="card" style="width: ;">
            <div class="card-body">
              <h3 class="card-title">Hospitality</h3>
              <p class="card-text">Classification and labeling of images in addition to assisting you in finding files quickly and accurately. We also help you centralize your medical digital assets.</p>
              <a href="#" class="btn log2">Learn More</a>
            </div>
          </div>
        </div>
  
        
        <div class="col mb-5">
          <div class="card" style="width: ;">
            <div class="card-body">
              <h3 class="card-title">Search Engine</h3>
              <p class="card-text">Our API creates structured descriptions for image databases, for huge online picture libraries, saving them time, stress, and manual labor.</p>
              <a href="#" class="btn log2">Learn More</a>
            </div>
          </div>
        </div>
  
      </div>
  
    </div>

  </section>
   <section class="sec3  mb-5">
    <div class="container ">
      <h3 class="p-3 text-black  text-center ">How Discripto works </h3>

      <div class=" gap-5 ">
        <div class="">
          <div class="" style=" ;">
            <div class="d-flex info align-items-center container">
              <img src="https://discripto.hng.tech/static/media/works.8d30fdc86c185a9bb315ec8961d72b59.svg" alt="">
              <div class="">
            
                <h3 class="text-black">Get The Data You Need <br> From Your Images</h3>
                <p>Discripto is very easy to use and you can get several texts for several <br> images within a few seconds to a <br> few minutes.</p>
                <button class="btn sign">Watch Demo Video</button>
               </div>
            </div>
          </div>
        </div>
  
        
       
  
      </div>
    </div>
    
  </section> 

   <section class="sec4 vh- mb-5">
    <div class="container text-center  ">
      <h3 class="p-3 text-black">Benefits We Provide </h3>

      <div class="row gap-5">
        <div class="col">
          <div class="card bg-white p-3" style="width: 100%; ">
            <div class="card-body">
              <h4 class="card-title text-black">Classification & Categorization</h4>
              <p class="card-text text-black fs-6">Discripto is the first and only app that allows you to classify and categorize your photos in a faster, easier and more efficient way. With Discripto, you do not have to spend time laboriously categorizing thousands of photos. Discripto does it all for you!</p>
            </div>
          </div>
        </div>
  
  
        
        <div class="col">
          <div class="card bg-white " style="width: 100%; ">
            <div class="card-body">
              <h4 class="card-title text-black">Seamless integration with your website</h4>
              <p class="card-text text-black fs-6">Discripto is the perfect way to increase your website(s) functionality. Our seamless integration makes it easy to incorporate into your website, and our wide variety of features allows you to tailor Discripto to your specific needs. Plus, our affordable pricing makes Discripto a cost-effective way to improve your website.</p>
            </div>
          </div>
        </div>
  
        
     
      </div>
    </div>
     
  </section>
  <FooterNavVue/>
</template>

<script>
import NavbarVue from '../components/Navbar.vue';
import FooterNavVue from '../components/FooterNav.vue';


  export default {
    components:{
  NavbarVue,FooterNavVue
}
  }
</script>

<style  scoped>
.hero{
  margin-top: 6rem;
}
 h2{
  font-size: 50px;
 font-weight: bold;
 }

 p{
  font-size: 24px;
 }

 .log{
  border: 1.5px solid #FF6C00;
  color: #FF6C00;
  width: 260px;
  font-size: 24px;
  padding: 10px;
  background-color: white;
  
}

.sec2{
  background-color: #09264C;
}

h3{
  color: white;
  font-size: 40px;
  font-weight: bold;
}

h3 span{
  color: #FF6C00;
}

.card{
  background-color: #09264C;
}

.card h3{
  font-size: 36px;
}

.card p{
  font-size: 20px;
  color: white;
}

.log2{
  border: 1.5px solid #FF6C00;
  color: #FF6C00;
  width: 150px;
  background-color: #09264C;
}

.sign{
  width: 200px;
  background-color: #FF6C00;
  color: white;

}

@media(max-width :1150px){
 .sec3 .info{
  display: flex;
  flex-direction: column;
 }


.sec3 p{
  font-size: 16px;
}
}

@media(max-width :990px){
  h2{
    font-size: 29px;
  }
  p{
    font-size: 16px;
  }
 .info{
  display: flex;
  flex-direction: column;
 }
}

@media(max-width :690px){
  .sec3 img{
    width: 350px; 
  }
  .sec3 h3{
    font-size: 25px;
  }

  h3{
    font-size: 25px;
  }
}
</style>