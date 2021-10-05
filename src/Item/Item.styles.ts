import styled from "styled-components";

export const Wrapper = styled.div`
    display:flex;
    justify-content:space-between;
    flex-direction: column;
    width:75%;
    margin:auto;
    border:1px solid #000000;
    border-radius:20px;
    

    button{
        border-radius: 0 0 20px 20px;
    }
    
    img{
        max-height:250px;
        object-fit:cover;
        border-radius:20px 20px 0px 0px;
    }
    div{
        font-family:'Roboto', sans-serif;
        padding: 1rem;
        
        height:100%;
        
    }
    @media (max-width: 1280px) {
        height:380px;
        
    }
    @media (max-width: 767px) {
        width:95%;
        height:auto;
    }
    
`;