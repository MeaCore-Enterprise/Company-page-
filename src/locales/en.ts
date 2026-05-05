export default {
  meta: {
    title: 'MeaCore Digital Solutions',
    description: 'Innovative Software, Automation, and MVP Solutions',
  },
  nav: {
    services: 'Services',
    howWeWork: 'How We Work',
    portfolio: 'Portfolio',
    products: 'Products',
    pricing: 'Pricing',
    contact: 'Contact Us',
  },
  hero: {
    title: 'Digital Solutions to Propel Your Business',
    subtitle: 'We specialize in custom software development, process automation, and rapid MVP deployment to turn your vision into reality.',
    cta: {
      primary: 'Get Started',
      secondary: 'Our Services',
    },
  },
  services: {
    title: 'What We Offer',
    description: 'Our expertise lies in turning complex challenges into simple, elegant solutions that drive growth and efficiency for your business.',
    cards: [
      {
        title: 'Software Development',
        description: 'We build scalable and robust web applications tailored to your business needs, from simple websites to complex platforms.',
      },
      {
        title: 'Process Automation',
        description: 'Streamline your operations by automating repetitive tasks. We create custom bots and workflows to boost efficiency and reduce costs.',
      },
      {
        title: 'MVP Solutions',
        description: 'Launch your idea quickly with a Minimum Viable Product. We help you validate your concept and get to market faster with core features.',
      },
    ],
  },
  howWeWork: {
    title: 'How We Work',
    description: 'We follow a structured, transparent process designed to reduce risk and deliver results efficiently.',
    steps: [
      {
        title: 'Discovery',
        description: 'We analyze your idea, business goals, technical constraints, and timeline. No assumptions, no buzzwords—just clarity.',
      },
      {
        title: 'Solution Design',
        description: 'We define the architecture, scope, and tools required. You get a clear technical plan before any implementation starts.',
      },
      {
        title: 'Implementation',
        description: 'We build, iterate, and integrate. Clean code, scalable decisions, and constant progress visibility.',
      },
      {
        title: 'Iteration & Improvement',
        description: 'We refine based on feedback, optimize performance, and prepare the product for real-world usage or scaling.',
      },
    ],
  },
  portfolio: {
    title: 'Our Work in Action',
    description: 'We pride ourselves on creating intuitive and powerful applications. Here’s a glimpse into the quality and craftsmanship we bring to every project.',
  },
  products: {
    title: 'Our Products',
    description: 'We don’t just build for clients—we build for ourselves. Here we showcase internal tools, experiments, and platforms developed in-house to test ideas, architectures, and workflows.',
    subDescription: 'These projects demonstrate real engineering decisions, product thinking, and hands-on experience with modern stacks. No demos for hype. Just proof of work.',
    cards: [
      {
        title: 'MeaCore Launcher',
        description: 'The high-performance Minecraft launcher for Linux. Optimized, fast, and ad-free for the best gaming experience.',
      },
      {
        title: 'Coming Soon',
        description: 'We are actively developing revolutionary new tools. Check back soon to discover our next innovations.',
      },
      {
        title: 'Coming Soon',
        description: 'New products in active development. Our engineering team is building the future of software.',
      },
    ],
  },
  metrics: {
    title: 'Real-time Analytics',
    description: 'We integrate with modern data solutions like Firestore to provide you with live insights and powerful metrics, ensuring your application performs at its peak.',
    chart: {
      title: 'Live User Activity',
      description: 'This chart shows simulated real-time user traffic.',
    },
  },
  pricing: {
    title: 'Pricing Philosophy',
    description: 'Our pricing is transparent and flexible. The plans below represent starting points, not rigid packages. Final pricing depends on scope, complexity, and timeline.',
    principles: [
      'Clear deliverables',
      'No hidden costs',
      'Solutions that actually scale',
    ],
    customEngagement: 'If your needs don’t fit a box, we design a custom engagement.',
    mostPopular: 'Most Popular',
    plans: [
      {
        name: 'Basic',
        priceDescription: 'Starting from',
        description: 'Best for small businesses or early ideas. Landing pages or simple websites, basic automation, prototypes. Ideal for validating ideas quickly.',
      },
      {
        name: 'Professional',
        priceDescription: 'Starting from',
        description: 'For growing products and internal tools. Custom web apps, process automation, dynamic dashboards, and MVP development.',
      },
      {
        name: 'Enterprise',
        price: 'Custom',
        description: 'For complex systems and long-term collaboration. Full-stack platforms, scalable architectures, and ongoing support.',
      },
    ],
    commissionsTitle: 'Fixed-Scope Services (Quick Wins)',
    commissionsDescription: 'For clients who want fast, well-defined deliverables: clear scope, fixed price, and fast delivery.',
    commissions: [
      {
        name: 'Landing Page',
        description: 'A single, conversion-focused page to launch your product.',
      },
      {
        name: 'Dashboard Mockup',
        description: 'A custom dashboard to visualize your key metrics.',
      },
      {
        name: 'Task Automation',
        description: 'A specific workflow automation to save you time.',
      },
      {
        name: 'Branding Assets',
        description: 'Business cards and digital assets for your company.',
      },
    ],
    requestQuote: 'Request Quote',
  },
  contact: {
    title: "Let's Build Together",
    description: 'Have a project in mind or just want to say hello? Drop us a line. We are excited to hear about your ideas and help you bring them to life.',
    form: {
      description: 'Fill out the form below to get in touch.',
      name: {
        label: 'Name',
        placeholder: 'Your Name',
        error: 'Name must be at least 2 characters.',
      },
      email: {
        label: 'Email',
        placeholder: 'your.email@example.com',
        error: 'Please enter a valid email address.',
      },
      message: {
        label: 'Message',
        placeholder: 'Tell us about your project...',
        error: 'Message must be at least 10 characters.',
      },
      submit: 'Send Message',
    },
    toast: {
      title: 'Message Sent!',
      description: "Thanks for reaching out. We'll get back to you soon.",
    },
  },
  footer: {
    tagline: 'Innovative Software, Automation, and MVP Solutions to propel your business into the future.',
    rights: 'All Rights Reserved.',
  },
} as const;
