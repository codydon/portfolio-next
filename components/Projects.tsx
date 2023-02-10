import React from 'react'

export default function Projects() {
  return (
    <>
    <div className='text-2xl font-mono font-semibold py-4' >Projects</div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
  <div className="p-6 bg-white rounded-lg shadow-lg">
    <h3 className="text-xl font-medium mb-2">Card 1</h3>
    <p className="text-gray-700">Content for card 1</p>
  </div>
  <div className="p-6 bg-white rounded-lg shadow-lg">
    <h3 className="text-xl font-medium mb-2">Card 2</h3>
    <p className="text-gray-700">Content for card 2</p>
  </div>
  <div className="p-6 bg-white rounded-lg shadow-lg">
    <h3 className="text-xl font-medium mb-2">Card 3</h3>
    <p className="text-gray-700">Content for card 3</p>
  </div>
  {/* <!-- Add additional cards here --> */}
</div>

    </>
  )
}
