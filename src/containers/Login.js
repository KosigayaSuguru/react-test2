import React from 'react';
import { connect } from "react-redux";

class Login extends React.Component {

    // ログインボタンのイベントハンドラ（クリック）
    login = () => {
        this.props.increment()
        console.log(this)
    }

    // ID/PWボタンのイベントハンドラ（更新）
    update = (event) => {
        console.log(event.target.name)
        var a = {}
        a[event.target.name] = event.target.value
        this.setState(a)
    }

    render() {

        // console.log("----------")
        // console.log(this.props)
        // console.log("----------")

        return (
            <div>
                <div>ID: <input type="text" name="id" onChange={this.update}></input></div>
                <div>PW: <input type="text" name="pw" onChange={this.update}></input></div>
                <button onClick={this.login}>ログイン</button>
            </div >
        )
    }
}

const mapStateToProps = state => {
    // console.log("- - - - - -")
    // console.log(state)
    // console.log("- - - - - -")
    return { aa: state.counter1, bb: state.counter2 };
}

const mapDispatchToProps = dispatch => {
    return {
        // dispatching plain actions
        increment: () => dispatch({ type: 'INCREMENT' }),
        decrement: () => dispatch({ type: 'DECREMENT' }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)