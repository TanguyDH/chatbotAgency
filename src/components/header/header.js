import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import HeaderStyle from './header.module.scss';

class Header extends React.Component {
  state = {
    theposition: undefined
  }
  componentDidMount() {
    window.addEventListener('scroll', this.listenToScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.listenToScroll)
  }

  listenToScroll = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight

    const scrolled = winScroll / height

    this.setState({
      theposition: scrolled,
    })
  }

  render(){

    return (
      <header
      
        className={HeaderStyle.header}
      >
        <div>
          <h1 style={{ margin: 0 }}>
            <Link
              to="/"
              style={{
                color: "#000",
                textDecoration: `none`,
              }}
            >
              Chatots Agency
            </Link>
          </h1>
          <nav>
            <a href="/#contact" className={HeaderStyle.navItem}>
              Contact
            </a>
          </nav>
        </div>
      </header>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header;
