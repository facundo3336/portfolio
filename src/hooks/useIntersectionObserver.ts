import  { useEffect, useState } from "react";

interface Params {
    ref: React.RefObject<Element>
    options?: {
        root?: HTMLElement 
        rootMargin?: string
        threshold?: number
    } 
}

export const useIntersectionObserver = ({ref, options}: Params): boolean => { 
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        if (ref.current === null) return
 
        let observer = new IntersectionObserver((entries) => {
            if(entries[0].isIntersecting) {
                setIsVisible(true); 
            }  else {
                setIsVisible(false)
            }
            console.log(isVisible)
        }, options);
        observer.observe(ref.current)

        return () => observer.disconnect()
    }, [ref.current])

    return isVisible
}