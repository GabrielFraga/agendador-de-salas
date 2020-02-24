# Agendador de Salas 

Desafio para resolução utilizando php e javascript. O sistema deve ser um agendador de salas de reunião. Este deve possuir colaboradores, salas e agendamentos.


### Pré requisitos

Antes de iniciar a API, pode ser necessário previamente:

* Instalar o composer php | https://getcomposer.org/download/
* Ter um banco de dados local ativo mysql, postgress, etc..
* Criar um banco para o projeto

## Iniciar a API

Após baixar o projeto, basta abrir o mesmo através do terminal.

Na pasta do projeto será preciso: 

* Definir as variáveis de ambiente: utilize o arquivo `.env.example`. Basta cloná-lo renomeando a cópia como `.env`. Nos campos relacionados à conexão com o banco, utilize as informações de acesso do banco utilizado.

Ex:

```
DB_CONNECTION=mysql

DB_HOST=127.0.0.1

DB_PORT=3306

DB_DATABASE=agendador

DB_USERNAME=agendador

DB_PASSWORD=secret
```

Na pasta do projeto execute os comandos abaixo no terminal.

* Instalar as dependências 

`php composer.phar install`

* Executar migrations:

`php artisan migrate`

* Executar seeders:

`php artisan db:seed --class=RoomTableSeeder`

`php artisan db:seed --class=CollaboratorTableSeeder`

A API deve estar em execução na porta 8000. 




## Iniciar o site

Para acessar o módulo web deste sistema, basta acessar a pasta 'frontend', instalar as dependências e executar o projeto.

No terminal execute:

```
yarn

ou

npm install 
```

Após instalação das dependências, inicie o projeto executanto:

```
yarn start

ou

npm start
```
