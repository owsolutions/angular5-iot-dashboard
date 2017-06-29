export default function UpdateOrPrepend (element: any, context: Array<any>, compareKey: any) {
    let updated = false;
    let newContext;
    newContext = context.map($el => {
        if ($el[compareKey] === element[compareKey]) {
            updated = true;
            return element;
        }
        return $el;
    });
    if (!updated) {
        newContext = [element].concat(context);
    }
    return newContext;
}
