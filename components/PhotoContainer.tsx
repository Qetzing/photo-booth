import React from "react";

export interface PhotoContainerProperties {
  children: React.ReactNode
}

export default function PhotoContainer(properties: PhotoContainerProperties) {
  return (
    <div className="flex justify-center my-5">
      <div className="grid grid-cols-2 lg:grid-cols-3 grid-flow-row-dense gap-x-8 gap-y-4">
        {properties.children}
      </div>
    </div>
  )
}