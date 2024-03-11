import { NeuronData } from './NeuronData';
export declare class ResultDate {
    times: Array<string>;
    pAdata: Array<number>;
    constructor();
}
export declare class NeuronAP {
    private pfirstNeuronData;
    private option;
    private Result;
    private skippoints;
    private readonly logger;
    constructor();
    SetOption(Option: number): void;
    SetSkippoint(skippoint: number): void;
    GetNeuronData(): NeuronData;
    Init(): void;
    SetSTIMULUS(pSTIMULUS: Array<number>): void;
    InitConst(option: number): void;
    ComputeRates(VOI: number, CONSTANTS: Array<number>, ALGEBRAIC: Array<number>, STATES: Array<number>, RATES: Array<number>, STIMULUS: Array<number>, option: number): void;
    ComputeVariables(ALGEBRAIC: Array<number>, STATES: Array<number>, CONSTANTS: Array<number>): void;
    ComputeProcessing(Time: number, TimeDelta: number): void;
    GetResult(): ResultDate;
}
