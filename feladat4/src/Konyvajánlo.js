import { useState } from "react";

function Konyvajanlo() {

 const [bookData, setBookData ] = useState([{}]);

  const [bookName, setBookName] = useState('');
  const [bookPrice, setBookPrice,] = useState('');

  const addTodo = () => {
    setBookData({...bookData[name: bookName, price: bookPrice ]})
  }

  console.log(bookData);
    return (
      <div>
        <form>
          <h2>Új híresség jelzése</h2>

          <label htmlFor="bookName" className="form-label">Wikipédia link</label>
          <input className="form-control" type="text" name='bookName' value={bookName} onChange={(e) => {
            setBookName(e.target.value)
          }}/>

          <label htmlFor="bookPrice" className="form-label">Leírás</label>
          <input className="form-control" type="text" name='bookPrice' value={bookPrice} onChange={(e) => {
            setBookPrice(e.target.value)
          }}/>

          

          <button type="button" onClick={addTodo} className="btn btn-primary">Elküld</button>

        </form>
       
      </div>
    );
  }
  
  export default Konyvajanlo;
  