import React from 'react';

const Contacts = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between px-4 lg:px-16 py-8">
      <div className="lg:w-1/2 mb-8 lg:mb-0">
        <h1 className="text-4xl font-bold mb-6">Контакты</h1>

        <button className="btn border-black rounded-3xl">
          SHOP.LEMARC
        </button>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Офис Lemarc</h2>
          <p className="text-lg mb-1">г. Москва, Павелецкая площадь, 2, стр. 2</p>
          <p className="text-lg mb-1">📞 8 (800) 505-36-45</p>
          <p className="text-lg">📧 info@lemarc.ru</p>
        </div>

        <hr className="border-gray-300 mb-8" />

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Завод Lemarc</h2>
          <p className="text-lg mb-1">Калужская область, Боровский район, с. Ворсино, тер. Северная промышленная зона, владение 8</p>
          <p className="text-lg mb-1">📞 8 (800) 505-36-45</p>
          <p className="text-lg">📧 info@lemarc.ru</p>
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
          className="border-0 w-full h-[450px]"
        ></iframe>
      </div>
    </div>
  );
};

export default Contacts;
