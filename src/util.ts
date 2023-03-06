// Measure
const loopCount = 3;
export function measure(name: string, callback: () => void) {
  for (let i = 0; i < loopCount; i++) {
    performance.mark(`${name}-${i}-start`);
    callback();
    performance.mark(`${name}-${i}-end`);
    performance.measure(
      `${name}-${i}`,
      `${name}-${i}-start`,
      `${name}-${i}-end`
    );

    console.log(
      name + ": " + performance.getEntriesByName(`${name}-${i}`)[0].duration
    );
  }
}


// Array
export function isTargetThereFor(arr: number[], target: number) {
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    if (arr[i] === target) {
      return true;
    }
  }
  return false;
}
export function isTargetThereForReverse(arr: number[], target: number) {
  const len = arr.length;
  for (let i = len; i > 0; i--) {
    if (arr[i] === target) {
      return true;
    }
  }
  return false;
}

export function isTargetThereIncludes(arr: number[], target: number) {
  return arr.includes(target);
}

// Set

export function isTargetThereSet(numberSet:Set<number>, target:number) {
  return numberSet.has(target)
}

// Object

export function isTargetThereHasOwnProperty(obj: Record<number,boolean>, target: number) {
  return obj.hasOwnProperty(target)
}
export function isTargetThereIn(obj: Record<number,boolean>, target: number) {
  return target in obj
}
export function isTargetThereSelectKey( obj:Record<number,boolean>, target: number) {
  return obj[target]
}

// Map

export function isTargetThereMap(numberMap: Map<number, boolean>, target: number) {
  return numberMap.has(target)
}
