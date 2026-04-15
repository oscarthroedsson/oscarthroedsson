import NavigationProvider from "./providers/navigation.provider.tsx";
import Navigation from "./components/Navbar/Navigation.tsx";
import NavTrigger from "./components/Navbar/NavTrigger.tsx";
import { RoutingProvider } from "./providers/routing.provider.tsx";
import LandingPage from "./views/LandingPage.tsx";
import Experiance from "./views/Experiance.tsx";
import View from "./components/View.tsx";
import Skills from "./views/Skills.tsx";

function App() {
  return (
    <RoutingProvider>
      <NavigationProvider>
        <NavTrigger />
        <Navigation />
        <div className="space-y-24">
          <View>
            <LandingPage />
          </View>
          <View>
            <Experiance />
          </View>
          <View className="overflow-y-visible">
            <Skills />
          </View>
        </div>
      </NavigationProvider>
    </RoutingProvider>
  );
}

export default App;
