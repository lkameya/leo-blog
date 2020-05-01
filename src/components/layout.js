import React, { useContext } from "react"
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
  const { colors, name } = useContext(ThemeContext);

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
          checked={name === 'dark'}
          onChange={() => toggleTheme()}
        />
        {/* <Switch
          onChange={() => { toggleTheme() }}
          checked={name === 'light'}
          checkedIcon={<img src="../assets/sun.png" />}
          uncheckedIcon={false}
          // handleDiameter={20}
          offColor={shade(0.15, colors.primary)}
          onColor={colors.secondary}
        /> */}
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
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
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
