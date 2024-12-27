import React from 'react';

const Stat = () => {
    return (
        <div className="px-4 sm:px-8 lg:px-16">
            <div className=" grid grid-cols-1 md:grid-cols-3 gap-4 bg-[#f8f7f7cc] rounded-lg p-4 sm:p-6 lg:p-8">
                <div className="stat place-items-center border-none">
                    <div className="stat-value text-2xl sm:text-3xl lg:text-4xl">31K</div>
                    <div className="p-4 rounded-lg text-center sm:text-left">
                        <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-800 mb-2">স্বাস্থ্য সেবা ও পরামর্শ</h3>
                        <div className=''>
                        <p className="text-gray-600 text-sm sm:text-base md:text-justify text-start">
                            আড়াইহাজার এলাকার স্বাস্থ্য সেবা, হাসপাতাল, ডাক্তার এবং ফার্মেসি সংক্রান্ত সব ধরনের তথ্য এবং পরামর্শ এখানে পাবেন।
                        </p>
                        <p className='hidden md:flex'> 
                            আপনার স্বাস্থ্য সচেতনতা বাড়াতে এবং জরুরি পরিস্থিতিতে সাহায্য পেতে আমাদের সেবা গ্রহণ করুন।</p>
                    </div>
                        </div>
                </div>

                <div className="stat place-items-center border-none">
                    <div className="stat-value text-2xl sm:text-3xl lg:text-4xl text-secondary">4,200</div>
                    <div className="p-4 rounded-lg text-center sm:text-left">
                        <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-800 mb-2">স্বাস্থ্য সেবা ও পরামর্শ</h3>
                        <p className="text-gray-600 text-sm sm:text-base text-start md:text-justify">
                            আড়াইহাজার এলাকার স্বাস্থ্য সেবা, হাসপাতাল, ডাক্তার এবং ফার্মেসি সংক্রান্ত সব ধরনের তথ্য এবং পরামর্শ এখানে পাবেন। <p className='hidden md:flex'> 
                            আপনার স্বাস্থ্য সচেতনতা বাড়াতে এবং জরুরি পরিস্থিতিতে সাহায্য পেতে আমাদের সেবা গ্রহণ করুন।</p>
                        </p>
                    </div>
                </div>

                <div className="stat place-items-center border-none">
                    <div className="stat-value text-2xl sm:text-3xl lg:text-4xl">1,200</div>
                    <div className="p-4 rounded-lg text-center sm:text-left">
                        <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-800 mb-2">স্বাস্থ্য সেবা ও পরামর্শ</h3>
                        <p className="text-gray-600 text-sm sm:text-base text-start md:text-justify ">
                            আড়াইহাজার এলাকার স্বাস্থ্য সেবা, হাসপাতাল, ডাক্তার এবং ফার্মেসি সংক্রান্ত সব ধরনের তথ্য এবং পরামর্শ এখানে পাবেন। <p className='hidden md:flex'> 
                            আপনার স্বাস্থ্য সচেতনতা বাড়াতে এবং জরুরি পরিস্থিতিতে সাহায্য পেতে আমাদের সেবা গ্রহণ করুন।</p>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Stat;
