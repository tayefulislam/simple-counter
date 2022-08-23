import React from 'react';
// import { useState } from 'react';

const Counter = () => {

    // const [count, setCount] = useState(0);
    // console.log(count)



    // const increment = () => {
    //     setCount((preCount) => preCount + 1)
    // }


    // const decrement = () => {
    //     setCount((preCount) => preCount - 1)
    // }



    return (
        <div>

            <div class="w-screen p-10 bg-gray-100 text-slate-700">

                <h1 class="max-w-md mx-auto text-center text-2xl font-bold">
                    Simple Counter Application
                </h1>

                <div class="max-w-md mx-auto mt-10 space-y-5">
                    <div
                        class="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow"
                    >
                        <div class="text-2xl font-semibold">{count}</div>
                        <div class="flex space-x-3">
                            <button
                                class="bg-indigo-400 text-white px-3 py-2 rounded shadow"
                                onClick={increment} >
                                Increment
                            </button>
                            <button
                                onClick={decrement}
                                class="bg-red-400 text-white px-3 py-2 rounded shadow"
                            >
                                Decrement
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Counter;