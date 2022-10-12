import React, {useEffect, useState} from 'react';
import { Block } from './Block';
import './index.scss';
import axios from "axios";

//https://cdn.cur.su/api/latest.json
export type RatesType = {
  [key: string]: number
}

function App() {
  const [fromCurrency, setFromCurrency] = useState("RUB")
  const [toCurrency, setToCurrency] = useState("USD")
  const [fromPrice, setFromPrice] = useState(0)
  const [toPrice, setToPrice] = useState(0)

  const [rates, setRates] = useState<RatesType>({})

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('https://cdn.cur.su/api/latest.json')
        setRates(res.data)
      }
      catch (error) {
        console.warn(error)
        alert('Не удалось получить валюты')
      }
    }
    fetchData()
  }, [])

  const onChangeFromPrice = (value: number) => {
    const price = value / rates[toCurrency]
    const result = price * rates[toCurrency]
    setToPrice(result)
    setFromPrice(value)
  }

  const onChangeToPrice = (value: number) => {
    const result = (rates[fromCurrency] / rates[toCurrency]) * value
    setFromPrice(result)
    setToPrice(value)
  }

  console.log(rates)

  return (
    <div className="App">
      <Block value={fromPrice} currency={fromCurrency} onChangeCurrency={setFromCurrency} onChangeValue={onChangeFromPrice} />
      <Block value={toPrice} currency={toCurrency} onChangeCurrency={setToCurrency} onChangeValue={onChangeToPrice} />
    </div>
  );
}

export default App;
