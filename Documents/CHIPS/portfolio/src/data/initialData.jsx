import {
    Cpu,
    BarChart3,
    Lock,
    Zap,
    Brain,
    Flag,
    Coffee,
    Dumbbell,
    Car
} from 'lucide-react';

// --- BRAND COLOR MAP ---
export const BRAND_COLORS = {
    AMD: { color: 'text-red-400', bg: 'bg-red-900/20', border: 'border-red-500/30', accent: 'border-red-500' },
    Nvidia: { color: 'text-green-400', bg: 'bg-green-900/20', border: 'border-green-500/30', accent: 'border-green-500' },
    Apple: { color: 'text-gray-300', bg: 'bg-gray-800', border: 'border-gray-500/30', accent: 'border-gray-400' },
    Google: { color: 'text-slate-300', bg: 'bg-slate-800', border: 'border-slate-500/30', accent: 'border-slate-400' },
    Meta: { color: 'text-blue-400', bg: 'bg-blue-900/20', border: 'border-blue-500/30', accent: 'border-blue-500' },
    Hardware: { color: 'text-purple-400', bg: 'bg-purple-900/20', border: 'border-purple-500/30', accent: 'border-purple-500' },
};

// --- BRAND SYMBOLS (Lucide Icons) ---
export const BRAND_SYMBOLS = {
    AMD: Cpu,
    Nvidia: BarChart3,
    Apple: Lock,
    Google: Zap,
    Meta: Brain,
    Hardware: Cpu,
};

// --- PERSONAL INTEREST ICONS MAP ---
export const PERSONAL_ICONS = {
    Flag: Flag,
    Coffee: Coffee,
    Dumbbell: Dumbbell,
    Car: Car
};

