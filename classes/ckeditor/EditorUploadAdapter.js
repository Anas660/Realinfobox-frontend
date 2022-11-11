import axios from 'axios';
const { BASE_URL } = process.env;
const $axios = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
});

class EditorUploadAdapter {
  constructor(loader) {
    // The file loader instance to use during the upload.
    this.loader = loader;
  }

  // Starts the upload process.
  async upload() {
    try {
      const file = await this.loader.file;
      const body = new FormData();
      body.append('file', file);

      let query = '';
      ['name', 'size', 'type'].forEach(key => {
        const value = file[key];
        query += `${key}=${value}&`;
      });

      query = encodeURI(query);
      const impersonatedId = localStorage.getItem('aid');
      if (impersonatedId) {
        const aid = `aid=${impersonatedId}`;
        query += `${aid}`;
      }

      // TODO validate file
      const {
        data: { url },
      } = await $axios.get(`/uploads/url?${query}`, {
        headers: {
          Authorization: localStorage.getItem('auth._token.local'),
        },
      });

      await $axios.put(url, file, {
        headers: {
          'Content-Type': file.type,
        },
      });

      //return first part of url without the query params
      const urlWithoutQuery = url.split('?')[0];

      return {
        default: urlWithoutQuery,
      };
    } catch (error) {
      this.$snack.show('An error has occurred', 'error');
    }
  }

  // Aborts the upload process.
  abort() {
    this.$snack.show('Upload aborted', 'info');
  }
}

export default EditorUploadAdapter;
