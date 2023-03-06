const theArr = Array.from({ length: 100000 }, (_, el) => el)
const theSet = new Set(theArr)
const theObject = Object.assign({}, ...theArr.map(num => ({ [num]: true })))
const theMap = new Map(theArr.map(num => [num, true]))

const theTarget = 50000

export { theArr, theSet, theObject, theMap, theTarget };