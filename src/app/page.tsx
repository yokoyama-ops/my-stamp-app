'use client';

import React, { useState } from 'react';

export default function Home() {
  const [image, setImage] = useState<string | null>(null);
  const [stamps, setStamps] = useState<number>(0); // スタンプの数を数える

  const handleCapture = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const saveStamp = () => {
    setStamps(stamps + 1); // スタンプを1つ増やす
    setImage(null); // 写真をリセットして次の撮影へ
    alert('スタンプをゲットしました！');
  };

  return (
    <div style={{ padding: '30px 20px', textAlign: 'center', fontFamily: 'sans-serif', backgroundColor: '#fffaf0', minHeight: '100vh' }}>
      <h1 style={{ color: '#ff8800', fontSize: '22px' }}>フクロウ成長記録</h1>
      
      {/* 撮影エリア */}
      <div style={{ background: 'white', padding: '20px', borderRadius: '20px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', marginBottom: '20px' }}>
        {image ? (
          <div>
            <img src={image} alt="撮影写真" style={{ width: '100%', maxHeight: '200px', objectFit: 'cover', borderRadius: '10px' }} />
            <button onClick={saveStamp} style={{ marginTop: '15px', backgroundColor: '#4CAF50', color: 'white', padding: '12px 25px', borderRadius: '25px', border: 'none', fontSize: '16px', fontWeight: 'bold', width: '100%' }}>
              スタンプを保存する
            </button>
          </div>
        ) : (
          <div>
            <div style={{ fontSize: '60px' }}>🦉</div>
            <p style={{ fontWeight: 'bold' }}>はなちゃんを撮ってスタンプ！</p>
            <label style={{ backgroundColor: '#ff8800', color: 'white', padding: '12px 25px', borderRadius: '25px', fontSize: '16px', fontWeight: 'bold', display: 'inline-block', cursor: 'pointer', marginTop: '10px' }}>
              カメラを起動
              <input type="file" accept="image/*" capture="environment" onChange={handleCapture} style={{ display: 'none' }} />
            </label>
          </div>
        )}
      </div>

      {/* スタンプ表示エリア */}
      <div style={{ background: '#fff', padding: '20px', borderRadius: '20px', border: '2px dashed #ff8800' }}>
        <p style={{ fontSize: '14px', color: '#666', marginBottom: '10px' }}>現在のスタンプ：{stamps}個</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px', fontSize: '30px' }}>
          {/* スタンプの数だけフクロウを表示 */}
          {[...Array(stamps)].map((_, i) => (
            <span key={i}>🦉</span>
          ))}
          {stamps === 0 && <span style={{ fontSize: '14px', color: '#ccc' }}>まだスタンプがありません</span>}
        </div>
      </div>
    </div>
  );
}