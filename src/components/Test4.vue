<script lang="ts">
import { defineComponent, getCurrentInstance, watch } from 'vue';

export default defineComponent({
    name: 'Test4'
})
</script>
<script setup lang="ts">
const instance = getCurrentInstance()
const props = defineProps({
    num: Number
})
watch(() => props.num, () => {
    console.log('Test4 isDeactivated', instance?.isDeactivated)
}, { flush: 'post' })
</script>
<template>
    <p>Test4 <span>{{num}}</span></p>
</template>
<style>
</style>