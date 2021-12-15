import axios from 'axios'
import React from 'react'

function Search () {
    //axios.get('')
    return (
        <>
        <div className ={'flex flex-col items-center justify-center bg-gray-900 rounded-xl p-4 w-80'}>
            <div className={'flex flex-col items-center'}>
            <span className='text-white pb-2'>Agora digite seu personagem favorito de Star Wars</span>
            <input className ={"border text-white border-yellow-300 bg-gray-800 focus:ring-2 focus:ring-blue-600 rounded w-full" } type ={'text'} placeholder ={'Search'}/>
            </div>
            <div className={'w-80 p-4'}>

            <button className = {`bg-yellow-300 w-full p-4  text-white font-bold py-2 px-4 rounded-xl shadow-md hover:bg-yellow-400`} 
    onClick={()=>console.log('oi')}>Próximo</button>
            </div>
            
            
        </div>
        </>
     
    )
}

export default Search