import * as React from "react"
import "./Chip.css"

export function Chip({ label = "", isActive = false, onClick = () => { }, handleClose = () => {} }) {
  let buttonClassName;

  if (isActive) {
    buttonClassName = "chip active";
  } else {
    buttonClassName = "chip";
  }
  return (
    <button onClick={onClick} className={buttonClassName}>
      <p className="label">{label}</p>
      <span className="close" role="button" onClick={(e) => {
        if (isActive) {
          handleClose();
        }
      }}>{`X`}</span>
    </button >
  )
}

export default Chip
