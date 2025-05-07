# Tech Challenge FIAP - Grupo 22: Fase 4

## Requisitos

- NodeJS v22.2.0;
- NPM 10.7.0.

## Antes de executar

```sh
npm install
```

## Execução

```sh
npm run dev
```

## Swagger

```sh
http://localhost:5000/api-docs/
```

## Bytebank API: Login


### Realizar login

<details>
 <summary><code>POST</code> <code><b>/api/users/login</b></code></summary>

##### Request Body Parameters

> | name      | required | data type | description
> |-----------|----------|-----------|-------------------------------------------------
> | email      | ✔        | `string`  | Email do usuário
> | password      | ✔        | `string`  | Senha do usuário

##### Responses

> | http code     | content-type                      | response description
> |---------------|-----------------------------------|---------------------------------------
> | `200`         | `application/json`                | JSON contendo o token

##### Example cURL

> ```javascript
> curl -X POST 'http://localhost:5000/api/users/login' \
>      -H 'Content-Type: application/json' \
>      --data '{
>           "email":"usuario@gmail.com",
>           "password":101, 
>        }'
> ```
</details>



## Bytebank API: Users


### Novo usuário

<details>
 <summary><code>POST</code> <code><b>/api/users</b></code></summary>

##### Request Body Parameters

> | name      | required | data type | description
> |-----------|----------|-----------|-------------------------------------------------
> | username      | ✔        | `string`  | Nome do usuário
> | email      | ✔        | `string`  | Email do usuário
> | password    | ✔        | `string`   | Senha do usuário

##### Responses

> | http code     | content-type                      | response description
> |---------------|-----------------------------------|---------------------------------------
> | `201`         | `application/json`                | 

##### Example cURL

> ```javascript
> curl -X POST 'http://localhost:5000/api/users' \
>      -H 'Content-Type: application/json' \
>      --data '{
>           "username":"Joana Silva",
>           "email":"email@gmail.com",
>           "password":"Pass@123",
>        }'
> ```
</details>

### Listar usuários

<details>
 <summary><code>GET</code> <code><b>/api/users</b></code></summary>

##### Parameters

> Nenhum

##### Responses

> | http code     | content-type                      | description
> |---------------|-----------------------------------|-------------------------------------
> | `200`         | `application/json`                | JSON contendo a lista de usuários

##### Example cURL

> ```javascript
> curl -X GET 'http://localhost:5000/api/users' -H 'Content-Type: application/json'
> ```
</details>

### Visualizar um usuário

<details>
 <summary><code>GET</code> <code><b>/api/users/{id}</b></code></summary>

##### Parameters

> | name      | required | data type | description
> |-----------|----------|-----------|-------------
> | id        | ✔        | `string`  | ID do usuário

##### Responses

> | http code     | content-type       | description
> |---------------|--------------------|-------------------------------------
> | `200`         | `application/json` | JSON contendo os detalhes do usuário
> | `404`         | `text/plain`       | `Transaction not found`

##### Example cURL

> ```javascript
> curl -X GET 'http://localhost:5000/api/users/1' -H 'Content-Type: application/json'
> ```
</details>

### Atualizar um usuário

<details>
 <summary><code>PUT</code> <code><b>/api/users/{id}</b></code></summary>

##### Request Body Parameters

> | name      | required | data type | description
> |-----------|----------|-----------|-------------------------------------------------
> | username      | ✔        | `string`  | Nome do usuário
> | email      | ✔        | `string`  | Email do usuário
> | password    | ✔        | `float`   | Password do usuário

##### Responses

> | http code     | content-type       | description
> |---------------|--------------------|-------------------------------------
> | `200`         | `application/json` | JSON contendo os detalhes atualizados do usuário
> | `404`         | `text/plain`       | `Transaction not found`

##### Example cURL

> ```javascript
> curl -X PUT 'http://localhost:5000/api/users/1' \
>      -H 'Content-Type: application/json' \
>      --data '{
>           "username":"Joana Silva",
>           "email":"emailalt@gmail.com",
>           "password":"Pass@123",
>        }'
> ```
</details>

### Apagar um usuário

<details>
 <summary><code>DELETE</code> <code><b>/api/users/{id}</b></code></summary>

##### Parameters

> | name      | required | data type | description
> |-----------|----------|-----------|-------------
> | id        | ✔        | `string`  | ID do usuário

##### Responses

> | http code     | content-type       | description
> |---------------|--------------------|------------------------------------------------
> | `200`         | `application/json` | Confirmação de que o usuário foi apagado
> | `404`         | `text/plain`       | `Transaction not found`

##### Example cURL

> ```javascript
> curl -X DELETE 'http://localhost:5000/api/users/1' -H 'Content-Type: application/json'
> ```
</details>



## Bytebank API: Transactions


### Nova transação

<details>
 <summary><code>POST</code> <code><b>/api/users/transactions</b></code></summary>

##### Request Body Parameters

> | name      | required | data type | description
> |-----------|----------|-----------|-------------------------------------------------
> | transactionType      | ✔        | `string`  | Tipo da transação (`credito`, `deposito`, `debito`, `pix`, `ted`, `tef`)
> | date      | ✔        | `string`  | Data da transação
> | amount    | ✔        | `float`   | Valor da transação
> | description    | ✔        | `string`   | Em que tela a transação foi feita
> | userId    | ✔        | `string`   | ID do usuário que realizou a transação

