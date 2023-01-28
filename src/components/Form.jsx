import MultipleStopIcon from '@mui/icons-material/MultipleStop';


const Form = () => {
  return (
    <div>

      <form className="w-96 flex flex-col rounded p-7 bg-blue-100  my-20 mx-60 shadow-2xl">

        {/* Amount */}
        <div className="flex flex-col mb-3">
          <label htmlFor="amount">Enter Amount</label>
          <input type={"number"} name="amount" className="py-3 px-4 my-1 outline-0 transition-all ease-in focus:border-green-300 border-2" />
        </div>
        

          {/* Currencies */}
        <div className="flex w-full justify-between my-4 border-blue-400">
          
          <div className="flex flex-col ">
            <label htmlFor="from">From</label>
            <select className="w-full py-2 px-4 my-1 border-2 outline-0 transition-all ease-in focus:border-green-300 " name="from">
              <option>CAD</option>
              <option>EUR</option>
              <option selected={true}>USD</option>
            </select>
          </div>

          <MultipleStopIcon fontSize='large' sx={{alignSelf: "center", marginTop: 3, cursor: "pointer"}} 
            className="hover:bg-white hover:bg-opacity-20 rounded-full box-content p-1.5 active:bg-opacity-10 " />

          <div className="flex flex-col">
            <label htmlFor="to">To</label>
            <select className="w-full py-2 px-4 my-1 border-2 outline-0 transition-all ease-in focus:border-green-300" name="to">
              <option selected={true}>CAD</option>
              <option>EUR</option>
              <option>USD</option>
            </select>
          </div>

        </div>


          {/* Rate */}
        <div className='mt-2'>
          <p>1000 USD = 1300 CAD</p>
        </div>


        {/* Button */}
        <div className='w-full flex justify-center py-2 mt-6 mb-4 border-4 border-transparent'>
          <button type="button" class="inline-block px-6 w-full py-2.5 bg-green-500 text-white font-medium text-xs leading-tight uppercase rounded-md shadow-md hover:bg-green-400 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out">Get Exchange Rate</button>
        </div>
        
      </form>

    </div>
  )
}

export default Form