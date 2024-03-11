
import { Logger } from '@nestjs/common';
import { NeuronData } from './NeuronData';

export class ResultDate{

    times : Array<string>;
    pAdata : Array<number>;
    
    constructor(){
        this.times = new Array<string>();
        this.pAdata = new Array<number>();
    }

}


export class NeuronAP {

    private pfirstNeuronData : NeuronData;
    private option : number;
    private Result : ResultDate;
    private skippoints : number;
    private readonly logger = new Logger(NeuronAP.name);


    constructor(){
        this.pfirstNeuronData = new NeuronData();
    }

    public SetOption(Option : number){
        this.option = Option;
    }

    public SetSkippoint(skippoint : number){
        this.skippoints = skippoint;
    }


    public  GetNeuronData() : NeuronData{
        return this.pfirstNeuronData;
    }

    public Init() : void {
        this.pfirstNeuronData = new NeuronData();
    }

    public SetSTIMULUS(pSTIMULUS : Array<number>) : void {
        this.pfirstNeuronData.STIMULUS = pSTIMULUS;
        this.Result = new ResultDate();
    }


    public InitConst(option : number){

        
        if (this.pfirstNeuronData != null ){
                
            this.pfirstNeuronData.CONSTANTS.splice(0);
            this.pfirstNeuronData.RATES.splice(0);
            this.pfirstNeuronData.STATES.splice(0);
            this.pfirstNeuronData.RATES.push(0);
            this.pfirstNeuronData.RATES.push(0);
            this.pfirstNeuronData.RATES.push(0);
            this.pfirstNeuronData.RATES.push(0);
            this.pfirstNeuronData.RATES.push(0);

                //STIMULUS.Clear();
            }
            
            this.pfirstNeuronData.STATES.push(-55.0);        // membrane potential
            this.pfirstNeuronData.CONSTANTS.push(21.0);      // capacitance (pF)
            this.pfirstNeuronData.CONSTANTS.push(0);         // applied current (pA)
            this.pfirstNeuronData.CONSTANTS.push(50);        // Na-equilibrium potential (mV)




            this.pfirstNeuronData.CONSTANTS.push(28.0);      // maximum conductance of fast Na-current (nS)
            this.pfirstNeuronData.STATES.push(0.01);         // n-gate of fast Na-current
            this.pfirstNeuronData.CONSTANTS.push(-34.0);     // theta of fast Na-current (mV)
            this.pfirstNeuronData.CONSTANTS.push(-5.0);      // sigma of fast Na-current (mV)	
            this.pfirstNeuronData.CONSTANTS.push(10.0);      // maximum tau of n-gate in fast Na-current (msec)
            this.pfirstNeuronData.CONSTANTS.push(-29.0);     // theta-n of fast Na-current (mV)
            this.pfirstNeuronData.CONSTANTS.push(-4.0);      // sigma-n of fast Na-current (mV)

            this.pfirstNeuronData.CONSTANTS.push(- 70.0);    // K-equilibrium potential (mV)	
            this.pfirstNeuronData.CONSTANTS.push( 11.2);     // conductance of K-current
            this.pfirstNeuronData.STATES.push(0.01);         // n-gate of K-current	
            this.pfirstNeuronData.CONSTANTS.push(10.0);      // maximum tau of n-gate in K-current
            this.pfirstNeuronData.CONSTANTS.push(- 29.0);    // theta-n of K-current
            this.pfirstNeuronData.CONSTANTS.push(-4.0);      // sigma-n of K-current



            this.pfirstNeuronData.CONSTANTS.push(5.6);       // conductance of KCNQ current
            this.pfirstNeuronData.STATES.push( 0.8 * 0.22);  // k gate of KCNQ current
            this.pfirstNeuronData.STATES.push(0.2 * 0.22);   // k gate of KCNQ current

            this.pfirstNeuronData.CONSTANTS.push(10000.0);   // maximum tau of k-gate in KCNQ current
            //            Original
            this.pfirstNeuronData.CONSTANTS.push( -38.0);    // theta-k of KCNQ current
            this.pfirstNeuronData.CONSTANTS.push(6.0);       // sigma-k of KCNQ current

            let commonv = 1500.0;
            let normalfac = 0.9 * 6.779661e-05;

            if ( option == 1)
            {
                //old WT
                //CONSTANTS[14] = 0.012768328 * commonv;	// conductance of KCNQ current
                //CONSTANTS[16] = -14.1649;			// theta-k of KCNQ current
                //CONSTANTS[17] = -10.30549;          // sigma-k of KCNQ current

                //                new WT
                let gmax = 119.0;
                this.pfirstNeuronData.CONSTANTS[14] = gmax * normalfac * commonv; // conductance of KCNQ current
                this.pfirstNeuronData.CONSTANTS[16] = -35.2524571;                // theta-k of KCNQ current
                this.pfirstNeuronData.CONSTANTS[17] = -8.8724340;                 // sigma-k of KCNQ current
            }


            if (option == 2){
                //R353K
                //CONSTANTS[14] = 2.5 * 0.001882154 * commonv; // conductance of KCNQ current		
                //CONSTANTS[16] = -15.57231;          // theta-k of KCNQ current
                //CONSTANTS[17] = -10.27447;          // sigma-k of KCNQ current		

                //N258S
                let gmax = 33.0;
                this.pfirstNeuronData.CONSTANTS[14] = gmax * normalfac * commonv; // conductance of KCNQ current
                this.pfirstNeuronData.CONSTANTS[16] = -32.3294322;                // theta-k of KCNQ current
                this.pfirstNeuronData.CONSTANTS[17] = -9.3600084;                 // sigma-k of KCNQ current
            }

            if (option == 3)
            {
                //R353K + Retigabine
                //CONSTANTS[14] = 2.5 * 0.001882154 * 7.05 / 3.94 * commonv;  // conductance of KCNQ current, Retigabine
                //CONSTANTS[16] = -15.57231;          // theta-k of KCNQ current
                //CONSTANTS[17] = -10.27447;          // sigma-k of KCNQ current

                //R258S + Retigabine
                let gmax = 27.0;
                this.pfirstNeuronData.CONSTANTS[14] = gmax * normalfac * commonv; // conductance of KCNQ current		
                this.pfirstNeuronData.CONSTANTS[16] = -85.3448210;                // theta-k of KCNQ current
                this.pfirstNeuronData.CONSTANTS[17] = -16.1445505;                // sigma-k of KCNQ current
            }

            if (option == 4){
                //R258S + Flupirtine
                let gmax = 43.0;
                this.pfirstNeuronData.CONSTANTS[14] = gmax * normalfac * commonv; // conductance of KCNQ current		
                this.pfirstNeuronData.CONSTANTS[16] = -59.9131689;                // theta-k of KCNQ current
                this.pfirstNeuronData.CONSTANTS[17] = -10.1507308;                // sigma-k of KCNQ current
            }

            this.pfirstNeuronData.CONSTANTS.push(0.4 * 2.8);              // conductance of persistent Na-current, note_20180329
            this.pfirstNeuronData.CONSTANTS.push(-40.0);                  // theta-m of persistent Na-current
            this.pfirstNeuronData.CONSTANTS.push(-6.0);                   // sigma-m of persistent Na-current

            this.pfirstNeuronData.CONSTANTS.push(2.8);                // conductance of Leakage-current
            this.pfirstNeuronData.CONSTANTS.push(-50.0);              // reversal potential of Leakage-current

            this.pfirstNeuronData.CONSTANTS.push(0.0);                // conductance of tonic current
            this.pfirstNeuronData.CONSTANTS.push(0.0);                // reversal potential of tonic current

            // theta and sigma
            // 1.0/(1.0 + exp((V-theta)/sigma))



        }

