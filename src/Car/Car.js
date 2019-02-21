import React from 'react';

/*function Car() {
    return(
        <div>This is car component</div>
    )
}*/
// const car = () => <div style={{color: 'green', fontSize: '50px', fontWeight: '600'}}>This is car component with arrow function</div>

// export default car;

/*
export default () => (
    <div style={{color: 'blue'}}>This is car component</div>
)*/

/*
export default (props) => (
    <div>
        <h3>{props.name}</h3>
        <p>{props.year}</p>
    </div>
)*/

//можно не писать круглые скобки в пропсах

export default (props) => (
    <div>
        <h3>{props.name}</h3>
        <p>{props.year}</p>
        {props.children}
        <button onClick={props.onChangeTitle}>CLick</button>
    </div>
)