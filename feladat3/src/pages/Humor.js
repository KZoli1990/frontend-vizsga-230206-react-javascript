import { Link } from "react-router-dom";


function Humor() {
  
    return (
      <>
         <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="m-3" to='/'>Home</Link>
            
         </nav>
        <table stye={{width:'80%'}} className='textCenter'>
            <thead>
                <tr>
                    <th>Cím </th>
                    <th> Szerző</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Galaxis útikalauz stopposoknak</td>
                    <td>Douglas Adams</td>
                </tr>

                <tr>
                    <td>Mort, A Halál kisinasa  </td>
                    <td> Terry Pratchett</td>
                </tr>

                <tr>
                    <td>Vadkanapó</td>
                    <td>Terry Pratchett</td>
                </tr>
            </tbody>
        </table>
      </>
    );
  }
  
  export default Humor;

        
           
                           