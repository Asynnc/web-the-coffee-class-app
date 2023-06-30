'use client'

import React, { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';
import { formatDate } from '@/utils/formatDate';
import { Disclosure } from '@headlessui/react';


const today = new Date()

interface Props {
  onFileUploaded: (file: File) => void;
}

const Dropzone: React.FC<Props> = ({ onFileUploaded }) => {

  const [selectedFileUrl, setSelectedFileUrl] = useState('');

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0]
    const fileUrl = URL.createObjectURL(file);
    setSelectedFileUrl(fileUrl);
    onFileUploaded(file)
  }, [onFileUploaded])
  const {
    getRootProps,
    getInputProps,
    isDragReject,
    acceptedFiles,
    fileRejections,
  } = useDropzone({
    maxFiles: 1,
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.png', '.webp']
    }
  })

  const acceptedFileItems = acceptedFiles.map((file: any) => (
    <li key={file.path} className='list-none border-green-400 border border-dashed'>
      <div className="flex-start flex items-center pt-3">
        <div
          className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-green-300 dark:bg-neutral-500"></div>
        <p className="text-sm text-neutral-500 dark:text-neutral-300">
          Added file! - {formatDate(today, 'dd/mm/aaaa')}
        </p>
      </div>
      <div className="mb-6 ml-4 mt-2">
        <p className="mb-3 text-neutral-500 dark:text-neutral-300">
          {file.path} - {file.size} bytes
        </p>
      </div>
    </li>
  ));

  const fileRejectionItems = fileRejections.map(({ file, errors }: any) => {
    return (
      <li key={file.path} className='list-none border-red-400 border border-dashed'>
        <div className="flex-start flex items-center pt-3 ">
          <div
            className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-red-300 dark:bg-neutral-500"></div>
          <p className="text-sm text-black dark:text-neutral-300">
            Rejected file! - {formatDate(today, 'dd/mm/aaaa')}
          </p>
        </div>
        <div className="mb-6 ml-4 mt-2">
          <p className="text-sm mb-3 text-neutral-500 dark:text-neutral-300">
            {file.path} - {file.size} bytes
          </p>
          <ul key={file.path} className='overflow-y-auto'>
            {errors.map((e: any) => (
              <li className='text-sm text-red-500' key={e.code}>{e.message}</li>
            ))}
          </ul>
        </div>
      </li>
    )
  });

  return (
    <>
      <div className="m-h-md max-w-lg mt-2 bg-green-200 rounded-lg flex justify-center items-center outline-none border-dashed border-2" {...getRootProps()}>
        <input {...getInputProps()} accept="image/*" />
        {selectedFileUrl && (<Image width={500} height={500} src={selectedFileUrl} alt="Thumbnail" priority />)}
        {isDragReject && (<p>File rejected.</p>)}
        {!selectedFileUrl && (<p>Drop your file here, or click here ...</p>)}
      </div>

      <div className='mt-1'>
        {acceptedFileItems.length > 0 && (
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex mt-4 w-full justify-between rounded-lg bg-green-200 px-4 py-2 text-left text-sm font-medium text-black hover:bg-green-200 focus:outline-none focus-visible:ring focus-visible:ring-green-500 focus-visible:ring-opacity-75">
                  <span>Accepted files</span>
                  <ChevronDown
                    className={`${open ? 'rotate-180 transform' : ''
                      } h-5 w-5 text-black`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                  {acceptedFileItems}
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        )}
      </div>
      <div className='mt-1'>
        {fileRejectionItems.length > 0 && (
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex mt-4 w-full justify-between rounded-lg bg-red-200 px-4 py-2 text-left text-sm font-medium text-black hover:bg-red-200 focus:outline-none focus-visible:ring focus-visible:ring-red-500 focus-visible:ring-opacity-75">
                  <span>Rejected files</span>
                  <ChevronDown
                    className={`${open ? 'rotate-180 transform' : ''
                      } h-5 w-5 text-black`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                  {fileRejectionItems}
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        )}
      </div>
    </>
  )
}

export default Dropzone;