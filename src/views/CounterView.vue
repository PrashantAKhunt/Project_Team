<script setup>
 
 import {useCounterStore} from '@/stores/CounterStore';

 let counter = useCounterStore();

</script>



<template>
  <div>
        <h2>This is a counter</h2>
        <p>Counter: {{counter.count}}</p>
        <button @click="counter.increment">Increment</button>
  </div>
</template>

<style>
</style>
