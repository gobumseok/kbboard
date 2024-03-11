"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var FileService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileService = void 0;
const common_1 = require("@nestjs/common");
let FileService = FileService_1 = class FileService {
    constructor() {
        this.logger = new common_1.Logger(FileService_1.name);
    }
    async uploadFile(file) {
        if (!file) {
            throw new common_1.BadRequestException('파일이 존재하지 않습니다.');
        }
        return {
            statusCode: 200,
            data: file.path,
        };
    }
    async uploadFiles(files) {
        this.logger.debug(files);
        let fileNames = new Array();
        const cnt = files.length;
        for (let i = 0; i < cnt; i++) {
            fileNames.push(files[i].path);
        }
        return {
            statusCode: 200,
            data: fileNames,
        };
    }
};
exports.FileService = FileService;
exports.FileService = FileService = FileService_1 = __decorate([
    (0, common_1.Injectable)()
], FileService);
//# sourceMappingURL=file.service.js.map