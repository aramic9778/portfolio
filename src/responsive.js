import { css } from "styled-components"

export const mobile = (props) => {
    return css`
        @media only screen and (max-width: 430px)
        {
            ${props}
        }
    `;


};


export const tablet = (props) => {
    return css`
        @media only screen and (min-width: 430px) and (max-width: 1100px)
        {
            ${props}
        }
    `;


};