import React from 'react'

interface IconProps {
    name: String;
}

/**
 * @author: RenLishisan
 * @method: Icon
 * @description: 图标组件，该组件必须接受一个Name
 * @param: name
 * @return: Icon
 * @time: 2021/8/1 12:06 上午
 **/

const Icon: React.FunctionComponent<IconProps> = (Props) => {
    return (
        <span>{Props.name}</span>
    )
}

export default Icon
