<template>
  <v-dialog v-model="value" width="600" @click:outside="$emit('close')">
    <v-card>
      <v-card-title class="headline" primary-title> Manage Tags </v-card-title>

      <v-card-text>
        <div class="d-flex align-items-center">
          <v-form ref="newTagForm" v-model="newTagValid">
            <v-text-field
              v-model="newTag.name"
              label="New tag name"
              :rules="newTagRules"
              @keydown.enter="addTag"
            />
          </v-form>
          <v-menu open-on-hover bottom offset-y>
            <template #activator="{ on }">
              <v-btn :color="newTag.color" dark rounded v-on="on">
                <v-icon>mdi-palette</v-icon>
              </v-btn>
            </template>
            <ColorPicker v-model="newTag.color" />
          </v-menu>
          <v-btn
            class="ml-2"
            color="primary"
            icon
            :disabled="!newTag.name"
            @click="addTag"
          >
            <v-icon>mdi-content-save-outline</v-icon>
          </v-btn>
        </div>
        <div>
          Tags
          <div>
            <template v-for="tag in tags">
              <v-chip :key="tag.name" :color="tag.color" class="mr-2" dark>
                {{ tag.name }}
              </v-chip>
            </template>
          </div>
        </div>
      </v-card-text>

      <v-card-actions>
        <v-spacer />
        <v-btn color="grey" text @click="closeCreateDialog"> close </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import ColorPicker from '~/components/atoms/ColorPicker';

export default {
  components: {
    ColorPicker,
  },
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    busy: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      newTag: {
        name: '',
        color: '#E91E63',
      },
      newTagValid: false,
      newTagRules: [
        v => !this.tagNames.includes(v) || 'Tag with this name already exists',
      ],
    };
  },
  computed: {
    tagNames() {
      return this.tags ? this.tags.map(tag => tag.name) : [];
    },
    tags: {
      get() {
        return this.$store.state.mailingList.tags;
      },
      set(newTags) {
        this.$store.dispatch('mailingList/updateTags', newTags);
      },
    },
  },
  watch: {
    tags: {
      handler(newTags, oldTags) {
        if (newTags.length > oldTags.length) {
          this.newTag = {
            name: '',
            color: '',
          };
          this.newTagValid = false;
        }
      },
    },
  },
  methods: {
    addTag() {
      const newTags = [...this.tags, this.newTag];

      this.tags = newTags;
    },
    removeTag(tagName) {
      const newTags = [...this.tags];
      const index = this.tags.findIndex(tag => tag.name === tagName);
      if (~index) {
        newTags.splice(index, 1);
      }
      this.tags = newTags;
    },

    closeCreateDialog() {
      this.$emit('close');
    },
  },
};
</script>

<style></style>
