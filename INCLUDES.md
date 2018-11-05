# Includes Parameters
Documentation on parameters used for includes throughout the site. For information on includes see the [Jekyll docs](https://jekyllrb.com/docs/includes/).

## site-nav
Displays a list of navigation menu items
`{%- include site-nav.html class="header__nav [or] footer__nav" location="inHeader [or] inFooter" -%}`

- `class`: Determines style differentiation between header and footer. 

- `location`: References menu item attribute that determines whether the item should be rendered.

## page-footer
Displays either: pagination, all related URL, or solid bar.
`{%- include page-footer.html pagination="true" -%}`

- `pagination`: Determines whether or not to show pagination include.
