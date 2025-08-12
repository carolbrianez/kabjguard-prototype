import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Shield, Truck, LineChart, Headset, Cpu, CheckCircle2, MapPin, Phone, Mail } from "lucide-react";
import logoEmblem from "@/assets/logo-kabj-guard-emblem.png";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const Index = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "KABJ Guard",
    url: typeof window !== "undefined" ? window.location.origin : "https://kabj-guard.example",
    logo: "/placeholder.svg",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Sertãozinho",
      addressRegion: "SP",
      addressCountry: "BR",
    },
    sameAs: [],
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <a href="#conteudo" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:bg-primary focus:text-primary-foreground rounded px-3 py-2">Pular para o conteúdo</a>

      <header className="border-b">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between" aria-label="Navegação principal">
          <div className="flex items-center gap-3">
            <img src={logoEmblem} alt="Emblema KABJ Guard (escudo com caminhão)" className="h-9 w-auto" />
            <span className="font-semibold">KABJ Guard</span>
          </div>
          <ul className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
            <li><a href="#beneficios" className="hover:text-foreground transition-colors">Benefícios</a></li>
            <li><a href="#como-funciona" className="hover:text-foreground transition-colors">Como funciona</a></li>
            <li><a href="#planos" className="hover:text-foreground transition-colors">Planos</a></li>
            <li><a href="#faq" className="hover:text-foreground transition-colors">FAQ</a></li>
            <li><a href="#contato" className="hover:text-foreground transition-colors">Contato</a></li>
          </ul>
          <div className="flex items-center gap-2">
            <Button asChild variant="default"><a href="#planos">Ver planos</a></Button>
          </div>
        </nav>
      </header>

      <main id="conteudo">
        <section className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div
              className="h-full w-full"
              style={{
                background:
                  "radial-gradient(1200px 600px at 0% 0%, hsl(var(--primary) / 0.15), transparent 60%), radial-gradient(1200px 600px at 100% 100%, hsl(var(--destructive) / 0.15), transparent 60%)",
              }}
            />
          </div>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <article>
                <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
                  Rastreamento de Frotas KABJ Guard
                </h1>
                <p className="mt-4 text-lg text-muted-foreground">
                  Soluções tecnológicas para monitoramento veicular que protegem motoristas, caminhões e cargas. Suporte 24h, tecnologia própria e análise de dados inteligente.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button size="lg" asChild>
                    <a href="#planos">Começar agora</a>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <a href="mailto:contato@kabjguardian.com">Falar com vendas</a>
                  </Button>
                </div>
                <ul className="mt-6 grid grid-cols-2 gap-4 text-sm">
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Monitoramento em tempo real</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Relatórios inteligentes</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Suporte 24 horas</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Instalação simplificada</li>
                </ul>
              </article>

              <div className="relative">
                <Carousel className="w-full" aria-label="Carrossel hero">
                  <CarouselContent>
                    <CarouselItem>
                      <div className="aspect-[4/3] rounded-xl border bg-muted/40 flex items-center justify-center">
                        <img src={logoEmblem} alt="Logotipo KABJ Guard em destaque (escudo com caminhão)" className="h-80 opacity-95" loading="lazy" decoding="async" />
                      </div>
                    </CarouselItem>
                    <CarouselItem>
                      <div className="aspect-[4/3] rounded-xl overflow-hidden border">
                        <img
                          src="https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1600"
                          alt="Frota de caminhões estacionados pronta para operação"
                          className="h-full w-full object-cover"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                    </CarouselItem>
                    <CarouselItem>
                      <div className="aspect-[4/3] rounded-xl overflow-hidden border">
                        <img
                          src="https://images.unsplash.com/photo-1460186136353-977e9d6085a1?q=80&w=1600&auto=format&fit=crop"
                          alt="Visualização de mapeamento via satélite e cidade vista do alto"
                          className="h-full w-full object-cover"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                    </CarouselItem>
                  </CarouselContent>
                  <CarouselPrevious className="-left-3 top-1/2 -translate-y-1/2 bg-background/70 backdrop-blur-sm" aria-label="Slide anterior" />
                  <CarouselNext className="-right-3 top-1/2 -translate-y-1/2 bg-background/70 backdrop-blur-sm" aria-label="Próximo slide" />
                </Carousel>
              </div>
            </div>
          </div>
        </section>

        <section id="beneficios" className="py-16 border-t">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <header className="mb-10">
              <h2 className="text-2xl font-semibold">Benefícios que aceleram sua operação</h2>
              <p className="text-muted-foreground">Segurança e eficiência com foco no resultado.</p>
            </header>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center gap-3">
                  <Shield className="h-5 w-5 text-primary" />
                  <CardTitle className="text-base">Segurança total</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">Alertas e bloqueio remoto para proteger sua frota.</CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center gap-3">
                  <Truck className="h-5 w-5 text-primary" />
                  <CardTitle className="text-base">Visibilidade em tempo real</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">Acompanhe rotas, paradas e produtividade.</CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center gap-3">
                  <LineChart className="h-5 w-5 text-primary" />
                  <CardTitle className="text-base">Relatórios inteligentes</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">Dados para decisões e redução de custos.</CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center gap-3">
                  <Headset className="h-5 w-5 text-primary" />
                  <CardTitle className="text-base">Suporte 24h</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">Equipe técnica sempre disponível.</CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="como-funciona" className="py-16 border-t">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <header className="mb-10">
              <h2 className="text-2xl font-semibold">Como funciona</h2>
              <p className="text-muted-foreground">Da instalação ao acompanhamento, simples e eficaz.</p>
            </header>
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center gap-3">
                  <Cpu className="h-5 w-5 text-primary" />
                  <CardTitle className="text-base">1. Dispositivo</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">Instalamos o rastreador com segurança no caminhão.</CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <CardTitle className="text-base">2. Monitoramento</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">Localização em tempo real e eventos críticos.</CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center gap-3">
                  <LineChart className="h-5 w-5 text-primary" />
                  <CardTitle className="text-base">3. Análises</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">Relatórios e insights para otimização constante.</CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="planos" className="py-16 border-t">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <header className="mb-10">
              <h2 className="text-2xl font-semibold">Planos</h2>
              <p className="text-muted-foreground">Mensalidades acessíveis, adaptadas ao porte de cada cliente.</p>
            </header>
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Básico</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold">R$ 500<span className="text-base font-medium">/mês</span></p>
                  <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                    <li>Rastreamento em tempo real</li>
                    <li>Alertas básicos</li>
                    <li>Suporte 24h</li>
                  </ul>
                  <Button className="mt-6 w-full" asChild><a href="mailto:contato@kabjguard.com">Assinar</a></Button>
                </CardContent>
              </Card>
              <Card className="border-primary/40">
                <CardHeader>
                  <CardTitle>Intermediário</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold">R$ 750<span className="text-base font-medium">/mês</span></p>
                  <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                    <li>Relatórios inteligentes</li>
                    <li>Gerenciamento de risco</li>
                    <li>Suporte 24h</li>
                  </ul>
                  <Button className="mt-6 w-full" asChild><a href="mailto:contato@kabjguard.com">Assinar</a></Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Avançado</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold">Sob consulta</p>
                  <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                    <li>Integrações personalizadas</li>
                    <li>Telemetria completa</li>
                    <li>Suporte 24h</li>
                  </ul>
                  <Button className="mt-6 w-full" asChild><a href="mailto:contato@kabjguard.com">Falar com vendas</a></Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="equipe" className="py-16 border-t">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <header className="mb-10">
              <h2 className="text-2xl font-semibold">Equipe</h2>
              <p className="text-muted-foreground">Profissionais responsáveis por cada área.</p>
            </header>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-sm">
              <Card>
                <CardHeader className="flex flex-col items-center">
                  <img src="/lovable-uploads/43bc3e82-bfeb-477c-98d0-b756e211d947.png" alt="João Sartori - KABJ Guard" className="h-100 w-40 rounded-full object-cover border" loading="lazy" />
                  <CardTitle className="mt-3 text-base text-center">João Sartori</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground text-center">Suporte Técnico</CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-col items-center">
                  <img src="/lovable-uploads/f512689a-8da4-4bc2-af21-e8407065d045.png" alt="Ana Karolina - KABJ Guard" className="h-50 w-40 rounded-full object-cover border" loading="lazy" />
                  <CardTitle className="mt-3 text-base text-center">Ana Karolina</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground text-center">Jurídico</CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-col items-center">
                  <img src="/lovable-uploads/e1ca01ed-b685-4ddd-9481-68e048276d45.png" alt="Ana Carolina - KABJ Guard" className="h-100 w-40 rounded-full object-cover border" loading="lazy" />
                  <CardTitle className="mt-3 text-base text-center">Ana Carolina</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground text-center">Contabilidade</CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-col items-center">
                  <img src="/lovable-uploads/bd272c57-fe67-4f4e-a9dc-e1995844365f.png" alt="Gabriel Nakashima - KABJ Guard" className="h-70 w-40 rounded-full object-cover border" loading="lazy" />
                  <CardTitle className="mt-3 text-base text-center">Gabriel Nakashima</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground text-center">Desenvolvimento</CardContent>
              </Card>
              
            </div>
          </div>
        </section>

        <section id="faq" className="py-16 border-t">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <header className="mb-8 text-center">
              <h2 className="text-2xl font-semibold">Perguntas frequentes</h2>
            </header>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Quais são os dispositivos utilizados?</AccordionTrigger>
                <AccordionContent>Usamos rastreadores de alta confiabilidade compatíveis com caminhões e frotas pesadas.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Vocês atendem apenas Sertãozinho?</AccordionTrigger>
                <AccordionContent>Atuação prioritária na região com expansão gradual conforme demanda.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Existe suporte 24 horas?</AccordionTrigger>
                <AccordionContent>Sim, atendimento técnico 24/7 para incidentes críticos.</AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        <section id="contato" className="py-16 border-t">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <header className="mb-8 text-center">
              <h2 className="text-2xl font-semibold">Contato</h2>
              <p className="text-muted-foreground">Fale com nossa equipe comercial e técnica.</p>
            </header>
            <div className="grid sm:grid-cols-3 gap-6 text-sm">
              <Card>
                <CardHeader className="flex flex-row items-center gap-2"><Phone className="h-4 w-4 text-primary" /><CardTitle className="text-base">Telefone</CardTitle></CardHeader>
                <CardContent className="text-muted-foreground">(16) 0000-0000</CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center gap-2"><Mail className="h-4 w-4 text-primary" /><CardTitle className="text-base">E-mail</CardTitle></CardHeader>
                <CardContent className="text-muted-foreground">contato@kabjguard.com</CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center gap-2"><MapPin className="h-4 w-4 text-primary" /><CardTitle className="text-base">Localização</CardTitle></CardHeader>
                <CardContent className="text-muted-foreground">Sertãozinho – SP</CardContent>
              </Card>
            </div>
            <div className="mt-8 text-center">
              <Button asChild size="lg"><a href="mailto:contato@kabjguard.com">Enviar mensagem</a></Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} KABJ Guard. Todos os direitos reservados.</p>
          <nav className="flex items-center gap-4">
            <a href="#planos" className="hover:text-foreground">Planos</a>
            <a href="#faq" className="hover:text-foreground">FAQ</a>
            <a href="#contato" className="hover:text-foreground">Contato</a>
          </nav>
        </div>
      </footer>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
};

export default Index;
