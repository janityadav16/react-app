import React from "react"

interface Student {
    name: string;
    fatherName: string,
    age: number,
    standard: number,
    subject: string
    percentage?: number;
}

interface TableProps {
    database: Student[];
    setSelectedStudent: (value: Student | null) => void
}
export default function Table({ database, setSelectedStudent }: TableProps) {


    return (
        <>
            <table className="border-solid border-2 border-black text-red-500">
                <tr className=" text-amber-800" >
                    <td className="border border-gray-300 px-4 py-2">Name</td>
                    <td className="border border-gray-300 px-4 py-2">Father name</td>
                    <td className="border border-gray-300 px-4 py-2">Age</td>
                    <td className="border border-gray-300 px-4 py-2">Standard</td>
                    <td className="border border-gray-300 px-4 py-2">Subject</td>
                    <td className="border border-gray-300 px-4 py-2">Percentage</td>
                    <td className="border border-gray-300 px-4 py-2">Action</td>
                </tr>
                {database.map((d: Student, index: number) => {
                    return (
                        <tr className="text-amber">
                            <td className="border border-gray-300 px-4 py-2">{d.name}</td>
                            <td className="border border-gray-300 px-4 py-2">{d.fatherName}</td>
                            <td className="border border-gray-300 px-4 py-2">{d.age}</td>
                            <td className="border border-gray-300 px-4 py-2">{d.standard}</td>
                            <td className="border border-gray-300 px-4 py-2">{d.subject}</td>
                            <td className="border border-gray-300 px-4 py-2">{d.percentage ? d.percentage : "NA"}</td>
                            <td className="border border-gray-300 px-4 py-2"><button> Delete</button> <button onClick={() => setSelectedStudent(d)}> Grade</button></td>
                        </tr>
                    )
                })}
            </table>
        </>
    )

}