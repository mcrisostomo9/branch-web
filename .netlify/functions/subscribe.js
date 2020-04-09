const Hubspot = require("hubspot")
const fetch = require("node-fetch")

exports.handler = async (event, context, callback) => {
  // Only allow POST
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" }
  }

  const hubspot = new Hubspot({
    apiKey: process.env.HUBSPOT_API_KEY,
  })
  const { payload } = JSON.parse(event.body)

  let email = payload.email
  let data = {
    fields: [
      {
        name: "email",
        value: email,
      },
    ],
  }

  hubspot.forms
    .submit("7448833", "117cadbe-8565-4c1d-b3fc-f6cfe9263b19", data)
    .then(res => {
      console.log("success submission")
      console.log(res)
    })
    .catch(e => {
      console.log("error in submission")
      console.log(e)
    })

  callback(null, {
    statusCode: 200,
    body: "No worries, all is working fine!",
  })
}
