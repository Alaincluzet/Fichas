import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { useState } from "react";

function HideNotHide() {
  const [show, setShow] = useState(false);
  const toggleShow = () => {
    setShow(!show);
  };
  return (
    <div className="container mt-3">
      <button className="btn btn-success mb-2" onClick={toggleShow}>
        {show ? "Hide" : "Show"}
      </button>
      {show && <p className="text-muted">Prueba</p>}
    </div>
  );
}
export default HideNotHide;
