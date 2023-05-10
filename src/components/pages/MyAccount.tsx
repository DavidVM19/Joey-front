import { useParams } from "react-router-dom";

const MyAccount = () => {
  let params = useParams();
  console.log(params.teamId); // "hotspur"
  return <div> Mon compte </div>;
};

export default MyAccount;
