'use client';

import { Label, TextInput } from 'flowbite-react';

export default function InputColors({input}) {
  return (
   
        <div className="mb-2 block">
          <Label
            color={input.color}
            htmlFor={input.id}
            value={input.value}
          />
        
        <TextInput
          color={input.color}
          id={input.id}
          placeholder={input.placeholder}
          required
        />
      </div>

  )
}


