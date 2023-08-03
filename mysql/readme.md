# Cadastro de pessoas em um banco de dados .json.
## O sistema deve listar usuarios, cadastrar, editar e remover.
#
#
# Instruções
## Criar pasta do projeto
```
mkdir crudApiJson
```
## Acessar a pasta
```
cd crudApiJson
```
## Inciar gerenciador de pacotes
```
npm init -y
```
## Instalar pacotes básicos para rodar o servidor
```
npm i typescript express nodemon ts-node
```
## Iniciar configuração do typescript
```
npx tsc --init
```
## Criar pasta src
```
mkdir src
```
## Criar arquivo server.ts dentro da pasta src
```
touch src/server.ts
```
## Criar arquivo de banco de dados
```
touch database.json
```
## Criar um objeto vazio no arquivo database.json
```
{}
```
## Adicionar no "scripts" do package.json
```
"start": "nodemon --exec ts-node src/server.ts"
```
## Rodar o programa
```
npm run start
```
# Instalar todas as dependencias do package.json
```
npm install
```