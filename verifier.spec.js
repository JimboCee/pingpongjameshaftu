import {cellStatus} from "script.js"

describe ("", () => {

    it(" > two live neighbours ", () =>{
        const result = cellStatus(1)
        expect(result).toBe(false)
    })
})
