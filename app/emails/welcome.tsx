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

const XIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="currentColor"
    style={{ display: "inline-block" }}
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="currentColor"
    style={{ display: "inline-block" }}
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

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
              <XIcon />
              <span style={buttonText}>X&apos;te Takip Et</span>
            </Button>
            <Button
              style={{ ...button, backgroundColor: "#0077b5" }}
              href="https://linkedin.com/company/plannme"
            >
              <LinkedInIcon />
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