##### Responses

> | http code     | content-type                      | response description
> |---------------|-----------------------------------|---------------------------------------
> | `201`         | `application/json`                | JSON contendo o ID do registro criado

##### Example cURL

> ```javascript
> curl -X POST 'http://localhost:5000/api/users/transactions' \
>      -H 'Content-Type: application/json' \
>      --data '{
>           "id":"681aaf4bcdc375443cdffc4a",
>           "amount":101,
>           "transactionType":"deposito",
>           "description":"Transação Criada na Tela de Transações",
>           "date":"2025-05-07T00:54:25.754Z",
>           "userId":"681aa8c9cdc375443cdffc40"  
>        }'
> ```
</details>

### Listar transações

<details>
 <summary><code>GET</code> <code><b>/api/users/{userId}/transactions</b></code></summary>

##### Parameters

> | name      | required | data type | description
> |-----------|----------|-----------|-------------
> | userId        | ✔        | `string`  | ID do usuário logado

##### Responses

> | http code     | content-type                      | description
> |---------------|-----------------------------------|-------------------------------------
> | `200`         | `application/json`                | JSON contendo a lista de transações

##### Example cURL

> ```javascript
> curl -X GET 'http://localhost:5000/api/users/681aa8c9cdc375443cdffc40/transactions' -H 'Content-Type: application/json'
> ```
</details>

### Visualizar uma transação

<details>
 <summary><code>GET</code> <code><b>/api/users/transactions/{id}</b></code></summary>

##### Parameters

> | name      | required | data type | description
> |-----------|----------|-----------|-------------
> | id        | ✔        | `string`  | ID da transação

##### Responses

> | http code     | content-type       | description
> |---------------|--------------------|-------------------------------------
> | `200`         | `application/json` | JSON contendo os detalhes da transação
> | `404`         | `text/plain`       | `Transaction not found`

##### Example cURL

> ```javascript
> curl -X GET 'http://localhost:5000/api/users/transactions/1' -H 'Content-Type: application/json'
> ```
</details>

### Atualizar uma transação

<details>
 <summary><code>PUT</code> <code><b>/api/users/transactions/{id}</b></code></summary>

##### Request Body Parameters

> | name      | required | data type | description
> |-----------|----------|-----------|-------------------------------------------------
> | transactionType      | ✔        | `string`  | Tipo da transação (`credito`, `deposito`, `debito`, `pix`, `ted`, `tef`)
> | date      | ✔        | `string`  | Data da transação
> | amount    | ✔        | `float`   | Valor da transação
> | description    | ✔        | `string`   | Em que tela a transação foi feita
> | userId    | ✔        | `string`   | ID do usuário que realizou a transação

##### Responses

> | http code     | content-type       | description
> |---------------|--------------------|-------------------------------------
> | `200`         | `application/json` | JSON contendo os detalhes atualizados da transação
> | `404`         | `text/plain`       | `Transaction not found`

##### Example cURL

> ```javascript
> curl -X PUT 'http://localhost:5000/api/users/transactions/681aaf4bcdc375443cdffc4a' \
>      -H 'Content-Type: application/json' \
>      --data '{
>           "id":"681aaf4bcdc375443cdffc4a",
>           "amount":101,
>           "transactionType":"deposito",
>           "description":"Transação Editada na Tela de Transações",
>           "date":"2025-05-07T00:54:25.754Z",
>           "userId":"681aa8c9cdc375443cdffc40"    
>        }'
> ```
</details>

### Apagar uma transação

<details>
 <summary><code>DELETE</code> <code><b>/api/users/transactions/{id}</b></code></summary>

##### Parameters

> | name      | required | data type | description
> |-----------|----------|-----------|-------------
> | id        | ✔        | `string`  | ID da transação

##### Responses

> | http code     | content-type       | description
> |---------------|--------------------|------------------------------------------------
> | `200`         | `application/json` | JSON contendo os detalhes da transação apagada
> | `404`         | `text/plain`       | `Transaction not found`

##### Example cURL

> ```javascript
> curl -X DELETE 'http://localhost:5000/api/users/transactions/1' -H 'Content-Type: application/json'
> ```
</details>

## Contributors

[Cibele Santos](https://github.com/cibsantos)                                             | [Flávia Jaconis](https://github.com/flaJaconis)                                             |[Malu Pereira](https://github.com/malulupereiraa)                                                    | [Thiago Martins](https://github.com/thiagofm33)                                             | [Victor Dantas](https://github.com/victorx9999)
------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------
[<img src="https://github.com/cibsantos.png" width="90" />](https://github.com/cibsantos) | [<img src="https://github.com/flaJaconis.png" width="90" />](https://github.com/flaJaconis) | [<img src="https://github.com/malulupereiraa.png" width="90" />](https://github.com/malulupereiraa) | [<img src="https://github.com/thiagofm33.png" width="90" />](https://github.com/thiagofm33) | [<img src="https://github.com/victorx9999.png" width="90" />](https://github.com/victorx9999)
RM359376                                                                                  | RM358799                                                                                    | RM358717                                                                                            | RM359578                                                                                    | RM359148
