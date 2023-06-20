import { Alert, Button, Card, FlexLayout } from "@cedcommerce/ounce-ui";
import { useEffect } from "react";
import { ArrowLeft } from "react-feather";
import { useNavigate } from "react-router-dom";
import { AuthLayout } from "../layout";

const ResetPasswordHelper = () => {
  const navigate = useNavigate();

  // Please remove the useEffect below and replace it with your logic of new password setup after successful email validation.
  useEffect(() => {
    setTimeout(() => navigate("/auth/activate"), 2000);
  }, []);

  return (
    <AuthLayout>
      <Card cardType="Shadowed">
        <FlexLayout direction="vertical" spacing="loose" childWidth="fullWidth">
          <Alert
            desciption="Check your email to reset password."
            type="success"
            destroy={false}
          >
            Reset password link generated!
          </Alert>

          <Button
            icon={<ArrowLeft size={20} />}
            onClick={() => {
              navigate("/auth/login");
            }}
            thickness="thin"
            type="Plain"
          >
            Back to Login
          </Button>
        </FlexLayout>
      </Card>
    </AuthLayout>
  );
};

export default ResetPasswordHelper;
