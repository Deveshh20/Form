import React from 'react';
import { useSurvey } from '../custom/SurveyContext';

const Survey = () => {
    const { surveyData, fetchData } = useSurvey();

    return (
        <div className='bg-gray-900 h-screen flex justify-center items-center'>            
            {surveyData && (
                <div className='flex flex-col gap-y-4 bg-gray-800 lg:h-[570px] rounded border border-gray-700 px-4 py-4 lg:w-[650px] w-[350px]'>
                    <h3 className='text-white text-2xl'>More Survey Questions</h3>
                    <ul className='space-y-4'>
                        {surveyData.map((question, index) => (
                            <li key={index} className='space-y-2'>
                                <p className='text-white'>{question}</p>
                                <textarea
                                 placeholder='Enter your answer'
                                    className='rounded px-2 py-1 bg-gray-700 lg:w-[350px] lg:h-[50px] border border-gray-600 text-white w-[300px] h-[40px]'
                                />
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Survey;
