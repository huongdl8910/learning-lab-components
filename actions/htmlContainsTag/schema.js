const Joi = require('joi')

module.exports = Joi.object({
  html: Joi.string()
    .meta({ label: 'HTML' })
    .description('An HTML string to parse. This is often used in conjunction with `getFileContents`.')
    .required(),
  tag: Joi.string()
    .meta({ label: 'HTML Tag' })
    .description('The HTML tag to look for.')
    .required(),
  attribute: Joi.string()
    .meta({ label: 'Attribute' })
    .description('An optional HTML attribute to check for.')
})