import { useState } from 'react'
import './App.css'
import logo from './assets/logo.png'
import coin from './assets/coin.jpg'
import cricket from './assets/banner-main.png'
import './index.css'
import Players from './Players'
import Selecteds from './Selecteds'
import footerlogo from './assets/logo-footer.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  //handle visibility of Selected section
  const [selectedIsVisible, setSelectedIsVisible] = useState(false);

  const selectedVisible = () => {
    setSelectedIsVisible(true);
  };

  const selectedNotVisible = () => {
    setSelectedIsVisible(false);
  };

  //handle visibility of Players section
  const [playersIsVisible, setPlayersIsVisible] = useState(true);

  const playersVisible = () => {
    setPlayersIsVisible(true);
  };

  const playersNotVisible = () => {
    setPlayersIsVisible(false);
  };

  const [selecteds, setSelected] = useState([])
  const [credits, setCredits] = useState(0)

  //handle adding to Selected section
  const handleChoosePlayer = player => {
    if(selecteds.length!=6){
      if(credits>=player.price){
        const playerExists = selecteds.find(selectedPlayer => selectedPlayer.name === player.name)
        if(!playerExists){
          const newSelecteds = [...selecteds, player]
          setSelected(newSelecteds)
          setCredits(credits-player.price)
        }
        else{
          toast("Cannot add player twice!", {
            position: "top-center",
            autoClose: 3000
          })
        }
      }
      else{
        toast("You do not have sufficient credits!", {
          position: "top-center",
          autoClose: 3000
        })
      }
    }
    else{
      toast("Cannot add more than 6 players!", {
        position: "top-center",
        autoClose: 3000
      })
    }
  }

  //handle claim free credit
  const handleClaimFreeCredit = () => {
    setCredits(credits + 100000)
  }

  //handle player remove button
  const handleRemove = (player) => {
    const newSelecteds = selecteds.filter(playerSelected => playerSelected.name != player.name)
    setSelected(newSelecteds)
  }

  //handle Add More Player
  const handleAddMorePlayer = () => {
    setPlayersIsVisible(true)
    setSelectedIsVisible(false)
  }

  return (
    <div>
      <nav className='flex justify-between md:mx-32 mx-10 my-5'>
        <div className='items-center'>
          <img className='w-3/4' src={logo} alt="logo" />
        </div>
        <div className='flex'>
          <ul className='flex gap-5 items-center text-lg text-slate-600 h-10 mx-5'>
            <li>Home</li>
            <li>Fixtures</li>
            <li>Teams</li>
            <li>Schedules</li>
          </ul>
          <div className='flex border rounded-lg h-12 items-center justify-around'>
            <p className='p-2'>{credits} Coin</p>
            <img className='w-12 h-10 items-center' src={coin} alt="coin" />
          </div>
        </div>
      </nav>

      <div className='hero md:mx-32 mx-10'>
        <div className='bg-[url("./assets/bg-shadow.png")] bg-black bg-cover rounded-lg mx-auto text-center text-white flex flex-col gap-5 py-5'>
          <img className='mx-auto' src={cricket} alt="" />
          <h1 className='text-4xl font-bold mx-auto'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
          <p className='text-xl mx-auto text-slate-300'>Beyond Boundaries Beyond Limits</p>
          <button className='mx-auto p-3 bg-lime-200 rounded-lg text-black' onClick={handleClaimFreeCredit}>Claim Free Credit</button>
        </div>
      </div>

      <div className='flex justify-between md:mx-32 mx-10'>
        <div>
          <h3 className='text-2xl font-semibold my-3'>{playersIsVisible? 'Available Players' : `Selected Players ${selecteds.length}/6` }</h3>
        </div>
        <div className='text-2xl font-semibold my-3 flex gap-5'>
          <button className='border rounded-lg p-2 text-center font-semibold bg-slate-100' onClick={() => {playersVisible(); selectedNotVisible()}}>Available</button>
          <button className='border rounded-lg p-2 text-center font-semibold bg-slate-100' onClick={() => {playersNotVisible(); selectedVisible()}}>Selected ({selecteds.length})</button>
        </div>
      </div>

      <div>
        {playersIsVisible && <Players handleChoosePlayer={handleChoosePlayer}></Players>}
        {selectedIsVisible && <Selecteds selecteds={selecteds} handleRemove={handleRemove}></Selecteds>}
        {selectedIsVisible && 
          <div>
            <button onClick={handleAddMorePlayer} className="md:mx-32 mx-10 col-span-1 border rounded-lg p-2 text-center font-semibold bg-lime-200">Choose Player</button>
          </div>
        }
        <ToastContainer/>
      </div>

      <div className='bg-white border md:mx-32 my-5 mx-10 bg-[url("./assets/bg-shadow.png")] bg-cover rounded-2xl text-center flex flex-col gap-5 py-5'>
        <h1 className='text-2xl font-bold mx-auto'>Subscribe to our Newsletter</h1>
        <p className='text-lg mx-auto'>Get the latest updates and news right in your inbox!</p>
        <div className='flex gap-3 justify-center'>
          <input className='rounded-lg border p-3' type="text" placeholder="Enter Your Email"/>
          <input className='rounded-lg border p-3 bg-lime-200' type="submit" value="Subscribe"/>
        </div>
      </div>

      <footer className='md:px-32 px-10 py-10 bg-black text-slate-300'>
        <img className='mx-auto' src={footerlogo} alt="Logo"/>
        <div className='md:grid grid-cols-3 gap-10'>
          <div className='col-span-1 md:pr-20 my-8 flex flex-col gap-3'>
            <h2 className='text-white'>About Us</h2>
            <p>We are a passionate team dedicated to providing the best services to our customers.</p>
          </div>
          <div className='col-span-1 my-8 flex flex-col gap-3'>
            <h2 className='text-white'>Quick Links</h2>
            <ul className='grid gap-2'>
              <li>Home</li>
              <li>Services</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className='col-span-1 my-8 flex flex-col gap-3'>
            <h2 className='text-white'>Subscribe</h2>
            <p>Subscribe to our newsletter for the latest updates.</p>
            <div className='flex gap-3 justify-left'>
              <input className='rounded-lg border p-2' type="text" placeholder="Enter Your Email"/>
              <input className='rounded-lg border p-2 bg-lime-200 text-black' type="submit" value="Subscribe"/>
            </div>
          </div>
        </div>
        <hr/>
        <p className='text-center text-slate-300 text-sm m-5'>@2024 Dream 11 Cricket All Rights Reserved.</p>
      </footer>
    </div>
  )
};

export default App
