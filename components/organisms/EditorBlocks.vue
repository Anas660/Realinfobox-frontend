<template>
  <section class="Blocks elevation-1 white d-flex flex-column p-4">
    <transition-group v-if="localBlocks.length" name="rearrange-blocks">
      <template v-for="(block, index) in localBlocks">
        <template v-if="!block.hidden">
          <div
            :key="block.block_id"
            class="EditorBlock mb-3"
            :style="{ zIndex: index }"
          >
            <EditorBlock
              :value="block"
              :first="index === 0"
              :last="index === localBlocks.length - 1"
              :editable="isBlockEditable(block)"
              :movable="movable"
              :hideable="isBlockHidable(block)"
              :removable="isBlockRemovable(block)"
              :configable="elevated"
              :custom-color="customColor"
              @move-up="moveUp"
              @move-down="moveDown"
              @input="updateBlock"
              @remove="removeBlock"
              @hide="hideBlock"
            />
          </div>
        </template>
      </template>
    </transition-group>
    <div v-else class="">
      <em>No blocks</em>
    </div>
  </section>
</template>

<script>
import EditorBlock from '~/components/organisms/EditorBlock';

export default {
  components: {
    EditorBlock,
  },
  props: {
    value: {
      type: Array,
      required: true,
    },
    editable: {
      type: Boolean,
      default: false,
    },
    movable: {
      type: Boolean,
      default: false,
    },
    hideable: {
      type: Boolean,
      default: false,
    },
    removable: {
      type: Boolean,
      default: false,
    },
    customColor: {
      type: String,
      default: null,
    },
    elevated: {
      //for admin access mostly in block-sets
      type: Boolean,
      default: false,
    },
  },
  computed: {
    localBlocks: {
      get() {
        return this.value;
      },
      set(blocks) {
        this.$emit('input', blocks);
      },
    },
  },
  methods: {
    updateBlock(block) {
      const index = this.localBlocks.findIndex(
        b => b.block_id === block.block_id,
      );
      if (index !== -1) {
        this.localBlocks.splice(index, 1, block);
      }
    },
    removeBlock(blockId) {
      const index = this.localBlocks.findIndex(i => i.block_id === blockId);
      this.localBlocks.splice(index, 1);
    },
    hideBlock(blockId) {
      const index = this.localBlocks.findIndex(i => i.block_id === blockId);
      const newBlock = { ...this.localBlocks[index], hidden: true };
      this.localBlocks.splice(index, 1, newBlock);
    },
    moveUp(blockId) {
      this.moveBlock(blockId, 'up');
    },
    moveDown(blockId) {
      this.moveBlock(blockId, 'down');
    },
    moveBlock(blockId, direction) {
      const index = this.localBlocks.findIndex(b => b.block_id === blockId);
      if (index !== -1) {
        if (direction === 'up' && index !== 0) {
          const newIndex = index - 1;
          const blockToMoveUp = this.localBlocks[index];
          const blockToMoveDown = this.localBlocks[newIndex];
          this.localBlocks.splice(newIndex, 2, blockToMoveUp, blockToMoveDown);
        }
        if (direction === 'down' && index !== this.localBlocks.length) {
          const blockToMoveDown = this.localBlocks[index];
          const blockToMoveUp = this.localBlocks[index + 1];
          this.localBlocks.splice(index, 2, blockToMoveUp, blockToMoveDown);
        }
      }
    },
    isBlockEditable(block) {
      return this.elevated || (this.editable && !block.default);
    },
    isBlockHidable(block) {
      return this.hideable && block.default;
    },
    isBlockRemovable(block) {
      return this.elevated || (this.removable && !block.default);
    },
  },
};
</script>

<style></style>
