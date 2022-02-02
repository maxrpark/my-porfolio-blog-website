require("dotenv").config();
const Airtable = require("airtable-node");

const airtable = new Airtable({ apiKey: process.env.KEY })
  .base("appOFKzvfCo4ffV7l")
  .table("myProjects");

exports.handler = async (event, context, cb) => {
  try {
    const data = await airtable.list({
      sort: [{ field: "projectID", direction: "asc" }]
    });
    const { records } = await airtable.list()
    console.log(data);
//     const { records } = await airtable.list({
//       sort: [{ field: "projectID", direction: "desc" }]
//     });

    const projects = records.map(project => {
      const { id } = project;
      const {
        name,
        shortDsc,
        longDsc,
        pageUrl,
        gitUrl,
        tags,
        version,
        img,
        projectID
      } = project.fields;
      const url = img[0].url;
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
        id
      };
    });
    return {
      headers:{
        'Access-Control-Allow-Origin': '*',
      },
      statusCode: 200,
      body: JSON.stringify(projects)
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: "Server Error"
    };
  }
};
