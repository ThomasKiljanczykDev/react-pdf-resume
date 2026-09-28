import type { ReactNode } from 'react';

import { Link } from '@react-pdf/renderer';

import type { DetailedExperienceEntryProps } from '@/resume/DetailedExperience/DetailedExperienceEntry';
import type { EducationEntryProps } from '@/resume/Education/EducationEntry';
import type { ExperienceEntryProps } from '@/resume/Expierience/ExpierienceEntry';
import linkStyle from '@/resume/misc/linkStyle';
import type { PreviousExperienceEntryProps } from '@/resume/PreviousExpierience/PreviousExpierienceEntry';
import type { SkillEntryProps } from '@/resume/Skills/SkillEntry';

const educationData: EducationEntryProps[] = [
    {
        school: 'Poznan University of Technology',
        degree: 'M.Eng',
        graduationDate: '09/2022',
        details: [
            'Contributed to ProcessM project (grant no. LIDER/14/0086/L-10/18/NCBR/2019)',
            'Speciality - Intelligent Internet Technologies (AI, web development)'
        ]
    },
    {
        school: 'Poznan University of Technology',
        degree: 'B.Eng',
        graduationDate: '02/2021',
        details: [
            "Received the Poznan University of Technology Rector's Scholarship",
            'Speciality - Security of IT Systems'
        ]
    }
];

const experienceData: ExperienceEntryProps[] = [
    {
        company: 'Relativity',
        date: '12/2025 - Present',
        details: [
            'Migrating a legacy .NET Framework and Angular app to .NET 10 and React microfrontends as part of a Cloud Native Transformation',
            'Driving code quality in an AI-assisted workflow through code reviews, documentation and agent guidelines (AGENTS.md)',
            'Building robust .NET backends and polished, animated React frontends'
        ],
        position: 'Senior Software Engineer'
    },
    {
        company: 'Deltologic',
        date: '12/2025 - Present',
        details: [
            'Migrated a production database from RDS SQL Server to Aurora PostgreSQL, cutting costs by over 60% and eliminating a storage I/O bottleneck',
            'Maintaining .NET and React apps; driving AWS infrastructure improvements and cost optimization'
        ],
        position: 'Full Stack Software Engineer Contractor (.Net, Node.js, React, AWS)'
    },
    {
        company: 'Deltologic',
        date: '07/2023 - 11/2025',
        details: [
            "Led engineering on an AWS-based .NET and React project, coordinating delivery with the client's other subcontractors",
            'Migrated multiple .NET Framework applications to .NET 8',
            'Improved observability by integrating Datadog via OpenTelemetry across a .NET/React stack',
            'Built Node.js projects, including AWS Lambda-based APIs and Chrome extensions',
            'Interviewed and assessed engineering candidates in technical recruitment'
        ],
        position: 'Senior Full Stack Software Engineer (.Net, Node.js, React, AWS)'
    },
    {
        company: 'Freelance',
        date: '10/2024 - Present',
        details: [
            'Building custom .NET, TypeScript and React web apps and APIs end-to-end: requirements, architecture, deployment and maintenance'
        ],
        position: 'Freelance Software Engineer'
    },
    {
        company: 'Capgemini',
        date: '04/2022 - 06/2023',
        details: [
            'Developed and maintained an ASP.NET MVC (.NET Framework) application',
            'Introduced CI/CD pipelines and negotiated adoption of JetBrains tooling with the client'
        ],
        position: 'Full Stack Software Engineer (.Net)'
    },
    {
        company: 'Inetum',
        date: '01/2021 - 03/2022',
        details: [
            'Built multiple .NET Core microservices and web APIs; maintained a .NET Framework app with React frontend',
            'Created a standardized Android Virtual Device config mirroring the production device for team-wide Xamarin development'
        ],
        position: 'Junior Full Stack Software Engineer (.Net, React)'
    }
];

