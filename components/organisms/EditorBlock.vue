<template>
  <div class="Block d-flex">
    <div class="BlockLeft d-flex flex-column align-items-start">
      <div class="overline">
        block "{{ block.name }}"
        <v-tooltip v-if="!editable" bottom>
          <template #activator="{ on }">
            <v-icon color="error" small v-on="on"> mdi-lock </v-icon>
          </template>
          <span>Content locked</span>
        </v-tooltip>
      </div>
      <div class="ContentControls mt-4">
        <div class="Type mt-2">
          <BlockTypeSelect v-if="editable" v-model="block.type" />
          <v-checkbox
            v-if="configable"
            v-model="block.customizable"
            label="Template"
          />
        </div>

        <div v-if="isUser" class="Info mt-2">
          <v-tooltip v-if="editable && block.type === 'editor'" bottom>
            <template #activator="{ on }">
              <v-icon color="info" v-on="on"> mdi-information </v-icon>
            </template>
            <span
              >You can personialise email for the recipient <br />
              by using <em>{LIST-GIVEN-NAME}</em> or
              <em>{LIST-FAMILY-NAME}</em> in the text</span
            >
          </v-tooltip>
        </div>
        <template v-if="editable && ['image', 'svg'].includes(block.type)">
          <v-menu
            v-model="changeImageMenu"
            :close-on-content-click="false"
            :nudge-width="200"
            offset-x
          >
            <template #activator="{ on }">
              <v-btn small v-on="on"> Change image </v-btn>
            </template>

            <v-card>
              <v-card-text>
                <v-file-input
                  v-model="fileToUpload"
                  :accept="imageAccept"
                  :label="`Select ${block.type}`"
                  dense
                />
                <v-text-field v-model="blockHref" label="Link URL" />
              </v-card-text>
              <v-card-actions>
                <v-spacer />
                <v-btn text @click="changeImageMenu = false"> Cancel </v-btn>
                <v-btn
                  color="primary"
                  text
                  :loading="savingImage"
                  @click="saveImageData"
                >
                  Save
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-menu>
        </template>
      </div>
    </div>
    <div class="BlockRight elevation-1">
      <CKEditor
        v-if="!block.type || block.type === 'editor'"
        v-model="blockText"
        :disabled="!editable"
        :custom-color="customColor"
      />
      <div v-else-if="['image', 'svg'].includes(block.type)">
        <div class="BlockImageWrapper">
          <div v-if="!block.image_url" class="p-4">
            <em>No image selected</em>
          </div>

          <template v-else>
            <template v-if="block.href">
              <a :href="block.href" target="_blank">
                <img :src="block.image_url" />
              </a>
            </template>
            <template v-else>
              <img :src="block.image_url" />
            </template>
          </template>
        </div>
      </div>
      <div
        v-else-if="block.type === 'social'"
        class="Socials d-flex justify-content-around w-100 h-100 pt-2"
      >
        <template
          v-if="me.social_handles && Object.keys(me.social_handles).length"
        >
          <div
            v-for="social in Object.keys(me.social_handles)"
            :key="social"
            class="SocialHandle"
          >
            <a :href="`${me.social_handles[social]}`" target="_blank">
              <img
                :src="`/images/social/${social}.png`"
                height="35"
                width="35"
              />
            </a>
          </div>
        </template>
        <template v-else>
          <em>No social handles set</em>
        </template>
      </div>
    </div>
    <div class="BlockActions d-flex justify-content-center align-items-center">
      <div v-if="movable" class="d-flex flex-column justify-content-center">
        <div>
          <v-btn
            v-if="!first"
            icon
            size="mini"
            @click="$emit('move-up', block.block_id)"
          >
            <v-icon>mdi-arrow-up</v-icon>
          </v-btn>
        </div>
        <div>
          <v-btn
            v-if="!last"
            icon
            size="mini"
            @click="$emit('move-down', block.block_id)"
          >
            <v-icon>mdi-arrow-down</v-icon>
          </v-btn>
        </div>
      </div>
      <div>
        <v-btn
          v-if="removable"
          icon
          color="error"
          size="mini"
          @click="$emit('remove', block.block_id)"
        >
          <v-icon> mdi-delete-outline </v-icon>
        </v-btn>
      </div>
      <div>
        <v-btn
          v-if="hideable"
          icon
          size="mini"
          @click="$emit('hide', block.block_id)"
        >
          <v-icon> mdi-eye-off </v-icon>
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script>
import _debounce from 'lodash/debounce';

import CKEditor from '~/components/organisms/CKEditor';
import BlockTypeSelect from '~/components/atoms/BlockTypeSelect';
import UploadFileMixin from '~/mixins/uploadFile';
import RolesMixin from '~/mixins/auth';

export default {
  components: {
    CKEditor,
    BlockTypeSelect,
  },
  mixins: [UploadFileMixin, RolesMixin],

  props: {
    value: {
      type: Object,
      default: () => {},
    },
    first: {
      type: Boolean,
      default: true,
    },
    last: {
      type: Boolean,
      default: true,
    },
    editable: {
      type: Boolean,
      default: false,
    },
    hideable: {
      type: Boolean,
      default: false,
    },
    movable: {
      type: Boolean,
      default: false,
    },
    removable: {
      type: Boolean,
      default: false,
    },
    configable: {
      type: Boolean,
      default: false,
    },
    customColor: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      fileToUpload: null,
      uploadFileHref: null,
      changeImageMenu: false,
    };
  },
  computed: {
    block: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit('input', value);
      },
    },
    blockText: {
      get() {
        return this.block.text;
      },
      set: _debounce(function (editorData) {
        this.$emit('input', {
          ...this.block,
          text: editorData,
        });
      }, 100),
    },
    blockHref: {
      get() {
        return this.block.href;
      },
      set: _debounce(function (data) {
        this.$emit('input', {
          ...this.block,
          href: data,
        });
      }, 100),
    },
    blockType() {
      return this.block.type;
    },
    imageAccept() {
      if (this.block.type === 'image') return '.png, .jpg, .jpeg';
      else if (this.block.type === 'svg') return '.svg';
      else return '';
    },
  },
  watch: {
    blockType(newVal, oldVal) {
      if (newVal !== oldVal) {
        const newBlock = {
          ...this.block,
        };

        delete newBlock.image_url;
        delete newBlock.href;
        delete newBlock.text;
        this.block = newBlock;
      }
    },
  },
  methods: {
    async saveImageData() {
      try {
        if (this.fileToUpload) {
          const { url } = await this.uploadFile(this.fileToUpload);
          this.$emit('input', {
            ...this.block,
            image_url: url,
          });
        }
      } catch (error) {
        this.$snack.show('Unable to save image data', 'danger');
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.Block {
  > * {
    &:first-child {
      margin-left: 0;
    }
    &:last-child {
      margin-right: 0;
    }
    margin: 0 8px;
  }
  .BlockLeft {
    flex-grow: 1;
  }

  .BlockRight {
    width: 600px;
    max-width: 600px;
    min-width: 600px;
    flex-shrink: 0;
    flex-grow: 0;

    .BlockImageWrapper {
      img {
        max-width: 600px;
        max-height: 100%;
      }
    }
  }

  .BlockActions {
    width: 64px;
  }

  .Socials {
    .SocialHandle {
      height: 35px;
      width: 35px;
    }
  }
}
</style>
