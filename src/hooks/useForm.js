import { useState } from 'react';

const useForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        survey: "",
        feedback: "",
    });
    const [errorMessage, setErrorMessage] = useState('');

    const changeHandler = (event) => {
        setFormData((prevData) => ({
            ...prevData,
            [event.target.name]: event.target.value
        }));
    };

    const validateFeedback = () => {
        if (formData.feedback.length < 50) {
            setErrorMessage('Feedback must be at least 50 characters long.');
            return false;
        } else {
            setErrorMessage('');
            return true;
        }
    };

    return {
        formData,
        changeHandler,
        validateFeedback,
        errorMessage,
    };
};

export default useForm;
