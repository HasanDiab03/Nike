import { useParams } from "react-router-dom";
import { products } from "../constants";
const ShoePage = () => {
  const { shoeId } = useParams();
  const product = products.find((product) => product.id == shoeId);
  const { imgURL, name, price } = product;
  return (
    <div className=" bg-black flex justify-center items-center h-screen gap-10">
      <h1 className="text-center text-4xl text-green-800">{name}</h1>
      <img
        src={imgURL}
        alt={name}
        width={400}
        height={400}
        className="rounded-full"
      />
      <p className="text-4xl text-green-800">({price})</p>
    </div>
  );
};

export default ShoePage;
