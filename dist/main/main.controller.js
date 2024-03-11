"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var MainController_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainController = void 0;
const common_1 = require("@nestjs/common");
class Root_Data {
    constructor() {
        this.message = '';
        this.people = new Array();
    }
}
;
let MainController = MainController_1 = class MainController {
    constructor() {
        this.logger = new common_1.Logger(MainController_1.name);
    }
    async main_page(res) {
        let pData = new Root_Data();
        pData.message = 'asdasdasdasd';
        pData.people.push('kim 1');
        pData.people.push('kim 2');
        pData.people.push('kim 3');
        pData.people.push('kim 4');
        pData.people.push('kim 5');
        pData.people.push('kim 6');
        pData.people.push('kim 7');
        pData.people.push('kim 8');
        this.logger.debug('message:', pData.message);
        this.logger.debug('people list: ', pData.people);
        return res.render('temp/main', { Result: pData });
    }
    welcome(res) {
        return res.render('', { layout: 'welcome', message: 'Hello world!!' });
    }
    root(res) {
        return res.render('index', { message: 'Hello world!!' });
    }
    printName(res) {
        return res.render('print', { message: 'Hello world!!' });
    }
    anotherLayout(res) {
        return res.render('print', {
            layout: 'layout_other',
            message: 'Hello world!!',
        });
    }
    getArray(res) {
        const contentArray = [
            { message: 'first' },
            { message: 'second' },
            { message: 'third' },
        ];
        return res.render('array', { myArray: contentArray });
    }
};
exports.MainController = MainController;
__decorate([
    (0, common_1.Get)('/main_page'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MainController.prototype, "main_page", null);
__decorate([
    (0, common_1.Get)('/welcome'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], MainController.prototype, "welcome", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], MainController.prototype, "root", null);
__decorate([
    (0, common_1.Get)('name'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], MainController.prototype, "printName", null);
__decorate([
    (0, common_1.Get)('layout'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], MainController.prototype, "anotherLayout", null);
__decorate([
    (0, common_1.Get)('array'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], MainController.prototype, "getArray", null);
exports.MainController = MainController = MainController_1 = __decorate([
    (0, common_1.Controller)()
], MainController);
;
//# sourceMappingURL=main.controller.js.map