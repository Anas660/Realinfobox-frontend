<template>
  <div>
    <Loader v-if="isLoading || isBrandingLoading" />
    <div v-else ref="reports" class="d-flex flex-col items-center">
      <ReportPair
        :ref="`pair-${selectedProperty}`"
        :branding="branding"
        :city-years="getPropertyTypeData(selectedProperty, cityYears)"
        :data="getPropertyTypeData(selectedProperty, reportData)"
        :is-city="isCity"
        :month="computedReportMonth"
        :name="computedName"
        :city-name="city"
        :property-type="selectedProperty"
        :year-data="getPropertyTypeData(selectedProperty, yearReportData)"
        :year="computedReportYear"
      />

      <portal to="reportSelection">
        <FullReportOptionsCard
          :button-disabled="downloadButtonDisabled"
          :city="city"
          :city-name="name"
          :preview-url="previewUrl"
          :selected-property="selectedProperty"
          :property-types="propertyTypes"
          @propertyTypeChange="handlePropertyTypeSelection"
          @onDownloadPdfClick="handleGeneratePDFClick(true)"
          @onShowPdfClick="handleGeneratePDFClick()"
        />
      </portal>
    </div>

    <div id="canvases" ref="canvases" />
  </div>
</template>

<script>
import html2canvas from 'html2canvas';
import { axios, CancelToken } from 'axios';
import loadReportMixin from '~/mixins/loadReportMixin';

import { jsPDF } from 'jspdf';

import Loader from '~/components/atoms/Loader';
import ReportPair from '~/components/organisms/ReportPair';
import FullReportOptionsCard from '~/components/organisms/FullReportOptionsCard.vue';

