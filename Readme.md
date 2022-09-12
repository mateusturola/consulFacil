[![LOGO](img/logo.png)](https://consulfacilapp.herokuapp.com/)

[ConsulFácil - A Gestão do seu consultório na palma da sua mão](https://consulfacilapp.herokuapp.com/) 

[Documentação da API](https://documenter.getpostman.com/view/20064154/VVdjZ4WS)

# ConsulFácil - Backend

[![Heroku](https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white)](https://consulfacilapi.herokuapp.com/)

Aplicação para auxiliar no controle de faturas a receber de um consultório odontológico. 

Aqui você pode cadastrar novas cobranças, editar, apagar e marca-las como pagas.  Além disso, você pode filtrar pelo nome do paciente, e pela data de vencimento da Fatura (usando um intervalo de data, ou somente um dos campos).

---

![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white) ![Node](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white) ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white) ![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white) ![Postgresql](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)

## 🛠 Tecnologias

- [TypeScript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/pt-br/)
- [Prisma](https://www.prisma.io/docs/guides/database/seed-database)
- [Argon2](https://www.npmjs.com/package/argon2)
- [JSONWebToken](https://jwt.io/)
- [Joi](https://joi.dev/)
- [Celebrate](https://github.com/arb/celebrate)

## ****🖥 Como Usar****

### ****Pré-requisitos****

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas: [Git](https://git-scm.com/), [Node.js](https://nodejs.org/en/).

Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/). 
Para testar realizar as chamadas a API você pode usar o [Postman](https://www.postman.com/).

### 🔏 Variáveis de ambiente

```
PORT=3001"Numero da porta em que a aplicação irá rodar, caso não seja informado, a aplicação ira rodar na porta 3001"
DATABASE_URL="URL do Banco de Dados"[postgresql://USER:PASSWORD@HOST:PORT/DATABASE][https://www.prisma.io/docs/concepts/database-connectors/postgresql#base-url-and-path]
```

### ****📦**** Como Usar

```bash
# Clone este repositório
$ git clone git@github.com:mateusturola/consulFacil.git
$ cd consulFacil

# Entre na branch server
$ git checkout server 

# Instale as dependencias e inicie o Servidor
$ yarn install
$ yarn dev
# Ou
$ npm install
$ npm run dev

# ##PRISMA
# Para Criar as Migrations
$ prisma migrate dev

# Para popular o Banco de Dados
$ yarn run prisma db seed
$ npm run prisma db seed

# Caso Alguma alteração modifique o Prisma schema rodar: 
$ yarn run prisma generate
# Ou
$ npm run prisma generate
```

> Caso seja da sua preferencia, você também pode usar o Docker.
> 

## ****✅ Autor****

Feito com ❤️ por Mateus Turola 👋🏽 Entre em contato!

[![Linkedin Badge](https://img.shields.io/badge/-MateusTurola-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/mateus-turola/)](https://www.linkedin.com/in/mateus-turola/) 
[![Gmail Badge](https://img.shields.io/badge/-turolamateus@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:turolamateus@gmail.com)](mailto:turolamateus@gmail.com) [![Github Badge](https://img.shields.io/badge/-MateusTurola-blue?style=flat-square&logo=Github&logoColor=white&link=https://github.com/mateusturola/)](https://github.com/mateusturola/)
