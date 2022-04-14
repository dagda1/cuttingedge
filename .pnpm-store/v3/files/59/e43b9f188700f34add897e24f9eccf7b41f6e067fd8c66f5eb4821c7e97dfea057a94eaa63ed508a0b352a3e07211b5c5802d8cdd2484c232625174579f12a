import React from "react";
export var usePreviousProps = function (props) {
  var ref = React.useRef();
  React.useEffect(function () {
    ref.current = props;
  });
  return ref.current || {};
};