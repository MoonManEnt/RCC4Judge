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
  Hr,
} from "@react-email/components";

interface DonorNotificationProps {
  donorName: string;
  donorEmail: string;
  donorPhone: string;
  amount: number;
  tierName: string;
  isRecurring: boolean;
  contributorType: "individual" | "corporate";
  address: string;
  employer: string;
  occupation: string;
  corporateName: string;
  corporateAuthorizer: string;
  stripePaymentId: string;
  transactionDate: string;
}

export default function DonorNotification({
  donorName = "",
  donorEmail = "",
  donorPhone = "",
  amount = 0,
  tierName = "Custom",
  isRecurring = false,
  contributorType = "individual",
  address = "",
  employer = "",
  occupation = "",
  corporateName = "",
  corporateAuthorizer = "",
  stripePaymentId = "",
  transactionDate = new Date().toISOString(),
}: DonorNotificationProps) {
  const formattedDate = new Date(transactionDate).toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    timeZoneName: "short",
  });

  const rows: [string, string][] = [
    ["Donor", donorName],
    ["Email", donorEmail],
    ["Phone", donorPhone || "—"],
    [
      "Amount",
      `$${amount.toLocaleString()}${isRecurring ? "/month (RECURRING)" : " (one-time)"}`,
    ],
    ["Tier", tierName],
    ["Type", contributorType === "corporate" ? "Corporate" : "Individual"],
    ["Address", address || "—"],
    ...(contributorType === "individual"
      ? ([
          ["Employer", employer || "—"],
          ["Occupation", occupation || "—"],
        ] as [string, string][])
      : ([
          ["Corporate Name", corporateName || "—"],
          ["Authorized By", corporateAuthorizer || "—"],
        ] as [string, string][])),
    ["Stripe ID", stripePaymentId],
    ["Timestamp", formattedDate],
  ];

  return (
    <Html lang="en">
      <Head />
      <Preview>
        {`[${isRecurring ? "RECURRING" : "ONE-TIME"}] New $${amount} donation from ${donorName}`}
      </Preview>
      <Body
        style={{
          backgroundColor: "#F8F6F0",
          fontFamily: "Arial, Helvetica, sans-serif",
          margin: 0,
          padding: 0,
        }}
      >
        <Container
          style={{ maxWidth: "560px", margin: "0 auto", padding: "0 16px" }}
        >
          {/* Header */}
          <Section
            style={{
              backgroundColor: "#285238",
              borderRadius: "0 0 8px 8px",
              padding: "24px 32px",
              marginBottom: "24px",
            }}
          >
            <Text
              style={{
                color: "#BBCE8A",
                fontSize: "10px",
                letterSpacing: "3px",
                textTransform: "uppercase" as const,
                margin: "0 0 4px",
              }}
            >
              RCC for Chancery 2026 — Internal
            </Text>
            <Text
              style={{
                color: "#FFFFFF",
                fontSize: "20px",
                fontWeight: "bold",
                margin: 0,
              }}
            >
              New Contribution Received
            </Text>
            <Text
              style={{
                color: "rgba(248,246,240,0.7)",
                fontSize: "13px",
                margin: "4px 0 0",
              }}
            >
              ${amount.toLocaleString()} {isRecurring ? "monthly" : "one-time"} —{" "}
              {contributorType} — {tierName}
            </Text>
          </Section>

          {/* Data table */}
          <Section
            style={{
              backgroundColor: "#FFFFFF",
              borderRadius: "12px",
              padding: "24px 32px",
              border: "1px solid #EDE9DF",
              marginBottom: "24px",
            }}
          >
            {rows.map(([label, value], i) => (
              <div key={label}>
                {i > 0 && (
                  <Hr style={{ borderColor: "#EDE9DF", margin: "8px 0" }} />
                )}
                <Row>
                  <Column style={{ width: "38%", verticalAlign: "top" }}>
                    <Text
                      style={{
                        color: "#5E4C5A",
                        fontSize: "12px",
                        fontWeight: "bold",
                        textTransform: "uppercase" as const,
                        letterSpacing: "0.5px",
                        margin: 0,
                      }}
                    >
                      {label}
                    </Text>
                  </Column>
                  <Column style={{ width: "62%", verticalAlign: "top" }}>
                    <Text
                      style={{
                        color: "#2C2C2C",
                        fontSize: "14px",
                        margin: 0,
                        wordBreak: "break-all" as const,
                      }}
                    >
                      {value}
                    </Text>
                  </Column>
                </Row>
              </div>
            ))}
          </Section>

          <Text
            style={{
              color: "#5E4C5A",
              fontSize: "11px",
              textAlign: "center" as const,
              lineHeight: "1.6",
              marginBottom: "32px",
            }}
          >
            This is an automated notification from rcc4judge.com.
            <br />
            Log into Stripe Dashboard to manage payments and subscriptions.
          </Text>
        </Container>
      </Body>
    </Html>
  );
}
