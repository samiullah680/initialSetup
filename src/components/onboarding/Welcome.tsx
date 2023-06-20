import { Onboard } from "@cedcommerce/ounce-ui";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();
  setTimeout(() => {
    // call check step api call to get the details, is user onboarded yet or not?
    navigate("/onboarding/step-one");
  }, 5000);

  return <Onboard title="Welcome to onboard" />;
};

export default Welcome;
