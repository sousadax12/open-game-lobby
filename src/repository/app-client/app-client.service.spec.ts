import { Test, TestingModule } from '@nestjs/testing';
import { AppClientService } from './app-client.service';

describe('AppClientService', () => {
  let service: AppClientService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AppClientService],
    }).compile();

    service = module.get<AppClientService>(AppClientService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
