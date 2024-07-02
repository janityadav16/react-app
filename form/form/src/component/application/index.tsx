import React from "react"

interface Student {
    name: string;
    fatherName: string,
    age: number,
    standard: number,
    subject: string
    percentage?: number;
}

interface ApplicationProps {
    handleApplicationFormSubmit: (student: Student) => void
}
export default function Application({ handleApplicationFormSubmit }: ApplicationProps) {
    const [name, setName] = React.useState<string>("")
    const [fatherName, setFatherName] = React.useState<string>("")
    const [age, setAge] = React.useState(0)
    const [standard, setStandard] = React.useState(0)
    const [subject, setSubject] = React.useState<string>("")

    const handleChangeName = (e: any) => setName(e.target.value)
    const handleChangeFatherName = (e: any) => setFatherName(e.target.value)
    const handleChangeAge = (e: any) => setAge(e.target.value)
    const handleChangeStandard = (e: any) => setStandard(e.target.value)
    const handleChangeSubject = (e: any) => setSubject(e.target.value)


    const handleSubmit = () => {
        handleApplicationFormSubmit({
            name: name,
            fatherName: fatherName,
            age: age,
            standard: standard,
            subject: subject
        })
    }

    return (
        <>
            <div>
                <h1>Admission Form</h1>
                <input name="name" type="text" placeholder="Enter your name" onChange={handleChangeName} />
                <input name="Father name" type="text" placeholder="Enter your Father name" onChange={handleChangeFatherName} />
                <input name="age" type="number" placeholder="Enter your age" onChange={handleChangeAge} />
                <input name="Standard" type="number" placeholder="Enter your Standard" onChange={handleChangeStandard} />
                <input name="subject" type="text" placeholder="Enter your subject" onChange={handleChangeSubject} />
                <button onClick={handleSubmit} className="text-red-500">Submit</button>
            </div>
        </>
    )

}