        public ComputeRates(VOI : number,CONSTANTS : Array<number>,ALGEBRAIC : Array<number>,STATES : Array<number> , RATES  : Array<number>,STIMULUS : Array<number>,option : number){
            
            ALGEBRAIC[1] = 1.00000 / (1.00000 + Math.exp((STATES[0] - CONSTANTS[7]) / CONSTANTS[8]));
            ALGEBRAIC[5] = CONSTANTS[6] / Math.cosh((STATES[0] - CONSTANTS[7]) / (2.00000 * CONSTANTS[8]));
            RATES[1] = (ALGEBRAIC[1] - STATES[1]) / ALGEBRAIC[5];
            ALGEBRAIC[2] = 1.00000 / (1.00000 + Math.exp((STATES[0] - CONSTANTS[12]) / CONSTANTS[13]));
            ALGEBRAIC[6] = CONSTANTS[11] / Math.cosh((STATES[0] - CONSTANTS[12]) / (2.00000 * CONSTANTS[13]));
            RATES[2] = (ALGEBRAIC[2] - STATES[2]) / ALGEBRAIC[6];
            ALGEBRAIC[3] = 1.00000 / (1.00000 + Math.exp((STATES[0] - CONSTANTS[16]) / CONSTANTS[17]));

            // original
            ALGEBRAIC[7] = CONSTANTS[15] / Math.cosh((STATES[0] - CONSTANTS[16]) / (2.00000 * CONSTANTS[17]));

            let RT = -8.314 * (273.15 + 36.5);
            let frac = 0.17;
            let secondk = 5;
            let pa = [ 0, 0.98233952, 158.63869700, 478.15527039, 0.04738974, -50.00000000 ];

            if (this.option == 1){
                // Old WT
                //ALGEBRAIC[7] = 1000.0*(1.0 / (0.0039*exp(-(STATES[0] + 0.0) / 3.12448) + 60.84659*exp((STATES[0] + 0.0) / 14.5589)) + 0.10004);

                // New WT
                secondk = 5.0;
                let patemp1 = [0, 0.98233952, 158.63869700, 478.15527039, 0.04738974, -50.00000000 ];
                pa = patemp1;
                
            }
            if (this.option == 2){
                // R353K
                //ALGEBRAIC[7] = 1000.0*(1.0 / (0.00828*exp(-(STATES[0] - 10.74055) / 5.94792) + 29.63901*exp((STATES[0] - 10.74055) / 14.80179)) + 0.07241);

                // N258S		
                secondk = 5.0;
                let patemp2 = [0, 0.66957093, 105.79052759, 297.44568350, 0.01710765, -50.00000000 ];
                pa = patemp2;
            }
            if (this.option == 3){
                // R353K + Retigabine
                //ALGEBRAIC[7] = 1000.0*(1.0 / (0.00828*exp(-(STATES[0] - 10.74055) / 5.94792) + 29.63901*exp((STATES[0] - 10.74055) / 14.80179)) + 0.07241);

                // R258S + Retigabine
                frac = 0.15;
                secondk = 5.0;
                let patemp3 = [ 0, 0.40000, 136.23290, 87.48064, 0.00000, -50.00000 ];
                pa = patemp3;
            }

            if (this.option == 4){
                // R258S + Flupirtine
                frac = 0.15;
                secondk = 9.0;
                let patemp = [0, 0.49062265, 157.50383269, 219.11317562, 0.03121019, -50.00000000 ];
                pa = patemp;
            }
            ALGEBRAIC[7] = 1000.0 * (pa[1] / (Math.exp(pa[2] * (STATES[0] - pa[5]) / RT) + Math.exp(-pa[3] * (STATES[0] - pa[5]) / RT)) + pa[4]);

            RATES[3] = (ALGEBRAIC[3] - STATES[3]) / ALGEBRAIC[7];
            RATES[4] = (ALGEBRAIC[3] - STATES[4]) / (ALGEBRAIC[7] * secondk);     // second k

            ALGEBRAIC[10] = 1.00000 / (1.00000 + Math.exp((STATES[0] - CONSTANTS[19]) / CONSTANTS[20]));
            ALGEBRAIC[11] = CONSTANTS[18] * ALGEBRAIC[10] * (STATES[0] - CONSTANTS[2]);
            ALGEBRAIC[0] = 1.00000 / (1.00000 + Math.exp((STATES[0] - CONSTANTS[4]) / CONSTANTS[5]));
            ALGEBRAIC[4] = CONSTANTS[3] * Math.pow(ALGEBRAIC[0], 3.00000) * (1.00000 - STATES[1]) * (STATES[0] - CONSTANTS[2]);
            ALGEBRAIC[8] = CONSTANTS[10] * Math.pow(STATES[2], 4.00000) * (STATES[0] - CONSTANTS[9]);

            // apply current equation for driving force
            let sf = [ 0, 0.30, 0.23 ];
            let drvF = sf[1] * 125.0 * Math.exp(sf[2] * 0.03748402 * STATES[0]) - sf[1] * 9.0 * Math.exp(-(1.0 - sf[2]) * 0.03748402 * STATES[0]);
            ALGEBRAIC[9] = CONSTANTS[14] * ((1.0 - frac) * STATES[3] + frac * STATES[4]) * drvF;

            ALGEBRAIC[12] = CONSTANTS[21] * (STATES[0] - CONSTANTS[22]);
            ALGEBRAIC[13] = CONSTANTS[23] * (STATES[0] - CONSTANTS[24]);

            CONSTANTS[1] = 0;           // applied current
            if (VOI < STIMULUS[1]){

                let checkNum = Math.floor(VOI / STIMULUS[0]);
                if (VOI - checkNum * STIMULUS[0] >= 1.0 && VOI - checkNum * STIMULUS[0] <= 1.0 + STIMULUS[3]) CONSTANTS[1] = STIMULUS[2];
            }

            RATES[0] = (-(ALGEBRAIC[11] + ALGEBRAIC[9] + ALGEBRAIC[4] + ALGEBRAIC[8] + ALGEBRAIC[12] + ALGEBRAIC[13]) + CONSTANTS[1]) / CONSTANTS[0];

        }



