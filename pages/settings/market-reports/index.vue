<template>
  <div class="mx-20">
    <Loader v-if="isLoading || isCustomBannerLoading" />

    <div v-else class="d-flex flex-col">
      <v-tabs v-model="tab" class="mb-5" color="primary">
        <v-tab v-for="item in items" :key="item">{{ item }}</v-tab>
      </v-tabs>
      <v-btn
        color="primary"
        class="ml-auto mb-5"
        :disabled="isLoading"
        @click="setBranding"
      >
        Save changes
      </v-btn>
      <div v-if="tab === 0">
        <div class="BannerPreviewWrapper mb-5">
          <SimpleBannerPreview
            v-if="!bannerSetup.isCustomActive"
            :agent-photo-url="agentPhotoUrl"
            :banner-background-url="bannerBackgroundUrl"
            :banner-config="bannerConfig"
            :banner-height="bannerSetup.bannerHeight"
            :color-config="colorConfig"
            :logo-photo-url="logoPhotoUrl"
          />
          <CustomBannerPreview
            v-else
            :height="bannerSetup.bannerHeight"
            :image="customBannerImage"
          />
        </div>
        <div class="row justify-content-center">
          <div class="col-10">
            <BannerSetup v-model="bannerSetup" />

            <div v-if="!bannerSetup.isCustomActive" class="SimpleSetup">
              <BannerConfiguration v-model="bannerConfig" />
              <BannerImagery v-model="localImagery" />
            </div>

            <div
              v-else
              class="CustomSetup"
              :style="{ display: 'flex', flexDirection: 'column' }"
            >
              <v-file-input
                v-model="customBannerFile"
                class="CustomBannerInput"
                outlined
                placeholder="Upload banner image"
                @change="getBannerImageHeight"
              />
            </div>
          </div>
        </div>
      </div>
      <ColorConfigurator
        v-else
        v-model="colorConfig"
        @on-default-colors-click="handleDefaultColorsClick"
      />
    </div>
  </div>
</template>

<script>
import axios from 'axios';

import BannerConfiguration from '~/components/molecules/BannerConfiguration';
import BannerImagery from '~/components/molecules/BannerImagery';
import BannerSetup from '~/components/molecules/BannerSetup';
import ColorConfigurator from '~/components/organisms/ColorConfigurator';
import CustomBannerPreview from '~/components/atoms/CustomBannerPreview';
import Loader from '~/components/atoms/Loader';
import SimpleBannerPreview from '~/components/molecules/SimpleBannerPreview';

