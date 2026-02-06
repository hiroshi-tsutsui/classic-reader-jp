import React from 'react';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-12 bg-[#fdf6e3] text-[#5c4033]">
      <header className="w-full max-w-4xl flex justify-between items-center border-b-2 border-[#d6cbb0] pb-4 mb-10">
        <h1 className="text-3xl font-serif font-bold">Classic Reader JP 古文読解</h1>
        <span className="font-serif">Grade: High School 1</span>
      </header>

      <div className="flex gap-8 max-w-5xl w-full">
        <div className="flex-1 bg-white p-8 shadow-sm rounded border border-[#eaddcf]" style={{ writingMode: 'vertical-rl' }}>
          <h2 className="text-2xl font-bold mb-4">竹取物語</h2>
          <p className="text-lg leading-loose">
            今は昔、竹取の翁といふものありけり。野山にまじりて竹を取りつつ、よろづのことに使ひけり。<br/><br/>
            名をば、さぬきの造となむいひける。その竹の中に、もと光る竹なむ一筋ありける。
          </p>
        </div>

        <div className="w-1/3 space-y-4">
          <div className="bg-white p-4 rounded shadow-sm border border-[#eaddcf]">
            <h3 className="font-bold border-b pb-2 mb-2">Modern Translation</h3>
            <p className="text-sm text-gray-600">
              Long ago, there was an old man called the Bamboo Cutter...
            </p>
          </div>
          <div className="bg-white p-4 rounded shadow-sm border border-[#eaddcf]">
            <h3 className="font-bold border-b pb-2 mb-2">Vocabulary</h3>
            <ul className="text-sm space-y-2">
              <li><span className="font-bold">翁 (Okina):</span> Old man</li>
              <li><span className="font-bold">ありけり (Arikeri):</span> There was (past tense)</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
