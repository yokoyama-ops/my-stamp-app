'use client'; // これを入れることで、ボタン操作やカメラが動くようになります

import React, { useState } from 'react';

export default function Home() {
  const [image, setImage] = useState<string | null>(null);

  // カメラを起動して写真を撮る指示
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

  return (
    <div style={{ padding: '40px 20px', textAlign: 'center', fontFamily: 'sans-serif', backgroundColor: '#fffaf0', minHeight: '100vh' }}>
      <h1 style={{ color: '#ff8800', fontSize: '24px' }}>研修スタンプアプリ</h1>
      
      <div style={{ background: 'white', padding: '20px', borderRadius: '20px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', margin: '20px 0' }}>
        {image ? (
          <div>
            <p>ナイスショット！📸</p>
            <img src={image} alt="撮影した写真" style={{ width: '100%', borderRadius: '10px', marginTop: '10px' }} />
          </div>
        ) : (
          <div>
            <p style={{ fontSize: '18px', fontWeight: 'bold' }}>はなちゃんを撮影して<br />スタンプをゲット！</p>
            <div style={{ fontSize: '80px', margin: '20px' }}>🦉</div>
          </div>
        )}
      </div>

      {/* 実際のカメラ起動ボタン */}
      <label style={{ 
        backgroundColor: '#ff8800', color: 'white', padding: '15px 30px', borderRadius: '30px', 
        fontSize: '18px', fontWeight: 'bold', display: 'inline-block', cursor: 'pointer', width: '80%'
      }}>
        写真を撮る
        <input 
          type="file" 
          accept="image/*" 
          capture="environment" 
          onChange={handleCapture} 
          style={{ display: 'none' }} 
        />
      </label>

      {image && (
        <button onClick={() => setImage(null)} style={{ marginTop: '20px', background: 'none', border: 'none', color: '#666', textDecoration: 'underline' }}>
          撮り直す
        </button>
      )}
    </div>
  );
}