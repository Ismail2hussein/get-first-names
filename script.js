function getFirstNames(names) {
   
    try {
        if (!Array.isArray(names)) {
            throw new TypeError("Argument must be an array");
        }
        
        const firstNames = names.map(name => name[0]);
        return firstNames;
    } catch (error) {
        console.error(error);
        return [];
    }
}

const names = [["Ahmed","Aisha","Amina"],["Jaamac","Khadijah","Layla"],["Mohamed","Ali"]];
const firstNames = getFirstNames(names);
console.log(firstNames); // Output: ["Ahmed","Jaamac","Mohamed"]

