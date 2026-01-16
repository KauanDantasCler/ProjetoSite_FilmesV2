import { Link } from 'react-router-dom';
import imagemHeader from './imagens/imagemHeader.svg';
import './styles/Footer.css';
import './styles/PoliticaPrivacidade.css';

function PoliticaPrivacidade() {
    return (
        <>
            <header className=' header container largo inline'>
                <div className=' imgContainer container center'>
                    <img
                        className='headerImg'
                        src={imagemHeader}
                        alt="Logo MasterFilms"
                    />
                </div>
                <p className='tituloHeader'>MasterFilms</p>
                <Link to="/" className='ButtonHeader'>← Voltar</Link>
            </header>

            <div className="page">
                <h1>Política de Privacidade</h1>
                <p>
                    Este site é um projeto próprio e não coleta, armazena ou processa
                    dados pessoais dos usuários.
                </p>
                <p>
                    O contato ocorre de forma voluntária por e-mail ou telefone.
                </p>
                <p>
                    <strong>Responsável:</strong> Master Films <br />
                    <strong>E-mail:</strong> contaiptv789@gmail.com
                </p>
            </div>

            <footer className='footer container full center'>
                <p>&copy; 2026 MasterFilms. Todos os direitos reservados.</p>
                <Link to="/" className='privacy-link'>Voltar para Início</Link>
            </footer>
        </>
    );
}

export default PoliticaPrivacidade;