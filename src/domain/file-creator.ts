export interface FileCreator {
    saveFile(text: string): void;
    setFileName(filename: string): void;
}