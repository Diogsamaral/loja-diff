// src/components/Card.tsx

import React from "react";

// === 1. DEFINIÇÃO DA INTERFACE (TIPAGEM) ===
// Exportamos para que o CardContainer possa usá-la para tipar os dados.
export interface CardProps {
  imgSrc: string; // O caminho importado da imagem (será uma string)
  title: string;
  description: string;
  marketLink: string; // O link para o Mercado Livre
  buttonText: string;
}

// Estilos CSS específicos do Card (para injetar no head)
const cardStyles = `
    .card {
        background-color: var(--card-bg);
        border: 1px solid var(--border-color);
        border-radius: 18px;
        padding: 25px;
        width: 320px;
        box-shadow: 0 5px 25px rgba(0, 204, 255, var(--shadow-intensity));
        text-align: center;
        transition: transform var(--transition-medium), box-shadow var(--transition-medium), border-color var(--transition-medium);
        position: relative;
        overflow: hidden;
        margin: 10px; /* Adicionado margem para espaçamento melhor */
    }

    .card:hover {
        transform: translateY(-8px) scale(1.02);
        box-shadow: 0 8px 35px rgba(0, 255, 255, calc(var(--shadow-intensity) + 0.3));
        border-color: var(--highlight-color);
    }

    .card::before {
        content: '';
        position: absolute;
        top: -50%;
        left: -50%;
        width: 200%;
        height: 200%;
        background: radial-gradient(circle at center, rgba(255, 255, 255, 0.08) 0%, transparent 70%);
        transform: rotate(45deg);
        transition: opacity var(--transition-medium);
        opacity: 0;
        pointer-events: none;
    }

    .card:hover::before {
        opacity: 1;
        animation: cardShine 1.5s infinite linear;
    }

    .card-image {
        width: 100%;
        height: 200px;
        object-fit: cover;
        border-radius: 12px;
        margin-bottom: 20px;
        border: 1px solid rgba(255, 255, 255, 0.1);
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.4);
        transition: transform var(--transition-fast);
    }

    .card:hover .card-image {
        transform: scale(1.03);
    }

    .card-title {
        font-family: 'Orbitron', sans-serif;
        color: var(--highlight-color);
        font-size: 1.6em;
        margin-top: 0;
        margin-bottom: 12px;
        text-shadow: 0 0 5px rgba(160, 255, 0, 0.6);
        letter-spacing: 0.5px;
    }

    .card-description {
        font-size: 0.95em;
        margin-bottom: 25px;
        color: var(--text-darker);
        line-height: 1.5;
    }

    .card-button {
        display: inline-block;
        background: linear-gradient(45deg, var(--accent-color), #FF66B2);
        color: #FFFFFF;
        padding: 12px 25px;
        text-decoration: none;
        border-radius: 30px;
        font-weight: 600;
        letter-spacing: 1.2px;
        transition: all var(--transition-medium);
        border: none;
        cursor: pointer;
        box-shadow: 0 4px 15px rgba(255, 0, 153, var(--shadow-intensity));
        text-transform: uppercase;
    }

    .card-button:hover {
        background: linear-gradient(45deg, #FF33CC, #FF99E6);
        box-shadow: 0 6px 20px rgba(255, 51, 204, calc(var(--shadow-intensity) + 0.3));
        transform: translateY(-2px);
        letter-spacing: 1.5px;
    }
`;

function injectStyles() {
  if (!document.getElementById("card-styles")) {
    const styleElement = document.createElement("style");
    styleElement.id = "card-styles";
    styleElement.textContent = cardStyles;
    document.head.appendChild(styleElement);
  }
}

// === 2. COMPONENTE COM TIPAGEM ===
const Card: React.FC<CardProps> = ({
  imgSrc,
  title,
  description,
  marketLink,
  buttonText,
}) => {
  // Injeta os estilos do Card uma vez quando o componente for montado
  injectStyles();

  return (
    <div className="card">
      <img src={imgSrc} alt={title} className="card-image" />
      <h2 className="card-title">{title}</h2>
      <p className="card-description">{description}</p>
      <a
        href={marketLink}
        className="card-button"
        target="_blank"
        rel="noopener noreferrer"
      >
        {buttonText}
      </a>
    </div>
  );
};

export default Card;
