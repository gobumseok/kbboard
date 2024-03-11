import { Module } from '@nestjs/common';
import { NeuronApController } from './neuron-ap.controller';
import { NeuronApService } from './neuron-ap.service';

@Module({
  controllers: [NeuronApController],
  providers: [NeuronApService]
})
export class NeuronApModule {}
