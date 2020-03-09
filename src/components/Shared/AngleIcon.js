import React from "react"
import { FaAngleLeft, FaAngleRight, FaAngleDown } from "react-icons/fa"

const AngleIcon = ({ direction }) => {
  return (
    <>
      {(() => {
        switch (direction) {
          case "left":
            return <FaAngleLeft />
          case "right":
            return <FaAngleRight />
          case "down":
            return <FaAngleDown />
          default:
            return null
        }
      })()}
    </>
  )
}

export default AngleIcon
