import React, { createContext, useState, useContext } from 'react';

const SurveyContext = createContext();

export const SurveyProvider = ({ children }) => {
    const [surveyData, setSurveyData] = useState(null);

    const fetchData = async (survey) => {
        try {
            const result = await fetch(`https://new-survey-api.vercel.app/survey/${survey}`);
            const data = await result.json();
            setSurveyData(data);
        } catch (error) {
            console.log("Error in fetching the Data");
        }
    };

    return (
        <SurveyContext.Provider value={{ surveyData, fetchData }}>
            {children}
        </SurveyContext.Provider>
    );
};

export const useSurvey = () => {
    return useContext(SurveyContext);
};
