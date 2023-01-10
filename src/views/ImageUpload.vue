<template>
    <Navbar2/>
    <TabNav :tabs="['Single Upload','Batch Upload']" :selected="selected" @selected="setSelected">
        <tab :isSelected="selected ==='Single Upload'">
            <section class=" d-flex  justify-content-center align-items-center mt-5 mb-5 col-12 container ">
                <div class="d-flex flex-column  align-items-center gap-5 border p-5 " >
                    <img src="https://discripto.hng.tech/static/media/folderadd.027cccffa002b75c07ffff83a3448a23.svg" alt="">
                   <h2>
                    Drop or drag image here or click to upload
                   </h2>
                  
                 
                    <div class="upload_icon d-flex  align-items-center   justify-content-center gap-2 border border-warning p-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"><path d="M9 17.748c-.41 0-.75-.34-.75-.75v-4.19l-.72.72c-.29.29-.77.29-1.06 0a.754.754 0 0 1 0-1.06l2-2c.21-.21.54-.28.82-.16.28.11.46.39.46.69v6c0 .41-.34.75-.75.75Z" fill="#FF6c00"></path><path d="M11 13.751c-.19 0-.38-.07-.53-.22l-2-2a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l2 2c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22Z" fill="#FF6c00"></path><path d="M15 22.75H9c-5.43 0-7.75-2.32-7.75-7.75V9c0-5.43 2.32-7.75 7.75-7.75h5c.41 0 .75.34.75.75s-.34.75-.75.75H9C4.39 2.75 2.75 4.39 2.75 9v6c0 4.61 1.64 6.25 6.25 6.25h6c4.61 0 6.25-1.64 6.25-6.25v-5c0-.41.34-.75.75-.75s.75.34.75.75v5c0 5.43-2.32 7.75-7.75 7.75Z" fill="#FF6c00"></path><path d="M22 10.748h-4c-3.42 0-4.75-1.33-4.75-4.75v-4c0-.3.18-.58.46-.69.28-.12.6-.05.82.16l8 8a.751.751 0 0 1-.53 1.28Zm-7.25-6.94v2.19c0 2.58.67 3.25 3.25 3.25h2.19l-5.44-5.44Z" fill="#FF6c00"></path></svg>
                    <p class="m-0">Upload Image</p></div><input class="input_file cursor-pointer" id="upload" type="file" multiple accept="image/*, .png, .svg, .jpg">
                </div>
        
                
        
            </section>
          
        
            <section  class=" d-flex flex-column  justify-content-center align-items-center mt-4 mb-5">
                <h3 class="mt-2 mb-3" >OR</h3>
                <p>Mine image with url</p>
        
                <form class="d-flex flex-column  justify-content-center align-items-center gap-2">
                    <div class="row ">
                        <div class="col-12 mb-2 ">
                            <input type="url" id="Mine image with url" placeholder="Enter image url" required="" class="rounded-2 p-2 col-12 ">
                           
                        </div>
                        <div class="d-flex justify-content-center align-items-center  ">
                            <button type="submit" class="sign rounded-2 p-2 col-6">Mine Image</button>
                        </div>
                      
                       
                      </div>
                  
                    </form>
               
            </section>
        </tab>
 
        <tab :isSelected="selected ==='Batch Upload'">
        <section class="d-flex mt-5 container  justify-content-evenly container ">
            <div class="d-flex flex-column col-4">
                <h3>Image Details:</h3>
                <Form
               
               >
              
            
        
               
               <div class="row">
                <div class="col-12 mb-5">
                    <label class="mb-2">Name of Batch</label>
                  <Input
                  name=""
                  type="text"
                
                  placeholder="Building"
                 
                  class=""
                />
                
                </div> 
                </div>
               
                <div class="">
                  <div class="col-12 mb-5">
                    <label class="mb-2"> Description</label>
                    <Input
                    name=""
                    type="text"
                 
                    placeholder="A list of different rooms in an apc"
                   
                  />
                  </div>
                </div>
               
                
                <div class="">
                    <div class="col-12 ">
                        <label class="mb-2">Tag</label>
                      <Input
                      name=""
                      type="text"
                    
                      placeholder="Bathroom, Bedroom, kitchen"
                      id="floatingPassword"
                    />
                    </div>
                  </div>
             
               
               
               </Form>
            </div>
            <div class="d-flex flex-column  col-4 align-items-center gap-5 border p-4 " >
                <img src="https://discripto.hng.tech/static/media/folderadd.027cccffa002b75c07ffff83a3448a23.svg" alt="">
               <h5>
                Drop or drag csv file here or click to upload
               </h5>
              
             
                <div class="upload_con d-flex  align-items-center   justify-content-center gap-1 border border-warning p-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"><path d="M9 17.748c-.41 0-.75-.34-.75-.75v-4.19l-.72.72c-.29.29-.77.29-1.06 0a.754.754 0 0 1 0-1.06l2-2c.21-.21.54-.28.82-.16.28.11.46.39.46.69v6c0 .41-.34.75-.75.75Z" fill="#FFFFFF"></path><path d="M11 13.751c-.19 0-.38-.07-.53-.22l-2-2a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l2 2c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22Z" fill="#FFFFFF"></path><path d="M15 22.75H9c-5.43 0-7.75-2.32-7.75-7.75V9c0-5.43 2.32-7.75 7.75-7.75h5c.41 0 .75.34.75.75s-.34.75-.75.75H9C4.39 2.75 2.75 4.39 2.75 9v6c0 4.61 1.64 6.25 6.25 6.25h6c4.61 0 6.25-1.64 6.25-6.25v-5c0-.41.34-.75.75-.75s.75.34.75.75v5c0 5.43-2.32 7.75-7.75 7.75Z" fill="#FFFFFF"></path><path d="M22 10.748h-4c-3.42 0-4.75-1.33-4.75-4.75v-4c0-.3.18-.58.46-.69.28-.12.6-.05.82.16l8 8a.751.751 0 0 1-.53 1.28Zm-7.25-6.94v2.19c0 2.58.67 3.25 3.25 3.25h2.19l-5.44-5.44Z" fill="#FFFFFF"></path></svg>
                <p class="m-0 text-white">Upload Image</p></div>
               
            </div>
    
        </section>
        </tab>
       </TabNav>
     
    
    
</template>

<script>
import Navbar2 from '../components/Navbar2.vue';
import TabNav from '../components/TabNav.vue'
import Tab from '../components/Tab.vue';
import TextInput from '../components/TextInput.vue';
    export default {
        components:{
       Navbar2,
       TabNav,
       Tab,
       TextInput
      }, 

      data(){
        return {
          selected:'Single Upload',
        }

      },
      methods :{
          setSelected(tab){
            this.selected= tab;
          }
        },

       
    }
</script>

<style >
img{
    width: 111px;
    height: 111px;
}

.input_file {
    cursor: pointer;
    height: 100%;
    left: 0;
    opacity: 0;
    position: relative;
    top: 0;
    width: 100%;
}
.sign{
    width: 100%;
    background-color: #FF6C00;
    color: white;

 }


 input {
  
   
    padding: 30px ;
    display: block;
    width: 100%;
    font-size: 16px;
    height: 40px;
    border-radius: 10px;
  }

  .upload_con {
    background: #FF6C00;
  }
  
</style>