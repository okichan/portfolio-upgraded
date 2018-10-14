import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import { media, colors } from '../style/globalStyle'
import options from './constant'
import Footer from '../components/Footer'
import CloseIcon from './CloseIcon'
import Button from '../components/Button'
import Thankyou from './Thankyou'
import downArrow from '../../static/images/down-arrow.svg'

// IE11 fetch fix
import 'whatwg-fetch'

class Form extends Component {
   state = {
      isFormsent: false,
      values: {},
      url: ''
   }

   constructor(props) {
      super(props)
      this.registerBtn = React.createRef()
   }

   componentDidMount = () => {
      let url
      if (typeof window !== `undefined`) {
         url = window.location.href
            .replace('https://', '')
            .replace('http://', '')
            .replace(/\/$/, '')
         this.setState({ url })
      }
   }

   updateForm = e => {
      let values = this.state.values
      if (e.target.getAttribute('name')) {
         values[e.target.getAttribute('name')] = e.target.value
         this.setState({ values })
      } else {
         return false
      }
   }

   handleSubmit = e => {
      e.preventDefault()

      const submitBtn = document.getElementById('submit')
      submitBtn.style.cursor = 'progress'
      submitBtn.disabled = true

      const fields = [].slice.call(e.target.querySelectorAll('[name]'))
      fields.map(f => {
         let values = this.state.values
         values[f.getAttribute('name')] = f.value
      })

      fetch(
         'https://vds9c5imf1.execute-api.ap-southeast-2.amazonaws.com/prod/franze-ryrie',
         {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(this.state.values)
         }
      )
         .then(res => res.json())
         .then(json => {
            console.log(json)
            let isFormsent = !this.state.isFormsent
            this.setState({ isFormsent })
         })
         .catch(err => console.log(err))
   }

   render() {
      const textFields = ['first name', 'last name', 'phone', 'email', 'postcode']
      const levelOfInvestment = options.levelOfInvestment
      const howDidYou = options.howDidYou
      const apartmentType = options.apartmentType
      const intention = options.intention
      const priceFrom = options.priceFrom
      const priceTo = options.priceTo

      return (
         <FormContainer className="form-container">
            <CloseIcon clickClose={this.props.closeButton} />

            {!this.state.isFormsent ? (
               <Fragment>
                  <h2>
                     An opportunity to experience crafted living with unlimited access to
                     4-star hotel facilities is coming soon to the heart of Geelong.
                     Secure one of only 18 exclusive residences with spacious interiors
                     and incredible views of Corio Bay.
                  </h2>

                  <form onSubmit={this.handleSubmit}>
                     {textFields.map((textField, index) => {
                        const isHalf = index < 4 ? 'half' : ''
                        return (
                           <ItemWrapper key={textField}>
                              <input
                                 type="text"
                                 name={textField.replace(' ', '_')}
                                 id={textField.replace(' ', '_')}
                                 key={textField.replace(' ', '_')}
                                 required
                                 onChange={this.updateForm}
                              />
                              <label key={index} htmlFor={textField.replace(' ', '_')}>
                                 <span>{textField}</span>
                              </label>
                           </ItemWrapper>
                        )
                     })}

                     {/* <ItemWrapper className="half">
                        <select
                           name="intention"
                           className="question property-type"
                           id="intention"
                           required
                           onChange={this.updateForm}
                        >
                           <option
                              selected
                              disabled
                              defaultValue=""
                              className="selection-header"
                           />
                           {intention.map((type, index) => {
                              return <option key={type}>{type}</option>
                           })}
                        </select>
                        <label className="property-label" htmlFor="intention">
                           <span>
                              property use/intention
                           </span>
                        </label>
                     </ItemWrapper> */}

                     <ItemWrapper className="">
                        <select
                           name="apt_type"
                           className="question property-type"
                           id="apt_type"
                           required
                           onChange={this.updateForm}>
                           <option
                              selected
                              disabled
                              defaultValue=""
                              className="selection-header"
                           />
                           {apartmentType.map((type, index) => {
                              return <option key={type}>{type}</option>
                           })}
                        </select>
                        <label className="property-label" htmlFor="apt_type">
                           <span>bedrooms</span>
                        </label>
                     </ItemWrapper>

                     {/* <ItemWrapper className="quarter">
                        <select
                           name="price-from"
                           className="question property-type"
                           id="price-from"
                           required
                           onChange={this.updateForm}
                        >
                           <option
                              selected
                              disabled
                              defaultValue=""
                              className="selection-header"
                           />
                           {priceFrom.map((type, index) => {
                              return <option key={type}>{type}</option>
                           })}
                        </select>
                        <label className="property-label" htmlFor="price-from">
                           <span className="mob-long-text">
                              price range from
                           </span>
                        </label>
                     </ItemWrapper> */}

                     {/* <ItemWrapper className="quarter">
                        <select
                           name="price-to"
                           className="question property-type"
                           id="price-to"
                           required
                           onChange={this.updateForm}
                        >
                           <option
                              selected
                              disabled
                              defaultValue=""
                              className="selection-header"
                           />
                           {priceTo.map((type, index) => {
                              return <option key={type}>{type}</option>
                           })}
                        </select>
                        <label className="property-label" htmlFor="price-to">
                           <span className="mob-long-text">
                              to
                           </span>
                        </label>
                     </ItemWrapper> */}

                     <ItemWrapper>
                        <select
                           name="how"
                           className="question property-type"
                           id="how"
                           required
                           onChange={this.updateForm}>
                           <option
                              selected
                              disabled
                              defaultValue=""
                              className="selection-header"
                           />
                           {howDidYou.map((type, index) => {
                              return <option key={type}>{type}</option>
                           })}
                        </select>
                        <label className="property-label" htmlFor="how">
                           <span className="mob-long-text">how did you hear about ryrie</span>
                        </label>
                     </ItemWrapper>

                     <ItemWrapper className="">
                        <Button
                           label="SUBMIT"
                           submitAction={this.handleSubmit}
                           id="submit"
                           register
                        />
                     </ItemWrapper>
                  </form>
                  {/* <Footer register /> */}
                  <a href="/" className="privacy-policy">PRIVACY POLICY</a>
                  {/* <br /> */}
               </Fragment>
            ) : (
               <Fragment>
                  <Thankyou />
               </Fragment>
            )}
         </FormContainer>
      )
   }
}

