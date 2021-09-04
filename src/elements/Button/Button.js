import React from "react"
import { Link } from "react-router-dom" // untuk route navigasi
import BasicProps from "prop-types"

export default function Button(props) {
  const className = [props.className]
  if (props.isPrimary) className.push("btn-primary")
  if (props.isLarge) className.push("btn-lg")
  if (props.isSmall) className.push("btn-sm")
  if (props.isBlock) className.push("btn-block")
  if (props.hasShadow) className.push("btn-shadow")

  let onClick = () => {
    if (props.onCLick) {
      props.onCLick()
    }
  }
  return (
    <button
      className={className.join(" ")}
      style={props.style}
      onClick={onClick}
    >
      {props.children}
    </button>
  )
}

Button.prototype = {
  type: BasicProps.oneOf(["button", "link"]),
  onClick: BasicProps.func,
  href: BasicProps.string,
  target: BasicProps.string,
  className: BasicProps.string,
  isPrimary: BasicProps.bool, //
  isLight: BasicProps.bool, //
  isExternal: BasicProps.bool,
  isDisable: BasicProps.bool,
  isLoading: BasicProps.bool,
  isSmall: BasicProps.bool,
  isLarge: BasicProps.bool,
  isBlock: BasicProps.bool,
  hasShadow: BasicProps.bool,
}
