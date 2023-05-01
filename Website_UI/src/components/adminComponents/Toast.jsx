import { Dialog, Transition } from "@headlessui/react";
import clsx from "clsx";
import React, { Fragment, useRef } from "react";
import {
  HiCheckCircle,
  HiExclamationCircle,
  HiInformationCircle,
  HiX
} from "react-icons/hi";
import IconButton from "./IconButton";


const avatarColors = {
  error: "bg-red-100 text-red-600",
  info: "bg-blue-100 text-blue-600",
  success: "bg-green-100 text-green-600"
};

const avatarIcons = {
  error: HiExclamationCircle,
  info: HiInformationCircle,
  success: HiCheckCircle
};

export default function Toast({
  message,
  onClose,
  open,
  title,
  variant = "info"
}) {
  const AvatarIcon = avatarIcons[variant];
  let buttonRef = useRef(null);

  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto"
        onClose={onClose}
        initialFocus={buttonRef}
      >
        <div className="fixed bottom-0 right-0 mr-4 mb-4">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="inline-block w-full max-w-md overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
              <div className="flex items-center bg-white p-4">
                <div
                  className={clsx(
                    "mr-4 flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full sm:h-10 sm:w-10",
                    avatarColors[variant]
                  )}
                >
                  <AvatarIcon className="h-6 w-6" aria-hidden="true" />
                </div>
                <div>
                  <Dialog.Title as="h3" className="font-medium text-gray-900">
                    {title}
                  </Dialog.Title>
                  <div className="mt-1">
                    <Dialog.Description className="text-sm text-gray-500">
                      {message}
                    </Dialog.Description>
                  </div>
                </div>
                <IconButton ref={buttonRef} onClick={onClose}>
                  <span className="sr-only">Close panel</span>
                  <HiX aria-hidden="true" />
                </IconButton>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}
