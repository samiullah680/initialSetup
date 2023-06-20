import { Card } from '@cedcommerce/ounce-ui';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthLayout } from '../layout';

const Activate = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => navigate("/auth/reset-password"), 2000);
  }, []);
  return (
    <AuthLayout>
      <Card cardType="Shadowed" title="Congratulations">
        Your account is activated successfully.
      </Card>
    </AuthLayout>
  );
};

export default Activate;