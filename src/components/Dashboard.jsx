import Head from 'next/head'
import Header from './Header/Header'

const Dashboard = ({children}) => {
    return (
        <main className="main">
            <Head>
                <title>Serasa Desafio Técnico - Ìcaro Melo</title>
                <meta name="description" content="Formulário simples, teste técnico React/NextJS" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />
            { children } 
        </main> 
    )
}

export default Dashboard;