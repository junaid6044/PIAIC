import React from 'react';
import { contactTypes } from '../types/CommonTypes';


export default function DisplayContact(props:{contactData: contactTypes[]}) {
  return (
    <div className="inline-block min-w-full shadow-md rounded-lg overflow-hidden mb-8">
      <table className="min-w-full leading-normal">
        <thead>
          <tr className="bg-gray-300">
            <th className="px-5 py-6 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
              Name
            </th>
            <th className="px-5 py-6 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
              Email
            </th>
            <th className="px-5 py-6 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
              Phone
            </th>
            <th className="px-5 py-6 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
              Message
            </th>
          </tr>
        </thead>
        <tbody>
          {props.contactData.map((item, index) => {
              return (
                <React.Fragment key={index}>
                  <tr className={"bg-gray-100"}>
                    <td className="px-5 py-5 border-b border-gray-200 text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">{item.name}</p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">{item.email}</p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">{item.phone}</p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">{item.message}</p>
                    </td>
                  </tr>
                </React.Fragment>
              )
            })}
        </tbody>
      </table>
    </div>
  )
}