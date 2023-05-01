import React from "react";


export default function ModalFooter({ children }) {
  return (
    <div className="bg-gray-50 px-6 py-4 sm:flex sm:flex-row-reverse">
      {children}
    </div>
  );
}
