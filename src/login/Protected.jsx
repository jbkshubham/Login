import React, { useEffect } from 'react';
import { useNavigate, Route } from 'react-router-dom';

const Protected = (props) => {
  const navigate = useNavigate();
  const { cmp: Component, ...rest } = props;

  useEffect(() => {
    if (localStorage.getItem('userInfo')) {
      navigate('/add');
    }
  }, [navigate]);

  return (
    <Route {...rest}>
      <Component />
    </Route>
  );
};

export default Protected;
