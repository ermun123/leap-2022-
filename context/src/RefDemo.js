import { useEffect, useRef } from "react"

export default function RefDemo() {
    const inputParent = useRef(null)
    const value = useRef("")
    // // // useEffect(() => {
    // // //     console.log(inputParent.current.childNodes)
    // // // }, []);
    const handleInput = (e) => {
        value.current += e.target.value;
        if (value.current.length < 4) {
            inputParent.current.childNodes[value.current.length].focus()
        } else {
            inputParent.current.childNodes[3].value = inputParent.current.childNodes[3].value[0] || ""
        }

    }
    const handleFocus = (e) => {
        const length = value.current.length;
        if (length === 4) {
            inputParent.current.childNodes[3].focus()
        } else {
            inputParent.current.childNodes[length].focus()
        }
    };

    return (
        <div className="otp-example" ref={inputParent}>
            <input onChange={handleInput} onFocus={handleFocus} />
            <input onChange={handleInput} onFocus={handleFocus} />
            <input onChange={handleInput} onFocus={handleFocus} />
            <input onChange={handleInput} onFocus={handleFocus} />
        </div>

    )
}