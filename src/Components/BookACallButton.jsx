
import React, { useEffect, useState } from "react";
import { PopupWidget, PopupButton } from "react-calendly";
import {Link} from "react-router-dom"

const BookACallButton = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div class="relative" >
    <span class="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-black"></span>
    <span class="fold-bold relative inline-block h-full w-full rounded border-2 border-black bg-white whitespace-nowrap px-1 lg:px-6 py-3 text-base font-bold text-black transition duration-100 hover:bg-tirtry hover:text-gray-900">
    
     {isClient && (
              <PopupButton
                url="https://calendly.com/infolatchltd/30min"
                rootElement={document.body}
                text="Book A Call"
              />
            )}
    </span>
    </div>
  );
};

export default BookACallButton;
