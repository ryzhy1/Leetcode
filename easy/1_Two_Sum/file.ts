
// @ts-ignore
function twoSum(nums: number[], target: number): number[] {

    const dict:{[key:string]: number} = {};

    for (let i = 0; i < nums.length; i++) {
        let n: number = nums[i]
        if (dict[target - n] !== undefined) {
            return [dict[target - n], i]
        }
        dict[n] = i
    }
        
    return []

    // Create a dict to store integers with string keys
    // const dict: { [key: number]: number } = {};

    // dict[0] = 1;
    // console.log(dict)

    // let myMap = new Map<number, number>();

    // for (let i = 0; i < nums.length; i++) {
    //     const n: number = nums[i];
    //     if (myMap.has(target - n)) {
    //         return [myMap.get(target - n), i];
    //     }
    //     myMap.set(n, i);
    // }
    // return [];
    
    // let hash: {[key: number]: number} = {};
	
	// for(let i = 0; i < nums.length; i++) {
	// 	const n = nums[i];
	// 	if(hash[target - n] !== undefined) {
	// 		return [hash[target - n], i];
	// 	}
	// 	hash[n] = i;
	// }
	// return [];
}
console.log(twoSum([12, 1, 2, 4, 5, 6, 3], 11));