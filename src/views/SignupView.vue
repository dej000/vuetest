<template>
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
    <h2 class="text-center"><strong>Create your account</strong></h2>
    
    <div class="container ">
     
    </div>
    
    
    <div class=" ">
     <div class="col-12">
       <TextInput
       class=""
       name="first_name"
       type="text"
       label="First Name"
       placeholder="FIRST NAME"
       id="floatingInput"
       v-model="firstName"
    
     />
     </div>
    
     <div class="col-12">
       <TextInput
         name="last_name"
         type="text"
         label="Last Name"
         placeholder="LAST NAME"
         id="floatingInput"
         v-model="lastname"
    
       />
     </div> 
    
     
     <div class="col-12">
        <TextInput
          name="username"
          type="text"
          label="Username"
          placeholder="USERNAME"
          id="floatingInput"
          v-model="username"
     
        />
      </div> 
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
    
       <div class="col-12">
         <TextInput
         name="confirm_password"
         type="password"
         label="Confirm Password"
         placeholder="CONFIRM PASSWORD"
         id="floatingPassword"
         v-model="confirmpassword"
       
       />
       </div> 
     </div>
    
     <div class="d-flex justify-content-center mt-4 mb-4 gap-3">
       <input class="" type="checkbox"  v-model="acceptTerms">
       <label for="">Yes, I understand and agree to Love in Planning's  Terms and Conditions</label>
    </div>
    
    <div class="form-group d-flex flex-column justify-content-center align-items-center gap-3 "><button  type="submit" class="btn submit-btn  btn-light log " id="myBtn">Create account     <div class="spinner-border spinner-border-sm " v-show="loading" role="status">
      <span class="visually-hidden">Loading...</span>
    </div></button>
       <p  class="text-center">You already have an account?  <router-link to="/login"><a  class="text-decoration-none " href="">LOG IN</a></router-link></p>
    </div>
    
    </Form>
    </div>
      
     </div>
    
    <FooterNavVue/>
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
        TextInput,
        Yup
    
    },data(){
        return{
         schema : Yup.object().shape({
      first_name: Yup.string().required(),
      last_name: Yup.string().required(),
      username: Yup.string().required(),
      email: Yup.string().email().required(),
      password: Yup.string().min(6).required(),
      confirm_password: Yup.string()
        .required()
        .oneOf([Yup.ref('password')], 'Passwords do not match'),
    }),
    loading:false,
    error:'',
    success:''
        }
    
       },
       methods:{
     onSubmit(values) {
    
      delete values.confirm_password;
      this.loading=true;
    axios.post(import.meta.env.VITE_BASE_URL+'signup',values).then((res)=>{
      this.loading=false;
      this.topFunction()
      this.success=res.data.message;
    
      this.timeout = setTimeout(()=>{
     this.success = ''
    }, 5000);
    })
    .catch(err=>{
      this.loading=false;
      this.topFunction()
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
    },
    
     topFunction(){
      const mybutton =document.getElementById('myBtn')
      document.documentElement.scrollTop = 0;
    
     }
     
       }
    
        }
    </script>
    
    <style scoped >
    
    a{
      color: #FF6C00;
      text-decoration: none;
    }
    
    :root {
      --primary-color: #0071fe;
      --error-color: #f23648;
      --error-bg-color: #fddfe2;
      --success-color: #21a67a;
      --success-bg-color: #e0eee4;
    }
    
    form{
        border: 1px solid black;
        padding: 20px;
        border-radius: 10px;
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
    </style>