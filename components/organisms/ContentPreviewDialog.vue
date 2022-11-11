<template>
  <v-dialog v-model="visible" width="900">
    <v-card>
      <v-card-title
        class="headline d-flex justify-content-between align-items-center mb-3"
        primary-title
      >
        <span class="flex-grow-1 mr-2"> Content preview </span>
        <v-btn
          v-if="selectedUser && previewLink"
          v-clipboard:copy="previewLink"
          v-clipboard:success="onCopy"
          v-clipboard:error="onError"
          class="mr-2"
        >
          <v-icon left> mdi-link </v-icon>
          copy link
        </v-btn>
        <v-select
          v-if="users.length"
          v-model="selectedUser"
          class="UsersSelect"
          :items="users"
          placeholder="Select user..."
          item-value="id"
          clearable
        >
          <template #item="{ item }">
            <span>
              {{
                item.attributes.family_name + ' ' + item.attributes.given_name
              }}
            </span>
            <span class="font-italic font-weight-light ml-2">
              {{ item.attributes.city_name }}
            </span>
          </template>
          <template #selection="{ item }">
            <span>
              {{
                item.attributes.family_name + ' ' + item.attributes.given_name
              }}
            </span>
            <span class="font-italic font-weight-light ml-2">
              {{ item.attributes.city_name }}
            </span>
          </template>
        </v-select>
      </v-card-title>

      <v-card-text class="d-flex justify-content-center">
        <div v-if="loading" class="Preview Skeleton elevation-2 p-4">
          <v-skeleton-loader type="heading" />
          <v-skeleton-loader type="paragraph" />
          <v-skeleton-loader type="image" />
          <v-skeleton-loader type="paragraph" />
        </div>
        <div
          v-else
          id="Preview"
          class="Preview elevation-2 p-4"
          v-html="previewHTML"
        />
      </v-card-text>

      <v-card-actions>
        <v-spacer />
        <v-btn color="error" text @click="closeDialog"> close </v-btn>
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
    contentId: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      loading: false,
      previewHTML: '',
      selectedUser: null,
      previewLink: null,
    };
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
    users() {
      return this.$store.state.users.users;
    },
  },
  watch: {
    selectedUser: {
      handler(newVal) {
        this.previewHTML = '';
        this.loadContentHTML(newVal);
      },
    },
  },
  mounted() {
    this.loadContentHTML();
    if (!this.users || !this.users.length) {
      this.$store.dispatch('users/getUsers');
    }
  },

  methods: {
    async loadContentHTML(userId = undefined) {
      try {
        this.loading = true;
        let url = `/content/${this.contentId}/preview${
          userId ? `?user=${userId}` : ''
        }`;
        const data = await this.$axios.$get(url);
        this.previewHTML = data.html;
        this.previewLink = data.preview_url;
      } catch (error) {
        this.$snack.show('Failed to load HTML content', 'danger');
      }
      this.loading = false;
    },
    closeDialog() {
      this.visible = false;
    },
    onCopy: function () {
      this.$snack.show('Copied to clipboard', 'success');
    },
    onError: function () {
      this.$snack.show('Failed to copy', 'danger');
    },
  },
};
</script>

<style lang="scss" scoped>
.UsersSelect {
  max-width: 400px;
}
.Preview {
  width: 600px;
  max-width: 600px;

  &.Skeleton > * {
    margin-bottom: 16px;
  }

  &:not(.Skeleton) {
    all: initial;
    * {
      all: unset;
    }
  }
}
</style>
