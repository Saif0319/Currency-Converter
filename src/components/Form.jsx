import MultipleStopIcon from '@mui/icons-material/MultipleStop';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Dropdown from './Dropdown';

const Form = () => {

    const [from, setFrom] = useState("USD")
    const [to, setTo] = useState("CAD")
    const [newAmount, setNewAmount] = useState(0)
    const [oldAmount, setOldAmount] = useState(0)


    //Swap method
    const swap = () => {
        setFrom(to)
        setTo(from)
    }


    // Fecthing data

    useEffect(() => {
        axios.get("https://currency-converter-by-api-ninjas.p.rapidapi.com/v1/convertcurrency", {
            params: {have: `${from}`, want: `${to}`, amount: `${oldAmount ? oldAmount: 0}`},
            headers: {
            'X-RapidAPI-Key': process.env.REACT_APP_API_KEY ,
            'X-RapidAPI-Host': 'currency-converter-by-api-ninjas.p.rapidapi.com'
            }
        })

        .then(res => {
            const data = res.data
            setNewAmount(data.new_amount)
        })
        .catch(err => console.log(err))


    }, [to, from, newAmount, oldAmount])



    

  return (
    <div>

      <form className="lg:w-1/3 flex flex-col rounded p-7 bg-blue-100  shadow-2xl lg:my-20 lg:mx-60 md:my-20 md:mx-auto mx-auto
       my-20 md:w-1/2 ">

        {/* Amount */}
        <div className="flex flex-col mb-3">
          <label htmlFor="amount">Enter Amount</label>
          <input type={"number"} name="amount" className="py-3 px-4 my-1 outline-0 transition-all ease-in focus:border-green-300 border-2" 
          onChange={(e) => setOldAmount(e.target.value)} />
        </div>
        

          {/* Currencies */}
        <div className="flex w-full justify-between my-4 border-blue-400">
          
          <div className="flex flex-col ">
            <label htmlFor="from">From</label>
            <Dropdown onChange={(e) => setFrom(e.target.value)} name={"from"} defaultVal={from} value={from} />
          </div>

          <MultipleStopIcon fontSize='large' sx={{alignSelf: "center", marginTop: 3, cursor: "pointer"}} onClick={()=> swap()} 
            className="hover:bg-white hover:bg-opacity-20 rounded-full box-content p-1.5 active:bg-opacity-75 " onc />

          <div className="flex flex-col">
            <label htmlFor="to">To</label>
            <Dropdown onChange={(e) => setTo(e.target.value)} name={"to"} defaultVal={to} />
          </div>

        </div>


          {/* Rate */}
        <div className='mt-2'>
          <p>{oldAmount ? oldAmount: 0} {from} = {newAmount} {to}</p>
        </div>
        
      </form>

    </div>
  )
}

export default Form