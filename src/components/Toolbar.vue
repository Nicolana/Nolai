<script setup lang="ts">
import { useEditorStore } from '@/store/editor';

const editorStore = useEditorStore();

const addTextBlock = () => {
    editorStore.addBlock('text');
};
</script>

<template>
<div class="flex gap-2 p-4">
    <button @click="addTextBlock" class="btn btn-primary">Add Text</button>
</div>
</template>