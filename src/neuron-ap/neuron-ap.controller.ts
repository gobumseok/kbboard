import { Body, Controller, Get, Logger } from '@nestjs/common';
import { NeuronAP, ResultDate } from './processing/NeuronAP'


@Controller('neuron-ap')
export class NeuronApController {

    private readonly logger = new Logger(NeuronApController.name);

    @Get('/aaa')
    Get_NeuronAP(): ResultDate {


        //let data = 'nininini';
        //this.logger.debug(data);


        let cNeuronAP = new NeuronAP();

        //cNeuronAP.Init();

        let dVal = new Array<number>();
        dVal.push(1000);
        dVal.push(10000);
        dVal.push(30);
        dVal.push(500);


        //this.logger.debug(dVal);

        //int option = OptionIndex + 1; //select number

        cNeuronAP.SetSTIMULUS(dVal);
        cNeuronAP.InitConst(1);
        cNeuronAP.SetOption(1);
        cNeuronAP.SetSkippoint(1000);
        cNeuronAP.ComputeProcessing(10000,0.01);
        //await this.amrService.createAmr(amrDto);

        return cNeuronAP.GetResult();

    }
}
