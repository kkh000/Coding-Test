function solution(spell, dic) {
    return dic.map(el => el.split('').sort().join('')).filter(el=> el === spell.sort().join('')).length === 0 ? 2:1
}