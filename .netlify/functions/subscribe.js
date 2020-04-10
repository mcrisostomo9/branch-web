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
  const body = JSON.parse(event.body)

  let data = {
    fields: [
      {
        name: "email",
        value: body.email,
      },
    ],
  }

  const response = await hubspot.forms.submit(
    "7448833",
    "117cadbe-8565-4c1d-b3fc-f6cfe9263b19",
    data
  )

  callback(null, {
    statusCode: 200,
    body: JSON.stringify({
      msg: "Welcome! We're stoked to have to be part of the studio.",
      detail: response,
    }),
  })
}
