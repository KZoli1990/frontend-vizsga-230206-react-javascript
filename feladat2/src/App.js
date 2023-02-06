import { useState } from "react";


function App() {

  const [data, setData] = useState({
    wLink:'',
    wLeiras:''
  });

  const itemData = [];

  const handleChange = (e) => {
    setData({...data, [e.target.name]: e.target.value})
  }
  const { wLink, wLeiras } = data;
  const handleSubmit = (e) => {
    e.preventDefault();
    itemData.push(data)

  }

  return (
    <div>

      <h1>Az antikvárium története</h1> 

      <p>Az antikváriumot 1901-ben alapították, még az Osztrák–Magyar Monarchia idején. Magát az épületet többször újjá kellet építeni, ez azonban lehetőséget adott a megújításra, korszerűsítésre.</p>
      <p>A jelenlegi épület 2019-ben lett felújítva.</p>

      <h2>Hírességek, akik itt jártak</h2> 
        <div className="container d-flex">
          <div className="card m-3  p-3 rounded-3" style={{width: '80%'}}>
            <h3>Ady Endre</h3> 

            <p>Többször is kikölcsönözte Deák Ferenc műveit</p>
            <p>Wikipédia: https://hu.wikipedia.org/wiki/Ady_Endre</p>
            <a href="https://hu.wikipedia.org/wiki/Kezd%C5%91lap">Wikipédia</a>
          </div>

          <div className="card m-3  p-3 rounded-3" style={{width: '80%'}}>
             <h3>Móra Ferenc</h3> 

            <p>Az Én Újságom c. gyermeklapba írt művei közül 50-nek a kéziratát az antikváriumnak adományozta</p>
            <p>Wikipédia: https://hu.wikipedia.org/wiki/Móra_Ferenc</p>
            <a href="https://hu.wikipedia.org/wiki/Kezd%C5%91lap">Wikipédia</a>
          </div>

          <div className="card m-3  p-3 rounded-3" style={{width: '80%'}}>
            <h3>Névtelen adományozó</h3>
            <p>1992-ben 500 000 Ft-tal támogatta az antikvárium működését</p>
          </div>
          
        </div>
      
      

      

      
      <div className="card mt-5 m-auto p-3" style={{width: '70%'}}>
        <form onSubmit={handleSubmit}>
          <h2>Új híresség jelzése</h2>

          <label htmlFor="wLink" className="form-label">Wikipédia link</label>
          <input className="form-control" type="text" name='wLink' value={wLink} onChange={handleChange}/>

          <label htmlFor="wLeiras" className="form-label">Leírás</label>
          <textarea name="wLeiras" id="" cols="30" rows="10" value={wLeiras} onChange={handleChange} className="form-control"></textarea>
          <button type="submit" className="btn btn-primary">Elküld</button>

        </form>
      </div>
      
      
      

    </div>
  );
}

export default App;
