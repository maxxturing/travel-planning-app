export default function HomePage() {
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Travel Planning App</h1>
      <p>Welcome to your travel companion!</p>
      <button onClick={() => console.log('Navigate to trips')}>
        View Trips
      </button>
      <div style={{ marginTop: '2rem', color: '#666' }}>
        <p>This is a basic version running without Tamagui styling.</p>
        <p>Full UI components will be implemented in Task 2.</p>
      </div>
    </div>
  )
}