const plataformas = [
  {
    nombre: 'Netflix',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg',
  },
  {
    nombre: 'Disney+',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Disney%2B_logo.svg',
  },
  {
    nombre: 'HBO Max',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/1/17/HBO_Max_Logo.svg',
  },
  {
    nombre: 'Amazon Prime Video',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Prime_Video.png',
  },
  {
    nombre: 'Spotify',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg',
  },
];

export default function Bienvenida() {
  return (
    <div style={{ textAlign: 'center', padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>🎉 Bienvenido a LunaStreaming 🎉</h1>
      <p>Disfruta de todas tus plataformas favoritas desde un solo lugar.</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px', marginTop: '2rem' }}>
        {plataformas.map((p) => (
          <div key={p.nombre} style={{ width: '120px' }}>
            <img src={p.logo} alt={p.nombre} style={{ width: '100%' }} />
            <p><strong>{p.nombre}</strong></p>
          </div>
        ))}
      </div>
    </div>
  );
}
