import React from 'react';

const Notice = () => {
    return (
        <div className='max-w-[1400px] mx-auto px-2'>
            <div className=" bg-base-200  mt-5 md:rounded-lg">
                <div className="flex items-center justify-between">
                    <h1 className='p-3 md:text-2xl text-white bg-red-600 font-bold rounded-l-lg'>নোটিশ</h1>
                    <div>
                    </div>
                   <marquee direction='' className="text-xl text-black ">এই মর্মে সকলকে জানানো যাচ্ছে যে, আমাদের প্রতিষ্ঠান কর্তৃক একটি উন্নয়নমূলক কার্যক্রম চালু করা হয়েছে। এই উন্নয়নের মাধ্যমে আমরা সেবার মানোন্নয়ন ও নতুন ফিচার সংযোজনের দিকে অগ্রসর হচ্ছি। উন্নয়ন কার্যক্রম চলাকালীন সময়ে সেবার অস্থায়ী বিঘ্ন ঘটে যেতে পারে। সাময়িক অসুবিধার জন্য আমরা আন্তরিকভাবে দুঃখিত এবং আমাদের পাশে থাকার জন্য কৃতজ্ঞ।</marquee>
                </div>
            </div>
        </div>
    );
};

export default Notice;