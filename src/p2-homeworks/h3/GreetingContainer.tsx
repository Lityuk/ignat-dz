import React, {ChangeEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from './HW3'

type GreetingContainerPropsType = {
    users: Array<UserType> // need to fix any
    addUserCallback: (name: string) => void // need to fix any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string>('') // need to fix any
    const [disabled, setDisabled] = useState<boolean>(false) // need to fix any


    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any
        setName(e.currentTarget.value) // need to fix
        setDisabled(false)
    }

    const addUser = () => { // need to fix
        const nameTrim = name.trim();

        if (nameTrim.length !== 0) {
            setError('')
            addUserCallback(nameTrim)
            alert(`Hello ${nameTrim}`)
            setName('')
        } else {
            setError('The name is incorrect!')
            setDisabled(true);
        }
    }

    const totalUsers = users.length // need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            totalUsers={totalUsers}
            error={error}
            disabled={disabled}
        />
    )
}

export default GreetingContainer
