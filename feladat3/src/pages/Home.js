import { Link } from "react-router-dom";

function Home() {
  
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="m-3" to='/scifi'>Scifi</Link>
            <Link className="m-3" to='/humor'>Humor</Link>
    </nav>
        <p>Üdvözöljük a honlapunkon! Válasszon a menüsorból hogy megtekintse az akutálisan kiállított könyveket!</p>
      </>
    );
  }
  
  export default Home;