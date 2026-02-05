'use client';

import { useState } from 'react';

type Story = {
  id: number;
  title: string;
  author: string;
  content: string; // HTML string
};

const STORIES: Story[] = [
  {
    id: 1,
    title: "ごん狐 (Gongitsune)",
    author: "新美 南吉 (Niimi Nankichi)",
    content: `
      <p>これは、私が小さいときに、村の茂平というおじいさんからきいたお話です。</p>
      <p>むかしは、私たちの村のちかくの、中山というところに小さなお城があって、中山さまというおとのさまが、おられたそうです。</p>
      <p>その中山から、少しはなれた山の中に、「ごん狐」という狐がいました。</p>
      <p>ごんは、一人ぼっちの小狐で、しだの一杯しげった森の中に穴をほって住んでいました。</p>
      <p>そして、夜でも昼でも、あたりの村へ出てきて、いたずらばかりしました。</p>
    `
  },
  {
    id: 2,
    title: "雨ニモマケズ (Be not Defeated by the Rain)",
    author: "宮沢 賢治 (Miyazawa Kenji)",
    content: `
      <p>雨ニモマケズ</p>
      <p>風ニモマケズ</p>
      <p>雪ニモ夏ノ暑サニモマケヌ</p>
      <p>丈夫ナカラダヲモチ</p>
      <p>慾ハナク</p>
      <p>決シテ瞋ラズ</p>
      <p>イツモシズカニワラッテヰル</p>
    `
  }
];

export default function Reader() {
  const [currentStory, setCurrentStory] = useState(STORIES[0]);
  const [vertical, setVertical] = useState(true);
  const [fontSize, setFontSize] = useState(18);

  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col h-screen p-4">
      {/* Controls */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6 bg-amber-50 p-4 rounded-lg shadow-sm border border-amber-100">
         <div>
            <select 
                className="bg-white border border-amber-300 rounded px-2 py-1 text-amber-900"
                onChange={(e) => setCurrentStory(STORIES.find(s => s.id === Number(e.target.value))!)}
            >
                {STORIES.map(s => <option key={s.id} value={s.id}>{s.title}</option>)}
            </select>
         </div>
         <div className="flex items-center gap-4">
            <button 
                onClick={() => setVertical(!vertical)}
                className="bg-amber-800 text-white px-3 py-1 rounded text-sm hover:bg-amber-900"
            >
                {vertical ? 'Horizontal Mode' : 'Vertical Mode'}
            </button>
            <div className="flex items-center gap-2">
                <button onClick={() => setFontSize(Math.max(12, fontSize - 2))} className="w-8 h-8 bg-amber-200 rounded text-amber-900 font-bold">-</button>
                <span className="text-sm font-mono">{fontSize}px</span>
                <button onClick={() => setFontSize(Math.min(32, fontSize + 2))} className="w-8 h-8 bg-amber-200 rounded text-amber-900 font-bold">+</button>
            </div>
         </div>
      </div>

      {/* Reader Area */}
      <div className="flex-1 bg-[#fdf6e3] text-[#5c4033] rounded shadow-inner p-8 overflow-auto border border-[#f0e6d2] relative">
         <div className="absolute inset-0 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/paper.png')] opacity-50"></div>
         
         <div 
            className={`transition-all duration-500 ease-in-out h-full leading-loose font-serif
                ${vertical ? 'writing-vertical-rl text-orientation-upright overflow-x-auto overflow-y-hidden w-full' : 'w-full max-w-2xl mx-auto overflow-y-auto'}
            `}
            style={{ fontSize: `${fontSize}px` }}
         >
             <h1 className={`font-black mb-8 ${vertical ? 'ml-8' : 'text-center'}`}>{currentStory.title}</h1>
             <h2 className={`font-medium mb-12 opacity-80 ${vertical ? 'ml-4' : 'text-center'}`}>{currentStory.author}</h2>
             
             <div 
                dangerouslySetInnerHTML={{ __html: currentStory.content }} 
                className="prose prose-amber max-w-none"
             />
         </div>
      </div>
    </div>
  );
}
