export function Module(option: any) {
    console.log('-- decorator factory invoked --');
    return function (constructor: Function) {
        console.log('-- decorator invoked --');

        console.log('option:',option);
    }
}

