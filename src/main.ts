import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.connectMicroservice({
    transport: Transport.MQTT,
    options: {
      url: 'mqtt://localhost:1883',
      clientId: 'test',
    },
  });
  console.log('cp1');
  // await app.startAllMicroservices();
  console.log('cp2');
  await app.listen(3000);
  console.log('Server ' + (await app.getUrl()) + ' is running');
}
bootstrap();
