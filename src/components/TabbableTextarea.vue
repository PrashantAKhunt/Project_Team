<script setup>

    defineProps({
        modelValue: String
    });

    let emit = defineEmits(['update:modelValue']);

    function onTabPress(e) {
        e.target.value += '\t';
    }

    function update(e){
        emit('update:modelValue', e.target.value);
    }
</script>


<template>
    <textarea 
        @keydown.tab.prevent="onTabPress" 
        @keyup="update"
    v-text="modelValue" />
</template>

