# API de Heróis 🦸‍♂️🦹‍♂️

## Descrição
Esta é uma API simples criada com **Node.js** e **Express** para cadastrar heróis e vilões, armazená-los em uma lista e simular batalhas entre eles.

## Tecnologias Utilizadas
- **Node.js**
- **Express**
- **Body-Parser**
- **Nodemon**

## Funcionalidades
✅ Cadastrar um herói (`POST /cadastrar-heroi`)
✅ Cadastrar um vilão (`POST /cadastrar-vilao`)
✅ Simular uma batalha (`POST /batalhar/:idHeroi/:idVilao`)

## Como Rodar o Projeto
1. Clone este repositório:
   ```sh
   git clone https://github.com/seuusuario/api-de-herois.git
   ```
2. Acesse a pasta do projeto:
   ```sh
   cd api-de-herois
   ```
3. Instale as dependências:
   ```sh
   npm install
   ```
4. Inicie o servidor:
   ```sh
   npm start
   ```

## Exemplos de Uso
### Cadastrar um herói
**Requisição:**
```json
{
  "id": 1,
  "nome": "Superman",
  "pontosDePoder": 100
}
```
**Resposta:**
```json
[
  {
    "id": 1,
    "nome": "Superman",
    "pontosDePoder": 100
  }
]
```

### Cadastrar um vilão
**Requisição:**
```json
{
  "id": 1,
  "nome": "Lex Luthor",
  "pontosDePoder": 80
}
```
**Resposta:**
```json
[
  {
    "id": 1,
    "nome": "Lex Luthor",
    "pontosDePoder": 80
  }
]
```

### Simular uma batalha
**Requisição:** `POST /batalhar/1/1`

**Resposta:**
```json
"Batalha: Superman venceu Lex Luthor"
```

## Autor
👤 **Felipe**
- **GitHub:** [github.com/seuusuario](https://github.com/felinharess)

Vamos construir algo incrível juntos! 🚀

