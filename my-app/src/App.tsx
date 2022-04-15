import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header'
import { NewChartModal } from './components/NewChartModal';
import './styles/global.scss'

export function App() {
  return (
    <div className="App">
      <Header/>
      <Dashboard/>
      <NewChartModal/>
    </div>
  );
}

