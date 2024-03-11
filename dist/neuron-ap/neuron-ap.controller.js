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
var NeuronApController_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NeuronApController = void 0;
const common_1 = require("@nestjs/common");
const NeuronAP_1 = require("./processing/NeuronAP");
let NeuronApController = NeuronApController_1 = class NeuronApController {
    constructor() {
        this.logger = new common_1.Logger(NeuronApController_1.name);
    }
    Get_NeuronAP() {
        let cNeuronAP = new NeuronAP_1.NeuronAP();
        let dVal = new Array();
        dVal.push(1000);
        dVal.push(10000);
        dVal.push(30);
        dVal.push(500);
        cNeuronAP.SetSTIMULUS(dVal);
        cNeuronAP.InitConst(1);
        cNeuronAP.SetOption(1);
        cNeuronAP.SetSkippoint(1000);
        cNeuronAP.ComputeProcessing(10000, 0.01);
        return cNeuronAP.GetResult();
    }
};
exports.NeuronApController = NeuronApController;
__decorate([
    (0, common_1.Get)('/aaa'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", NeuronAP_1.ResultDate)
], NeuronApController.prototype, "Get_NeuronAP", null);
exports.NeuronApController = NeuronApController = NeuronApController_1 = __decorate([
    (0, common_1.Controller)('neuron-ap')
], NeuronApController);
//# sourceMappingURL=neuron-ap.controller.js.map