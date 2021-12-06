export interface Classificador {
    aprender(texto, categoria): Classificador
    classificar(texto): Classificador
}

export {default as AlgoritmoBayes} from './algo.bayes'