export default {
  components: {
    BannerConfiguration,
    BannerImagery,
    BannerSetup,
    ColorConfigurator,
    CustomBannerPreview,
    Loader,
    SimpleBannerPreview,
  },

  data() {
    return {
      isCustomBannerLoading: false,
      isLoading: false,

      tab: 0,
      items: ['Banner', 'Branding Color'],

      customBannerFile: null,
      customBannerUrl: null,

      bannerSetup: {
        bannerHeight: 250,
        isCustomActive: false,
      },

      bannerConfig: {
        name: '',
        title: '',
        company: '',
        phone: '',
        website: '',
        email: '',
      },

      colorConfig: {
        color1: '#E15226',
        color2: '#4A4A4A',
        color3: '#DEDEDE',
      },

      localImagery: {
        agentPhoto: null,
        backgroundPhoto: null,
        logoPhoto: null,
      },

      imagery: {
        agentPhotoUrl: null,
        backgroundUrl: null,
        logoUrl: null,
      },
    };
  },

  computed: {
    customBannerImage() {
      if (this.customBannerFile) {
        return URL.createObjectURL(this.customBannerFile);
      }

      if (this.customBannerUrl) {
        return this.customBannerUrl;
      }

      return '';
    },

    agentPhotoUrl() {
      if (this.localImagery.agentPhoto) {
        return URL.createObjectURL(this.localImagery.agentPhoto);
      }

      if (this.imagery.agentPhotoUrl) {
        return this.imagery.agentPhotoUrl;
      }

      return '';
    },

    bannerBackgroundUrl() {
      if (this.localImagery.backgroundPhoto) {
        return URL.createObjectURL(this.localImagery.backgroundPhoto);
      }

      if (this.imagery.backgroundUrl) {
        return this.imagery.backgroundUrl;
      }

      return '';
    },

    logoPhotoUrl() {
      if (this.localImagery.logoPhoto) {
        return URL.createObjectURL(this.localImagery.logoPhoto);
      }

      if (this.imagery.logoUrl) {
        return this.imagery.logoUrl;
      }

      return '';
    },
  },

  created() {
    this.fetchBranding();
  },

  methods: {
    setBannerHeight(height) {
      this.bannerSetup.bannerHeight = height;
    },
    getBannerImageHeight() {
      if (this.customBannerFile) {
        const file = this.customBannerFile;
        const _URL = window.URL || window.webkitURL;
        const img = new Image();
        const self = this;

        img.onload = function () {
          const actualHeight = Math.round((1000 * this.height) / this.width);
          self.setBannerHeight(actualHeight > 250 ? 250 : actualHeight);
        };

        img.src = _URL.createObjectURL(file);
      }
    },

    handleDefaultColorsClick() {
      this.colorConfig = {
        color1: '#E15226',
        color2: '#4A4A4A',
        color3: '#DEDEDE',
      };
    },

    async setCustomBanner() {
      try {
        this.isLoading = true;

        const { url } = await this.$axios.$get(
          '/reports/branding/custom-banner-url',
          {
            params: {
              type: this.customBannerFile.type,
              name: this.customBannerFile.name,
            },
          },
        );

        await axios.put(url, this.customBannerFile, {
          headers: {
            'Content-Type': this.customBannerFile.type,
          },
        });

        const splitUrl = url.split('?');

        this.isLoading = false;

        return splitUrl[0];
      } catch (error) {
        this.error = error;
        this.isLoading = false;
      }
    },

    async fetchBranding() {
      try {
        this.isLoading = true;

        const {
          agentPhotoUrl,
          backgroundUrl,
          bannerHeight,
          bannerType,
          color1,
          color2,
          color3,
          company,
          customBannerUrl,
          email,
          logoUrl,
          name,
          phone,
          title,
          website,
        } = await this.$axios.$get('/reports/branding');

        this.bannerSetup = {
          ...this.bannerSetup,
          bannerHeight,
          isCustomActive: bannerType === 'custom',
        };

        this.bannerConfig = {
          name,
          title,
          company,
          phone,
          website,
          email,
        };

        this.colorConfig = {
          color1,
          color2,
          color3,
        };

        this.imagery = {
          agentPhotoUrl,
          backgroundUrl,
          logoUrl,
        };

        this.customBannerUrl = customBannerUrl;

        this.isLoading = false;
      } catch (error) {
        this.isLoading = false;
        this.error = error;

        setTimeout(() => {
          this.error = '';
        }, 1500);
      }
    },

    async uploadBrandingImage(file, imageType) {
      const { url } = await this.$axios.$get('/reports/branding/image-url', {
        params: {
          type: file.type,
          name: file.name,
          imageType,
        },
      });

      await axios.put(url, file, {
        headers: {
          'Content-Type': file.type,
        },
      });

      const splitUrl = url.split('?');

      return splitUrl[0];
    },

    async setBranding() {
      try {
        this.isLoading = true;

        const { isCustomActive } = this.bannerSetup;
        const { agentPhoto, backgroundPhoto, logoPhoto } = this.localImagery;

        const bannerType = isCustomActive ? 'custom' : 'simple';

        const agentImage = agentPhoto
          ? await this.uploadBrandingImage(agentPhoto, 'agent')
          : null;

        const backgroundImage = backgroundPhoto
          ? await this.uploadBrandingImage(backgroundPhoto, 'background')
          : null;

        const logoImage = logoPhoto
          ? await this.uploadBrandingImage(logoPhoto, 'logo')
          : null;

        const customBanner = this.customBannerFile
          ? await this.setCustomBanner()
          : this.customBannerUrl;

        if (this.bannerSetup.bannerHeight > 300) {
          this.bannerSetup.bannerHeight = 300;
        }

        const payload = {
          ...this.bannerConfig,
          ...this.colorConfig,
          agentPhotoUrl: agentImage,
          backgroundUrl: backgroundImage,
          customBannerUrl: customBanner,
          bannerHeight: this.bannerSetup.bannerHeight,
          bannerType,
          logoUrl: logoImage,
        };

        await this.$axios.put('/reports/branding', payload);
        this.$snack.show('Saved successfully', 'success');
      } catch (error) {
        this.$snack.show('Failed to save branding', 'danger');
      } finally {
        this.isLoading = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.BannerPreviewWrapper {
  position: relative;
  height: 300px;
}

.CustomBannerInput {
  margin-left: auto;
  width: 332px;
}
</style>
