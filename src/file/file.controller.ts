import {
    Controller,
    Post,
    UploadedFile,
    UploadedFiles,
    UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import e from 'express';
import { FileService } from './file.service';
import { diskStorage } from 'multer';


/**
 * 내용:파일 업로드 기능 추가 
 * 
 */
@Controller('file')
export class FileController {

    constructor(private readonly fileService: FileService) { }

    @Post('upload')
    @UseInterceptors(FileInterceptor('file', { storage: diskStorage({destination: 'upload/document',filename: (req : e.Request, file, cb) => {
          cb(null, file.originalname);
        },
      }),
    }),
    )
    async fileUpload(@UploadedFile() file: Express.Multer.File) {
        return await this.fileService.uploadFile(file);
    }
    

    @Post('uploads')
    @UseInterceptors(FilesInterceptor('file',10,{ storage: diskStorage({destination: 'upload/document',filename: (req : e.Request, file, cb) => {
          cb(null, file.originalname);
        },
      }),
    }),
    )
    async filesUpload(@UploadedFiles() files: Array<Express.Multer.File>) {
        return await this.fileService.uploadFiles(files);
    }
}
