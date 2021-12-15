import react, { useState } from 'react';
import Loading from './loading';


export default function Inicial() {
  const [email, setEmail] = useState(null);
  const [loading, setLoading] = useState(false);

  function handleVerify(event:any) {
    event.preventDefault();
    const getEmail = event.target.value;
    const emailFormat = getEmail.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i); ;
    setEmail(emailFormat);
  }

  function goToSearch() {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }
 
return (
  <>
  <img className="p-4"src={"./logo.png"} />
  {loading?<Loading loading={loading}/>  : (
    <div className="flex flex-col items-center justify-center bg-gray-900 rounded-xl p-4">
  <div >
    <div className="text-xl font-medium text-white">Olá!</div>
    <p className="text-white">Para Começar seu teste, digite um e-mail</p>
    <input required type="email" className="border text-white border-yellow-300 bg-gray-800 focus:ring-2 focus:ring-blue-600 rounded-xl w-full" onChange={handleVerify}placeholder="exemplo@exemplo.com" />
    &nbsp;
    <button className = {email ?`bg-yellow-300 w-full p-4 text-white font-bold py-2 px-4 rounded-xl shadow-md hover:bg-yellow-400` :
    `bg-gray-600 w-full p-4 text-white font-bold py-2 px-4 rounded-xl shadow-md opacity-25 cursor-not-allowed pointer-events-none`} 
    onClick={goToSearch}>Próximo</button>
  </div>
</div>
  ) }
  

  </>

);
}