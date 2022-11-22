<script setup>
import Modal from "@/components/Modal.vue";
import {useTeamStore} from "@/stores/TeamStore.js";    
import { ref } from "vue";

let showModal = ref(false);
let team = useTeamStore();
</script>

<template>
    <div>
      <button class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded disabled:bg-gray-400"
              :disabled="!team.spotsRemaining"
              @click="showModal = true" >
        Add Member ({{ team.spotsRemaining }} Spots Left)</button>
    </div>

    <Teleport to="body">
        <Modal :show="showModal" @close="showModal=false ">
        <template #default>
            <p>Need to add a new member to your team?</p>

            <form class="mt-6">
            <div class="flex">
                <input type="email" placeholder="Email Address..." class="flex-1">
                <button>Add</button>
            </div>

            </form>
        </template>

        
        </Modal>
  </Teleport>
</template>