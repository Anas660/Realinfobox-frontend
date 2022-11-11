<template>
  <v-form ref="form" v-model="formData.valid" lazy-validation>
    <v-text-field
      v-model="formData.data.given_name"
      :rules="rules.given_name"
      label="Given name"
      autofocus
    />
    <v-text-field
      v-model="formData.data.family_name"
      :rules="rules.family_name"
      label="Family name"
    />

    <v-text-field
      v-model="formData.data.email"
      :rules="rules.email"
      label="E-mail"
      required
    />

    <v-select
      v-model="formData.data.tags"
      :items="tags"
      label="Select mailing list tag"
      item-text="name"
      item-value="id"
      offset-y
      :rules="rules.tags"
      required
    >
      <template #selection="{ item }">
        <v-chip :key="item.id" :color="item.color" dark>
          {{ item.name }}
        </v-chip>
      </template>
    </v-select>

    <v-select
      v-model="formData.data.status"
      :items="statuses"
      label="Status"
      offset-y
      :rules="rules.status"
      required
    />

    <v-checkbox
      v-model="formData.addPermission"
      :rules="rules.addPermission"
      label="I have permission to add this email."
    />
  </v-form>
</template>

<script>
import regex from '~/helpers/regex';

export default {
  props: {
    value: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      rules: {
        given_name: [
          // v => !!v || 'Name is required',
        ],
        family_name: [
          // v => !!v || 'Name is required',
        ],
        email: [
          v => !!v || 'E-mail is required',
          v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
        ],
        addPermission: [v => !!v || 'Please confirm'],
        tags: [v => !!v || 'Required'],
        status: [v => !!v || 'Required'],
      },

      form: {
        valid: false,
        data: {
          given_name: null,
          family_name: null,
          email: null,
          tags: [],
          status: null,
        },
        addPermission: false,
      },
      regex,
    };
  },
  computed: {
    tags() {
      return this.$store.state.mailingList.tags;
    },
    statuses() {
      const statuses = this.$store.state.mailingList.statuses;
      if (!statuses) return [];

      return statuses;
    },
    formData: {
      get() {
        return this.value;
      },
      set() {
        this.$emit('input', this.form);
      },
    },
  },
  watch: {
    value: {
      handler(newVal) {
        this.form = newVal;
      },
      deep: true,
      immediate: true,
    },
  },
  created() {
    this.form.data.status = this.statuses[0].value;
  },
  methods: {
    resetForm() {
      this.$refs.form.reset();
      this.$refs.form.resetValidation();
    },
    validate() {
      this.$refs.form.validate();
    },
  },
};
</script>

<style></style>
