"use client"
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import zipcodes from 'zipcodes';

export default function Home() {
  const [name, setName] = useState('');
  const [zipcode, setZip] = useState('');
  const [location, setLocation] = useState('');
  const [address, setAddress] = useState('');
  const [telephone, setTelephone] = useState('');
  const [service, setService] = useState('Assisted Living');
  const [results, setResults] = useState(false);
  const locations = [{name: 'Campbell', zipcode: 95008, tel:'(844) 249-0112', add:'419 E Hamilton Ave, Campbell, CA 95008'},
    {name: 'Menlo Park', zipcode: 94025, tel:'(844) 249-0112', add:'890 Santa Cruz Ave, Suite B Menlo Park, CA 94025'},
    {name: 'San Mateo', zipcode: 94401, tel:'(844) 249-0112', add:'102 S El Camino Real, San Mateo, CA 94401'},
    {name: 'San Francisco', zipcode: 94111, tel:'(844) 249-0112', add:'50 California Street, Suite 1500, San Francisco, CA 94111'},
    {name: 'Palo Alto', zipcode: 94301, tel:'(844) 249-0112', add:'228 Hamilton Avenue, 3rd Floor, Palo Alto, CA 94301'},
    {name: 'Walnut Creek', zipcode: 94596, tel:'(844) 249-0112', add:'2121 North California Blvd., Suite 290, Walnut Creek, CA 94596'},
    {name: 'San Jose', zipcode: 95128, tel:'(844) 249-0112', add:'358 S Redwood Ave, San Jose, CA 95128'},
  ];
  const handleSubmit = (e) => {
    e.preventDefault();
    var dis = 10000;
    for (let i = 0; i < locations.length; i++) {
      if (zipcodes.distance(zipcode, locations[i].name) < dis) {
          setLocation(locations[i].name);
          setAddress(locations[i].add);
          setTelephone(locations[i].tel);
          dis = zipcodes.distance(zipcode, locations[i].name);
      }
  }
   setResults(true);
  }
  return (
    <div className='max-w-6xl mx-auto p-3 space-y-4'>
      <h1 className='text-2xl font-medium text-orange-600'>Inquiry Form</h1>
      <form className='grid grid-cols-1' onSubmit={handleSubmit}>
        <label className='flex gap-4'>Name: <input type="text" name="name" value={name} className='border-2 border-black px-2 rounded-md' onChange={(e)=> setName(e.target.value)}/></label>
        <label className='flex gap-4'>Email: <input type="email" name="email" className='border-2 border-black px-2 rounded-md'/></label>
        <label className='flex gap-4'>Zip Code: <input type="text" name="zipcode"  value={zipcode} className='border-2 border-black px-2 rounded-md' onChange={(e)=> setZip(e.target.value)}/></label>
        <label className='flex gap-4'>Service: 
        <select className='border-2 border-black px-2 rounded-md' onChange={(e)=> setService(e.target.value)}>
          <option value="Assisted Living">Assisted Living</option>
          <option value="Home Care">Home Care</option>
          <option value="Home Health">Home Health</option>
          <option value="Independent Living">Independent Living</option>
        </select>
        </label>
        <button type="submit" className='max-w-24 bg-slate-400 rounded-lg'>Submit</button>
      </form>
      
      <div className={results ? 'inline' : 'hidden'}>
      <h1 className='text-2xl font-medium text-orange-600'>Results</h1>
      <p>Hello {name}!</p>
      <p>Your nearest branch is at {location}</p>
      <p>Address: {address}</p>
      <p>Telephone: {telephone}</p>
      <p>You chose {service} as your service</p>
      </div>
    </div>
  )
}
