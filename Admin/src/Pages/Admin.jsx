import React from 'react'
import Sidebar from '../components/Sidebar'
import Routing from '../Routing'
import Front from '../components/Front'
function Admin() {
  return (
    <div className='flex flex-col lg:flex-row '>
        
        <Sidebar />
        {/* <Front/> */}
        <Routing/>

    </div>
  )
}

export default Admin