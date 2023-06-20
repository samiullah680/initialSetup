import { Loader } from "@cedcommerce/ounce-ui";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Completed = () => {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    //update loader
    let count = 0;
    const interval = setInterval(() => {
      count += 8;
      setProgress(count);
      if (count > 100) navigate(`/panel/123456789/dashboard`);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <Loader
      type="Loader3"
      title="You are successfully onboard"
      subtitle="Setting up your account, please wait..."
      percentage={progress}
    />
  );
};

export default Completed;
