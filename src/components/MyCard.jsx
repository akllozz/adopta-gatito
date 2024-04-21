import React from 'react';
import Card from 'react-bootstrap/Card';
import Tags from './Tags'

export default function CatCards({photo, name="Sin Nombre", description, colorTag, textTag}) {

  return (
    <>
    <Card>
      <Card.Img variant="top" src={photo} />
      <Card.Body>
        <Card.Title className='cardtitle'>{name}</Card.Title>
        <Card.Text className='cardtext'> 
          {description}
        </Card.Text>
        <Tags colorTag={colorTag} textTag={textTag}/>
      </Card.Body>
    </Card>
    </>
  );
}

