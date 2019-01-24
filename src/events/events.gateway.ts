import { SubscribeMessage, WebSocketGateway } from '@nestjs/websockets';

@WebSocketGateway()
export class EventsGateway {

  @SubscribeMessage('sendPath')
  async identity(client, data: number): Promise<number> {
    return data;
  }
}
