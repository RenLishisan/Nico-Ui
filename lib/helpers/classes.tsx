/**
 * @author: 👨‍🔧‍ RenLishisan
 * @method: Classes
 * @description: 将多个className合并成一个className
 * @param: className[]
 * @return: className
 * @time: 2021/8/15 12:04 上午
 **/

export default function Classes(...names: (string | undefined)[]) {
    return names.filter(Boolean).join(' ');
}
