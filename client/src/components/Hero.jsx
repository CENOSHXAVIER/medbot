import {logo} from '../assets'

const Hero = () => {
  return (
    <header className='w-full flex justify-between items-center flex-col'>
      <nav className='flex justify-between items-center w-full pt-3 mb-3'>
        <img src={logo} alt= 'sumz_logo' className='w-28 object-contain' />
        <button 
        onClick={()=>{
          window.open('https://github.com/cenoshxavier/')
        }} className='black_btn'>
          Github</button>
      </nav>

      <h1 className='head_text'>
        Summarize Article with <br />
        <span className='orange_gradient'>OpenAI GPT-4</span>
      </h1>
      <h2 className='desc'>Simply your reading with Summize,an open-source article summarizer that transforms lengthy articles into clear concise summaries</h2>
    </header>
  )
}

export default Hero