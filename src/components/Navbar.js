import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Link } from "react-scroll";
import Logo from "./partials/Logo";
import styled from "styled-components";

const propTypes = {
  navPosition: PropTypes.string,
  hideNav: PropTypes.bool,
  hideSignin: PropTypes.bool,
  bottomOuterDivider: PropTypes.bool,
  bottomDivider: PropTypes.bool,
};

const defaultProps = {
  navPosition: "",
  hideNav: false,
  hideSignin: false,
  bottomOuterDivider: false,
  bottomDivider: false,
};

const Header = ({
  className,
  navPosition,
  hideNav,
  hideSignin,
  bottomOuterDivider,
  bottomDivider,
  ...props
}) => {
  const [isActive, setIsactive] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const nav = useRef(null);
  const hamburger = useRef(null);

  useEffect(() => {
    isActive && openMenu();
    document.addEventListener("keydown", keyPress);
    document.addEventListener("click", clickOutside);
    return () => {
      document.removeEventListener("keydown", keyPress);
      document.removeEventListener("click", clickOutside);
      closeMenu();
    };
  });

  const openMenu = () => {
    document.body.classList.add("off-nav-is-active");
    nav.current.style.maxHeight = nav.current.scrollHeight + "px";
    setIsactive(true);
  };

  const closeMenu = () => {
    document.body.classList.remove("off-nav-is-active");
    nav.current && (nav.current.style.maxHeight = null);
    setIsactive(false);
  };

  const keyPress = (e) => {
    isActive && e.keyCode === 27 && closeMenu();
  };

  const clickOutside = (e) => {
    if (!nav.current) return;
    if (
      !isActive ||
      nav.current.contains(e.target) ||
      e.target === hamburger.current
    )
      return;
    closeMenu();
  };

  const classes = classNames(
    "site-header",
    bottomOuterDivider && "has-bottom-divider",
    className
  );

  const classesActive = classNames(
    "site-header",
    "scrollingActive",
    bottomOuterDivider && "has-bottom-divider",
    className
  );

  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <header {...props} className={navbar ? classesActive : classes}>
      <div className='container'>
        <div
          className={classNames(
            "site-header-inner",
            bottomDivider && "has-bottom-divider"
          )}
        >
          <Logo />
          {!hideNav && (
            <>
              <button
                ref={hamburger}
                className='header-nav-toggle'
                onClick={isActive ? closeMenu : openMenu}
              >
                <span className='screen-reader'>Menu</span>
                <span className='hamburger'>
                  <span className='hamburger-inner'></span>
                </span>
              </button>
              <nav
                ref={nav}
                className={classNames("header-nav", isActive && "is-active")}
              >
                <div className='header-nav-inner'>
                  <ul
                    className={classNames(
                      "list-reset text-xs",
                      navPosition && `header-nav-${navPosition}`
                    )}
                  >
                    <li>
                      <Link
                        activeClass='active'
                        to='about'
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={1000}
                        onClick={closeMenu}
                      >
                        About Me
                      </Link>
                    </li>
                    <li>
                      <Link
                        activeClass='active'
                        to='skills'
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={1000}
                        onClick={closeMenu}
                      >
                        Skills
                      </Link>
                    </li>
                    <li>
                      <Link
                        activeClass='active'
                        to='mywork'
                        spy={true}
                        smooth={true}
                        offset={-5}
                        duration={1000}
                        onClick={closeMenu}
                      >
                        My Work
                      </Link>
                    </li>
                    <li>
                      <Link
                        activeClass='active'
                        to='contact'
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={1000}
                        onClick={closeMenu}
                      >
                        Contact
                      </Link>
                    </li>
                  </ul>
                  {!hideSignin && (
                    <ul className='list-reset header-nav-right'>
                      {/* <li>
                        <Link to="#0" className="button button-primary button-wide-mobile button-sm" onClick={closeMenu}>Sign up</Link>
                      </li> */}
                    </ul>
                  )}
                </div>
              </nav>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
