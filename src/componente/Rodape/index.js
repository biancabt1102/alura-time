import './Rodape.css';

const Rodape = () => {
    return(
        <footer className="rodape">

            <section className='redes'>
                <a href='www.facebook.com.br'>
                    <img src="/imagens/fb.png" alt="Facebook" />
                </a>
                <a href='www.twitter.com.br'>
                    <img src="/imagens/tw.png" alt="Twitter" />
                </a>
                <a href='www.instagram.com.br'>
                    <img src="/imagens/ig.png" alt="Instagram" />
                </a>
            </section>

            <section className='logo'>
                <img src="/imagens/logo.png" alt="Logo" />
            </section>

            <section>
                <h5>Desenvolvido por Alura.</h5>
            </section>
        </footer>
    );
}

export default Rodape;