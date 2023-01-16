import React from 'react'

const Student = ({stu1}) => {
  return (
    <div>
        <h1 key={stu1.id}>Id: {stu1.id}, Name: {stu1.name}, Is Passed: {stu1.status}</h1>
    </div>
  )
}

export default Student;