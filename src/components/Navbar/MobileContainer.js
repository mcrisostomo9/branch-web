import React, { useState } from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import { mq } from "../../utils/styles"

const Root = styled.div`
  @media (min-width: ${mq.m1024}) {
    display: none;
  }
`

const Menu = styled(motion.ul)`
  background: #fff;
`

const MenuItem = styled.li``

const MenuButton = styled.button`
  background: none;
  border: none;
`

const variants = {
  open: {
    x: 0,
    opacity: 1,
  },
  closed: {
    x: -100,
    opacity: 0,
  },
}

const MobileContainer = () => {
  const [isOpen, setOpen] = useState(false)

  const open = () => {
    console.log("clicked")
    setOpen(!isOpen)
  }
  return (
    <Root>
      <MenuButton onClick={open}>
        <svg viewBox="0 0 100 80" width="40" height="40" fill="#fff">
          <rect width="100" height="15" />
          <rect y="30" width="100" height="15" />
          <rect y="60" width="100" height="15" />
        </svg>
      </MenuButton>
      <Menu
        variants={variants}
        initial={false}
        animate={isOpen ? "open" : "closed"}
      >
        <MenuItem>hello</MenuItem>
        <MenuItem>hello</MenuItem>
        <MenuItem>hello</MenuItem>
      </Menu>
    </Root>
  )
}

export default MobileContainer
