import React from 'react';

const Contacts = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-8 justify-between px-4 lg:px-16 py-8 ">
      <div className="lg:w-1/2 space-y-8">
        <h1 className="text-4xl font-bold text-gray-800">Контакты</h1>

        <button className="btn bg-primaryBlue text-white py-3 px-6 rounded-full hover:bg-blue-900 transition duration-300">
          SHOP.LEMARC
        </button>

        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-gray-700">Офис Lemarc</h2>
          <p className="text-lg text-gray-600">г. Москва, Павелецкая площадь, 2, стр. 2</p>
          <p className="text-lg text-gray-600">📞 +998 99 999 99 99</p>
          <p className="text-lg text-gray-600">📧 info@lemarc.ru</p>
        </div>

        <hr className="border-gray-300" />

        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-gray-700">Завод Lemarc</h2>
          <p className="text-lg text-gray-600">
            Калужская область, Боровский район, с. Ворсино, тер. Северная промышленная зона, владение 8
          </p>
          <p className="text-lg text-gray-600">📞 +998 99 999 99 99</p>
          <p className="text-lg text-gray-600">📧 info@lemarc.ru</p>
        </div>
      </div>

      <div className="lg:w-1/2">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2244.240632849717!2d37.630691576606965!3d55.73079340475986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a58b0627bfb%3A0xb1e92e7cf2ad93b1!2z0JrQsNC70LDQtNCw0L3QsNGPINGD0LsuLCAyLCDQnNC-0LTQvtGB0L7QstCwLCAxMTNzNQ!5e0!3m2!1sru!2s!4v1698164787610!5m2!1sru!2s"
          width="100%"
          height="450"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Lemarc Office Map"
          className="border border-gray-300 rounded-lg shadow-sm"
        ></iframe>
      </div>
    </div>
  );
};

export default Contacts;
