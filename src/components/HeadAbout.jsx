import Chips from '../components/Chips'

export default function App({label}) {
    return (

        <div className='bg-slate-100 h-auto'>
            
            <div className='flex h-[32vh] pt-16 lg:items-end items-start px-5 '>
                <div className='flex justify-between items-center w-full'>
                    <p className="px-3 py-2 text-blue-700 font-medium text-xl rounded">-About Us</p>
                    <Chips label={'About Us'} />
                </div>

            </div>
            <div className="flex justify-center ">

                <div className="flex translate-y-11 justify-start gap-6 h-[65vh]  items-start text-center w-[80%] flex-col text-black">

                    <p className="font-bold text-[52px] leading-[50px] mt-10" >We are an Independent Brand, Design, and Communication Agency</p>
                    {/* <p className="text-[20px]">
                    We are an insight and behaviors driven creative marketing agency. A Full package Digital Creative Agency Specializing 
                    in: Video Production, Web Design, Branding, Brand Strategy, Content Marketing and Aerial Cinematography.
                </p> */}
                </div>
            </div>
        </div>

    );
}
