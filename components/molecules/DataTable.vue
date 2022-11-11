<template>
  <div>
    <v-data-table
      v-if="tableData.length > 0"
      loading="isLoading"
      :headers="headers"
      :items="tableData"
      sort-by="month"
      class="elevation-1"
    >
      <template #header.action="{}">
        <div class="w-100 text-right">Actions</div>
      </template>
      <template #top>
        <v-toolbar flat>
          <v-toolbar-title>{{ title }}</v-toolbar-title>
          <v-divider class="mx-4" inset vertical />
          <v-spacer />
        </v-toolbar>
      </template>
      <template #no-data>
        <v-btn color="primary" @click="initialize"> Refresh </v-btn>
      </template>
    </v-data-table>
    <div v-else>
      <p>No data to display</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    headers: { type: Array, required: true },
    isLoading: { type: Boolean, default: false },
    tableData: { type: Array, required: true },
    title: { type: String, required: true },
  },
};
</script>
