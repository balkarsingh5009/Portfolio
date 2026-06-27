var projects = {
  aiplatform: {
    icon: "🤖", iconClass: "ci-indigo",
    title: "AI Outreach & Research Platform",
    subtitle: "Auto-Research · ICP Scoring · Human-Approved Sends",
    domain: "AI Engineering · Backend · DevOps / Platform Engineering",
    overview: "A production AI system that auto-researches B2B prospects and drafts personalised email outreach, with a human-in-the-loop approval step before anything is sent. Two decoupled pipelines — research and outreach — converge to turn a raw lead into a ready-to-review draft, while a person stays in control of every send.",
    problem: "Sales teams collect leads from events and a CRM, then must manually research each company, qualify it against an ideal-customer profile (ICP), and write a personalised follow-up. It's slow, inconsistent, and doesn't scale. The platform automates the research, scoring, and drafting while keeping a human in control of what actually gets sent.",
    built: [
      "Lead ingestion via a secure CRM webhook (HMAC signature verification + idempotent dedup) or a spreadsheet of notes",
      "Research pipeline: an LLM with live web search gathers company intelligence, scores it against an Ideal Customer Profile (ICP), and emits structured JSON",
      "Outreach pipeline: combines research + CRM data to generate a personalised email and create a draft for review",
      "Human-in-the-loop approval — a person edits/approves and sends; nothing goes out automatically",
      "Two decoupled pipelines (research → outreach) with an intentional convergence point",
      "Durable, resumable orchestration — every step checkpointed in PostgreSQL, idempotent and safe to retry or redeploy",
      "Quality-gate retry loops around LLM calls with Zod-validated structured output",
      "Full step-level observability via structured logging",
      "Integrations: HubSpot CRM (HMAC webhooks), Google Workspace (Gmail draft creation via service account, Sheets)"
    ],
    metrics: [
      { val: "Human", lbl: "approval required before every send" },
      { val: "2", lbl: "decoupled pipelines: research → outreach" },
      { val: "0", lbl: "duplicate work on retry (idempotent)" },
      { val: "JSON", lbl: "structured, Zod-validated LLM output" }
    ],
    tools: ["TypeScript","Node.js","NestJS","PostgreSQL","Drizzle ORM","Anthropic Claude API","Vercel Workflow SDK","Zod","HubSpot API","Gmail / Google Workspace API","AWS ECS Fargate","AWS CDK","Docker","GitLab CI/CD","Turborepo","pnpm","Vitest","Pino"],
    principles: [
      { name: "Event-Driven Architecture", desc: "Triggered by webhooks/events, not polling" },
      { name: "Durable Workflows", desc: "Postgres-checkpointed, idempotent, safe to retry" },
      { name: "Human-in-the-Loop", desc: "Every send reviewed and approved by a person" },
      { name: "LLM as a Reliable Component", desc: "Tool-use, web search, structured JSON, retry gates" },
      { name: "Infrastructure-as-Code", desc: "AWS CDK, containerised, CI/CD-gated deploys" },
      { name: "Typed End-to-End", desc: "TypeScript + Zod, tested and observable" }
    ]
  },
  expo: {
    icon: "🗺", iconClass: "ci-purple",
    title: "Expo Intelligence System",
    subtitle: "Pre-Expo Targeting · Live Meeting Tracking · Post-Expo Pipeline",
    overview: "Built a complete expo operating system that transformed UBL's trade show presence from scattered outreach into a precision lead generation engine. The system covered the full lifecycle — from identifying target companies weeks before the expo, to real-time meeting tracking during the event, to zero-leakage lead consolidation after.",
    problem: "Before this system, UBL faced random outreach with no prioritization, a low meeting show-up rate of around 25–30%, no structured tracking during expos, high lead leakage post-event, and zero leadership visibility on pipeline status.",
    built: [
      "Pre-Expo: Target company identification across Exhibitors, Visitors, Delegates, and Lost Leads segments",
      "Company profiling and segmentation with priority scoring based on fit and potential",
      "Outreach planning using the AIDCA framework (Attention, Interest, Desire, Conviction, Action)",
      "During Expo: Meeting scheduling and slot allocation with calendar invite automation",
      "WhatsApp reminder sequences with timed follow-up cadences",
      "Real-time tracking dashboards accessible live during the show",
      "Post-Expo: Lead consolidation system ensuring zero data loss across all touchpoints",
      "Follow-up automation workflows with conditional branching by lead stage",
      "Lead prioritization and nurturing engine integrated with HubSpot"
    ],
    metrics: [
      { val: "120+", lbl: "Pre-booked meetings at a flagship expo" },
      { val: "55→120", lbl: "Meetings doubled from previous expo" },
      { val: "5+", lbl: "Expos powered by this system" },
      { val: "48hrs", lbl: "Saved in post-expo consolidation per event" }
    ],
    tools: ["Google Sheets","HubSpot","WhatsApp","Gmail","Calendar Automation","SendGrid","Scrapers & Bots"],
    principles: [
      { name: "Systems Thinking", desc: "Designed full lifecycle: Pre → During → Post" },
      { name: "AIDCA Framework", desc: "Structured outreach to improve engagement" },
      { name: "Theory of Constraints", desc: "Eliminated show-up & data-loss bottlenecks" },
      { name: "Life-Cycle Management", desc: "TOFU → MOFU → BOFU lead mapping" }
    ]
  },
  automation: {
    icon: "⚡", iconClass: "ci-teal",
    title: "Post-Expo Automation Engine",
    subtitle: "Email Generation · Conditional Workflows · CRM Sync",
    overview: "Eliminated 100% of manual follow-up work post-expo by building a scalable automation engine. The system automatically generated personalised follow-up emails, categorised leads by interest area and priority, routed them through conditional approval workflows, and synced everything to HubSpot and SendGrid for execution.",
    problem: "Post-expo follow-ups were manual, inconsistent, and slow. The team spent days drafting individual emails, leading to delayed responses, missed leads, and poor conversion rates. There was no standard communication quality or reusable system.",
    built: [
      "Automated email generation engine creating personalised emails based on company, product interest, and conversation notes",
      "Intelligent lead categorisation that tags each lead by interest area and priority to drive tailored follow-up sequences",
      "Conditional workflow engine: different follow-up sequences triggered based on lead stage, response status, and priority score",
      "Human approval mechanism before emails are sent — manager reviews and triggers batch sends",
      "Integration with Gmail and SendGrid for multi-channel delivery",
      "Google Apps Script backend that runs logic automatically on form submissions",
      "Full HubSpot CRM sync so every email sent is logged against the correct contact and deal"
    ],
    metrics: [
      { val: "70%", lbl: "Reduction in email preparation time" },
      { val: "75K+", lbl: "Global prospects reached via system" },
      { val: "32%", lbl: "Increase in qualified leads" },
      { val: "100%", lbl: "Follow-up consistency rate" }
    ],
    tools: ["Google Sheets","Apps Script","SendGrid API","HubSpot","Gmail","GPT-driven prompts"],
    principles: [
      { name: "Lean Startup", desc: "Built MVP first, then iterated to full system" },
      { name: "First-Principles", desc: "Minimum data needed for personalisation" },
      { name: "Automation Thinking", desc: "Reduced human dependency to near zero" },
      { name: "Life-Cycle Thinking", desc: "Follow-up logic mapped to lead stage" }
    ]
  },
  crm: {
    icon: "🔄", iconClass: "ci-sky",
    title: "HubSpot + Airtable CRM System",
    subtitle: "Lifecycle Workflows · Lead Scoring · Funnel Intelligence",
    overview: "Converted the CRM from a passive data storage tool into an active, intelligent execution engine. The system brought lifecycle-based automation, behavioural classification of leads, email prioritisation, and real-time funnel visibility — giving leadership a clear view of pipeline health at all times.",
    problem: "The existing CRM was used only as a contact database. Leads were not classified by behaviour, no workflows were running, sales reps had no visibility on what needed attention, and leadership had no idea where deals stood in the funnel.",
    built: [
      "Lifecycle stage architecture: all contacts and deals mapped through MQL → SQL → Opportunity → Negotiation → Won/Lost",
      "Responded vs Non-Responded classification: automated tagging based on email open, reply, and meeting status",
      "Email prioritisation system: high-value leads flagged automatically so sales reps focus on the right contacts first",
      "Lead relevance scoring: weighted scoring model based on company fit, engagement history, and product alignment",
      "Sales bandwidth visibility: dashboard showing each rep's active pipeline, overdue follow-ups, and capacity",
      "Funnel movement tracking: automated alerts when leads are stuck at a stage beyond threshold time",
      "Airtable integration for cross-team data sharing — market research, branding, and BD all synced"
    ],
    metrics: [
      { val: "300+", lbl: "Customers streamlined in the system" },
      { val: "100%", lbl: "Funnel movement visibility achieved" },
      { val: "0", lbl: "Missed leads post-implementation" },
      { val: "3×", lbl: "Faster lead prioritisation" }
    ],
    tools: ["HubSpot","Airtable","Google Sheets","Apps Script","Email Automation"],
    principles: [
      { name: "Systems Thinking", desc: "Behavioural logic, not just data fields" },
      { name: "Theory of Constraints", desc: "Identified: delayed replies, unclear priorities" },
      { name: "First-Principles", desc: "Redefined: what makes a lead important?" },
      { name: "Structured Thinking", desc: "Clear funnel stages with defined entry/exit logic" }
    ]
  },
  analytics: {
    icon: "📊", iconClass: "ci-amber",
    title: "Revenue Analytics & Dashboards",
    subtitle: "Power BI · ROI Models · Forecasting · Board-Level Reporting",
    overview: "Built a comprehensive analytics infrastructure giving UBL's leadership team real-time visibility into revenue performance, campaign ROI, and sales forecasting. The 35+ dashboards covered everything from individual expo ROI to 5-year revenue projections, all pulling live data from SAP and CRM systems.",
    problem: "Leadership was making decisions based on fragmented, manually compiled data. There were no real-time dashboards, no ROI calculations per expo, no forecasting models, and no way to compare projections against actuals. Planning cycles were slow and inaccurate.",
    built: [
      "35+ real-time Power BI dashboards covering: Sales pipeline, Expo performance, Campaign ROI, Regional breakdown, Customer segmentation",
      "ROI dashboard per expo: investment vs leads generated vs meetings vs conversions vs revenue attributed",
      "Revenue forecasting model: 3-year and 5-year projections based on lead velocity, conversion rates, and historical seasonality",
      "Projection vs actual comparison view: live tracking of how performance tracks against targets",
      "Drill-down dashboard for 40,000+ customer records with DAX-powered KPI logic",
      "SAP data integration pipeline: cleaned and mapped transactional data into BI-ready tables",
      "Executive summary slides auto-generated from dashboard data for board presentations"
    ],
    metrics: [
      { val: "35+", lbl: "Live Power BI dashboards built" },
      { val: "40K+", lbl: "Records in analytics pipeline" },
      { val: "25%", lbl: "Projected revenue growth supported" },
      { val: "5yr", lbl: "Forecasting horizon modelled" }
    ],
    tools: ["Power BI","SAP","Google Sheets","DAX","Tableau","Google Slides"],
    principles: [
      { name: "First-Principles", desc: "Built from base metrics: what defines ROI?" },
      { name: "Structured Thinking", desc: "Clear metrics: leads → meetings → conversions → revenue" },
      { name: "Socratic Questioning", desc: "Why do gaps exist? Where does performance drop?" },
      { name: "Systems Thinking", desc: "Connected data sources into a single truth layer" }
    ]
  },
  workflow: {
    icon: "⚙", iconClass: "ci-green",
    title: "Workflow Automation",
    subtitle: "Apps Script · Zapier · Make · 18+ hours saved monthly",
    overview: "Identified and eliminated manual bottlenecks across the organisation by building a suite of automated workflows using Google Apps Script, Zapier, and Make. Automation covered report generation, data syncing, email triggers, CRM updates, and inter-team data handoffs — saving 18+ hours per month.",
    problem: "Multiple teams were spending hours on repetitive tasks: copying data between sheets, sending manual update emails, generating weekly reports by hand, and re-entering the same information in different tools. This was a direct cost to speed and accuracy.",
    built: [
      "Google Apps Script: auto-populating reports from form responses, triggering emails on sheet changes, scheduled data pulls from APIs",
      "Zapier workflows: HubSpot ↔ Google Sheets sync, new lead → Slack alert → CRM task creation, form submission → email sequence trigger",
      "Make (Integromat) scenarios: multi-step data transformation pipelines, conditional routing, error-handling with fallback paths",
      "Weekly report automation: auto-generates and emails sales summaries every Monday at 9am with zero human input",
      "Lead import pipeline: bulk CSV uploads auto-cleaned, deduped, and synced into HubSpot",
      "Calendar automation: meeting slots linked to CRM, auto-sends calendar invites with custom agendas on booking"
    ],
    metrics: [
      { val: "18hrs", lbl: "Saved per month across the team" },
      { val: "0", lbl: "Manual reports generated post-build" },
      { val: "3", lbl: "Tools integrated in core workflows" },
      { val: "100%", lbl: "Consistency in automated outputs" }
    ],
    tools: ["Google Apps Script","Zapier","Make (Integromat)","HubSpot","Google Sheets","SendGrid","Slack"],
    principles: [
      { name: "Automation Thinking", desc: "Eliminate human dependency for repetitive work" },
      { name: "Lean Startup", desc: "Automate highest-pain tasks first, then expand" },
      { name: "Theory of Constraints", desc: "Find the manual bottleneck, then remove it" },
      { name: "Systems Thinking", desc: "End-to-end flow design, not isolated scripts" }
    ]
  },
  sales: {
    icon: "📈", iconClass: "ci-coral",
    title: "Sales Architecture & Data Bridge",
    subtitle: "Sales Planning · PMS · KPI Systems · Founder Dashboards",
    overview: "Designed and built UBL's core sales data infrastructure — connecting sales planning, CRM data, market intelligence, and leadership reporting into a unified system. Acted as the strategic bridge between Sales, Branding, Market Research, and the CXO team. Built the 2025–2027 sales planner, restructured the PMS, and created founder-level dashboards for strategic decision-making.",
    problem: "Sales targets were set without data backing. KPIs were misaligned across teams. Leadership had no single view of performance. Planning was done in silos with no connection to actual CRM data or market signals.",
    built: [
      "2025–2027 Sales Planner: target-setting model linked to historical data, market trends, and capacity planning",
      "PMS restructuring: redefined KPIs for each role (BD, research, branding) with measurable weekly and monthly targets",
      "Deals Master System: single source of truth for all active, won, and lost deals — updated automatically from HubSpot",
      "Companies Master System: unified database of all target, active, and churned companies with enrichment data",
      "Founder dashboard: weekly executive view covering pipeline health, revenue vs target, team performance, and strategic priorities",
      "Exclusivity evaluation logic: scoring model to identify which distributors or customers are worth exclusivity agreements",
      "Monthly reporting system: automated month-end report generation for board reviews"
    ],
    metrics: [
      { val: "25%", lbl: "Projected revenue growth over 5 years" },
      { val: "4", lbl: "Teams aligned through data bridge" },
      { val: "3×", lbl: "Efficiency gain in data handling" },
      { val: "100%", lbl: "Board-level reporting coverage" }
    ],
    tools: ["Google Sheets","SAP","Airtable","HubSpot","Power BI","Google Slides"],
    principles: [
      { name: "Wealth Creation Lens", desc: "Focus on high-value customers and long-term growth" },
      { name: "First-Principles", desc: "Rebuilt strategy from base fundamentals" },
      { name: "Systems Thinking", desc: "Connected Sales ↔ Data ↔ Strategy" },
      { name: "Structured Thinking", desc: "Defined KPIs, targets, and tracking logic clearly" }
    ]
  },
  research: {
    icon: "🔬", iconClass: "ci-pink",
    title: "Market Research & Team Leadership",
    subtitle: "Probiotics · Global Trends · Import/Export Tracking · SOPs",
    overview: "Built and led a 5-member research team that produced actionable market intelligence on global probiotics and nutraceuticals. The team uncovered 20% untapped market potential through an import/export tracking system, created SOPs for repeatable research workflows, and produced competitive intelligence used directly in UBL's BD strategy.",
    problem: "UBL had no structured market research capability. Business development was happening without data on where actual demand existed globally, who the real buyers were, and what competitive gaps could be exploited.",
    built: [
      "Assembled and managed a 5-member research team — assigned tasks, created tracking systems, and reviewed outputs weekly",
      "Import/export tracking system: mapped global trade flows of probiotics, prebiotics, and specialty strains by country, volume, and buyer",
      "Market sizing model: identified 20% untapped market potential in underpenetrated regions",
      "Competitive intelligence database: tracked 50+ competitor products, pricing, regulatory status, and distribution partners",
      "SOPs for market research: standardised the process of sourcing, verifying, and structuring market data",
      "Stakeholder dashboards for Branding and Leadership: visualised research findings in consumable formats",
      "Mentored interns: created onboarding guides, task trackers, and weekly review cadences"
    ],
    metrics: [
      { val: "5", lbl: "Team members led and mentored" },
      { val: "20%", lbl: "Untapped market potential uncovered" },
      { val: "50+", lbl: "Competitors tracked and mapped" },
      { val: "4", lbl: "Departments served with insights" }
    ],
    tools: ["Airtable","Google Sheets","SAP","Power BI","Import/Export Databases","Google Slides"],
    principles: [
      { name: "Structured Thinking", desc: "Systematic sourcing, verification, and reporting" },
      { name: "First-Principles", desc: "Started from: where does the actual demand exist?" },
      { name: "Systems Thinking", desc: "Research → Insights → Strategy feedback loop" },
      { name: "Lean Startup", desc: "MVP research sprints before deep-dive investments" }
    ]
  }
};
