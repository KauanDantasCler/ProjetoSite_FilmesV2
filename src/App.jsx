import { useState } from 'react'
import imagemHeader from './imagens/imagemHeader.svg'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header className=' header container largo inline'>
        <div className=' imgContainer container center'>
          <img className='headerImg' src={imagemHeader} alt="imagem" />
          
        </div>
        <p className='tituloHeader'>MasterFilms</p>
        <a href='https://wa.me/558387606571' className='ButtonHeader'>Assine</a>
      </header>

      <main className='main container largo center'>
        
        <h1 className='tituloMain center'>
          Seu Universo de Filmes e Séries Começa Aqui
        </h1>
        <p className='descriçãoMain center'>Descubra um mundo de entretenimento sem limites com os lançamentos mais recentes e clássicos atemporais, tudo em 4K UHD. Assine agora e mergulhe em histórias incríveis.</p>
        <a href='https://wa.me/558387606571' className='buttonMain center'>Assinar Agora</a>
      </main>

      <section className='section container full'>
        <div className='titulo-planos container medio largo'>
          <h2 className='planos-titulo center'>Escolha o Plano Perfeito Para Você</h2>
          <p className='planos-descrição center'>Desfrute de acesso ilimitado a um vasto catálogo de filmes e séries, com opções que se encaixam no seu orçamento e estilo de vida.</p>
        </div>
        <div className=' planos container grande largo inline center'>
          <div className='plano1 container grande alto'>
            <h1 className='planotitulo center'> Plano Básico</h1>
            <p className='preço1 center'>R$25,00/mês</p>
            <p>
              
              🟢Catálogo em 4K UHD.<br />
              <br />
              🟢 1 Tela simultânea<br />
              <br />
              🟢Catálogo ilimitado
            </p>
            <a href='https://wa.me/558387606571' className='button-plano center'>
              Assinar
            </a>
          </div>
          <div className='plano2 container grande alto'>
            <h3 className='planotitulo2 center'>Plano Avançado</h3>
            <p className='preço2 center'>R$45,00/mês</p>
            <p>
              
              🟢Catálogo em 4K UHD.<br />
              <br />
              🟢2 Telas simultâneas<br />
              <br />
              🟢Catálogo ilimitado
            </p>
            <a href='https://wa.me/558387606571' className='button-plano center'>Assinar</a>
          </div>
        </div>
      </section>

      <div className='teste container full center'>
        <div className='testeTxt container grande'>
          <h2 className='testeTitulo center'>Comece Seu Teste Grátis Hoje!</h2>
          <p className='testeDescrição center'>Experimente filmes e séries ilimitados por 2 Horas sem custo. Cancele a qualquer momento, sem compromisso.</p>
          <a href='https://wa.me/558387606571' className='buttonTeste center'>Começar Teste Grátis</a>
        </div>
      </div>
    </>
  )
}

export default App
