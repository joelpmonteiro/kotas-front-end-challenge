<template>
    <div v-bind="$attrs" class="flex flex-col items-center bg-white rounded-2xl gap-8">
        <!--card-title-->
        <slot name="title"></slot>

        <!--content-->
        <slot name="content"></slot>

        <!--footer-->

        <slot name="footer"></slot>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>