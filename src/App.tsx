import CardContainer from "./components/CardContainer";
const ctaStyles = `
    .preorder-cta {
        margin-top: 60px;
        padding: 40px 30px;
        background-color: rgba(0, 0, 50, 0.6); /* Azul escuro transparente */
        border: 1px solid var(--highlight-color); /* Borda neon verde */
        border-radius: 10px;
        text-align: center;
        max-width: 800px;
        width: 90%;
        box-shadow: 0 0 20px rgba(160, 255, 0, 0.4); /* Brilho neon sutil */
    }

    .cta-text {
        font-family: 'Montserrat', sans-serif;
        color: var(--text-light);
        font-size: 1.3em;
        margin-bottom: 30px;
        line-height: 1.5;
    }

    .cta-button {
        display: inline-block;
        background: var(--highlight-color); /* Fundo verde limão */
        color: var(--dark-bg); /* Texto escuro */
        padding: 15px 35px;
        text-decoration: none;
        border-radius: 5px;
        font-weight: 700;
        letter-spacing: 1.5px;
        transition: background-color 0.3s, transform 0.3s;
        border: none;
        cursor: pointer;
        font-size: 1.1em;
        text-transform: uppercase;
        box-shadow: 0 0 10px var(--highlight-color);
    }

    .cta-button:hover {
        background-color: #CCFF66; /* Verde mais claro */
        transform: scale(1.05) translateY(-2px);
        box-shadow: 0 0 15px #CCFF66;
    }
`;

function injectCtaStyles() {
  if (!document.getElementById("cta-styles")) {
    const styleElement = document.createElement("style");
    styleElement.id = "cta-styles";
    styleElement.textContent = ctaStyles;
    document.head.appendChild(styleElement);
  }
}

function App() {
  // Injeta os estilos da CTA
  injectCtaStyles();

  // URL do seu formulário ou página de pré-venda
  const preorderUrl =
    "https://docs.google.com/forms/d/e/1FAIpQLScwxjLpybOa7N-se1TNyNosE83eXL2hD9YEhoPxoGSZeK0JQg/viewform?usp=publish-editor"; // <<-- SUBSTITUA ESTE LINK!

  return (
    <>
      <h1>🌌👽 SUA JORNADA COMEÇA AQUI 👽🌌</h1>

      <h3>🚫 COLEÇÃO NO LOGO 🚫</h3>
      <div className="preorder-cta">
        <div>
          <p>
            Senhoras e senhores, apresentamos a vocês a nossa primeira coleção:
            No Logo.
          </p>
          <p>
            Uma coleção que fala por si — sem gritos, sem excessos, sem logo.
            Cada peça foi pensada para destacar o essencial: o corte, o caimento
            e a elegância natural de quem veste.
          </p>
          <p>
            As etiquetas discretas guardam nossa assinatura, enquanto o design
            revela personalidade e sofisticação. A modelagem segue o padrão
            masculino, com tamanhos M e G, oferecendo conforto e proporção
            precisa.
          </p>
          <p>
            A gola esportiva confere um toque moderno e refinado — perfeita para
            quem quer leveza sem abrir mão da presença. As calças trazem um
            corte diferenciado, desenvolvido em Londres, combinando tradição e
            contemporaneidade.
          </p>
          <p>
            Mais do que roupas, criamos peças que traduzem autenticidade. Essa é
            a essência da No Logo: menos ostentação, mais expressão.
          </p>
        </div>
      </div>
      <CardContainer />

      <div className="preorder-cta">
        <p className="cta-text">
          Olá! Você está sabendo da nova PREVENDA? Clique no botão se tiver
          interesse em participar da **prévenda exclusiva** da nossa primeira
          Coleção de Verão. Não perca a chance de garantir peças limitadas!
        </p>

        <a
          href={preorderUrl}
          className="cta-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          Participar da Pré-venda
        </a>
      </div>
    </>
  );
}

export default App;
