import React from 'react'

const SideNavigation = () => {
    return (
        <nav class="fixed left-0 top-0 bottom-0 bg-white w-56 flex flex-col mt-16 ml-10 hidden-sm">
            <a href="#" class="px-4 py-2 font-medium text-gray-800 hover:bg-gray-200">Tags</a>
            <a href="#" class="px-4 py-2 font-medium text-gray-800 hover:bg-gray-200">Users</a>
            <a href="#" class="px-4 py-2 font-medium text-gray-800 hover:bg-gray-200">Communities</a>
        </nav>

    )
}

export default SideNavigation