import Head from 'next/head'
import MenuBtn from '../components/menuBtn'

export default function Home(): JSX.Element {

  return (
    <>
    <Head>
      <title>Create Next App</title>
    </Head>
    <main>
      {/* hero section */}
      <section id="hero">
        {/* hero container */}
        <div className="container max-w-6xl mx-auto px-6 py-12">
          {/* menu/logo cont */}
          <nav className="flex items-center justify-between font-bold text-white">
            {/* logo */}
            <img src="logo.svg" alt="" />
            {/* menu */}
            <div className="hidden h-10 font-alata md:flex md:space-x-8">
              <div className="group">
                <a href="#">About</a>
                <div className="mx-2 group-hover:border-b group-hover:border-blue-100"></div>
              </div>
              <div className="group">
                <a href="#">Carreers</a>
                <div className="mx-2 group-hover:border-b group-hover:border-blue-100"></div>
              </div>
              <div className="group">
                <a href="#">events</a>
                <div className="mx-2 group-hover:border-b group-hover:border-blue-100"></div>
              </div>
              <div className="group">
                <a href="#">Products</a>
                <div className="mx-2 group-hover:border-b group-hover:border-blue-100"></div>
              </div>
              <div className="group">
                <a href="#">Support</a>
                <div className="mx-2 group-hover:border-b group-hover:border-blue-100"></div>
              </div>
            </div>
            {/*hamb button */}
            <MenuBtn />
          </nav>

          {/* mobile menu */}
          <div 
            id="menu" 
            className="absolute top-0 bottom-0 left-0 hidden flex-col self-end w-full min-h-screen py-1 pt-40 pl-12 space-y-3 text-lg text-white uppercase bg-black"
          >
            <a href="#" className="hover:text-pink-500">Home</a>
            <a href="#" className="hover:text-pink-500">careers</a>
            <a href="#" className="hover:text-pink-500">events</a>
            <a href="#" className="hover:text-pink-500">products</a>
            <a href="#" className="hover:text-pink-500">support</a>
          </div>

          <div className="max-w-lg mt-32 mb-32 p-4 font-sans text-4xl text-white uppercase border-2 md:p-10 md:m-32 md:mx-0 md:text-6xl">
            Impressive Experiences That Deliver
          </div>
        </div>
      </section>

      {/* features sec */}
      <section id="feature">
        {/* feat cont */}
        <div className="relative container flex-col max-w-6xl mx-auto my-32 px-6 text-gray-900 md:flex-row md:px-0">
          <img src="/desktop/image-interactive.jpg" alt="" />

          {/* text cont */}
          <div className="top-48 pr-0 bg-white md:absolute md:right-0 md:py-20 md:pl-20">
            <h2 className="max-w-lg mt-10 mb-6 font-sans text-4xl text-center text-gray-900 uppercase md:text-5xl md:mt-0 md:text-left">The leader in interactive vr</h2>

            <p className="max-w-md text-center md:text-left">
              Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations have transformed businesses through digital experiences that bind to their brand.
            </p>
          </div>
        </div>
      </section>

      {/* creations section  */}
      <section id="creations">
        {/* container */}
        <div className="container max-w-6xl mx-auto my-32 px-6 text-gray-900 md:px-0">
          
          {/* creations header */}
          <div className="flex justify-center mb-20 md:justify-between">
            <h2 className='text-4xl text-center uppercase md:text-left md:text-5xl'>
              Our Creations
            </h2>

            <button className="hidden btn md:block">
              See All
            </button>
          </div>
          
          {/* items container */}
          <div className="item-container">
            {/* item 1 */}
            <div className="group item">
              {/* dt img */}
              <img 
                src="/desktop/image-deep-earth.jpg" 
                className='hidden w-full duration-200 md:block group-hover:scale-110 ' 
                alt="" />
                {/* mb img */}
              <img 
                src="/mobile/image-deep-earth.jpg" 
                className=' w-full md:hidden' 
                alt="" />
              {/* gradient */}
              <div className="item-gradient"></div>
              {/* item text */}
              <h5>
                Deep Earth
              </h5>
            </div>

            {/* item 2 */}
            <div className="group item">
              {/* dt img */}
              <img 
                src="/desktop/image-night-arcade.jpg" 
                className='hidden w-full duration-200 md:block group-hover:scale-110 ' 
                alt="" />
                {/* mb img */}
              <img 
                src="/mobile/image-night-arcade.jpg" 
                className=' w-full md:hidden' 
                alt="" />
              {/* gradient */}
              <div className="item-gradient"></div>
              {/* item text */}
              <h5>
                Night Arcade
              </h5>
            </div>

            {/* item 3 */}
            <div className="group item">
              {/* dt img */}
              <img 
                src="/desktop/image-soccer-team.jpg" 
                className='hidden w-full duration-200 md:block group-hover:scale-110 ' 
                alt="" />
                {/* mb img */}
              <img 
                src="/mobile/image-soccer-team.jpg" 
                className=' w-full md:hidden' 
                alt="" />
              {/* gradient */}
              <div className="item-gradient"></div>
              {/* item text */}
              <h5>
                Soccer team vr
              </h5>
            </div>

            {/* item 4 */}
            <div className="group item">
              {/* dt img */}
              <img 
                src="/desktop/image-grid.jpg" 
                className='hidden w-full duration-200 md:block group-hover:scale-110 ' 
                alt="" />
                {/* mb img */}
              <img 
                src="/mobile/image-grid.jpg" 
                className=' w-full md:hidden' 
                alt="" />
              {/* gradient */}
              <div className="item-gradient"></div>
              {/* item text */}
              <h5>
                the grid
              </h5>
            </div>
          </div>
          {/* items container */}
          <div className="item-container mt-10">
            {/* item 1 */}
            <div className="group item">
              {/* dt img */}
              <img 
                src="/desktop/image-from-above.jpg" 
                className='hidden w-full duration-200 md:block group-hover:scale-110 ' 
                alt="" />
                {/* mb img */}
              <img 
                src="/mobile/image-from-above.jpg" 
                className=' w-full md:hidden' 
                alt="" />
              {/* gradient */}
              <div className="item-gradient"></div>
              {/* item text */}
              <h5>
                From up above vr
              </h5>
            </div>

            {/* item 2 */}
            <div className="group item">
              {/* dt img */}
              <img 
                src="/desktop/image-pocket-borealis.jpg" 
                className='hidden w-full duration-200 md:block group-hover:scale-110 ' 
                alt="" />
                {/* mb img */}
              <img 
                src="/mobile/image-pocket-borealis.jpg" 
                className=' w-full md:hidden' 
                alt="" />
              {/* gradient */}
              <div className="item-gradient"></div>
              {/* item text */}
              <h5>
                pocket borealis
              </h5>
            </div>

            {/* item 3 */}
            <div className="group item">
              {/* dt img */}
              <img 
                src="/desktop/image-curiosity.jpg" 
                className='hidden w-full duration-200 md:block group-hover:scale-110 ' 
                alt="" />
                {/* mb img */}
              <img 
                src="/mobile/image-curiosity.jpg" 
                className=' w-full md:hidden' 
                alt="" />
              {/* gradient */}
              <div className="item-gradient"></div>
              {/* item text */}
              <h5>
                the curiosity
              </h5>
            </div>

            {/* item 4 */}
            <div className="group item">
              {/* dt img */}
              <img 
                src="/desktop/image-fisheye.jpg" 
                className='hidden w-full duration-200 md:block group-hover:scale-110 ' 
                alt="" />
                {/* mb img */}
              <img 
                src="/mobile/image-fisheye.jpg" 
                className=' w-full md:hidden' 
                alt="" />
              {/* gradient */}
              <div className="item-gradient"></div>
              {/* item text */}
              <h5>
                make it fisheye
              </h5>
            </div>
          </div>
          {/* bottom button cont */}
          <div className="flex justify-center mt-10 md:hidden">
            <button className="btn w-full md:hidden">
              See all
            </button>
          </div>
        </div>
      </section>

      <footer className='bg-black'>
        <div className="container max-w-6xl py-10 mx-auto">
          {/* flex container */}
          <div className="flex flex-col items-center mb-8 space-y-6 md:flex-row md:space-y-0 md:justify-between md:items-start">
            {/* menu n logo cont */}
            <div className="flex flex-col items-center space-y-8 md:items-start md:space-y-4">
              {/* logo */}
              <div className="h-8">
                <img src="logo.svg" alt="" className="w-44 md:ml-3" />
              </div>
              {/* menu cont */}
              <div className="flex flex-col items-center space-y-4 font-bold text-white md:flex-row md:space-y-0 md:space-x-6 md:ml-3">
                {/* menu item */}
                <div className="h-10 group">
                  <a href="#">About</a>
                  <div className="mx-2 duration-200 group-hover:border-b group-hover:border-blue-50"></div>
                </div>
                {/* menu item */}
                <div className="h-10 group">
                  <a href="#">Careers</a>
                  <div className="mx-2 duration-200 group-hover:border-b group-hover:border-blue-50"></div>
                </div>
                {/* menu item */}
                <div className="h-10 group">
                  <a href="#">Events</a>
                  <div className="mx-2 duration-200 group-hover:border-b group-hover:border-blue-50"></div>
                </div>
                {/* menu item */}
                <div className="h-10 group">
                  <a href="#">Products</a>
                  <div className="mx-2 duration-200 group-hover:border-b group-hover:border-blue-50"></div>
                </div>
                {/* menu item */}
                <div className="h-10 group">
                  <a href="#">Support</a>
                  <div className="mx-2 duration-200 group-hover:border-b group-hover:border-blue-50"></div>
                </div>
              </div>
            </div>

            {/* social n right cont*/}
            <div className="flex flex-col items-start justify-between space-y-4 text-gray-500">
              {/* icons container */}
              <div className="flex items-center mx-auto justify-center space-x-4 md:justify-end md:mx-0">
                {/* icon */}
                <div className="h-8 group">
                  <a href="#">
                    <img src="icon-facebook.svg" className='h-6' alt="" />
                  </a>
                </div>
                <div className="h-8 group">
                  <a href="#">
                    <img src="icon-twitter.svg" className='h-6' alt="" />
                  </a>
                </div>
                <div className="h-8 group">
                  <a href="#">
                    <img src="icon-pinterest.svg" className='h-6' alt="" />
                  </a>
                </div>
                <div className="h-8 group">
                  <a href="#">
                    <img src="icon-instagram.svg" className='h-6' alt="" />
                  </a>
                </div>
              </div>
              {/* copyright */}
              <div className="font-bold">
                &copy; 2022 Loopstudios. All Rights Reserved
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
    </>
  )
}
