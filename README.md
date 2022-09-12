# Drivenpass
 Este é um projeto com TypeScript que oferece uma API de gerenciador de senhas. Para acessar a API use esse [link](https://secret-pass.herokuapp.com).

___
## Rotas
### Usuários
Nessa rota, usuários novos poderam criar seu cadastro e caso possua uma conta poderá acessá-la

**Obs :**  Emails já cadastrados não serão aceitos. Após o usuário efetuar o login receberá um token, e para as demais requisições será necessário informar o token.

**Criar cadastro ( /signup ) [POST]**
* Body
``` json
{

"email": "pedro@cabral.com",
"password":"cabral689754"

}
```

**Fazer login ( /signin ) [POST]**
* Body
``` json
{

"email": "pedro@cabral.com",
"password":"cabral689754"

}
```
### Credenciais
Credenciais se referem a informações de login para um site e/ou serviço.

**Criar credencial ( /credential ) [POST]**

* Headers

``` x-api-key :[access_token] ``` 
* Body

```json
{

"url":"https://www.orkut.com",
"username": "cabral_96",
"password":"senhasecreta",
"title": "orkut"

}
```
**Buscar todas as credencial ( /credential ) [GET]**


* Headers

``` x-api-key :[access_token] ``` 

**Buscar credencial por id ( /credential/:id ) [GET]**

**Obs :** Será recebido por parâmetro o id da credencial a ser buscada. 

* Headers

``` x-api-key :[access_token] ``` 

**Deletar uma credencial ( /credential/:id ) [DELETE]**

**Obs :** Será recebido pelo parâmetro o id da credencial que será deletada, não será possível deletar credenciais que não existir ou não pertecer ao usuário.

* Headers

``` x-api-key :[access_token] ``` 

### Notas seguras
Notas seguras são informações livres em formato de texto.

**Criar nota segura ( /secureNotes ) [POST]**

* Headers

``` x-api-key :[access_token] ``` 
* Body

```json
{

"title": "google",
"note": "a senha de verificação é 4987"

}
```
**Buscar todas as notas seguras ( /secureNotes ) [GET]**


* Headers

``` x-api-key :[access_token] ``` 

**Buscar nota segura por id ( /secureNotes/:id ) [GET]**

**Obs :** Será recebido por parâmetro o id da nota segura a ser buscada. 

* Headers

``` x-api-key :[access_token] ``` 

**Deletar uma nota segura ( /secureNotes/:id ) [DELETE]**

**Obs :** Será recebido pelo parâmetro o id da nota segura que será deletada, não será possível deletar notas seguras que não existir ou não pertecer ao usuário.

* Headers

``` x-api-key :[access_token] ``` 

### Cartões
Cartões representam cartões de crédito e/ou débito.

**Adicionar um cartão ( /card ) [POST]**

* Headers

``` x-api-key :[access_token] ``` 
* Body

```json
{

"userId": 1,       
  "title": "auxílio",
  "number": "098765378322",
  "cardHolderName": "Pedro Cabral O Alves",
  "cvc": "123",
  "expirationDate": "10/24",
  "password": "123456",
  "isVirtual": false,
  "type": "débito"

}
```
**Buscar todos os cartões( /card ) [GET]**


* Headers

``` x-api-key :[access_token] ``` 

**Buscar cartão por id ( /card/:id ) [GET]**

**Obs :** Será recebido por parâmetro o id do cartão a ser buscado. 

* Headers

``` x-api-key :[access_token] ``` 

**Deletar um cartão ( /card/:id ) [DELETE]**

**Obs :** Será recebido pelo parâmetro o id do cartão que será deletado, não será possível deletar cartões que não existir ou não pertecer ao usuário.

* Headers

``` x-api-key :[access_token] ``` 
### Wi-fis
Wi-fi’s representam os dados de acesso a uma rede de internet.

**Adiconar uma rede( /wifi ) [POST]**

* Headers

``` x-api-key :[access_token] ``` 
* Body

```json
{

 "userId":1,
  "network": "VIVO-123",
  "password": "senhadowifi",
  "title": "wifi do vizinho"

}
```
**Buscar todos os wi-fis( /wifi ) [GET]**


* Headers

``` x-api-key :[access_token] ``` 

**Buscar wifi por id ( /wifi/:id ) [GET]**

**Obs :** Será recebido por parâmetro o id do wifi a ser buscado. 

* Headers

``` x-api-key :[access_token] ``` 

**Deletar wifi ( /wifi/:id ) [DELETE]**

**Obs :** Será recebido pelo parâmetro o id do wifi que será deletado, não será possível deletar wi-fis que não existir ou não pertecer ao usuário.

* Headers

``` x-api-key :[access_token] ``` 












