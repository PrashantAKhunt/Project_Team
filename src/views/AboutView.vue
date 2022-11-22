<script>
 import { useFlash } from '@/composables/useFlash';

  export default {
    setup() {
      let { flash } = useFlash();
      
      return {
        flash
      } 
    }
  }

</script>



<template>
  <div class="about">

    <button @click="flash('You are in about page')">Go Back</button>
    <h1>This is an about page</h1>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
