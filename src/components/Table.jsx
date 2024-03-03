import React from 'react'
import Tabletop from './Tabletop'
import { orderData } from './data'

function Table() {

    return (
        <div className='bg-white-500 px-3 pt-3 pb-2 rounded-lg grid gap-4'>
            <Tabletop />
            <div class="relative overflow-x-auto">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 ">
                    <thead class="text-xm font-medium rounded uppercase text-black-400">
                        <tr>
                            <th scope="col" class="px-6 py-3 font-medium">
                                order ID
                            </th>
                            <th scope="col" class="px-6 py-3 font-medium">
                                Status
                            </th>
                            <th scope="col" class="px-6 py-3 font-medium">
                                Transaction ID
                            </th>
                            <th scope="col" class="px-6 py-3 font-medium">
                                Refund date
                            </th>
                            <th scope="col" class="px-6 py-3 text-right font-medium">
                                Order amount
                            </th>
                        </tr>
                    </thead>
                    {orderData.map((order) => {
                        return (
                            <tbody>
                                <tr class="bg-white border-b">
                                    <th scope="row" class="px-6 py-4 font-medium text-blue-700 whitespace-nowrap">
                                        #{order.id}
                                    </th>
                                    <td class="px-6 py-4 flex items-center gap-2 text-black-600">
                                        { (order.status === "Successful") && <div className='h-2.5 w-2.5 rounded-full bg-green-500'/>}
                                        { (order.status === "Processing") && <div className='h-2.5 w-2.5 rounded-full bg-black-500'/>}
                                        { (order.status === "Failed") && <div className='h-2.5 w-2.5 rounded-full bg-red-500'/>}
                                        {order.status}
                                    </td>
                                    <td class="px-6 py-4 text-black-400">
                                        {order.transactionID}
                                    </td>
                                    <td class="px-6 py-4 text-black-400">
                                        {order.refundDate}
                                    </td>
                                    <td class="px-6 py-4 text-right text-black-600">
                                        {order.amount}
                                    </td>
                                </tr>
                            </tbody>
                        )
                    })}

                </table>
            </div>

        </div>
    )
}

export default Table
