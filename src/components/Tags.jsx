import React from 'react'
import Badge from 'react-bootstrap/Badge';

const Tags = ({colorTag, textTag}) => {
  return (
    <>
    <Badge className='tag' bg={colorTag}>{textTag}</Badge>
    </>
  );
};

export default Tags;