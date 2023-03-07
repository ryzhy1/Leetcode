function nearestValidPoint(x: number, y: number, points: number[][]): number {
    let minDist = 10**10;
    let minIdx = -1;

    points.forEach((point, i) => {
        if ((point[0] === x || point[1] === y)) {
            if (Math.abs(point[0] - x) + Math.abs(point[1] - y) < minDist) {
                minDist = Math.abs(point[0] - x) + Math.abs(point[1] - y);
                minIdx = i;
            }
        }
    })
    return minIdx;
};