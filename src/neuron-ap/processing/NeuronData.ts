


export class NeuronData {
    
    
    public CONSTANTS : Array<number>;
    public RATES :  Array<number>;
    public STATES : Array<number>;
    public ALGEBRAIC : Array<number>;
    public STIMULUS: Array<number>;
    public TimeDelta : number;


    constructor(){
        //this.amrtypeService = amrtypeService;

        this.CONSTANTS = new Array<number>();
        this.RATES = new Array<number>();
        this.STATES = new Array<number>();
        this.ALGEBRAIC = new Array<number>();

        this.RATES.push(0.0);
        this.RATES.push(0.0);
        this.RATES.push(0.0);
        this.RATES.push(0.0);
        this.RATES.push(0.0);
     }


}