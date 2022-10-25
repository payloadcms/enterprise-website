import React, { Fragment } from 'react';
import NextImage from 'next/future/image';
import classes from './index.module.scss'
import cssVariables from '../../../cssVariables';
import { Props } from '..';

const { breakpoints } = cssVariables;

export const Image: React.FC<Props> = (props) => {
  const {
    imgClassName,
    onClick,
    onLoad: onLoadFromProps,
    size,
    resource,
    priority,
    fill,
  } = props;

  const [isLoading, setIsLoading] = React.useState(true);

  if (resource && typeof resource !== 'string') {
    const {
      width: fullWidth,
      height: fullHeight,
      sizes: imageSizes, // these are pre-sized by Payload
      filename: fullFilename,
      alt,
    } = resource;

    let width = fullWidth;
    let height = fullHeight;
    let filename = fullFilename;

    const foundSize = (size && size in imageSizes) ? imageSizes[size] : undefined

    if (foundSize && Object.keys(foundSize).length > 0) {
      filename = foundSize.filename;
      width = foundSize.width;
      height = foundSize.height;
    }

    // NOTE: this is used by the browser to determine which image to download at different screen sizes
    const sizes = Object.entries(breakpoints).map(([, value]) => `(max-width: ${value}px) ${value}px`).join(', ');

    return (
      <NextImage
        className={[
          isLoading && classes.placeholder,
          classes.image,
          imgClassName
        ].filter(Boolean).join(' ')}
        src={`${process.env.NEXT_PUBLIC_API_URL}/media/${filename}`}
        alt={alt}
        onClick={onClick}
        onLoad={() => {
          setIsLoading(false)
          if (typeof onLoadFromProps === 'function') {
            onLoadFromProps();
          }
        }}
        fill={fill}
        width={!fill ? width : undefined}
        height={!fill ? height : undefined}
        sizes={sizes}
        priority={priority}
      />
    );
  };

  return null
}
