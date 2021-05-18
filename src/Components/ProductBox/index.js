import React from 'react';

import { Container } from './styles';

const ProductBox = ({ 
  backgroundColor, 
  title, 
  caption, 
  subtitle, 
  links,
  image,
}) => {
  return (
    <Container backgroundColor={backgroundColor}>
      <h1>{title}</h1>
      <h2>{caption}</h2>
      <p>{subtitle}</p>
      <div>
        {links.map(link => (
          <a href={link.link}>{link.title}</a>
        ))}
      </div>
      <img src={image.image} alt={image.alt} />
    </Container>
  )
}

export default ProductBox;