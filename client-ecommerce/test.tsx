// initState
const initState = 0
// Actions

const UP_ACTION = 'up';
const DOWN_ACTION = 'down';

/** Reducer
 *  --> Nguyen tac: nhan input va tra ve output moi! 
 *  parameter: state hien tai va 1 action --> Tra ra state/action moi
*/

const reducer = (state, action) => {
    switch(action) {
        case UP_DOWN:
            return state + 1
        case DOWN_ACTION:
            return state - 1
        default:
            throw new Error('Invalid action')
    }
}

/** 
 * dispatch:
 *  - dung de kich hoat action ben trong useReducer
*/

const App = () => {
    const [count, dispatch] = useReducer(reducer, initState);

    return (
        <div style={{padding: '10px 32px'}}>
            <h1>{count}</h1>
            <button onClick={() => dispatch(DOWN_ACTION)}>Down</button>
            <button onClick={() => dispatch(UP_ACTION)}>Up</button>
        </div>
    )
}

export default App;