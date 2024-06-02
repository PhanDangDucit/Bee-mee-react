import { TCategories } from "@/helpers/definitions";
import LayoutAdmin from "@/ui/admin/layout";
import { TableCategories } from "@/ui/components/table";
import { FormSearchCategories } from "@/ui/components/form-admin";
import { getAllEntity } from "@/utils/axios-method";
import { Plus } from "lucide-react";
import { useEffect, useState } from "react";
import { CreateModalCategories } from "@/ui/components/create-modal-categories";

const CategoriesComponent = () => {
    const [categories, setCategories] = useState<TCategories[]>();

    useEffect(() => {
        getAllEntity("categories").then(data => setCategories(data));
    }, [categories])

    if(!categories) return;

    return ( 
        <LayoutAdmin>
            <div className="p-4 xl:ml-80">
                <section className="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5 antialiased">
                    <div className="mx-auto max-w-screen-xl px-4 lg:px-12">
                        {/* Start coding here */}
                        <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
                            <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
                                {/* Form search */}
                                <div className="w-1/2 md:w-1/2">
                                    <FormSearchCategories/>
                                </div>
                                <div className="w-1/2 md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
                                    <div className="flex items-center space-x-3 w-full md:w-auto">
                                    {/* Add product */}
                                        <button 
                                            id="actionsDropdownButton"
                                            className="w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                                            type="button"
                                            onClick={() => document.getElementById('createCategoriesModal')!.showModal()}
                                        >
                                            <Plus/>
                                            Add Product
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="overflow-x-auto">
                                <TableCategories categories={categories}/>
                            </div>
                        </div>
                    </div>
                </section>
                {/* End block */}
                <CreateModalCategories/>
            </div>
        </LayoutAdmin>
     );
}
 
export default CategoriesComponent;