import React,{useState} from 'react'


const App = () => {
  const [city,setCity] = useState("");
  

  const changehandler = e =>{
    setCity(e.target.value);
  }
  const submitHandler = e =>{
    e.preventDefault();
    console.log(city);
  }

  
  return (
    <div>
      <center>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Weather App</h5>
              <form onSubmit={submitHandler}>
                <input size="30" type="text" name="city" value={city} onChange={changehandler}/>&nbsp; &nbsp;<br/><br />
                <input type="submit" value="Get Temperature" />
              </form><br />
              
            </div>
          </div>
        </center>
    </div>
  )

  }
export default App
