

# IAM (Identity & Access Management) — Deep Dive 🔐🧭


## 1️⃣ What is IAM? — Overview & purpose

**IAM (Identity and Access Management)** is AWS’s centralized service for **authentication (who you are)** and **authorization (what you can do)**.
It controls who (identities) can access which AWS resources, under which conditions. IAM is foundational for cloud security: correctly designing IAM prevents data breaches and enforces least privilege.

**Two big goals**

* **Identify** principals (users, services, federated users) and authenticate them.
* **Authorize** those principals using policies, roles, and guardrails so they only perform permitted actions.

---

## 2️⃣ Core concepts — identities & principals 🧑‍💻🤖

### Users (👤)

* Long-lived identities for humans or bots inside an AWS account.
* Can have **console passwords** (for web sign-in) and **access keys** (programmatic).
* Best practice: minimize use; prefer temporary credentials via roles.

### Groups (👥)

* Collections of users to which **identity-based policies** can be attached.
* Simplifies permission management.
* **Note:** IAM groups **cannot** be nested.

### Roles (🎭) — the most powerful tool

* A **role** is a set of permissions **that a trusted entity can assume**.
* Roles have two important parts:

  * **Trust policy** (who can assume the role — e.g., EC2, another account, a SAML/OIDC provider).
  * **Permission policy** (what the role is allowed to do once assumed).
* Roles issue **temporary credentials** (via STS). Use roles for EC2, Lambda, cross-account access, and federated users.
* **Instance profile** = wrapper that lets EC2 instances assume a role.

### Service principals (🔌)

* AWS services assume roles using a service principal (e.g., `ec2.amazonaws.com`, `lambda.amazonaws.com`).

### Federated identities & identity providers (🪪)

* External identity providers (SAML, OIDC, Cognito) let corporate/third-party users access AWS **without** creating IAM users.
* Federation uses roles (AssumeRoleWithSAML / AssumeRoleWithWebIdentity).

---

## 3️⃣ Policies — the language of permissions 📜

IAM policies are JSON documents that **allow** or **deny** actions. There are several policy types:

### Identity-based policies

* **Managed policies** (AWS-managed or customer-managed): independently versioned documents you can attach to users, groups, or roles.

  * *AWS-managed* = maintained by AWS.
  * *Customer-managed* = you create and control them.
* **Inline policies**: embedded directly on a single user, group, or role (use sparingly—harder to track).

### Resource-based policies

* Policies attached to resources (S3 bucket policy, SQS, SNS, KMS key policy, Lambda resource policy).
* These include a **Principal** element (who is allowed) — identity policies do **not** include `Principal`.
* Useful for cross-account access because the resource itself grants access.

### Other policy constructs

* **Permissions boundaries** — maximum permissions an identity (user/role) can obtain. They *limit* what the identity can be granted (useful for delegating admin tasks safely).
* **Session policies** — temporary inline policies you pass during `AssumeRole` to limit the session further.
* **Service Control Policies (SCPs)** — part of AWS Organizations; set account-level guardrails that limit what principals in member accounts can do. SCPs **do not** grant permissions themselves — they only *restrict* (allow list or deny).
* **S3 ACLs and legacy controls** — older permission layer; prefer resource policies over ACLs when possible.

---

## 4️⃣ Anatomy of a policy — fields & semantics 🧩

