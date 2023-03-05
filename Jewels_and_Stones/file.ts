function numJewelsInStones(jewels: string, stones: string): number {
    let j = jewels.split('');
    return stones.split('').filter(x => j.includes(x)).length;

    // const dict: {[key: string]: number} = {};
    // let cnt: number = 0;
    // for (let i = 0; i < jewels.length; i++) {
    //     dict[jewels[i]] = 0;
    //     for (let j = 0; j < stones.length; j++) {
    //         if (jewels[i] === stones[j]) {
    //             cnt++;
    //         }
    //     }
    // }
};

numJewelsInStones("z", "ZZ");