export const INITIAL_DATA = {
    profile: {
        name: "JAGADEESH PULI",
        role: "AI Product Manager",
        tagline: "Scaling AI Requires Three Languages.",
        mission: "A translator at the intersection of engagement, physics, and profit.",
        longMission: "I prevent software ambition from crashing into hardware constraints. I build AI products that Google/Meta love (Retention) using the efficiency Nvidia/AMD demand (Unit Economics), all while ensuring the numbers work (Business Viability).",
        email: "jagadeeshpuli.one@gmail.com",
        footer: "© 2025 JAGADEESH PULI",
        resumeUrl: "https://drive.google.com/file/d/13h3mhC-TsiAXReMxWuv9CrnNu-w3JOh6/view?usp=sharing"
    },
    stats: [
        { value: "40%", label: "Compute Costs Cut", desc: "Hardware-Aware Ops" },
        { value: "2.3x", label: "Discovery Lift", desc: "GenAI Personalization" },
        { value: "92%", label: "Inference Score", desc: "Quality at Scale" }
    ],
    competencies: [
        { area: "Software (Google/Meta)", focus: "Engagement & Growth", color: "blue" },
        { area: "The Bridge (Me)", focus: "Unit Economics & Feasibility", color: "white" },
        { area: "Hardware (Nvidia/AMD)", focus: "Efficiency & Utilization", color: "purple" }
    ],
    personal: [
        { label: "Favorite Driver", value: "Max Verstappen", icon: "Flag", color: "text-orange-500" },
        { label: "Fuel", value: "Black Coffee", icon: "Coffee", color: "text-amber-600" },
        { label: "Routine", value: "Fitness & Gym", icon: "Dumbbell", color: "text-blue-400" },
        { label: "Passion", value: "Automobiles", icon: "Car", color: "text-red-400" }
    ],
    experience: [
        {
            role: "Product Manager (GenAI)",
            company: "Holiday Channel",
            dates: "Jul 2025 - Present",
            metrics: ["40% Cost Reduction", "2.3x Visibility Lift", "35% Conv. Boost"],
            bullets: [
                "Led the 0 to 1 launch of a GenAI recommendation system to solve the product discovery problem, delivering a solution that increased item visibility by 2.3× and boosted sales conversions by 35%.",
                "Designed a hybrid Google Vision-Llama pipeline to reduce compute costs by 40% and improve latency by 2x.",
                "Executed product roadmap delivery and lifecycle management by bridging engineering constraints with business KPIs, ensuring execution excellence and consistent release velocity.",
                "Collaborated with Sales and Marketing teams to create product value propositions and ROI dashboards, aligning AI capabilities with go-to-market activities and outbound growth strategies."
            ]
        },
        {
            role: "Assoc. Product Manager (Capstone)",
            company: "Stanford Continuing Studies",
            dates: "Oct 2025 - Nov 2025",
            metrics: ["150% Basket Size (Proj)", "Real-time Inference", "Zero-Shot Detection"],
            bullets: [
                "Recognized that high-friction search was causing significant user drop-off during the cart-building process.",
                "Built 'Smart Cart', a photo-to-cart automation feature using computer vision to identify pantry staples instantly.",
                "Eliminated the search bar for repeat items, projected to increase basket size by 150% through friction reduction."
            ]
        },
        {
            role: "Product Manager (Leadership)",
            company: "PM Club - IIT Chicago",
            dates: "Oct 2024 - May 2025",
            metrics: ["5 Products Shipped", "35% Faster Cycles", "10-Person Team"],
            bullets: [
                "Revitalized a stagnant student organization by implementing agile rituals and structured brainstorming sessions.",
                "Led a 10-person cross-functional team to successfully ship 5 student-led products within a single academic year."
            ]
        },
        {
            role: "Product Mgmt Intern",
            company: "VolkSoft Technologies",
            dates: "Jun 2024 - Aug 2024",
            metrics: ["22% Retention Lift", "28% Time Saved", "Data-Led Roadmap"],
            bullets: [
                "Observed low engagement with the main analytics dashboard, identifying that users were seeking answers, not just raw data.",
                "Redesigned the UX to surface 'Actionable Insights' rather than just raw charts, addressing low user engagement.",
                "Achieved a 22% lift in retention and saved users 28% of their time by reducing analysis paralysis."
            ]
        }
    ],
    projects: [
        {
            title: "Project Halo: GTM Strategy for Ryzen Embedded 9000",
            id: 'halo',
            type: "Product Strategy & GTM Lead",
            category: "case-study",
            hook: "Positioning the Ryzen 9000 as the industry's first 'Reasoning Engine' for autonomous robotics.",
            brand: "AMD",
            description: "The industrial robotics 'Cognitive Gap': Market needs generalized reasoning, but cloud AI is too slow (>500ms latency) and current edge hardware lacks the performance (>40 TOPS needed for 7B models), leaving robots 'smart but stuck'.",
            tags: ["GTM Strategy", "Edge AI positioning", "Industrial Robotics", "Silicon Roadmap"],
            techStack: ["Ryzen Embedded 9000 (Zen 5)", "XDNA 2 NPU (50 TOPS)", "VLA Models", "Simulation Strategy", "Competitive Benchmarking"],
            link: "https://drive.google.com/file/d/1Q4j1sf3F0AukGvQY2InNBle--khHwSB5/view?usp=drive_link",
            images: [
                { src: "/assets/case-studies/halo/halo_strategic segment analysis.png", caption: "Strategic Segment Analysis: Identifying the 'Cognitive Gap'" },
                { src: "/assets/case-studies/halo/halo_competitor analysis.png", caption: "Competitor Analysis: Ryzen Embedded 9000 vs. Incumbents" },
                { src: "/assets/case-studies/halo/halo_tco.png", caption: "TCO Analysis: Long-term Value Proposition" }
            ],
            content: [
                { type: 'header', value: 'The Problem' },
                { type: 'text', value: "The industrial robotics 'Cognitive Gap': Market needs generalized reasoning, but cloud AI is too slow (>500ms latency) and current edge hardware lacks the performance (>40 TOPS needed for 7B models), leaving robots 'smart but stuck'." },
                { type: 'header', value: 'Process' },
                {
                    type: 'list',
                    items: [
                        "**Developed GTM strategy** positioning the SoC not just as a CPU, but as a 'Generative AI Native' reasoning engine.",
                        "**Leveraged hardware superiority**: 50 TOPS NPU specifically designed for local Vision-Language-Action (VLA models).",
                        "**Created 'The Halo Playground'**: A browser-based simulation strategy for developers to test natural language control on virtual robots.",
                        "**Differentiated with enterprise longevity** (10-year support) and ECC memory critical for Tier 1 OEMs."
                    ]
                },
                { type: 'header', value: 'The Outcome' },
                { type: 'text', value: "Projected 34 TPS performance target based on NPU specs, enabling pause-free voice interaction (4.2x faster than Intel Core Ultra). Defined clear roadmap from Briefing (Q1) to Volume Ramp (Q3)." }
            ]
        },
        {
            title: "Industrial Edge: Winning the 'Brownfield' Market",
            id: 'brownfield',
            type: "Product & Strategy Analyst",
            category: "case-study",
            hook: "A techno-economic analysis proving a 52% cost reduction by consolidating AI and Legacy Control onto a single x86 architecture.",
            brand: "AMD",
            description: "Conducted a comprehensive teardown and competitive analysis of a target market, identifying a $1,050 BOM cost saving opportunity.",
            tags: ["Industrial Automation", "Cost Consolidation", "Semiconductor Strategy", "Brownfield Retrofit"],
            techStack: ["Ryzen Embedded V3000", "Real-Time Hypervisor", "Windows IoT (Legacy)", "Linux (AI)", "Computer Vision"],
            link: "https://drive.google.com/file/d/1tGVSD-d0EPtsaqdrTHrA3w1fMNTiVMPw/view?usp=drive_link",
            images: [
                { src: "/assets/case-studies/brownfield/brownfield_challenge.jpg", caption: "The Compatibility Wall: Legacy x86 vs. Modern AI" },
                { src: "/assets/case-studies/brownfield/brownfield_solution.jpg", caption: "Virtualization Strategy: Single-Chip Consolidation" },
                { src: "/assets/case-studies/brownfield/brownfield_impact.jpg", caption: "TCO Analysis: 52% BOM Cost Reduction" }
            ],
            content: [
                { type: 'header', value: 'The Problem' },
                { type: 'text', value: "While the industry focuses on 'Greenfield' AI, 75% of the market is 'Brownfield.' These facilities face a 'Compatibility Wall' (20 years of x86 legacy code doesn't run on ARM) and a 'Two-Chip Tax' (requiring both an Intel IPC for control and NVIDIA Jetson for AI), creating massive friction for adoption." },
                { type: 'header', value: 'Process' },
                {
                    type: 'list',
                    items: [
                        "**Proposed strategic pivot to Ryzen Embedded V3000** to bridge Legacy Control and Future AI.",
                        "**Implemented Real-Time Hypervisor virtualization** to slice the chip: Slice 1 runs Windows IoT (Legacy Control), Slice 2 runs Linux (Computer Vision).",
                        "**Positioned product as a total 'System Replacement,'** eliminating the need for a separate Industrial PC."
                    ]
                },
                { type: 'header', value: 'The Outcome' },
                { type: 'text', value: "Modeled a 52% Cost Reduction ($1,050 savings per robot) by eliminating the secondary IPC. Reduced Total BOM from $2,000 (Nvidia+Intel) to $950 (AMD), while improving reliability by removing multi-chip failure points." }
            ]
        },
        {
            title: "Project Helix: Longitudinal Anomaly Detection",
            id: 'helix',
            type: "Product Lead",
            category: "case-study",
            hook: "Shifting wearable health monitoring from reactive tracking to predictive guidance using on-device Time-Series Transformers.",
            brand: "Apple",
            description: "Designed a system that shifts the value proposition from 'Outputting Data' to 'Actionable Guidance' using on-device PatchTST models.",
            tags: ["Health Tech", "Wearable AI", "Edge Computing", "Privacy-Preserving"],
            techStack: ["Apple Watch S10", "Neural Engine", "PatchTST", "CoreML", "SwiftUI"],
            link: "https://drive.google.com/drive/folders/1_vlo3nm0o1nYFaVV9bsrGIV6MICNN4Qz?usp=drive_link",
            images: [
                { src: '/assets/case-studies/helix/helix_arch.png', caption: 'The Guardian Paradigm: PatchTST on Apple Watch S10' }
            ],
            content: [
                { type: 'header', value: 'The Challenge' },
                { type: 'text', value: "Current market leaders (Whoop, Oura, Apple Watch) rely on descriptive statistics that act as historians rather than guardians. The 'Latency Gap' means notifications often arrive 24-48 hours too late. We identified the 'Helix Gap': subtle biometric decoupling during incubation that traditional algorithms miss." },
                { type: 'header', value: 'The Solution' },
                {
                    type: 'list',
                    items: [
                        "**The 'Guardian' Paradigm**: Shifted value prop from data output to actionable guidance.",
                        "**On-Device AI**: Deployed Patch Time-Series Transformer (PatchTST) on Apple Watch S10 Neural Engine.",
                        "**Longitudinal Analysis**: Analyzes a 14-day context window to spot non-linear relationships up to 24 hours before symptoms.",
                        "**Hardware Optimization**: Used Int8 Quantization to fit model in high-speed SRAM, bypassing energy-intensive DRAM."
                    ]
                },
                { type: 'header', value: 'Impact' },
                { type: 'text', value: "Moved prediction window from 0h to -24h (Pre-symptomatic). Reduced inference costs by 40% via cloud elimination. 100% Privacy with zero-knowledge architecture." }
            ]
        },
        {
            title: "Project Aether: Adaptive Hybrid-Compute Architecture",
            id: 'aether',
            type: "Product Strategy Lead - AI Core",
            category: "technical",
            hook: "Solving the battery-intelligence conflict in Pixel 10 through physics-aware AI routing.",
            brand: "Google",
            description: "Mobile AI faces three hard physical constraints: 1) The '5G Tax' (Modems consume 350x more power in connected states), 2) The Thermal Ceiling (SoC throttling >40°C), and 3) The Latency Gap (330ms cloud delay too slow for real-time).",
            tags: ["Hybrid-Compute", "Mobile AI Strategy", "Physics-Aware Routing", "Edge vs Cloud"],
            techStack: ["LiteRT Router", "Gemini Nano (Edge NPU)", "Cloud TPU", "LoRA Adapters", "Device Telemetry API"],
            link: "https://drive.google.com/drive/folders/1EkXrw9S_GWAbucljHcZK4oTcaQcHFDir?usp=drive_link",
            images: [
                { src: "/assets/projects/aether/aether_arch.jpg", caption: "Adaptive Hybrid-Compute Architecture: Radio-Aware Routing Logic" }
            ],
            content: [
                { type: 'header', value: 'The Problem' },
                { type: 'text', value: "Mobile AI faces three hard physical constraints: 1) The '5G Tax' (Modems consume 350x more power in connected states), 2) The Thermal Ceiling (SoC throttling >40°C), and 3) The Latency Gap (330ms cloud delay too slow for real-time)." },
                { type: 'header', value: 'Process' },
                {
                    type: 'list',
                    items: [
                        "**Implemented 'Radio-Aware' Routing** via a LiteRT logic layer that intercepts AI intents based on realtime device telemetry.",
                        "**Logic Rule A**: If Battery <20% & on 5G → Force Edge NPU to save 45mAh wake-up cost.",
                        "**Logic Rule B**: If Skin Temp >38°C → Force Cloud TPU to prevent local thermal runaway.",
                        "**Developed 'Retention Moat'** using on-device LoRA adapters for personalized, non-replicable user experiences."
                    ]
                },
                { type: 'header', value: 'The Outcome' },
                { type: 'text', value: "Modeled +14% increase in AI-Adjusted Screen On Time (ASOT) based on power consumption benchmarks, reduced 5G modem wakeups to <5/hr, and achieved ~60% traffic offload to Edge NPU." }
            ]
        },
        {
            title: "Project Sightline: Passive Context Snapping",
            id: 'sightline',
            type: "Product Lead / Creator",
            category: "case-study",
            hook: "Solving the 'Drawer Effect' in smart glasses by shifting from reactive voice commands to proactive 'Head-Dwell' intent detection.",
            brand: "Meta",
            description: "Proposed a paradigm shift to Proactive (Intent-First) interaction using Head Pose Stability as a proxy for user interest.",
            tags: ["AR/VR", "Wearable AI", "Computer Vision", "Proactive UI"],
            techStack: ["Smart Glasses", "Llama 3 Multi-Modal", "Low-Power DSP", "6-DoF Gyroscope", "Privacy LED"],
            link: "https://drive.google.com/drive/folders/1QmqAn-pmC_L8D4Ncv3RVGc_JP16wBBtu?usp=drive_link",
            images: [
                { src: '/assets/case-studies/sightline/sightline_userflow.png', caption: "User Journey: From Passive Dwell to Active Assistance" },
                { src: '/assets/case-studies/sightline/Sightline_workflow.png', caption: "The 'Whisper' Workflow: Proactive Intent Detection" }
            ],
            content: [
                { type: 'header', value: 'The Challenge' },
                { type: 'text', value: "Despite initial excitement, smart glasses face a significant drop in Daily Active Users (DAU) after the 'Honeymoon Phase' (Day 14). The 'Drawer Effect' is caused by high cognitive load (remembering commands), social friction (awkward voice commands in public), and latency." },
                { type: 'header', value: 'The Solution' },
                {
                    type: 'list',
                    items: [
                        "**Proactive 'Head-Dwell'**: Using Head Pose Stability (>3s dwell) as a proxy for user interest.",
                        "**The 'Whisper' Workflow**: Low-power DSP monitors 6-DoF Gyroscope -> ISP wakes for saliency check -> Privacy LED pulses -> Local audio whisper asks 'Translate this?'.",
                        "**Intent Gate**: User accepts via a Silent Nod (Pitch > 15°), waking high-power radios for cloud processing.",
                        "**Privacy Hardwire**: Specific LED pulse pattern signals image capture to bystanders."
                    ]
                },
                { type: 'header', value: 'Impact' },
                { type: 'text', value: "Zero-Friction Utility for scenarios like reading foreign signs. Targeted 'Day-30 Retention %' by making the device an active assistant. Implemented 'Exponential Backoff' to prevent nagging." }
            ]
        },
        {
            title: "Edge Inference Optimization: Infrastructure Consolidation",
            id: 'edge',
            type: "AI Engineer / Performance Architect",
            category: "technical",
            hook: "Achieving a 6.9x efficiency gain by migrating CV workloads from CPU to GPU.",
            brand: "Hardware",
            description: "Legacy x86 CPU infrastructure hit a 'Scalability Wall': exponential degradation beyond 80 concurrent users, unacceptable 12ms latency lag, and unsustainable physical footprint expansion.",
            tags: ["Infrastructure Consolidation", "GPU Acceleration", "Latency Reduction", "TCO Optimization"],
            techStack: ["NVIDIA T4 GPU", "ONNX Runtime (Opset 18)", "MobileNetV2", "Docker", "Kubernetes", "Prometheus"],
            link: "https://drive.google.com/file/d/1Fi6Mr9eVWCjlyj47hOZ6brRG8lpr3w5S/view?usp=drive_link",
            images: [
                { src: "/assets/projects/edge/edge_stress 1.png", caption: "Infrastructure Consolidation: CPU vs GPU Performance Benchmarks" }
            ],
            content: [
                { type: 'header', value: 'The Problem' },
                { type: 'text', value: "Legacy x86 CPU infrastructure hit a 'Scalability Wall': exponential degradation beyond 80 concurrent users, unacceptable 12ms latency lag, and unsustainable physical footprint expansion." },
                { type: 'header', value: 'Process' },
                {
                    type: 'list',
                    items: [
                        "**Executed strategic migration** of MobileNetV2 to accelerated hardware using ONNX Runtime.",
                        "**Deployed NVIDIA T4 nodes** for FP32 inference, replacing general-purpose CPU compute.",
                        "**Achieved massive server consolidation ratio**: 1 GPU Node replaced ~7 Standard CPU Nodes.",
                        "**Designed resilient architecture** to maintain 'always-on' stability even at 3x projected peak load."
                    ]
                },
                { type: 'header', value: 'The Outcome' },
                { type: 'text', value: "Simulation benchmarks indicate a 6.9x efficiency gain and 85% latency reduction in the proposed architecture. Throughput increased from 83 to 573 FPS per node." }
            ]
        },
        {
            title: "Carbon Co. Market Entry: Scaling Green Hydrogen",
            id: "carbon",
            type: "STRATEGY CONSULTING",
            category: "case-study",
            hook: "Developing a commercialization roadmap to capture the $1B ammonia cracking market.",
            brand: "Nvidia",
            description: "Runner-Up, 2025 Windy City Case Competition. Defined the manufacturing and entry strategy for a pre-revenue CleanTech startup.",
            tags: ["CleanTech", "Manufacturing Strategy", "IRA Policy", "Supply Chain"],
            techStack: ["Financial Modeling", "Market Sizing", "Policy Analysis (IRA 45V)", "Supply Chain Ops"],
            link: "https://drive.google.com/drive/folders/1gAsa8nTLYG4J_1CoqvNv_BKShXmXZDPC?usp=sharing",
            images: [
                { src: "/assets/case-studies/carbonco/carbon_radar.png", caption: "Competitive Analysis: Technical Superiority vs. Incumbents" },
                { src: "/assets/case-studies/carbonco/carbon_revenue.png", caption: "Financial Projections: 10-Year Revenue & Payback Period" }
            ],
            content: [
                { type: 'header', value: "The Commercialization Void" },
                { type: 'text', value: "Carbon Co. had proprietary technology but lacked a path to market. Key barriers included the 'Scale-Up Risk' (licensing vs. manufacturing) and the technical dominance of inefficient incumbent solutions (Starfire, H2U)." },
                { type: 'header', value: "Process" },
                {
                    type: 'list',
                    items: [
                        "**Formulated a 'Self-Manufacturing' strategy** to maximize IP control, targeting a 5-Year Payback Period.",
                        "**Leveraged Policy**: Prioritized US market entry to utilize the IRA 45V Tax Credit, reducing production costs by 73% ($7.5 to $2/kg).",
                        "**Operational Pivot**: Recommended an Assemble-to-Order (ATO) model to reduce inventory risk while enabling modular customization.",
                        "**Technical Differentiation**: Positioned the product as a superior alternative with 9.5 kWh/kg energy consumption (vs industry std 10.1)."
                    ]
                },
                { type: 'header', value: "Outcome" },
                { type: 'text', value: "Projected $146M Cumulative Revenue over 10 years with a 95% footprint reduction (requiring only 6-22 tubes vs. 400). Secured strategic ecosystem maps with Argonne National Lab and KBR." }
            ]
        }
    ],
    skills: {
        strategic: [
            "User Research", "Market Analysis", "Roadmapping", "Prioritization",
            "Stakeholder Mgmt", "Agile/Scrum", "GTM Strategy", "AI Ethics & Safety"
        ],
        technical: [
            "Python", "SQL", "React/JS", "RAG Architecture",
            "LLM Fine-tuning", "Vector Databases", "Prompt Engineering", "API Integration"
        ],
        tools: [
            "Jira/Linear", "Figma", "Tableau", "Postman",
            "VS Code", "Docker", "AWS/GCP", "Hugging Face"
        ]
    },
    socials: [
        { name: "LinkedIn", url: "https://www.linkedin.com/in/jagadeesh-puli", icon: "Linkedin", link: "https://www.linkedin.com/in/jagadeesh-puli" },
        { name: "X / Twitter", url: "https://x.com/jagadeeshpuli12", icon: "Twitter", link: "https://x.com/jagadeeshpuli12" },
        { name: "Instagram", url: "https://www.instagram.com/jagadeesh__puli/", icon: "Instagram", link: "https://www.instagram.com/jagadeesh__puli/" }
    ],
    education: [
        {
            degree: "Certification in Generative AI Product Management",
            school: "Stanford University – Continuing Studies",
            location: "Stanford, CA",
            date: "Nov 2025"
        },
        {
            degree: "Master of Computer Science (Specialization: Data Analytics)",
            school: "Illinois Institute of Technology",
            location: "Chicago, IL",
            date: "May 2025"
        }
    ],
    certifications: [
        {
            name: "Generative AI for Product Managers",
            issuer: "Stanford University",
            image: "/assets/certificates/Generative%20AI%20for%20Product%20Managers%20from%20Stanford.png"
        },
        {
            name: "Generative AI for Business Leaders",
            issuer: "LinkedIn",
            image: "/assets/certificates/Generative%20AI%20for%20Business%20leaders%20from%20Linkedin.jpg"
        },
        {
            name: "AI Evaluations",
            issuer: "LinkedIn",
            image: "/assets/certificates/AI%20Evaluations%20from%20LinkedIn.jpg"
        },
        {
            name: "AI for Product Management",
            issuer: "Pendo",
            image: "/assets/certificates/AI%20for%20Product%20Management%20from%20Pendo%20.png"
        }
    ],
    contact: {
        cta: "Let's Solve The Hardest Problems.",
        sub: "You have the ambition (or the silicon). I have the roadmap.",
        email: "jagadeeshpuli.one@gmail.com"
    }
};
