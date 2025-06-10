import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProdutosModule } from './modules/produtos.module';

@Module({
  imports: [ProdutosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
