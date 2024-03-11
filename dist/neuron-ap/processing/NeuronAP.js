"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NeuronAP = exports.ResultDate = void 0;
const common_1 = require("@nestjs/common");
const NeuronData_1 = require("./NeuronData");
class ResultDate {
    constructor() {
        this.times = new Array();
        this.pAdata = new Array();
    }
}
exports.ResultDate = ResultDate;
class NeuronAP {
    constructor() {
        this.logger = new common_1.Logger(NeuronAP.name);
        this.pfirstNeuronData = new NeuronData_1.NeuronData();
    }
    SetOption(Option) {
        this.option = Option;
    }
    SetSkippoint(skippoint) {
        this.skippoints = skippoint;
    }
    GetNeuronData() {
        return this.pfirstNeuronData;
    }
    Init() {
        this.pfirstNeuronData = new NeuronData_1.NeuronData();
    }
    SetSTIMULUS(pSTIMULUS) {
        this.pfirstNeuronData.STIMULUS = pSTIMULUS;
        this.Result = new ResultDate();
    }
    InitConst(option) {
        if (this.pfirstNeuronData != null) {
            this.pfirstNeuronData.CONSTANTS.splice(0);
            this.pfirstNeuronData.RATES.splice(0);
            this.pfirstNeuronData.STATES.splice(0);
            this.pfirstNeuronData.RATES.push(0);
            this.pfirstNeuronData.RATES.push(0);
            this.pfirstNeuronData.RATES.push(0);
            this.pfirstNeuronData.RATES.push(0);
            this.pfirstNeuronData.RATES.push(0);
        }
        this.pfirstNeuronData.STATES.push(-55.0);
        this.pfirstNeuronData.CONSTANTS.push(21.0);
        this.pfirstNeuronData.CONSTANTS.push(0);
        this.pfirstNeuronData.CONSTANTS.push(50);
        this.pfirstNeuronData.CONSTANTS.push(28.0);
        this.pfirstNeuronData.STATES.push(0.01);
        this.pfirstNeuronData.CONSTANTS.push(-34.0);
        this.pfirstNeuronData.CONSTANTS.push(-5.0);
        this.pfirstNeuronData.CONSTANTS.push(10.0);
        this.pfirstNeuronData.CONSTANTS.push(-29.0);
        this.pfirstNeuronData.CONSTANTS.push(-4.0);
        this.pfirstNeuronData.CONSTANTS.push(-70.0);
        this.pfirstNeuronData.CONSTANTS.push(11.2);
        this.pfirstNeuronData.STATES.push(0.01);
        this.pfirstNeuronData.CONSTANTS.push(10.0);
        this.pfirstNeuronData.CONSTANTS.push(-29.0);
        this.pfirstNeuronData.CONSTANTS.push(-4.0);
        this.pfirstNeuronData.CONSTANTS.push(5.6);
        this.pfirstNeuronData.STATES.push(0.8 * 0.22);
        this.pfirstNeuronData.STATES.push(0.2 * 0.22);
        this.pfirstNeuronData.CONSTANTS.push(10000.0);
        this.pfirstNeuronData.CONSTANTS.push(-38.0);
        this.pfirstNeuronData.CONSTANTS.push(6.0);
        let commonv = 1500.0;
        let normalfac = 0.9 * 6.779661e-05;
        if (option == 1) {
            let gmax = 119.0;
            this.pfirstNeuronData.CONSTANTS[14] = gmax * normalfac * commonv;
            this.pfirstNeuronData.CONSTANTS[16] = -35.2524571;
            this.pfirstNeuronData.CONSTANTS[17] = -8.8724340;
        }
        if (option == 2) {
            let gmax = 33.0;
            this.pfirstNeuronData.CONSTANTS[14] = gmax * normalfac * commonv;
            this.pfirstNeuronData.CONSTANTS[16] = -32.3294322;
            this.pfirstNeuronData.CONSTANTS[17] = -9.3600084;
        }
        if (option == 3) {
            let gmax = 27.0;
            this.pfirstNeuronData.CONSTANTS[14] = gmax * normalfac * commonv;
            this.pfirstNeuronData.CONSTANTS[16] = -85.3448210;
            this.pfirstNeuronData.CONSTANTS[17] = -16.1445505;
        }
        if (option == 4) {
            let gmax = 43.0;
            this.pfirstNeuronData.CONSTANTS[14] = gmax * normalfac * commonv;
            this.pfirstNeuronData.CONSTANTS[16] = -59.9131689;
            this.pfirstNeuronData.CONSTANTS[17] = -10.1507308;
        }
        this.pfirstNeuronData.CONSTANTS.push(0.4 * 2.8);
        this.pfirstNeuronData.CONSTANTS.push(-40.0);
        this.pfirstNeuronData.CONSTANTS.push(-6.0);
        this.pfirstNeuronData.CONSTANTS.push(2.8);
        this.pfirstNeuronData.CONSTANTS.push(-50.0);
        this.pfirstNeuronData.CONSTANTS.push(0.0);
        this.pfirstNeuronData.CONSTANTS.push(0.0);
    }
    ComputeRates(VOI, CONSTANTS, ALGEBRAIC, STATES, RATES, STIMULUS, option) {
        ALGEBRAIC[1] = 1.00000 / (1.00000 + Math.exp((STATES[0] - CONSTANTS[7]) / CONSTANTS[8]));
        ALGEBRAIC[5] = CONSTANTS[6] / Math.cosh((STATES[0] - CONSTANTS[7]) / (2.00000 * CONSTANTS[8]));
        RATES[1] = (ALGEBRAIC[1] - STATES[1]) / ALGEBRAIC[5];
        ALGEBRAIC[2] = 1.00000 / (1.00000 + Math.exp((STATES[0] - CONSTANTS[12]) / CONSTANTS[13]));
        ALGEBRAIC[6] = CONSTANTS[11] / Math.cosh((STATES[0] - CONSTANTS[12]) / (2.00000 * CONSTANTS[13]));
        RATES[2] = (ALGEBRAIC[2] - STATES[2]) / ALGEBRAIC[6];
        ALGEBRAIC[3] = 1.00000 / (1.00000 + Math.exp((STATES[0] - CONSTANTS[16]) / CONSTANTS[17]));
        ALGEBRAIC[7] = CONSTANTS[15] / Math.cosh((STATES[0] - CONSTANTS[16]) / (2.00000 * CONSTANTS[17]));
        let RT = -8.314 * (273.15 + 36.5);
        let frac = 0.17;
        let secondk = 5;
        let pa = [0, 0.98233952, 158.63869700, 478.15527039, 0.04738974, -50.00000000];
        if (this.option == 1) {
            secondk = 5.0;
            let patemp1 = [0, 0.98233952, 158.63869700, 478.15527039, 0.04738974, -50.00000000];
            pa = patemp1;
        }
        if (this.option == 2) {
            secondk = 5.0;
            let patemp2 = [0, 0.66957093, 105.79052759, 297.44568350, 0.01710765, -50.00000000];
            pa = patemp2;
        }
        if (this.option == 3) {
            frac = 0.15;
            secondk = 5.0;
            let patemp3 = [0, 0.40000, 136.23290, 87.48064, 0.00000, -50.00000];
            pa = patemp3;
        }
        if (this.option == 4) {
            frac = 0.15;
            secondk = 9.0;
            let patemp = [0, 0.49062265, 157.50383269, 219.11317562, 0.03121019, -50.00000000];
            pa = patemp;
        }
        ALGEBRAIC[7] = 1000.0 * (pa[1] / (Math.exp(pa[2] * (STATES[0] - pa[5]) / RT) + Math.exp(-pa[3] * (STATES[0] - pa[5]) / RT)) + pa[4]);
        RATES[3] = (ALGEBRAIC[3] - STATES[3]) / ALGEBRAIC[7];
        RATES[4] = (ALGEBRAIC[3] - STATES[4]) / (ALGEBRAIC[7] * secondk);
        ALGEBRAIC[10] = 1.00000 / (1.00000 + Math.exp((STATES[0] - CONSTANTS[19]) / CONSTANTS[20]));
        ALGEBRAIC[11] = CONSTANTS[18] * ALGEBRAIC[10] * (STATES[0] - CONSTANTS[2]);
        ALGEBRAIC[0] = 1.00000 / (1.00000 + Math.exp((STATES[0] - CONSTANTS[4]) / CONSTANTS[5]));
        ALGEBRAIC[4] = CONSTANTS[3] * Math.pow(ALGEBRAIC[0], 3.00000) * (1.00000 - STATES[1]) * (STATES[0] - CONSTANTS[2]);
        ALGEBRAIC[8] = CONSTANTS[10] * Math.pow(STATES[2], 4.00000) * (STATES[0] - CONSTANTS[9]);
        let sf = [0, 0.30, 0.23];
        let drvF = sf[1] * 125.0 * Math.exp(sf[2] * 0.03748402 * STATES[0]) - sf[1] * 9.0 * Math.exp(-(1.0 - sf[2]) * 0.03748402 * STATES[0]);
        ALGEBRAIC[9] = CONSTANTS[14] * ((1.0 - frac) * STATES[3] + frac * STATES[4]) * drvF;
        ALGEBRAIC[12] = CONSTANTS[21] * (STATES[0] - CONSTANTS[22]);
        ALGEBRAIC[13] = CONSTANTS[23] * (STATES[0] - CONSTANTS[24]);
        CONSTANTS[1] = 0;
        if (VOI < STIMULUS[1]) {
            let checkNum = Math.floor(VOI / STIMULUS[0]);
            if (VOI - checkNum * STIMULUS[0] >= 1.0 && VOI - checkNum * STIMULUS[0] <= 1.0 + STIMULUS[3])
                CONSTANTS[1] = STIMULUS[2];
        }
        RATES[0] = (-(ALGEBRAIC[11] + ALGEBRAIC[9] + ALGEBRAIC[4] + ALGEBRAIC[8] + ALGEBRAIC[12] + ALGEBRAIC[13]) + CONSTANTS[1]) / CONSTANTS[0];
    }
    ComputeVariables(ALGEBRAIC, STATES, CONSTANTS) {
        if (ALGEBRAIC.length != 0) {
            ALGEBRAIC[0] = 1.00000 / (1.00000 + Math.exp((STATES[0] - CONSTANTS[4]) / CONSTANTS[5]));
            ALGEBRAIC[1] = 1.00000 / (1.00000 + Math.exp((STATES[0] - CONSTANTS[7]) / CONSTANTS[8]));
            ALGEBRAIC[2] = 1.00000 / (1.00000 + Math.exp((STATES[0] - CONSTANTS[12]) / CONSTANTS[13]));
            ALGEBRAIC[3] = 1.00000 / (1.00000 + Math.exp((STATES[0] - CONSTANTS[16]) / CONSTANTS[17]));
            ALGEBRAIC[4] = CONSTANTS[3] * Math.pow(ALGEBRAIC[0], 3.00000) * (1.00000 - STATES[1]) * (STATES[0] - CONSTANTS[2]);
            ALGEBRAIC[5] = CONSTANTS[6] / Math.cosh((STATES[0] - CONSTANTS[7]) / (2.00000 * CONSTANTS[8]));
            ALGEBRAIC[6] = CONSTANTS[11] / Math.cosh((STATES[0] - CONSTANTS[12]) / (2.00000 * CONSTANTS[13]));
            ALGEBRAIC[7] = CONSTANTS[15] / Math.cosh((STATES[0] - CONSTANTS[16]) / (2.00000 * CONSTANTS[17]));
            ALGEBRAIC[8] = CONSTANTS[10] * Math.pow(STATES[2], 4.00000) * (STATES[0] - CONSTANTS[9]);
            ALGEBRAIC[9] = CONSTANTS[14] * STATES[3] * (STATES[0] - CONSTANTS[9]);
            ALGEBRAIC[10] = 1.00000 / (1.00000 + Math.exp((STATES[0] - CONSTANTS[19]) / CONSTANTS[20]));
            ALGEBRAIC[11] = CONSTANTS[18] * ALGEBRAIC[10] * (STATES[0] - CONSTANTS[2]);
            ALGEBRAIC[12] = CONSTANTS[21] * (STATES[0] - CONSTANTS[22]);
            ALGEBRAIC[13] = CONSTANTS[23] * (STATES[0] - CONSTANTS[24]);
        }
        else {
            ALGEBRAIC.push(1.00000 / (1.00000 + Math.exp((STATES[0] - CONSTANTS[4]) / CONSTANTS[5])));
            ALGEBRAIC.push(1.00000 / (1.00000 + Math.exp((STATES[0] - CONSTANTS[7]) / CONSTANTS[8])));
            ALGEBRAIC.push(1.00000 / (1.00000 + Math.exp((STATES[0] - CONSTANTS[12]) / CONSTANTS[13])));
            ALGEBRAIC.push(1.00000 / (1.00000 + Math.exp((STATES[0] - CONSTANTS[16]) / CONSTANTS[17])));
            ALGEBRAIC.push(CONSTANTS[3] * Math.pow(ALGEBRAIC[0], 3.00000) * (1.00000 - STATES[1]) * (STATES[0] - CONSTANTS[2]));
            ALGEBRAIC.push(CONSTANTS[6] / Math.cosh((STATES[0] - CONSTANTS[7]) / (2.00000 * CONSTANTS[8])));
            ALGEBRAIC.push(CONSTANTS[11] / Math.cosh((STATES[0] - CONSTANTS[12]) / (2.00000 * CONSTANTS[13])));
            ALGEBRAIC.push(CONSTANTS[15] / Math.cosh((STATES[0] - CONSTANTS[16]) / (2.00000 * CONSTANTS[17])));
            ALGEBRAIC.push(CONSTANTS[10] * Math.pow(STATES[2], 4.00000) * (STATES[0] - CONSTANTS[9]));
            ALGEBRAIC.push(CONSTANTS[14] * STATES[3] * (STATES[0] - CONSTANTS[9]));
            ALGEBRAIC.push(1.00000 / (1.00000 + Math.exp((STATES[0] - CONSTANTS[19]) / CONSTANTS[20])));
            ALGEBRAIC.push(CONSTANTS[18] * ALGEBRAIC[10] * (STATES[0] - CONSTANTS[2]));
            ALGEBRAIC.push(CONSTANTS[21] * (STATES[0] - CONSTANTS[22]));
            ALGEBRAIC.push(CONSTANTS[23] * (STATES[0] - CONSTANTS[24]));
        }
    }
    ComputeProcessing(Time, TimeDelta) {
        let No = 0;
        for (let voi = 0; voi < Time; voi += TimeDelta) {
            let pNeuronData = this.pfirstNeuronData;
            this.ComputeVariables(pNeuronData.ALGEBRAIC, pNeuronData.STATES, pNeuronData.CONSTANTS);
            this.ComputeRates(voi, pNeuronData.CONSTANTS, pNeuronData.ALGEBRAIC, pNeuronData.STATES, pNeuronData.RATES, pNeuronData.STIMULUS, this.option);
            for (let i = 0; i < 5; i++) {
                pNeuronData.STATES[i] += TimeDelta * pNeuronData.RATES[i];
                if (No % this.skippoints == 0 && i == 0) {
                    this.Result.times.push(voi.toString());
                    this.Result.pAdata.push(pNeuronData.STATES[i]);
                }
            }
            No++;
        }
    }
    GetResult() {
        if (this.Result.times.length > 0)
            return this.Result;
        else
            return null;
    }
}
exports.NeuronAP = NeuronAP;
//# sourceMappingURL=NeuronAP.js.map