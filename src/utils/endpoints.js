const BASE_URL = 'https://coinranking1.p.rapidapi.com/coins?'
const REFERENCE_CURRENCY = 'referenceCurrencyUuid='
const TIME_PERIOD = '&timePeriod='
const TIERS = '&tiers%5B0%5D=1'
const ORDER_BY = '&orderBy='
const ORDER_DIRECTION = '&orderDirection='
const LIMIT= '&limit='
const OFFSET = '&offset=0'

const API_KEY = '6b9d7a874emsh971d0bc0fb59961p139e4bjsn514e6d66d5da'
const HOST_KEY = 'coinranking1.p.rapidapi.com'
const REQUEST_OPTIONS = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': HOST_KEY,
		'X-RapidAPI-Key': API_KEY
	}
}


/*
Al tener una función con muchos parámetros podemos guardarlos dentro de un objeto, así al momento de realizar
la llamada de la función y cambiar uno de los valores usamos destructuración.
Tener en cuenta que al momento de llamar la functión ahora lo debemos hacer de esta forma
getCoins({})

*/
const getCoins = ({timePeriod='24h', referenceCurrency='yhjMzLPhuIDl', orderBy='marketCap', orderDirection='desc', limit='5'}) => (
  `${BASE_URL}${REFERENCE_CURRENCY}${referenceCurrency}${TIME_PERIOD}${timePeriod}${TIERS}${ORDER_BY}${orderBy}${ORDER_DIRECTION}${orderDirection}${LIMIT}${limit}${OFFSET}`
)

export {getCoins}
export {REQUEST_OPTIONS}