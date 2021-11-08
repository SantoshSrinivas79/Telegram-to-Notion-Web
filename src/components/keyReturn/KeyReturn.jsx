import React from 'react'
import getClientID from './scripts/getClientID'
import getPermanentToken from './scripts/getPermanentToken'
import getTemporalToken from './scripts/getTemporalToken'

const KeyReturn = () => {

    const getData = async () => {

        const temporalToken = getTemporalToken()
        const clientID = await getClientID()

        await getPermanentToken(temporalToken, clientID)
    }

    React.useEffect(() => {

        getData()
    
    }, [])

    return (
        <div>
            
        </div>
    )
}

export default KeyReturn
