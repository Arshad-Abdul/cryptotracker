import BannerImage from '../../assets/banner.jpg';
function Banner(){

    return(
        <div className='w-full h-[25rem] relative'>
            <img 
                src={BannerImage}
                alt="Banner"
                className='w-full h-full object-cover'
            />
            <div className='absolute top-20 left-0 right-0 mx-auto w-[20rem]'>
                <div className='flex flex-col gap-4 w-full h-full items-center justify-center'>
                    <div className='font-semibold text-3xl text-white w-full text-center'>
                        Crypto Tracker
                    </div>
                    <div className='font-semibold text-sm text-white text-center'>
                        Get All Regarding the Crypto
                    </div>
                </div>
            </div>
        </div>
    )

}
export default Banner;