const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const {createPage} = actions
  return new Promise((resolve, reject) => {
    const productTemplate = path.resolve('src/templates/productTemplate.js')
    resolve(
      graphql(`
        {
          allDatoCmsProduct {
            edges {
              node {
                id
                slug
              }
            }
          }
        }
      `).then((result) => {
        if (result.errors) {
          reject(result.errors)
        }
        result.data.allDatoCmsProduct.edges.forEach(({ node }) => {
          createPage ({
            path: node.slug,
            component: productTemplate,
            context: {
              slug: node.slug
            }
          })
        })
        return
      })
    )
  })
}
