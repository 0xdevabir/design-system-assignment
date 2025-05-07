import { useState } from 'react'
import './App.css'
import { TextInput } from './components/DataEntry/TextInput'
import { Heading } from './components/Typography/Heading'
import { Label } from './components/Typography/Label'
import { Paragraph } from './components/Typography/Paragraphs'

function App() {
  const [name, setName] = useState('');
  return (
    <>

      <p className='text-[6vh] text-center font-[800] text-[#1b1b1b] py-[4vh]'>Design System Assignment</p>
      {/* <hr /> */}
      <div className="px-[5vw] py-[2vh]">
          <p className='text-[5vh] font-[800] text-[#727272] pb-[4vh]'>TYPOGRAPHY</p>
          <hr className='pb-[8vh]'/>
          <div className="flex justify-around flex-wrap gap-[6vw]">
              <div className="">
                <p className='text-[18px] py-[6px]'>Headings...</p>
                <Heading text='H1 Heading' level={1} />
                <Heading text='H2 Heading' level={2} />
                <Heading text='H3 Heading' level={3} />
                <Heading text='H4 Heading' level={4} />
                <Heading text='H5 Heading' level={5} />
                <Heading text='H6 Heading' level={6} />
              </div>
              <div className="">
                <p className='text-[18px] py-[6px]'>Paragraphs...</p>
                <Paragraph text='This is a paragraph with large size.' size='lg' />
                <Paragraph text='This is a base paragraph.' size='base' />
                <Paragraph text='This is a small paragraph.' size='sm' />
              </div>
              <div className="">
              <p className='text-[18px] py-[6px]'>Labels...</p>
                <Label text='Username' htmlFor='username' />
                <Label text='Email' htmlFor='email' required={true} />
                <Label text='Phone' htmlFor='phone' disabled={true} />
                <Label text='Address' htmlFor='address' />
                <Label text='Password' htmlFor='password' required={true} />
              </div>
          </div>

      </div>














      <div className="px-[5vw] py-[2vh] mt-[5vh]">
          <p className='text-[5vh] font-[800] text-[#727272] pb-[4vh]'>DATA ENTRY</p>
          <hr className='pb-[8vh]'/>
          <div className="flex justify-center flex-wrap gap-[6vw]">
              <TextInput
                label="Name"
                id="name"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <TextInput
                label="Email"
                id="email"
                placeholder="Enter email"
                error="Invalid email address"
                value=""
                onChange={(e) => console.log(e.target.value)}
              />
              <TextInput
                label="Phone"
                id="phone"
                placeholder="Cannot type"
                disabled
                value=""
                onChange={(e) => console.log(e.target.value)}
              />
              <TextInput
                label="Username"
                id="username"
                placeholder="Required field"
                required
                value=""
                onChange={(e) => console.log(e.target.value)}
              />
              <TextInput
                label="Address"
                id="address"
                placeholder="Enter your address"
                value=""
                onChange={(e) => console.log(e.target.value)}
              />
              <TextInput
                label="Password"
                id="password"
                placeholder="Enter your password"
                required
                value=""
                onChange={(e) => console.log(e.target.value)}
              />
              <TextInput
                label="Confirm Password"
                id="confirm-password"
                placeholder="Re-enter your password"
                required
                value=""
                onChange={(e) => console.log(e.target.value)}
              />
              <TextInput
                label="Search"
                id="search"
                placeholder="Search..."
                value=""
                onChange={(e) => console.log(e.target.value)}
              />
              <TextInput
                label="Website"
                id="website"
                placeholder="Enter your website URL"
                value=""
                onChange={(e) => console.log(e.target.value)}
              />
          </div>

      </div>
      
    </>
  )
}

export default App
