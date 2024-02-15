import React from 'react'
import RevenueCard from "./RevenueCard"
import BlueCard from './BlueCard'

function Overview() {
    const buttonValue = {
        present: "This month",
        dorpdown: ["Past month", "Past ka past Month", "past ke past ka past month"]
    }

    return (
        <div className='grid gap-6'>
            <div className='flex justify-between items-center'>
                <div className="text-xl font-medium">Overview</div>
                <div className='grid grid-flow-col items-center gap-2 h-9 pl-3.5 pr-3.5 rounded border border-black-150'>
                    <p>This Month</p>
                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.277478 0.777478C0.613814 0.441141 1.14013 0.410565 1.511 0.68575L1.61726 0.777478L6 5.15979L10.3827 0.777478C10.7191 0.441141 11.2454 0.410565 11.6163 0.68575L11.7225 0.777478C12.0589 1.11381 12.0894 1.64013 11.8142 2.011L11.7225 2.11726L6.66989 7.16989C6.33355 7.50623 5.80724 7.5368 5.43636 7.26162L5.33011 7.16989L0.277478 2.11726C-0.0924926 1.74729 -0.0924926 1.14745 0.277478 0.777478Z" fill="#4D4D4D" />
                    </svg>
                </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                <BlueCard title={"Next payout"} amount={"2,312.23"} orderCount={23} />
                <RevenueCard title={"Amount Pending"} amount={"92,312.20"} orderCount={13} />
                <RevenueCard title={"Amount Processed"} amount={"23,92,312.19"} />
            </div>
        </div>
    )
}

export default Overview