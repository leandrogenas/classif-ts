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
## adaptando pro trampo de ia:

> será que o processamento de dados acaba gerando uma
> tendência de confirmação, aonde o pensamento
> indutivo é utilizado como o método para a detecção de
> padrões em massas de dados? Em específico, acredito que 
> deva atingir a parte de idealização (definição) 
> e subsequente treinamento do modelo criado, aonde são dadas 
> escolhas pré-selecionadas e muitas vezes de cunho binário.
> Se verdade, significa que conclusões arbitrárias podem ser
> tiradas de uma massa de dados, dada uma densidade suficientemente
> grande de informações que permitam explicar uma conclusão através
> de distorções coerentes definidas com o modelo.
> e.g:

https://www.kaggle.com/columbine/imdb-dataset-sentiment-analysis-in-csv-format
https://www.kaggle.com/saurabhshahane/twitter-sentiment-dataset
https://www.kaggle.com/marklvl/sentiment-labelled-sentences-data-set
https://www.kaggle.com/arkhoshghalb/twitter-sentiment-analysis-hatred-speech
https://github.com/viritaromero/Detecting-Depression-in-Tweets

---
inspirado no projeto [ttezel/bayes](https://github.com/ttezel/bayes)