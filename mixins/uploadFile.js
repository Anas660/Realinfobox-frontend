import axios from 'axios';
export default {
  data() {
    return {
      savingImage: false,
    };
  },

  methods: {
    async uploadFile(file) {
      this.savingImage = true;
      try {
        const body = new FormData();
        body.append('file', file);

        let query = '';
        ['name', 'size', 'type'].forEach(key => {
          const value = file[key];
          query += `${key}=${value}&`;
        });

        query = encodeURI(query);

        const {
          data: { url },
        } = await this.$axios.get(`/uploads/url?${query}`, {
          headers: {
            Authorization: localStorage.getItem('auth._token.local'),
          },
        });
        await axios.put(url, file, {
          headers: {
            'Content-Type': file.type,
          },
        });

        //return first part of url without the query params
        const urlWithoutQuery = url.split('?')[0];
        this.savingImage = false;
        return {
          url: urlWithoutQuery,
        };
      } catch (error) {
        this.$snack.show('File upload failure', 'danger');
      }
      this.savingImage = false;
    },
  },
};
