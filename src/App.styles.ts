import styled from "styled-components";
import  IconButton  from "@material-ui/core/IconButton";


export const Wrapper = styled.div`
    margin:40px;
    @media (min-width: 600px){
        .MuiGrid-grid-sm-4{
            max-width:50% ;
        }
    }
`;

export const StyledButton = styled(IconButton)`
    position: fixed;
    z-index:999;
    right:20px;
    top:20px;
`;