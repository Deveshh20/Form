import React, { useState } from 'react';
import useForm from '../hooks/useForm';
import { useSurvey } from '../custom/SurveyContext';
import { useNavigate } from 'react-router-dom';

const Form = () => {
  const { formData, changeHandler, validateFeedback, errorMessage } = useForm();
  const { surveyData, fetchData } = useSurvey();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const navigate = useNavigate();

  const submitHandler = (event) => {
    event.preventDefault();
    if (validateFeedback()) {
      console.log(formData);
      fetchData(formData.survey); // Fetch data based on the selected survey topic
      setFormSubmitted(true);
      navigate('/survey'); // Use navigate function here
    } else {
      setFormSubmitted(false);
    }
  };

  return (
    <div className='flex justify-center items-center h-screen bg-gray-900'>
      <form onSubmit={submitHandler} className='h-fit px-2 py-14 lg:w-[450px] bg-gray-800 border border-gray-700 rounded-lg flex items-center justify-center flex-col gap-y-2 w-[300px]'>
        <label className='space-y-2 lg:w-[350px] w-[250px]'>
          <p className='text-white lg:text-lg text-md'>Name<sup>*</sup></p>
          <input
            required
            type="text"
            name="name"
            value={formData.name}
            onChange={changeHandler}
            placeholder='Enter your name'
            className='rounded px-2 py-1 bg-gray-700 lg:w-[350px] w-[250px] border text-white placeholder:text-gray-400 border-gray-600'
          />
        </label>
        <label className='space-y-2 lg:w-[350px] w-[250px]'>
          <p className='text-white text-md lg:text-lg'>Email<sup>*</sup></p>
          <input
            required
            type="email"
            name="email"
            value={formData.email}
            onChange={changeHandler}
            placeholder='Email Address'
            className='rounded px-2 py-1 bg-gray-700 lg:w-[350px] w-[250px] border border-gray-600  text-white placeholder:text-gray-400'
          />
        </label>
        <label className='space-y-2 lg:w-[350px] w-[250px]'>
          <p className='text-white text-md lg:text-lg'>Survey Topic<sup>*</sup></p>
          <select required name='survey' value={formData.survey} onChange={changeHandler} className='rounded px-2 py-1 bg-gray-700 lg:w-[350px] w-[250px] text-white border border-gray-600'>
            <option value="">Select a topic</option>
            <option value="Technology">Technology</option>
            <option value="Health">Health</option>
            <option value="Education">Education</option>
          </select>
        </label>
        {formData.survey === "Technology" && (
          <div>
            <label className='space-y-2 lg:w-[350px] w-[250px]'>
              <p className='text-white text-md lg:text-lg'>Favorite Programming Language</p>
              <select required className='rounded px-2 py-1 bg-gray-700 lg:w-[350px] w-[250px] border border-gray-600 text-white'>
                <option value="" >Select a Language</option>
                <option>JavaScript</option>
                <option>Python</option>
                <option>Java</option>
                <option>C#</option>
              </select>
            </label>
            <label className='space-y-2 lg:w-[350px] w-[250px]'>
              <p className='text-white text-md lg:text-lg'>Years of Experience</p>
              <input required type='number' className='rounded px-2 py-1 bg-gray-700 lg:w-[350px] w-[250px] border border-gray-600 text-white' />
            </label>
          </div>
        )}
        {formData.survey === "Health" && (
          <div>
            <label className='space-y-2 lg:w-[350px] w-[250px]'>
              <p className='text-white text-md lg:text-lg'>Exercise Frequency</p>
              <select required className='rounded px-2 py-1 bg-gray-700 lg:w-[350px] w-[250px] border border-gray-600 text-white'>
                <option value="">Select an option</option>
                <option>Daily</option>
                <option>Weekly</option>
                <option>Monthly</option>
                <option>Rarely</option>
              </select>
            </label>
            <label className='space-y-2 lg:w-[350px] w-[250px]'>
              <p className='text-white text-md lg:text-lg'>Diet Preference</p>
              <select required className='rounded px-2 py-1 bg-gray-700 lg:w-[350px] w-[250px] border border-gray-600 text-white'>
                <option value="">Select an option</option>
                <option>Vegetarian</option>
                <option>Vegan</option>
                <option>Non-Vegetarian</option>
              </select>
            </label>
          </div>
        )}
        {formData.survey === "Education" && (
          <div>
            <label className='space-y-2 lg:w-[350px] w-[250px]'>
              <p className='text-white text-md lg:text-lg'>Highest Qualification</p>
              <select required className='rounded px-2 py-1 bg-gray-700 lg:w-[350px] w-[250px] border border-gray-600 text-white'>
                <option value="">Select an option</option>
                <option>High School</option>
                <option>Bachelor's</option>
                <option>Master's</option>
                <option>PhD</option>
              </select>
            </label>
            <label className='space-y-2 lg:w-[350px] w-[250px]'>
              <p className='text-white text-md lg:text-lg'>Field of Study</p>
              <input required type='text' className='rounded px-2 py-1 bg-gray-700 lg:w-[350px] w-[250px] border border-gray-600 text-white' />
            </label>
          </div>
        )}
        <label className='space-y-2 lg:w-[350px] w-[250px]'>
          <p className='text-white text-md lg:text-lg'>Feedback</p>
          <textarea
            name="feedback"
            required
            value={formData.feedback}
            onChange={changeHandler}
            placeholder='Your feedback must be at least 50 characters'
            className='rounded px-2 py-1 bg-gray-700 lg:w-[350px] w-[250px] border border-gray-600 text-white' 
          />
        </label>
        {errorMessage && <span className="error text-red-600">{errorMessage}</span>}<br />
        <button type="submit" className='lg:w-[350px] w-[250px] bg-blue-800 py-2 rounded-lg text-lg text-white hover:bg-blue-700 font-semibold'>Submit</button>
      </form>
    </div>
  );
}

export default Form;
