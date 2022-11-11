# Ínicio
Para iniciar o projeto, rode os seguintes comandos:

```shell
npm run dev
# ou
next dev
```
Acesse [http://localhost:3000](http://localhost:3000) para visualizar a aplicação.

# Components 
Os componentes estão dentro de ./src/components, examplo abaixo de utilização:

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
