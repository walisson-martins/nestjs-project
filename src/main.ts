import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Ativa o class-validator em todas as rotas com @Body(), @Query(), etc
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,       // Remove propriedades que não estão no DTO
    forbidNonWhitelisted: true, // Erro se mandar propriedades a mais
    transform: true,       // Converte tipos automaticamente
  }));

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
