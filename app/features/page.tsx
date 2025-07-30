"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MessageSquare, Target, TrendingUp, Users, Zap, CheckCircle, BarChart3, Brain, Rocket } from "lucide-react"

export default function FeaturesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-warm-orange/10 via-orange-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-space-grotesk text-4xl md:text-5xl font-bold text-deep-navy mb-6"
            >
              Powerful Features for <span className="text-warm-orange">Precision Messaging</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
            >
              Discover how our comprehensive messaging strategy platform helps you create, optimize, and deploy messages
              that convert.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Interactive Use Cases */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-space-grotesk text-3xl md:text-4xl font-bold text-deep-navy mb-4">
              Built for Every Team
            </h2>
            <p className="text-xl text-gray-600">Tailored solutions for different use cases and team structures</p>
          </div>

          <Tabs defaultValue="sales" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-12">
              <TabsTrigger value="sales" className="text-lg py-3">
                Sales Teams
              </TabsTrigger>
              <TabsTrigger value="marketing" className="text-lg py-3">
                Marketing Agencies
              </TabsTrigger>
              <TabsTrigger value="founders" className="text-lg py-3">
                Founders & Growth
              </TabsTrigger>
            </TabsList>

            <TabsContent value="sales" className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="font-space-grotesk text-2xl font-bold text-deep-navy mb-4">Empower Your Sales Team</h3>
                  <p className="text-gray-600 mb-6">
                    Give your sales team the messaging tools they need to close more deals and build stronger
                    relationships with prospects.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-warm-orange mr-3" />
                      <span>Personalized messaging templates</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-warm-orange mr-3" />
                      <span>Real-time conversation insights</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-warm-orange mr-3" />
                      <span>Objection handling frameworks</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-warm-orange mr-3" />
                      <span>Performance tracking and optimization</span>
                    </li>
                  </ul>
                  <Button asChild className="bg-warm-orange hover:bg-orange-600 text-black font-semibold">
                    <Link href="https://salescentri.com/solutions/use-case-navigator/demo">Interactive Demo</Link>
                  </Button>
                </div>
                <div className="bg-gray-50 rounded-lg p-8">
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <div className="flex items-center mb-2">
                        <BarChart3 className="w-5 h-5 text-warm-orange mr-2" />
                        <span className="font-semibold">Conversion Rate</span>
                      </div>
                      <div className="text-2xl font-bold text-green-600">+250%</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <div className="flex items-center mb-2">
                        <Target className="w-5 h-5 text-warm-orange mr-2" />
                        <span className="font-semibold">Deal Velocity</span>
                      </div>
                      <div className="text-2xl font-bold text-blue-600">-40% faster</div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="marketing" className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="font-space-grotesk text-2xl font-bold text-deep-navy mb-4">
                    Scale Your Agency Operations
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Streamline your agency's messaging strategy process and deliver better results for your clients.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-warm-orange mr-3" />
                      <span>Multi-client dashboard management</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-warm-orange mr-3" />
                      <span>White-label reporting tools</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-warm-orange mr-3" />
                      <span>Campaign automation workflows</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-warm-orange mr-3" />
                      <span>Team collaboration features</span>
                    </li>
                  </ul>
                  <Button asChild className="bg-warm-orange hover:bg-orange-600 text-black font-semibold">
                    <Link href="https://salescentri.com/solutions/use-case-navigator/recommendations">
                      Custom Recommendations
                    </Link>
                  </Button>
                </div>
                <div className="bg-gray-50 rounded-lg p-8">
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <div className="flex items-center mb-2">
                        <Users className="w-5 h-5 text-warm-orange mr-2" />
                        <span className="font-semibold">Client Retention</span>
                      </div>
                      <div className="text-2xl font-bold text-green-600">95%</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <div className="flex items-center mb-2">
                        <Rocket className="w-5 h-5 text-warm-orange mr-2" />
                        <span className="font-semibold">Campaign ROI</span>
                      </div>
                      <div className="text-2xl font-bold text-blue-600">+180%</div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="founders" className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="font-space-grotesk text-2xl font-bold text-deep-navy mb-4">Accelerate Your Growth</h3>
                  <p className="text-gray-600 mb-6">
                    Perfect for founders and growth teams who need to validate messaging and scale quickly.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-warm-orange mr-3" />
                      <span>Message-market fit validation</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-warm-orange mr-3" />
                      <span>Rapid A/B testing framework</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-warm-orange mr-3" />
                      <span>Growth-focused analytics</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-warm-orange mr-3" />
                      <span>Scalable messaging systems</span>
                    </li>
                  </ul>
                  <Button asChild className="bg-warm-orange hover:bg-orange-600 text-black font-semibold">
                    <Link href="https://salescentri.com/solutions/use-case-navigator/demo">Interactive Demo</Link>
                  </Button>
                </div>
                <div className="bg-gray-50 rounded-lg p-8">
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <div className="flex items-center mb-2">
                        <TrendingUp className="w-5 h-5 text-warm-orange mr-2" />
                        <span className="font-semibold">Growth Rate</span>
                      </div>
                      <div className="text-2xl font-bold text-green-600">+300%</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <div className="flex items-center mb-2">
                        <Brain className="w-5 h-5 text-warm-orange mr-2" />
                        <span className="font-semibold">Time to Market</span>
                      </div>
                      <div className="text-2xl font-bold text-blue-600">-60% faster</div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Core Features Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-space-grotesk text-3xl md:text-4xl font-bold text-deep-navy mb-4">
              Complete Messaging Strategy Platform
            </h2>
            <p className="text-xl text-gray-600">Everything you need to create, test, and optimize your messaging</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <MessageSquare className="w-8 h-8 text-warm-orange" />,
                title: "AI-Powered Message Creation",
                description:
                  "Generate compelling messages using advanced AI that understands your audience and industry.",
              },
              {
                icon: <Target className="w-8 h-8 text-warm-orange" />,
                title: "Precision Audience Targeting",
                description: "Identify and target your ideal customers with laser-focused messaging strategies.",
              },
              {
                icon: <TrendingUp className="w-8 h-8 text-warm-orange" />,
                title: "Real-Time Analytics",
                description: "Track performance metrics and optimize your messaging based on real-time data insights.",
              },
              {
                icon: <Users className="w-8 h-8 text-warm-orange" />,
                title: "Team Collaboration",
                description: "Work seamlessly with your team using built-in collaboration and approval workflows.",
              },
              {
                icon: <Zap className="w-8 h-8 text-warm-orange" />,
                title: "Multi-Channel Deployment",
                description:
                  "Deploy your messaging across email, social media, ads, and sales outreach simultaneously.",
              },
              {
                icon: <CheckCircle className="w-8 h-8 text-warm-orange" />,
                title: "A/B Testing Suite",
                description:
                  "Test different message variations and automatically optimize for the best performing content.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <div className="mb-4">{feature.icon}</div>
                    <CardTitle className="font-space-grotesk text-xl text-deep-navy">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-deep-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-space-grotesk text-3xl md:text-4xl font-bold mb-4">
              Ready to Experience These Features?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              See how our messaging strategy platform can transform your business results.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-warm-orange hover:bg-orange-600 text-black font-semibold px-8 py-4 text-lg"
              >
                <Link href="https://salescentri.com/solutions/use-case-navigator/demo">Interactive Demo</Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-deep-navy px-8 py-4 text-lg bg-transparent"
              >
                <Link href="https://salescentri.com/solutions/use-case-navigator/recommendations">
                  Custom Recommendations
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
