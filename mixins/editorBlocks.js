import AddBlockDialog from '~/components/organisms/AddBlockDialog';
import EditorBlocks from '~/components/organisms/EditorBlocks';
import UploadFileMixin from '~/mixins/uploadFile';

export default {
  components: {
    AddBlockDialog,
    EditorBlocks,
  },
  mixins: [UploadFileMixin],
  data() {
    return {
      blocks: [],
      defaultBlocks: [],
      dialogs: {
        addBlock: {
          visible: false,
          error: null,
        },
      },
      refreshInterval: null,
      savingBlock: false,
    };
  },
  computed: {
    currentBlockNames() {
      return this.blocks.map(b => b.name);
    },
  },
  mounted() {
    // if page is open, attempt to refresh without request every 59minutes
    // this is a fallback solution for this screen as axios is not intercepted on image upload
    this.refreshInterval = setInterval(this.refreshToken, 59 * 60 * 1000);
  },
  destroyed() {
    clearInterval(this.refreshInterval);
  },
  methods: {
    async addBlock(payload) {
      this.savingBlock = true;
      if (this.currentBlockNames.includes(payload.block_name)) {
        this.dialogs.addBlock.error = 'This block name already exists';
        return;
      } else {
        this.dialogs.addBlock.error = null;
      }
      const newBlock = {
        block_id: payload.block_name.split(' ').join('-'),
        name: payload.block_name,
        type: payload.block_type,
      };

      if (['image', 'svg'].includes(newBlock.type)) {
        if (payload.href) newBlock.href = payload.href;
        const { url } = await this.uploadFile(payload.image_file);
        newBlock.image_url = url;
      }

      this.blocks.push(newBlock);
      this.dialogs.addBlock.visible = false;
      this.savingBlock = false;
    },
    async refreshToken() {
      const localRefreshToken = this.$auth.getRefreshToken(
        this.$auth.$storage.state.strategy,
      );
      if (localRefreshToken) {
        try {
          const refreshResponse = await this.$axios.$post(
            '/auth/login/refresh',
            {
              refresh_token: localRefreshToken.replace('Bearer ', ''),
            },
          );
          const newToken = 'Bearer ' + refreshResponse.access_token;
          this.$auth.setToken(this.$auth.$storage.state.strategy, newToken);
          this.$axios.setHeader('Authorization', newToken);
        } catch (error) {
          this.$auth.logout();

          setTimeout(() => {
            this.$router.push('/login');
          });
        }
      }
    },
  },
};
