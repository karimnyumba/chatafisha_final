import { Popover, Transition } from "@headlessui/react";
import React from "react";
import { HiBell } from "react-icons/hi";
import { useNotifications } from "../hooks/useNotifications";
import IconButton from "./IconButton";
import List from "./List";
import ListItem from "./ListItem";

export default function Notifications() {
  const { data } = useNotifications();

  return (
    <Popover className="relative">
      <Popover.Button as={IconButton}>
        <HiBell />
      </Popover.Button>
      <Transition
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <Popover.Panel className="absolute z-10 w-screen max-w-sm px-4 mt-3 transform -translate-x-1/2 left-1/2 sm:px-0 lg:max-w-3xl">
          <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
            <List className="bg-white">
              {(!data || data.length === 0) && <>"Nothing"</>}
              {data &&
                data.length > 0 &&
                data.map((notification) => (
                  <ListItem key={notification.id} title={notification.code} />
                ))}
            </List>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
