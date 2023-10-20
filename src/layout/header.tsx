import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <nav>
        <NavLink to=".">Home</NavLink>
        &nbsp;&nbsp;
        <NavLink to="system">Product Systems</NavLink>
        &nbsp;&nbsp;
        <NavLink to="comparison">Comparison</NavLink>
      </nav>
    </header>
  )
}

export default Header
