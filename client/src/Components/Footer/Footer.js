import React from "react";
import { PlaneIcon, UserIcon } from "../../constants";

const Footer = (props) => {
  return (
    <div className={`absolute z-20 bottom-0 left-0 w-full border-t md:border-t-0 dark:border-white/20 md:border-transparent md:dark:border-transparent md:bg-vert-light-gradient bg-gray-800 md:!bg-transparent ${props.isProcessing ? "opacity-50 cursor-wait" : ""}`}>
      <div className="mx-2 flex flex-row gap-3 pt-2 last:mb-2 md:last:mb-6 lg:mx-auto lg:max-w-3xl lg:pt-6">
        <div className="relative flex h-full flex-1 md:flex-col">
          <div className="ml-1 mt-1.5 md:w-full md:m-auto md:flex md:mb-2 gap-2 justify-center">
            <div className="text-gray-100 p-1 md:hidden">
              <UserIcon />
            </div>
          </div>
          {/* Input */}
          <div className="flex flex-col w-full py-2 pl-3 flex-grow md:py-3 md:pl-4 relative border border-black/10  dark:border-gray-900/50 dark:text-white rounded-md bg-gray-100">
            <textarea
              ref={props.textareaRef}
              tabIndex="0"
              data-id="root"
              rows="1"
              disabled={props.isProcessing}
              className={`m-0 w-full resize-none border-0 bg-transparent p-0 pr-7 focus:ring-0 focus-visible:ring-0 dark:bg-transparent outline-none overflow-y-hidden h-[23px] ${props.isProcessing ? "opacity-50 cursor-wait" : ""}`}
              placeholder="Hãy nhập câu hỏi liên quan đến Pháp Luật...."
              value={props.userInput}
              onChange={props.handleInputChange}
              onKeyDown={props.handleKeyDown}
            ></textarea>
            <button
              onClick={props.handleSendMessage}
              className="absolute p-1 rounded-md text-black bottom-1.5 right-1 md:bottom-2.5 md:right-2 hover:bg-black"
            >
              <PlaneIcon handleUserInput={props.handleUserInput} />
            </button>
          </div>
        </div>
      </div>
      <div className="px-3 pt-2 pb-3 text-center text-xs text-gray-400 md:px-4 md:pt-3 md:pb-6">
        <a href="#" target="_blank" className="underline">
          PHÁP ĐIỂN VIỆT NAM
        </a>
      </div>
    </div>
  );
};

export default Footer;
