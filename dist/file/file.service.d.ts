/// <reference types="multer" />
export declare class FileService {
    private readonly logger;
    uploadFile(file: Express.Multer.File): Promise<{
        statusCode: number;
        data: string;
    }>;
    uploadFiles(files: Array<Express.Multer.File>): Promise<{
        statusCode: number;
        data: string[];
    }>;
}
