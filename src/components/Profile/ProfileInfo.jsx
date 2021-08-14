import React from 'react';
import Name from './Name';
import Social from './Social';
import Media from './Media';

function ProfileInfo (props) {
  return (
    <div>
      <Name item={props.item} key={props.item.id}/>
      <Social item={props.item} />
      <Media item={props.item}/>
    </div>
  );
}

export default ProfileInfo;