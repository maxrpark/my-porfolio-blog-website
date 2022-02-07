require('dotenv').config()
const Airtable = require('airtable-node')

const airtable = new Airtable({ apiKey: process.env.KEY })
  .base('appOFKzvfCo4ffV7l')
  .table('myProjects')

exports.handler = async (event, context, cb) => {
  const { id } = event.queryStringParameters
  if (id) {
    try {
      const projectData = await airtable.retrieve(id)
/////

const project = projectData.map(p => {
  const { id } = p;
  const {
    name,
    shortDsc,
    longDsc,
    pageUrl,
    gitUrl,
    tags,
    version,
    images_array,
    img,
    projectID
  } = p.fields;
  const url = img[0].url;
  const background_images = [];
  
  images_array.forEach(element => {
background_images.push(element.url);
});
  
  return {
    projectID,
    name,
    shortDsc,
    longDsc,
    pageUrl,
    gitUrl,
    tags,
    version,
    url,
    background_images,
    id
  };
});

      ///
      if (project.error) {
        return {
          statusCode: 500,
          body: `No project with id ${id}`,
        }
      }
      return {
        statusCode: 200,
        body: JSON.stringify(project),
      }
    } catch (error) {
      return {
        statusCode: 500,
        body: 'Network problem',
      }
    }
  }
  return {
    statusCode: 200,
    body: 'single project',
  }
}
