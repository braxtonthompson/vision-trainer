export const FILES = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'] as const;
export type FileType = typeof FILES[number];