import React, { ElementType, Fragment, Ref } from 'react';
import { Video } from './Video';
import { Image } from './Image';
import { StaticImageData } from 'next/future/image';

export type PayloadMediaType = {
  mimeType: string
  filename: string
  fallback?: string // this is typically used for video posters
  width: number
  height: number
  alt: string
  sizes?: {
    [size: string]: {
      filename: string
      width: number
      height: number
    }
  }
}

export type MediaProps = {
  src?: StaticImageData // for static media
  alt?: string
  resource?: PayloadMediaType // for Payload media
  size?: string // for NextImage only
  priority?: boolean // for NextImage only
  fill?: boolean // for NextImage only
  className?: string
  imgClassName?: string
  videoClassName?: string
  htmlElement?: ElementType | null
  onClick?: () => void
  onLoad?: () => void
  ref?: Ref<(null | HTMLImageElement | HTMLVideoElement)>
}

export const Media: React.FC<MediaProps> = (props) => {
  const {
    className,
    resource,
    htmlElement = 'div'
  } = props;

  const isVideo = typeof resource !== 'string' && resource?.mimeType?.includes('video');
  const Tag = htmlElement as ElementType || Fragment;

  return (
    <Tag
      {...htmlElement !== null ? {
        className
      } : {}}
    >
      {isVideo ? (
        <Video {...props} />
      ) : (
        <Image {...props} /> // eslint-disable-line
      )}
    </Tag>
  )
};
