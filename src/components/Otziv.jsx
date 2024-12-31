'use client';

import React, { useState, useEffect } from 'react';
import { ChevronDown, Loader2 } from 'lucide-react';

export default function Otziv() {
  const [topics, setTopics] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    topic: '',
    message: '',
    consentToDataProcessing: false,
    consentToPromotionalEmails: false,
  });

  useEffect(() => {
    fetch('https://bakend-wtc.onrender.com/api/v1/applications')
      .then(response => {
        if (!response.ok) throw new Error('Network response was not OK');
        return response.json();
      })
      .then(data => setTopics(data))
      .catch(error => console.error('Error fetching topics:', error));
  }, []);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch('https://bakend-wtc.onrender.com/api/v1/applications', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error(`Network response was not OK, status: ${response.status}`);
      }
      const data = await response.json();
      console.log('Form data successfully sent:', data);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#1a1f2e] p-4 sm:p-6 md:p-8">
      <div className="w-full max-w-4xl  rounded-lg p-8">
        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/2 space-y-6">
            <h1 className="text-3xl font-bold text-white mb-8">Оставить сообщение</h1>

            <div className="space-y-6">
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="ФИО"
                className="w-full bg-transparent border-b border-white/60 pb-2 text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors"
                required
              />

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Телефон"
                className="w-full bg-transparent border-b border-white/60 pb-2 text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors"
                required
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="E-mail"
                className="w-full bg-transparent border-b border-white/60 pb-2 text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors"
                required
              />

              <div className="relative">
                <select
                  name="topic"
                  value={formData.topic}
                  onChange={handleInputChange}
                  className="w-full bg-transparent border-b border-white/60 pb-2 text-white appearance-none focus:outline-none focus:border-white transition-colors"
                  required
                >
                  <option value="" disabled className="text-gray-400">
                    Тема сообщения
                  </option>
                  {topics.map((topic, index) => (
                    <option 
                      key={index} 
                      value={topic.application_type} 
                      className="bg-[#2a2f3e] text-white"
                    >
                      {topic.application_type}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-0 bottom-3 w-5 h-5 text-white pointer-events-none" />
              </div>
            </div>

            <div className="space-y-3">
              <label className="flex items-center space-x-2 text-white cursor-pointer">
                <input
                  type="checkbox"
                  name="consentToDataProcessing"
                  checked={formData.consentToDataProcessing}
                  onChange={handleInputChange}
                  className="w-5 h-5 rounded border-white/60 bg-transparent"
                />
                <span className="text-sm">Согласие на обработку данных</span>
              </label>

              <label className="flex items-center space-x-2 text-white cursor-pointer">
                <input
                  type="checkbox"
                  name="consentToPromotionalEmails"
                  checked={formData.consentToPromotionalEmails}
                  onChange={handleInputChange}
                  className="w-5 h-5 rounded border-white/60 bg-transparent"
                />
                <span className="text-sm">Согласие на рекламную рассылку</span>
              </label>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="bg-[#4477ff] text-white px-8 py-2 rounded-full font-semibold hover:bg-[#3366ee] transition-colors disabled:opacity-50"
            >
              {isLoading ? (
                <span className="flex items-center justify-center">
                  <Loader2 className="animate-spin mr-2" />
                  Отправка...
                </span>
              ) : (
                'Отправить'
              )}
            </button>
          </div>

          <div className="w-full md:w-1/2">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Сообщение"
              rows={10}
              className="w-full h-full bg-transparent border border-white/60 p-4 text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors resize-none rounded-lg"
              required
            />
          </div>
        </form>
      </div>
    </div>
  );
}

