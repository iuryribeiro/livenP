import styled from "styled-components";

export const Wrapper = styled.div`

display:flex;
justify-content: space-between;
font-family:'Roboto', sans-serif;
border-bottom: 1px solid #000;
padding-bottom: 20px;

div{
    flex:1;
}
.iformation, .buttons{
    display:flex;
    align-items:center;
    justify-content:space-between;
}
img{
    max-width:80px;
    object-fit:cover;
    margin-left:40px;
}
p{
    margin-top:45px;
}
`;