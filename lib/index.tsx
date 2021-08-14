import ReactDOM from 'react-dom';
import React from 'react';
import Icon from "./icon";

const SeiHI = () => {
    console.log("hi")
}

ReactDOM.render(<div>
    <Icon name="home" onClick={SeiHI}/>
    <Icon name="setup"/>
    <Icon name="user"/>
    <Icon name="dynamic"/>
</div>, document.querySelector('#root'))
