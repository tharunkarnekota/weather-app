import React,{useState} from 'react'


const App = () => {
  const [city,setCity] = useState("");
  const [result,setResult] = useState("");
  const APIkey = "d885aa1d783fd13a55050afeef620fcb";

  const changehandler = e =>{
    setCity(e.target.value);
  }
  const submitHandler = e =>{
    e.preventDefault();
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}`).then(
      response => response.json()
    ).then(data => {
      const kelvin = data.main.temp;
      const celsius = kelvin - 273.15;
      setResult("Temperature at"+" "+city+"\n"+Math.round(celsius)+"ºC");
      setCity("");
    }).catch(error => {
                    setResult("Please enter valid city name");
                    // setCity("")
                  });
  }

  
  return (
    <div>
      <center>
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">Weather App</h3><br />
              <form onSubmit={submitHandler}>
                <input size="30" type="text" name="city" value={city} placeholder="Enter valid city name" onChange={changehandler}/>&nbsp; &nbsp;<br/><br />
                <input type="submit" value="Get Temperature" />
              </form><br />
              <h1>{result}</h1>
              
            </div>
          </div>
        </center>
    </div>
  )

  }
export default App
