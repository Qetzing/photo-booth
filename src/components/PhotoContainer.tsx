import React from "react";

export interface PhotoContainerProperties {
  title: string
  children: React.ReactNode
}

export default function PhotoContainer(properties: PhotoContainerProperties) {
  return (
    <div id={properties.title} className="my-20 flex flex-col items-center">
      <span className="mb-5 text-2xl text-gray-400 font-medium tracking-widest">{properties.title}</span>
      <hr className="border-2 bg-slate-400 w-1/2 mt-1 mb-3"/>
      <div className="flex justify-center my-5">
        <div className="
          grid grid-flow-row-dense gap-x-8 gap-y-4
          grid-cols-1 md:grid-cols-2 lg:grid-cols-3
        ">
          {properties.children}
        </div>
      </div>
    </div>
  )
}