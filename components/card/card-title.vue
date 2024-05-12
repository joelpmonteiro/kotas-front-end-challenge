<template>
  <div class="flex flex-col items-center gap-4 w-full">
    <header>
      <img v-if="img !== ''"
        width="50px"
        height="auto"
        loading="lazy"
        :src="img"
        alt="imagem"
      />
      <span v-else>...Carregando imagem</span>
    </header>

    <div>
      <span>
        <b>{{ name }}</b>
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  name: { type: String, required: true,default: '' },
  img: { type: String, required: true, default: '' },
});

const route = useRoute();
</script>

<style scoped></style>
