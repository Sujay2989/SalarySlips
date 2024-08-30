import React, { useState } from 'react'
import Header from './Task1'
import UserForm from './Task2'
import UserList from './Task3'

const MainApp = () => {
    const [submittedList,setSubmittedList] = useState([]);
  return (
    <div>
      <Header />
      <UserForm submittedList={submittedList} setSubmittedList={setSubmittedList} />
      <UserList submittedList={submittedList}  />
    </div>
  )
}

export default MainApp
