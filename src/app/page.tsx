export default function Home() {
  return (
    <div style={{ 
      padding: '40px 20px', 
      textAlign: 'center', 
      fontFamily: 'sans-serif',
      backgroundColor: '#fffaf0',
      minHeight: '100vh'
    }}>
      <h1 style={{ color: '#ff8800', fontSize: '24px' }}>
        はなちゃん＆フクロウ 研修アプリ
      </h1>
      
      <div style={{ 
        background: 'white',
        padding: '30px',
        borderRadius: '20px',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
        margin: '20px 0'
      }}>
        <p style={{ fontSize: '18px', fontWeight: 'bold' }}>
          佐藤さん、鈴木さん、高橋さん<br />こんにちは！
        </p>
        
        <div style={{ fontSize: '80px', margin: '20px' }}>
          🦉🥚
        </div>
        
        <p style={{ color: '#666' }}>
          ここにフクロウの成長記録が<br />スタンプとして貯まっていきます。
        </p>
      </div>

      <button style={{ 
        backgroundColor: '#ff8800', 
        color: 'white', 
        padding: '15px 30px', 
        borderRadius: '30px', 
        border: 'none',
        fontSize: '18px',
        fontWeight: 'bold',
        width: '100%',
        maxWidth: '300px',
        cursor: 'pointer'
      }}>
        スタンプを押す（カメラ起動）
      </button>

      <p style={{ marginTop: '20px', fontSize: '12px', color: '#999' }}>
        ※現在はデザインのみのプレビューです
      </p>
    </div>
  );
}