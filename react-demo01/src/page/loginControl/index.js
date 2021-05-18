/*
 * @Description: 
 * @Version: 
 * @Author: David Qu
 * @Date: 2021-05-01 18:13:08
 * @LastEditors: David Qu
 * @LastEditTime: 2021-05-01 18:36:19
 */
import React from 'react'
class LoginControl extends React.Component {
    constructor(props){
        super(props);
        this.state = {isLoggedIn: true};
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
    }
    login(){
        this.setState((state)=>({
            isLoggedIn : true
        }))
    }
    logout(){
        this.setState((state)=>({
            isLoggedIn : false
        }))
    }
    render(){
        let isLogin = this.state.isLoggedIn;
        let button = (
            <div>
                <h1>please log in</h1>
                <button onClick={this.login}>log in</button>
            </div>
        );
        if(isLogin){
            button = (
                <div>
                    <h1>please log out</h1>
                    <button onClick={this.logout}>log out</button>
                </div>
            ); 
        }
        return(
            <div>
                <div>{isLogin}22222</div>
                {this.state.isLoggedIn}
                {button}
            </div>
        )
    }
}
export default LoginControl