import React, { useState } from "react"
import styled from "styled-components"
import { MdMenu, MdClose } from "react-icons/md"
import { motion } from "framer-motion"
import { mq } from "../../utils/styles"
import Navlink from "../Shared/Navlink"

const Root = styled.div`
  @media (min-width: ${mq.m1024}) {
    display: none;
  }
`

const Menu = styled(motion.div)`
  position: fixed;
  background: var(--dark-theme);
  color: #fff;
  top: 0;
  left: 0;
  margin: 0;
  padding: 1rem;
  width: 100vw;
  height: 100vh;
  z-index: 100;
  display: flex;
  flex-direction: column;

  ul {
    padding: 0;
    margin: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    place-content: center;
    height: 100%;
    width: 100%;
    align-items: center;
    justify-content: center;
  }

  li {
    margin: 1rem 0;
  }
`

const MenuButton = styled.button`
  background: none;
  border: none;
  height: 50px;
  width: 50px;
  :focus {
    outline: none;
  }
`

const CloseButton = styled(MenuButton)`
  align-self: flex-end;
`

const variants = {
  open: {
    x: 0,
  },
  closed: {
    x: "100%",
  },
}

const ulVariants = {
  open: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
      when: "afterChildren",
    },
  },
}

const listVariants = {
  open: {
    x: 0,
    opacity: 1,
  },
  closed: {
    x: "100%",
    opacity: 0,
  },
}

const links = [
  { text: "home", route: "/" },
  { text: "careers", route: "/careers" },
  { text: "companies", route: "/companies" },
  { text: "how it works", route: "/#how-it-works" },
  { text: "apply", route: "/apply" },
]

const MobileContainer = () => {
  const [isOpen, setOpen] = useState(false)

  const toggle = () => setOpen(prevState => !prevState)

  return (
    <Root>
      <MenuButton onClick={toggle}>
        <MdMenu color="white" style={{ height: "100%", width: "100%" }} />
      </MenuButton>
      <Menu
        variants={variants}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        transition={{ damping: 200 }}
      >
        <CloseButton onClick={toggle}>
          <MdClose color="white" style={{ height: "100%", width: "100%" }} />
        </CloseButton>
        <motion.ul variants={ulVariants}>
          {links.map(link => (
            <motion.li
              variants={listVariants}
              key={link.text}
              transition={{ damping: 200 }}
            >
              <Navlink to={link.route} text={link.text} />
            </motion.li>
          ))}
        </motion.ul>
      </Menu>
    </Root>
  )
}

export default MobileContainer
