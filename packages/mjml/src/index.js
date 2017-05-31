import mjml2html, { registerComponent } from 'mjml-core'
import { registerDependencies } from 'mjml-validator'

import { Social, SocialElement } from 'mjml-social'

registerComponent(require('mjml-body'))
registerComponent(require('mjml-head'))
registerComponent(require('mjml-head-attributes'))
registerComponent(require('mjml-head-font'))
registerComponent(require('mjml-head-style'))
registerComponent(require('mjml-head-title'))
registerComponent(require('mjml-button'))
registerComponent(require('mjml-column'))
registerComponent(require('mjml-divider'))
registerComponent(require('mjml-image'))
registerComponent(require('mjml-raw'))
registerComponent(require('mjml-section'))
registerComponent(require('mjml-text'))
registerComponent(require('mjml-table'))

registerComponent(Social)
registerComponent(SocialElement)

registerDependencies(require('./dependencies'))

export default mjml2html
