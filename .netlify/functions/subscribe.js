const Hubspot = require("hubspot")
const fetch = require("node-fetch")

exports.handler = async (event, context, callback) => {
  const hubspot = new Hubspot({
    apiKey: process.env.HUBSPOT_API_KEY,
  })

  const which = await hubspot.forms.getById("7448833")
  const formm = await hubspot.forms.getById(
    "117cadbe-8565-4c1d-b3fc-f6cfe9263b19"
  )

  console.log(which)
  console.log(formm)

  // hubspot.forms.submit("7448833", "117cadbe-8565-4c1d-b3fc-f6cfe9263b19", data)

  callback(null, {
    statusCode: 200,
    body: "No worries, all is working fine!",
  })
}
