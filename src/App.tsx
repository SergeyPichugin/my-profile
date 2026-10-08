import { AboutBlock, SkillBlock, Layout, Contacts } from './components'
import { SwitchLanguage } from './components/SwitchLanguage/SwitchLanguage'

function App() {
    return (
        <Layout>
            <SwitchLanguage />
            <AboutBlock />
            <SkillBlock />
            <Contacts />
        </Layout>
    )
}

export default App
