import { Card, CardContent } from "@/components/ui/card";
import {
  Building2,
  Users,
  Shield,
  Clock,
  Target,
  Heart,
  Award,
  CheckCircle,
} from "lucide-react";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-healthcare-light to-background"
    >
      <div className="container mx-auto px-4 lg:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-healthcare-navy mb-4">
            About Revenue's Care
          </h2>
        </div>

        {/* Who We Serve */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-healthcare-navy mb-12">
            Who We Serve
          </h3>

          <p className="text-lg text-healthcare-gray max-w-3xl mx-auto mb-10 text-center">
            We are more than a BPO provider — we're your strategic partner in
            healthcare business transformation, delivering healthier experiences
            one call, one process, one patient at a time.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { icon: Building2, title: "Hospitals", desc: "Large healthcare systems" },
              { icon: Heart, title: "Clinics", desc: "Medical practices" },
              { icon: Shield, title: "Insurance", desc: "Healthcare insurers" },
              { icon: Target, title: "Startups", desc: "Contact Centre and Healthcare Innovators" },
              { icon: Users, title: "Intermediaries", desc: "Contact Centre and Revenue Cycle Partners" },
            ].map((item, index) => (
              <Card
                key={index}
                className="text-center p-6 hover:shadow-lg transition-shadow bg-white border-0"
              >
                <CardContent className="p-0">
                  <div className="mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto">
                      <item.icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <h4 className="font-bold text-healthcare-navy mb-2">
                    {item.title}
                  </h4>
                  <p className="text-sm text-healthcare-gray">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* What Makes Us Different */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-healthcare-navy mb-12">
            What Makes Us Different
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-10 w-10 text-white" />
              </div>
              <h4 className="text-xl font-bold text-healthcare-navy mb-3">
                Healthcare Expertise
              </h4>
              <p className="text-healthcare-gray">
                We understand clinical, operational, and regulatory needs
                specific to healthcare.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-10 w-10 text-white" />
              </div>
              <h4 className="text-xl font-bold text-healthcare-navy mb-3">
                Customized Solutions
              </h4>
              <p className="text-healthcare-gray">
                From small practices to large systems, we tailor our services to
                your needs.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-10 w-10 text-white" />
              </div>
              <h4 className="text-xl font-bold text-healthcare-navy mb-3">
                Technology-Driven
              </h4>
              <p className="text-healthcare-gray">
                Automation, CRM, and analytics built into every solution we
                deliver.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-10 w-10 text-white" />
              </div>
              <h4 className="text-xl font-bold text-healthcare-navy mb-3">
                People-Centric
              </h4>
              <p className="text-healthcare-gray">
                Every patient interaction matters. We deliver with care and
                professionalism.
              </p>
            </div>
          </div>
        </div>

        {/* Our 24/7 Services */}
        <div className="text-center">
          <Card className="bg-gradient-to-r from-primary to-accent text-white p-8 lg:p-12 border-0">
            <CardContent className="p-0">
              <div className="flex items-center justify-center mb-6">
                <Clock className="h-12 w-12 mr-4" />
                <h3 className="text-2xl md:text-3xl font-bold">
                  Our 24/7 Contact Centers Handle
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {[
                  "Appointment Scheduling",
                  "Claims Processing",
                  "Technical Support",
                  "Patient Outreach",
                ].map((service, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center space-x-2"
                  >
                    <CheckCircle className="h-5 w-5 text-white" />
                    <span className="text-white font-medium">{service}</span>
                  </div>
                ))}
              </div>

              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                All delivered with the care and professionalism your patients
                deserve.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
