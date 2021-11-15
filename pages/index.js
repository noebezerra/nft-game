import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Em breve</title>
        <meta name="description" content="Projeto de game NFT" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700;900&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="style.css" />
      </Head>

      <div className={styles.menu}>
        <nav className="container">
          <div>
            <img id="logo" src="./img/logo.png" alt="Logo" />
          </div>
          <ul className="menu">
            <li>
              <a className="active" href="#home">
                Home
              </a>
            </li>
            <li>
              <a href="#sobre">About</a>
            </li>
            <li>
              <a href="#moeda">$Moeda</a>
            </li>
            <li>
              <a href="#noticias">News</a>
            </li>
            <li>
              <a href="">Marketplace</a>
            </li>
            <li id="btn-play">
              <a href="#game">Play Now</a>
            </li>
          </ul>
        </nav>
      </div>

      <div id="home" className={`container ${styles.apresentacao}`}>
        <div>
          <h1>MOSTRE SUA HABILIDADE</h1>
          <h3>
            Dispute contra pessoas do mundo inteiro neste jogo em blockchain
          </h3>
        </div>
        <div className={styles.jogador}>
          <img src="./img/jogador.png" alt="Jogador" />
        </div>
      </div>

      <div id="sobre" className={`container ${styles.sobre}`}>
        <h1 className="menutitulo">SOBRE</h1>
        <div className={styles.sobredetalhes}>
          <div className={styles.sobreimg}>
            <img src="./img/sobre.png" alt="soobre" />
          </div>
          <div className={styles.sobreinfo}>
            <h2>UM NOVO CONCEITO DE JOGO</h2>
            <h3>
              Monster Soccer é um game desenvolvido para você se divertir
              enquanto ganha, cada jogador é único e com diferentes habilidades
            </h3>
          </div>
        </div>
      </div>

      <div id="moeda" className={`container ${styles.moeda}`}>
        <h1 className="menutitulo">$MOEDA</h1>
        <div className={styles.moedadetalhes}>
          <div className={styles.moedainfo}>
            <h2>UM NOVO CONCEITO DE JOGO</h2>
            <h3>
              Adquira tokens $FUTC (Footbal Club) na{" "}
              <a
                className="link"
                href="https://pancakeswap.finance/"
                target="_blank"
              >
                PancakeSwap
              </a>{" "}
              e monte seu time.
            </h3>
            <h3>Torne-se o mais forte e domine os estádios.</h3>
          </div>
          <div className={styles.moedaimg}>
            <img src="./img/moeda.png" alt="sobre" />
          </div>
        </div>
        <div className={styles.linkplay}>
          <a className={styles.btnoutlineplay} href="#game">
            PLAY NOW
          </a>
        </div>
      </div>

      <div id="noticias" className={`container ${styles.noticias}`}>
        <h1 className="menutitulo">$NEWS</h1>
        <div className={styles.cards}>
          <div className={styles.noticiacard}>
            <p className={styles.noticiatitulo}>LANÇAMENTO</p>
            <div className={styles.noticiabody}>
              <p>
                OPA! Esta é uma frase sobre a novidade de um novo jogo em
                desenvolvimento.
              </p>
              <a className={styles.noticialink} href="">
                Continuar lendo
              </a>
            </div>
          </div>
          <div className={styles.noticiacard}>
            <p className={styles.noticiatitulo}>LANÇAMENTO</p>
            <div className={styles.noticiabody}>
              <p>
                OPA! Esta é uma frase sobre a novidade de um novo jogo em
                desenvolvimento.
              </p>
              <a className={styles.noticialink} href="">
                Continuar lendo
              </a>
            </div>
          </div>
        </div>
        <div className={styles.noticiavermais}>
          <a href="">VER MAIS</a>
        </div>
      </div>
      <div id="game" className={styles.game}>
        <h1 className="menu-titulo">$GAME</h1>
      </div>

      <footer className={styles.footer}>
        <div className={styles.redessociais}>
          <img src="./img/discord.svg" alt="Discord" />
          <img src="./img/facebook.svg" alt="facebook" />
          <img src="./img/twitter.svg" alt="twitter" />
          <img src="./img/instagram.svg" alt="instagram" />
        </div>
        <img src="./img/logo.png" alt="Logo" />
        <p className="copy">Nome do Jogo (c) 2021</p>
      </footer>

      <script src="./js/main.js"></script>
    </div>
  );
}
