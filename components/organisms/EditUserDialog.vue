<template>
  <v-dialog
    v-model="value"
    width="500"
    @update:return-value="$refs.form.resetForm()"
    @click:outside="$emit('close')"
  >
    <v-card :loading="!cities.length">
      <v-card-title class="headline" primary-title> Edit user </v-card-title>

      <v-card-text @keydown.enter="updateUser">
        <AddUserForm :key="userId" ref="form" v-model="form" />
        <!-- <v-alert v-if="error" type="error">
          {{ error }}
        </v-alert> -->
      </v-card-text>

      <v-card-actions>
        <v-spacer />
        <v-btn color="grey" text @click="closeCreateDialog"> cancel </v-btn>
        <v-btn
          color="primary"
          :loading="busy"
          :disabled="!form.valid"
          @click="updateUser"
        >
          Update
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import AddUserForm from '~/components/forms/AddUserForm';
import _pick from 'lodash/pick';
import { mapState } from 'vuex';

export default {
  components: {
    AddUserForm,
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
    userId: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      formFields: [
        'given_name',
        'family_name',
        'email',
        'city_id',
        'mailing_list_limit',
      ],
      form: {
        valid: false,
        data: {
          given_name: null,
          family_name: null,
          email: null,
          city_id: null,
          mailing_list_limit: null,
        },
      },
    };
  },
  computed: {
    ...mapState({
      users: state => state.users.users,
      demoUsers: state => state.users.demoUsers,
    }),
    user() {
      const foundDemo = this.demoUsers.find(user => user.id === this.userId);
      if (foundDemo) return foundDemo;
      return this.users.find(user => user.id === this.userId);
    },
    cities() {
      return this.$store.getters['config/citiesArray'];
    },
  },
  watch: {
    user: {
      handler(newUser) {
        if (!newUser) return;
        this.$nextTick(() => {
          this.form.data = _pick(newUser.attributes, this.formFields);
        });
      },
      deep: true,
      immediate: true,
    },
  },
  methods: {
    closeCreateDialog() {
      this.$refs.form.resetForm();
      this.$emit('close');
    },

    updateUser() {
      this.$refs.form.validate();

      if (!this.form.valid) return;

      this.$emit('submit', {
        ...this.form.data,
        userId: this.userId,
      });
    },
  },
};
</script>

<style></style>
