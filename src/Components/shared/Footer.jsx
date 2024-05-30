
const Footer = () => {
    return (
        <div className='w-100 bg-[#2d1e15]'>
            
            <div className='w-5/6 md:grid grid-cols-4 m-auto py-10 border-b-4'>
                <div className='grid items-center'>
                    <img src='https://i.ibb.co/pPGLFr9/logo2.jpg' alt="" className='w-40 h-40'/>
                </div>

                <div className='grid items-center gap-4'>
                    <h2 className='text-3xl text-white font-bold sm: mt-10 md:mt-0'>Company</h2>
                    <a href="" className='text-1xl text-white'>About Us</a>
                    <a href="" className='text-1xl text-white'>Work</a>
                    <a href="" className='text-1xl text-white'>Latest News</a>
                    <a href="" className='text-1xl text-white'>Careers</a>
                </div>

                <div className='grid items-center gap-4 '>
                    <h2 className='text-3xl text-white font-bold sm: mt-10 md:mt-0'>Product</h2>
                    <a href="" className='text-1xl text-white'>Prototype</a>
                    <a href="" className='text-1xl text-white'>Plans & Pricing</a>
                    <a href="" className='text-1xl text-white'>Customers</a>
                    <a href="" className='text-1xl text-white'>Integrations</a>
                </div>

                <div className='grid items-center gap-4'>
                    <h2 className='text-3xl text-white font-bold sm: mt-10 md:mt-0'>Support</h2>
                    <a href="" className='text-1xl text-white'>Help Desk</a>
                    <a href="" className='text-1xl text-white'>Sales</a>
                    <a href="" className='text-1xl text-white'>Become a Partner</a>
                    <a href="" className='text-1xl text-white'>Developers</a>
                </div>

                
               
            </div>

            <div className='w-5/6 m-auto flex md:justify-between md:flex-row flex-col py-5 text-white'>
                 <div>
                    <p>&copy; 2024 Melody Academy. All Rights Reseved</p>
                 </div>

                 <div>
                    <p>Powered by Rafid Ahsan</p>
                 </div>
            </div>

        
        </div>
    );
};

export default Footer;