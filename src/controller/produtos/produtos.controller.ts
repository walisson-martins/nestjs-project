import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { ProdutoDTO } from 'src/dto/produtoDTO';
import { ProdutosService } from '../../services/produtos/produtos.service';

@Controller('produtos')
export class ProdutosController {

    constructor(private readonly produtosService: ProdutosService) { }

    @Get()
    getTodos() {
        return this.produtosService.findAll();
    }

    @Post()
    create(@Body() body: ProdutoDTO) {
        return this.produtosService.create(body);
    }

    @Put(":id")
    update(@Param("id", ParseIntPipe) id: number,
        @Body() data: ProdutoDTO) {
        return this.produtosService.update(id, data);
    }

    @Delete(":id")
    delete(@Param("id", ParseIntPipe) id: number) {
        return this.produtosService.delete(id);
    }
}
