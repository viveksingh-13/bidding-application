import React from "react";
import PrivateLayout from "../components/PrivateLayout";

const withPrivateLayout = <P extends object>(
  WrappedComponent: React.ComponentType<P>
) => {
  const WithPrivateLayout: React.FC<P> = (props) => {
    return (
      <PrivateLayout>
        <WrappedComponent {...(props as P)} />
      </PrivateLayout>
    );
  };
  return WithPrivateLayout;
};

export default withPrivateLayout;
