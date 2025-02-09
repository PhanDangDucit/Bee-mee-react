export function FormSearchCategories() {
    return (
        <form className="flex items-center">
            <label htmlFor="simple-search" className="sr-only">{''}</label>
            <div className="relative w-full">
                <button type="button" title="btn" className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center px-5">
                    <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                    </svg>
                </button>
                <input 
                    id="simple-search" 
                    type="text" 
                    className="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2" 
                    placeholder="Search" 
                    required 
                />
            </div>
        </form>
    )
}

export function FormSearchProducts() {
    return (
        <form className="flex items-center">
            <label htmlFor="simple-search" className="sr-only">{''}</label>
            <div className="relative w-full">
                <button type="button" title="btn" className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center px-5">
                    <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                    </svg>
                </button>
                <input 
                    id="search-product" 
                    type="text" 
                    className="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2" 
                    placeholder="Search" 
                    required 
                />
            </div>
        </form>
    )
}