import React from "react";
import ColorPicker from "./ColorPicker";

const ColorApp = () => {
    const colors = ['#ffb3ff','#ec1349','#ff0000','#000000', '#ff9999','#bfff00', '#0080ff', '#ffbf00', '#39a3c6','#ff00ff','#4dd2ff'];
  
    return <ColorPicker colors={colors} />;
  };
  
export default ColorApp;