export default {
  components: {
    Loader,
    ReportPair,
    FullReportOptionsCard,
  },
  mixins: [loadReportMixin],

  props: {
    locationName: { type: String, default: '' },
    dontLoad: { type: Boolean, default: false },
    externalData: { type: Object, default: null },
  },

  data() {
    return {
      cities: ['City of Calgary', 'Edmonton'],
      cityYears: [],
      error: '',
      isBrandingLoading: false,
      isCanvasGenerating: false,
      isDownloadClicked: false,
      isLoading: false,
      isNewTabClicked: false,
      previewUrl: '',
      reportData: [],
      selectedProperty: 'detached',
      yearReportData: [],
    };
  },

  computed: {
    branding() {
      if (this.externalData && this.externalData.branding) {
        return this.externalData.branding;
      }

      return this.$store.state.reports.branding;
    },

    brandingLoaded() {
      return this.$store.state.reports.brandingLoaded;
    },

    computedName() {
      if (this.locationName || this.dontLoad) {
        return this.locationName;
      }
      const { name } = this.$route.params;

      return name;
    },

    computedReportMonth() {
      if (this.externalData) {
        return parseInt(this.externalData.month);
      }

      return this.reportMonth;
    },

    computedReportYear() {
      if (this.externalData) {
        return parseInt(this.externalData.year);
      }
      return this.reportYear;
    },

    downloadButtonDisabled() {
      return this.isLoading || this.isCanvasGenerating;
    },

    city() {
      return (this.routeCity || this.externalData?.city || '').toLowerCase();
    },

    propertyTypes() {
      if (this.city === 'calgary') {
        return ['detached', 'semi-detached', 'row', 'apartment'];
      }

      return ['residential', 'detached', 'condo'];
    },

    propertyTypeKeys() {
      return Object.keys(this.propertyTypes);
    },

    reportDataAvailable() {
      return this.reportData && this.yearReportData;
    },

    isCity() {
      return this.cities.includes(this.computedName);
    },
  },

  watch: {
    externalData: {
      handler(newData) {
        if (!newData) {
          return;
        }

        const { months, years, cityYears } = newData;

        this.reportData = months;
        this.yearReportData = years;
        this.cityYears = cityYears;
      },
      immediate: true,
      deep: true,
    },
  },

  created() {
    if (!this.dontLoad) {
      this.$store.dispatch('reports/loadBranding');
    }

    this.selectedProperty = this.propertyTypes[0];
  },

  methods: {
    handlePropertyTypeSelection(val) {
      this.selectedProperty = val;
    },

    getPropertyTypeData(propertyType, array) {
      if (!array) {
        return [];
      }

      return array.map(arrayData => {
        return {
          ...arrayData[propertyType],
          month: arrayData.attrs.month,
          year: arrayData.attrs.year,
        };
      });
    },

    onCopy: function () {
      this.$snack.show('Copied to clipboard', 'success');
    },

    onError: function () {
      this.$snack.show('Failed to copy', 'danger');
    },

    async fetchReport() {
      try {
        if (this.cancelToken) {
          this.cancelToken.cancel();
        }

        this.cancelToken = this.$axios.CancelToken.source();
        this.isLoading = true;

        const { months, years, cityYears, previewUrl } = await this.$axios.$get(
          `/reports/${this.routeCity}/${this.reportYear}/${
            this.reportMonth
          }/${encodeURIComponent(this.computedName)}`,
          {
            cancelToken: this.cancelToken.token,
          },
        );

        this.reportData = months;
        this.yearReportData = years;
        this.cityYears = cityYears;
        this.previewUrl = previewUrl;

        const canvases = document.querySelector('#canvases');

        if (canvases.hasChildNodes) {
          canvases.innerHTML = '';
        }
      } catch (error) {
        if (axios.isCancel(error)) {
          return;
        }

        this.$snack.show("Couldn't load reports", 'danger');
      } finally {
        this.isLoading = false;
      }
    },

    async generateCanvases() {
      let reports = document.querySelectorAll("[id*='report']") || [];
      reports = Array.from(reports);

      const options = {
        useCORS: true,
        allowTaint: true,
        width: 1000,
        scale: 2,
      };

      const toAppend = await Promise.all(
        reports.map(async report => {
          const id = report.id.split('/')[1];

          const canvas = await html2canvas(report, options);
          canvas.classList.add(id);

          return canvas;
        }),
      );

      const canvases = this.$refs.canvases;
      canvases.innerHTML = '';

      const c = document.createDocumentFragment();

      for (const ta of toAppend) {
        c.appendChild(ta);
      }
      canvases.appendChild(c);

      return true;
    },

    async generatePDF(download) {
      try {
        const canvases = document.querySelector('#canvases').childNodes;

        const month = this.$options.filters.month(this.reportMonth - 1);
        const selectedProperty = this.$options.filters.capitalize(
          this.selectedProperty,
        );
        const pdfName = `${this.computedName} Report ${selectedProperty} - ${month} ${this.computedReportYear}`;
        const margins = 13;

        const image = {
          width: 190,
          height: 255,
        };

        const doc = new jsPDF('p', 'mm', 'letter');
        doc.setProperties({
          title: pdfName,
          useCORS: true,
        });

        doc.deletePage(1);

        if (!canvases || !canvases.length) {
          return;
        }

        for (const canvas of canvases) {
          if (canvas.className === this.selectedProperty) {
            doc.addPage();
            doc.addImage(
              canvas,
              'png',
              margins,
              margins,
              image.width,
              image.height,
            );
          }
        }

        download ? doc.save(pdfName) : window.open(doc.output('bloburl'));
      } catch (error) {
        this.$snack.show('Error generating PDF', 'error');
      }
    },

    async handleGeneratePDFClick(download = false) {
      download
        ? (this.isDownloadClicked = true)
        : (this.isNewTabClicked = true);
      this.isCanvasGenerating = true;
      this.$forceUpdate();

      await new Promise(resolve => setTimeout(resolve, 300));
      await this.generateCanvases();

      this.isCanvasGenerating = false;
      download
        ? (this.isDownloadClicked = false)
        : (this.isNewTabClicked = false);

      await this.generatePDF(download);
    },
  },
};
</script>
