import React from 'react';
import { Oval } from 'react-loader-spinner';

const Loader = () => {
  return (
    <section style={{display: "flex", justifyContent: "center"}}>
      <Oval
        height={70}
        width={70}
        color="lightblue"
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="lightblue"
        strokeWidth={8}
        strokeWidthSecondary={8}
      />
    </section>
  );
};

export default Loader;
