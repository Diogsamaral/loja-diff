// src/components/CardContainer.jsx

import React from "react";
import Card from "./Card";

import CalcaImg from "../assets/Calça.png";
import CamisaImg from "../assets/Camisa.png";
import BermudaImg from "../assets/Bermuda.png";

// Dados dos seus produtos (SUBSTITUA OS VALORES REAIS AQUI)
const productData = [
  {
    id: 1,
    imgSrc: BermudaImg, // Substitua pelo link real
    title: "Shorts Cargo Eclipse",
    description:
      "Perfeito para quem busca aventura com estilo. Conforto e resistência para suas explorações.",
    marketLink: "link-do-mercado-livre-shorts", // Substitua pelo link real
    buttonText: "Explorar",
  },
  {
    id: 2,
    imgSrc: CamisaImg, // Substitua pelo link real
    title: "Camisa Sedosa Via Láctea",
    description:
      "O toque suave do universo em sua pele. Elegância que brilha em qualquer constelação.",
    marketLink:
      "https://produto.mercadolivre.com.br/MLB-4281361099-camisa-masculina-manga-curta-gola-esporte-acetinada-luxo-_JM", // Substitua pelo link real
    buttonText: "Descobrir",
  },
  {
    id: 3,
    imgSrc: CalcaImg, // Substitua pelo link real
    title: "Calça Foguete Skinny",
    description:
      "Corte preciso para um visual aerodinâmico. O traje ideal para desbravar novas fronteiras.",
    marketLink: "link-do-mercado-livre-calca", // Substitua pelo link real
    buttonText: "Adquirir",
  },
];

// Estilos de layout e responsividade do Container
const containerStyles = `
    .container-cards {
        display: flex;
        gap: 35px;
        flex-wrap: wrap;
        justify-content: center;
        max-width: 1200px;
        width: 100%;
        padding-top: 20px;
    }

    /* Media Queries */
    @media (max-width: 1050px) {
        .container-cards {
            gap: 25px;
        }
        .card {
            width: calc(50% - 40px); /* 2 cards por linha, ajustando o gap */
        }
    }
    
    @media (max-width: 700px) {
        .container-cards {
            gap: 20px; /* Reduz o gap */
        }
        .card {
            width: 95%; /* 1 card por linha em celulares */
        }
    }
`;

function injectContainerStyles() {
  if (!document.getElementById("container-styles")) {
    const styleElement = document.createElement("style");
    styleElement.id = "container-styles";
    styleElement.textContent = containerStyles;
    document.head.appendChild(styleElement);
  }
}

const CardContainer = () => {
  // Injeta os estilos de layout uma vez
  injectContainerStyles();

  return (
    <div className="container-cards">
      {productData.map((product) => (
        <Card
          key={product.id}
          imgSrc={product.imgSrc}
          title={product.title}
          description={product.description}
          marketLink={product.marketLink}
          buttonText={product.buttonText}
        />
      ))}
    </div>
  );
};

export default CardContainer;
