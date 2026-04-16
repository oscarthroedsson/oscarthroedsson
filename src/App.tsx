import NavigationProvider from "./providers/navigation.provider.tsx";
import Navigation from "./components/Navbar/Navigation.tsx";
import NavTrigger from "./components/Navbar/NavTrigger.tsx";
import { RoutingProvider } from "./providers/routing.provider.tsx";
import Skills from "./views/Skills/Skills.tsx";
import LandingPage from "./views/LandingPage.tsx";
import Experiance from "./views/Experiance.tsx";
import View from "./components/View.tsx";

function App() {
  return (
    <RoutingProvider>
      <NavigationProvider>
        <NavTrigger />
        <Navigation />
        <div className="space-y-36">
          <View id="landingPage-view">
            <LandingPage />
          </View>
          <View id="experiance-view">
            <Experiance />
          </View>
          <View id="skills-view" className="overflow-y-visible z-50">
            <Skills />
          </View>
        </div>
      </NavigationProvider>
    </RoutingProvider>
  );
}

export default App;
