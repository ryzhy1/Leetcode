function average(salary: number[]): number {
    let cnt: number = 0;
    cnt += (salary.reduce((a, b) => a + b) - Math.min(...salary) - Math.max(...salary)) / (salary.length - 2);
    return cnt;
};

console.log(average([4000,3000,1000,2000]));

