import Features from "../Features/Features";

const PriceCart = ({ price }) => {
  const { features } = price || {};
  const featureArry = Array.isArray(features) ? features : [features];
  return (
    <div className="bg-indigo-400 flex flex-col mt-4 rounded-md p-4">
      <h2 className="text-center">
        <span className="md:text-4xl font-bold text-purple-700">
          {price.price}
        </span>
        <span className="text-2xl">/mon</span>
      </h2>
      <h1 className="text-1xl my-6 font-semibold text-center">{price.name}</h1>
      <p className="underline font-bold text-white">features : </p>
      {featureArry.map((feature, idx) => (
        <Features feature={feature} key={feature.idx}></Features>
      ))}
      <button className="w-full mt-auto bg-gray-400 hover:bg-slate-600 py-2 rounded-md">
        Buy Now
      </button>
    </div>
  );
};

export default PriceCart;
