declare const Upload: (props: any) => JSX.Element;
export interface fileI {
    name: string;
    fileType: string;
    fileExtension: string;
    fileSize: number;
    src: string;
    style: any;
    onChange?: () => void;
}
export default Upload;
