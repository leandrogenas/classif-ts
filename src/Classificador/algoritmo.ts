import { Classificador } from ".";
import { VocabularioAlgoritmo } from "./algo.bayes";

export default abstract class Algoritmo implements Classificador {

    protected abstract Simbolizador;
    protected qtdEntradas: number = 0;
    protected vocabulario: VocabularioAlgoritmo = {}
    protected processado = false;
    protected classes = {}

    /**
     * Implementação específica do algoritmo para agregar um novo valor
     * (informação) ao modelo de dados
     * @param {string} valor valor de dado informado para aprender
     * @param {any} classe categoria à qual pertence o valor
     */
    abstract aprender(valor: string, classe: any): Classificador

    /**
     * Implementação específica do algoritmo para a classificação
     * @param {string} texto porção de texto para classificar contra o modelo
     */
    abstract classificar(texto: any): any    

    /**
     * Registro de uma nova entrada de dado, incrementando o contador
     * e armazenando o valor
     * @param {any} valor a entrada
     */
    protected novaEntrada(valor: any): void
    {
        if(this.qtdEntradas === 0 && valor)
            this.processado = true;

        this.qtdEntradas++;
    }

}