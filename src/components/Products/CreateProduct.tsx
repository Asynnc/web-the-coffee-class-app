import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import Dropzone from "../Input/Dropzone";

interface ProductModalProps {
  isVisible: boolean;
  onClose: () => void;
  isLoading?: boolean;
}

export default function CreateProductModal({ isVisible, onClose, isLoading }: ProductModalProps) {

  if (!isVisible) {
    return null;
  }

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
                <Dialog.Panel className="w-full max-w-lg transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900 text-center"
                  >
                    Adicionar um novo produto
                  </Dialog.Title>

                  <div>
                    <Dropzone onFileUploaded={() => console.log('A imagem foi carregada')} />
                  </div>

                  <div className="mt-4 justify-evenly flex flex-1">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md bproduct bproduct-transparent bg-transparent px-4 py-2 text-sm font-medium text-black hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
                      onClick={onClose}
                    >
                      FECHAR
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