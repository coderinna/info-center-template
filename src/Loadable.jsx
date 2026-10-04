import React, { Suspense } from 'react';

const Loadable = (Component) => {
  return (props) => (
    <Suspense fallback={<div>Ladataan...</div>}>
      <Component {...props} />
    </Suspense>
  );
};

export default Loadable;
