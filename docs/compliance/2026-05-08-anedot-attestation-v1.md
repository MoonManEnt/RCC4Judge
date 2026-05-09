# Anedot Donation Form — Contributor Attestation Language v1

**Status:** DRAFT — pending review and approval by campaign attorney before deployment.
**Race:** Rhonda C. Cooper for Chancery Judge, 11th Chancery District, Subdistrict 2 (Mississippi).
**Election:** November 3, 2026 (general).
**Committee (registered):** Committee to Elect Rhonda C. Cooper Chancery Court Judge.
**Treasurer:** Sotderia Griffin.
**Filing destination:** Mississippi Secretary of State, Elections Division (per *2026 Campaign Finance Guide*, p. 7 footnote: political committees supporting Chancery candidates file with the SOS).

---

## Purpose

This document specifies the exact contributor information fields, eligibility attestations, and on-form disclaimers that will be deployed in the Anedot donation form embedded at `https://www.rcc4judge.com/donate`. It is intended for review by the campaign attorney prior to launch. Once approved, the language is locked into the Anedot form configuration and will be version-stamped in every donation record captured via the webhook for an auditable legal record.

---

## Sources

The language below is composed from:

| Source | Subject |
|---|---|
| 52 U.S.C. § 30121 / 11 C.F.R. § 110.20 | FEC foreign national prohibition (federal model, adapted) |
| 11 C.F.R. § 110.4(b) | Federal prohibition on contributions in the name of another (anti–straw donor) |
| Miss. Code Ann. § 23-15-819 | Mississippi prohibition on foreign national contributions |
| Miss. Code Ann. § 23-15-976 | Judicial nonpartisan rule — no contributions from political parties or party-affiliated committees |
| Miss. Code Ann. § 23-15-1021 | Judicial donation limit — $2,500/election cycle for county/circuit/chancery/justice court |
| Miss. Code Ann. § 97-13-15 | Corporate, incorporated company, incorporated association limit — $1,000/calendar year |
| Miss. Code Ann. § 79-29-105(o) | LLC carve-out — committee policy decision to treat LLCs as corporations under § 97-13-15 |
| Miss. Code Ann. § 23-15-801(g) | Required identification fields for contributors |
| Miss. Code Ann. § 23-15-807(d)(ii)(iii) | Itemization at $200 calendar-year aggregate per contributor |
| Miss. Code Ann. § 23-15-1025 | Material attribution / disclaimer language |

---

## Section 1 — Required Contributor Information Fields

Collected before the eligibility attestation. Required on every donation regardless of amount because aggregates can cross the $200 itemization threshold mid-year (§ 23-15-807(d)).

1. **Donor type** *(radio, required, single selection)*
   - Individual
   - Limited Liability Company (LLC)
   - Corporation, incorporated company, or incorporated association
   - Non-party-affiliated political action committee
   - Other (free-text identification, requires attorney review before acceptance)

2. **Name** *(required)*
   - For Individual: First name, Last name
   - For all other donor types: Legal entity name as registered

3. **Mailing address** *(required, all four)*
   - Street address
   - City
   - State
   - ZIP

4. **Email address** *(required)*

5. **Phone number** *(optional)*

6. **Occupation** *(required for Individual donor type; not collected for entities)*

7. **Employer name** *(required for Individual donor type; "Self-employed" or "Retired" or "Not employed" are acceptable values; not collected for entities)*

8. **Authorized signer** *(required for non-Individual donor types)*
   - Name and title of the individual authorized to make this contribution on behalf of the entity.

---

## Section 2 — Eligibility & Attestation Block (Single Checkbox)

The donor must check a single combined checkbox affirming each of the following statements. The checkbox label reads:

> **"I certify that each of the following statements is true and complete."**

The seven statements appear immediately above the checkbox in plain readable text. Donor cannot submit the form without checking the box.

### Attestation Statements

1. **Citizenship.** I am a United States citizen or a person lawfully admitted to the United States for permanent residence. I am not a "foreign national" as that term is defined in 52 U.S.C. § 30121 or Miss. Code Ann. § 23-15-819.

2. **Own funds.** This contribution is made from my own funds (or, for an entity contributor, from the funds of the entity identified above), and not from the funds of any other person or entity. I am not making this contribution as a conduit for any other person or entity, and I have not been reimbursed by any other person or entity for this contribution.

3. **Not a federal contractor.** Neither I nor the entity identified above is a federal contractor, nor is this contribution being made by or on behalf of a federal contractor.

4. **Judicial nonpartisan.** I am not a political party, nor a committee or political committee affiliated with a political party, nor am I making this contribution on behalf of any political party or party-affiliated committee. I understand that under Miss. Code Ann. § 23-15-976 the Committee is prohibited from accepting contributions from such persons or entities.

