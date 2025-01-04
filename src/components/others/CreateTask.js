import React from 'react'

const CreateTask = () => {
  return (
    <div class=" flex items-center w-1/2 mx-6  ">
  <div class="w-full max-w-md p-6  border border-gray-700 rounded-lg shadow-lg shadow-gray-600 border-none">
    <h1 class="text-2xl font-bold text-black mb-6">Create Task</h1>
    
    {/* <!-- Task Title --> */}
    <div class="mb-4">
      <label for="task-title" class="block text-sm font-medium text-black mb-1">Task Title</label>
      <input
        type="text"
        id="task-title"
        placeholder="E.g., UI Design"
        class="w-full px-4 py-2 text-sm  text-black border border-gray-600 placeholder:text-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
    
    {/* <!-- Description --> */}
    <div class="mb-4">
      <label for="description" class="block text-sm font-medium text-black mb-1">Description</label>
      <textarea
        id="description"
        placeholder="Detailed description of the task (Max 500 words)"
        rows="4"
        class="w-full px-4 py-2 text-sm  text-black border placeholder:text-gray-500 border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      ></textarea>
    </div>
    
    {/* <!-- Date --> */}
    <div class="mb-4">
      <label for="date" class="block text-sm font-medium text-black mb-1">Date</label>
      <input
        type="date"
        id="date"
        class="w-full px-4 py-2 text-sm placeholder:text-gray-500 text-gray-400 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
    
    {/* <!-- Assign To --> */}
    <div class="mb-4">
      <label for="assign-to" class="block text-sm font-medium text-black mb-1">Assign To</label>
      <input
        type="text"
        id="assign-to"
        placeholder="Person responsible"
        class="w-full px-4 py-2 text-sm  text-black border placeholder:text-gray-500 border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
    
    {/* <!-- Category --> */}
    <div class="mb-6">
      <label for="category" class="block text-sm font-medium text-black mb-1">Category</label>
      <input
        type="text"
        id="category"
        placeholder="E.g., Design, Development, etc."
        class="w-full px-4 py-2 text-sm  text-black border placeholder:text-gray-500 border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
    
    {/* <!-- Create Task Button --> */}
    <button
      type="submit"
      class="w-full px-4 py-2 text-sm font-medium text-white placeholder:text-gray-500 bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      Create Task
    </button>
  </div>
</div>
  )
}

export default CreateTask
