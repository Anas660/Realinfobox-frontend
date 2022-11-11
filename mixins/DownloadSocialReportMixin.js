import html2canvas from 'html2canvas';

export default {
  data() {
    return {
      isDownloading: false,
    };
  },
  methods: {
    download(canvas, filename) {
      const lnk = document.createElement('a');

      lnk.download = filename;
      lnk.href = canvas.toDataURL('image/png;base64');

      if (document.createEvent) {
        const e = document.createEvent('MouseEvents');

        e.initMouseEvent(
          'click',
          true,
          true,
          window,
          0,
          0,
          0,
          0,
          0,
          false,
          false,
          false,
          false,
          0,
          null,
        );

        lnk.dispatchEvent(e);
      } else if (lnk.fireEvent) {
        lnk.fireEvent('onclick');
      }
    },

    async generateCanvas(reportType, scale = 1, width = 600, height = 600) {
      try {
        this.isDownloading = true;
        const report = document.querySelector('.Report');

        const options = {
          scale,
          width,
          height,
          useCORS: true,
        };

        const canvas = await html2canvas(report, options);

        this.download(
          canvas,
          `${this.name} - ${reportType} Report - ${this.$options.filters.month(
            this.reportMonth - 1,
          )} ${this.reportYear}`,
        );

        this.isDownloading = false;
      } catch (error) {
        this.$snack.show('Failed to download the report', 'error');
      }
    },
  },
};
