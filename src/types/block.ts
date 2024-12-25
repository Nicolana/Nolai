
export type Block = {
    id: string;
    type: 'text' | 'image' | 'video';
    content: any;
    style?: Record<string, string>;
}