import React from "react";

/* interface Product  {
    id: number;
    title: string;
    image: string;
    description: string;
}; nafs lwathifa hia w type  */

type ProductCardProps = {
  id: number;
  title: string;
  image: string;
  description: string;
};

export function ProductCard({ product }: { product: ProductCardProps }) {
  const onClickReadMore = (): void => {
    console.log("product");
  };

  return (
    <div className="p-2">
      <div className="w-72 h-full border rounded-lg bg-white shadow-md">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-52 object-contain"
        />
        <div className="p-4">
          <h2 className="mt-0 mb-2 text-lg font-bold">{product.title}</h2>
          <p className="mb-4 text-zinc-500">{product.description}</p>
          <button
            onClick={onClickReadMore}
            className="w-full px-2 py-3 bg-blue-500 text-white rounded-xl"
          >
            Read More
          </button>
        </div>
      </div>
    </div>
  );
}

/************************Ou Bien*************************/

/*export function ProductCard(props) {

  //console.log("props=>", props.title,'-',props.description)   (ki tebda bech tekteb <productCard title="***" description="*****">)

  return (
    <div className="p-2">
      <div className ="w-72 h-full border rounded-lg bg-white shadow-md">
        <img
          src={props.product.image}
          alt={props.product.title}
          className="w-full h-52 object-contain"
        />
        <div className="p-4 ">
          <h2 className="mt-0 mb-2 text-lg font-bold">
           {props.product.title}
          </h2>
          <p className="mb-4 text-zinc-500">
            {props.product.description}
          </p>
          <button className="w-full  px-2 py-3 bg-blue-500 text-white rounded-xl">
            Read More
          </button>  
        </div> 
      </div>
    </div>
  );
};
*/
