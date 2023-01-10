<script >
import { RouterLink, RouterView } from 'vue-router'
import DashboardVue from './views/Dashboard.vue';
import * as Yup from 'yup';
import { Form } from 'vee-validate';
import TextInput from './components/TextInput.vue';




export default{
  components :{
    DashboardVue,
     TextInput,
     Form,
    
   
    },
    data(){
    return{
     schema : Yup.object().shape({
  name: Yup.string().required(),
  email: Yup.string().email().required(),
  password: Yup.string().min(6).required(),
  confirm_password: Yup.string()
    .required()
    .oneOf([Yup.ref('password')], 'Passwords do not match'),
})
    }

   },
   methods:{
 onSubmit(values) {
  alert(JSON.stringify(values, null, 2));
},

onInvalidSubmit() {
  const submitBtn = document.querySelector('.submit-btn');
  submitBtn.classList.add('invalid');
  setTimeout(() => {
    submitBtn.classList.remove('invalid');
  }, 1000);
}
   }
 
}


</script>

<template>

  <RouterView />
</template>

<style >
@import url('https://fonts.cdnfonts.com/css/axiforma');

#app{
  font-family: 'Axiforma', sans-serif;
}
:root {
  --primary-color: #0071fe;
  --error-color: #f23648;
  --error-bg-color: #fddfe2;
  --success-color: #21a67a;
  --success-bg-color: #e0eee4;
}

.submit-btn {
  background: var(--primary-color);
  outline: none;
  border: none;
  color: #fff;
  font-size: 18px;
  padding: 10px 15px;
  display: block;
  width: 100%;
  border-radius: 7px;
  margin-top: 40px;
  transition: transform 0.3s ease-in-out;
  cursor: pointer;
}

.submit-btn.invalid {
  animation: shake 0.5s;
    animation-iteration-count: infinite;
}

.contain{
  padding-left: 180px;
  padding-right: 40px;
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



</style>
