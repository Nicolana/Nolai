<script setup lang="ts">
import { useEditorStore } from '@/store/editor';
import { ref, onMounted } from 'vue';
import Sortable from 'sortablejs';

const editorStore = useEditorStore();
const blockList = ref<HTMLDivElement | null>(null);

onMounted(() => {
  if (blockList.value) {
    Sortable.create(blockList.value, {
      animation: 150,
      onEnd(event) {
        const [movedBlock] = editorStore.blocks.splice(event.oldIndex!, 1);
        editorStore.blocks.splice(event.newIndex!, 0, movedBlock);
      },
    });
  }
});
</script>

<template>
  <div class="p-4">
    <button @click="editorStore.addTextBlock" class="bg-primary text-white px-4 py-2 rounded">
      Add Text Block
    </button>
    <div ref="blockList" class="mt-4 space-y-2">
      <div
        v-for="block in editorStore.blocks"
        :key="block.id"
        class="p-2 bg-gray-100 rounded shadow"
      >
        <input
          v-model="block.content"
          class="w-full border border-gray-300 p-2 rounded"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>