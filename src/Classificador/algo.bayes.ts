import { SimbBayesPadrao } from "../Simbolizador";
import Algoritmo from "./algoritmo";

export type VocabularioAlgoritmo = {
    [simbolo: string]: number
}

/**
 * Implementação básica do algoritmo classificador Naive-Bayes,
 * onde independe-se as premissas de cada atributo.
 */
export default class NaiveBayes extends Algoritmo {

    /**
     * Simbolizador (tokenizador) da aplicação, que é responsável
     * por 'quebrar' uma sentença (conjunto misto) em identificadores
     * únicos (tokens). Efetivamente separa uma frase em uma lista de palavras.
     */
    protected Simbolizador = SimbBayesPadrao;

    /**
     * Análise do modelo de dados
     * @returns {object} Top 100 palavras do conjunto de dados e as métricas
     * das classes identificadas
     */
    analisar()
    {
        return {
            top100: Object
                .entries(this.vocabulario)
                .sort((a, b) => (
                    a[1] == b[1])? 0
                        : a[1] > b[1]? -1: 1
                ).slice(0, 100),
            classes: this.classes
        }
        
    }

    aprender(texto, categoria)
    {
        this.novaEntrada(texto);
        this.prepararCategoria(categoria);
        
        let simbolos = this.Simbolizador(texto);
        let tabelaFreq = this.gerarTabelaFrequencia(simbolos);

        // Agregando os símbolos identificados
        for(const simb in tabelaFreq) {
            const freq = tabelaFreq[simb];
            this.vocabulario[simb] = this.vocabulario[simb]?
                this.vocabulario[simb] + freq: freq
            
            // Incrementa a contagem da frequência de cada símbolo
            const {simbolos} = this.classes[categoria];                
            if(!simbolos[simb])
                simbolos[simb] = freq;
            else
                simbolos[simb] += freq;
            
            // Incrementa a quantidade de palavras 
            //  da categoria identificada
            this.classes[categoria].qtdPalavras++;
        }
        
        return this;

    }

    classificar(texto)
    {
        const 
            simbolos = this.Simbolizador(texto),
            tabelaFreq = this.gerarTabelaFrequencia(simbolos);
        let 
            categEscolhida = null,
            probMax = -Infinity;

        // Cálculo da probabilidade Bayseana, sendo preciso
        //  iterar sobre todos os símbolos envolvidos na entrada
        (Object
            .keys(this.classes)
            .forEach(categ => {
                const {
                    frequencia,
                    simbolos,
                    qtdPalavras
                } = this.classes[categ];
                
                var prob = (frequencia[categ] || 0) / 
                        this.qtdEntradas;

                for(let simb in tabelaFreq){
                    prob += tabelaFreq[simb] * Math.log(
                        ((simbolos[simb] || 0) + 1) / (
                            qtdPalavras + Object.keys(
                                this.vocabulario
                            ).length
                        )
                    );
                }
                                   
                if(prob > probMax){
                    probMax = prob;
                    categEscolhida = categ;
                }
            })
        )
        
        // console.log(this);
        return categEscolhida;
    }

    private gerarTabelaFrequencia(simbolos)
    {
        let tab = Object.create(null);
        simbolos.forEach(simb => {
            if(!tab[simb])
                tab[simb] = 1
            else
                tab[simb]++;
        })
        return tab;
    }

    private prepararCategoria(categ) 
    {
        if(!this.classes[categ]){
            this.classes[categ] = {
                frequencia: 0,
                qtdPalavras: 0,
                simbolos: {},
            }
        }
        this.classes[categ].frequencia++;
    }


}