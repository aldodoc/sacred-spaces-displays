import heroCross from "@/assets/hero-cross.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroCross})` }}
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background" />
        
        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-serif font-light tracking-wide text-foreground mb-6">
            Articoli Religiosi
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-light mb-10 leading-relaxed">
            Oggetti sacri per accompagnare la tua fede e spiritualità
          </p>
          <button className="px-10 py-4 bg-primary text-primary-foreground rounded-sm text-lg font-medium tracking-wider hover:opacity-90 transition-opacity shadow-lg">
            Scopri la Collezione
          </button>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-20 px-6 bg-card">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-light text-foreground mb-8">
            Benvenuti nel Nostro Negozio
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Da oltre trent'anni offriamo articoli religiosi di qualità: rosari, croci, 
            statue sacre, icone e tutto ciò che può arricchire la vostra vita spirituale. 
            Ogni pezzo è selezionato con cura per accompagnarvi nel vostro cammino di fede.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Index;
