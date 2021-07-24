function add(a: number, b: number) {
    return a + b
}
describe('测试 Nico-Ui测试程序...', () => {
    it('加法运算', () => {
        expect(add(1,1)).toEqual(2);
    })
})