5. **Contribution limits.** I understand and acknowledge:
   - **Individuals and non-party-affiliated political committees** are limited to $2,500 in aggregate contributions per election cycle to a candidate for chancery, county, circuit, or justice court (Miss. Code Ann. § 23-15-1021).
   - **Corporations, incorporated companies, incorporated associations, and (per Committee policy) limited liability companies** are limited to $1,000 in aggregate contributions per calendar year (Miss. Code Ann. § 97-13-15; cross-referencing § 79-29-105(o) — Committee elects to apply the corporate limit to LLCs).
   - This contribution, when added to my prior contributions to the Committee in the applicable period, does not exceed the limit applicable to me.

6. **Truthfulness.** All information I have provided in this form is true and complete to the best of my knowledge.

7. **Refund acknowledgment.** I understand that if any portion of this contribution is later determined by the Committee to exceed the legal limit applicable to me, to be otherwise non-compliant with Mississippi law, or to be made in violation of the certifications above, the Committee may refund the excess or the entire contribution and may report the contribution as required by law.

---

## Section 3 — On-Form Disclaimer (Always Visible)

Displayed in the form footer below the submit button, on every page of the form:

> **Paid for by the Committee to Elect Rhonda C. Cooper Chancery Court Judge — Sotderia Griffin, Treasurer — 118 Bainbridge Crossing, Canton, MS 39046. Approved by Rhonda C. Cooper, Candidate for Chancery Judge, 11th Chancery District, Subdistrict 2.**
>
> Contributions are not tax-deductible as charitable contributions for federal income tax purposes.

This satisfies the attribution requirement of Miss. Code Ann. § 23-15-1025.

---

## Section 4 — Receipt Email Disclaimer

The Anedot-generated receipt email and the Committee receipt email (sent via Resend) must include the same disclaimer block as Section 3, plus:

> A copy of our report is filed with the Mississippi Secretary of State's Office, Elections Division, P.O. Box 136, Jackson, MS 39205. Reports are available for public inspection.

---

## Section 5 — Cap Enforcement Logic (in Anedot)

| Donor type | Cap | Period | Aggregation |
|---|---|---|---|
| Individual | $2,500 | Election cycle (end of last cycle through 11/3/2026, plus runoff if applicable) | Per donor identity (name + address) |
| LLC | $1,000 | Calendar year | Per entity name + address |
| Corporation / inc. company / inc. assoc. | $1,000 | Calendar year | Per entity name + address |
| Non-party-affiliated PAC | $2,500 | Election cycle | Per entity name + address |
| Political party / party-affiliated PAC | **$0 — REJECTED** | n/a | Form must reject contribution |
| Foreign national | **$0 — REJECTED** | n/a | Attestation failure rejects the contribution |
| Federal contractor | **$0 — REJECTED** | n/a | Attestation failure rejects the contribution |

If a donor's pending donation would cause their aggregate to exceed the applicable cap, the form must:
1. Display a clear message stating the cap and current aggregate.
2. Offer to reduce the donation to the remaining cap headroom.
3. Decline to process if the donor refuses to reduce.

---

## Section 6 — Open Questions for Attorney Review

Before this language is locked into the Anedot form, the Committee requests written attorney review of the following:

1. **Exact wording of attestation statements 1–7.** Are any clauses too narrow, too broad, or omitting language Mississippi or federal law expects? Recommend redlines.

2. **Election cycle definition.** Section 5 assumes "end of last applicable cycle through November 3, 2026 (plus runoff window if applicable)." Confirm the exact start date for individual cap aggregation.

3. **LLC treatment.** The Committee has elected to apply the $1,000/calendar year corporate limit to LLCs (Miss. Code Ann. § 79-29-105(o) provides a statutory carve-out, but the Committee is being conservative). Confirm this is the Committee's intent and that the language in attestation #5 accurately reflects the policy.

4. **PAC affiliation diligence.** Should the form require non-party PACs to provide documentation of their non-party-affiliated status, or is the attestation alone sufficient?

5. **In-kind contributions.** This form processes cash contributions only. Confirm in-kind contributions will be captured manually by the treasurer outside this form.

6. **Joint contributions.** If two spouses wish to contribute jointly from a joint account, must the form collect employer/occupation for both? Recommend handling.

7. **Refund process.** Section 7 of the attestation references refunds. Confirm the Committee's preferred refund process (full vs. partial; turnaround; communication to donor).

8. **Receipt email language.** Section 4 references the Committee's filings being available for public inspection. Confirm this language is accurate and required.

9. **Material attribution under § 23-15-1025.** The on-form disclaimer in Section 3 names the Committee, treasurer, and approving candidate. Confirm this satisfies the statute and matches the Statement of Organization on file with the SOS.

---

## Approval

**Reviewed by:** _____________________________________
**Title:** _____________________________________
**Date:** _____________________________________
**Redlines / changes requested:** _____________________________________

Once approved by the campaign attorney, this language is locked into the Anedot form configuration. The version string `attestation-language-v1` (or subsequent version on revision) is captured with every donation record via the webhook payload at field `attestation_text_version` for auditable evidence of which language each donor saw at the moment of contribution.
