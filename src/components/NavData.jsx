import { Link } from "react-router-dom"

const NavData=()=>{
    return(
      <nav>
        <h2>
            <Link to="/">Todo</Link>
        </h2>

        <Link to="/completed">Done Todo</Link> ||
        <Link to="/open">Open Todo</Link> 
      </nav>
    )
}
export default NavData;