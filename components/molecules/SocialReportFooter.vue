<template>
  <div class="Container">
    <p class="Paragraph">
      This report was created by RealInfoBox.com using the most recent MLS sales
      data published by the local real
    </p>
    <p class="Paragraph">
      estate board. Information herein is deemed reliable but not guaranteed.
      Copyright © 2015-{{ new Date().getFullYear() }}
      RealInfoBox.com
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.Container {
  position: absolute;
  bottom: 0;
  margin-bottom: 10px;
  right: 10px;
  color: #738dd8;
  font-size: 10px;
  line-height: 0.7rem;
}

.Paragraph {
  margin: 0;
  text-align: right;
}
</style>
