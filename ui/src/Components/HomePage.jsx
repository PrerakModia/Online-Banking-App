import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <div>Home Page</div>
      <Link to={"/account"}>Go to My Account</Link>
      <Link to={"/transaction"}>Go to My Transactions</Link>
    </>
  );
};

export default HomePage;
