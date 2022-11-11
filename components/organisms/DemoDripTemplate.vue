<template>
  <div>
    <SectionHeader>
      <template #right>
        <v-btn
          color="primary"
          @click="$router.push('/config/demo-drips/create')"
        >
          <v-icon left> mdi-table-plus </v-icon>
          Create Email
        </v-btn>
      </template>
    </SectionHeader>
    <div class="container-fluid elevation-1 white">
      <div class="row">
        <v-data-table
          :headers="tableHeaders"
          :items="tableData"
          :items-per-page="25"
          class="w-100"
          :loading="loading"
        >
          <template #header.action>
            <div class="w-100 text-right">Actions</div>
          </template>
          <template #item.template_name="{ item }">
            <div class="">
              <v-icon left> mdi-table </v-icon>
              {{ item.template_name }}
            </div>
          </template>
          <template #item.action="{ item }">
            <div class="d-flex justify-content-end">
              <v-btn
                icon
                class="mr-2"
                nuxt
                :to="`/config/demo-drips/${item.id}`"
              >
                <v-icon> mdi-pencil </v-icon>
              </v-btn>
            </div>
          </template>
        </v-data-table>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import SectionHeader from '~/components/molecules/SectionHeader';
import ListsMixin from '~/mixins/lists';

export default {
  components: {
    SectionHeader,
  },
  mixins: [ListsMixin],
  data() {
    return {
      tableHeaders: [
        { text: 'Name', value: 'name' },
        { text: 'Subject', value: 'subject' },
        { text: 'City', value: 'city_name' },
        { text: 'Delay', value: 'delay' },
        { text: 'Actions', value: 'action', sortable: false, align: 'right' },
      ],
    };
  },
  computed: {
    ...mapState({
      demoDrips: state => state.config.demoDrips,
    }),
    tableData() {
      if (!this.demoDrips) return [];
      return this.demoDrips.map(demoDrip => {
        const tableRow = {
          id: demoDrip.id,
          ...demoDrip.attributes,
        };

        return tableRow;
      });
    },
  },
  created() {
    this.loadDemoDrips();
  },
  methods: {
    loadDemoDrips() {
      this.$store.dispatch('config/loadDemoDrips');
    },
  },
};
</script>

<style></style>
