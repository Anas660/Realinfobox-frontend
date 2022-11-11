<template>
  <div class="container">
    <v-tabs v-model="activeTab" horizontal>
      <v-tab>
        <div>
          <v-icon left> mdi-account-group </v-icon>
          Clients accounts
        </div>
      </v-tab>
      <v-tab>
        <div>
          <v-icon left> mdi-account-group-outline </v-icon>
          Demo accounts
        </div>
      </v-tab>
      <v-tab>
        <div>
          <v-icon left> mdi-currency-usd </v-icon>
          Clients vs. Products
        </div>
      </v-tab>
      <v-tab>
        <div>
          <v-icon left> mdi-file-chart </v-icon>
          Logs
        </div>
      </v-tab>

      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <section>
              <Clients />
            </section>
          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <section>
              <Demos />
            </section>
          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <section>
              <Products />
            </section>
          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <section>
              <Logs />
            </section>
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs>
  </div>
</template>

<script>
import Clients from './clients';
import Demos from './demos';
import Products from './products';
import Logs from './actions';

export default {
  components: {
    Clients,
    Demos,
    Products,
    Logs,
  },
  data() {
    return {
      activeTab: null,
    };
  },
};
</script>
