const Hubspot = require("hubspot")
const fetch = require("node-fetch")

exports.handler = async (event, context, callback) => {
  const hubspot = new Hubspot({
    apiKey: process.env.HUBSPOT_API_KEY,
  })

  var data = {
    submittedAt: "1517927174000",
    fields: [
      {
        name: "email",
        value: "example@example.com",
      },
      {
        name: "firstname",
        value: "Jeff",
      },
    ],
    context: {
      hutk: ":hutk", // include this parameter and set it to the hubspotutk cookie value to enable cookie tracking on your submission
      pageUri: "www.example.com/page",
      pageName: "Example page",
    },
    legalConsentOptions: {
      // Include this object when GDPR options are enabled
      consent: {
        consentToProcess: true,
        text:
          "I agree to allow Example Company to store and process my personal data.",
        communications: [
          {
            value: true,
            subscriptionTypeId: 999,
            text:
              "I agree to receive marketing communications from Example Company.",
          },
        ],
      },
    },
  }

  hubspot.forms
    .submit("7448833", "117cadbe-8565-4c1d-b3fc-f6cfe9263b19", data)
    .then(res => console.log(res))
    .catch(e => console.log(e))

  callback(null, {
    statusCode: 200,
    body: "No worries, all is working fine!",
  })
}
