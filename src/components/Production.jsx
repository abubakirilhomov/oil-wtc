
import React from 'react';

function Production() {
  const productionDetails = [
    'Современное автоматизированное производство',
    'Передовые технологии',
    'Премиальные базовые масла и пакеты присадок',
    'Контроль качества на всех этапах производства',
    'Команда профессионалов мирового уровня',
    'Отлаженная система логистики и гарантированные сроки поставок',
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Топ Лубрикантс</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <img
          src="https://via.placeholder.com/600x400?text=Производство"
          alt="Производство"
          className="rounded-lg shadow-lg w-full"
        />
        <ul className="list-disc pl-6">
          {productionDetails.map((item, index) => (
            <li key={index} className="text-lg text-gray-700">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Production;
