import "./Link.css";

const Link = ({ route }) => {
  const { name } = route || {};
  return (
    <div>
      <li className="mr-12 hover:bg-purple-600 text-white">
        <a href="">{name}</a>
      </li>
    </div>
  );
};

export default Link;
