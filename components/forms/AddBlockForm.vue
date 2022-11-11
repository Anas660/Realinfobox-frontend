<template>
  <v-form
    id="addBlockForm"
    ref="form"
    v-model="form.valid"
    lazy-validation
    @submit.prevent="submit"
  >
    <v-text-field
      v-model="form.data.block_name"
      class="input-1"
      :rules="rules.block_name"
      :text="form.text"
      type="text"
      label="Block Name"
      required
    />
    <BlockTypeSelect v-model="form.data.block_type" />
    <template v-if="['image', 'svg'].includes(form.data.block_type)">
      <v-file-input
        v-model="form.data.image_file"
        :accept="imageAccept"
        :label="`Select ${form.data.block_type}`"
        dense
      />
      <v-text-field v-model="form.data.href" label="Link URL" />
    </template>
  </v-form>
</template>

<script>
import BlockTypeSelect from '~/components/atoms/BlockTypeSelect';

export default {
  components: {
    BlockTypeSelect,
  },
  props: {
    value: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      rules: {
        block_name: [v => !!v || 'Name is required'],
      },

      imageToSave: null,
    };
  },
  computed: {
    form: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit('input', val);
      },
    },
    imageAccept() {
      if (this.form.data.block_type === 'image') return '.png, .jpg, .jpeg';
      else if (this.form.data.block_type === 'svg') return '.svg';
      else return '';
    },
  },
  // watch: {
  //   imageToSave() {
  //     this.encodeImageFileAsURL();
  //   },
  // },
  mounted() {
    this.$nextTick(() => {
      const input = document.querySelector('#addBlockForm .input-1 input');
      input.focus();
    });
  },
  methods: {
    submit() {
      if (this.form.valid) this.$emit('submit', this.form);
    },
    resetForm() {
      this.$refs.form.reset();
      this.$refs.form.resetValidation();
    },
    validate() {
      this.$refs.form.validate();
    },
    encodeImageFileAsURL() {
      var fileToLoad = this.imageToSave;
      if (fileToLoad) {
        var fileReader = new FileReader();
        fileReader.onload = fileLoadedEvent => {
          var srcData = fileLoadedEvent.target.result;

          this.form.data.image_file = this.imageToSave;
          this.form.data.image_data = srcData;
        };
        if (fileToLoad.type.includes('svg')) fileReader.readAsText(fileToLoad);
        else fileReader.readAsDataURL(fileToLoad);

        return this.form.data.image_data;
      }
    },
  },
};
</script>

<style></style>
