'use client'

import { Dialog, Disclosure, Transition } from "@headlessui/react"
import { ChevronUp } from "lucide-react"
import Image from "next/image"
import { Fragment } from "react"

interface PixModalProps {
  isVisible: boolean;
  onClose: () => void;
}

export default function PixModal({ isVisible, onClose }: PixModalProps) {
  return (
    <div>
      <Transition appear show={isVisible} as={Fragment}>
        <Dialog onClose={onClose} className="relative z-50">
          <div className="fixed inset-0 flex items-center justify-center p-4">
            <Dialog.Panel className="w-full max-w-sm rounded bg-white p-4">
              <Dialog.Title className="mt-2 text-center">Contribute</Dialog.Title>
              <Dialog.Description className="text-sm text-center text-gray-500 overflow-y-auto my-2">
                Encourage the development of this project so that others can learn from it.

                <div>
                  <Disclosure>
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex w-full justify-between rounded-lg bg-transparent px-4 py-2 my-2 text-left text-sm font-medium text-orange-900 hover:bg-orange-200 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-75">
                          <span>How do I contribute?</span>
                          <ChevronUp
                            className={`${open ? 'rotate-180 transform' : ''
                              } h-5 w-5 text-orange-500`}
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500 text-left">
                          <ul className=" whitespace-pre-line text-xs ">
                            <li>1. Abra o aplicativo de pagamento no seu smartphone.</li>
                            <li>2. Abra a função de leitura de QR Code no aplicativo de pagamento.</li>
                            <li>3. Aponte a câmera do seu smartphone para o QR Code.</li>
                            <li>4. Aguarde até que o aplicativo de pagamento reconheça o QR Code.</li>
                            <li>5. Verifique as informações exibidas no aplicativo de pagamento.</li>
                            <li>6. Confirme o pagamento no aplicativo de pagamento.</li>
                            <li>7. Aguarde a confirmação do pagamento.</li>
                          </ul>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                </div>

              </Dialog.Description>
              <div className="flex items-center justify-center">
                <Image src="/QRCODE.png" alt="QR CODE" width={200} height={200} priority />
              </div>
              <div className="mt-2 border border-orange-800 text-center whitespace-nowrap bg-orange-400/10 text-orange-400 px-3 py-0.5 rounded-full text-sm font-medium hover:border-orange-400 hover:bg-zinc-900 transition-colors">
                <button onClick={onClose}>Cancel</button>
              </div>
            </Dialog.Panel>
          </div>
        </Dialog>
      </Transition>
    </div>
  )
}