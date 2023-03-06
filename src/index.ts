import { theSet, theObject, theMap, theTarget, theArr } from "./data";
import { isTargetThereFor, isTargetThereForReverse, isTargetThereHasOwnProperty, isTargetThereIn, isTargetThereMap, isTargetThereSelectKey, isTargetThereSet, measure } from "./util";

// https://stackoverflow.com/questions/39007637/javascript-set-vs-array-performance/65604244#65604244
// https://jsbench.me/3pkjlwzhbr/1

// https://docs.google.com/spreadsheets/d/1WucECh5uHlKGCCGYvEKn6ORrQ_9RS6BubO208nXkozk/edit?usp=sharing
// JSBench forked from https://jsbench.me/irkhdxnoqa/2


measure("Array", () => {
  isTargetThereFor(theArr, theTarget);
});
measure("Set", () => {
  isTargetThereSet(theSet, theTarget);
});

measure("Object-isTargetThereHasOwnProperty", () => {
  isTargetThereHasOwnProperty(theObject, theTarget);
  isTargetThereIn(theObject, theTarget);
  isTargetThereSelectKey(theObject, theTarget);
});
measure("Object-isTargetThereIn", () => {
  isTargetThereIn(theObject, theTarget);
});
measure("Object-isTargetThereSelectKey", () => {
  isTargetThereSelectKey(theObject, theTarget);
});
measure("Map", () => {
  isTargetThereMap(theMap, theTarget);
});
