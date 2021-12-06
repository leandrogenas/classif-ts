import * as lib from '../src/index'
import {CategoriaFrase} from '../src/Modelo/categ.frase'
import * as csv from 'csv-parse';
import fs from 'fs'
import { TesteEstado } from '../src/index';

const bayes = new lib.AlgoritmoBayes();

const {
    POSITIVA,
    NEUTRA,
    NEGATIVA
} = CategoriaFrase;

// Frases para teste simples de classificação
const frasesTeste = [
    {valor: 'this is awful', esperado: NEGATIVA},
    {valor: 'this is nice', esperado: POSITIVA},
    {valor: 'i really think that we should stay here as its raining', esperado: NEGATIVA},
    {valor: 'you should do what you want', esperado: NEUTRA},
    {valor: 'do what you want, then.', esperado: NEGATIVA},
    {valor: 'i am tired', esperado: NEGATIVA},
    {valor: 'this is tiring', esperado: NEGATIVA},
    {valor: 'this is uplifting', esperado: POSITIVA},
    {valor: 'this is nice', esperado: POSITIVA},
] as TesteEstado[]

let i = 0;
csv
    .parse(fs.readFileSync('data/training.1600000.processed.noemoticon.csv'), (erro, regs) => {
        if(erro)
            throw 'deu ruim';
        
        process.stdout.clearLine(1);
        process.stdout.write('\n');
        for(let registro of regs){
            const [
                polaridade,
                id,
                data,
                query,
                arroba,
                tweet
            ]: [CategoriaFrase, number, Date, string, string, string] = registro;

            // Carregando o algoritmo com dados...
            bayes.aprender(tweet, polaridade);

            process.stdout.write(`lendo registro #${++i}\r`);

        }
        process.stdout.write('\n\n');
        
        console.log(bayes.analisar())
        for(let frase of frasesTeste){
            console.log(`frase: ${frase.valor}\n\tesperado: ${frase.esperado}\n\tobtido: ${bayes.classificar(frase.valor)}`)
        }
    })
