import React from 'react'

export default function AdminCreate() {
  return (
    <>
<div className="mt-10 sm:mt-0 justify-center">
  <div className="md:grid-8 md:grid-cols-3 md:gap-6 mx-20">
    <div className="mt-5 md:col-span-2 md:mt-0">
    <h1 className='font-black my-3 text-center'>Create Profiles</h1>    
      <form action="#" method="POST">
        <div className="overflow-hidden shadow sm:rounded-md border-indigo-500">
          <div className="bg-white px-4 py-5 sm:p-6">
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <label for="name" className="block text-sm font-medium text-gray-700">name</label>
                <input type="text" name="name" id="name" autocomplete="given-name" className="mt-1 block w-full rounded-md border-indigo-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"/>
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label for="Password" className="block text-sm font-medium text-gray-700">Password</label>
                <input type="Password" name="Password" id="Password" autocomplete="given-name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"/>
              </div>
              <div className="col-span-6 sm:col-span-4">
                <label for="email-address" className="block text-sm font-medium text-gray-700">Email address</label>
                <input type="text" name="email-address" id="email-address" autocomplete="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"/>
              </div>

              <div className="col-span-6">
                <label for="country" className="block text-sm font-medium text-gray-700">Role</label>
                <select id="country" name="country" autocomplete="country-name" className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                  <option>Teacher</option>
                  <option>Student</option>
                  <option>Parent</option>
                </select>
              </div>

              <div className="col-span-4">
                <label for="street-address" className="block text-sm font-medium text-gray-700">Date of birth</label>
                <input type="date" name="street-address" id="street-address" autocomplete="street-address" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"/>
              </div>
              <div className="col-span-6">
                <label for="country" className="block text-sm font-medium text-gray-700">Subjects</label>
                <select id="country" name="country" autocomplete="country-name" className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                  <option>Teacher</option>
                  <option>Student</option>
                  <option>Parent</option>
                </select>
                {/* {load from database} */}
              </div>
              <div className="col-span-8 ">
<div class="main flex border rounded-full overflow-hidden m-4 select-none">
  <div class="title py-3 my-auto px-5 bg-blue-500 text-white text-sm font-semibold mr-3">Gender</div>
  <label class="flex radio p-2 cursor-pointer">
    <input class="my-auto transform scale-125" type="radio" name="sfg" />
    <div class="title px-5">male</div>
  </label>

  <label class="flex radio p-2 cursor-pointer">
    <input class="my-auto transform scale-125" type="radio" name="sfg" />
    <div class="title px-5">female</div>
  </label>
</div>
              </div>

         </div>
          </div>
          <div className="shadow sm:overflow-hidden sm:rounded-md">
          <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
            <div className="grid grid-cols-3 gap-6">
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Profile photo</label>
              <div className="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                <div className="space-y-1 text-center">
                  <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                    <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  <div className="flex text-sm text-gray-600">
                    <label for="file-upload" className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500">
                      <span>Upload a file</span>
                      <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
            <button type="submit" className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Save</button>
          </div>
        </div>
        </div>
      </form>
    </div>
  </div>
</div>
    </>
  )
}
