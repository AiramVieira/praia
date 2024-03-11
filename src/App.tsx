import { useState } from "react";
import "./App.css";

const beachs = [
  {
    name: "Praia da Galhetinha",
    img: "https://th.bing.com/th/id/R.41a996f4c58a2faa65f5c6a94a7d3306?rik=IyJB3dexv0Wp%2fQ&pid=ImgRaw&r=0",
  },
  {
    name: "Praia do Bananal",
    img: "https://caminhagente.com.br/wp-content/uploads/2020/10/DSC_0303-1.jpg",
  },
  {
    name: "Praia do Lucas",
    img: "https://www.feriasemsc.com.br/wp-content/uploads/2022/01/praia-do-lucas.jpg",
  },
  {
    name: "Praia Bacia da Vovó",
    img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/9a/06/a6/lugar-sensacional.jpg?w=600&h=600&s=1",
  },
  {
    name: "Praia do Monge",
    img: "https://i.pinimg.com/736x/9f/6c/03/9f6c0330ffe3a9c12753af8084ad6db1.jpg",
  },
  {
    name: "Praia da Estrela",
    img: "https://a.cdn-hotels.com/gdcs/production135/d1565/b5f6c35e-41ae-4d60-9351-a36b2a283c66.jpg",
  },
  {
    name: "Praia Canto do Poá",
    img: "https://praias-sc.com/wp-content/uploads/poa-praia-Deluca-Jr.jpg",
  },
  {
    name: "Praia da Paciência",
    img: "https://tourb.com.br/img/lugares/salvador/praia-da-paciencia.jpg",
  },
  {
    name: "Praia da Fortaleza",
    img: "https://imgmd.net/images/v1/guia/1613089/praia-da-fortaleza.jpg",
  },
  {
    name: "Praia do Cascalho",
    img: "https://thumbs.dreamstime.com/z/praia-do-cascalho-15230736.jpg",
  },
];

function App() {
  const [index, setIndex] = useState<number | undefined>(undefined);

  const shuffle = () => {
    const num = Math.floor(Math.random() * beachs.length);
    setIndex(num);
    console.log(num);
  };
  return (
    <>
      <h2>Qual praia iremos primeiro?</h2>

      <button onClick={shuffle}>Descubra!</button>
      <br />

      {index !== undefined ? (
        <>
          <img
            src={beachs[index].img}
            alt={beachs[index].name}
            height={400}
            width={600}
          />
          <h2>{beachs[index].name}</h2>
        </>
      ) : null}
    </>
  );
}

export default App;
