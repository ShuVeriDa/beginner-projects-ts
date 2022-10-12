import React, {ChangeEvent, useEffect, useState} from 'react';
import {Users} from './components/Users/Users';
import './UsersInvite.scss';
import {Success} from "./components/Success";

// Тут список пользователей: https://reqres.in/api/users

export type UsersType = {
  avatar: string
  email: string
  first_name: string
  id: number
  last_name: string
}

export const UsersInvite = () => {
  const [users, setUsers] = useState<UsersType[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [searchValue, setSearchValue] = useState('')
  const [invites, setInvites] = useState<number[]>([])
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    fetch('https://reqres.in/api/users')
      .then(res => res.json())
      .then(res => setUsers(res.data))
      .catch((error) => {
          console.warn(error)
          alert('Ошибка при получении данных')
        }
      )
      .finally(() => setIsLoading(false))
  }, [])

  console.log(searchValue)

  const onChangeSearchValue = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.currentTarget.value)
  }

  const onClickInvites = (id: number) => {
    if (invites.includes(id)) {
      setInvites(prev => prev.filter(_id  => _id !== id))
    } else {
      setInvites(prev => [...prev, id])
    }
  }

  const onClickInvite = () => {
    setSuccess(true)
  }
  console.log(invites)

  return (
    <div className="App">

      {success
        ? <Success count={invites.length}/>
        : <Users items={users}
                 isLoading={isLoading}
                 searchValue={searchValue}
                 onChangeSearchValue={onChangeSearchValue}
                 invites={invites}
                 onClickInvites={onClickInvites}
                 onClickInvite={onClickInvite}
        />
      }

    </div>
  );
}