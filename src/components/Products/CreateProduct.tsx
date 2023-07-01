import { Dialog, Listbox, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import Dropzone from "../Input/Dropzone";
import { CategoryProps } from "@/types/Category";
import { ChevronsUpDown } from "lucide-react";

interface ProductModalProps {
  isVisible: boolean;
  onClose: () => void;
  isLoading?: boolean;
}



export default function CreateProductModal({ isVisible, onClose, isLoading }: ProductModalProps) {

  const [categories, setCategories] = useState<any[]>([])
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [selectedFile, setSelectedFile] = useState<File>();

  if (!isVisible) {
    return null;
  }

  const fetchCategories = async (): Promise<CategoryProps[] | any> => {
    try {
      const data = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT_PRODUCTION}/categories`);

      return setCategories(await data.json())
    } catch (error) {
      console.log(error)
    }
  }

  fetchCategories()

  return (
    <>
      <Transition appear show={isVisible} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={onClose}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900 text-center"
                  >
                    Adicionar um novo produto
                  </Dialog.Title>


                  <Dropzone onFileUploaded={setSelectedFile} />

                  {selectedFile && (
                    <Listbox value={selectedCategory} onChange={setSelectedCategory}>
                      <div className="relative mt-1">
                        <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                          <span className="block truncate">{selectedCategory ? selectedCategory : 'Select a category'}</span>
                          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                            <ChevronsUpDown
                              className="h-5 w-5 text-gray-400"
                              aria-hidden="true"
                            />
                          </span>
                        </Listbox.Button>
                        <Transition
                          as={Fragment}
                          leave="transition ease-in duration-100"
                          leaveFrom="opacity-100"
                          leaveTo="opacity-0"
                        >
                          <Listbox.Options className="mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                            {categories.map(({ _id, name, icon }: CategoryProps) => (
                              <Listbox.Option
                                key={_id}
                                className={({ active }) =>
                                  `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                                  }`
                                }
                                value={name}
                              >
                                {({ selected }) => (
                                  <>
                                    <span
                                      className={`flex ${selected ? 'font-medium' : 'font-normal'
                                        }`}>
                                      <div className="mr-4">
                                        {icon}
                                      </div>
                                      {name}
                                    </span>
                                  </>
                                )}
                              </Listbox.Option>
                            ))}
                          </Listbox.Options>
                        </Transition>
                      </div>
                    </Listbox>
                  )}
                  <div className="mt-4 justify-evenly flex flex-1">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium text-black hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
                      onClick={onClose}
                    >
                      FECHAR
                    </button>
                    <button
                      disabled
                      type="button"
                      className="inline-flex justify-center rounded-md bg-green-200 px-4 py-2 text-sm font-medium text-black hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
                    >
                      ADICIONAR
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}