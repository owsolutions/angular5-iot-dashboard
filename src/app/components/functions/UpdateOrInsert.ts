import { merge } from '@lodash';

export default function UpdateOrInsert (element: any, context: Array<any>, compareKey: any, mergeWithExisting = false) {
  let updated = false;
  let newContext;
  newContext = context.map($el => {
    if ($el[compareKey] === element[compareKey]) {
      updated = true;
      if (mergeWithExisting) {
        return merge($el, element);
      }
      return element;
    }
    return $el;
  });
  if (!updated) {
      newContext = context.concat(element);
  }
  return newContext;
}
