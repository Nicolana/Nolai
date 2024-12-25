import type { Block } from '@/types/block';
import { defineStore } from 'pinia';
import { v4 as uuidv4 } from 'uuid';

export const useEditorStore = defineStore('editor', {
    state: () => ({
        blocks: [] as Block[],
    }),
    actions: {
        addTextBlock() {
            this.blocks.push({
                id: uuidv4(),
                type: 'text',
                content: 'New Text Block',
            })
        },
        addBlock(block: Block) {
            this.blocks.push(block);
        },
        updateBlock(id: string, updateBlock: Partial<Block>) {
            const blockIndex = this.blocks.findIndex(block => block.id === id);
            if (blockIndex !== -1) {
                this.blocks[blockIndex] = { ...this.blocks[blockIndex], ...updateBlock };
            }
        },
        removeBlock(id: string) {
            this.blocks = this.blocks.filter(block => block.id !== id);
        }
    }
});