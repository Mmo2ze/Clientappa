'use client';
import React, { useEffect, useState } from 'react';
import { Label, Select } from 'flowbite-react';

export default function SelectInput({ classes }) {
  console.log(classes);
  return (
    <div className="max-w-md" id="select">
      <div className="mb-2 block">
      </div>
      <Label
          htmlFor="classesd"
          value="Select class"
        />
      <Select id="classes" required>
        {classes.map((item) => (
          <option key={item.id}>{item.name}</option>
        ))}
      </Select>
    </div>
  );
}


