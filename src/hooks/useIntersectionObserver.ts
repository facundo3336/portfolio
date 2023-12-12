import  { useEffect, useState } from "react";

interface Params {
    ref: React.RefObject<Element>
    options?: {
        root: HTMLElement 
        rootMargin: string
        threshold: number
    } 
}

export const useIntersectionObserver = ({ref, options = {root: document.body, rootMargin: "0px", threshold: 1.0}}: Params): boolean => { 
    const [isVisible, setIsVisible] = useState(false)
    
    useEffect(() => {
        if (ref.current === null) return
 
        let observer = new IntersectionObserver((entries) => {
            console.log(entries)
            setIsVisible(entries[0].isIntersecting)
        }, options);
        observer.observe(ref.current)
        return () => observer.disconnect()
    }, [ref.current])

    return isVisible
}