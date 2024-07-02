import { useState, useEffect } from "react";

export default function Calculator() {
    const [physics, setPhysics] = useState<number>(0)
    const [chemistry, setChemistry] = useState<number>(0)
    const [maths, setMaths] = useState<number>(0)

    const [percent, setPercent] = useState<number>(0)

    const handleChangePhysics = (e: any) => {
        let integer = parseInt(e.target.value)
        if (integer <= 100) {
            setPhysics(integer)
        } else {
            setPhysics(100)
        }

    }
    const handleChangeChemistry = (e: any) => {
        let integer = (e.target.value)
        if (integer <= 100) {
            setChemistry(integer)
        }
        else {
            setChemistry(100)
        }
    }
    const handleChangeMaths = (e: any) => {
        let integer = (e.target.value)
        if (integer <= 100) {
            setMaths(integer)
        }
        else {
            setMaths(100)
        }
        setMaths(parseInt(e.target.value))
    }
    //TODO?/ 

    return (
        <div>
            <h1>Calculator</h1>
            <input name="physics" type="number" placeholder="Marks" onChange={handleChangePhysics} /> {physics}
            <input name="chemistry" type="number" placeholder="Marks" onChange={handleChangeChemistry} />{chemistry}
            <input name="maths" type="number" placeholder="Marks" onChange={handleChangeMaths} />{maths}
            <button onClick={() => {
                const sum = physics + chemistry + maths;
                const percentage = sum / 3;
                setPercent(percentage)
            }}>Enter</button>

            <p> Result : {percent}</p>
        </div>
    );
}

