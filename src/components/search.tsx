import React from 'react'

function Search () {
    return (
        <div className ={'flex flex-col items-center justify-center bg-gray-900 rounded-xl p-4'}>
            <div className={'flex flex-col items-center'}>
            <input className ={' rounded-xl'} type ={'text'} placeholder ={'Search'}/>
            </div>
        </div>
    )
}

export default Search