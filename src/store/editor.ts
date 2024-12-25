import type { Block, BlockType } from '@/types/block';
import { defineStore } from 'pinia';
import { v4 as uuidv4 } from 'uuid';

export const useEditorStore = defineStore('editor', {
    state: () => ({
        blocks: [] as Block[],
    }),
    actions: {
        addBlock(type: BlockType, content: any) {
            this.blocks.push({
                id: uuidv4(),
                type,
                content,
            });
        },
        updateBlockContent(id: string, content: any) {
            const block = this.blocks.find(block => block.id === id);
            if (block) {
                block.content = content;
            }
        },
        updateBlockStyle(id: string, style: Record<string, string>) {
            const block = this.blocks.find(block => block.id === id);
            if (block) {
                block.style = style;
            }
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