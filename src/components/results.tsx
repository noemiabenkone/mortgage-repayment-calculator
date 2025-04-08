import Image from "next/image";

export function Results() {
    return (
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 ml-6">
        <Image src={"https://img.freepik.com/vetores-premium/conceito-de-transferencia-e-transacao-de-dinheiro-jovens-felizes-enviando-e-recebendo-dinheiro_183665-466.jpg"}
         alt=""
         width={300}
         height={300}/>
         
        <h1 className="text-gray-600 text-lg font-bold">Results shown here...</h1>
        
      </div>
    );
  }
  