import './App.css'
import ActivityAdder from './components/activity-adder/ActivityAdder'
import ActivityGraph from './components/activity-graph/ActivityGraph'
import ActivityOverview from './components/activity-overview/ActivityOverview'

const App: React.FC = () => {
  return (
    <>
      <h1>FitHub</h1>
      <p className="callToAction">
        Inspired by GitHub. Get motivated by taking action.
      </p>
      <ActivityGraph year={2024} />
      <div className="splitView">
        <ActivityAdder />
        <ActivityOverview />
      </div>
    </>
  )
}

export default App
