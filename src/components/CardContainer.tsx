// src/components/CardContainer.tsx

import React from "react";
// Importa o componente Card e, crucialmente, a Interface CardProps
import Card, { type CardProps } from "./Card";

// Importação das Imagens da pasta assets
// O nome do arquivo real deve ser usado aqui.
// Use os IDs dos arquivos para referenciar os arquivos originais.
import shortsImage from "../assets/Bermuda.png";
import camisaImage from "../assets/Camisa.png";
import calcaImage from "../assets/Calça.png";

// Dados dos seus produtos (usando a interface CardProps)
// O TypeScript verifica se todos os objetos aqui têm o formato definido em CardProps.
const productData: CardProps[] = [
  {
    imgSrc: shortsImage, // Variável importada
    title: "Bermuda London DiffCompany",
    description:
      "Perfeito para quem busca aventura com estilo. Conforto e resistência para suas explorações.",
    marketLink: "link-do-mercado-livre-shorts", // **SUBSTITUA PELO LINK REAL**
    buttonText: "Comprar",
  },
  {
    imgSrc: camisaImage, // Variável importada
    title: "Camisa Gaufy DiffCompany",
    description:
      "O toque suave do universo em sua pele. Elegância que brilha em qualquer constelação.",
    marketLink:
      "https://produto.mercadolivre.com.br/MLB-4281361099-camisa-masculina-manga-curta-gola-esporte-acetinada-luxo-_JM", // **SUBSTITUA PELO LINK REAL**
    buttonText: "Comprar",
  },
  {
    imgSrc: calcaImage, // Variável importada
    title: "Calça London DiffCompany",
    description:
      "Corte preciso para um visual aerodinâmico. O traje ideal para desbravar novas fronteiras.",
    marketLink:
      "https://produto.mercadolivre.com.br/MLB-5890572376-calca-masculina-casual-bolso-faca-e-bolso-traseiro-embutido-_JM?attributes=COLOR_SECONDARY_COLOR%3AUHJldG8%3D&picker=true&quantity=1", // **SUBSTITUA PELO LINK REAL**
    buttonText: "Comprar",
  },
];

// Estilos de layout do container (para injetar no head)
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
            width: calc(50% - 40px);
        }
    }
    
    @media (max-width: 700px) {
        .container-cards {
            gap: 20px;
        }
        .card {
            width: 95%;
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

// O componente Container não precisa de props, então usamos React.FC (ou React.FC<{}>)
const CardContainer: React.FC = () => {
  injectContainerStyles();

  return (
    <div className="container-cards">
      {/* Mapeamento de produtos */}
      {productData.map((product, index) => (
        <Card
          key={index} // Usamos o índice como chave, pois não há um ID único no seu objeto
          {...product} // Espalha todas as propriedades de CardProps para o componente Card
        />
      ))}
    </div>
  );
};

export default CardContainer;
