<template>
  <div class="TitleContainer">
    <h2>{{ title.toUpperCase() }}</h2>
  </div>
</template>

<script>
export default {
  props: {
    title: { type: String, required: true },
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap');

h2 {
  left: 0;
  font-family: 'Montserrat', 'sans-serif';
  font-size: 23px;
  background-color: #52dea1;
  color: white;
  padding: 5px 20px;
  position: absolute;
  top: 10;
}
</style>
