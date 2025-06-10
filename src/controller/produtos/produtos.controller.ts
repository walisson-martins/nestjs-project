import { Controller, Get } from '@nestjs/common';
import { ProdutosService } from '../../services/produtos/produtos.service';

@Controller('produtos')
export class ProdutosController {

    constructor(private readonly produtosService: ProdutosService) { }

    @Get()
    getTodos() {
        this.produtosService.findAll();
    }
}
