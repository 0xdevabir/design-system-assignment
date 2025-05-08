import { useState } from 'react'
import './App.css'
import { TextInput } from './components/DataEntry/TextInput'
import { Heading } from './components/Typography/Heading'
import { Label } from './components/Typography/Label'
import { Paragraph } from './components/Typography/Paragraphs'
import { Dropdown } from './components/DataEntry/Dropdown'
import { DatePicker } from './components/DataEntry/DatePicker'

function App() {
  const [name, setName] = useState('');
  const [errorText, setErrorText] = useState('');
  const [successText, setSuccessText] = useState('');
  const [disabled, setDisabled] = useState('');
  const [required, setRequired] = useState('');
  const [smallName, setSmallName] = useState('');
  const [mediumName, setMediumName] = useState('');
  const [largeInput, setLargeInput] = useState('');


  const [option1, setOption1] = useState('');
  const [option2, setOption2] = useState('');
  const [option3, setOption3] = useState('');
  const [option4, setOption4] = useState('');




  const [dob, setDob] = useState('');
  const [Ddp, setDdp] = useState('');
  return (
    <>

      <p className='text-[6vh] text-center font-[800] text-[#1b1b1b] py-[4vh]'>Design System Assignment</p>
      {/* <hr /> */}
      <div className="px-[5vw] py-[2vh]">
          <p className='text-[5vh] font-[800] text-[#727272] pb-[4vh]'>TYPOGRAPHY</p>
          <hr className='pb-[8vh]'/>
          <div className="flex justify-between flex-wrap gap-[6vw]">
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
          <p className='text-[3vh] font-[800] text-[#2d2d2d] pb-[2vh]'>TEXT INPUTS</p>
          <div className="flex justify-between flex-wrap gap-[6vw]">
              <TextInput
                label="Default Input"
                id="name"
                placeholder="Enter text here"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <TextInput
                label="Error State"
                id="name-error"
                placeholder="Enter text here"
                value={errorText}
                error='This field has an error'
                onChange={(e) => setErrorText(e.target.value)}
              />
              <TextInput
                label="Success State"
                id="name-success"
                placeholder="Enter text here"
                value={successText}
                success={true}
                onChange={(e) => setSuccessText(e.target.value)}
              />
              <TextInput
                label="disabled State"
                id="name-error"
                placeholder="Enter text here"
                value={disabled}
                disabled={true}
                onChange={(e) => setDisabled(e.target.value)}
              />
              <TextInput
                label="Required State"
                id="name-required"
                placeholder="Enter text here"
                value={required}
                required={true}
                onChange={(e) => setRequired(e.target.value)}
              />
              <TextInput
                label="Small Input"
                id="name-small"
                placeholder="Enter text here"
                value={smallName}
                small
                onChange={(e) => setSmallName(e.target.value)}
              />
              <TextInput
                label="Medium Input(default)"
                id="name"
                placeholder="Enter text here"
                value={mediumName}
                onChange={(e) => setMediumName(e.target.value)}
              />
              <TextInput
                label="Large Input"
                id="name-large"
                placeholder="Enter text here"
                value={largeInput}
                large
                onChange={(e) => setLargeInput(e.target.value)}
              />
              
              
          </div>

          <p className='text-[3vh] font-[800] text-[#2d2d2d] pt-[8vh] pb-[2vh]'>Dropdown</p>
          <div className="flex justify-between flex-wrap gap-[6vw]">
              <Dropdown
                label="Basic Dropdown"
                id="dropdown"
                value={option1}
                onChange={(e) => setOption1(e.target.value)}
                options={[
                  { label: 'Option 1', value: 'Option 1' },
                  { label: 'Option 2', value: 'Option 2' },
                  { label: 'Option 3', value: 'Option 3' },
                ]}
              />
              
              <Dropdown
                label="Error Dropdown"
                id="dropdown-error"
                value={option3}
                error='This field has an error'
                onChange={(e) => setOption3(e.target.value)}
                options={[
                  { label: 'Option 1', value: 'Option 1' },
                  { label: 'Option 2', value: 'Option 2' },
                  { label: 'Option 3', value: 'Option 3' },
                ]}
              />
              <Dropdown
                label="Success Dropdown"
                id="dropdown-success"
                value={option4}
                success={true}
                onChange={(e) => setOption4(e.target.value)}
                options={[
                  { label: 'Option 1', value: 'Option 1' },
                  { label: 'Option 2', value: 'Option 2' },
                  { label: 'Option 3', value: 'Option 3' },
                ]}
              />
              <Dropdown
                label="Disabled Dropdown"
                id="dropdown-disabled"
                value={option2}
                disabled={true}
                onChange={(e) => setOption2(e.target.value)}
                options={[
                  { label: 'Option 1', value: 'Option 1' },
                  { label: 'Option 2', value: 'Option 2' },
                  { label: 'Option 3', value: 'Option 3' },
                ]}
              />
          </div>


          <p className='text-[3vh] font-[800] text-[#2d2d2d] pt-[8vh] pb-[2vh]'>DATE PICKER</p>
          <div className="flex justify-between flex-wrap gap-[6vw]">
          <DatePicker
              label="Default Date Picker"
              id="dob"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              required
            />
            <DatePicker
              label="Success Date Picker"
              id="dob-success"
              value={Ddp}
              onChange={(e) => setDdp(e.target.value)}
              success
            />
            <DatePicker
              label="error Date Picker"
              id="dob-disabled"
              value={Ddp}
              onChange={(e) => setDdp(e.target.value)}
              error='Please select a valid date'
            />
            <DatePicker
              label="Disabled Date Picker"
              id="dob-disabled"
              value={Ddp}
              onChange={(e) => setDdp(e.target.value)}
              disabled
            />
          </div>


      </div>
















      <div className="px-[5vw] py-[2vh] mt-[5vh]">
          <p className='text-[5vh] font-[800] text-[#727272] pb-[4vh]'>FEEDBACK</p>
          <hr className='pb-[8vh]'/>
          <p className='text-[3vh] font-[800] text-[#2d2d2d] pb-[2vh]'>ALERT BANNER</p>
          <div className="flex justify-between flex-wrap gap-[6vw]">

          </div>

      </div>

      <div className="h-[20vh]"></div>
    </>
  )
}

export default App
