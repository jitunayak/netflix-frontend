import React from 'react'
import { useNavigate } from 'react-router-dom'

/**
 *
 * @param {string[]} param0
 * @returns
 */
export default function Menu({ menuItems }) {

    // const [currentSelection, setCurrentSelection] = React.useState(null);

    const navigate = useNavigate();
    return (
        <div className='absolute flex-col bg-white'>
            {menuItems.map((item, index) => {
                return (
                    <div onClick={() => navigate(`/${item.toLowerCase()}`)} key={index} className='py-2 px-6 text-zinc-900 first:border-t-0 border-t-2  text-sm' >
                        {item}
                    </div>
                )
            })
            }
        </div>
    )
}
