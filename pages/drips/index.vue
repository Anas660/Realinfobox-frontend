<template>
  <div class="container">
    <PageHeader title="Demo Drips">
      <template v-if="isAdmin || isEditor" #right>
        <v-btn color="primary" @click="$router.push('/drips/create')">
          <v-icon left> mdi-email-plus </v-icon>
          Create Drip
        </v-btn>
      </template>
    </PageHeader>
    <div class="container-fluid elevation-1 white">
      <div class="row">
        <v-data-table
          :headers="tableHeaders"
          :items="tableData"
          :items-per-page="25"
          :loading="loading"
          class="w-100"
        >
          <template #header.action>
            <div class="w-100 text-right">Actions</div>
          </template>
          <template #item.name="{ item }">
            <div class="">
              {{ item.name }}
            </div>
          </template>
          <template #item.action="{ item }">
            <div class="d-flex justify-content-end">
              <v-btn icon class="mr-2" nuxt :to="`/drips/${item.id}`">
                <v-icon> mdi-pencil </v-icon>
              </v-btn>
              <!-- <v-tooltip bottom>
                <template v-slot:activator="{ on }">
                  <v-btn
                    icon
                    class="mx-1"
                    @click="duplicate(item)"
                    v-on="on"
                  >
                    <v-icon>
                      mdi-content-duplicate
                    </v-icon>
                  </v-btn>
                </template>
                <span>duplicate</span>
              </v-tooltip> -->
              <!-- <v-btn icon @click="deleteItem(item)">
                <v-icon>
                  mdi-delete
                </v-icon>
              </v-btn> -->
            </div>
          </template>
        </v-data-table>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import PageHeader from '~/components/organisms/PageHeader';
import ListsMixin from '~/mixins/lists';
import RolesMixin from '~/mixins/auth';

export default {
  components: {
    PageHeader,
  },
  mixins: [ListsMixin, RolesMixin],
  data() {
    return {};
  },
  computed: {
    ...mapState({
      drips: state => state.drips.drips,
    }),
    tableHeaders() {
      return [
        { text: 'Name', value: 'name' },
        // { text: 'Status', value: 'status' },
        { text: 'Delay', value: 'delay' },
        { text: 'Actions', value: 'action', sortable: false, align: 'right' },
      ];
    },
    tableData() {
      if (!this.drips) return [];
      return this.drips.map(drip => {
        const tableRow = {
          id: drip.id,
          city: drip.city,
          ...drip.attributes,
        };

        return tableRow;
      });
    },
  },
  created() {
    this.$store.dispatch('drips/getDrips');
  },
  methods: {
    // async duplicate(item) {
    //   try {
    //     this.loading = true;
    //     const { newContentId } = await this.$axios.$post(`/drips/${item.id}/duplicate`);
    //     this.$router.push(`/drips/${newContentId}`);
    //     this.$snack.show('Duplication complete!', 'success');
    //   } catch (error) {
    //     this.$snack.show('Duplication failed', 'error');
    //   }
    //   this.loading = false;
    // },
  },
};
</script>
