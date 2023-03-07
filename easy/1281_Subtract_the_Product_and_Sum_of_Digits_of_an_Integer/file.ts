function subtractProductAndSum(n: number): number {
    const digits = n.toString().split('').map(item => parseInt(item, 10));
    return digits.reduce((a,b) => a*b) - digits.reduce((a,b) => a+b);
};