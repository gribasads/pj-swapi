import axios from 'axios'
import React from 'react'

function Search () {
    //axios.get('')
    return (
        <div className ={'flex flex-col items-center justify-center bg-gray-900 rounded-xl p-4 w-80'}>
            <div className={'flex flex-col items-center'}>
            <span className='text-white'>Agora digite seu personagem favorito de Star Wars</span>
            <input className ={"border text-white border-yellow-300 bg-gray-800 focus:ring-2 focus:ring-blue-600 rounded-xl w-full" } type ={'text'} placeholder ={'Search'}/>
            </div>
        </div>
    )
}

export default Search