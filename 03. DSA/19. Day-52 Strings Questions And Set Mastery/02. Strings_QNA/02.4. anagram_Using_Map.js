/**
 * Check if two strings are anagrams of each other.
 * @param {string} s1 - First string
 * @param {string} s2 - Second string
 * @return {boolean} - true if anagrams, false otherwise
 */
function isAnagram(s1, s2) {
    let map = new Map()
    let map2 = new Map()
    
    if(s1.length == s2.length){
        for(let i=0; i<s1.length; i++){
            if(map.has(s1.charAt(i))){
                map.set(s1.charAt(i), map.get(s1.charAt(i)) + 1);
            }else{
                map.set(s1.charAt(i), 1)
            }
        }
        
        for(let i=0; i<s2.length; i++){
            if(map2.has(s2.charAt(i))){
               map2.set(s2.charAt(i), map2.get(s2.charAt(i)) + 1);
            }else{
                map2.set(s2.charAt(i), 1)
            }
        }
        let isAnagram = true
        for(const [key, value] of map){
            if(map2.has(key) && value == map2.get(key)){
                isAnagram = true
            }else{
                isAnagram = false
                break
            }
        }
        return isAnagram
        
    }else{
        return false
    }
    
    
}


console.log(isAnagram("state", "taste"));