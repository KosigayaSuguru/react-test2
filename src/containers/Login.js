import React from 'react';
import { connect } from "react-redux";
import Amplify, { Auth } from 'aws-amplify'

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = { id: "", pw: "" }
        console.log("Login#constructor@props")
        console.log(props)
    }

    // ログインボタンのイベントハンドラ（クリック）
    login = () => {

        // cognito認証用のamplifyの設定
        Amplify.configure({
            Auth: {
                // リージョン
                region: 'ap-northeast-1',
                // ユーザープールのID
                userPoolId: sessionStorage.getItem('poolId'),
                // ユーザープールのウェブクライアントID
                userPoolWebClientId: sessionStorage.getItem('clientId'),
                mandatorySignIn: true,
                // 認証後に貰える情報をセッションストレージに入れる
                storage: window.sessionStorage,
            }
        })

        this.props.increment()
        this.props.auth()
        console.log(this)

        // cognito認証
        Auth.signIn(this.state.id, this.state.pw).then(res => {
            console.log(res)
        })
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
                <div>ID: <input type="text" name="id" placeholder="hogeman5" onChange={this.update}></input></div>
                <div>PW: <input type="text" name="pw" placeholder="password" onChange={this.update}></input></div>
                <button onClick={this.login}>ログイン</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    // console.log("- - - - - -")
    // console.log(state)
    // console.log("- - - - - -")
    return { aa: state.counter1, bb: state.counter2, auth_status: state.auth };
}

const mapDispatchToProps = dispatch => {
    return {
        // dispatching plain actions
        increment: () => dispatch({ type: 'INCREMENT' }),
        decrement: () => dispatch({ type: 'DECREMENT' }),
        auth: () => dispatch({ type: 'AUTH' }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)