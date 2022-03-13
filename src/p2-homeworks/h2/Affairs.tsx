import React, {Dispatch, SetStateAction} from "react";
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import s from "./Affairs.module.css"

type AffairsPropsType = {
    // need to fix any
    data: Array<AffairType>;
    setFilter: Dispatch<SetStateAction<FilterType>>;
    deleteAffairCallback: (_id: number) => void;
    filter: FilterType
};

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))


    const setFilterValue = (value: FilterType) => {
        props.setFilter(value)

    };

    const ClassName = (filter: FilterType) => {
        return `${props.filter === filter ? s[filter] : ''} + ${s.affairs_btn}`

    }


    // const setAll = () => props.setFilter("all") // need to fix
    // const setHigh = () => props.setFilter("high")
    // const setMiddle = () => props.setFilter("middle")
    // const setLow = () => props.setFilter("low")

    return (
        <div>

            {mappedAffairs}

            <button value="all" onClick={() => setFilterValue("all")}
                    className={ClassName("all")}>All
            </button>
            <button onClick={() => setFilterValue("high")}
                    className={ClassName("high")}>High
            </button>
            <button onClick={() => setFilterValue("middle")}
                    className={ClassName("middle")}>Middle
            </button>
            <button onClick={() => setFilterValue("low")}
                    className={ClassName("low")}>Low
            </button>
        </div>
    )
}

export default Affairs
