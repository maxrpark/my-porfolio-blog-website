require("dotenv").config();
const Airtable = require("airtable-node");

const airtable = new Airtable({ apiKey: process.env.KEY })
  .base("appOFKzvfCo4ffV7l")
  .table("myProjects");

exports.handler = async (event, context, cb) => {
  const { id } = event.queryStringParameters;
  if (id) {
    try {
      const project = await airtable.retrieve(id);
      console.log(project);
      if (project.error) {
        return {
          statusCode: 500,
          body: `No project with id ${id}`,
        };
      }
      return {
        statusCode: 200,
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify(project),
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: "Network problem",
      };
    }
  }
  return {
    statusCode: 200,
    body: "single project",
  };
};
