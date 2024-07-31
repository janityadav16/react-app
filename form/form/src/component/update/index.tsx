import React from "react"

interface Student {
    name: string;
    fatherName: string,
    age: number,
    standard: number,
    subject: string
    percentage?: number;
}

interface UpdateProps {
    database: Student[]
    selectedStudent: Student | null;
    handleUpdateFormSubmit: (students: Student[]) => void
}

export default function Update({ selectedStudent, database, handleUpdateFormSubmit }: UpdateProps) {
    const [physics, setPhysics] = React.useState<number>(0)
    const [chemistry, setChemistry] = React.useState<number>(0)
    const [math, setMath] = React.useState<number>(0)
    const [biology, setBiology] = React.useState<number>(0)


    const handleCalculate = () => {
        let temp = database
        temp.map((item: Student, index: number) => {
            if (item.name == selectedStudent?.name) {
                if (item.subject == "PCM") {
                    item.percentage = ((physics + chemistry + math) / 3)
                } else if (item.subject == "PCB") {
                    item.percentage = ((physics + chemistry + biology) / 3)
                }
                handleUpdateFormSubmit(temp)

            }
        })
    }
    return (
        <>
            <div>
                <>
                    <input name="Physics" type="number" placeholder="Enter Physics Mark" onChange={(e) => {
                        const value = parseInt(e.target.value)
                        setPhysics(value)
                    }} />
                    <input name="Chemistry" type="number" placeholder="Enter Chemistry Mark" onChange={(e) => {
                        const value = parseInt(e.target.value)
                        setChemistry(value)
                    }} />
                    {selectedStudent?.subject == "PCB" && (
                        <input name="Biology" type="number" placeholder="Enter Biology Mark" onChange={(e) => {
                            const value = parseInt(e.target.value)
                            setBiology(value)
                        }} />
                    )}
                    {(
                        <input name="Math" type="number" placeholder="Enter Maths Mark" onChange={(e) => {
                            const value = parseInt(e.target.value)
                            setMath(value)
                        }} />
                    )}
                    <button onClick={handleCalculate}>Calculate</button>
                </>
            </div>
        </>
    )

}