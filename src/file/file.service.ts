import { BadRequestException, Injectable, Logger } from '@nestjs/common';

@Injectable()
export class FileService {


  private readonly logger = new Logger(FileService.name);

  async uploadFile(file: Express.Multer.File) {

    if (!file) {
      throw new BadRequestException('파일이 존재하지 않습니다.');
    }
    return {
      statusCode: 200,
      data: file.path,
    };

  }

  async uploadFiles(files: Array<Express.Multer.File>) {
    
    this.logger.debug(files);
    
    let fileNames = new Array<string>();
    
    const cnt: number = files.length;
    
    for (let i = 0; i < cnt; i++) {
      fileNames.push(files[i].path);
    }

    return {
      statusCode: 200,
      data: fileNames,
    };
  }
}