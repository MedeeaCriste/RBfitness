import React from 'react'
import Image from 'next/image'
export default function AboutMeContent() {
  return (
    <>
    <div className='container mx-auto p-4 font-serif lg:p-8'>
        <div className=' mt-28 flex flex-col gap-4 sm:flex-row sm:justify-between'>
            <div className='flex flex-col gap-4 sm:max-w-[400px] lg:max-w-[500px] 2xl:max-w-[800px] xl:max-w-[600px] xl:gap-8'>
                <h1 className=' font-semibold text-[#df6f71] text-2xl xl:text-3xl'>What is RB Fitness?</h1>
                <p className='xl:text-xl'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
            <Image width={1024} height={1513} className='sm:max-w-72 shadow-md xl:max-w-96 object-cover' src="/assets/imageRalu5.jpg" alt='fitness' />
        </div>
        <div className=' mt-28 flex flex-col gap-4 sm:flex-row sm:justify-between'>
            <Image width={1023} height={1536} className='sm:max-w-72 shadow-md xl:max-w-96 object-cover' src="/assets/imageRalu2.jpg" alt='fitness' />
            <div className='flex flex-col gap-4 sm:max-w-[400px] lg:max-w-[500px] 2xl:max-w-[800px] xl:max-w-[600px] xl:gap-8'>
                <p className=' font-semibold text-[#df6f71] text-2xl xl:text-3xl'>Who am I?</p>
                <p className='xl:text-xl'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum  will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
            </div>
        </div>
        
         
    </div>
    <div className="bg-[url('/assets/Ralubg2.png')] bg-cover lg:h-[500px] 2xl:h-[800px] lg:flex lg:flex-col mt-16 lg:justify-center lg:items-end">
    <div className='flex flex-col sm:justify-center sm:items-center gap-4 container mx-auto mt-16 sm:p-8 xl:p-16 2xl:gap-16'>
        <p className=' font-semibold text-[#df6f71] text-2xl lg:text-3xl font-serif xl:text-4xl'>How can I help you?</p>
        <p className=' text-center font-serif xl:text-xl 2xl:max-w-[1500px]'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which  look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there is anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
    </div>
    </div>
    </>
    
  )
}
