import React from 'react'
// import Link from 'gatsby-link'
import styled from 'styled-components'
import { media, colors, customFonts } from '../style/globalStyle'

function Button({ label, register, clickAction, submitAction, id }) {
   return (
      <ButtonContainer
         onClick={clickAction}
         onSubmit={submitAction}
         id={id}
         register={register}
         >
         {label}
      </ButtonContainer>
   )
}


const ButtonContainer = styled.button`
   background: transparent;
   /* color: ${props => (props.register ? 'inherit' : '#22334D')};; */
   font-weight: 400;
   border: none;
   border-bottom: ${props => (props.register ? `2px solid ${colors.darkNavy}` : 'none')};
   align-self: ${props => (props.register ? 'center' : 'flex-end')};
   cursor: pointer;
   transition: opacity .5s ease-in-out;
   margin: 0;
   margin-top: ${props => (props.register ? '6vh' : '0vh')};
   padding: ${props => (props.register ? '0' : '2vh')};
   white-space: nowrap;
   &:hover {
      opacity: 0.6;
   }

   ${media.mobileL`
      align-self: center;
      font-size: .98rem;
      margin-bottom: 2rem;
   `};
`

export default Button
