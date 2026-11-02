export const siteContent = {
  brand: {
    logo: { src: '/assets/sarvas-logo.png', alt: 'Sarvas Multi Services logo' },
    tagline: 'Crafting Solutions, Creating Comfort',
    copyright: '© 2026 Sarvas Multi Services',
  },

  nav: {
    links: [
      { label: 'Services', href: '#services' },
      { label: 'Projects', href: '#projects' },
      { label: 'Checklist', href: '#checklist' },
      { label: 'About', href: '#about' },
    ],
    cta: { label: 'Request a Site Survey', href: '#survey' },
    menuLabel: 'Open menu',
    closeLabel: 'Close menu',
  },

  hero: {
    label: 'Healthcare Infrastructure / Government Tenders',
    headlineLines: ['We read the tender', 'before we lay the pipe.'],
    headline: 'We read the tender before we lay the pipe.',
    paragraph:
      'Medical gas pipelines, oxygen generation systems, hospital elevators, fire safety and HVAC infrastructure, planned around specifications, site conditions and operational requirements.',
    primaryCta: { label: 'Request a Site Survey', href: '#survey' },
    secondaryCta: { label: 'View Services', href: '#services' },
    principles: {
      title: 'Our Working Principles',
      items: [
        'Tender specifications reviewed before execution',
        'Site conditions considered during planning',
        'Work coordinated around facility operations',
        'Testing and documentation considered at handover',
      ],
    },
    chips: ['Tender Specifications', 'System Coordination', 'Testing & Documentation'],
    diagram: {
      sheetTitle: 'PIPELINE LAYOUT OVERVIEW',
      company: 'SARVAS MULTI SERVICES',
      sheet: 'MG-001',
      rev: '01',
      disclaimer: 'Illustrative technical graphic, not an actual engineering drawing.',
      scaleLabel: 'SCALE',
    },
  },

  ticker: {
    items: [
      'Medical Gas Pipelines',
      'Oxygen Generation',
      'Vacuum and Medical Air',
      'Hospital Elevators',
      'Fire Safety',
      'HVAC',
      'Turnkey Healthcare Projects',
      'Testing and Commissioning',
    ],
  },

  services: {
    id: 'services',
    label: '01 / What We Build',
    title: 'Five systems. One accountable contractor.',
    items: [
      {
        key: 'medical-gas',
        icon: 'Droplet',
        title: 'Medical Gas Pipelines',
        description: 'Oxygen, vacuum and medical air pipeline systems for healthcare facilities.',
        href: '#project-medical-gas',
      },
      {
        key: 'oxygen',
        icon: 'Wind',
        title: 'Oxygen Generation Plants',
        description: 'On-site oxygen generation systems designed around facility demand and backup requirements.',
        href: '#project-oxygen',
      },
      {
        key: 'elevators',
        icon: 'ArrowUpDown',
        title: 'Hospital Elevators',
        description: 'Passenger, bed and stretcher elevators for hospitals and healthcare buildings.',
        href: '#project-elevators',
      },
      {
        key: 'fire',
        icon: 'Flame',
        title: 'Fire Safety',
        description: 'Fire detection, alarm and suppression systems for healthcare infrastructure.',
        href: '#survey',
      },
      {
        key: 'hvac',
        icon: 'Fan',
        title: 'HVAC',
        description: 'Ventilation and air-conditioning systems for hospitals, operating theatres and critical areas.',
        href: '#survey',
      },
    ],
    learnMore: 'Learn more',
  },

  projects: {
    id: 'projects',
    label: '02 / Systems and Applications',
    title: 'Healthcare Infrastructure. Three System Categories.',
    paragraph:
      'An overview of the infrastructure systems we work with, from medical gas distribution to centralized plant and hospital elevators.',
    notice: 'These are illustrative system categories, not verified completed projects.',
    items: [
      {
        id: 'project-medical-gas',
        index: '01',
        category: 'Medical Gas Infrastructure',
        title: 'Medical Gas Pipeline Infrastructure',
        quote: 'Reliable medical gas distribution begins with a clear understanding of the facility and its requirements.',
        considerations: [
          'Pipeline routing and system requirements',
          'Coordination with hospital operations',
          'Medical gas outlet and distribution planning',
        ],
        description:
          'Medical gas infrastructure involves coordinated pipeline distribution, system planning, and careful consideration of facility requirements.',
        illustration: 'medical-gas',
        figureLabel: 'FIG. 01 / MEDICAL GAS DISTRIBUTION',
        figureNote: 'ILLUSTRATIVE',
      },
      {
        id: 'project-oxygen',
        index: '02',
        category: 'Oxygen Generation',
        title: 'Central Oxygen Generation and Medical Air Systems',
        quote:
          'Centralized plant systems require careful coordination between demand, distribution and backup provisions.',
        considerations: [
          'Oxygen generation and distribution requirements',
          'Plant location and service access',
          'Integration with medical air and vacuum systems',
        ],
        description:
          'Centralized oxygen generation and medical air systems support healthcare facilities through coordinated plant and distribution infrastructure.',
        illustration: 'oxygen',
        figureLabel: 'FIG. 02 / CENTRAL PLANT LAYOUT',
        figureNote: 'ILLUSTRATIVE',
      },
      {
        id: 'project-elevators',
        index: '03',
        category: 'Hospital Elevators',
        title: 'Hospital Passenger and Bed Elevators',
        quote: 'Hospital elevator planning begins with the movement of patients, staff and essential equipment.',
        considerations: [
          'Passenger and bed movement requirements',
          'Shaft dimensions and building conditions',
          'Coordination with occupied facility areas',
        ],
        description:
          'Hospital elevator systems require careful consideration of patient movement, building constraints and operational requirements.',
        illustration: 'elevator',
        figureLabel: 'FIG. 03 / SHAFT SECTION',
        figureNote: 'ILLUSTRATIVE',
      },
    ],
  },

  approach: {
    id: 'approach',
    label: '03 / Our Approach',
    title: 'Every detail matters at handover.',
    paragraph:
      'Healthcare infrastructure requires coordination across specifications, site conditions, installation requirements and documentation. Our approach is built around understanding these requirements before work begins.',
    steps: [
      {
        title: 'Tender Review',
        description: 'Review project requirements, specifications and technical documentation.',
      },
      {
        title: 'Site Assessment',
        description: 'Understand site conditions, drawings, access requirements and operational constraints.',
      },
      {
        title: 'System Execution',
        description: "Plan installation and coordinate infrastructure work with the facility's requirements.",
      },
      {
        title: 'Testing & Handover',
        description: 'Consider verification, documentation and handover requirements throughout the project.',
      },
    ],
  },

  survey: {
    id: 'survey',
    label: '04 / Site Survey Request',
    title: 'Request a Site Survey.',
    paragraph:
      'Every engagement starts with a site survey. We visit, review your drawings, and prepare a written proposal based on the project requirements.',
    noObligation: 'No obligation.',
    steps: [
      {
        title: 'We confirm the visit',
        description: 'A discussion to understand the facility, project scope and site contact.',
      },
      {
        title: 'On-site survey',
        description: 'Review the site conditions, available drawings and infrastructure requirements.',
      },
      {
        title: 'Written proposal',
        description: 'Prepare a proposal based on the project scope and technical requirements.',
      },
    ],
    form: {
      title: 'Site Survey Details',
      fields: {
        facilityName: { label: 'Facility Name', placeholder: 'e.g. District Hospital' },
        facilityType: {
          label: 'Facility Type',
          placeholder: 'Select facility type',
          options: ['Government Hospital', 'Medical College', 'Private Hospital', 'Healthcare Institution', 'Other'],
        },
        serviceNeeded: {
          label: 'Service Needed',
          placeholder: 'Select service',
          options: [
            'Medical Gas Pipelines',
            'Oxygen Generation',
            'Vacuum and Medical Air',
            'Hospital Elevators',
            'Fire Safety',
            'HVAC',
            'Multiple Systems',
            'Other',
          ],
        },
        preferredWeek: {
          label: 'Preferred Week',
          placeholder: 'Select a timeframe',
          options: ['This Week', 'Next Week', 'Within a Month', 'Flexible'],
        },
        email: { label: 'Email', placeholder: 'name@facility.org' },
        notes: { label: 'Notes', placeholder: 'Share drawings availability, site contact or any constraints' },
      },
      errors: {
        required: 'This field is required.',
        email: 'Enter a valid email address.',
      },
      submit: 'Request Site Survey',
      footnote: 'No commitment required.',
      preview: 'This form is a visual preview only. Nothing has been sent.',
    },
  },

  checklist: {
    id: 'checklist',
    label: '05 / Healthcare Tender Resource',
    title: 'The Healthcare Tender Checklist.',
    document: {
      title: 'Healthcare Tender Checklist',
      label: 'Tender Preparation / Checklist',
      rows: [
        'Eligibility criteria matched to documents',
        'EMD and bid security requirements',
        'Technical bid documents',
        'Applicable standards and specifications',
        'Performance security requirements',
        'Completion period and delay penalties',
        'Defect liability terms',
        'Corrigenda tracking',
      ],
    },
    download: {
      title: 'Download Our Healthcare Tender Checklist',
      paragraph:
        'A practical checklist to help organize the documents and requirements commonly encountered during healthcare infrastructure tender preparation.',
      cta: 'Download Free Checklist',
      note: 'No sign-up. No email required.',
      unavailable: 'The downloadable document is not published yet.',
    },
  },

  about: {
    id: 'about',
    label: '06 / About',
    title: 'Healthcare infrastructure, delivered by tender.',
    paragraphs: [
      'Sarvas Multi Services works in healthcare infrastructure, including medical gas pipelines, oxygen generation, hospital elevators, fire safety and HVAC systems.',
      'Our approach emphasizes understanding project requirements, reviewing available documentation and coordinating infrastructure work around the needs of healthcare facilities.',
    ],
    tiles: [
      {
        icon: 'FileText',
        title: 'Documentation First',
        description: 'Understand the specifications and project requirements before work begins.',
      },
      {
        icon: 'ClipboardCheck',
        title: 'Testing Before Handover',
        description: 'Consider verification and documentation as part of the project process.',
      },
      {
        icon: 'Building2',
        title: 'Work Around Operations',
        description: 'Plan infrastructure activities with attention to occupied healthcare environments.',
      },
    ],
  },

  cta: {
    title: 'Ready to scope your hospital project?',
    primary: { label: 'Request a Site Survey', href: '#survey' },
    secondary: { label: 'Explore Services', href: '#services' },
  },

  footer: {
    links: [
      { label: 'Services', href: '#services' },
      { label: 'Projects', href: '#projects' },
      { label: 'Checklist', href: '#checklist' },
      { label: 'About', href: '#about' },
    ],
  },
} as const;
