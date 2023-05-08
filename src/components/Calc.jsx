import React, { useEffect, useState } from 'react'
const Calc = () => {

    //api call info

   
const submitHandler = (e) =>{
        e.preventDefault();
        //console.log(amount,inpCurr,outCurr)
        
        var myHeaders = new Headers();
        myHeaders.append("apikey", "U8Q1CTUycbWrI8tIL24ZmiAhttZnNktw");
        var requestOptions = {
          method: 'GET',
          redirect: 'follow',
          headers: myHeaders
        };

fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${outCurr}&from=${inpCurr}&amount=${amount}`, requestOptions)
  .then(response => response.text())
  .then(result => { 
    
    const data = JSON.parse(result);
    setFinAns(data["result"])
    // useEffect(()=>{
    //     setFinAns = data["result"]
    // },[finAns])
    

})
  .catch(error => console.log('error', error));
   
}




  const [inpCurr,setInputCurr] = useState("");
  const [outCurr,setOutputCurr] = useState("");
  const [amount, setAmount] = useState("");
  let [finAns, setFinAns] = useState();
  return (
<div className="home4" id='currency-converter'>
      <form className="form" onSubmit={submitHandler}>
     
        <label for="currency-input">Enter currency from:</label>
        <input type="text" id="currency-from" name="currency-from" placeholder='EUR, USD, INR'  value={inpCurr}
            onChange={ (e) => {
            setInputCurr(e.target.value)
            console.log(inpCurr);
            }}/>

        


        <label for="currency-output">enter currency to:</label>
        <input type="text" id="currency-to" name="currency-to" placeholder='EUR, USD, INR' value={outCurr}
            onChange={ (e) => {
            setOutputCurr(e.target.value)
            console.log(outCurr);
            }}/>

     <label for="currency-amount">currency amount</label>
     <input type='number' placeholder='enter amount' value={amount}
            onChange={ (e) => {
            setAmount(e.target.value)
            console.log(amount);
            }}/>
 
    {/* <label for="date">enter date</label>
    <input type="date" ></input> */}

     <button id="convert-button" >Convert</button>
     <p id="converted-result">{outCurr}:{finAns}</p>

    </form>
    </div>  );
}

export default Calc;