Typical policy structure:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "OptionalStatementId",
      "Effect": "Allow" | "Deny",
      "Principal": { /* only in resource-based policies */ },
      "Action": "s3:GetObject" | ["s3:GetObject","s3:PutObject"],
      "Resource": "arn:aws:s3:::example-bucket/*",
      "Condition": { "IpAddress": {"aws:SourceIp":"203.0.113.0/24"} }
    }
  ]
}
```

* **Effect**: `Allow` or `Deny`. `Deny` is explicit and overrides any Allow.
* **Action**: which API operations (or `*`) — service-specific action names.
* **Resource**: ARN(s) the statement applies to. `*` matches all.
* **Condition**: extra constraints using condition keys (e.g., `aws:SourceIp`, `aws:MultiFactorAuthPresent`, `aws:RequestTag/...`).
* **Principal**: identifies who the resource-based policy grants access to (users, accounts, services).

---

## 5️⃣ Policy examples — real snippets with explanations 🛠️

**A. Read-only to a specific S3 bucket path**

```json
{
  "Version":"2012-10-17",
  "Statement":[
    {
      "Effect":"Allow",
      "Action":"s3:GetObject",
      "Resource":"arn:aws:s3:::my-bucket/path/*"
    }
  ]
}
```

* Grants `GetObject` to objects under `my-bucket/path/`. Attach this to a role or user.

**B. Deny S3 deletes except from a specific IP range**

```json
{
  "Version":"2012-10-17",
  "Statement":[
    {
      "Effect":"Deny",
      "Action":"s3:DeleteObject",
      "Resource":"arn:aws:s3:::my-bucket/*",
      "Condition":{"NotIpAddress":{"aws:SourceIp":"203.0.113.0/24"}}
    }
  ]
}
```

* Explicit Deny blocks deletes unless requests originate from that IP range.

**C. Trust policy for EC2 instance role**

```json
{
  "Version":"2012-10-17",
  "Statement":[
    {
      "Effect":"Allow",
      "Principal":{"Service":"ec2.amazonaws.com"},
      "Action":"sts:AssumeRole"
    }
  ]
}
```

* Lets EC2 instances assume the role via instance profile.

**D. Cross-account trust (allow role from account 111122223333)**

```json
{
  "Version":"2012-10-17",
  "Statement":[
    {
      "Effect":"Allow",
      "Principal":{"AWS":"arn:aws:iam::111122223333:role/ExternalRole"},
      "Action":"sts:AssumeRole"
    }
  ]
}
```

---

## 6️⃣ Policy evaluation — rules & order of operations 🧭

Understanding evaluation prevents surprising denials.

**Simplified evaluation flow**

1. **Default Deny** — everything is denied by default.
2. Evaluate all applicable policies (identity-based, resource-based, session policies, permissions boundaries, SCPs).
3. If **any** policy returns an **explicit Deny**, the request is denied.
4. If no explicit Deny, the request is allowed **only if** there is an **explicit Allow** from an identity-based or resource-based policy **and** that action is not blocked by an SCP or permissions boundary.
5. **SCPs**: act as a filter across accounts — if the action is not allowed by the SCP, it cannot be allowed regardless of identity policies.
6. **Permissions boundary** restricts the maximum permissions an identity can get: even if a policy allows it, the permissions boundary can block it.

**Key takeaway:** `Explicit Deny > Allow`. Also, multiple policy types interact (identity + resource + org-level) — always check all relevant policies in case of denials.

---

## 7️⃣ Temporary credentials & AWS STS (🔑 short-lived security)

* **AWS STS (Security Token Service)** issues temporary credentials (AccessKeyId, SecretAccessKey, SessionToken) with limited lifetime.
* Common STS flows:

  * `AssumeRole` — used for roles (cross-account, services, or within the same account).
  * `AssumeRoleWithSAML` — SAML federation.
  * `AssumeRoleWithWebIdentity` — OIDC / mobile identity providers (Google, Amazon, Cognito).
  * `GetSessionToken` — MFA-based temporary tokens for IAM users.
* **Benefits**: short-lived credentials reduce blast radius of leaked keys and enable secure cross-account/service access.

**Example cross-account scenario**

1. Create a role in account B with a trust policy that allows account A’s principals to assume it.
2. From account A, call `aws sts assume-role --role-arn arn:aws:iam::B:role/RoleName`.
3. Receive temporary credentials and perform permitted actions in account B.

---

## 8️⃣ Federation & Single Sign-On (SSO) 🌐

* **SAML 2.0 federation**: enterprise IdP (Azure AD, Okta, ADFS) provides SAML assertions; AWS trusts them and issues temporary AWS credentials mapped to roles. Useful for corporate SSO.
* **OIDC / Web Identity**: mobile/web apps sign in with Google/Facebook/Cognito; exchange token for AWS temporary credentials.
* **AWS IAM Identity Center (formerly AWS SSO)**: centralized sign-in to multiple AWS accounts, manage users & permission sets, map identities to roles in member accounts. (If you use a corporate IdP, Identity Center can integrate with it.)

**Important**: Federated users are authenticated externally and authorized via IAM roles — you don't create IAM users for them.

---

## 9️⃣ Roles for AWS services — common patterns 🚀

* **EC2 instance role (instance profile)**: attach a role to EC2 so apps on the instance call AWS APIs without storing keys.
* **Lambda execution role**: the function assumes a role to access DynamoDB, S3, etc.
* **ECS task role**: grants permissions to containers.
* **Service-linked roles**: managed by AWS services to perform actions on your behalf (created automatically).
* **Best practice**: always prefer service roles over embedded credentials in code.

---

## 🔟 IAM tools, observability & auditing 🕵️‍♀️

* **CloudTrail** — records all IAM and API activities; essential for forensics.
* **IAM Access Analyzer** — finds resources that are shared with external principals and helps detect unintended access.
* **Policy Simulator** — test policies and simulate API calls to see allow/deny outcomes.
* **Credential Report** — CSV report listing all IAM principals and their credential status (last use, rotation).
* **Access Advisor** — shows the last time a service was accessed by a principal (helps with removing unused permissions).
* **AWS Config** & **Security Hub** — enforce and detect misconfigurations.

---

## 1️⃣1️⃣ Advanced features & patterns ⚙️

### Attribute-based access control (ABAC)

* Use tags on principals and resources, combined with variables like `${aws:PrincipalTag/Team}`, to create dynamic policies.
* Example: allow actions only if resource tag `Team=team-A` equals principal’s `Team` tag.

### Permission boundaries + delegated administration

* Give developers freedom to create roles/users but restrict them via permissions boundaries to prevent privilege escalation.

### Session policies & policy chaining

* Session policies allow further constraint during `AssumeRole` — useful for temporary, fine-grained access.

### Key management (KMS) interplay

* KMS uses **key policies** (resource-based) plus IAM policies; KMS key policy can be authoritative — be careful when designing KMS access.

---

## 1️⃣2️⃣ Best practices & hardening checklist ✅

* **Root account**: enable MFA, do not use for daily tasks. Store root credentials securely and rarely use them.
* **Least privilege**: start with no access and add only what’s necessary.
* **Prefer roles & temporary credentials** over long-term access keys.
* **MFA**: enforce for interactive sign-ins and privileged operations (e.g., `aws:MultiFactorAuthPresent` conditions).
* **Rotate credentials** regularly and remove unused credentials promptly.
* **Avoid `*:*` policies** — don’t grant `Action: "*"`, `Resource: "*"`.
* **Use SCPs & permissions boundaries** to enforce organization-wide guardrails.
* **Use IAM Access Analyzer and Policy Simulator** to validate policies before deployment.
* **Enable CloudTrail organization-wide**, monitor IAM changes, and set alerts for suspicious activities.
* **Use AWS Identity Center** or a corporate IdP for centralized authentication and role assignment.
* **Tag resources and enable ABAC** for scalable, attribute-based access.
* **Automate detection** of overly permissive policies and unused credentials.
* **Document role purpose and owners** — make it clear who maintains each role/policy.

---

## 1️⃣3️⃣ Common mistakes & anti-patterns 🚫

* Using root credentials for day-to-day tasks.
* Embedding long-lived access keys in code, repos, or images (dangerous).
* Broad wildcard policies (`Action: "*", Resource: "*"`).
* Overly permissive trust policies (`Principal: "*"`) on roles/resource policies.
* Not rotating/revoking unused credentials.
* Forgetting to check Organization SCPs or permissions boundaries when debugging permission errors.
* Relying solely on ACLs instead of resource policies where appropriate.

---

## 1️⃣4️⃣ Troubleshooting tips 🔍

* If an action is denied:

  1. Check for **explicit Deny** in any policy (identity, resource, session, or SCP).
  2. Use **IAM Policy Simulator** with the principal and API call.
  3. Inspect CloudTrail to see the request and error details.
  4. Verify resource-based policy principals (correct account ID/ARN).
  5. Confirm no permission boundary or SCP is preventing the action.
  6. Check that the role was correctly assumed (valid session token & not expired).

---

## 1️⃣5️⃣ Practical examples & flows (quick reference)

* **Secure EC2 access to S3**: create role with `s3:GetObject` on bucket → attach role via instance profile → application uses SDK w/o keys.
* **Cross-account read access**: create role in account B with trust policy allowing account A’s users/roles → attach S3 read policy to role → account A assumes role.
* **SSO for employees**: configure corporate IdP (SAML) → configure roles and attribute mappings → users sign in via IdP and assume roles.

---

## 1️⃣6️⃣ Limits & operational notes ⚠️

* IAM has service quotas (max number of users, roles, policies attachments, policy size limits). These change over time — check AWS docs or request quota increases from AWS Support when needed.
* Policies should be modular: prefer multiple focused policies over one huge policy for clarity and reusability.

---

## Wrap-up — TL;DR 🧾

* **IAM = identity + authorization**: who can do what, where, and under which conditions.
* **Use roles + STS** for temporary access, avoid long-lived keys.
* **Design for least privilege**, use tools (Access Analyzer, Policy Simulator, CloudTrail) to test and monitor.
* **Use org-level guardrails** (SCPs, permission boundaries) to prevent privilege escalations across accounts.
* **Automate auditing and rotate credentials** regularly.

---