<template>
  <div class="CKEditorWrapper flex-shrink-0">
    <ckeditor
      v-model="editorData"
      :editor="editor"
      class="CKEditor"
      :config="config"
      :disabled="disabled"
      @ready="onEditorReady"
    />
  </div>
</template>

<script>
import InlineEditor from '~/plugins/ckeditor/build/ckeditor';
import EditorUploadAdatper from '~/classes/ckeditor/EditorUploadAdapter';

export default {
  props: {
    block: {
      type: Object,
      default: () => {},
    },
    value: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    simple: {
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
      editorIsReady: false,
      editor: InlineEditor,
    };
  },
  computed: {
    editorData: {
      get() {
        return this.editorIsReady ? this.value : '';
      },
      set(editorData) {
        this.$emit('input', editorData);
      },
    },
    config() {
      let config = {
        placeholder: 'No content',
        alignment: {
          options: ['left', 'right', 'center', 'justify'],
        },
        extraPlugins: [this.uploadAdapterPlugin],
      };
      if (this.simple) {
        config.toolbar = [
          'heading',
          '|',
          'bulletedList',
          'numberedList',
          'alignment',
          'undo',
          'redo',
          'link',
        ];
      } else {
        config = {
          ...config,
          image: {
            // You need to configure the image toolbar, too, so it uses the new style buttons.
            toolbar: ['imageTextAlternative'],
            // toolbar: [ 'imageTextAlternative', '|', 'imageStyle:alignLeft', 'imageStyle:full', 'imageStyle:alignRight' ],

            styles: ['full', 'alignLeft', 'alignRight'],
          },
          link: {
            addTargetToExternalLinks: true,
          },
        };
      }
      return config;
    },
  },
  methods: {
    onEditorReady() {
      this.editorIsReady = true;
    },
    uploadAdapterPlugin(editor) {
      editor.plugins.get('FileRepository').createUploadAdapter = loader => {
        return new EditorUploadAdatper(loader);
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.CKEditorWrapper {
  min-width: 100%;
  max-width: 100%;
}
</style>

<style lang="scss">
.ck {
  figcaption {
    display: none !important;
    visibility: hidden;
  }

  :any-link {
    color: inherit !important;
  }

  &.CKEditor {
    p {
      margin-bottom: 1.2rem;
    }
    .ck-widget {
      p {
        margin-bottom: unset;
      }
    }

    td.ck-editor__nested-editable {
      .image {
        max-width: 250px;
      }
    }
  }
}
</style>
