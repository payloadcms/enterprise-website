import { LINK_FIELDS } from "./link";

export const CALL_TO_ACTION = `
...on CalltoAction {
  blockType
  ctaBackgroundColor: backgroundColor
  richText
  ctaLinks: links {
    link ${LINK_FIELDS({ disableAppearance: true })}
  }
}
`

export const CONTENT = `
...on Content {
  blockType
  contentBackgroundColor: backgroundColor
  layout
  columnOne {
    richText
    enableLink
    columnOneLink: link ${LINK_FIELDS({ disableAppearance: true })}
  }
  columnTwo {
    richText
    enableLink
    columnTwoLink: link ${LINK_FIELDS({ disableAppearance: true })}
  }
  columnThree {
    richText
    enableLink
    columnThreeLink: link ${LINK_FIELDS({ disableAppearance: true })}
  }
}
`

export const MEDIA_BLOCK = `
...on MediaBlock {
  blockType
  mediaBackgroundColor: backgroundColor
  position
  media {
    url
  }
  caption
}
`
