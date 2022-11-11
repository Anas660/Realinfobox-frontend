<template>
  <div class="container">
    <PageHeader title="Contents">
      <template v-if="isAdmin || isEditor" #right>
        <v-btn color="primary" @click="$router.push('/content/create')">
          <v-icon left> mdi-email-plus </v-icon>
          Create Content
        </v-btn>
      </template>
    </PageHeader>
    <div class="container-fluid elevation-1 white">
      <div class="row">
        <v-data-table
          :headers="tableHeaders"
          :items="tableData"
          :items-per-page="25"
          class="ContentsTable"
          :loading="loading"
        >
          <template #header.action>
            <div class="w-100 text-right">Actions</div>
          </template>
          <template #item.campaign_name="{ item }">
            <div class="">
              <div class="d-inline-block mr-2">
                <v-icon v-if="item.status === 'draft'" color="info">
                  mdi-file
                </v-icon>
                <v-icon
                  v-if="['scheduled', 'published'].includes(item.status)"
                  color="warning"
                >
                  mdi-clock-outline
                </v-icon>
                <v-icon v-if="item.status === 'sent'" color="success">
                  mdi-send-check
                </v-icon>
              </div>
              {{ item.campaign_name }}
            </div>
          </template>
          <template #item.at="{ item }">
            <div class="">
              {{
                (item.sent_at || item.scheduled)
                  | toZonedTime(item.city.timezone)
              }}
            </div>
          </template>
          <template #item.action="{ item }">
            <div class="d-flex justify-content-end">
              <!-- <template v-if="item.status === 'draft'"> -->
              <v-btn
                v-if="isUser"
                icon
                color="success"
                class="mr-2"
                @click="sendContentToMailingList(item.id)"
              >
                <v-icon> mdi-send </v-icon>
              </v-btn>
              <v-btn
                icon
                class="mr-2"
                nuxt
                :to="`/content/${item.id}${isUser ? '/edit' : ''}`"
              >
                <v-icon>
                  mdi-{{ item.status !== 'sent' ? 'pencil' : 'eye' }}
                </v-icon>
              </v-btn>
              <v-tooltip bottom>
                <template #activator="{ on }">
                  <v-btn icon class="mx-1" @click="duplicate(item)" v-on="on">
                    <v-icon> mdi-content-duplicate </v-icon>
                  </v-btn>
                </template>
                <span>duplicate</span>
              </v-tooltip>
              <!-- </template> -->
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
    return {
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
      content: state => state.content.content,
    }),
    tableHeaders() {
      return [
        { text: 'Name', value: 'campaign_name' },
        { text: 'Status', value: 'status' },
        { text: 'At', value: 'at' },
        { text: 'Actions', value: 'action', sortable: false, align: 'right' },
      ];
    },
    tableData() {
      if (!this.content) return [];
      return this.content.map(content => {
        const tableRow = {
          id: content.id,
          city: content.city,
          ...content.attributes,
        };

        return tableRow;
      });
    },
  },
  created() {
    this.$store.dispatch('content/getContent');
  },
  methods: {
    async duplicate(item) {
      try {
        this.loading = true;
        const { newContentId } = await this.$axios.$post(
          `/content/${item.id}/duplicate`,
        );
        this.$router.push(`/content/${newContentId}`);
        this.$snack.show('Duplication complete!', 'success');
      } catch (error) {
        this.$snack.show('Duplication failed', 'error');
      }
      this.loading = false;
    },
  },
};
</script>

<style lang="scss">
.ContentsTable {
  width: 100%;
}
</style>
