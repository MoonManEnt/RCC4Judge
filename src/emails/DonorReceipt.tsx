import {
  Html,
  Head,
  Preview,
  Body,
  Container,
  Section,
  Row,
  Column,
  Text,
  Button,
  Hr,
} from "@react-email/components";

interface DonorReceiptProps {
  donorName: string;
  amount: number;
  tierName: string;
  isRecurring: boolean;
  contributorType: "individual" | "corporate";
  transactionDate: string;
  stripePaymentId: string;
}

export default function DonorReceipt({
  donorName = "Valued Supporter",
  amount = 100,
  tierName = "Steward",
  isRecurring = false,
  contributorType = "individual",
  transactionDate = new Date().toISOString(),
  stripePaymentId = "",
}: DonorReceiptProps) {
  const formattedDate = new Date(transactionDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const formattedAmount = `$${amount.toLocaleString()}${isRecurring ? "/mo" : ""}`;
  const firstName = donorName.split(" ")[0] || "Friend";

  return (
    <Html lang="en">
      <Head />
      <Preview>
        Thank you for your {formattedAmount} contribution to RCC for Chancery 2026
      </Preview>
      <Body
        style={{
          backgroundColor: "#F8F6F0",
          fontFamily: "Georgia, 'Times New Roman', serif",
          margin: 0,
          padding: 0,
        }}
      >
        {/* Header */}
        <Section style={{ backgroundColor: "#285238", padding: "36px 0 28px" }}>
          <Container style={{ maxWidth: "560px", margin: "0 auto", textAlign: "center" as const }}>
            <Text
              style={{
                color: "#BBCE8A",
                fontSize: "11px",
                letterSpacing: "3px",
                textTransform: "uppercase" as const,
                margin: "0 0 10px",
                fontFamily: "Arial, Helvetica, sans-serif",
              }}
            >
              RCC for Chancery 2026
            </Text>
            <Text
              style={{
                color: "#FFFFFF",
                fontSize: "28px",
                fontWeight: "bold",
                fontFamily: "Georgia, 'Times New Roman', serif",
                margin: 0,
                lineHeight: "1.3",
              }}
            >
              Thank You, {firstName}.
            </Text>
            <Text
              style={{
                color: "rgba(248,246,240,0.75)",
                fontSize: "14px",
                margin: "10px 0 0",
                fontFamily: "Arial, Helvetica, sans-serif",
              }}
            >
              Your contribution is received and deeply appreciated.
            </Text>
          </Container>
        </Section>

        {/* Amber accent */}
        <Section style={{ backgroundColor: "#FFA21F", height: "4px", padding: 0 }}>
          <Text style={{ margin: 0, fontSize: "1px", lineHeight: "1px" }}>&nbsp;</Text>
        </Section>

        {/* Receipt card */}
        <Container style={{ maxWidth: "560px", margin: "0 auto", padding: "0 24px" }}>
          <Section
            style={{
              backgroundColor: "#FFFFFF",
              borderRadius: "12px",
              padding: "32px",
              margin: "32px 0 24px",
              border: "1px solid #EDE9DF",
            }}
          >
            <Text
              style={{
                color: "#FFA21F",
                fontSize: "11px",
                letterSpacing: "3px",
                textTransform: "uppercase" as const,
                margin: "0 0 4px",
                fontFamily: "Arial, Helvetica, sans-serif",
              }}
            >
              Contribution Receipt
            </Text>
            <Hr style={{ borderColor: "#EDE9DF", margin: "12px 0 20px" }} />

            {/* Amount */}
            <Text
              style={{
                color: "#285238",
                fontSize: "42px",
                fontWeight: "bold",
                fontFamily: "Georgia, 'Times New Roman', serif",
                margin: "0 0 4px",
                lineHeight: "1",
              }}
            >
              {formattedAmount}
            </Text>
            <Text
              style={{
                color: "#5E4C5A",
                fontSize: "13px",
                margin: "0 0 24px",
                fontFamily: "Arial, Helvetica, sans-serif",
              }}
            >
              {tierName} Level {isRecurring ? "— Monthly Recurring" : "— One-Time"}
            </Text>

            {/* Detail rows */}
            <Row style={{ marginBottom: "12px" }}>
              <Column style={{ width: "40%" }}>
                <Text
                  style={{
                    color: "#4A4A4A",
                    fontSize: "13px",
                    fontFamily: "Arial, Helvetica, sans-serif",
                    margin: 0,
                  }}
                >
                  Date
                </Text>
              </Column>
              <Column style={{ width: "60%", textAlign: "right" as const }}>
                <Text
                  style={{
                    color: "#285238",
                    fontSize: "13px",
                    fontWeight: "600",
                    fontFamily: "Arial, Helvetica, sans-serif",
                    margin: 0,
                  }}
                >
                  {formattedDate}
                </Text>
              </Column>
            </Row>
            <Row style={{ marginBottom: "12px" }}>
              <Column style={{ width: "40%" }}>
                <Text
                  style={{
                    color: "#4A4A4A",
                    fontSize: "13px",
                    fontFamily: "Arial, Helvetica, sans-serif",
                    margin: 0,
                  }}
                >
                  Contributor Type
                </Text>
              </Column>
              <Column style={{ width: "60%", textAlign: "right" as const }}>
                <Text
                  style={{
                    color: "#285238",
                    fontSize: "13px",
                    fontWeight: "600",
                    fontFamily: "Arial, Helvetica, sans-serif",
                    margin: 0,
                  }}
                >
                  {contributorType === "corporate" ? "Corporate" : "Individual"}
                </Text>
              </Column>
            </Row>
            {stripePaymentId && (
              <Row>
                <Column style={{ width: "40%" }}>
                  <Text
                    style={{
                      color: "#4A4A4A",
                      fontSize: "13px",
                      fontFamily: "Arial, Helvetica, sans-serif",
                      margin: 0,
                    }}
                  >
                    Reference
                  </Text>
                </Column>
                <Column style={{ width: "60%", textAlign: "right" as const }}>
                  <Text
                    style={{
                      color: "#285238",
                      fontSize: "11px",
                      fontWeight: "600",
                      fontFamily: "'Courier New', monospace",
                      margin: 0,
                    }}
                  >
                    {stripePaymentId.length > 24
                      ? stripePaymentId.slice(0, 24) + "..."
                      : stripePaymentId}
                  </Text>
                </Column>
              </Row>
            )}
          </Section>

          {/* Personal message */}
          <Section style={{ padding: "0 8px 32px" }}>
            <Text
              style={{
                color: "#2C2C2C",
                fontSize: "17px",
                lineHeight: "1.7",
                fontFamily: "Georgia, 'Times New Roman', serif",
                margin: "0 0 16px",
              }}
            >
              What you&apos;ve just done matters more than you may realize.
            </Text>
            <Text
              style={{
                color: "#4A4A4A",
                fontSize: "15px",
                lineHeight: "1.7",
                fontFamily: "Arial, Helvetica, sans-serif",
                margin: "0 0 16px",
              }}
            >
              Chancery Court shapes the most consequential moments in a family&apos;s
              life — custody decisions, estate proceedings, guardianships. The families
              of Leake County and Madison County deserve a Chancellor who approaches
              every one of those moments with experience, fairness, and genuine
              compassion.
            </Text>
            <Text
              style={{
                color: "#4A4A4A",
                fontSize: "15px",
                lineHeight: "1.7",
                fontFamily: "Arial, Helvetica, sans-serif",
                margin: "0 0 16px",
              }}
            >
              Your contribution brings us one step closer to making that a reality on
              November 3, 2026. On behalf of Rhonda and the entire team —{" "}
              <strong>thank you</strong>.
            </Text>
            {isRecurring && (
              <Text
                style={{
                  color: "#4A4A4A",
                  fontSize: "14px",
                  lineHeight: "1.7",
                  fontFamily: "Arial, Helvetica, sans-serif",
                  backgroundColor: "#F8F6F0",
                  borderLeft: "3px solid #FFA21F",
                  padding: "12px 16px",
                  margin: "0 0 16px",
                  borderRadius: "0 8px 8px 0",
                }}
              >
                You&apos;ve set up a <strong>recurring monthly contribution</strong>.
                This steady support is invaluable — it allows us to plan, organize,
                and execute the long campaign ahead. You may manage or cancel your
                recurring donation at any time by contacting us at{" "}
                <a
                  href="mailto:Support@RCC4Judge.com"
                  style={{ color: "#285238" }}
                >
                  Support@RCC4Judge.com
                </a>
                .
              </Text>
            )}
          </Section>

          {/* CTA */}
          <Section style={{ textAlign: "center" as const, paddingBottom: "32px" }}>
            <Button
              href="https://www.rcc4judge.com/volunteer"
              style={{
                backgroundColor: "#285238",
                color: "#FFFFFF",
                fontFamily: "Arial, Helvetica, sans-serif",
                fontSize: "14px",
                fontWeight: "bold",
                padding: "14px 32px",
                borderRadius: "50px",
                textDecoration: "none",
                display: "inline-block",
                letterSpacing: "0.5px",
              }}
            >
              Volunteer With Us
            </Button>
            <Text
              style={{
                color: "#5E4C5A",
                fontSize: "12px",
                margin: "12px 0 0",
                fontFamily: "Arial, Helvetica, sans-serif",
              }}
            >
              Share this campaign with friends and family — every voter counts.
            </Text>
          </Section>

          {/* Legal */}
          <Section
            style={{
              backgroundColor: "#EDE9DF",
              borderRadius: "8px",
              padding: "20px 24px",
              margin: "0 0 32px",
            }}
          >
            <Text
              style={{
                color: "#5E4C5A",
                fontSize: "11px",
                lineHeight: "1.6",
                fontFamily: "Arial, Helvetica, sans-serif",
                margin: 0,
              }}
            >
              <strong>IMPORTANT LEGAL NOTICES:</strong> This contribution is NOT
              tax deductible. Mississippi law limits individual contributions to
              $2,500 per election cycle (MS §23-15-1021) and corporate contributions
              to $1,000 per calendar year (MS §97-13-15). Per Mississippi Code of
              Judicial Conduct Canon 5, contributions are solicited by RCC for
              Chancery 2026 and not by Candidate Rhonda C. Cooper personally. Paid
              for by RCC for Chancery 2026, P.O. Box 74, Tougaloo, MS 39174.
              Sotderia Griffin, Treasurer.
            </Text>
          </Section>
        </Container>

        {/* Footer */}
        <Section style={{ backgroundColor: "#285238", padding: "24px 0" }}>
          <Container
            style={{
              maxWidth: "560px",
              margin: "0 auto",
              textAlign: "center" as const,
            }}
          >
            <Text
              style={{
                color: "rgba(248,246,240,0.5)",
                fontSize: "11px",
                margin: 0,
                fontFamily: "Arial, Helvetica, sans-serif",
                lineHeight: "1.8",
              }}
            >
              Rhonda C. Cooper for Chancery Judge — 11th District, Subdistrict 2
              <br />
              rcc4judge.com | P.O. Box 74, Tougaloo, MS 39174
              <br />
              You are receiving this because you made a contribution to RCC for
              Chancery 2026.
            </Text>
          </Container>
        </Section>
      </Body>
    </Html>
  );
}
