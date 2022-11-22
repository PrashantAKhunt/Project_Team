<script setup>
import TheWelcome from '../components/TheWelcome.vue'
import {useStorage} from '../composables/useStorage'
import TabbableTextarea from '@/components/TabbableTextarea.vue'
import { ref } from 'vue';
// import TabbableTextarea from '../components/TabbableTextarea.vue';


let food = useStorage('food')
let age = useStorage('age')
let comment = ref('test comment');

let obj = useStorage('object', {name: 'John', age: 30})
</script>

<template>
  <main>
    <form>

      <TabbableTextarea v-model="comment" style="width:100%; height: 300px;"></TabbableTextarea>
      <!-- <textarea >Hi there</textarea> -->

      <!-- <input type="text" v-model="food" />
      <input type="number" v-model="age" /> -->

    </form>
    <!-- <TheWelcome /> -->


  </main>
</template>
