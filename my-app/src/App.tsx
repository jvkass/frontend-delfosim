import { useState } from 'react';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header'
import { NewChartModal } from './components/NewChartModal';
import './styles/global.scss'

export function App() {
  const [isNewChartModalOpen, setIsNewChartModalOpen] = useState(false);

  function handleOpenNewChartModal() {
    setIsNewChartModalOpen(true);
  }

  function handleCloseNewChartModal() {
    setIsNewChartModalOpen(false);
  }

  return (
    <div className="App">
      <Header />
      <Dashboard onOpenNewChartModal={handleOpenNewChartModal}/>
      <NewChartModal
        IsOpen={isNewChartModalOpen}
        IsRequestClose={handleCloseNewChartModal}
      />
    </div>
  );
}

