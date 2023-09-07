import React, { useState } from "react";

import NavigationHeaderPrimary from "./primary";
import NavigationHeaderSecondary from "./secondary";

const NavigationHeader = () => {
  return (
    <React.Fragment>
      <NavigationHeaderSecondary />
      <NavigationHeaderPrimary />
    </React.Fragment>
  );
};

export default NavigationHeader;
