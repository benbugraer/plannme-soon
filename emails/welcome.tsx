import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Preview,
  Text,
  Section,
} from "@react-email/components";
import * as React from "react";
import XformerlyTwitter from "@/public/icons/XIcon";
import LinkedIn from "@/public/icons/LinkedinIcon";

export const WelcomeEmail = () => (
  <Html>
    <Head />
    <Preview>Plannme&apos;ye abone olunduğunuz için teşekkür ederiz!</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={content}>
          <Text style={header}>Selam Plannme&apos;ye hoşgeldin! 👋</Text>

          <Text style={paragraph}>
            Plannme ailesine katıldığınız için çok mutluyuz! Tüm
            bilgilendirmelerden zamanında haberdar olacaksınız. Size en iyi
            deneyimi sunmak için elimizden geleni yapacağız.
          </Text>

          <Section style={featuresContainer}>
            <Text style={featureText}>✨ Özel içerikler</Text>
            <Text style={featureText}>🔔 Anlık bildirimler</Text>
            <Text style={featureText}>🎯 Kişiselleştirilmiş öneriler</Text>
          </Section>

          <Text style={paragraph}>
            Çok yakında görüşürüz,
            <br />
            <span style={signature}>Plannme Ekibi</span>
          </Text>
        </Section>

        <Hr style={hr} />

        <Section style={socialSection}>
          <Text style={socialText}>Bizi sosyal medyada takip edin</Text>
          <div style={socialButtons}>
            <Button style={button} href="https://x.com/plannme">
              <XformerlyTwitter className="w-5 h-5" />
              <span style={buttonText}>X&apos;te Takip Et</span>
            </Button>
            <Button
              style={{ ...button, backgroundColor: "#0077b5" }}
              href="https://linkedin.com/company/plannme"
            >
              <LinkedIn className="w-5 h-5" />
              <span style={buttonText}>LinkedIn&apos;de Takip Et</span>
            </Button>
          </div>
        </Section>
      </Container>
    </Body>
  </Html>
);

export default WelcomeEmail;

const main = {
  backgroundColor: "#f5f5f5",
  fontFamily:
    'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "40px 20px",
  maxWidth: "600px",
  width: "100%",
};

const content = {
  backgroundColor: "#ffffff",
  padding: "40px",
  borderRadius: "12px",
  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
};

const header = {
  fontSize: "24px",
  lineHeight: "1.3",
  fontWeight: "bold",
  color: "#1e1e1e",
  margin: "0 0 20px",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "1.6",
  color: "#4b5563",
  margin: "0 0 24px",
};

const featuresContainer = {
  margin: "32px 0",
  padding: "20px",
  backgroundColor: "#f8fafc",
  borderRadius: "8px",
};

const featureText = {
  fontSize: "15px",
  color: "#374151",
  margin: "8px 0",
};

const signature = {
  fontWeight: "bold",
  color: "#1e1e1e",
};

const hr = {
  borderColor: "#e5e7eb",
  margin: "32px 0",
};

const socialSection = {
  textAlign: "center" as const,
};

const socialText = {
  fontSize: "14px",
  color: "#6b7280",
  marginBottom: "16px",
};

const button = {
  backgroundColor: "#1e1e1e",
  borderRadius: "8px",
  color: "#fff",
  fontSize: "14px",
  textDecoration: "none",
  textAlign: "center" as const,
  padding: "12px 24px",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "8px",
  border: "none",
  cursor: "pointer",
  minWidth: "200px",
};

const buttonText = {
  marginLeft: "8px",
};

const socialButtons = {
  display: "flex",
  flexDirection: "column" as const,
  gap: "12px",
  alignItems: "center",
  width: "100%",
};
