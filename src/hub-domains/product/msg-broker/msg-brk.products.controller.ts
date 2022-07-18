import { Controller } from '@nestjs/common';
import { EventPattern, MessagePattern } from '@nestjs/microservices';

@Controller()
export class MsgBrkProductsController {
  @MessagePattern({ cmd: 'greeting' })
  getGreetingMessage(name: string): string {
    return `Hello ${name}`;
  }

  @MessagePattern({ cmd: 'greeting-async' })
  async getGreetingMessageAsync(name: string): Promise<string> {
    return `Hello ${name} Async`;
  }

  @EventPattern('product-created')
  async handleBookCreatedEvent(data: Record<string, unknown>) {
    console.log('product-created:::', data);
  }

  @EventPattern()
  async handleBookDCreatedEvent(data: Record<string, unknown>) {
    console.log('here::::', data);
  }
}