const detailedExperienceData: DetailedExperienceEntryProps[] = [
    {
        company: 'Relativity',
        position: 'Senior Software Engineer',
        location: 'Cracow (Remote)',
        date: '12/2025 - Present',
        details: [
            'Migrating a legacy .NET Framework and Angular application to .NET 10 and React microfrontends as part of a Cloud Native Transformation, moving from a lift-and-shift cloud deployment to scalable, cloud-native services',
            'Driving code quality in an AI-assisted workflow through code reviews, documentation, and agent guidelines (AGENTS.md)',
            'Building robust .NET backends and polished, animated React frontends'
        ]
    },
    {
        company: 'Deltologic',
        position: 'Full Stack Software Engineer Contractor (.Net, Node.js, React, AWS)',
        location: 'Poznan (Remote)',
        date: '12/2025 - Present',
        details: [
            'Developed and maintained .NET and React applications; drove AWS infrastructure improvements and cost optimization',
            'Migrated a production database from RDS SQL Server to Aurora PostgreSQL, cutting costs by over 60% while eliminating a storage I/O bottleneck and improving compute performance through Serverless autoscaling'
        ]
    },
    {
        company: 'Deltologic',
        position: 'Senior Full Stack Software Engineer (.Net, Node.js, React, AWS)',
        location: 'Poznan',
        date: '07/2023 - 11/2025',
        details: [
            "Led engineering on an AWS-based .NET and React project, coordinating delivery with the client's other subcontractors",
            'Migrated multiple .NET Framework applications to .NET 8',
            'Improved application observability by integrating Datadog via OpenTelemetry across a .NET/React stack',
            'Built Node.js projects, including AWS Lambda-based APIs and Chrome extensions',
            'Interviewed and assessed engineering candidates in the technical stage of recruitment'
        ]
    },
    {
        company: 'Freelance',
        position: 'Freelance Software Engineer',
        location: 'Remote',
        date: '10/2024 - Present',
        details: [
            'Build custom web applications and APIs for clients using .NET, TypeScript/JavaScript, and React',
            'Deliver end-to-end: requirements, architecture, implementation, deployment, and maintenance'
        ]
    },
    {
        company: 'Capgemini',
        position: 'Full Stack Software Engineer (.Net)',
        location: 'Poznan',
        date: '04/2022 - 06/2023',
        details: [
            'Developed and maintained an ASP.NET MVC (.NET Framework) application',
            'Introduced CI/CD pipelines, automating build and deployment for the project',
            'Negotiated adoption of JetBrains tooling with the client, improving developer productivity'
        ]
    },
    {
        company: 'Inetum',
        position: 'Junior Full Stack Software Engineer (.Net, React)',
        location: 'Poznan',
        date: '01/2021 - 03/2022',
        details: [
            'Built multiple .NET Core microservices and new .NET Core web APIs',
            'Maintained a .NET Framework web application with a React frontend',
            'Created a standardized Android Virtual Device configuration mirroring the production device, enabling consistent Xamarin development across the team'
        ]
    },
    {
        company: 'Inetum',
        position: 'Junior QA Automation Engineer (Groovy, .Net, Azure)',
        location: 'Poznan',
        date: '10/2019 - 12/2020',
        details: [
            'Developed regression test automation in Groovy and Geb for the kdprevent software',
            'Reworked and maintained a test automation framework for an Azure-based project in .NET (C#) and Python'
        ]
    },
    {
        company: 'Inetum',
        position: 'QA Automation Engineer Intern (Java, Groovy)',
        location: 'Poznan',
        date: '07/2019 - 09/2019',
        details: [
            'Developed regression test automation in Groovy and Geb for the kdprevent software',
            'Created a Java and Selenium test automation framework as a contractor for a business client'
        ]
    }
];

const previousExperienceData: PreviousExperienceEntryProps[] = [
    {
        company: 'Inetum',
        date: '10/2019 - 12/2020',
        position: 'Junior QA Automation Engineer (Groovy, .Net, Azure)'
    },
    {
        company: 'Inetum',
        date: '07/2019 - 09/2019',
        position: 'QA Automation Engineer Intern (Java, Groovy)'
    }
];

const skillsData: SkillEntryProps[] = [
    {
        name: '.Net',
        skills: [
            'ASP.NET Core',
            'ABP.IO',
            'Entity Framework Core',
            'Hangfire',
            'OpenTelemetry',
            'SignalR',
            'AutoMapper',
            'Playwright'
        ]
    },
    {
        name: 'React / Node.js',
        skills: [
            'TypeScript',
            'NestJS',
            'Vite',
            'Angular',
            'Webpack',
            'Redux',
            'DevExtreme',
            'Tanstack',
            'Electron.js',
            'ESLint',
            'Prettier',
            'Yarn Workspaces'
        ]
    },
    {
        name: 'Databases',
        skills: ['SQL Server', 'PostgreSQL', 'Redis', 'MongoDB', 'Azure Cosmos DB']
    },
    {
        name: 'AWS',
        skills: [
            'ECS',
            'RDS',
            'Lambda',
            'CloudWatch',
            'CloudFront',
            'S3',
            'Route 53',
            'EC2',
            'IAM',
            'Code Deploy',
            'CDK'
        ]
    },
    {
        name: 'Tools and Software',
        skills: ['JetBrains IDEs', 'Visual Studio 2022', 'Docker', 'Git', 'SSMS', 'Datadog']
    },
    {
        name: 'Other',
        skills: ['Kotlin', 'Android', 'AI-Assisted Coding']
    }
];

interface LanguageDataEntry {
    name: string;
    level: string;
}

const languagesData: LanguageDataEntry[] = [
    {
        name: 'Polish',
        level: 'native'
    },
    {
        name: 'English',
        level: 'C1'
    }
];

interface ProjectDataEntry {
    name: string;
    link?: string;
}

const chromeBoilerplateLink =
    'https://github.com/ThomasKiljanczykDev/Chrome-Extension-Boilerplate-React-Vite';
