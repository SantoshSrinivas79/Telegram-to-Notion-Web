const getTemporalToken = () => {

    const url_string = window.location.href
    console.log(url_string)

    const url = new URL(url_string)

    const temporalToken = url.searchParams.get('code')
    console.log(temporalToken)

    return temporalToken
}

export default getTemporalToken
