function canMakeArithmeticProgression(arr: number[]): boolean {
    arr.sort((a,b) => a-b);
    let cd = arr[1] - arr[0];
    for(let i = 0; i < arr.length - 1; i++) {
        if((arr[i+1] - arr[i]) != cd) {
            return false;
        }
    }
    return true;
};


console.log(canMakeArithmeticProgression([3,6,9,11,16,18]))