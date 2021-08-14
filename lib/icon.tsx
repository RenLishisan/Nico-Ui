import React from 'react';
import classes from './helpers/classes'
import './import_icons'
import './icon.scss'

/**
 * @author: 👨‍🔧‍ RenLishisan
 * @method: Icon
 * @description: 图标组件，该组件必须接受一个Name
 * @param: name
 * @return: Icon
 * @time: 2021/8/1 12:06 上午
 **/

interface IconProps extends React.SVGAttributes<SVGElement> {
    name: string;
}

const Icon: React.FunctionComponent<IconProps> = (Props) => {
    const {className,name, ...restProps} = Props;
    return (
        <svg className={classes('nico-icon', className)} {...restProps}>
            <use xlinkHref={`#${name}`}/>
        </svg>
    )
}

export default Icon;
