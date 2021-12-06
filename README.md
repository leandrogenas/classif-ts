# classif-ts
### Implementação de algoritmos de classificação em Typescript

---
A ideia baseou-se em entender como funciona a implementação do algoritmo Naive Bayes, de maneira programática. Uma premissa foi a criação de uma estrutura de arquivos que facilitasse a implementação de outros algoritmos de classificação, ou até mesmo de outros tipos.

Também foi elaborado de uma forma que flexibilizasse a entrada de dados, fornecendo uma interface em comum para todos os algoritmos de classificação, com os métodos `aprender` e `classificar`.

Este projeto está estruturado de uma maneira que facilitasse a visualização do processo de treinamento e do posterior modelo treinado, com métricas básicas para ser utilizada em análises que podem auxiliar a tomada de decisão, vindo junto com um modelo de dados para treinamento, mas funciona com qualquer conjunto de dados, para classificações arbitrárias.

Devido ao tempo limitado, só foi possível a implementação desse algoritmo, pois foi o escolhido no tema de nosso grupo.


```
estrutura:
----------
 # Raiz do projeto
 ./package.json       | Configuração do Node
 ./tsconfig.json      | Configuração do TS

 # Base de dados
 ./data/training.1600000.processed.noemoticon.csv
 ./data/sentiment_tweets3.csv
 ./data/testdata.manual.2009.06.14.csv

 # Scripts de teste
 ./scripts/teste.ts   | Script de teste

 # Código fonte 
 ./src/Classificador  | Algoritmos classificadores
 ./src/Modelo         | Modelos dos atributos
 ./src/Simbolizador   | Tokenizers

scripts:
--------
yarn install -> instalar o projeto (node_modules)
yarn teste   -> rodar o script de testes
```

---
inspirado no projeto [ttezel/bayes](https://github.com/ttezel/bayes)