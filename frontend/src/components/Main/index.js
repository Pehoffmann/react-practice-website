import MainBanner from '../MainBanner'
import Shelf from '../Shelf'
import Form from '../Form'
import './style.css'

const Main = () => {
  return (
    <main className="main">
      <MainBanner />
      <Shelf />
      <Shelf />
      <Form />
    </main>
  )
}

export default Main