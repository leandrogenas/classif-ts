import { CategoriaFrase } from './Modelo/categ.frase'

export type TesteEstado = {
    valor: string
    esperado: CategoriaFrase
    obtido?: CategoriaFrase
}

export * from './Simbolizador'
export * from './Classificador'