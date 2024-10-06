
'use client'

const page = ({params}) => {
    console.log(params)
  return (
    <div>
      <h1>Student List</h1>
      <h1>name : {params.student}</h1>
     
    </div>
  )
}

export default page