import React from "react";

function BlueCard({ title, orderCount, amount }) {
    return (
        <div className="rounded overflow-hidden text-white-500">

            <div className="bg-white shadow-custom p-5 grid gap-y-4 bg-blue-700 hover:bg-blue-750">
                <div className="flex items-center">
                    {title}
                    <div className="pl-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                        </svg>
                    </div>
                </div>

                <div className="flex justify-between items-center">

                    <div className="font-semibold text-3xl">₹ {amount}</div>

                    {orderCount && (
                        <div className="flex cursor-pointer">
                            <div className="underline">
                                {orderCount} orders
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg>

                        </div>
                    )}
                </div>
            </div>
            <div className="text-sm bg-blue-900 flex justify-between py-2 px-6">
                <div>Next payout date:</div>
                <div>Today, 04:00 PM</div>
            </div>
        </div>
    );
}

export default BlueCard;
