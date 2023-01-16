import React from 'react'
import Student from './Student';

const MapAndListEx = () => {
    const students = [
        {
            id: 100,
            name: "Asit",
            status: "passed"
        },
        {
            id: 101,
            name: "Nitish",
            status: "failed"
        },
        {
            id: 103,
            name: "Harish",
            status: "passes"
        }

    ]
  return (
    students.map((stu) =><Student key={stu.id} stu1={stu}/> )
  )
}

export default MapAndListEx;