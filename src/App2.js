import React,{useState} from 'react'


const App = () => {
  const [city,setCity] = useState("");
  const APIkey = "d885aa1d783fd13a55050afeef620fcb";

  const changehandler = e =>{
    setCity(e.target.value);
  }
  const submitHandler = e =>{
    e.preventDefault();
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}`).then(
      response => response.json()
    ).then(data => console.log(data.main.temp))
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
