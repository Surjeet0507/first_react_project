import React from "react";
import { Form, Row, Col, Input } from 'antd';


const Login = ()=> {
    
    return(
    <>
      <div className="Signup">
      <Form  > 
        <h1>Login</h1>
      <h4 style={{textAlign:"center" , fontWeight:"lighter"}}>Please enter your email address and password to login </h4>  
        <Row>
            <label Col span={12}push={6} style={{marginTop:"2%"}}> Email</label>
            <Input Col span={12}push={6} placeholder="Email" required></Input>
            <label Col span={10}push={6} style={{marginTop:"2%"}}> Password</label>
            <Input placeholder="Password" equired></Input>
            <label Col span={10}push={6} style={{marginTop:"2%"}}>Conform Password</label>
            <Input placeholder="Conform Password" equired></Input>  
        </Row>
        <Row>
        <Col span={24}>
        <a href>  <button className="btn"  htmlType="submit">Register</button> </a>
        </Col>
        </Row>  
         <a href>Forgot your password</a>
         </Form> 
    </div>
    </>
    )
}
export default Login