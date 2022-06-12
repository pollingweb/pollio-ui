import { SignUpContainer } from '../components/styles/SignUpContainer.styled';
import styled from 'styled-components';
import pic from "../images/sign-up.svg";
import { BiEnvelope, BiHash, BiPhone, BiIdCard, BiCamera } from "react-icons/bi";
import InputFeild from '../components/styles/InputFeild.styled';
import { useState } from 'react';
import Camera from '../components/Camera';
import axios from 'axios'

// background-color : ${({ theme }) => theme.color.blur};
const Main = styled.div`
    width : 70vw;
    margin : auto;
    overflow : hidden;
    border-radius : 1rem;
    display: flex;
    background-color: #c4c4c440;

    @media (max-width: 768px) { 
        flex-direction : column;
    }
`

const Left = styled.div`
    background-color : #dae9e432;
    padding : 5%;
    display : flex;
    flex-direction : column;
    width : 35vw;
    h1 {
        color : white;
        display :inline-block;
    }
    h2 {
        color : #1C4F46;
        display :inline-block;
    }
    img {
        width : 100%;
    }

    @media (max-width: 768px) { 
        width : 100%;
    }
`

const Right = styled.div`
    padding : 10px;
    width : 35vw;
    padding : 5% 1%;

    @media (max-width: 768px) { 
        width : 100%;
        padding : 0;
    }
`

const Button = styled.button`
    width : 80%;
    height : 50px;
    border : 0;
    border-radius : 0.5rem;
    display : flex;
    margin : 10% auto;
    background-color : #DAE9E4;
    color : #1C4F46;
    justify-content : center;
    align-items : center;
    cursor : pointer;
    font-size : x-large;
    font-weight : bold;
    border : 3px solid transparent;

    &:hover {
        background-color : #b9c9c4;
        outline : 3px solid #284e41;
    }

    @media (max-width: 768px) { 
        width : 80%;
    }
`

const SignUp = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [camera, setCamera] = useState(false);
    const [state,setstate]=useState({
        email:"",
        password:'',
        phone:'',
        voterId:''
    })

    const showCamera = () => {
        setCamera(true);
    }

    const handleSubmit = async ()=>{
        const res = axios.post(process.env.REACT_APP_API_BASEURL+'',state)

        if(res.status===200){
            //signup successfull logic 
        }
    }

    return (
        <>
            <SignUpContainer>
                <Main>
                    <Left>
                        <h1>POLL.IO</h1>
                        <h2>Voting made easy</h2>
                        <img src={pic} alt="img-logo" />
                    </Left>
                    <Right>
                        <InputFeild icon={BiEnvelope} type="text" placeholder='Enter your email' value={state.email} onChange={e=>setstate(pre=>({...pre,email:e.target.value}))}/>
                        <InputFeild icon={BiHash} type="password" placeholder='Enter your password' value={state.password} onChange={e=>setstate(pre=>({...pre,password:e.target.value}))}/>
                        <InputFeild icon={BiPhone} type="text" placeholder='Enter your phone'value={state.phone} onChange={e=>setstate(pre=>({...pre,phone:e.target.value}))} />
                        <InputFeild icon={BiIdCard} type="text" placeholder='Enter voterId no' value={state.voterId} onChange={e=>setstate(pre=>({...pre,voterId:e.target.value}))}/>
                        <div onClick={showCamera} style={{ cursor: "pointer" }}>
                            <InputFeild icon={BiCamera} type="text" placeholder='Take a picture' disable={true} />
                        </div>
                        <Button onClick={handleSubmit}>Verify Cedentials</Button>
                    </Right>
                </Main>

                {camera && <Camera hide={() => setCamera(false)} />}
            </SignUpContainer>
        </>
    )
}

export default SignUp
