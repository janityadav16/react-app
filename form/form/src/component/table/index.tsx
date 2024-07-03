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

        <div className="bg-cyan-500 min-h-screen max-h-screen">
            <table className="flex justify-center items-center  text-white mt-0">
                <tr className="bg-cyan-500 text-white min-h-screen" >
                    <td className="border border-black border-2 text-black bg-gray-600 px-4 py-2">Name</td>
                    <td className="border border-black border-2 text-black bg-gray-600 px-4 py-2">Father name</td>
                    <td className="border border-black border-2 text-black bg-gray-600 px-4 py-2">Age</td>
                    <td className="border border-black border-2 text-black bg-gray-600 px-4 py-2">Standard</td>
                    <td className="border border-black border-2 text-black bg-gray-600 px-4 py-2">Subject</td>
                    <td className="border border-black border-2 text-black bg-gray-600 px-4 py-2">Percentage</td>
                    <td className="border border-black border-2 text-black bg-gray-600 px-4 py-2">Action</td>
                </tr>
                {database.map((d: Student, index: number) => {
                    return (
                        <tr className="bg-cyan-500 text-white min-h-screen">
                            <td className="border border-black border-2 text-black bg-gray-600 px-4 py-2">{d.name}</td>
                            <td className="border border-black border-2 text-black bg-gray-600 px-4 py-2">{d.fatherName}</td>
                            <td className="border border-black border-2 text-black bg-gray-600 px-4 py-2">{d.age}</td>
                            <td className="border border-black border-2 text-black bg-gray-600 px-4 py-2">{d.standard}</td>
                            <td className="border border-black border-2 text-black bg-gray-600 px-4 py-2">{d.subject}</td>
                            <td className="border border-black border-2 text-black bg-gray-600 px-4 py-2">{d.percentage ? d.percentage : "NA"}</td>
                            <td className="border border-black border-2 text-black bg-gray-600 px-4 py-2"><button> Delete</button> <button onClick={() => setSelectedStudent(d)}> Grade</button></td>
                        </tr>
                    )
                })}
            </table>
        </div>

    )

}