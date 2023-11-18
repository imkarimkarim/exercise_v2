import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableVersioning();
  const config = app.get(ConfigService);
  await app.listen(config.get('PORT') || 3000);
}
bootstrap();