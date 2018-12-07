import styled, { css, injectGlobal } from "styled-components"
import fonts from "../../static/fonts/fonts.css"

injectGlobal`
   ${fonts}

   body, div, nav, a, p, ul, li, h1, h2, h3, h4, span, input, figure, footer, img, button, fieldset {
      font-family: 'Gotham', 'Century Gothic', Arial, Helvetica, sans-serif;
      font-size: 16px;
      color: white;
      letter-spacing: .3rem;
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      text-align: center;
      font-weight: lighter;
      text-decoration: none;

      &:focus {
         outline-offset: 2px;
         outline-style: dotted;
         outline-width: 1px;
         outline-color: inherit;
      }
      
      a {
         transition: opacity .3s ease-in-out;

         &:hover {
            opacity: .7;
         }
      }
   }

`

export const colors = {
   main: '#dad6d1',
   darkNavy: '#141E2D'
}

const breakpoints = {
   fourK: 2000,
   laptopL: 1440,
   laptop: 1024,
   tablet: 800,
   mobileL: 600,
   mobileM: 380,
   mobileS: 320
 }

 export const above = Object.keys(breakpoints).reduce((accumulator, label) => {
   accumulator[label] = (...args) => css`
     @media (min-width: ${breakpoints[label]}px) {
       ${css(...args)};
     }
   `
   return accumulator
 }, {})
 
 export const below = Object.keys(breakpoints).reduce((accumulator, label) => {
   accumulator[label] = (...args) => css`
     @media (max-width: ${breakpoints[label]}px) {
       ${css(...args)};
     }
   `
   return accumulator
 }, {})
 

export const media = {
   mobileS: (...args) => css`
      @media (max-width: 320px) {
         ${css(...args)};
      }
   `,
   mobileM: (...args) => css`
      @media (max-width: 380px) {
         ${css(...args)};
      }
   `,
   mobileL: (...args) => css`
      @media (max-width: 600px) {
         ${css(...args)};
      }
   `,
   tablet: (...args) => css`
      @media (max-width: 800px) {
         ${css(...args)};
      }
   `,
   laptop: (...args) => css`
      @media (max-width: 1024px) {
         ${css(...args)};
      }
   `,
   laptopL: (...args) => css`
      @media (max-width: 1440px) {
         ${css(...args)};
      }
   `,
   above4K: (...args) => css`
      @media (min-width: 2000px) {
         ${css(...args)};
      }
   `
}
