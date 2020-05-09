import React from "react";
import { Loader } from 'react-loaders';


export default function Loading(props) {
  if (props.show) {
    return (
      <div className="myLoading"><Loader active type="ball-grid-pulse" color="#2196f3" /></div>
    )
  }
  else {
    return null;
  }
}
