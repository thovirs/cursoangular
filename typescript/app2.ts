class Carro {
    private modelo: string
    private numeroDePortas: number
    private velocidade: number = 0

    constructor ( modelo: string, numeroDePortas: number ){
        this.modelo = modelo
        this.numeroDePortas = numeroDePortas


    }

    public acelerar(): void {
        this.velocidade = this.velocidade+10
    }

    public parar (): void {
        this.velocidade = 0
    }

    public velocidadeAtual(): number {
        return this.velocidade

    }

}


class Concessionaria {
    private endereco: string
    private listaDeCarros: Array<Carro>  

    constructor (endereco: string, listadeCarros: Array<Carro>){
        this.endereco = endereco
        this.listaDeCarros = listadeCarros

    }

    public fornecerEndereco(): string {
        return this.endereco
    }

    public mostrarListaDeCarros(): Array<Carro>  {
        return this.listaDeCarros
    }
}

class Pessoa {
    private nome: string
    private carroPreferido: string
    private carro: any
        
    constructor (nome: string, carroPreferido: string){
        this.nome = nome
        this.carroPreferido = carroPreferido
    }

    public dizerNome (): string{
        return this.nome

    }

    public dizerCarroPreferido(): string{
        return this.carroPreferido
    }

    public comprarCarro (carro: any){

    }

    public dizerCarroQueTem(): any {
    return  this.carro
    }
}


let pessoa = new Pessoa ('Thomas', 'Volvo VX40')

let carroA = new Carro ("Dodge Journey", 4)
let carroB = new Carro ("Volvo XC 40", 4)
let carroC = new Carro ("Cerato", 4)

/** montar a lista de carros da concessionaria  */
let listaDeCarros: Carro [] =  [carroA, carroB, carroC]


let concessionaria = new Concessionaria('Av. Ceara', listaDeCarros)

/** exibir a lista de carros  */

console.log(concessionaria.mostrarListaDeCarros())