import { Test, TestingModule } from '@nestjs/testing';
import { NeuronApController } from './neuron-ap.controller';

describe('NeuronApController', () => {
  let controller: NeuronApController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NeuronApController],
    }).compile();

    controller = module.get<NeuronApController>(NeuronApController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
