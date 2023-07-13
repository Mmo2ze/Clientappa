'use client';

import { Button } from 'flowbite-react';

export default function DefaultButtons(button) {
  return (
    <>

      <Button onClick={button.onClick} color={button.color}>
        {button.text}

      </Button>
      
    </>
  )
}


