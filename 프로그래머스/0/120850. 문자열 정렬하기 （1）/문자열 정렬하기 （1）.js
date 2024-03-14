function solution(my_string) {
    const regex = /^[0-9]$/
    return my_string.split('').filter(el=>regex.test(el)).map(el=>Number(el)).sort()
}