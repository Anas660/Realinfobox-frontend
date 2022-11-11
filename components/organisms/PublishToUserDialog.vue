<template>
  <v-dialog v-model="visible" width="500" @click:outside="closeDialog">
    <v-card>
      <v-card-title class="headline" primary-title>
        Publish to user
      </v-card-title>

      <v-card-text @keydown.enter="createUser">
        <v-checkbox v-model="demo" label="demo" />
        <v-autocomplete
          v-model="selectedUser"
          class="UsersSelect"
          :items="demo ? cityDemoUsers : cityUsers"
          placeholder="Select user..."
          item-text="attributes.full_name"
          item-value="id"
          clearable
        >
          <template #item="{ item }">
            <span>
              {{ item.attributes.full_name }}
            </span>
            <span class="font-italic font-weight-light ml-2">
              {{ item.attributes.city_name }}
            </span>
          </template>
          <template #selection="{ item }">
            <span>
              {{ item.attributes.full_name }}
            </span>
            <span class="font-italic font-weight-light ml-2">
              {{ item.attributes.city_name }}
            </span>
          </template>
        </v-autocomplete>
      </v-card-text>

      <v-card-actions>
        <v-spacer />
        <v-btn color="grey" text @click="closeDialog"> cancel </v-btn>
        <v-btn
          color="success"
          :loading="busy"
          :disabled="!selectedUser"
          @click="$emit('submit', selectedUser)"
        >
          Publish
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  components: {},
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    cityId: {
      type: [String, Number],
      default: null,
    },
    busy: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      selectedUser: null,
      demo: false,
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
    demoUsers() {
      return this.$store.state.users.demoUsers;
    },
    cityUsers() {
      const cityUsers = this.users.filter(
        u => u.attributes.city_id === this.cityId,
      );
      return cityUsers.map(user => {
        const newUser = { ...user };
        newUser.attributes.full_name =
          newUser.attributes.family_name + ' ' + newUser.attributes.given_name;
        return newUser;
      });
    },
    cityDemoUsers() {
      const cityUsers = this.demoUsers.filter(
        u => u.attributes.city_id === this.cityId,
      );
      return cityUsers.map(user => {
        const newUser = { ...user };
        newUser.attributes.full_name =
          newUser.attributes.family_name + ' ' + newUser.attributes.given_name;
        return newUser;
      });
    },
  },
  mounted() {
    if (!this.users || !this.users.length) {
      this.$store.dispatch('users/getUsers');
    }
    if (!this.demoUsers || !this.demoUsers.length) {
      this.$store.dispatch('users/getDemoUsers');
    }
  },
  methods: {
    closeDialog() {
      this.visible = false;
    },
  },
};
</script>

<style></style>
