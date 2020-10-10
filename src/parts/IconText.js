import React from "react"
import Typography from "@material-ui/core/Typography"
import Button from "elements/Button/Button"
import { getStyle, getColor } from "costom/getStyle"
export default function IconText() {
  const classes = getStyle()
  return (
    <Typography className={classes.title} color="secondary" noWrap>
      <a className={classes.title} style={{ cursor: " pointer" }}>
        Material <span style={{ color: "#ff414d" }}>-UI</span>
      </a>
    </Typography>
  )
}
