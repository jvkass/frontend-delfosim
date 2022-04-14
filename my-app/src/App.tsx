import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header'
import './styles/global.scss'

export function App() {
  return (
    <div className="App">
      <Header/>
      <Dashboard/>
    </div>
  );
}

