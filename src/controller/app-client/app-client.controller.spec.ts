import { Test, TestingModule } from '@nestjs/testing';
import { AppClientController } from './app-client.controller';

describe('AppClient Controller', () => {
  let controller: AppClientController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AppClientController],
    }).compile();

    controller = module.get<AppClientController>(AppClientController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
