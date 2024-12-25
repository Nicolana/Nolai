
export type BlockType = 'text' | 'image' | 'video';

export type Block = {
    id: string;
    type: BlockType;
    content: any;
    style?: Record<string, string>;
}
