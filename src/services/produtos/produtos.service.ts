import { Injectable } from '@nestjs/common';

@Injectable()
export class ProdutosService {
    private produtos = [];

    public findAll() {
        return this.produtos;
    }

}
