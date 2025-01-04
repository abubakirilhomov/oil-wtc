'use client';

import React, { useState, useEffect } from 'react';
import { ChevronDown, CheckCircle } from 'lucide-react';

export default function Otziv() {
  const [topics, setTopics] = useState([]);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    topic: '',
    message: '',
    consentToDataProcessing: false,
    consentToPromotionalEmails: false,
  });
  const [isSuccess, setIsSuccess] = useState(false); // Для отображения успешного сообщения

  // Fetch topics from backend (если это необходимо)
  useEffect(() => {
    fetch('https://bakend-wtc-4.onrender.com/api/v1/applications')
      .then(response => {
        if (!response.ok) throw new Error('Network response was not OK');
        return response.json();
      })
      .then(data => setTopics(data))
      .catch(error => console.error('Error fetching topics:', error));
  }, []);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);

    // Формирование сообщения для Telegram
    const message = `
      Новое сообщение:
      ФИО: ${formData.fullName}
      Телефон: ${formData.phone}
      E-mail: ${formData.email}
      Тема: ${formData.topic}
      Сообщение: ${formData.message}
    `;

    // Отправка сообщения в Telegram
    const telegramApiUrl = `https://api.telegram.org/bot8177638779:AAEqe05D2M6WM6wSkhPKesxK9Yn5rhyfO88/sendMessage`;
    const chatId = '7289939968'; // Ваш chat_id

    fetch(telegramApiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
      }),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Сообщение отправлено в Telegram:', data);
        setIsSuccess(true); // Успешная отправка, показываем сообщение
        setFormData({ // Очистка формы
          fullName: '',
          phone: '',
          email: '',
          topic: '',
          message: '',
          consentToDataProcessing: false,
          consentToPromotionalEmails: false,
        });
      })
      .catch(error => console.error('Ошибка при отправке сообщения в Telegram:', error));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-700 text-white p-8">
      <form onSubmit={handleSubmit} className="w-full max-w-4xl flex space-x-8">
        {/* Left side for inputs */}
        <div className="w-1/2 space-y-6">
          <h1 className="text-3xl font-bold mb-8">Оставить сообщение</h1>

          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            placeholder="ФИО"
            className="w-full bg-transparent border-b border-white pb-2 focus:outline-none"
          />

          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="Телефон"
            className="w-full bg-transparent border-b border-white pb-2 focus:outline-none"
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="E-mail"
            className="w-full bg-transparent border-b border-white pb-2 focus:outline-none"
          />

          <div className="relative">
            <select
              name="topic"
              value={formData.topic}
              onChange={handleInputChange}
              className="w-full bg-transparent border-b border-white pb-2 focus:outline-none appearance-none"
            >
              <option value="" disabled>Тема сообщения</option>
              {topics.map((topic, index) => (
                <option key={index} value={topic.application_type} className="text-black">
                  {topic.application_type}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-0 bottom-3 w-5 h-5" />
          </div>

          <button
            type="submit"
            className="bg-white text-gray-800 px-8 py-2 rounded-full font-semibold hover:bg-gray-200 transition-colors mt-4"
          >
            Отправить
          </button>
        </div>

        <div className="w-1/2 pb-40">
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Сообщение"
            rows={10}
            className="w-full h-full bg-transparent border border-white p-4 focus:outline-none resize-none"
          />
        </div>
      </form>

      {/* Success Message */}
      {isSuccess && (
        <div className="absolute top-10 left-1/2 transform -translate-x-1/2 bg-green-500 text-white py-2 px-4 rounded-lg flex items-center space-x-2">
          <CheckCircle className="w-5 h-5" />
          <span>Все хорошо отправилось!</span>
        </div>
      )}
    </div>
  );
}
