import { Injectable, NotFoundException } from "@nestjs/common";

import { Produto } from "src/model/produto";
import { ProdutoDTO } from "../dto/produtoDTO";

@Injectable()
export class ProdutosService {
  private produtos: Produto[] = [];
  private idCounter = 1;

  public findAll() {
    return this.produtos;
  }

  public create(produtoDTO: ProdutoDTO) {
    const novoProduto: Produto = {
      id: this.idCounter++,
      ...produtoDTO,
    };

    this.produtos.push(novoProduto);

    return novoProduto;
  }

  public update(id: number, data: ProdutoDTO) {
    const index = this.produtos.findIndex((p) => p.id === id);
    if (index === -1) {
      throw new NotFoundException(`Produto com id: ${id} não encontrado!`);
    }

    this.produtos[index] = { ...this.produtos[index], ...data };
    return this.produtos[index];
  }

  public delete(id: number) {
    const index = this.produtos.findIndex((p) => p.id === id);
    if (index === -1) {
      throw new NotFoundException(`Produto com id: ${id} não encontrado`);
    }

    const deleted = this.produtos.splice(index, 1);
    return deleted[0];
  }
}
