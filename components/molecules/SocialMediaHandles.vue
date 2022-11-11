<template>
  <div>
    <div>You can add your social media handles here</div>

    <div class="row">
      <div class="col">
        <v-text-field
          v-for="site in socialMedia"
          :key="site.name"
          :hint="site.hint"
          :value="handles[site.name]"
          persistent-hint
          @input="update(site, $event)"
        >
          <v-icon slot="prepend"> mdi-{{ site.name }} </v-icon>
        </v-text-field>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      loading: false,
      handles: {},
    };
  },
  computed: {
    socialMedia() {
      return [
        {
          name: 'facebook',
          hint: '',
        },
        {
          name: 'instagram',
          hint: '',
        },
        {
          name: 'youtube',
          hint: '',
        },
        {
          name: 'pinterest',
          hint: '',
        },
        {
          name: 'twitter',
          hint: '',
        },
        {
          name: 'linkedin',
          hint: '',
        },
      ];
    },
  },
  watch: {
    value: {
      handler() {
        this.handles = this.value;
      },
      deep: true,
      immediate: true,
    },
    handles: {
      handler() {
        this.$emit('input', this.handles);
      },
      deep: true,
    },
  },
  methods: {
    update(site, text) {
      this.handles = {
        ...this.handles,
        [site.name]: text,
      };
    },
  },
};
</script>
