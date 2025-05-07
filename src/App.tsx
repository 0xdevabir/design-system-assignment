import './App.css'
import { Heading } from './components/Typography/Heading'
import { Paragraph } from './components/Typography/Paragraphs'

function App() {

  return (
    <>

      <p className='text-[6vh] text-center font-[800] text-[#1b1b1b] py-[4vh]'>Design System Assignment</p>
      <hr />
      <div className="px-[5vw] py-[2vh]">
          <p className='text-[5vh] font-[800] text-[#727272] pb-[4vh]'>TYPOGRAPHY</p>
          <div className="">
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
                <Paragraph text='Lorem ipsum ddidunt ut labore et dolore magna aliqua.' size='sm' />
              </div>
          </div>

      </div>
      
    </>
  )
}

export default App
