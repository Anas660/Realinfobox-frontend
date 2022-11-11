import DefaultBlocksPicker from '~/components/molecules/DefaultBlocksPicker';
import _ from 'lodash';

export default {
  components: {
    DefaultBlocksPicker,
  },
  data() {
    return {
      defaultBlocksSource: 'campaign',
    };
  },
  computed: {
    selectedDefaultBlocks: {
      get() {
        if (!this.blocks) return [];
        return this.blocks.filter(block => block.default && !block.hidden);
      },
      set(newSelectedBlocks) {
        const currentDefaultBlocks = this.blocks.filter(block => block.default);
        if (newSelectedBlocks.length > currentDefaultBlocks.length) {
          //the block is not in the current block list at all, add it from default_blocks
          const currentDefaultBlocksIds = currentDefaultBlocks.map(
            block => block.block_id,
          );

          const toAddIds = _.difference(
            newSelectedBlocks,
            currentDefaultBlocksIds,
          );
          toAddIds.forEach(id => {
            const block = this[this.defaultBlocksSource].default_blocks.find(
              bl => bl.block_id === id,
            );
            this.blocks.push({
              ...block,
              default: true,
            });
          });
        } else {
          this.blocks.forEach((block, index) => {
            let hidden = false;
            if (block.default && !newSelectedBlocks.includes(block.block_id)) {
              hidden = true;
            }
            this.blocks.splice(index, 1, { ...block, hidden });
          });
        }
      },
    },
  },
};
