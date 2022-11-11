<template>
  <div class="Config container">
    <v-tabs v-model="activeTab" vertical>
      <div class="NavTabs">
        <v-tab>
          <div>
            <v-icon left> mdi-city </v-icon>
            Cities
          </div>
        </v-tab>
        <v-tab>
          <div>
            <v-icon left> mdi-table-column </v-icon>
            Block Sets
          </div>
        </v-tab>
        <v-tab>
          <div>
            <v-icon left> mdi-publish </v-icon>
            Demo Drips
          </div>
        </v-tab>
        <v-tab>
          <div>
            <v-icon left> mdi-publish </v-icon>
            Publish Notification
          </div>
        </v-tab>
        <v-tab>
          <div>
            <v-icon left> mdi-publish </v-icon>
            Reset Password Template
          </div>
        </v-tab>
        <v-tab>
          <div>
            <v-icon left> mdi-publish </v-icon>
            Invite Demo Email Template
          </div>
        </v-tab>
        <v-tab>
          <div>
            <v-icon left> mdi-publish </v-icon>
            Invite Client Email Template
          </div>
        </v-tab>
        <v-tab>
          <div>
            <v-icon left> mdi-publish </v-icon>
            Demo Registration Email Template
          </div>
        </v-tab>
        <v-tab>
          <div>
            <v-icon left> mdi-currency-usd </v-icon>
            Products
          </div>
        </v-tab>
        <!-- <v-tab>
      <div>
        <v-icon left>
          mdi-folder-multiple-image
        </v-icon>
        Listing setup
      </div>
    </v-tab> -->
      </div>

      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <section>
              <DemoDripTemplate />
            </section>
          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <section>
              <ResetPasswordTemplate />
            </section>
          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <section>
              <DemoInviteTemplate />
            </section>
          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <section>
              <ResetPasswordTemplate />
            </section>
          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <section>
              <DemoInviteTemplate />
            </section>
          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <section>
              <InviteEmailTemplate />
            </section>
          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <section>
              <DemoRegisterTemplate />
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
    </v-tabs>
  </div>
</template>

<script>
import InviteEmailTemplate from '~/components/organisms/InviteEmailTemplate';
import DemoInviteTemplate from '~/components/organisms/DemoInviteTemplate';
import DemoRegisterTemplate from '~/components/organisms/DemoRegisterTemplate';
import Products from '~/components/organisms/Products';
import DemoDripTemplate from '~/components/organisms/DemoDripTemplate';
import ResetPasswordTemplate from '~/components/organisms/ResetPasswordTemplate';

export default {
  components: {
    InviteEmailTemplate,
    DemoInviteTemplate,
    DemoRegisterTemplate,
    Products,
    DemoDripTemplate,
    ResetPasswordTemplate,
  },
  data() {
    return {
      activeTab: null,
    };
  },
};
</script>

<style lang="scss" scoped>
.Config {
  > section {
    margin-bottom: 56px;
  }
}
.NavTabs {
  > * {
    justify-content: left;
  }
}
</style>
