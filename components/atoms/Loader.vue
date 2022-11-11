<template>
  <img
    class="Loader"
    width="50"
    height="50"
    :src="require(`~/assets/gif/loading.gif`)"
  />
</template>

<script>
export default {};
</script>

<style scoped>
.Loader {
  position: fixed;
  left: 47%;
  top: 42%;
}
</style>
