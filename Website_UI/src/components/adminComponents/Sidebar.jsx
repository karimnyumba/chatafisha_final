import { Dialog, Transition } from "@headlessui/react";
import useBreakpoint from "@restart/hooks/useBreakpoint";
import React, { Fragment } from "react";
import { HiX } from "react-icons/hi";
import IconButton from "./IconButton";



function Sidebar({
  children,
  open,
  setOpen,
  title,
  width = 280
}) {
  const isSmall = useBreakpoint("sm", "down");

  if (setOpen && isSmall) {
    return (
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          static
          className="fixed inset-0 overflow-hidden"
          open={open}
          onClose={setOpen}
        >
          <div className="absolute inset-0 overflow-hidden">
            <Transition.Child
              as={Fragment}
              enter="ease-in-out duration-500"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in-out duration-500"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>
            <div className="fixed inset-y-0 left-0 pr-10 max-w-full flex">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-300"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-300"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <div className="relative w-screen" style={{ width }}>
                  <div className="h-full flex flex-col py-6 bg-white shadow-xl overflow-y-scroll">
                    <div className="flex justify-between items-center px-4 sm:px-6">
                      <Dialog.Title className="text-lg font-bold">
                        {title}
                      </Dialog.Title>
                      <IconButton onClick={() => setOpen(false)}>
                        <span className="sr-only">Close panel</span>
                        <HiX aria-hidden="true" />
                      </IconButton>
                    </div>
                    <div className="relative flex flex-col flex-1 mt-6 px-4 sm:px-6">
                      {children}
                    </div>
                  </div>
                </div>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    );
  }
  return (
    <div
      className="flex flex-col flex-shrink-0 min-h-screen bg-white"
      style={{ width }}
    >
      {title && (
        <div className="px-6 py-8">
          <h2 className="font-bold">{title}</h2>
        </div>
      )}
      <div className="flex flex-col flex-1 px-6">{children}</div>
    </div>
  );
}

export default Sidebar;
