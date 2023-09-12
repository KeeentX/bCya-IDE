import React from 'react'
import * as ReactDOM from 'react-dom/client';
import CodeBox from "./components/code_box";
import FileBrowser from "./components/file_browser";

const App = () => {
      return (
          <div className="flex bg-gray-100 w-full">
              <div className={'bg-[#21252B] w-1/5'}>
                  <header>
                      <p className={'text-[#908F8F] font-bold'}>
                          BCYA NGA IDE
                      </p>
                  </header>
                  <FileBrowser/>
              </div>
              <div className={'w-full'}>
                  <header className={'ads object-contain w-full'}>
                      <div className={'p-4'}>
                          <button className={'bg-[#F25757] w-28 p-2 mx-2 rounded-lg pacifico'}>Run</button>
                          <button className={'bg-[#F25757] w-28 p-2 rounded-lg pacifico'}>Compile</button>
                      </div>
                      <div className={'text-center bg-[#312F37] text-white'}>
                          main.cpp
                      </div>
                  </header>

                  <CodeBox/>
              </div>
          </div>
      );
}

function render() {
  const root = ReactDOM.createRoot(document.getElementById("app"));
  root.render(<App/>);
}

render();
