import React, { useEffect, useState } from 'react'

const Loading = ({loading}:any) =>{
   const [isLoad,setIsLoading] = useState(true);
    
   useEffect(() => {
     setIsLoading(loading);
   }, [loading])
    return (
        <>
        {isLoad ? ( <>
        <div className={'flex flex-col items-center justify-center bg-gray-900 rounded-xl p-4'}>
        <img className="p-4 animate-spin"src={"./icon.png"} />
            <div className={''}>
                <h1 className='text-white align-bottom'>Carregando...</h1>
            </div>
        </div>
        </>
        ) : null}
        </>
    )
}
export default Loading
