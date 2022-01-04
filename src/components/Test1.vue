<script lang="ts">
import { defineComponent, getCurrentInstance, watch } from 'vue';
import { useRoute } from 'vue-router';

export default defineComponent({
    name: 'Test1'
})
</script>
<script setup lang="ts">
const instance = getCurrentInstance()
const route = useRoute()
watch(() => route.query.id, () => {
    console.log('Test1 isDeactivated', instance?.isDeactivated)
})
</script>
<template>
    <p>Test1</p>
</template>
<style>
</style>