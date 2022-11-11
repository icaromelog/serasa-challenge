# Ínicio
Para iniciar o projeto, rode os seguintes comandos:

Primeiro instale as dependencias:
```shell
npm install
# ou
yarn install
```

Inicie o servidor de desenvolvimento
```shell
npm run dev
# ou
next dev
```
Acesse [http://localhost:3000](http://localhost:3000) para visualizar a aplicação.

# Componentes
Os componentes estão dentro de ./src/components, exemplo de utilização:

```js
import Card from './components/Card/Card'

export default function Home() {
  return (
    <div>
      <Card size="large" align="center"></Card>
    </div>
  )
}
```
