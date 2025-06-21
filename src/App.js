import ThemeToggle from './components/ThemeToggle';
import LikeButton from './components/LikeButton';
import Counter from './components/Counter';

function App() {
  return (
    <div>
      <h1 style={{ textAlign: 'center', marginTop: '30px' }}>
        🧠 React State Practice
      </h1>

      <Counter />
      <ThemeToggle />
      <LikeButton />
    </div>
  );
}

export default App;
