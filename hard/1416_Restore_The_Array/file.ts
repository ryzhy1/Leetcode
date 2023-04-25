function numberOfArrays(s: string, k: number): number {
    const dp = new Array(s.length + 1).fill(0);
    dp[0] = 1;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '0') {
            continue;
        }
        for (let j = i + 1; j <= s.length; j++) {
            const num = parseInt(s.slice(i, j));
            if (num > k) {
                break;
            }
            console.log(dp[j], dp[i])
            dp[j] = (dp[j] + dp[i]) % (Math.pow(10, 9) + 7);
        }
    }
    return dp[s.length];
};

console.log(numberOfArrays('1317', 2000));