import {
  Header,
  SwitchTheme,
  AboutBlock,
  SkillBlock,
  Layout,
  Contacts,
} from "./components";
import { MENU } from "./constants/menu";

function App() {
  return (
    <Layout>
      <Header menu={MENU} themeSwitch={<SwitchTheme />} />
      <AboutBlock />
      <SkillBlock />
      <Contacts />
    </Layout>
  );
}

export default App;
