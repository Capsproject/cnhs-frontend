import { PageHeader } from "@/components/shared/PageHeader";
import { Button } from "antd";
import React from "react";

const MessagesPage: React.FC = () => {
  return (
    <>
      <PageHeader title="Messages" />
      <div className="flex flex-row antialiased h-[90vh] text-gray-800 rounded-lg">
        <div className="flex flex-row w-96 flex-shrink-0 bg-gray-100 p-4">
          <div className="flex flex-col w-full h-full pl-4 pr-4 py-4 -mr-4">
            <div className="flex flex-row items-center">
              <div className="flex flex-row items-center">
                <div className="text-xl font-semibold">Messages</div>
                <div className="flex items-center justify-center ml-2 text-xs h-5 w-5 text-white bg-red-500 rounded-full font-medium">
                  5
                </div>
              </div>
              <div className="ml-auto">
                <button className="flex items-center justify-center h-7 w-7 bg-gray-200 text-gray-500 rounded-full">
                  <svg
                    className="w-4 h-4 stroke-current"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
            <div className="mt-2">
              <div className="flex flex-col -mx-4">
                <div className="relative flex flex-row items-center p-4">
                  <div className="absolute text-xs text-gray-500 right-0 top-0 mr-4 mt-3">
                    5 min
                  </div>
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-pink-500 text-pink-300 font-bold flex-shrink-0">
                    T
                  </div>
                  <div className="flex flex-col flex-grow ml-3">
                    <div className="text-sm font-medium">Cuberto</div>
                    <div className="text-xs truncate w-40">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Debitis, doloribus?
                    </div>
                  </div>
                  <div className="flex-shrink-0 ml-2 self-end mb-1">
                    <span className="flex items-center justify-center h-5 w-5 bg-red-500 text-white text-xs rounded-full">
                      5
                    </span>
                  </div>
                </div>
                <div className="flex flex-row items-center p-4 bg-gradient-to-r from-red-100 to-transparent border-l-2 border-red-500">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-pink-500 text-pink-300 font-bold flex-shrink-0">
                    T
                  </div>
                  <div className="flex flex-col flex-grow ml-3">
                    <div className="flex items-center">
                      <div className="text-sm font-medium">UI Art Design</div>
                      <div className="h-2 w-2 rounded-full bg-green-500 ml-2"></div>
                    </div>
                    <div className="text-xs truncate w-40">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Debitis, doloribus?
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-full overflow-hidden relative pt-2">
              <div className="flex flex-col divide-y h-full overflow-y-auto -mx-4">
                <div className="flex flex-row items-center p-4 relative">
                  <div className="absolute text-xs text-gray-500 right-0 top-0 mr-4 mt-3">
                    2 hours ago
                  </div>
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-pink-500 text-pink-300 font-bold flex-shrink-0">
                    T
                  </div>
                  <div className="flex flex-col flex-grow ml-3">
                    <div className="text-sm font-medium">Flo Steinle</div>
                    <div className="text-xs truncate w-40">
                      Good after noon! how can i help you?
                    </div>
                  </div>
                  <div className="flex-shrink-0 ml-2 self-end mb-1">
                    <span className="flex items-center justify-center h-5 w-5 bg-red-500 text-white text-xs rounded-full">
                      3
                    </span>
                  </div>
                </div>
                <div className="flex flex-row items-center p-4">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-pink-500 text-pink-300 font-bold flex-shrink-0">
                    T
                  </div>
                  <div className="flex flex-col flex-grow ml-3">
                    <div className="flex items-center">
                      <div className="text-sm font-medium">Sarah D</div>
                      <div className="h-2 w-2 rounded-full bg-green-500 ml-2"></div>
                    </div>
                    <div className="text-xs truncate w-40">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Debitis, doloribus?
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-center p-4">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-pink-500 text-pink-300 font-bold flex-shrink-0">
                    T
                  </div>
                  <div className="flex flex-col flex-grow ml-3">
                    <div className="flex items-center">
                      <div className="text-sm font-medium">Sarah D</div>
                      <div className="h-2 w-2 rounded-full bg-green-500 ml-2"></div>
                    </div>
                    <div className="text-xs truncate w-40">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Debitis, doloribus?
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-center p-4">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-pink-500 text-pink-300 font-bold flex-shrink-0">
                    T
                  </div>
                  <div className="flex flex-col flex-grow ml-3">
                    <div className="flex items-center">
                      <div className="text-sm font-medium">Sarah D</div>
                      <div className="h-2 w-2 rounded-full bg-green-500 ml-2"></div>
                    </div>
                    <div className="text-xs truncate w-40">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Debitis, doloribus?
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-center p-4">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-pink-500 text-pink-300 font-bold flex-shrink-0">
                    T
                  </div>
                  <div className="flex flex-col flex-grow ml-3">
                    <div className="flex items-center">
                      <div className="text-sm font-medium">Sarah D</div>
                      <div className="h-2 w-2 rounded-full bg-green-500 ml-2"></div>
                    </div>
                    <div className="text-xs truncate w-40">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Debitis, doloribus?
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 right-0 mr-2">
                <button className="flex items-center justify-center shadow-sm h-10 w-10 bg-red-500 text-white rounded-full">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      strokeWidth="2"
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col h-full w-full bg-white px-4 py-6">
          <div className="flex flex-row items-center py-4 px-6 rounded-2xl shadow">
            <div className="flex items-center justify-center h-10 w-10 rounded-full bg-pink-500 text-pink-100">
              T
            </div>
            <div className="flex flex-col ml-3">
              <div className="font-semibold text-sm">UI Art Design</div>
            </div>
          </div>
          <div className="h-full overflow-hidden py-4">
            <div className="h-full overflow-y-auto">
              <div className="grid grid-cols-12 gap-y-2">
                <div className="col-start-1 col-end-8 p-3 rounded-lg">
                  <div className="flex flex-row items-center">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
                      A
                    </div>
                    <div className="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl">
                      <div>Hey How are you today?</div>
                    </div>
                  </div>
                </div>
                <div className="col-start-1 col-end-8 p-3 rounded-lg">
                  <div className="flex flex-row items-center">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
                      A
                    </div>
                    <div className="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl">
                      <div>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Vel ipsa commodi illum saepe numquam maxime
                        asperiores voluptate sit, minima perspiciatis.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-start-6 col-end-13 p-3 rounded-lg">
                  <div className="flex items-center justify-start flex-row-reverse">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
                      A
                    </div>
                    <div className="relative mr-3 text-sm bg-indigo-100 py-2 px-4 shadow rounded-xl">
                      <div>I'm ok what about you?</div>
                    </div>
                  </div>
                </div>
                <div className="col-start-6 col-end-13 p-3 rounded-lg">
                  <div className="flex items-center justify-start flex-row-reverse">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
                      A
                    </div>
                    <div className="relative mr-3 text-sm bg-indigo-100 py-2 px-4 shadow rounded-xl">
                      <div>
                        Lorem ipsum dolor sit, amet consectetur adipisicing. ?
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-start-1 col-end-8 p-3 rounded-lg">
                  <div className="flex flex-row items-center">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
                      A
                    </div>
                    <div className="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl">
                      <div>Lorem ipsum dolor sit amet !</div>
                    </div>
                  </div>
                </div>
                <div className="col-start-6 col-end-13 p-3 rounded-lg">
                  <div className="flex items-center justify-start flex-row-reverse">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
                      A
                    </div>
                    <div className="relative mr-3 text-sm bg-indigo-100 py-2 px-4 shadow rounded-xl">
                      <div>
                        Lorem ipsum dolor sit, amet consectetur adipisicing. ?
                      </div>
                      <div className="absolute text-xs bottom-0 right-0 -mb-5 mr-2 text-gray-500">
                        Seen
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-start-1 col-end-8 p-3 rounded-lg">
                  <div className="flex flex-row items-center">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
                      A
                    </div>
                    <div className="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl">
                      <div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Perspiciatis, in.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-start-1 col-end-8 p-3 rounded-lg">
                  <div className="flex flex-row items-center">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
                      A
                    </div>
                    <div className="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl">
                      <div className="flex flex-row items-center">
                        <button className="flex items-center justify-center bg-indigo-600 hover:bg-indigo-800 rounded-full h-8 w-10">
                          <svg
                            className="w-6 h-6 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              strokeWidth="1.5"
                              d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                            ></path>
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              strokeWidth="1.5"
                              d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            ></path>
                          </svg>
                        </button>
                        <div className="flex flex-row items-center space-x-px ml-4">
                          <div className="h-2 w-1 bg-gray-500 rounded-lg"></div>
                          <div className="h-2 w-1 bg-gray-500 rounded-lg"></div>
                          <div className="h-4 w-1 bg-gray-500 rounded-lg"></div>
                          <div className="h-8 w-1 bg-gray-500 rounded-lg"></div>
                          <div className="h-8 w-1 bg-gray-500 rounded-lg"></div>
                          <div className="h-10 w-1 bg-gray-500 rounded-lg"></div>
                          <div className="h-10 w-1 bg-gray-500 rounded-lg"></div>
                          <div className="h-12 w-1 bg-gray-500 rounded-lg"></div>
                          <div className="h-10 w-1 bg-gray-500 rounded-lg"></div>
                          <div className="h-6 w-1 bg-gray-500 rounded-lg"></div>
                          <div className="h-5 w-1 bg-gray-500 rounded-lg"></div>
                          <div className="h-4 w-1 bg-gray-500 rounded-lg"></div>
                          <div className="h-3 w-1 bg-gray-500 rounded-lg"></div>
                          <div className="h-2 w-1 bg-gray-500 rounded-lg"></div>
                          <div className="h-2 w-1 bg-gray-500 rounded-lg"></div>
                          <div className="h-2 w-1 bg-gray-500 rounded-lg"></div>
                          <div className="h-10 w-1 bg-gray-500 rounded-lg"></div>
                          <div className="h-2 w-1 bg-gray-500 rounded-lg"></div>
                          <div className="h-10 w-1 bg-gray-500 rounded-lg"></div>
                          <div className="h-8 w-1 bg-gray-500 rounded-lg"></div>
                          <div className="h-8 w-1 bg-gray-500 rounded-lg"></div>
                          <div className="h-1 w-1 bg-gray-500 rounded-lg"></div>
                          <div className="h-1 w-1 bg-gray-500 rounded-lg"></div>
                          <div className="h-2 w-1 bg-gray-500 rounded-lg"></div>
                          <div className="h-8 w-1 bg-gray-500 rounded-lg"></div>
                          <div className="h-8 w-1 bg-gray-500 rounded-lg"></div>
                          <div className="h-2 w-1 bg-gray-500 rounded-lg"></div>
                          <div className="h-2 w-1 bg-gray-500 rounded-lg"></div>
                          <div className="h-2 w-1 bg-gray-500 rounded-lg"></div>
                          <div className="h-2 w-1 bg-gray-500 rounded-lg"></div>
                          <div className="h-4 w-1 bg-gray-500 rounded-lg"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center">
            <div className="flex flex-row items-center w-full border rounded-3xl h-12 px-2">
              <div className="w-full">
                <input
                  type="text"
                  className="border border-transparent w-full focus:outline-none text-sm h-10 flex items-center"
                  placeholder="Type your message...."
                />
              </div>
            </div>
            <div className="ml-6">
              <Button
                size="large"
                className="flex items-center justify-center h-50 w-50 rounded-full "
                type="primary"
                icon={
                  <svg
                    className="w-5 h-5 transform rotate-90 -mr-px"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      strokeWidth="2"
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    ></path>
                  </svg>
                }
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MessagesPage;