const lyricCastLink = 'https://github.com/ThomasKiljanczykDev/LyricCast-public';
const medTimerLink = 'https://github.com/Futsch1/medTimer';

const projectsData: ProjectDataEntry[] = [
    {
        name: 'Chrome-Extension-Boilerplate-React-Vite',
        link: chromeBoilerplateLink
    },
    {
        name: 'LyricCast',
        link: lyricCastLink
    },
    {
        name: 'MedTimer',
        link: medTimerLink
    }
];

interface DetailedProjectDataEntry {
    name: string;
    link: string;
    date: string;
    description: ReactNode;
}

const detailedProjectsData: DetailedProjectDataEntry[] = [
    {
        name: 'DiagnosisReportGenerator',
        link: 'https://github.com/ThomasKiljanczykDev/DiagnosisReportGenerator',
        date: '01/2024 - Present',
        description:
            'Repeatable diagnosis report generator for a medical practice; ASP.NET Core, ABP and EF Core backend with an Electron/TypeScript client.'
    },
    {
        name: 'Device-Manager-for-BleBox',
        link: 'https://github.com/ThomasKiljanczykDev/Device-Manager-for-BleBox',
        date: '05/2026',
        description:
            'Tauri desktop app to configure BleBox smart-home action triggers; React/TypeScript UI, Rust backend, mDNS device discovery.'
    },
    {
        name: 'Chrome-Extension-Boilerplate-React-Vite',
        link: chromeBoilerplateLink,
        date: '03/2024 - Present',
        description:
            'Open-source Chrome MV3 extension boilerplate: React 19, TypeScript, Vite 8, CRXJS, TanStack Router.'
    },
    {
        name: 'LyricCast',
        link: lyricCastLink,
        date: '10/2020 - Present',
        description: (
            <>
                Android app casting song lyrics to TVs via Google Cast for churches; Kotlin,
                Compose, Hilt, Room, JS Cast receiver. Available on{' '}
                <Link
                    style={linkStyle}
                    src="https://play.google.com/store/apps/details?id=dev.thomas_kiljanczyk.lyriccast"
                >
                    Google Play
                </Link>
                .
            </>
        )
    }
];

interface OpenSourceDataEntry {
    name: string;
    link: string;
    date: string;
    description: string;
    details: string[];
}

const openSourceData: OpenSourceDataEntry[] = [
    {
        name: 'MedTimer',
        link: medTimerLink,
        date: '02/2026 - Present',
        description:
            'Open-source Android medication reminder app (Kotlin, 620+ GitHub stars), available on Google Play and F-Droid. #2 human contributor: 288 commits, 37 merged PRs, 22+ PR reviews.',
        details: [
            'Migrated remaining Java code to Kotlin, adopting coroutines and Flow across data, reminder and statistics layers',
            'Introduced Hilt dependency injection across the app and split DAOs and repositories per entity',
            'Split the monolithic app into core and feature Gradle modules (domain, database, datastore, reminders, UI) and moved to a version catalog',
            'Rewrote statistics and overview screens in Jetpack Compose, reworked instrumented tests and added database seeding',
            'Authored coding guidelines for AI-generated code and Compose'
        ]
    },
    {
        name: 'zstd-jni',
        link: 'https://github.com/luben/zstd-jni',
        date: '07/2026 - 08/2026',
        description:
            'JNI bindings for the Zstandard compression library for Java, Android and other JVM languages (1,000+ GitHub stars). 5 merged PRs, shipped in 1.5.7-13.',
        details: [
            "Migrated the Android AAR build to Gradle Kotlin DSL with a version catalog and NDK 29, eliminating Google Play's 16 KB page-size warning",
            'Added nullability annotations and missing null checks across the public API',
            'Fixed broken CI and updated GitHub Actions steps to current versions'
        ]
    }
];

interface ContactData {
    location: string;
    phone: string;
    phoneDisplay: string;
    email: string;
    linkedInAccount: string;
    gitHubAccount: string;
}

const contactData: ContactData = {
    location: 'Poznan, Poland',
    phone: '+48507642433',
    phoneDisplay: '(+48) 507 642 433',
    email: 'thomas.kiljanczyk.dev@gmail.com',
    linkedInAccount: 'thomas-kiljanczyk-dev',
    gitHubAccount: 'ThomasKiljanczykDev'
};

interface HeaderData {
    name: string;
    subtitle: string;
}

const headerData: HeaderData = {
    name: 'Tomasz Kiljanczyk',
    subtitle: 'Senior Full Stack Software Engineer (.Net, Node.js, React, AWS)'
};

interface FooterData {
    repository: string;
}

const footerData: FooterData = {
    repository: 'react-pdf-resume'
};

export {
    educationData,
    experienceData,
    detailedExperienceData,
    previousExperienceData,
    skillsData,
    languagesData,
    projectsData,
    detailedProjectsData,
    openSourceData,
    contactData,
    headerData,
    footerData
};
