class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = []
        const closeToOpen = {
        ")" : "(", 
        "]" : "[", 
        "}" : "{"}
        for (let i = 0; i < s.length; i++) {
            if (s[i] in closeToOpen) {
                if (stack.length > 0 && stack[stack.length - 1] === closeToOpen[s[i]]) {
                    stack.pop(s[i])
                }
                else {
                    return false
                }
            }
            else {
                stack.push(s[i])
            }
            
        }
        if (stack.length === 0) {
            return true
        } else {
            return false
        }
    }
}
