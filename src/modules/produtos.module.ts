import { Module } from "@nestjs/common";
import { ProdutosController } from "src/controller/produtos.controller";
import { ProdutosService } from "src/services/produtos.service";
@Module({
  controllers: [ProdutosController],
  providers: [ProdutosService],
  exports: [ProdutosService],
})
export class ProdutosModule {}
