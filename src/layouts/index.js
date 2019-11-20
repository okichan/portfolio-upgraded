import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled from "styled-components"
import { media, customFonts } from '../style/globalStyle'

class Layout extends React.Component {
   state = {
      domain: "tomomioki.surge.sh",
      company: "Tomomi Oki",
      page_title: "Tomomi Oki | Front-end developer",
      page_description: "Tomomi's portfolio site. Made with React.",
   }
   
   render() {
      return (
         <div>
            <Helmet
               title={this.state.page_title}

               meta={[
                  {
                     charset: "utf-8"
                  }, {
                     name: "viewport",
                     content: "width=device-width, initial-scale=1"
                  }, {
                     http_equiv: "x-ua-compatible",
                     content: "IE=edge,chrome=1"
                  }, {
                     name: "description",
                     content: this.state.page_description
                  }, {
                     itemprop: "name",
                     content: this.state.page_title
                  }, {
                     itemprop: "description",
                     content: this.state.page_description
                  }, , {
                     name: "twitter:card",
                     content: "summary_large_image"
                  }, {
                     name: "twitter:title",
                     content: this.state.page_title
                  }, {
                     name: "twitter:description",
                     content: this.state.page_description
                  },  {
                     property: "og:title",
                     content: this.state.page_title
                  }, {
                     property: "og:type",
                     content: "website"
                  }, {
                     property: "og:url",
                     content: `${this.state.domain}${this.props.location_pathname}`
                  }, {
                     property: "og:description",
                     content: this.state.page_description
                  },  {
                     name: "theme-color",
                     content: "#ececec"
                  }
               ]}
							 />

            {this.props.children({
               ...this.props,
            })}
           
         </div>
      )
   }

}

Layout.propTypes = {
   children: PropTypes.func,
}

export default Layout
