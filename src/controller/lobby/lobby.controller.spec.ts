import { Test, TestingModule } from '@nestjs/testing';
import { LobbyController } from './lobby.controller';

describe('Lobby Controller', () => {
  let controller: LobbyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LobbyController],
    }).compile();

    controller = module.get<LobbyController>(LobbyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
