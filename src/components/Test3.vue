<script lang="ts">
import { defineComponent, getCurrentInstance, onBeforeUnmount, onBeforeUpdate, watch } from 'vue';
import { useRoute } from 'vue-router';

export default defineComponent({
    name: 'Test3'
})
</script>
<script setup lang="ts">
const instance = getCurrentInstance()
const props = defineProps({
    num: Number
})
watch(props, () => {
    console.log('Test3 isDeactivated', instance?.isDeactivated)
})
</script>
<template>
    <p>Test3 <span>{{num}}</span></p>
</template>
<style>
</style>