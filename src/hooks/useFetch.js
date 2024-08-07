import { useEffect, useState } from "react"

export const useFetch = (url) => {
    const [data, setData] = useState([])
    const [load, setLoading] = useState(true)
    const [error, setError] = useState(null)
    
    useEffect(() => {
        const fecthData = async () => {
            try {
                const res = await fetch(url)
                if(!res.ok){
                    throw new Error(`HTTP error, status: ${res.status}`)
                }

                const result = await res.json()
                setData(result)
                setLoading(false)
            } catch (error) {
                console.log('Error fetching data:', error)
                setError(error.message)
                setLoading(false)
            }
        }

        fecthData()
    }, [url])

    return {data, load, error, setLoading, setData, setError}
}
