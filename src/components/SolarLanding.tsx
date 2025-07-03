"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  CheckCircle,
  Users,
  Zap,
  Calendar,
  MessageSquare,
  ClipboardCheck,
} from "lucide-react";

const SolarLanding = () => {
  const features = [
    {
      icon: <CheckCircle className="w-12 h-12 text-green-600" />,
      title: "Free Evaluation",
      description: "Professional assessment at no cost to you",
    },
    {
      icon: <Users className="w-12 h-12 text-green-600" />,
      title: "Expert Specialists",
      description: "Our technical professionals you can rely on",
    },
    {
      icon: <Zap className="w-12 h-12 text-green-600" />,
      title: "Quick Process",
      description: "Simple scheduling and fast evaluation",
    },
  ];

  const steps = [
    {
      number: "1",
      icon: <Calendar className="w-6 h-6" />,
      title: "Schedule an Evaluation",
      description:
        "Fill out our simple form with your contact information and preferred time slot",
    },
    {
      number: "2",
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Receive Confirmation",
      description:
        "Get email confirmation with your appointment details and specialist information",
    },
    {
      number: "3",
      icon: <ClipboardCheck className="w-6 h-6" />,
      title: "Get Your Evaluation",
      description:
        "Meet with our specialist who will assess your property's solar potential",
    },
  ];

  return (
    <div className="h-auto bg-gray-50">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Solar Panel Evaluation Service
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Get a free evaluation for your property and discover how much you
            can save with solar energy. Our pre-approved specialists will assess
            your property&apos;s solar potential.
          </p>
          <Button
            size="lg"
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 cursor-pointer"
          >
            Request Free Evaluation
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Our Service
            </h2>
            <p className="text-gray-600">
              Discover the benefits of our professional solar panel evaluation
              program
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center border-0 shadow-lg">
                <CardHeader className="pb-4">
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-green-50 rounded-full">
                      {feature.icon}
                    </div>
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-900">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-gray-600">
              Get your solar panel evaluation in these easy steps
            </p>
          </div>
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    {step.number}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="text-green-600">{step.icon}</div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-gray-600 mb-8">
            Schedule your free solar panel evaluation today
          </p>
          <Button
            size="lg"
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 cursor-pointer"
          >
            Request Evaluation
          </Button>
        </div>
      </section>
    </div>
  );
};

export default SolarLanding;
