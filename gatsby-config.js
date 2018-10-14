module.exports = {
   siteMetadata: {
     title: `Tomomi Oki`,
     siteUrl: `https://tomomioki.now.zh/`
   },
   plugins: [
     `gatsby-plugin-react-helmet`, 
     `gatsby-plugin-styled-components`, {
       resolve: `gatsby-plugin-sitemap`
     },
     `gatsby-plugin-react-next`,
     {
       resolve: 'gatsby-plugin-favicon',
       options: {
         logo: './src/favicon.png',
         injectHTML: true,
         icons: {
           android: true,
           appleIcon: true,
           appleStartup: true,
           coast: false,
           favicons: true,
           firefox: true,
           twitter: false,
           yandex: false,
           windows: false
         }
       }
     }
   ]
 };
 