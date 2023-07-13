import React from 'react'

function Button(props) {
    const { color } = props;
    return (
        <div>

            <button type="button" className={`focus:outline-none text-white  bg-${color}-700 hover:bg-${color}-800 focus:ring-4 focus:ring-${color}-300 font-medium rounded-lg text-sm px-3 py-1.5 mr-1 mb-1 dark:bg-${color}-600 dark:hover:bg-${color}-700 dark:focus:ring-${color}-800`}>Payment</button>

        </div>
    )
}

export default Button