import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Collection} from "./Collection";

import './index.scss';

const categories = [
  {name: "Все"},
  {name: "Море"},
  {name: "Горы"},
  {name: "Архитектура"},
  {name: "Города"}
]

type ImagesType = {
  category: number
  name: string
  photos: string[]
}

function App() {
  const [images, setImages] = useState<ImagesType[]>([])
  const [choose, setChoose] = useState<number>(0)
  const [isLoading, setLoading] = useState<boolean>(true)
  const [searchValue, setSearchValue] = useState('')
  const [page, setPage] = useState(1)

  const categoryId = choose > 0 ? choose : ''

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const res = await axios.get(`https://630a32f93249910032824d12.mockapi.io/photos?page=${page}&limit=3&category=${categoryId}`)
        setImages(res.data)
      } catch (error) {
        console.warn(error)
        alert('Не удалось получить фотографии')
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [choose, page])

  console.log(searchValue)

  return (
    <div className="App">
      <h1>Моя коллекция фотографий</h1>
      <div className="top">
        <ul className="tags">
          {categories.map((cat, i) => {
            return <li key={cat.name}
                       className={choose === i ? 'active' : ''}
                       onClick={() => setChoose(i)}>
              {cat.name}
            </li>
          })}
        </ul>
        <input value={searchValue} onChange={(e) => setSearchValue(e.currentTarget.value)} className="search-input"
               placeholder="Поиск по названию"/>
      </div>
      <div className="content">
        {isLoading
          ? <h2>Идет загрузка ... </h2>
          : images.filter(obj => obj.name.toLowerCase().includes(searchValue.toLowerCase()))
            .map((obj, i) => <Collection key={i} name={obj.name} images={obj.photos}/>)
        }
      </div>
      <ul className="pagination">
        {[...Array(5)].map((_, i) => <li key={i}
                                           onClick={() => setPage(i + 1)}
                                           className={page === i + 1 ? "active" : ''}
        >
          {i + 1}
        </li>)
        }
      </ul>
    </div>
  );
}

export default App;
