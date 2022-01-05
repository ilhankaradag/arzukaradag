import { GiCoolSpices, GiPeaceDove } from 'react-icons/gi'
import Poem1 from '../components/poemAnaSayfa/Poem1'
import Poem2 from '../components/poemAnaSayfa/Poem2'

const poem = [
  {
    id: 1,
    title: 'Geline Agit',
    description: <Poem1 />,
    icon: <GiCoolSpices className="icon" />,
  },
  {
    id: 2,
    title: 'Kadinlar',
    description: <Poem2 />,
    icon: <GiPeaceDove className="icon" />,
  },
]

export default poem
