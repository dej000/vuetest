<template>
    <div id="login">
      <Navbarvue/>
      <div class="hero d-flex justify-content-center align-items-center mt-4 container "> 
        <div class="">
    {{ message }}
    <div class="alert alert-danger" id="hideDiv" role="alert" v-if="error">
      {{error}}
      </div>
      <div class="alert alert-success" role="alert" v-if="success">
        {{ success }}
        </div>
    <Form
     @submit="onSubmit"
     :validation-schema="schema"
     @invalid-submit="onInvalidSubmit"
    >
    <h2 class="text-center"><strong>Log in to your account</strong></h2>
    
    <div class="container ">
     
    </div>
    
    
   
    
    
    
    <div class="row">
     <div class="col-12">
       <TextInput
       name="email"
       type="email"
       label="Email"
       placeholder="EMAIL ADDRESS"
       id="floatingInput"
       class=""
       v-model="email"
     />
     
     </div> 
     </div>
    
     <div class="">
       <div class="col-12">
         <TextInput
         name="password"
         type="password"
         label="Password"
         placeholder="PASSWORD"
         id="floatingPassword"
         v-model="password"
    
       
       />
       </div>
    
       
     </div>
    
     <div class="d-flex mt-4 mb-4 gap-3">
        <a href="">Forgot Password ?</a>
     
    </div>
    
    <div class="form-group d-flex flex-column justify-content-center align-items-center gap-3 "><button type="submit" class="btn submit-btn  btn-light log   " >Login       <div class="spinner-border spinner-border-sm " v-show="loading" role="status">
      <span class="visually-hidden">Loading...</span>
    </div></button>
       <p  class="text-center">Dont have an account?  <router-link to="/login"><a  class="text-decoration-none " href="">Create an account</a></router-link></p>
    </div>
    
    </Form>
    </div>
      
     </div>
    <FooterNavVue/>
    </div>
  
  </template>
      
      <script>
     import FooterNavVue from '../components/FooterNav.vue';
      import Navbarvue from '../components/Navbar.vue'
      import * as Yup from 'yup';
      import { Form } from 'vee-validate';
      import TextInput from '../components/TextInput.vue';
      import axios from 'axios'
      
          export default {
              components :{
         FooterNavVue,
          Navbarvue,
          Form,
          TextInput
      
      },
      data(){
      return{
       schema : Yup.object().shape({
    email: Yup.string().email().required(),
    password: Yup.string().min(6).required(),
    
  }),
  loading:false,
    error:'',
    success:''
      }
  
     },
     methods:{
   onSubmit(values) {
    this.loading=true;
    axios.post(import.meta.env.VITE_BASE_URL+'login',values).then((res)=>{
      this.loading=false;
      this.success=res.data.message;
    
      this.timeout = setTimeout(()=>{
     this.success = ''
    }, 5000);
    console.log(res)
    localStorage.setItem('accessToken', res.data.data.Token);
    })
    .catch(err=>{
      this.loading=false;
     
    this.error=err.response.data.message;
    
    this.timeout = setTimeout(()=>{
     this.error = ''
    }, 5000);
    
    })
 
  },
  
  onInvalidSubmit() {
    const submitBtn = document.querySelector('.submit-btn');
    submitBtn.classList.add('invalid');
    setTimeout(() => {
      submitBtn.classList.remove('invalid');
    }, 1000);
  }
     },
    
          }
      </script>
      
      <style scoped >
    a{
      color: #FF6C00;
      text-decoration: none;
    }
      .hero{
         min-height: 100vh;
      }
      form{
      
          padding: 20px;
          
          margin-bottom: 20px;
         
      }
      
      .log{
          border: 1.5px solid #FF6C00;
          color: white;
          width: 100%;
          font-size: 24px;
          padding: 10px;
          background-color:#FF6C00;
          
        }
  
        .submit-btn {
     
          outline: none;
          border: none;
          color: #fff;
          font-size: 12px;
          padding: 10px 15px;
          display: block;
          width: 100%;
          transition: transform 0.3s ease-in-out;
          cursor: pointer;
        }
        
        .submit-btn.invalid {
          animation: shake 0.5s;
          /* When the animation is finished, start again */
          animation-iteration-count: infinite;
        }
        
        @keyframes shake {
          0% {
            transform: translate(1px, 1px);
          }
          10% {
            transform: translate(-1px, -2px);
          }
          20% {
            transform: translate(-3px, 0px);
          }
          30% {
            transform: translate(3px, 2px);
          }
          40% {
            transform: translate(1px, -1px);
          }
          50% {
            transform: translate(-1px, 2px);
          }
          60% {
            transform: translate(-3px, 1px);
          }
          70% {
            transform: translate(3px, 1px);
          }
          80% {
            transform: translate(-1px, -1px);
          }
          90% {
            transform: translate(1px, 2px);
          }
          100% {
            transform: translate(1px, -2px);
          }
        }
        
        .form-group.invalid input {
          background-color: var(--error-bg-color);
          color: var(--error-color);
        }
        
        .TextInput.has-error input:focus {
          border-color: var(--error-color);
        }
        
        .TextInput.has-error .help-message {
          color: var(--error-color);
        }
        
        .TextInput.success input {
          background-color: var(--success-bg-color);
          color: var(--success-color);
        }
        
        .TextInput.success input:focus {
          border-color: var(--success-color);
        }
        
        .TextInput.success .help-message {
          color: var(--success-color);
      }
      </style>