import React, { useEffect, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import detailWebDevImg from '../assets/detail_web_dev.png';
import detailAppDevImg from '../assets/detail_app_dev.png';
import detailSoftwareDevImg from '../assets/detail_software_dev.png';
import detailAwsDevopsImg from '../assets/detail_aws_devops.png';
import detailHostingServersImg from '../assets/detail_hosting_servers.png';
import detailDigitalMarketingImg from '../assets/detail_digital_marketing.png';
import detailAiRagImg from '../assets/detail_ai_rag.png';
import detailIvrSolutionsImg from '../assets/detail_ivr_solutions.png';
import detailApiIntegrationsImg from '../assets/detail_api_integrations.png';
import detailEcommerceImg from '../assets/detail_ecommerce.png';
import detailAiAutomationImg from '../assets/detail_ai_automation.png';
import detailSecurityImg from '../assets/detail_security.png';
import './ServiceDetailPage.css';

// Complete dataset for 12 Services with bespoke sub-services and high-speed 3D technology loop videos
const serviceDetailsDataset = [
  {
    themeId: "web-dev",
    title: "Custom Web Development Services & Responsive Digital Flagships",
    category: "Web Development",
    tagline: "Empower your business with high-fidelity, lightning-fast web architectures.",
    description: "We design and engineer bespoke web platforms using cutting-edge frameworks. From corporate portals to custom SaaS interfaces, we build responsive, secure, and visually stunning digital assets that convert visitors.",
    btnText: "Launch Your Web Project",
    image: detailWebDevImg,
    color: "#D946EF",
    features: [
      { name: "Responsive Fluid Design", desc: "Optimized across all devices with premium breakpoint management and dynamic resizing layouts." },
      { name: "Sub-Second Page Loads", desc: "High performance score optimization through static generation and advanced asset caching mechanisms." },
      { name: "SEO & SEM Telemetry", desc: "Structured metadata schema and analytical tracking integrated natively to boost organic rankings." },
      { name: "Zero-Trust Web Security", desc: "Clean, audited codebases with custom secure token headers, CSRF defense, and HTTPS encryption." }
    ],
    techStack: ["React", "Next.js", "TypeScript", "Node.js", "TailwindCSS", "Vercel"],
    videoUrl: "/videos/web-dev.mp4",
    capabilities: {
      eyebrow: "OUR CAPABILITIES",
      heading: "Solutions We Build",
      description: "We bridge the gap between complex business logic and seamless user interaction. From high-growth startups to established enterprises, we build frontend solutions that perform across every digital touchpoint.",
      tiles: [
        { label: "Enterprise Platform", bg: "#ede9fe", icon: "enterprise" },
        { label: "PWA",                bg: "#ffffff", icon: "pwa" },
        { label: "MVP Development",    bg: "#fef9c3", icon: "mvp" },
        { label: "SaaS Platform",      bg: "#ffffff", icon: "saas" },
        { label: "Cloud App",          bg: "#d1fae5", icon: "cloud" },
        { label: "SPA",               bg: "#ffffff", icon: "spa" }
      ]
    },
    process: [
      { step: "Discovery & Requirement Analysis", desc: "We deeply research your business goals, target audience, competitor benchmarks, and technical stack requirements before writing a single line of code.", activities: ["Stakeholder interviews", "Competitor analysis", "Tech stack evaluation", "Project scoping"] },
      { step: "Planning & Strategy", desc: "Our architects create a detailed sitemap, user flow diagrams, and a modular feature roadmap prioritised for maximum business impact.", activities: ["Sitemap creation", "User flow diagrams", "Sprint planning", "Resource allocation"] },
      { step: "UI/UX Design", desc: "Pixel-perfect wireframes and interactive prototypes are produced in Figma and reviewed with your team before development begins.", activities: ["Wireframe creation", "Interactive prototyping", "Design system setup", "Accessibility review"] },
      { step: "Development & Integration", desc: "Engineers build the platform using modern frameworks with clean, audited code, integrating third-party APIs and databases as required.", activities: ["Frontend engineering", "Backend API development", "Database integration", "Third-party API setup"] },
      { step: "Testing & Deployment", desc: "We rigorously test the website to ensure performance, security, and reliability before deploying smoothly, followed by continuous support and improvements.", activities: ["Functional testing execution", "Performance optimization", "Security validation checks", "Bug fixing process", "Deployment planning", "Post-launch support"] }
    ],
    subServices: [
      { name: "Business Websites", desc: "High-performance corporate hubs with custom headless CMS integration, optimized CDNs, and seamless brand storytelling.", videoUrl: "/videos/subservices/web-dev-0.mp4" },
      { name: "Company Websites", desc: "Scalable multi-department portals featuring advanced interactive organizational structures, custom employee directories, and unified messaging grids.", videoUrl: "/videos/subservices/web-dev-1.mp4" },
      { name: "Portfolio Websites", desc: "Visually stunning, creative digital showcases with fluid transitions, dynamic project filtering, and premium asset rendering engines.", videoUrl: "/videos/subservices/web-dev-2.mp4" },
      { name: "Landing Pages", desc: "Conversion-optimized micro-funnels utilizing aggressive load-speed optimization, clean A/B test setups, and interactive CTA anchors.", videoUrl: "/videos/subservices/web-dev-3.mp4" },
      { name: "E-Commerce Websites", desc: "Robust online retail platforms boasting modular checkouts, unified payment gateway handshakes, and smart catalog databases.", videoUrl: "/videos/subservices/web-dev-4.mp4" },
      { name: "Custom Web Applications", desc: "Next-gen web tools built with complex state machines, real-time client-server sockets, and bulletproof user privilege systems.", videoUrl: "/videos/subservices/web-dev-5.mp4" },
      { name: "Admin Dashboards", desc: "Highly performant corporate control panels containing real-time telemetry charts, detailed user action logs, and modular CRUD tables.", videoUrl: "/videos/subservices/web-dev-6.mp4" },
      { name: "SaaS Platforms", desc: "Cloud-native multi-tenant web applications structured with robust subscription gateways, granular tenant isolation, and metered API usage trackers.", videoUrl: "/videos/subservices/web-dev-7.mp4" },
      { name: "Responsive Website Design", desc: "Fluid-grid layouts utilizing modular container queries, flexible vector rendering, and modern viewport adaptations for flawless mobile fidelity.", videoUrl: "/videos/subservices/web-dev-8.mp4" },
      { name: "Website Redesign", desc: "Comprehensive performance and UX overhauls migrating legacy platforms to ultra-fast modern frameworks with zero SEO equity loss.", videoUrl: "/videos/subservices/web-dev-9.mp4" }
    ]
  },
  {
    themeId: "app-dev",
    title: "Bespoke Mobile App Development: iOS & Android Native Applications",
    category: "App Development",
    tagline: "Connect with your users anywhere with premium iOS and Android applications.",
    description: "Leverage native performance and custom gestures to create mobile products that stand out. We engineer cross-platform apps with near-zero latency, robust offline sync, and beautiful micro-animations.",
    btnText: "Schedule App Consultation",
    image: detailAppDevImg,
    color: "#F59E0B",
    features: [
      { name: "Cross-Platform Sync", desc: "Single-codebase efficiency with fully native compilation for iOS and Android environments." },
      { name: "Offline-First Storage", desc: "Local database caching and synchronizing algorithms that retain inputs when internet drops." },
      { name: "Biometric Identification", desc: "Secure FaceID, TouchID, and local credential storage integrations." },
      { name: "Push Telemetry Grids", desc: "Highly targeted, personalized push notification schedules to drive customer retention." }
    ],
    techStack: ["Flutter", "React Native", "Swift", "Kotlin", "Firebase", "SQLite"],
    videoUrl: "/videos/app-dev.mp4",
    capabilities: {
      eyebrow: "OUR CAPABILITIES",
      heading: "Apps We Deliver",
      description: "From consumer apps to enterprise mobility platforms, we design and ship beautiful apps that users love. Our cross-platform expertise means a single investment reaches iOS and Android simultaneously.",
      tiles: [
        { label: "Native iOS App",     bg: "#ede9fe", icon: "ios" },
        { label: "Android App",        bg: "#ffffff", icon: "android" },
        { label: "Flutter App",        bg: "#dbeafe", icon: "flutter" },
        { label: "React Native",       bg: "#ffffff", icon: "reactnative" },
        { label: "Offline-First App",  bg: "#d1fae5", icon: "offline" },
        { label: "PWA",               bg: "#ffffff", icon: "pwa" }
      ]
    },
    process: [
      { step: "Concept & Market Research", desc: "We audit the App Store and Play Store landscape, identify gaps, define personas, and map out a unique value proposition for your app.", activities: ["Market landscape audit", "Competitor app review", "User persona definition", "Feature prioritisation"] },
      { step: "UX Prototyping", desc: "High-fidelity clickable mobile prototypes are crafted and user-tested before any code is written, ensuring optimal navigation flows.", activities: ["Clickable prototypes", "User journey mapping", "Usability testing", "Animation planning"] },
      { step: "Cross-Platform Development", desc: "Our engineers build the app with Flutter or React Native for unified iOS and Android delivery, with native modules for hardware features.", activities: ["Flutter/React Native coding", "Native module integration", "State management setup", "API connectivity"] },
      { step: "QA & Device Testing", desc: "Every build is tested across a broad matrix of real devices and OS versions to guarantee flawless behaviour at 60 FPS on all screens.", activities: ["Multi-device testing", "OS compatibility checks", "Performance profiling", "Crash log analysis"] },
      { step: "Store Submission & Launch", desc: "We handle the complete App Store and Play Store submission process, metadata optimisation, and post-launch iteration cycles.", activities: ["App Store optimisation", "Play Store submission", "Review response handling", "Post-launch monitoring"] }
    ],
    subServices: [
      { name: "Android App Development", desc: "Native Kotlin applications engineered for top-tier execution speeds, deep OS integration, and compliance with the latest Play Store policies.", videoUrl: "/videos/subservices/app-dev-0.mp4" },
      { name: "Cross Platform Apps", desc: "Single-codebase Flutter or React Native systems that compile to native modules, maximizing development efficiency while maintaining 60FPS fluid physics.", videoUrl: "/videos/subservices/app-dev-1.mp4" },
      { name: "Business Applications", desc: "Highly structured enterprise utility apps combining local database syncing, robust authentication loops, and offline-first workflows.", videoUrl: "/videos/subservices/app-dev-2.mp4" },
      { name: "E-Commerce Apps", desc: "Mobile storefronts optimized for instant checkouts, secure biometric card payments, and personalized mobile push alerts.", videoUrl: "/videos/subservices/app-dev-3.mp4" },
      { name: "Custom Mobile Apps", desc: "Bespoke mobile solutions crafted around advanced camera API integrations, hardware accelerometers, and tailored Bluetooth mesh networks.", videoUrl: "/videos/subservices/app-dev-4.mp4" },
      { name: "API-Based Mobile Apps", desc: "Dynamic cloud-connected client applications utilizing intelligent caching layers and optimistic UI state updates for immediate responses.", videoUrl: "/videos/subservices/app-dev-5.mp4" }
    ]
  },
  {
    themeId: "software-dev",
    title: "Scalable Custom Software Development & Enterprise Backend Systems",
    category: "Software Development",
    tagline: "Bespoke backend architectures built for massive parallel computations.",
    description: "Power your enterprise with robust custom software. We construct secure database systems, perform complex API mappings, and build desktop engines designed to scale infinitely under heavy traffic loads.",
    btnText: "Start Software Planning",
    image: detailSoftwareDevImg,
    color: "#06B6D4",
    features: [
      { name: "High-Throughput APIs", desc: "Low-latency REST and gRPC endpoints that handle thousands of concurrent queries with ease." },
      { name: "Multi-Tenant Architecture", desc: "Safely segregate customer database spaces with perfect access isolation and encryption." },
      { name: "Legacy Code Modernization", desc: "Safely wrap or migrate outdated backends into clean microservice grids with zero data loss." },
      { name: "Persistent Uptime Loops", desc: "Continuous health check monitoring, automatic fault recovery, and persistent logger scripts." }
    ],
    techStack: ["Node.js", "Python", "PostgreSQL", "Docker", "Java Spring", "GraphQL"],
    videoUrl: "/videos/software-dev.mp4",
    capabilities: {
      eyebrow: "OUR CAPABILITIES",
      heading: "Software We Engineer",
      description: "We build robust, scalable software systems that power businesses. From billing engines to enterprise ERPs, our solutions handle high-load, complex workflows with precision and reliability.",
      tiles: [
        { label: "ERP System",         bg: "#ede9fe", icon: "erp" },
        { label: "Billing Engine",     bg: "#ffffff", icon: "billing" },
        { label: "CRM Software",       bg: "#fef9c3", icon: "crm" },
        { label: "Desktop App",        bg: "#ffffff", icon: "desktop" },
        { label: "Inventory System",   bg: "#d1fae5", icon: "inventory" },
        { label: "REST API Engine",    bg: "#ffffff", icon: "api" }
      ]
    },
    process: [
      { step: "Requirements Gathering", desc: "We conduct deep technical workshops to document functional specs, data flows, integration points, and non-functional requirements.", activities: ["Technical workshops", "Data flow mapping", "Integration point listing", "Spec documentation"] },
      { step: "Architecture Design", desc: "System architects design the database schema, microservice topology, API contracts, and security boundary models before coding begins.", activities: ["Database schema design", "Microservice topology", "API contract definition", "Security boundary modelling"] },
      { step: "Agile Development", desc: "Engineers build in two-week sprints with daily standups, continuous integration, and iterative code reviews to maintain velocity.", activities: ["Sprint-based delivery", "Daily standups", "CI/CD integration", "Peer code reviews"] },
      { step: "Testing & Quality Assurance", desc: "Unit, integration, and load tests are executed automatically on every pull request to ensure zero regression and high performance.", activities: ["Unit test coverage", "Integration testing", "Load & stress testing", "Automated regression suites"] },
      { step: "Deployment & Maintenance", desc: "Software is deployed to production via zero-downtime pipelines and maintained with proactive monitoring, patching, and version upgrades.", activities: ["Zero-downtime deployment", "Environment configuration", "Health monitoring setup", "Long-term maintenance SLA"] }
    ],
    subServices: [
      { name: "Custom Software Development", desc: "Custom-built software architectures engineered to automate complex data workloads and orchestrate internal office tools.", videoUrl: "/videos/subservices/software-dev-0.mp4" },
      { name: "Billing Software", desc: "High-precision transaction ledgers utilizing transaction logs, automated invoicing webhooks, and secure tax compliance processors.", videoUrl: "/videos/subservices/software-dev-1.mp4" },
      { name: "Inventory Management Systems", desc: "Multi-warehouse tracking grids offering live barcode scanner interfaces, predictive restocking alerts, and batch tracing.", videoUrl: "/videos/subservices/software-dev-2.mp4" },
      { name: "Management Systems", desc: "Centralized enterprise management software built with modular workspaces, smart resource schedulers, and rich analytics cards.", videoUrl: "/videos/subservices/software-dev-3.mp4" },
      { name: "Automation Software", desc: "Background processing engines that handle high-frequency data pipelines, automated file transforms, and email queues.", videoUrl: "/videos/subservices/software-dev-4.mp4" },
      { name: "Desktop Applications", desc: "Native, highly performant Windows/macOS applications using Electron or Rust Tauri, bringing desktop control and hardware acceleration.", videoUrl: "/videos/subservices/software-dev-5.mp4" }
    ]
  },
  {
    themeId: "aws-devops",
    title: "Cloud-Native AWS Architecture & Automated DevOps Solutions",
    category: "AWS & DevOps",
    tagline: "Accelerate release velocity with robust cloud automation pipelines.",
    description: "Automate your infrastructure deployment, monitoring, and scaling. We configure secure elastic load balancers, secure cloud parameters, and optimize resource cost distributions to minimize cloud waste.",
    btnText: "Request DevOps Audit",
    image: detailAwsDevopsImg,
    color: "#F97316",
    features: [
      { name: "CI/CD Deployment Pipelines", desc: "Standardize linting, testing, and continuous deployment into staging and production with GitHub Actions." },
      { name: "Infrastructure as Code", desc: "Provision your servers, databases, and networks via fully versioned Terraform script definitions." },
      { name: "Self-Healing Auto Scaling", desc: "Automatically spin up or shut down compute instances matching real-time web traffic spikes." },
      { name: "Zero-Downtime Releases", desc: "Deploy updates using blue-green or canary release models with instant rollback safety measures." }
    ],
    techStack: ["AWS", "Terraform", "Docker", "Kubernetes", "GitHub Actions", "Prometheus"],
    videoUrl: "/videos/hosting.mp4",
    capabilities: {
      eyebrow: "OUR CAPABILITIES",
      heading: "Infrastructure We Deploy",
      description: "We architect, automate, and manage cloud infrastructure that scales effortlessly. From CI/CD pipelines to container orchestration, every layer is engineered for reliability, speed, and zero downtime.",
      tiles: [
        { label: "CI/CD Pipeline",    bg: "#ede9fe", icon: "cicd" },
        { label: "Kubernetes Cluster",bg: "#ffffff", icon: "kubernetes" },
        { label: "Docker Setup",      bg: "#dbeafe", icon: "docker" },
        { label: "Terraform IaC",     bg: "#ffffff", icon: "terraform" },
        { label: "AWS Architecture",  bg: "#fef9c3", icon: "aws" },
        { label: "Monitoring Stack",  bg: "#ffffff", icon: "monitoring" }
      ]
    },
    process: [
      { step: "Infrastructure Audit", desc: "We assess your current cloud spend, identify over-provisioned resources, and map the optimal AWS architecture for your workloads.", activities: ["Cloud cost analysis", "Resource utilisation audit", "Architecture gap review", "Security posture check"] },
      { step: "IaC Blueprint", desc: "All cloud resources are codified in Terraform, enabling reproducible, version-controlled infrastructure deployments across environments.", activities: ["Terraform script writing", "Module organisation", "State backend setup", "Environment variable management"] },
      { step: "CI/CD Pipeline Setup", desc: "Automated GitHub Actions workflows are configured to test, build, and deploy code changes to staging and production with zero manual steps.", activities: ["Pipeline scripting", "Automated test gates", "Staging environment setup", "Rollback mechanisms"] },
      { step: "Container Orchestration", desc: "Docker images are built, pushed to ECR, and orchestrated via Kubernetes or ECS with auto-scaling policies and ingress controllers.", activities: ["Dockerfile optimisation", "Kubernetes manifests", "HPA & VPA configuration", "Ingress & cert management"] },
      { step: "Monitoring & Alerting", desc: "Prometheus, Grafana dashboards, and CloudWatch alarms are configured to give full observability and instant alert routing for every incident.", activities: ["Prometheus scraping setup", "Grafana dashboard creation", "Alert rule configuration", "On-call escalation routing"] }
    ],
    subServices: [
      { name: "AWS Cloud Setup", desc: "Elastic compute environments (EC2, ECS, Lambda) organized with custom VPC routing tables, security group parameters, and cost controls.", videoUrl: "/videos/subservices/aws-devops-0.mp4" },
      { name: "DevOps Solutions", desc: "Comprehensive engineering workflow automations linking development terminals directly to stable production systems.", videoUrl: "/videos/subservices/aws-devops-1.mp4" },
      { name: "CI/CD Pipeline Setup", desc: "Continuous testing, security scanning, and deployment pipelines using GitHub Actions, ensuring zero-risk deployments.", videoUrl: "/videos/subservices/aws-devops-2.mp4" },
      { name: "Docker Configuration", desc: "Multi-stage containerization files that guarantee consistent software runtimes across developer machines and cloud environments.", videoUrl: "/videos/subservices/aws-devops-3.mp4" },
      { name: "Kubernetes Setup", desc: "Resilient, auto-scaling cluster orchestration grids configured with robust ingress routing, secrets vaults, and service meshes.", videoUrl: "/videos/subservices/aws-devops-4.mp4" },
      { name: "Server Deployment", desc: "High-performance VPS or metal server installations hardened with modern SSH key gates and optimized reverse proxies.", videoUrl: "/videos/subservices/aws-devops-5.mp4" },
      { name: "Infrastructure Automation", desc: "Automated configuration files using Terraform or Ansible to deploy servers and databases instantly.", videoUrl: "/videos/subservices/aws-devops-6.mp4" },
      { name: "Monitoring & Logging", desc: "Centralized observability panels using Prometheus, Grafana, and ELK stack to alert engineers before downtime events occur.", videoUrl: "/videos/subservices/aws-devops-7.mp4" },
      { name: "Cloud Architecture Setup", desc: "High-availability corporate networks designed with multi-region database replications and elastic load balancer nodes.", videoUrl: "/videos/subservices/aws-devops-8.mp4" }
    ]
  },
  {
    themeId: "hosting",
    title: "Premium Managed Cloud Hosting & High-Performance Linux Servers",
    category: "Hosting & Server Management",
    tagline: "Keep your critical websites online with bulletproof server administration.",
    description: "We deploy and maintain high-performance hosting environments. With proactive server hardening, continuous security patching, and redundant backup grids, your uptime is fully guaranteed.",
    btnText: "Explore Hosting Services",
    image: detailHostingServersImg,
    color: "#3B82F6",
    features: [
      { name: "99.99% Uptime Guarantee", desc: "High redundancy cloud cluster architecture designed to prevent single points of failure." },
      { name: "Distributed Edge Content", desc: "Global CDN mapping to cache static files close to your target visitors, reducing latency." },
      { name: "Proactive Node Hardening", desc: "Robust intrusion detection, custom firewall rules, and automated IP ban triggers to stop brute-forcing." },
      { name: "Encrypted Daily Backups", desc: "Multi-region offsite server dumps with secure snapshot points for quick restoration." }
    ],
    techStack: ["Nginx", "Apache", "AWS Lightsail", "Cloudflare WAF", "Linux Ubuntu", "Grafana"],
    videoUrl: "/videos/aws-devops.mp4",
    capabilities: {
      eyebrow: "OUR CAPABILITIES",
      heading: "Hosting Solutions We Manage",
      description: "We set up and manage rock-solid hosting environments so your websites are always fast, secure, and online. From VPS to dedicated servers and cloud clusters, we handle every layer of your infrastructure.",
      tiles: [
        { label: "VPS Hosting",       bg: "#ede9fe", icon: "vps" },
        { label: "Cloud Hosting",     bg: "#ffffff", icon: "cloud" },
        { label: "Dedicated Server",  bg: "#dbeafe", icon: "server" },
        { label: "CDN Setup",         bg: "#ffffff", icon: "cdn" },
        { label: "SSL & Security",    bg: "#d1fae5", icon: "ssl" },
        { label: "Email Hosting",     bg: "#ffffff", icon: "email" }
      ]
    },
    process: [
      { step: "Server Provisioning", desc: "We spin up optimally sized VPS, cloud, or dedicated servers, configure OS hardening, and set up secure SSH key-only access policies.", activities: ["VPS provisioning", "OS hardening", "SSH key-only access", "Firewall rule setup"] },
      { step: "Domain & DNS Configuration", desc: "DNS records, subdomain routing, custom nameserver configurations, and Cloudflare proxy setups are completed for instant propagation.", activities: ["DNS record setup", "Subdomain routing", "Cloudflare proxy config", "TTL optimisation"] },
      { step: "SSL & Security Hardening", desc: "TLS 1.3 certificates are installed with HSTS headers, ModSecurity WAF rules, and fail2ban triggers to eliminate attack surface.", activities: ["SSL certificate installation", "HSTS header setup", "WAF rule deployment", "fail2ban configuration"] },
      { step: "Performance Tuning", desc: "Nginx/Apache configuration is optimised with gzip compression, HTTP/2 push, Redis object caching, and database connection pooling.", activities: ["Nginx/Apache tuning", "Redis caching layer", "Database query optimisation", "CDN integration"] },
      { step: "Backup & Monitoring", desc: "Automated daily encrypted backups are scheduled off-site, and Grafana dashboards monitor CPU, RAM, and disk in real time.", activities: ["Daily backup scheduling", "Off-site backup storage", "Grafana monitoring setup", "Uptime alert configuration"] }
    ],
    subServices: [
      { name: "Web Hosting", desc: "Optimized high-frequency web servers equipped with solid-state drives, HTTP/3, and modern caching layers for ultra-fast response times.", videoUrl: "/videos/subservices/hosting-0.mp4" },
      { name: "Cloud Hosting", desc: "Scalable cloud server instances offering flexible resource allocations, virtual networking, and instant storage expansion.", videoUrl: "/videos/subservices/hosting-1.mp4" },
      { name: "VPS Server Setup", desc: "Hardened virtual private server nodes configured with custom firewall policies, isolated user spaces, and optimized RAM budgets.", videoUrl: "/videos/subservices/hosting-2.mp4" },
      { name: "Dedicated Server Management", desc: "Complete server administration including hardware health monitors, kernel security patches, and bandwidth balancing.", videoUrl: "/videos/subservices/hosting-3.mp4" },
      { name: "Domain Setup", desc: "High-speed DNS routing configurations, custom subdomain networks, and secure registrar locks to prevent hijacking.", videoUrl: "/videos/subservices/hosting-4.mp4" },
      { name: "SSL Installation", desc: "Bulletproof Let's Encrypt or custom SSL certificates set up with secure TLS 1.3 encryption and HSTS headers.", videoUrl: "/videos/subservices/hosting-5.mp4" },
      { name: "Server Optimization", desc: "Comprehensive web server tuning including database query optimization, gzip/brotli compression, and connection pool configurations.", videoUrl: "/videos/subservices/hosting-6.mp4" },
      { name: "Website Migration", desc: "Zero-downtime, fully audited migrations of complex files, database records, and mailboxes to faster server hardware.", videoUrl: "/videos/subservices/hosting-7.mp4" },
      { name: "Email Hosting", desc: "Custom domain corporate email infrastructure featuring advanced spam filtering, secure IMAP/SMTP, and DKIM/SPF/DMARC alignments.", videoUrl: "/videos/subservices/hosting-8.mp4" },
      { name: "Backup & Recovery Solutions", desc: "Automated off-site snapshot protocols with encrypted storage files to guarantee rapid system restoration in disasters.", videoUrl: "/videos/subservices/hosting-9.mp4" }
    ]
  },
  {
    themeId: "marketing",
    title: "Results-Driven Digital Marketing & SEO Acquisition Funnels",
    category: "Digital Marketing",
    tagline: "Drive high-conversion organic traffic with search engine dominance.",
    description: "Reach your ideal demographic through analytics-led marketing channels. We optimize technical search elements, direct hyper-targeted campaigns, and design clean landing pages that yield measurable ROI.",
    btnText: "Optimize Marketing Strategy",
    image: detailDigitalMarketingImg,
    color: "#22C55E",
    features: [
      { name: "Technical SEO Dominance", desc: "Deep audits, site architecture corrections, and keyword maps that drive search ranks and indexability." },
      { name: "Paid Campaign Optimization", desc: "Smart bidding strategies on search and social channels that minimize CPA while boosting lead quality." },
      { name: "Conversion Funnel Audits", desc: "Multi-step landing page testing and session analysis to resolve cart dropouts and bounce rates." },
      { name: "Analytics Reporting Dashboards", desc: "Automated visual reports capturing organic growth, traffic sources, and conversion velocities." }
    ],
    techStack: ["Google Analytics", "Search Console", "SEMRush", "Ahrefs", "HubSpot", "Meta Ads"],
    videoUrl: "/videos/marketing.mp4",
    capabilities: {
      eyebrow: "OUR CAPABILITIES",
      heading: "Campaigns We Run",
      description: "We build data-driven marketing engines that attract, convert, and retain customers. From organic search dominance to precision paid campaigns, every strategy is tied directly to measurable revenue growth.",
      tiles: [
        { label: "SEO Optimisation",  bg: "#ede9fe", icon: "seo" },
        { label: "Google Ads",        bg: "#ffffff", icon: "googleads" },
        { label: "Meta Ads",          bg: "#fef9c3", icon: "metaads" },
        { label: "Email Marketing",   bg: "#ffffff", icon: "emailmkt" },
        { label: "Content Strategy",  bg: "#d1fae5", icon: "content" },
        { label: "Analytics Dashboard",bg:"#ffffff", icon: "analytics" }
      ]
    },
    process: [
      { step: "Audit & Research", desc: "We conduct a full technical SEO audit, competitor keyword gap analysis, and audience persona research to build a data-driven strategy.", activities: ["Technical SEO audit", "Keyword gap analysis", "Competitor backlink review", "Audience persona mapping"] },
      { step: "Strategy & Planning", desc: "A tailored multi-channel marketing roadmap is created, covering organic SEO, paid ads, content, and email with measurable KPIs.", activities: ["Channel mix planning", "KPI definition", "Budget allocation", "Content calendar creation"] },
      { step: "Content & Creative Production", desc: "Our team produces SEO articles, ad creatives, landing pages, and social media visuals aligned with your brand guidelines.", activities: ["Blog article writing", "Ad creative design", "Landing page builds", "Social media visuals"] },
      { step: "Campaign Launch & Optimisation", desc: "Campaigns go live across Google, Meta, and email platforms with continuous A/B testing and bid adjustments to maximise ROI.", activities: ["Campaign launch", "A/B split testing", "Bid strategy optimisation", "Audience segmentation"] },
      { step: "Reporting & Growth", desc: "Monthly performance dashboards detail traffic growth, lead volume, CPA, and ROAS with actionable insights for the next growth cycle.", activities: ["Monthly reporting", "Conversion rate analysis", "ROAS tracking", "Strategy iteration"] }
    ],
    subServices: [
      { name: "SEO Optimization", desc: "Extensive technical search audits, core web vitals optimization, semantic schema markups, and target keyword maps.", videoUrl: "/videos/subservices/marketing-0.mp4" },
      { name: "Social Media Marketing", desc: "Highly engaging organic brand campaigns and smart content schedules designed to drive audience engagement and web traffic.", videoUrl: "/videos/subservices/marketing-1.mp4" },
      { name: "Google Ads", desc: "High-ROI search, display, and shopping campaign configurations utilizing smart bidding algorithms and long-tail keyword optimization.", videoUrl: "/videos/subservices/marketing-2.mp4" },
      { name: "Meta Ads", desc: "Deep demographic target marketing across Facebook and Instagram using high-fidelity visual banners, custom pixels, and lookalike modeling.", videoUrl: "/videos/subservices/marketing-3.mp4" },
      { name: "Lead Generation", desc: "Highly optimized landing pages, strategic lead magnets, and automated email follow-up funnels to capture prospects.", videoUrl: "/videos/subservices/marketing-4.mp4" },
      { name: "Performance Marketing", desc: "Data-backed marketing strategies focusing on conversion metrics, cost-per-acquisition (CPA) tuning, and strict ROI checks.", videoUrl: "/videos/subservices/marketing-5.mp4" },
      { name: "Email Marketing", desc: "Segmented newsletters, automated onboarding sequences, and cart abandonment triggers utilizing dynamic tags and high-deliverability tools.", videoUrl: "/videos/subservices/marketing-6.mp4" },
      { name: "Content Marketing", desc: "Technical, domain-authoritative blog articles, white papers, and custom infographics to establish search authority and brand trust.", videoUrl: "/videos/subservices/marketing-7.mp4" }
    ]
  },
  {
    themeId: "ai-rag",
    title: "Generative AI & Intelligent RAG Chatbot Architectures",
    category: "AI & RAG Chatbots",
    tagline: "Empower your enterprise with custom cognitive search and conversational intelligence.",
    description: "Deploy bespoke enterprise-grade Large Language Model architectures integrated with proprietary knowledge systems. We design RAG (Retrieval-Augmented Generation) pipelines that allow cognitive agents to query your internal wikis, spreadsheets, and databases securely and with zero hallucinations.",
    btnText: "Schedule an AI Consultation",
    image: detailAiRagImg,
    color: "#8B5CF6",
    features: [
      { name: "Retrieval-Augmented Generation", desc: "Dynamically reference internal documents to generate factually accurate answers without LLM hallucination." },
      { name: "Zero-Leakage Security Isolation", desc: "Ensure sensitive business data never trains public models or leaks across user sessions." },
      { name: "Multi-Format Document Parsing", desc: "Instantly ingest PDFs, spreadsheets, database tables, and corporate wikis into vector databases." },
      { name: "Omnichannel Chatbot Integration", desc: "Deploy your intelligent agents across Slack, Teams, websites, and custom web dashboards." }
    ],
    techStack: ["LangChain", "OpenAI API", "LlamaIndex", "Pinecone", "Python", "Hugging Face"],
    videoUrl: "/videos/ai-rag.mp4",
    capabilities: {
      eyebrow: "OUR CAPABILITIES",
      heading: "AI Systems We Build",
      description: "We design intelligent AI systems that go beyond simple chatbots. From RAG pipelines that retrieve real knowledge to LLM-powered agents that automate workflows, we deploy AI that drives genuine business value.",
      tiles: [
        { label: "RAG Pipeline",      bg: "#ede9fe", icon: "rag" },
        { label: "LLM Chatbot",       bg: "#ffffff", icon: "llm" },
        { label: "Vector Database",   bg: "#fef9c3", icon: "vectordb" },
        { label: "WhatsApp Bot",      bg: "#ffffff", icon: "whatsapp" },
        { label: "AI Support Agent",  bg: "#d1fae5", icon: "aiagent" },
        { label: "NLP Classifier",    bg: "#ffffff", icon: "nlp" }
      ]
    },
    process: [
      { step: "Data & Knowledge Audit", desc: "We inventory all internal documents, databases, and wikis to identify the knowledge sources that will power your RAG pipeline.", activities: ["Document inventory", "Data quality assessment", "Source prioritisation", "Privacy compliance check"] },
      { step: "Embedding & Vector DB Setup", desc: "Documents are chunked, embedded using state-of-the-art models, and indexed in a vector database for ultra-fast semantic retrieval.", activities: ["Document chunking strategy", "Embedding model selection", "Pinecone/Weaviate indexing", "Retrieval accuracy testing"] },
      { step: "LLM Orchestration", desc: "We configure the LangChain orchestration layer, prompt templates, and memory modules to ensure coherent, context-aware responses.", activities: ["Prompt engineering", "Chain-of-thought design", "Memory module configuration", "Fallback handling"] },
      { step: "Interface Integration", desc: "The AI agent is embedded into your website, Slack workspace, WhatsApp, or internal tools through secure API endpoints.", activities: ["Chat widget integration", "Slack/Teams deployment", "WhatsApp API connection", "Authentication & access control"] },
      { step: "Monitoring & Fine-Tuning", desc: "Conversation logs are analysed to detect hallucinations, retrieval failures, and user drop-offs, with iterative model and prompt improvements.", activities: ["Conversation log review", "Hallucination detection", "Retrieval quality scoring", "Continuous prompt refinement"] }
    ],
    subServices: [
      { name: "AI Chatbot Development", desc: "Conversational interfaces powered by custom-tuned LLMs, capable of human-like natural language understanding and fluid dialogue flows.", videoUrl: "/videos/subservices/ai-rag-0.mp4" },
      { name: "RAG-Based Chatbots", desc: "Retrieval-augmented search networks that query internal documents, wikis, and database tables to deliver factual customer answers.", videoUrl: "/videos/subservices/ai-rag-1.mp4" },
      { name: "Website Chatbots", desc: "Sleek, floating chat interfaces integrated directly into websites to qualify leads, answer FAQs, and direct users 24/7.", videoUrl: "/videos/subservices/ai-rag-2.mp4" },
      { name: "WhatsApp Chatbots", desc: "Smart conversational bots deployed via official WhatsApp API keys to handle global customer inquiries, booking schedules, and order tracing.", videoUrl: "/videos/subservices/ai-rag-3.mp4" },
      { name: "Customer Support Bots", desc: "High-availability support interfaces containing automated ticketing handoffs, client verification cards, and dynamic FAQs.", videoUrl: "/videos/subservices/ai-rag-4.mp4" },
      { name: "Automation Bots", desc: "Background AI bots that trigger immediate corporate database updates, client follow-up sequences, and task creation based on voice or text prompts.", videoUrl: "/videos/subservices/ai-rag-5.mp4" },
      { name: "AI-Based Response Systems", desc: "Intelligent classification models that sort and auto-reply to corporate support tickets and customer emails with high-accuracy drafts.", videoUrl: "/videos/subservices/ai-rag-6.mp4" }
    ]
  },
  {
    themeId: "ivr",
    title: "Interactive Voice Response (IVR) Telephony & Smart Call Routing",
    category: "IVR Solutions",
    tagline: "Automate call routing and elevate customer support telephony flows.",
    description: "Design clean, user-friendly interactive voice response grids. We structure smart auto-attendant menus, secure payment over phone channels, and connect telephony lines directly to customer CRM portals.",
    btnText: "Configure Telephony Grids",
    image: detailIvrSolutionsImg,
    color: "#DB2777",
    features: [
      { name: "Intelligent ACD Routing", desc: "Automatically forward inbound calls matching caller responses and agent skills dynamically." },
      { name: "Natural Text-to-Speech", desc: "Dynamic greeting generation using premium acoustic neural voices with human-like intonations." },
      { name: "Secure Phone Pay Gates", desc: "PCI-compliant DTMF masking to handle credit cards safely over voice calls without agent exposure." },
      { name: "CRM Database Integration", desc: "Query client records dynamically in real-time to personalize the IVR greeting and options." }
    ],
    techStack: ["Twilio Voice", "Asterisk PBX", "VoIP SIP", "Amazon Connect", "Node.js", "Webhooks"],
    videoUrl: "/videos/ivr.mp4",
    capabilities: {
      eyebrow: "OUR CAPABILITIES",
      heading: "Telephony Systems We Deploy",
      description: "We design intelligent call routing systems that create seamless caller experiences. From multi-level IVR menus to CRM-connected auto-attendants, we automate your inbound calls end to end.",
      tiles: [
        { label: "Multi-Level IVR",   bg: "#ede9fe", icon: "ivrmenu" },
        { label: "Auto Attendant",    bg: "#ffffff", icon: "autoattend" },
        { label: "Call Queue System", bg: "#dbeafe", icon: "callqueue" },
        { label: "Voice Bot",         bg: "#ffffff", icon: "voicebot" },
        { label: "CRM Integration",   bg: "#d1fae5", icon: "crmivr" },
        { label: "Cloud IVR",         bg: "#ffffff", icon: "cloudivr" }
      ]
    },
    process: [
      { step: "Call Flow Analysis", desc: "We map your inbound call volumes, peak hours, department structures, and escalation paths to design the optimal IVR tree.", activities: ["Call volume analysis", "Department mapping", "Escalation path design", "Business hours configuration"] },
      { step: "Script & Voice Design", desc: "Professional IVR scripts are written and recorded using premium neural TTS voices, ensuring a warm and brand-consistent caller experience.", activities: ["Script writing", "Neural TTS voice selection", "Prompt recording", "Audio quality mastering"] },
      { step: "IVR Tree Development", desc: "Multi-level DTMF menu logic is coded in Twilio or Asterisk, with skill-based routing rules, queue priorities, and overflow fallbacks.", activities: ["DTMF menu coding", "Skill-based routing", "Queue priority setup", "Overflow fallback config"] },
      { step: "CRM & API Integration", desc: "The IVR is connected to your CRM to greet callers by name, surface their account data, and pre-fill agent screens before pickup.", activities: ["CRM API connection", "Caller ID lookup", "Screen pop configuration", "Data passing to agent"] },
      { step: "Testing & Go-Live", desc: "Full end-to-end call flow testing is conducted across all menu paths before a phased, zero-disruption live cutover is executed.", activities: ["Menu path simulation", "Load call testing", "Agent handoff testing", "Live cutover execution"] }
    ],
    subServices: [
      { name: "IVR Setup", desc: "Interactive voice response menus configured with multi-level telephone trees, DTMF detection, and reliable SIP trunk routing.", videoUrl: "/videos/subservices/ivr-0.mp4" },
      { name: "Automated Voice Response Systems", desc: "High-fidelity text-to-speech greeting loops and pre-recorded prompts to direct inbound callers without operators.", videoUrl: "/videos/subservices/ivr-1.mp4" },
      { name: "Business Call Management", desc: "Call queue structures, business hour rules, automated voicemail-to-email routing, and high-quality background music loops.", videoUrl: "/videos/subservices/ivr-2.mp4" },
      { name: "Customer Support IVR", desc: "Skill-based routing menus that forward callers directly to the correct technical support department, minimizing transfer lag.", videoUrl: "/videos/subservices/ivr-3.mp4" },
      { name: "Cloud IVR Solutions", desc: "Fully hosted VoIP phone networks offering infinite channel scaling, easy dashboard controls, and low-latency call logs.", videoUrl: "/videos/subservices/ivr-4.mp4" },
      { name: "Multi-Level IVR Systems", desc: "Advanced nested telephone navigation trees designed to guide callers through complex departmental options with absolute ease.", videoUrl: "/videos/subservices/ivr-5.mp4" }
    ]
  },
  {
    themeId: "api-integrations",
    title: "Enterprise API Integrations & Secure Microservices Middleware",
    category: "API Integrations",
    tagline: "Connect disjointed SaaS applications into a single, unified database network.",
    description: "We engineer secure microservice bridges to integrate third-party gateways, CRM architectures, and distributed services. Eradicate manual database updates with instantaneous API triggers.",
    btnText: "Plan API Integration",
    image: detailApiIntegrationsImg,
    color: "#14B8A6",
    features: [
      { name: "Real-Time Synchronization", desc: "Instantly update target databases via robust, encrypted, event-driven webhooks." },
      { name: "Fail-Safe Queue Processing", desc: "Message broker grids that guarantee API transmission even during target server down times." },
      { name: "Data Transformation Wrappers", desc: "Map conflicting XML, SOAP, and JSON formats into unified object shapes for clean consumption." },
      { name: "Rate Limit Resilience", desc: "Smart request throttling, token bucket queues, and exponential backoff retries with jitter." }
    ],
    techStack: ["RabbitMQ", "Apache Kafka", "AWS API Gateway", "Redis", "Swagger", "OAuth 2.0"],
    videoUrl: "/videos/app-dev.mp4",
    capabilities: {
      eyebrow: "OUR CAPABILITIES",
      heading: "Integrations We Engineer",
      description: "We connect your entire software ecosystem — from payment gateways to CRMs and messaging platforms — through secure, high-performance API bridges that eliminate manual processes and data silos.",
      tiles: [
        { label: "Payment Gateway",   bg: "#ede9fe", icon: "payment" },
        { label: "WhatsApp API",      bg: "#ffffff", icon: "whatsapp" },
        { label: "CRM Integration",   bg: "#fef9c3", icon: "crm" },
        { label: "SMS & Email API",   bg: "#ffffff", icon: "smsapi" },
        { label: "Webhook Engine",    bg: "#d1fae5", icon: "webhook" },
        { label: "OAuth 2.0 Auth",    bg: "#ffffff", icon: "oauth" }
      ]
    },
    process: [
      { step: "API Discovery & Mapping", desc: "We audit all existing systems, document their data schemas, and map the complete integration topology before writing any connector code.", activities: ["System inventory", "Schema documentation", "Endpoint discovery", "Integration topology map"] },
      { step: "Auth & Security Setup", desc: "OAuth 2.0 flows, API key management, and token refresh cycles are implemented to ensure every integration is fully secure and compliant.", activities: ["OAuth 2.0 configuration", "API key vault setup", "Token refresh logic", "HTTPS enforcement"] },
      { step: "Middleware Development", desc: "Custom middleware adapters are built to transform conflicting data formats, handle rate limits, and queue requests during outages.", activities: ["Data transformer coding", "Rate limit handling", "Message queue setup", "Retry logic with backoff"] },
      { step: "Integration Testing", desc: "Every endpoint is exercised with mock data and real payloads in staging to verify data fidelity, latency, and error handling.", activities: ["Mock payload testing", "Latency benchmarking", "Error scenario simulation", "Data integrity validation"] },
      { step: "Monitoring & Maintenance", desc: "API health dashboards and webhook failure alerts are configured, with an SLA for rapid incident response and schema change updates.", activities: ["API health dashboard", "Webhook failure alerts", "Schema change monitoring", "SLA response maintenance"] }
    ],
    subServices: [
      { name: "Third-Party API Integration", desc: "Secure middleware integrations linking external payment systems, corporate mapping utilities, and CRM platforms into your site.", videoUrl: "/videos/subservices/api-integrations-0.mp4" },
      { name: "Payment Gateway Integration", desc: "Encrypted handshakes with Stripe, PayPal, and regional merchant portals, implementing multi-factor customer payment checks.", videoUrl: "/videos/subservices/api-integrations-1.mp4" },
      { name: "WhatsApp API Integration", desc: "Custom notification scripts that broadcast transactional invoice warnings and real-time shipping alerts to client mobiles.", videoUrl: "/videos/subservices/api-integrations-2.mp4" },
      { name: "SMS & Email API Setup", desc: "Scalable high-deliverability integration scripts using Twilio or SendGrid to send rapid login tokens and transactional alerts.", videoUrl: "/videos/subservices/api-integrations-3.mp4" },
      { name: "Automation Integrations", desc: "Custom-coded API hooks connecting disconnected SaaS apps, executing instant cloud database updates, and unifying office workflows.", videoUrl: "/videos/subservices/api-integrations-4.mp4" }
    ]
  },
  {
    themeId: "ecommerce",
    title: "High-Conversion E-Commerce Storefronts & Secure Payment Grids",
    category: "E-Commerce Solutions",
    tagline: "Transform visitors into loyal customers with highly optimized storefronts.",
    description: "Launch high-performance, conversion-centric online retail stores. We integrate secure payment gateways, build intelligent visual search systems, and configure elastic cart backends that prevent check-out lag.",
    btnText: "Build E-Commerce Grid",
    image: detailEcommerceImg,
    color: "#EF4444",
    features: [
      { name: "Frictionless Single-Page Checkout", desc: "Minimize cart abandonment with secure credit card, Apple Pay, Google Pay, and localized payment gates." },
      { name: "Real-Time Stock Synchronization", desc: "Instantaneous stock checking and automated alert triggers for inventory and warehouse teams." },
      { name: "Intelligent Product Search", desc: "Fuzzy match queries, keyword spelling correction, and personalized recommendation widgets." },
      { name: "High-Frequency Sales Support", desc: "Caching configurations that maintain lightning-fast response times during viral flash sales." }
    ],
    techStack: ["Shopify Custom", "WooCommerce", "Stripe API", "Redis Caching", "Algolia Search", "GraphQL"],
    videoUrl: "/videos/marketing.mp4",
    capabilities: {
      eyebrow: "OUR CAPABILITIES",
      heading: "Stores We Build",
      description: "We create high-conversion online stores that turn browsers into buyers. From single-product Shopify stores to complex multi-vendor marketplaces, every platform is engineered to sell at scale.",
      tiles: [
        { label: "Shopify Store",     bg: "#ede9fe", icon: "shopify" },
        { label: "WooCommerce",       bg: "#ffffff", icon: "woo" },
        { label: "Multi-Vendor",      bg: "#fef9c3", icon: "multivendor" },
        { label: "Product Catalogue",bg: "#ffffff", icon: "catalogue" },
        { label: "Order Management",  bg: "#d1fae5", icon: "orders" },
        { label: "Payment Gateway",   bg: "#ffffff", icon: "payment" }
      ]
    },
    process: [
      { step: "Store Strategy & Platform Selection", desc: "We analyse your product catalogue, sales volume, and growth targets to recommend the perfect e-commerce platform and feature set.", activities: ["Platform evaluation", "Catalogue structure planning", "Payment gateway shortlisting", "Competitor store audit"] },
      { step: "UX Design & Theme Development", desc: "Conversion-focused store designs are created with intuitive product grids, frictionless checkout flows, and mobile-first responsiveness.", activities: ["Store wireframing", "Custom theme coding", "Checkout UX optimisation", "Mobile responsiveness"] },
      { step: "Product & Inventory Setup", desc: "All products, variants, categories, and pricing rules are imported, structured, and linked to your warehouse management system.", activities: ["Product data import", "Variant configuration", "Category taxonomy setup", "Inventory sync integration"] },
      { step: "Payment & Shipping Integration", desc: "Stripe, PayPal, and regional gateways are integrated with automated tax calculation, multi-currency support, and dynamic shipping rates.", activities: ["Payment gateway setup", "Tax rule configuration", "Shipping carrier integration", "Multi-currency support"] },
      { step: "Launch & Growth Optimisation", desc: "After a thorough pre-launch checklist, the store goes live with SEO metadata, speed audits, and Google Analytics e-commerce tracking.", activities: ["Pre-launch QA checklist", "SEO metadata setup", "Page speed audit", "E-commerce analytics tracking"] }
    ],
    subServices: [
      { name: "Online Store Development", desc: "Full-featured online storefronts designed with modular inventory grids, flexible cart systems, and custom administrative product dashboards.", videoUrl: "/videos/subservices/ecommerce-0.mp4" },
      { name: "Product Management Systems", desc: "Structured database panels allowing catalog managers to edit attributes, apply sale pricing, and track inventory.", videoUrl: "/videos/subservices/ecommerce-1.mp4" },
      { name: "Payment Gateway Integration", desc: "Secure PCI-compliant shopping checkouts utilizing biometric authentication, regional gateways, and automated tax calculations.", videoUrl: "/videos/subservices/ecommerce-2.mp4" },
      { name: "Shopify Development", desc: "High-fidelity custom theme coding, bespoke Liquid modifications, and tailored private app integrations on the Shopify ecosystem.", videoUrl: "/videos/subservices/ecommerce-3.mp4" },
      { name: "WooCommerce Development", desc: "Customized WordPress e-commerce setups hardened against injection threats and optimized with advanced caching layers.", videoUrl: "/videos/subservices/ecommerce-4.mp4" },
      { name: "Multi-Vendor Platforms", desc: "Scalable marketplace portals containing individual vendor dashboards, automated split payments, and unified customer checkout baskets.", videoUrl: "/videos/subservices/ecommerce-5.mp4" },
      { name: "Order Management Systems", desc: "High-volume order tracking flows containing automated shipping label generators, inventory allocations, and return status monitors.", videoUrl: "/videos/subservices/ecommerce-6.mp4" }
    ]
  },
  {
    themeId: "ai-automation",
    title: "Robotic Process Automation (RPA) & AI-Driven Cognitive Workflows",
    category: "AI & Automation",
    tagline: "Eradicate repetitive tasks and supercharge team productivity.",
    description: "We deploy Robotic Process Automation (RPA) and cognitive workflow systems to automate administrative bottlenecks. Sync data across disconnected apps, auto-generate complex documents, and free up critical hours.",
    btnText: "Automate Office Workflows",
    image: detailAiAutomationImg,
    color: "#6366F1",
    features: [
      { name: "Robotic Data Entry Blocks", desc: "Scripted screen scrapers and document readers that port data across web forms with zero human error." },
      { name: "Intelligent Document Parsing", desc: "AI-powered OCR to read invoices, shipping orders, and tax receipts automatically." },
      { name: "Multi-App Task Triggers", desc: "Complex event flows linking Gmail, Slack, Google Drive, and internal database systems." },
      { name: "Visual Process Dashboard", desc: "Analytical charts detailing saved employee hours and automation success rates." }
    ],
    techStack: ["Python Automation", "Selenium", "PyTesseract OCR", "Zapier Developer", "UiPath", "Celery"],
    videoUrl: "/videos/ai-rag.mp4",
    capabilities: {
      eyebrow: "OUR CAPABILITIES",
      heading: "Automation We Deploy",
      description: "We replace manual, repetitive work with intelligent bots and automated pipelines. From document OCR and data entry to multi-app workflow orchestration, we free your team to focus on what matters.",
      tiles: [
        { label: "RPA Bot",           bg: "#ede9fe", icon: "rpa" },
        { label: "OCR Engine",        bg: "#ffffff", icon: "ocr" },
        { label: "Workflow Engine",   bg: "#fef9c3", icon: "workflow" },
        { label: "AI Integration",    bg: "#ffffff", icon: "aiagent" },
        { label: "Process Mining",    bg: "#d1fae5", icon: "processmining" },
        { label: "Scheduled Tasks",   bg: "#ffffff", icon: "schedule" }
      ]
    },
    process: [
      { step: "Process Discovery & Mapping", desc: "We shadow your team, record manual workflows, and identify the highest-ROI automation candidates using process mining techniques.", activities: ["Workflow shadowing", "Process mining analysis", "ROI candidate ranking", "Feasibility assessment"] },
      { step: "Bot Design & Architecture", desc: "Automation blueprints are designed detailing trigger conditions, data transformation rules, exception handling, and human-in-the-loop checkpoints.", activities: ["Trigger condition design", "Data transformation mapping", "Exception handling flows", "Human checkpoint definition"] },
      { step: "RPA Development & AI Integration", desc: "Bots are coded in Python or UiPath with OCR, NLP, and computer vision modules to handle even unstructured document inputs.", activities: ["RPA bot development", "OCR module integration", "NLP pipeline setup", "Computer vision training"] },
      { step: "UAT & Parallel Running", desc: "Automated bots run in parallel with manual processes during UAT to validate output accuracy, speed gains, and exception rates.", activities: ["Parallel process running", "Accuracy validation", "Speed benchmark comparison", "Exception rate logging"] },
      { step: "Deployment & Performance Tracking", desc: "Bots go live with a real-time dashboard tracking hours saved, error rates, and process completion times for ongoing optimisation.", activities: ["Production deployment", "Dashboard setup", "Hours saved tracking", "Continuous improvement loop"] }
    ],
    subServices: [
      { name: "AI Integrations", desc: "Integrating cognitive smarts, automatic content generation, and smart recommendation widgets directly into corporate systems.", videoUrl: "/videos/subservices/ai-automation-0.mp4" },
      { name: "Workflow Automation", desc: "Event-driven office automations utilizing custom webhooks to transfer client files, dispatch emails, and update database fields.", videoUrl: "/videos/subservices/ai-automation-1.mp4" },
      { name: "Smart Business Automation", desc: "Advanced business process automation incorporating dynamic invoice tracking, staff shift logs, and inventory alerts.", videoUrl: "/videos/subservices/ai-automation-2.mp4" },
      { name: "AI-Based Features", desc: "Custom models to analyze client reviews, predict sale velocity trends, and auto-tag catalog items.", videoUrl: "/videos/subservices/ai-automation-3.mp4" },
      { name: "Process Automation", desc: "Multi-step data translation tools that parse raw document spreadsheets and update cloud dashboards without manual typing.", videoUrl: "/videos/subservices/ai-automation-4.mp4" },
      { name: "Business Automation System", desc: "Tailor-made web systems uniting project logs, lead management, employee timesheets, and invoicing into a unified auto-running dashboard.", videoUrl: "/videos/subservices/ai-automation-5.mp4" }
    ]
  },
  {
    themeId: "security",
    title: "Zero-Trust Cybersecurity Protection & Continuous Code Maintenance",
    category: "Security & Maintenance",
    tagline: "Secure your corporate digital parameters against modern threat vectors.",
    description: "We configure persistent security defense parameters and conduct periodic compliance audits. Keep your server software, code libraries, and customer data protected with absolute Zero-Trust protocols.",
    btnText: "Secure Corporate Network",
    image: detailSecurityImg,
    color: "#E11D48",
    features: [
      { name: "Continuous Vulnerability Scans", desc: "Automatic library dependencies checking and code vulnerability tracking with SonarQube." },
      { name: "Zero-Trust Perimeter Isolation", desc: "Granular access permissions, mandatory multi-factor authentication loops, and IP white-listing." },
      { name: "Active SSL & Certificate Checks", desc: "Automatic renewal and server protocol configuration checks to block data snooping." },
      { name: "Intrusion Alert Telemetry", desc: "Real-time email and Slack notifications reporting unauthorized access attempts." }
    ],
    techStack: ["SonarQube", "Let's Encrypt", "Cloudflare WAF", "OpenVAS", "JWT Auth", "Docker Security"],
    videoUrl: "/videos/security.mp4",
    capabilities: {
      eyebrow: "OUR CAPABILITIES",
      heading: "Security We Enforce",
      description: "We protect your digital assets with comprehensive security audits, zero-trust architecture, and 24/7 monitoring. From penetration testing to WAF deployment, we keep threats out and your business running.",
      tiles: [
        { label: "Penetration Testing",bg:"#ede9fe", icon: "pentest" },
        { label: "WAF Deployment",    bg: "#ffffff", icon: "waf" },
        { label: "SSL & HTTPS",       bg: "#fef9c3", icon: "ssl" },
        { label: "Backup & Recovery", bg: "#ffffff", icon: "backup" },
        { label: "Malware Removal",   bg: "#d1fae5", icon: "malware" },
        { label: "Code Audit",        bg: "#ffffff", icon: "codeaudit" }
      ]
    },
    process: [
      { step: "Security Audit & Penetration Testing", desc: "Certified ethical hackers perform OWASP Top 10 testing, dependency scanning, and network penetration to expose all vulnerability vectors.", activities: ["OWASP Top 10 testing", "Dependency vulnerability scan", "Network penetration test", "Detailed audit report"] },
      { step: "Zero-Trust Policy Design", desc: "Granular IAM policies, MFA enforcement, role-based access controls, and network micro-segmentation are architected and documented.", activities: ["IAM policy setup", "MFA enforcement", "RBAC configuration", "Network micro-segmentation"] },
      { step: "WAF & Perimeter Defense", desc: "Cloudflare WAF rules, DDoS mitigation, custom rate limiting, and bot management policies are deployed and fine-tuned for your traffic patterns.", activities: ["WAF rule deployment", "DDoS mitigation setup", "Rate limiting configuration", "Bot management policies"] },
      { step: "Monitoring & Intrusion Detection", desc: "SIEM tools, log aggregators, and fail2ban rules provide 24/7 anomaly detection with instant Slack and email alert routing.", activities: ["SIEM configuration", "Log aggregation setup", "fail2ban rule deployment", "Alert escalation routing"] },
      { step: "Continuous Maintenance & Patching", desc: "Scheduled vulnerability scans, library dependency updates, and monthly compliance reports keep your systems hardened against emerging threats.", activities: ["Scheduled vulnerability scans", "Library dependency updates", "Monthly compliance reports", "Patch deployment automation"] }
    ],
    subServices: [
      { name: "Website Maintenance", desc: "Proactive core software upgrades, regular database defragmentation, broken link rectifications, and monthly system health audits.", videoUrl: "/videos/subservices/security-0.mp4" },
      { name: "Performance Optimization", desc: "Thorough asset compression, slow database query refactoring, dynamic image webp conversions, and script optimization.", videoUrl: "/videos/subservices/security-1.mp4" },
      { name: "Bug Fixing", desc: "Rapid diagnosis and resolution of layout breakages, console errors, database connection drops, and checkout logic flaws.", videoUrl: "/videos/subservices/security-2.mp4" },
      { name: "Website Security", desc: "Advanced injection scanning, cross-site scripting (XSS) defense, and zero-day patch deployments to maintain compliance.", videoUrl: "/videos/subservices/security-3.mp4" },
      { name: "Malware Protection", desc: "Automatic file scanner scripts, server signature matching, clean restore procedures, and persistent bad-bot blocks.", videoUrl: "/videos/subservices/security-4.mp4" },
      { name: "Backup Management", desc: "Automated encrypted off-site database and asset dumps scheduled daily with quick recovery checkpoints.", videoUrl: "/videos/subservices/security-5.mp4" },
      { name: "Technical Support", desc: "Round-the-clock priority helpdesk support assisting with server administration, domain problems, and email server troubleshooting.", videoUrl: "/videos/subservices/security-6.mp4" },
      { name: "Server Security Monitoring", desc: "Real-time network intrusion monitoring, custom fail2ban triggers, firewall audits, and immediate alerts for abnormal resource use.", videoUrl: "/videos/subservices/security-7.mp4" }
    ]
  }
];

// ─── Capability icon SVGs ────────────────────────────────────────────────────
const CapIcons = {
  enterprise: <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="6" y="18" width="36" height="26"/><rect x="14" y="8" width="20" height="10"/><rect x="20" y="30" width="8" height="14" fill="currentColor" stroke="none"/></svg>,
  pwa:        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><rect x="12" y="4" width="24" height="40" rx="3"/><circle cx="24" cy="38" r="2" fill="currentColor" stroke="none"/><path d="M19 12h10"/></svg>,
  mvp:        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M24 4l5 10 11 1.5-8 7.5 2 11L24 29l-10 5 2-11-8-7.5 11-1.5z"/></svg>,
  saas:       <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><rect x="6" y="12" width="36" height="24" rx="4"/><path d="M14 20h6M14 24h4M28 20h6M28 24h4M24 38v4M16 42h16"/></svg>,
  cloud:      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M36 36H14a10 10 0 010-20 10 10 0 0119.5-2A8 8 0 0136 36z"/></svg>,
  spa:        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><rect x="4" y="8" width="40" height="32" rx="3"/><path d="M4 16h40M14 12h1M18 12h1M22 12h1"/><path d="M14 24h8M14 29h12"/></svg>,
  ios:        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><rect x="14" y="4" width="20" height="40" rx="4"/><circle cx="24" cy="38" r="2" fill="currentColor" stroke="none"/><path d="M20 10h8"/></svg>,
  android:    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M12 20h24v16a4 4 0 01-4 4H16a4 4 0 01-4-4V20z"/><path d="M18 20v-4a6 6 0 0112 0v4"/><circle cx="18" cy="16" r="1.5" fill="currentColor" stroke="none"/><circle cx="30" cy="16" r="1.5" fill="currentColor" stroke="none"/></svg>,
  flutter:    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M8 24L24 8l16 16-8 8-8-8-8 8z"/><path d="M16 32l8 8 16-16"/></svg>,
  reactnative:<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><ellipse cx="24" cy="24" rx="18" ry="7"/><ellipse cx="24" cy="24" rx="18" ry="7" transform="rotate(60 24 24)"/><ellipse cx="24" cy="24" rx="18" ry="7" transform="rotate(120 24 24)"/><circle cx="24" cy="24" r="3" fill="currentColor" stroke="none"/></svg>,
  offline:    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><rect x="8" y="8" width="32" height="28" rx="3"/><path d="M16 36v4M32 36v4M12 40h24"/><path d="M18 22l4 4 8-8"/></svg>,
  erp:        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><rect x="6" y="6" width="36" height="36" rx="3"/><line x1="6" y1="16" x2="42" y2="16"/><line x1="18" y1="16" x2="18" y2="42"/><path d="M24 24h10M24 30h6M24 36h8"/></svg>,
  billing:    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><rect x="8" y="6" width="32" height="40" rx="2"/><path d="M16 18h16M16 24h12M16 30h8"/></svg>,
  crm:        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><circle cx="24" cy="14" r="7"/><path d="M10 38c0-8 28-8 28 0"/><circle cx="38" cy="20" r="4"/><path d="M42 32c0-4-8-4-8 0"/></svg>,
  desktop:    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><rect x="4" y="8" width="40" height="28" rx="3"/><path d="M16 36v4M32 36v4M12 40h24"/></svg>,
  inventory:  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><rect x="6" y="14" width="36" height="30" rx="2"/><path d="M16 14V10a8 8 0 0116 0v4"/><path d="M14 26h20M14 32h14"/></svg>,
  api:        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><rect x="6" y="16" width="14" height="16" rx="2"/><rect x="28" y="16" width="14" height="16" rx="2"/><path d="M20 24h8M28 20l-4 4 4 4"/></svg>,
  cicd:       <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><circle cx="10" cy="24" r="5"/><circle cx="38" cy="24" r="5"/><path d="M15 24h18M30 18l8 6-8 6"/></svg>,
  kubernetes: <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><circle cx="24" cy="24" r="16"/><path d="M24 8v6M24 34v6M8 24h6M34 24h6"/><path d="M13 13l4 4M31 31l4 4M13 35l4-4M31 17l4-4"/></svg>,
  docker:     <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><rect x="6" y="22" width="8" height="8" rx="1"/><rect x="16" y="22" width="8" height="8" rx="1"/><rect x="26" y="22" width="8" height="8" rx="1"/><rect x="16" y="12" width="8" height="8" rx="1"/><path d="M6 30c0 6 36 6 36 0"/></svg>,
  terraform:  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 12l10 6v12L6 24z"/><path d="M18 6l10 6v12L18 18z"/><path d="M18 30l10 6v-12L18 18z"/><path d="M30 12l10 6v12L30 24z"/></svg>,
  aws:        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M12 28a12 12 0 0124 0"/><path d="M8 34c0-4 4-6 8-4"/><path d="M40 34c0-4-4-6-8-4"/><path d="M18 40h12M24 28v10"/></svg>,
  monitoring: <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="6,32 14,20 20,26 28,14 36,22 42,16"/><rect x="4" y="8" width="40" height="32" rx="3"/></svg>,
  vps:        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><rect x="6" y="8" width="36" height="12" rx="2"/><rect x="6" y="24" width="36" height="12" rx="2"/><circle cx="38" cy="14" r="2" fill="currentColor" stroke="none"/><circle cx="38" cy="30" r="2" fill="currentColor" stroke="none"/></svg>,
  server:     <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><rect x="6" y="6" width="36" height="10" rx="2"/><rect x="6" y="20" width="36" height="10" rx="2"/><rect x="6" y="34" width="36" height="10" rx="2"/><circle cx="38" cy="11" r="2" fill="currentColor" stroke="none"/><circle cx="38" cy="25" r="2" fill="currentColor" stroke="none"/><circle cx="38" cy="39" r="2" fill="currentColor" stroke="none"/></svg>,
  cdn:        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><circle cx="24" cy="24" r="16"/><ellipse cx="24" cy="24" rx="8" ry="16"/><line x1="8" y1="24" x2="40" y2="24"/><line x1="10" y1="16" x2="38" y2="16"/><line x1="10" y1="32" x2="38" y2="32"/></svg>,
  ssl:        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M24 4L8 12v14c0 10 7 18 16 20 9-2 16-10 16-20V12z"/><path d="M17 24l5 5 9-10"/></svg>,
  email:      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><rect x="4" y="12" width="40" height="28" rx="3"/><path d="M4 16l20 14L44 16"/></svg>,
  seo:        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><circle cx="20" cy="20" r="12"/><path d="M30 30l10 10"/><path d="M14 20h12M20 14v12"/></svg>,
  googleads:  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M8 36L24 12l8 14"/><circle cx="38" cy="32" r="6"/><line x1="8" y1="36" x2="26" y2="36"/></svg>,
  metaads:    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M6 30c0-8 4-16 10-16s8 8 8 16"/><path d="M24 30c0-8 4-16 10-16s8 8 8 16"/></svg>,
  emailmkt:   <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><rect x="4" y="12" width="40" height="28" rx="3"/><path d="M4 16l20 14L44 16"/><path d="M36 6l4 6M30 4l2 6"/></svg>,
  content:    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><rect x="8" y="4" width="32" height="40" rx="2"/><path d="M16 14h16M16 20h16M16 26h10"/></svg>,
  analytics:  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="6,36 16,22 24,28 34,14 42,20"/><line x1="6" y1="36" x2="42" y2="36"/></svg>,
  rag:        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><circle cx="12" cy="12" r="5"/><circle cx="36" cy="12" r="5"/><circle cx="12" cy="36" r="5"/><circle cx="36" cy="36" r="5"/><circle cx="24" cy="24" r="6"/><line x1="17" y1="12" x2="31" y2="12"/><line x1="12" y1="17" x2="12" y2="31"/><line x1="36" y1="17" x2="36" y2="31"/><line x1="17" y1="36" x2="31" y2="36"/></svg>,
  llm:        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><rect x="6" y="10" width="36" height="24" rx="4"/><path d="M16 34l-4 6h24l-4-6"/><path d="M15 20h4M22 20h4M29 20h4M15 26h10"/></svg>,
  vectordb:   <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><ellipse cx="24" cy="12" rx="16" ry="6"/><path d="M8 12v12c0 3.3 7.2 6 16 6s16-2.7 16-6V12"/><path d="M8 24v12c0 3.3 7.2 6 16 6s16-2.7 16-6V24"/></svg>,
  whatsapp:   <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M24 4C13 4 4 13 4 24c0 3.6 1 7 2.8 9.8L4 44l10.4-2.7C17 43 20.4 44 24 44c11 0 20-9 20-20S35 4 24 4z"/><path d="M18 18c1 3 4 7 12 10" strokeWidth="2"/></svg>,
  aiagent:    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><rect x="12" y="14" width="24" height="24" rx="4"/><circle cx="18" cy="22" r="2" fill="currentColor" stroke="none"/><circle cx="30" cy="22" r="2" fill="currentColor" stroke="none"/><path d="M18 30s3 3 12 0"/><path d="M24 14V8M18 8h12"/><line x1="8" y1="22" x2="12" y2="22"/><line x1="36" y1="22" x2="40" y2="22"/></svg>,
  nlp:        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M6 16h36M6 24h24M6 32h28"/><circle cx="38" cy="32" r="6"/><path d="M36 30l4 4M38 28l-4 4"/></svg>,
  ivrmenu:    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><rect x="14" y="4" width="20" height="40" rx="4"/><path d="M20 12h8M20 18h4M20 24h6"/><circle cx="24" cy="36" r="2" fill="currentColor" stroke="none"/></svg>,
  autoattend: <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><circle cx="24" cy="14" r="8"/><path d="M10 40c0-7.7 6.3-14 14-14s14 6.3 14 14"/><path d="M36 20l6-6M36 26h6"/></svg>,
  callqueue:  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M8 14a6 6 0 016-6h20a6 6 0 016 6v14a6 6 0 01-6 6H18l-8 6V14z"/><path d="M16 18h16M16 24h10"/></svg>,
  voicebot:   <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><rect x="16" y="6" width="16" height="24" rx="8"/><path d="M10 22a14 14 0 0028 0"/><line x1="24" y1="36" x2="24" y2="44"/><line x1="16" y1="44" x2="32" y2="44"/></svg>,
  crmivr:     <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><rect x="6" y="6" width="22" height="36" rx="3"/><circle cx="35" cy="16" r="7"/><path d="M28 40c0-6 14-6 14 0"/><path d="M14 16h8M14 22h6"/></svg>,
  cloudivr:   <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M36 36H14a10 10 0 010-20 10 10 0 0119.5-2A8 8 0 0136 36z"/><path d="M20 28l4-4 4 4M24 24v8"/></svg>,
  payment:    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><rect x="4" y="10" width="40" height="28" rx="3"/><path d="M4 18h40"/><path d="M12 28h6M22 28h4"/></svg>,
  smsapi:     <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M6 8h36v24H26l-8 8v-8H6z"/><path d="M14 18h4M22 18h4M30 18h4"/></svg>,
  webhook:    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><circle cx="10" cy="24" r="5"/><circle cx="38" cy="14" r="5"/><circle cx="38" cy="34" r="5"/><path d="M15 24l18-10M15 24l18 10"/></svg>,
  oauth:      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><rect x="12" y="20" width="24" height="22" rx="3"/><path d="M18 20v-6a6 6 0 0112 0v6"/><circle cx="24" cy="31" r="3" fill="currentColor" stroke="none"/><line x1="24" y1="34" x2="24" y2="38"/></svg>,
  shopify:    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M30 8s-2-2-6-2-12 6-12 18 6 14 12 14 6-2 6-2"/><path d="M30 8l4 32M18 16h12"/></svg>,
  woo:        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><rect x="4" y="10" width="40" height="28" rx="4"/><path d="M10 24l4 8 4-8 4 8 4-8"/><path d="M34 20v12M38 20v12"/></svg>,
  multivendor:<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><rect x="4" y="20" width="14" height="22" rx="2"/><rect x="17" y="12" width="14" height="30" rx="2"/><rect x="30" y="20" width="14" height="22" rx="2"/></svg>,
  catalogue:  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><rect x="6" y="6" width="16" height="16" rx="2"/><rect x="26" y="6" width="16" height="16" rx="2"/><rect x="6" y="26" width="16" height="16" rx="2"/><rect x="26" y="26" width="16" height="16" rx="2"/></svg>,
  orders:     <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M8 12h32l-4 24H12z"/><path d="M18 12V8a6 6 0 0112 0v4"/><path d="M18 24l4 4 8-8"/></svg>,
  rpa:        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><rect x="12" y="16" width="24" height="20" rx="3"/><circle cx="19" cy="24" r="2" fill="currentColor" stroke="none"/><circle cx="29" cy="24" r="2" fill="currentColor" stroke="none"/><path d="M18 30h12M20 16v-4M28 16v-4M16 12h16"/></svg>,
  ocr:        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><rect x="6" y="6" width="26" height="36" rx="3"/><path d="M14 16h10M14 22h14M14 28h10M14 34h6"/><circle cx="38" cy="38" r="6"/><path d="M36 36l4 4"/></svg>,
  workflow:   <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><rect x="4" y="18" width="12" height="12" rx="2"/><rect x="36" y="18" width="8" height="12" rx="2"/><rect x="20" y="10" width="8" height="12" rx="2"/><rect x="20" y="26" width="8" height="12" rx="2"/><path d="M16 24h4M28 16l4 4M28 32l4-4"/></svg>,
  processmining:<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><circle cx="10" cy="24" r="5"/><circle cx="24" cy="10" r="5"/><circle cx="38" cy="24" r="5"/><circle cx="24" cy="38" r="5"/><path d="M15 24h4M34 24h-4M24 15v4M24 33v-4"/></svg>,
  schedule:   <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><rect x="6" y="8" width="36" height="36" rx="3"/><path d="M6 18h36M16 8V4M32 8V4M24 26v6l4 2"/></svg>,
  pentest:    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M24 4L8 12v14c0 10 7 18 16 20 9-2 16-10 16-20V12z"/><path d="M17 22l4 4 10-10"/></svg>,
  waf:        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><rect x="4" y="8" width="40" height="32" rx="3"/><path d="M4 18h40"/><circle cx="36" cy="30" r="5"/><path d="M34 28l4 4M38 28l-4 4"/></svg>,
  backup:     <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M36 36H14a10 10 0 010-20 10 10 0 0119.5-2A8 8 0 0136 36z"/><path d="M20 30l4 4 4-4M24 34V22"/></svg>,
  malware:    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M24 4L8 12v14c0 10 7 18 16 20 9-2 16-10 16-20V12z"/><path d="M18 18l12 12M30 18L18 30"/></svg>,
  codeaudit:  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><rect x="8" y="4" width="32" height="40" rx="2"/><path d="M16 16l-4 4 4 4M32 16l4 4-4 4M22 28l4-8"/></svg>,
};

// ─── Capabilities Section ─────────────────────────────────────────────────────
const CapabilitiesSection = ({ data, color }) => (
  <section className="cap-section">
    <div className="cap-container">
      <div className="cap-left">
        <span className="cap-eyebrow" style={{ color }}>{data.eyebrow}</span>
        <h2 className="cap-heading">{data.heading}</h2>
        <p className="cap-description">{data.description}</p>
      </div>
      <div className="cap-grid">
        {data.tiles.map((tile, i) => (
          <div key={i} className="cap-tile" style={{ background: tile.bg }}>
            <div className="cap-tile-icon">
              {CapIcons[tile.icon] || CapIcons.enterprise}
            </div>
            <span className="cap-tile-label">{tile.label}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ─── Process Step Component (hover to expand) ────────────────────────────────
const ProcessStep = ({ step, idx, color }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className={`process-step-block${hovered ? ' process-step-expanded' : ''}`}
      style={{ '--step-color': color }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Collapsed label (rotated) */}
      <div className="process-step-label">
        <span className="process-step-name">{step.step}</span>
      </div>

      {/* Expanded content */}
      <div className="process-step-expanded-content">
        <div className="process-step-expanded-inner">
          <h3 className="process-step-title">{step.step}</h3>
          <p className="process-step-desc">{step.desc}</p>
          {step.activities && (
            <div className="process-activities">
              <span className="process-activities-label">Activities</span>
              <div className="process-activities-grid">
                {step.activities.map((act, i) => (
                  <div key={i} className="process-activity-item">
                    <svg className="process-check-icon" viewBox="0 0 20 20" fill="none">
                      <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.5"/>
                      <path d="M6.5 10.5l2.5 2.5 4.5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>{act}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const ServiceDetailPage = ({ serviceIndex, onBack }) => {
  const activeService = serviceDetailsDataset[serviceIndex] || serviceDetailsDataset[0];

  useEffect(() => {
    // Scroll to top of page upon loading a new service details view
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [serviceIndex]);

  const handleCtaClick = (e) => {
    e.preventDefault();
    if (onBack) {
      onBack();
      setTimeout(() => {
        const contactSec = document.getElementById('contact');
        if (contactSec) {
          contactSec.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <div className={`service-details-page theme-${activeService.themeId}`} style={{ '--accent-color': activeService.color }}>
      {/* THEMED AMBIENT GLOW AURAS */}
      <div className="service-ambient-glow service-aura-primary"></div>
      <div className="service-ambient-glow service-aura-secondary"></div>
      <div className="service-ambient-glow service-aura-tertiary"></div>

      {/* IMMERSIVE HERO BANNER */}
      <section className="service-hero-banner" style={{ backgroundImage: `url(${activeService.image})` }}>
        <div className="service-hero-overlay"></div>
        <div className="service-hero-container">
          <div className="service-hero-content">
            <div className="service-category-tag" style={{ borderLeft: `3px solid ${activeService.color}` }}>
              SERVICES
            </div>
            <h1 className="service-giant-title">{activeService.title}</h1>
            <p className="service-hero-tagline">{activeService.tagline}</p>
            {activeService.description && <p className="service-hero-desc">{activeService.description}</p>}
            
            <div className="service-hero-tech-row">
              {activeService.techStack.map((tech, idx) => (
                <span key={idx} className="tech-badge-pill">{tech}</span>
              ))}
            </div>
            
            <div className="service-hero-cta">
              <button onClick={handleCtaClick} className="service-cta-btn">
                {activeService.btnText} <ArrowUpRight size={18} className="cta-icon-pop" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CAPABILITIES SECTION */}
      {activeService.capabilities && (
        <CapabilitiesSection data={activeService.capabilities} color={activeService.color} />
      )}

      {/* SUB-SERVICES GRID SECTION (Adapted from Reference Screenshot) */}
      <section className="service-sub-services-section">
        <div className="sub-services-container">
          <div className="sub-services-header">
            <span className="sub-services-subtitle" style={{ color: activeService.color }}>EXPLORE DELIVERABLES</span>
            <h2 className="sub-services-title">Specialized {activeService.category} Solutions</h2>
            <p className="sub-services-intro">
              Discover our full-spectrum capabilities engineered to deliver unmatched efficiency, scale, and digital excellence.
            </p>
          </div>
          
          <div className="sub-services-grid">
            {activeService.subServices && activeService.subServices.map((sub, idx) => (
              <div key={idx} className="sub-service-card" style={{ '--card-accent': activeService.color }}>
                {/* HOVER ACCENT VIDEO LOOP OVERLAY (3D Technology Loop) */}
                {(sub.videoUrl || activeService.videoUrl) && (
                  <video 
                    className="card-hover-video"
                    src={sub.videoUrl || activeService.videoUrl}
                    loop
                    muted
                    playsInline
                    autoPlay
                  />
                )}
                <div className="card-hover-overlay"></div>
                
                {/* CARD CONTENT */}
                <div className="sub-service-card-content">
                  <div className="card-top-row">
                    <span className="card-index">{(idx + 1).toString().padStart(2, '0')}</span>
                    <ArrowUpRight className="card-arrow-icon" size={24} />
                  </div>
                  
                  <div className="card-body">
                    <h3 className="card-title">{sub.name}</h3>
                    <p className="card-description">{sub.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      {activeService.process && (
        <section className="service-process-section">
          <div className="process-container">
            <div className="process-header">
              <span className="process-eyebrow" style={{ color: activeService.color }}>HOW WE WORK</span>
              <h2 className="process-title">Our {activeService.category} Process</h2>
              <p className="process-intro">We follow a structured, transparent approach to deliver leading {activeService.category.toLowerCase()} services, ensuring quality, scalability, and timely delivery aligned with your business goals.</p>
            </div>
            <div className="process-steps-row">
              {activeService.process.map((step, idx) => (
                <ProcessStep key={idx} step={step} idx={idx} color={activeService.color} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FOOTER */}
      <footer className="service-details-footer">
        <p>© 2026 NSG IT. All Rights Reserved. Enforcing zero-trust software architectures globally.</p>
      </footer>
    </div>
  );
};

export default ServiceDetailPage;
