import React from 'react'

function Transactions() {
  return (
  <div className='flex flex-col gap-6'>
    <div>
        <p className='text-xl font-medium'>Transactions | This Month</p>
    </div>
    <div className='flex gap-3 text-sm'>
      <span className='bg-black-200 rounded-2xl text-black-300 py-1.5 px-4'>Payouts (22)</span>
      <span className='bg-blue-700 rounded-2xl text-white-500 py-1.5 px-4'>Refunds (6)</span>
    </div>
  </div>
  )
}

export default Transactions