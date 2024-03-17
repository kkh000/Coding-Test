function solution(triangle) {
    let arr = Array.from({ length: triangle.length }, () => []);
    arr[0][0] = triangle[0][0];
    for (let i = 1; i < triangle.length; i++) {
        for (let j = 0; j <= i; j++) {
            if (j === 0) {
                arr[i][j] = arr[i - 1][j] + triangle[i][j];
            } else if (j === i) {
                arr[i][j] = arr[i - 1][j - 1] + triangle[i][j];
            } else {
                arr[i][j] = Math.max(arr[i - 1][j - 1], arr[i - 1][j]) + triangle[i][j];
            }
        }
    }

    return Math.max(...arr[triangle.length-1]);
}
