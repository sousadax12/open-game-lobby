import { OnGatewayConnection, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';

@WebSocketGateway(3002)
export class EventsGateway implements OnGatewayConnection {

  @WebSocketServer() server;

  @SubscribeMessage('message')
  onEvent(client, data: string): string {
    console.log(data);
    return data;
  }

  handleConnection(socket) {
    console.log('teste');
    socket.on('message', (data) => {
      console.log('my:event triggered by adding listener to socket');
    });
  }
}
