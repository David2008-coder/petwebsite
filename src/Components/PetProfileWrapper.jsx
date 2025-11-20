import React, { useState, useEffect } from 'react';
import PetProfile from './PetProfile';

const PetProfileWrapper = () => {
  const [petInfo, setPetInfo] = useState({});

  useEffect(() => {
    const storedPetInfo = localStorage.getItem('petInfo');
    if (storedPetInfo) {
      setPetInfo(JSON.parse(storedPetInfo));
    }
  }, []);

  return (
    <PetProfile
      name={petInfo.name}
      breed={petInfo.breed}
      age={petInfo.age}
      species={petInfo.species}
      vaccine={petInfo.vaccine}
    />
  );
};

export default PetProfileWrapper;