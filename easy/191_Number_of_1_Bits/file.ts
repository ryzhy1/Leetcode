function hammingWeight(n: number): number {
    return n.toString(2).match(/1/g)?.length ?? 0;
};

console.log(hammingWeight(0b00000000000000000000000000001011));