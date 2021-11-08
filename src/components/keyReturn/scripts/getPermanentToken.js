const getPermanentToken = async (temporalToken, clientID) => {

    const url = 'https://api.notion.com/v1/oauth/token'
    const body = {

        "grant_type": "authorization_code",
        "code": temporalToken,
        "redirect_uri": "https://telegram-to-notion-web.netlify.app/build/"
    }
    const headers = {

        "Content-Type": "application/json",
        "Authorization": `Basic ${clientID}`,
        "Access-Control-Allow-Origin": 'https://api.notion.com/v1/oauth/token'
    }

    try {

        const response = await fetch(url, {

            method: 'POST',
            headers: headers,
            body: JSON.stringify(body)

        })

        const data = await response.json()

        console.log(data)
        
    } catch (error) {

        console.log(error)        
    }
}

export default getPermanentToken
