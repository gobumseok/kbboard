import { Test, TestingModule } from '@nestjs/testing';
import { NeuronApService } from './neuron-ap.service';

describe('NeuronApService', () => {
  let service: NeuronApService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NeuronApService],
    }).compile();

    service = module.get<NeuronApService>(NeuronApService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
