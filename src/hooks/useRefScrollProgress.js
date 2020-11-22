import { useLayoutEffect, useState } from "react"
import useRect from "./useRect"

export default function useRefScrollProgress(ref) {
  const [start, setStart] = useState(null)
  const [end, setEnd] = useState(null)
  const rect = useRect(ref)
  useLayoutEffect(() => {
    const offsetTop = rect.top + window.scrollY
    setStart(
      (offsetTop - window.innerHeight + rect.height / 2) /
        document.body.clientHeight
    )
    setEnd((offsetTop + rect.height / 2) / document.body.clientHeight)
  }, [rect])
  return { ref, start, end }
}
