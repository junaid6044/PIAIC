'use client'
import Image from 'next/image'
import { useState } from 'react';
import Button from './components/Button';

export default function Home() {
  const names = ["Junaid", "Ali", "Ahmad", "Usman", "Umair", "Ahsan"];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % names.length);
  };

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? names.length - 1 : prevIndex - 1
    );
  };

  return (
    <div>
      <ul>
        {names.map((name, index) => (
          <li
            key={index}
            style={{
              fontWeight: index === currentIndex ? 'bold' : 'normal',
              textDecoration: index === currentIndex ? 'underline' : 'none',
            }}
          >
            {name}
          </li>
        ))}
      </ul>


      <p>Current Name: {names[currentIndex]}</p>
      <Button click={handlePrevClick} title="Previous"/>
      <Button click={handleNextClick} title="Next"/>
    </div>
  )
}
