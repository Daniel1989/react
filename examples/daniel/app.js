/**
 * Created by caoxiaopeng on 17/7/6.
 */

class ChildCmp extends React.Component {
    render() {
        return <div>{this.props.childMessage}</div>
    }
}
class ExampleApplication extends React.Component {
    constructor(props){
        super(props);
        this.state = {message:'no message'}
    }

    componentWillMount(){

    }

    componentDidMount(){

    }

    shouldComponentUpdate(nextProps, nextState, nextContext){
        return true;
    }

    componentDidUpdate(prevProps, prevState, prevContext){

    }

    componentWillReceiveProps(nextProps){

    }

    componentWillUnmount(){

    }

    onClickHandler(){

    }

    render(){
        return <div>
            <button onClick={this.onClickHandler.bind(this)}>set state button</button>
            <ChildCmp childMessage={this.state.message}/>
            Ans some text well!
        </div>
    }


}

ReactDOM.render(
    <ExampleApplication hello={'world'}/>,
    document.getElementById('container'),
    function(){}
);