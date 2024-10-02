import React from 'react'

const tabs = () => {
  return (
    <div className='mx-7 flex flex-col justify-center mt-6 gap-3'>
        <h2 className='text-white text-2xl font-semibold'>Tasks</h2>
      <div className='flex text-white justify-center gap-2'>
        <button className='tabsbtn rounded-l-md'>All</button>
        <button className='tabsbtn'>Done</button>
        <button className='tabsbtn rounded-r-md'>Todos</button>
      </div>
      <div id='all'>
        {/*all tasks */}
      </div>
      <div id='done'>
        {/*tasks done*/}
      </div>
      <div id='todos'>
        {/*tasks todo */}
      </div>
    </div>
  )
}

export default tabs
