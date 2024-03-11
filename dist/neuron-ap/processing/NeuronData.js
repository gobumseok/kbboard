"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NeuronData = void 0;
class NeuronData {
    constructor() {
        this.CONSTANTS = new Array();
        this.RATES = new Array();
        this.STATES = new Array();
        this.ALGEBRAIC = new Array();
        this.RATES.push(0.0);
        this.RATES.push(0.0);
        this.RATES.push(0.0);
        this.RATES.push(0.0);
        this.RATES.push(0.0);
    }
}
exports.NeuronData = NeuronData;
//# sourceMappingURL=NeuronData.js.map