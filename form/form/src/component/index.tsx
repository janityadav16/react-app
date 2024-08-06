import React from "react";
import Login from "./login";
import Application from "./application";
import Table from "./table";
import Update from "./update";


interface Student {
    name: string;
    fatherName: string,
    age: number,
    standard: number,
    subject: string
    percentage?: number;
}

export default function Form() {
    const [isAuth, setIsAuth] = React.useState<boolean>(false)
    const [database, setDatabase] = React.useState<Student[]>([])
    const [selectedStudent, setSelectedStudent] = React.useState<Student | null>(null)


    // React.useEffect(() => {
    //     console.log(database)
    //     if (database.length == 0) {
    //         let data = localStorage.getItem("database") || `[]`
    //         if (data) {
    //             setDatabase(JSON.parse(data))
    //         }
    //     }
    //     localStorage.setItem("database", JSON.stringify(database))
    // }, [database])



    const handleApplicationFormSubmit = (student: Student) => {
        console.log(student, "===>")
        let temp = database;
        temp.push(student)
        setDatabase(temp)
        setSelectedStudent(null)
    }

    const handleUpdateFormSubmit = (students: Student[]) => {
        setDatabase(students)
        setSelectedStudent(null)
    }


    return (
        <>
            <div className="bg-black border-4 border-cyan-500 min-h-screen">
                {!isAuth && (<Login setIsAuth={setIsAuth} />)}
                {isAuth && (
                    <>
                        {!selectedStudent && (
                            <>
                                <Application handleApplicationFormSubmit={handleApplicationFormSubmit} />
                                <Table database={database} setSelectedStudent={setSelectedStudent} />
                            </>
                        )}
                        {selectedStudent && (
                            <Update database={database} selectedStudent={selectedStudent} handleUpdateFormSubmit={handleUpdateFormSubmit} />
                        )}
                    </>
                )}
            </div>
        </>
    );
}