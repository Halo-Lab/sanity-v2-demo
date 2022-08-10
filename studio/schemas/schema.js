import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

// We import object and document schemas
import benefitsItem from './benefitsItem'
import blog from './blog'
import footerItem from './footerItem'
import home from './home'
import latestPost from './latestPost'
import layout from './layout'
import mobileAppItems from './mobileAppItems'
import navItem from './navItem'
import partnersItem from './partnersItem'
import statsItem from './statsItem'
import testimonialsItem from './testimonialsItem'
import meta from './meta'
import hero from './hero'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    blog,
    home,
    layout,
    
    benefitsItem,
    footerItem,
    latestPost,
    mobileAppItems,
    navItem,
    partnersItem,
    statsItem,
    testimonialsItem,
    meta,
    hero
  ]),
})
