"use client"

import { Check, Zap, Target, Clock, TrendingDown, Users, Star, ArrowRight, Flame } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section - Super Apelativo */}
      <section className="relative overflow-hidden bg-gradient-to-br from-orange-500 via-red-500 to-pink-600 text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-yellow-400 text-black hover:bg-yellow-500 text-sm md:text-base px-4 py-2">
              <Flame className="w-4 h-4 mr-2 inline" />
              🔥 PROMOÇÃO LIMITADA - 70% OFF
            </Badge>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
              Perca <span className="text-yellow-300">5kg em 40 Dias</span> Sem Sair de Casa!
            </h1>
            
            <p className="text-xl md:text-2xl mb-4 font-semibold text-orange-50">
              Treinos de 20 minutos com o peso do seu próprio corpo
            </p>
            
            <p className="text-lg md:text-xl mb-8 text-orange-100">
              Sem equipamentos. Sem academia. Sem desculpas. Apenas RESULTADOS REAIS!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-lg px-8 py-6 shadow-2xl transform hover:scale-105 transition-all">
                COMEÇAR AGORA POR R$ 19,90
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-2 border-white font-bold text-lg px-8 py-6 backdrop-blur-sm">
                Ver Planos
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base">
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-yellow-300" />
                <span className="font-semibold">Sem equipamentos</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-yellow-300" />
                <span className="font-semibold">20 min por dia</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-yellow-300" />
                <span className="font-semibold">Resultados garantidos</span>
              </div>
            </div>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-black text-orange-600">+15.000</div>
              <div className="text-sm text-gray-600">Alunos Transformados</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-gray-300"></div>
            <div>
              <div className="text-3xl md:text-4xl font-black text-orange-600">4.9★</div>
              <div className="text-sm text-gray-600">Avaliação Média</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-gray-300"></div>
            <div>
              <div className="text-3xl md:text-4xl font-black text-orange-600">-5kg</div>
              <div className="text-sm text-gray-600">Média em 40 Dias</div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-black mb-4">
              Por Que Funciona <span className="text-orange-600">TÃO BEM?</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Método cientificamente comprovado para queimar gordura e ganhar definição
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="p-6 hover:shadow-2xl transition-all border-2 hover:border-orange-500">
              <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-4">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Treinos Intensos e Rápidos</h3>
              <p className="text-gray-600">
                Apenas 20 minutos por dia com exercícios de alta intensidade que aceleram seu metabolismo por até 48 horas!
              </p>
            </Card>

            <Card className="p-6 hover:shadow-2xl transition-all border-2 hover:border-orange-500">
              <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-4">
                <Target className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Plano Personalizado</h3>
              <p className="text-gray-600">
                Treinos adaptados ao seu nível atual. Iniciante ou avançado, você terá resultados desde o primeiro dia!
              </p>
            </Card>

            <Card className="p-6 hover:shadow-2xl transition-all border-2 hover:border-orange-500">
              <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-4">
                <TrendingDown className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Guia Nutricional Incluso</h3>
              <p className="text-gray-600">
                Cardápio simples e prático para potencializar seus resultados. Sem dietas malucas ou restrições extremas!
              </p>
            </Card>

            <Card className="p-6 hover:shadow-2xl transition-all border-2 hover:border-orange-500">
              <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-4">
                <Clock className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Flexibilidade Total</h3>
              <p className="text-gray-600">
                Treine quando e onde quiser. Sala, quarto, varanda... Você escolhe o horário e o local!
              </p>
            </Card>

            <Card className="p-6 hover:shadow-2xl transition-all border-2 hover:border-orange-500">
              <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-4">
                <Users className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Comunidade Motivadora</h3>
              <p className="text-gray-600">
                Grupo exclusivo com milhares de pessoas na mesma jornada. Suporte, dicas e motivação diária!
              </p>
            </Card>

            <Card className="p-6 hover:shadow-2xl transition-all border-2 hover:border-orange-500">
              <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-4">
                <Star className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Acompanhamento Profissional</h3>
              <p className="text-gray-600">
                Professores de educação física certificados criaram cada treino pensando em RESULTADOS REAIS!
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-orange-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-black mb-4">
              Como Você Vai <span className="text-orange-600">Transformar Seu Corpo</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Simples, rápido e eficaz. Veja como funciona:
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white text-2xl font-black shadow-lg">
                1
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Cadastre-se e Responda o Quiz</h3>
                <p className="text-gray-600 text-lg">
                  Em 2 minutos, você responde perguntas sobre seu corpo, objetivos e disponibilidade. Nosso sistema cria seu plano personalizado!
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white text-2xl font-black shadow-lg">
                2
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Siga os Treinos Diários</h3>
                <p className="text-gray-600 text-lg">
                  Vídeos em alta qualidade mostram cada exercício. Apenas 20 minutos por dia, 5x na semana. Você consegue!
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white text-2xl font-black shadow-lg">
                3
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Acompanhe Sua Evolução</h3>
                <p className="text-gray-600 text-lg">
                  Registre seu peso, tire fotos e veja seu progresso. A cada semana você verá mudanças REAIS no espelho!
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white text-2xl font-black shadow-lg">
                4
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Celebre Seus Resultados!</h3>
                <p className="text-gray-600 text-lg">
                  Em 40 dias, você terá perdido até 5kg, ganhado definição muscular e energia para viver melhor. Garantido!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-black mb-4">
              Veja Quem Já <span className="text-orange-600">Transformou a Vida</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              Resultados reais de pessoas reais como você!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="p-6 bg-gradient-to-br from-orange-50 to-white border-2">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">
                "Perdi 6kg em 40 dias! Não acreditei quando vi a balança. Os treinos são puxados mas valem MUITO a pena!"
              </p>
              <div className="font-bold">Maria Silva, 34 anos</div>
              <div className="text-sm text-orange-600 font-semibold">-6kg em 40 dias</div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-orange-50 to-white border-2">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">
                "Finalmente consegui emagrecer sem sair de casa! Treino de manhã antes do trabalho. Mudou minha vida!"
              </p>
              <div className="font-bold">João Santos, 28 anos</div>
              <div className="text-sm text-orange-600 font-semibold">-5kg em 40 dias</div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-orange-50 to-white border-2">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">
                "Melhor investimento que fiz! R$ 19,90 por mês é nada perto dos resultados. Já indiquei pra família toda!"
              </p>
              <div className="font-bold">Ana Costa, 42 anos</div>
              <div className="text-sm text-orange-600 font-semibold">-7kg em 40 dias</div>
            </Card>
          </div>
        </div>
      </section>

      {/* Preços - Super Destaque */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-900 via-orange-900 to-red-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-yellow-400 text-black text-base px-4 py-2">
              ⚡ PROMOÇÃO RELÂMPAGO
            </Badge>
            <h2 className="text-3xl md:text-5xl font-black mb-4">
              Comece Sua Transformação <span className="text-yellow-300">HOJE</span>
            </h2>
            <p className="text-lg md:text-xl text-orange-100">
              Preço especial por tempo limitado!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Plano Mensal */}
            <Card className="p-8 bg-white/10 backdrop-blur-sm border-2 border-white/20 hover:border-yellow-400 transition-all">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-2">Mensal</h3>
                <div className="mb-6">
                  <div className="text-sm line-through text-gray-400">R$ 67,00</div>
                  <div className="text-5xl font-black text-yellow-300">R$ 19,90</div>
                  <div className="text-sm text-gray-300">por mês</div>
                </div>
                <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-lg py-6 mb-6">
                  COMEÇAR AGORA
                </Button>
                <ul className="space-y-3 text-left">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-yellow-300 flex-shrink-0 mt-0.5" />
                    <span>Treinos diários personalizados</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-yellow-300 flex-shrink-0 mt-0.5" />
                    <span>Guia nutricional completo</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-yellow-300 flex-shrink-0 mt-0.5" />
                    <span>Acesso à comunidade</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-yellow-300 flex-shrink-0 mt-0.5" />
                    <span>Suporte via WhatsApp</span>
                  </li>
                </ul>
              </div>
            </Card>

            {/* Plano Trimestral - DESTAQUE */}
            <Card className="p-8 bg-gradient-to-br from-yellow-400 to-orange-500 border-4 border-yellow-300 relative transform md:scale-105 shadow-2xl">
              <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-red-600 text-white px-4 py-1 text-sm">
                MAIS POPULAR
              </Badge>
              <div className="text-center text-gray-900">
                <h3 className="text-2xl font-bold mb-2">Trimestral</h3>
                <div className="mb-6">
                  <div className="text-sm line-through text-gray-700">R$ 201,00</div>
                  <div className="text-5xl font-black">R$ 49,90</div>
                  <div className="text-sm">3 meses (R$ 16,63/mês)</div>
                </div>
                <Button className="w-full bg-gray-900 hover:bg-black text-white font-bold text-lg py-6 mb-6">
                  GARANTIR DESCONTO
                </Button>
                <ul className="space-y-3 text-left">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span className="font-semibold">Tudo do plano mensal +</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span>Economize R$ 151,10</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span>Bônus: E-book de receitas fit</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span>Desafio 40 dias completo</span>
                  </li>
                </ul>
              </div>
            </Card>

            {/* Plano Anual */}
            <Card className="p-8 bg-white/10 backdrop-blur-sm border-2 border-white/20 hover:border-yellow-400 transition-all">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-2">Anual</h3>
                <div className="mb-6">
                  <div className="text-sm line-through text-gray-400">R$ 804,00</div>
                  <div className="text-5xl font-black text-yellow-300">R$ 147,00</div>
                  <div className="text-sm text-gray-300">12 meses (R$ 12,25/mês)</div>
                </div>
                <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-lg py-6 mb-6">
                  MELHOR OFERTA
                </Button>
                <ul className="space-y-3 text-left">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-yellow-300 flex-shrink-0 mt-0.5" />
                    <span className="font-semibold">Tudo dos planos anteriores +</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-yellow-300 flex-shrink-0 mt-0.5" />
                    <span>Economize R$ 657,00</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-yellow-300 flex-shrink-0 mt-0.5" />
                    <span>Consultoria nutricional 1x/mês</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-yellow-300 flex-shrink-0 mt-0.5" />
                    <span>Acesso vitalício aos treinos</span>
                  </li>
                </ul>
              </div>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-lg mb-4">💳 Parcele em até 12x sem juros no cartão</p>
            <p className="text-sm text-orange-200">✅ Garantia de 7 dias - 100% do seu dinheiro de volta se não gostar</p>
          </div>
        </div>
      </section>

      {/* CTA Final - Urgência */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-orange-500 to-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-6">
            Não Deixe Para Amanhã o Corpo Que Você Pode Ter em 40 Dias!
          </h2>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Mais de <span className="font-black text-yellow-300">500 pessoas</span> começaram hoje. 
            Você vai ficar para trás ou vai se juntar a elas?
          </p>
          <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-xl px-12 py-8 shadow-2xl transform hover:scale-105 transition-all">
            SIM, QUERO TRANSFORMAR MEU CORPO AGORA!
            <ArrowRight className="ml-2 w-6 h-6" />
          </Button>
          <p className="mt-6 text-sm text-orange-100">
            ⏰ Promoção válida apenas para as próximas 24 horas
          </p>
        </div>
      </section>

      {/* Footer Simples */}
      <footer className="py-8 bg-gray-900 text-gray-400 text-center">
        <div className="container mx-auto px-4">
          <p className="text-sm">
            © 2024 FitCasa - Transforme seu corpo em casa. Todos os direitos reservados.
          </p>
          <p className="text-xs mt-2">
            Resultados podem variar de pessoa para pessoa. Consulte um médico antes de iniciar qualquer programa de exercícios.
          </p>
        </div>
      </footer>
    </div>
  )
}
