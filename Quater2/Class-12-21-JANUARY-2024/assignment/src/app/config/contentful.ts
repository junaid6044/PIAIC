const contentful = require('contentful')

const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  environment: 'master', // defaults to 'master' if not set
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
})

client.getEntry('4NVxIM335ORcMl9ONWMx9g')
  .then((entry: any) => console.log(entry))
  .catch(console.error)

export default client;