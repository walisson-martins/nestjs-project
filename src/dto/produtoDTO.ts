import { IsNotEmpty, IsNumber, IsString, Min } from "class-validator";

export class ProdutoDTO {

    @IsString()
    @IsNotEmpty({ message: "O nome não pode ser vazio" })
    nome: string;

    @IsNumber()
    @Min(0, { message: "Preço deve ser maior ou igual a zero" })
    preco: number;
}