        public ComputeVariables(ALGEBRAIC : Array<number>, STATES : Array<number> ,CONSTANTS : Array<number>) {

            if(ALGEBRAIC.length != 0){

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
            else{

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


        public ComputeProcessing(Time : number, TimeDelta : number){
            
            
            let No = 0;
            
            
            for (let voi = 0; voi < Time; voi += TimeDelta){
                
               
                let pNeuronData : NeuronData = this.pfirstNeuronData;
                this.ComputeVariables(pNeuronData.ALGEBRAIC, pNeuronData.STATES, pNeuronData.CONSTANTS);
                this.ComputeRates(voi, pNeuronData.CONSTANTS, pNeuronData.ALGEBRAIC, pNeuronData.STATES, pNeuronData.RATES, pNeuronData.STIMULUS, this.option);


                for (let i = 0; i < 5; i++){


                    pNeuronData.STATES[i] += TimeDelta * pNeuronData.RATES[i];
                    //this.logger.debug(pNeuronData.STATES[i]);
                    if (No % this.skippoints == 0 && i == 0){
                        
                        this.Result.times.push(voi.toString());
                        this.Result.pAdata.push(pNeuronData.STATES[i]);
                             
                    }    

                }
                No++;
            }

            //this.logger.debug(this.Result.length);

        }

        public GetResult() : ResultDate {

            if(this.Result.times.length > 0)
                return this.Result;
            else    
                return null;
        }

}
