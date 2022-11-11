<template>
  <v-dialog v-model="visible">
    <v-card>
      <v-card-title class="headline" primary-title> Link Clicks </v-card-title>

      <v-card-text>
        <v-data-table
          :headers="tableHeaders"
          :items="links"
          :items-per-page="25"
          dense
        >
          <template #item.link="{ item }">
            <div class="">
              <a :href="item.link" target="_blank">{{ item.link }}</a>
            </div>
          </template>
        </v-data-table>
      </v-card-text>

      <v-card-actions>
        <v-spacer />
        <v-btn color="grey" text @click="closeDialog"> close </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    links: {
      type: Array,
      default: () => [],
    },
  },

  computed: {
    visible: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit('input', value);
      },
    },

    tableHeaders() {
      const headers = [];
      headers.push({ text: 'Clicks', value: 'click_count' });
      if (this.links.length && this.links[0].clicks_unique)
        headers.push({ text: 'Unique Clicks', value: 'clicks_unique' });
      headers.push({ text: 'Link', value: 'link' });
      return headers;
    },
  },

  methods: {
    closeDialog() {
      this.visible = false;
    },
  },
};
</script>
