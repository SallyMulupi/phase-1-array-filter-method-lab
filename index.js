// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];


function findMatching(arr, query) {
    return arr.filter(function(el) {
        return el.toLowerCase().indexOf(query.toLowerCase()) !== -1
    })
}



function fuzzyMatch(arr, query) {
    return arr.filter(function(el) {
        return el.toLowerCase().indexOf(query.toLowerCase()) == 0
    })
}


function matchName(arr, query) {
    return arr.filter(function(el) {
        if (el.name === query) {
            return el;
        }
    })

}