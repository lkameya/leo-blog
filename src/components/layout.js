import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import { rhythm, scale } from "../utils/typography"
import GlobalStyles from '../utils/global';
import Switch from 'react-switch';
import { shade } from 'polished';
import { ThemeContext } from 'styled-components';
import Toggle from './Toggle';
import sun from '../assets/sun.png';

//"Icon made by Pixel perfect from www.flaticon.com"
import moon from '../assets/moon.png';

const Layout = ({ location, title, children, toggleTheme }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  let websiteTheme
  if (typeof window !== `undefined`) {
    websiteTheme = window.__theme
  }

  const [theme, setTheme] = useState(websiteTheme);

  useEffect(() => {
    console.log(theme);
    setTheme(window.__theme);

    window.__onThemeChange = () => {
      console.log('mudei');
      console.log(window.__theme);
      setTheme(window.__theme)
    }
  }, []);


  if (location.pathname === rootPath) {
    header = (
      <>
        <h1
          style={{
            ...scale(1.5),
            marginBottom: rhythm(1.5),
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h1>
        <Toggle
          icons={{
            checked: (
              <img
                src={moon}
                width="16"
                height="16"
                role="presentation"
                style={{ pointerEvents: 'none' }}
              />
            ),
            unchecked: (
              <img
                src={sun}
                width="16"
                height="16"
                role="presentation"
                style={{ pointerEvents: 'none' }}
              />
            ),
          }}
          checked={theme === 'dark'}
          onChange={toggleTheme}
        />
      </>
    )
  } else {
    header = (
      <>
        <h3
          style={{
            fontFamily: `Montserrat, sans-serif`,
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h3>
        <Toggle
          icons={{
            checked: (
              <img
                src={moon}
                width="16"
                height="16"
                role="presentation"
                style={{ pointerEvents: 'none' }}
              />
            ),
            unchecked: (
              <img
                src={sun}
                width="16"
                height="16"
                role="presentation"
                style={{ pointerEvents: 'none' }}
              />
            ),
          }}
          checked={theme === 'dark'}
          onChange={toggleTheme}
        />
      </>
    )
  }
  return (
    <>
      <GlobalStyles />
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `2.625rem ${rhythm(3 / 4)}`,
        }}
      >
        <header className="main-header">{header}</header>
        <main>{children}</main>
        <footer>
          <a href="https://www.github.com/lkameya">github</a>
        </footer>
      </div>
    </>
  )
}

export default Layout
