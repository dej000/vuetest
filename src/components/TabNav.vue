<template>
    <section class="contain">
  
    <div class="container d-flex justify-content-between   mb-4">
           
            <div class=" col-12 ms-5 me-5" >
              <ul class="d-flex justify-content-between tablist nav nav-tabs dashboard_tablist-center p-3 gap-2">
                <li v-for="tab in tabs"  :key="tab" class="nav-item">
                 <a class="nav-link" :class="{ active: tab === selected}" @click="setTab(tab)">
                  {{ tab }}
                 </a>
                </li>
                
              </ul>

              <slot></slot>
            </div>

          </div>
      </section>
</template>

<script>

    export default {
        props:{
          tabs:{
            type: Array,
            required: true,
          },
          selected:{
            type:String,
            required: true
          }
        },
        methods:{
          setTab(tab){
            this.$emit('selected',tab);
          }
        }
    }
</script>

<style scoped>
a{
  color: #000;
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
   max-width: 350px;
    padding: 8px;
    align-items: center;
  }

  ul li{
    cursor: pointer;
    list-style: none;
  }

  .nav-tabs .nav-item.show .nav-link, .nav-tabs .nav-link.active {
    color: var(--bs-nav-tabs-link-active-color);
    background-color:  #ff6c00;
    border-color: var(--bs-nav-tabs-link-active-border-color);
  }
</style>