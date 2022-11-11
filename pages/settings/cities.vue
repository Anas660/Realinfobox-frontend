<template>
  <div class="mx-20">
    <SectionHeader>
      <template #right>
        <v-menu
          v-model="addMenu"
          :close-on-content-click="false"
          :nudge-width="200"
          offset-y
          offset-x
          left
        >
          <template #activator="{ on }">
            <v-btn color="primary" v-on="on">
              <v-icon left> mdi-city </v-icon>
              Add City
            </v-btn>
          </template>

          <v-card>
            <v-card-text>
              <v-form>
                <v-form ref="form" v-model="form.valid" @submit.prevent>
                  <v-text-field
                    v-model="form.data.name"
                    name="city_name"
                    label="City name"
                    :rules="rules.city_name"
                    required
                    autofocus
                  />
                  <v-select
                    v-model="form.data.timezone"
                    :items="timezones"
                    :rules="rules.timezone"
                    item-text="name"
                    item-value="value"
                    label="Timezone"
                    required
                  />
                </v-form>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer />

              <v-btn text @click="addMenu = false"> Cancel </v-btn>
              <v-btn
                color="primary"
                :loading="saving"
                :disabled="!form.valid"
                @click="addCity"
              >
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-menu>
      </template>
    </SectionHeader>
    <div class="container-fluid elevation-1 white">
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
        <template #item.name="{ item }">
          <div v-if="item.edit" class="">
            <v-text-field
              v-model="item.editedName"
              name="city_name"
              label="City name"
              :rules="rules.name"
              required
              autofocus
            />
          </div>
          <div v-else class="">
            {{ item.name }}
          </div>
        </template>
        <template #item.timezone="{ item }">
          <div v-if="item.edit" class="">
            <v-select
              v-model="item.editedTimezone"
              :items="timezones"
              :rules="rules.timezone"
              item-text="name"
              item-value="value"
              label="Timezone"
              required
            />
          </div>
          <div v-else class="">
            {{ item.timezone }}
          </div>
        </template>
        <template #item.action="{ item }">
          <div class="d-flex justify-content-end">
            <template v-if="item.edit">
              <v-btn
                icon
                class="mr-2"
                nuxt
                color="success"
                @click="submitEdit(item)"
              >
                <v-icon> mdi-check </v-icon>
              </v-btn>

              <v-btn icon color="error" @click="cancelEdit(item)">
                <v-icon> mdi-cancel </v-icon>
              </v-btn>
            </template>
            <template v-else>
              <v-btn icon class="mr-2" nuxt @click="editItem(item)">
                <v-icon> mdi-pencil </v-icon>
              </v-btn>
            </template>
          </div>
        </template>
      </v-data-table>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import SectionHeader from '~/components/molecules/SectionHeader';
import ListsMixin from '~/mixins/lists';
import config from '~/config.json';

export default {
  components: {
    SectionHeader,
  },
  mixins: [ListsMixin],
  data() {
    return {
      tableHeaders: [
        { text: 'Name', value: 'name' },
        { text: 'Timezone', value: 'timezone' },
        { text: 'Actions', value: 'action', sortable: false, align: 'right' },
      ],
      addMenu: false,
      form: {
        valid: false,
        data: {
          name: '',
          timezone: '',
        },
      },
      rules: {
        city_name: [v => !!v || 'Name is required'],
        timezone: [v => !!v || 'Timezone is required'],
      },
      saving: false,
      tableData: undefined,
      timezones: config.timezones,
    };
  },
  computed: {
    ...mapGetters({
      cities: 'config/citiesArray',
    }),
  },
  watch: {
    cities: {
      handler() {
        if (!this.cities) return;
        this.tableData = this.cities.map(city => {
          const foundTimezone = this.timezones.find(
            tz => tz.value === city.attributes.timezone,
          );

          const tableRow = {
            id: city.id,
            ...city.attributes,
            timezone: foundTimezone
              ? foundTimezone.name
              : city.attributes.timezone,
            edit: false,
            editedName: city.attributes.name,
            editedTimezone: city.attributes.timezone,
          };

          return tableRow;
        });
      },
      immediate: true,
    },
  },
  created() {
    this.$nextTick(() => {
      if (!this.cities.length) this.loadCities();
    });
  },
  methods: {
    loadCities() {
      this.$store.dispatch('config/loadCities', {});
    },
    async addCity() {
      if (!this.form.valid) return;
      try {
        this.saving = true;

        await this.$axios.$post('/config/cities', this.form.data);
        this.loadCities();
        this.$snack.show('Saved successfully', 'success');
      } catch (error) {
        this.$snack.show('Saving error', 'error');
      }
      this.saving = false;
    },
    editItem(item) {
      const index = this.tableData.findIndex(td => td.id === item.id);
      if (~index) {
        this.tableData.splice(index, 1, {
          ...item,
          edit: true,
        });
      }
    },
    async submitEdit(item) {
      try {
        await this.$axios.$patch(`/config/cities/${item.id}`, {
          name: item.editedName,
          timezone: item.editedTimezone,
        });
        const index = this.tableData.findIndex(td => td.id === item.id);
        if (~index) {
          this.tableData.splice(index, 1, {
            ...this.tableData[index],
            edit: false,
            name: item.editedName,
            timezone: this.timezones.find(
              tz => tz.value === item.editedTimezone,
            ).name,
          });
        }
        this.$snack.show('Saved successfully', 'success');
      } catch (error) {
        this.$snack.show('Saving error', 'error');
      }
    },
    cancelEdit(item) {
      const index = this.tableData.findIndex(td => td.id === item.id);
      if (~index) {
        this.tableData.splice(index, 1, {
          ...item,
          edit: false,
          editedName: item.name,
        });
      }
    },
  },
};
</script>
