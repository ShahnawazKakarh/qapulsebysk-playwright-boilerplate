# Slack Notifications Setup
**QA Pulse by SK** · www.skakarh.com

---

## How It Works

After every CI run, a Slack message is sent with:
- ✅ Pass or ❌ Fail status
- Repo name + branch
- Who triggered it
- Direct link to the HTML/Mochawesome report

---

## Setup (5 minutes)

### Step 1 — Create Slack Webhook
1. Go to [api.slack.com/apps](https://api.slack.com/apps)
2. Click **Create New App** → **From scratch**
3. Name it `QA Pulse CI` and select your workspace
4. Click **Incoming Webhooks** → toggle **Activate**
5. Click **Add New Webhook to Workspace**
6. Select the channel (e.g. `#qa-alerts`)
7. Copy the webhook URL — looks like: `https://hooks.slack.com/services/T.../B.../...`

### Step 2 — Add to GitHub Secrets
1. Go to your repo → **Settings** → **Secrets and variables** → **Actions**
2. Click **New repository secret**
3. Name: `SLACK_WEBHOOK_URL`
4. Value: paste your webhook URL
5. Click **Add secret**

### Step 3 — Done!
Push any commit to `master` — Slack notification fires automatically.

---

## What the Notification Looks Like

**✅ Success:**
```
✅ Playwright Tests Passed
Repo:         QAPulse-by-SK/playwright-boilerplate
Branch:       master
Triggered by: ShahnawazKakarh
Report:       View HTML Report →
```

**❌ Failure:**
```
❌ Playwright Tests Failed
Repo:         QAPulse-by-SK/playwright-boilerplate
Branch:       master
Triggered by: ShahnawazKakarh
Run:          View Failed Run →
```

---

*Created by QA Pulse by SK · skakarh.com*
