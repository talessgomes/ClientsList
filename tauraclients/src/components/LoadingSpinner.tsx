import React from 'react';

const LoadingSpinner = () => {
    return (
        <div className='flex justify-center items-center py-20'>
            <div className='w-12 h-12 rounded-full animate-spin
            border-4 border-solid border-blue-500 border-t-transparent
            dark:border-4 dark:border-blue-400 dark:border-t-transparent
            '>

            </div>
        </div>

    )
}

export default LoadingSpinner;