<script lang="ts">
import { defineComponent, getCurrentInstance, watch } from 'vue';
import { useRoute } from 'vue-router';

export default defineComponent({
    name: 'Test2'
})
</script>
<script setup lang="ts">
const instance = getCurrentInstance()
const route = useRoute()
watch(() => route.query.id, () => {
    console.log('Test2 isDeactivated', instance?.isDeactivated)
})
</script>
<template>
    <p>Test2</p>
</template>
<style lang="less">
</style>