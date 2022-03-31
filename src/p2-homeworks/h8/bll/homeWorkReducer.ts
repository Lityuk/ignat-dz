import {initialStateType} from "../HW8"


type SortActionType = {
    type: string,
    payload: string,
}

type CheckActionType = {
    type: string,
    payload: number
}

type ActionType = SortActionType | CheckActionType

export const homeWorkReducer = (state: Array<initialStateType>, action: ActionType): Array<initialStateType> => { // need to fix any
    switch (action.type) {
        case 'sort': {

            return action.payload === "up"
                ? [...state].sort((a, b) => a.name >= b.name ? 1 : -1)
                : [...state].sort((a, b) => a.name >= b.name ? -1 : 1)

        }
        case 'check': {
            return state.filter(f => f.age >= action.payload)
        }
        default:
            return state
    }
}


const sortAC = (payload: string): SortActionType => {
    return {type: 'sort', payload}
}

const checkAC = (payload: number): CheckActionType => {
    return {type: 'check', payload,}
}