
Desafio para resolução utilizando php e javascript. O sistema deve ser um agendador de salas de reunião. Este deve possuir colaboradores, salas e agendamentos.


### Pré requisitos

Antes de iniciar a API, pode ser necessário previamente:

* Instalar o composer php | https://getcomposer.org/download/
* Ter um banco de dados local ativo mysql, postgress, etc..
* Criar um banco para o projeto

### Iniciar a API

Após baixar o projeto, basta abrir o mesmo através do terminal.

Na pasta do projeto será preciso: 

* Instalar as dependências 

`php composer.phar install`

* Executar migrations:

`php artisan migrate`

* Executar seeders:

`php artisan db:seed --class=RoomTableSeeder`

`php artisan db:seed --class=CollaboratorTableSeeder`

A API deve estar em execução na porta 8000. 

