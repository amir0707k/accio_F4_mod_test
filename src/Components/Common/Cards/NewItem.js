import * as React from "react";
import Alert from "@mui/material/Alert";
import './styles.css'
export default function NewItem() {
  return (
    <div className="alert" id="alert" sx={{ width: "100%" }} spacing={2}>
      <Alert
        onClose={() => {
          document.getElementById("alert").style.display = "none";
        }}
      >
        Added Item to cart successfully
      </Alert>
    </div>
  );
}