const FormContainer = styled.div`
   position: absolute;
   background: #22334D;
   color: white;
   width: 50vw;
   display: flex;
   flex-direction: column;
   justify-content: space-evenly;
   align-items: center;
   top: 0rem;
   left: 100vw;
   right: 0rem;
   bottom: 0;
   overflow-y: auto;
   overflow-x: hidden;
   opacity: 0;
   visibility: hidden;
   transition: all 0.7s, width 0s;
   z-index: 1;
   
   body.open & {
      left: 50vw;
      opacity: 1;
      visibility: visible;
      
      ${media.tablet`
         left: 0vw;
         width: 100vw;
         /* padding: 0 2vw; */
      `}
      ${media.mobileL`
         bottom: auto;
      `}

   }

   .privacy-policy {
      color: white;
      font-size: .7rem;
      margin: 1rem 0;
   }

   h2 {
      font-size: .8rem;
      width: 100%;
      line-height: 1.5;
      letter-spacing: .08rem;
      padding: 0 13.5vw;
      color: white;
      text-transform: none;

      ${media.laptopL`
         padding: 0 10vw;
      `}
      ${media.laptop`
         padding: 0 8vw;
      `}
      ${media.tablet`
         padding: 3rem 2vw 0;
      `}
   }

   }


   form {
      width: 60%;
      /* min-height: 100vh; */
      max-width: 50rem;
      box-sizing: inherit;
      /* display: flex; */
      /* flex-wrap: wrap; */
      /* justify-content: space-between; */

      ${media.tablet`
         width: 95%;
      `}
    
      ${media.mobileL`
         /* min-height: 500px; */
      `}
    
   }
`

const ItemWrapper = styled.fieldset`
   /* font-family: Freight, 'Times New Roman', serif; */
   position: relative;
   width: 100%;
   border: none;
   margin: 2.5rem 0;
   /* letter-spacing: 0.1rem; */
   /* font-size: 0.8rem; */
   text-overflow: ellipsis;


   ${media.mobileL`
      /* height: 1rem; */

      /* &:last-of-type {
         height: auto;
         border: 1px solid magenta;
      } */
   `}
   
   &.half {
      width: 48%;

      ${media.mobileL`
         width: 100%;
      `}
   }

   .mob-long-text {
      ${media.mobileM`
         top: -2rem;
         /* padding-right: 3rem; */
      `}
   }

   input {
      /* text-align: left; */
      text-transform: none;
      border: none;
      padding: 0.1rem 0;
      background: transparent;
      transition: padding-top 0.2s ease, margin-top 0.2s ease;
      overflow-x: hidden; /* Hack to make "rows" attribute apply in Firefox. */
      width: 100%;
      box-shadow: 3px 3px 1px rgba(114, 151, 167, 1) inset;
      /* margin: 1rem 0; */
      &:focus {
         outline: 0;
      }
   }

   option {
      color: black;
      text-indent: 14px;
   }

   input, select {
      /* border-color: ${colors.darkNavy}; */
      font-size: 1.1rem;
      color: white;
      letter-spacing: inherit;
      font-family: inherit;
      font-weight: inherit;
    }
   

   input + label, select + label {
      /* text-align: left; */
      display: block;
      position: relative;
      border-top: 1px solid white;
      -webkit-transition: width 0.2s ease;
      transition: width 0.2s ease;
      height: 0px;
      
      & > span {
         color: white;
         text-transform: uppercase;
         /* text-align: left; */
         position: absolute;
         /* transform: translate(-50%, 0%); */
         font-size: .72rem;
         top: -1.1rem;
         left: 0%;
         width: 100%;
         z-index: -1;
         transition: top 0.3s ease-in-out, font-size 0.3s ease;
         cursor: text;

         &:after {
            content: '*';
            position: absolute;
         }

         ${media.tablet`
            font-size: .8rem;
         `}
      }
   }

   input:focus + label > span,
   input:valid + label > span,
   select:focus + label > span,
   select:valid + label > span  {
      top: -3.9em;
      font-size: 0.6rem;
   }

   input:invalid,
   select:invalid {
      box-shadow: 0 0 3px red; /* for Firefox */
      /* & + label > span {
         background: red;
         z-index: -25;
      } */
   }

   input:required,
   select:required {
      box-shadow: none; /* for Firefox */
   }


   input:-webkit-autofill,
   select:-webkit-autofill {
    box-shadow: 0 0 0 30px #dddddd inset;
   }

   select.property-type {
      -webkit-appearance: button;
      -moz-appearance: button;
      -webkit-user-select: none;
      background: url(${downArrow}) calc(100% - 5px) 3px no-repeat;
      border-width: 0;
      border-radius: 0;
      text-overflow: ellipsis;
      /* text-align-last: center; */
      width: 100%;

      &:focus {
         outline: none;
      }

      &:valid {
         outline: none;
      }
   }

 
`

export default Form
