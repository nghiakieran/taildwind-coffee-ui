import React from 'react'
function SubHeadLine({ children }) {
  return (
    <div className='lcn-subHeadline'>
      <div className='lcn-subHeadline-deco-line w-8 h-px bg-gray-200'></div>
      <div className='lcn-subHeadline-label'>{children}</div>
      <div className='lcn-subHeadline-deco-line w-8 h-px bg-gray-200'></div>
    </div>
  )
}

export default SubHeadLine
