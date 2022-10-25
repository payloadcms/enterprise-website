import { LINK_FIELDS } from "./link";

export const CALL_TO_ACTION = `
...on CalltoAction {
  blockType
  ctaBackgroundColor
  richText
  links {
    link ${LINK_FIELDS({ disableAppearance: true })}
  }
}
`

export const CONTENT = `
...on Content {
  blockType
  contentBackgroundColor
  layout
  columnOne {
    richText
    enableLink
    link ${LINK_FIELDS({ disableAppearance: true })}
  }
  columnTwo {
    richText
    enableLink
    link ${LINK_FIELDS({ disableAppearance: true })}
  }
  columnThree {
    richText
    enableLink
    link ${LINK_FIELDS({ disableAppearance: true })}
  }
}
`

export const MEDIA_BLOCK = `
...on MediaBlock {
  blockType
  mediaBackgroundColor
  position
  media {
    url
  }
  caption
}
`
