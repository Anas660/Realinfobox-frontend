<template>
  <v-dialog v-model="value" width="500" @click:outside="$emit('close')">
    <v-card>
      <v-card-title class="headline" primary-title> Delete User </v-card-title>

      <v-card-text v-if="user">
        <p>Are you sure you want to delete this user?</p>
        <div class="font-weight-bold">
          {{ user.attributes.given_name }} {{ user.attributes.family_name }}
        </div>
        <div class="font-weight-medium">
          {{ user.attributes.email }}
        </div>
        <v-checkbox
          v-model="confirmCheckbox"
          label="I understand this action is irreversible"
        />
      </v-card-text>
      <v-card-text v-else>
        <v-progress-circular :size="70" :width="7" indeterminate />
      </v-card-text>

      <v-card-actions>
        <v-spacer />
        <v-btn color="grey" text @click="closeCreateDialog"> cancel </v-btn>
        <v-btn
          color="primary"
          :loading="busy"
          :disabled="!user || !confirmCheckbox"
          @click="$emit('submit', userId)"
        >
          Delete
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
      confirmCheckbox: false,
    };
  },
  computed: {
    user() {
      let user = this.$store.state.users.users.find(
        user => user.id === this.userId,
      );
      if (!user)
        user = this.$store.state.users.demoUsers.find(
          user => user.id === this.userId,
        );
      return user;
    },
  },
  methods: {
    closeCreateDialog() {
      this.$emit('close');
    },
  },
};
</script>

<style></style>
