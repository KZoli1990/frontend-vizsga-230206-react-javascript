import { Link } from "react-router-dom";

function Scifi() {
  
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="m-3" to='/'>Home</Link>
            
         </nav>
        <ul>
            <li>Én, a robot</li>
            <li>Alapítvány</li>
            <li>Alapítvány és Birodalom</li>
            <li>Második Alapítvány</li>
           <li>Az Alapítvány pereme</li>
            <li>Alapítvány és Föld</li>
            <li>Az Alapítvány előtt</li>
        </ul>
      </>
    );
  }
  
  export default Scifi;