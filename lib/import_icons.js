/**
 * @author: 👨‍🔧‍ RenLishisan
 * @method: import_icons.js
 * @description: 动态加载Icons路径
 * @param:
 * @return:
 * @time: 2021/8/2 9:41 下午
 **/

let importAll = (requireContext) => requireContext.keys().forEach(requireContext)
try {
	importAll(require.context('./icons/', true, /\.svg$/))
} catch (error) {
	console.error("Icons加载失败",error)
}
