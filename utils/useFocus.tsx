import React, {Dispatch, SetStateAction, useEffect, useState} from "react";

export default function useFocus(): Dispatch<SetStateAction<boolean>> {
  const [focus, setFocus] = useState(false)

  useEffect(() => {
    if (focus) {
      const node = document.getElementById("focus")
      node?.classList.remove("invisible")
      node?.classList.add("delay-700", "opacity-25")
    } else {
      const node = document.getElementById("focus")
      node?.classList.remove("delay-700", "opacity-25")
      node?.classList.add("invisible")
    }
  })

  return setFocus
}