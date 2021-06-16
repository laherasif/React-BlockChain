
import React, { useState } from 'react'


function useAsync(params) {
    const [state, setstate] = useState({
        pending: false,
        error: null,
        data: null
    })
    function call(params) {
        setstate((state) => ({
            ...state,
            pending: true,
            data: null,
            error: null
        }))
        console.log("parr", params);
        
        
    }



    console.log("params ", params);

    return { call, ...state }
}

export default useAsync
