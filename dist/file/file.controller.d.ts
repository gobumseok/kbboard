/// <reference types="multer" />
import { FileService } from './file.service';
export declare class FileController {
    private readonly fileService;
    constructor(fileService: FileService);
    fileUpload(file: Express.Multer.File): Promise<{
        statusCode: number;
        data: string;
    }>;
    filesUpload(files: Array<Express.Multer.File>): Promise<{
        statusCode: number;
        data: string[];
    }>;
}
