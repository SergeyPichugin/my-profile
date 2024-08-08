import {
  // Header,
  // SwitchTheme,
  AboutBlock,
  SkillBlock,
  Layout,
  Contacts,
  Works,
} from "./components";
// import { MENU } from "./constants/menu";

function App() {
  return (
    <Layout>
      {/* <Header menu={MENU} themeSwitch={<SwitchTheme />} /> */}
      <AboutBlock />
      <SkillBlock />
      <Works />
      <Contacts />
    </Layout>
  );
}

export default App;
