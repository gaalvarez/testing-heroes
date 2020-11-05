import { MessageService } from './message.service';

describe('MessageService', () => {
  let service: MessageService;

  it('al inicio no debe haber mensajes', () => {
    service = new MessageService();

    expect(service.messages.length).toBe(0);
  });

  it('al agregar un mensaje con add se incrementa el listado', () => {
    service = new MessageService();
    service.add('mensaje 1');

    expect(service.messages.length).toBe(1);
  });

  it('al llamar a clear la lista de mensajes debe quedar vacia', () => {
    service = new MessageService();
    service.add('mensaje 1');

    service.clear();

    expect(service.messages.length).toBe(0);
  });
});
