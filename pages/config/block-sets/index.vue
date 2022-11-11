<template>
  <div class="container">
    <PageHeader title="Content Block Sets">
      <template #right>
        <v-btn
          color="primary"
          @click="$router.push('/campaigns/templates/create')"
        >
          <v-icon left> mdi-table-plus </v-icon>
          Create content blocks set
        </v-btn>
      </template>
    </PageHeader>
    <div class="container-fluid elevation-1 white">
      <div class="row">
        <v-data-table
          :headers="tableHeaders"
          :items="tableData"
          :items-per-page="25"
          class="CampaignsTable"
        >
          <template v-if="loading" #body>
            <SkeletonTableRows :table-headers="tableHeaders" />
          </template>
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
              <template v-if="item.status === 'draft'">
                <v-btn
                  icon
                  class="mr-2"
                  nuxt
                  :to="`/campaigns/templates/${item.id}`"
                >
                  <v-icon> mdi-pencil </v-icon>
                </v-btn>
              </template>
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
import SkeletonTableRows from '~/components/molecules/SkeletonTableRows';
import ListsMixin from '~/mixins/lists';

export default {
  components: {
    PageHeader,
    SkeletonTableRows,
  },
  mixins: [ListsMixin],
  middleware: 'isAdmin',
  data() {
    return {
      tableHeaders: [
        { text: 'Name', value: 'template_name' },
        { text: 'Actions', value: 'action', sortable: false, align: 'right' },
      ],
      dialogs: {
        addEditor: {
          visible: false,
          errors: null,
        },
        editEditor: {
          editorId: null,
          visible: false,
          error: null,
        },
      },
      dialogBusy: false,
      form: {
        valid: false,
        rules: {
          given_name: [v => !!v || 'Name is required'],
          family_name: [v => !!v || 'Family name is required'],
          email: [
            v => !!v || 'E-mail is required',
            v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
          ],
        },
        data: {
          given_name: null,
          family_name: null,
          email: null,
        },
      },
    };
  },
  computed: {
    ...mapState({
      blockSets: state => state.blockSets.blockSets,
    }),
    tableData() {
      if (!this.blockSets) return [];
      return this.blockSets.map(blockSet => {
        const tableRow = {
          id: blockSet.id,
          ...blockSet.attributes,
        };

        return tableRow;
      });
    },
  },
  created() {
    this.loadBlockSets();
  },
  methods: {
    loadBlockSets() {
      this.$store.dispatch('blockSets/getBlockSets');
    },
  },
};
</script>

<style lang="scss">
.CampaignsTable {
  width: 100%;
}
</style>
