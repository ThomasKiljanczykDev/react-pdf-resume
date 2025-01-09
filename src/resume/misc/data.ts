import type { EducationEntryProps } from '@/resume/Education/EducationEntry';
import type { ExperienceEntryProps } from '@/resume/Expierience/ExpierienceEntry';
import type { PreviousExperienceEntryProps } from '@/resume/PreviousExpierience/PreviousExpierienceEntry';
import type { SkillEntryProps } from '@/resume/Skills/SkillEntry';

const educationData: EducationEntryProps[] = [
    {
        school: 'Poznan University of Technology',
        degree: 'M.Eng',
        graduationDate: '09/2022',
        details: ['Contributed to ProcessM project (grant no. LIDER/14/0086/L-10/18/NCBR/2019)']
    },
    {
        school: 'Poznan University of Technology',
        degree: 'B.Eng',
        graduationDate: '02/2021',
        details: ["Received the Poznan University of Technology Rector's Scholarship"]
    }
];

const experienceData: ExperienceEntryProps[] = [
    {
        company: 'Deltologic',
        date: '07/2023 - Present',
        details: [
            'Played a crucial role in saving a failing medium sized AWS .NET project resulting in a stable application with reduced operational costs',
            'Successfully cleaned up and migrated a big .NET Framework project to .NET 8 and ABP.io, enhancing app maintainability and modularity',
            'Introduced OpenTelemetry usage at the company resulting in faster bug analysis',
            "Took over and lead client's contractor to successfully finish major app modernization effort",
            'Actively contributed to internal libraries and development tools',
            'Introduced AWS superwerker usage which led to safer AWS configuration and easier app environment creation',
            'Chose optimal Chrome extension tech stack which led to multiple quick and successful Chrome extension implementations in the company',
            'Responsible for implementation of small to medium sized Node.js/.Net projects, including AWS lambda APIs, ECS apps and Chrome extensions'
        ],
        position: 'Senior Full Stack Software Engineer (.Net, Node.js, React, AWS)'
    },
    {
        company: 'CapGemini',
        date: '04/2022 - 06/2023',
        details: [
            'Successfully negotiated with the client to allow usage of JetBrains tools in the project',
            'Successfully convinced the client to introduce CI/CD pipelines in the project',
            'Responsible for development of ASP.NET MVC (.NET Framework) app'
        ],
        position: 'Full Stack Software Engineer (.Net)'
    },
    {
        company: 'Inetum',
        date: '01/2021 - 03/2022',
        details: [
            'Successfully implemented multiple .Net Core microservices',
            'Prepared a Android Virtual Device configuration mirroring production device for use in Xamarin developed by whole team',
            'Responsible for maintenance of a .NET Framework web app with React frontend',
            'Responsible for creation of new .NET Core web APIs'
        ],
        position: 'Junior Full Stack Software Engineer (.Net, React)'
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
            'MediatR',
            'SignalR',
            'AutoMapper',
            'Polly',
            'Playwright',
            'xunit',
            'moq'
        ]
    },
    {
        name: 'React / Node.js',
        skills: [
            'TypeScript',
            'NestJS',
            'Next.js',
            'Vite',
            'Webpack',
            'Redux',
            'MUI',
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
        skills: ['SQL Server', 'PostgreSQL', 'Redis', 'MongoDB']
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
        skills: ['JetBrains IDEs', 'Visual Studio 2022', 'Git', 'SSMS']
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

const projectsData: ProjectDataEntry[] = [
    {
        name: 'LyricCast',
        link: 'https://github.com/ThomasKiljanczykDev/LyricCast'
    },
    {
        name: 'tensorflow-yolov4-tflite',
        link: 'https://github.com/hunglc007/tensorflow-yolov4-tflite/pull/352'
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
    subtitle: 'Senior Full Stack Software Engineer (.Net, React, AWS)'
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
    previousExperienceData,
    skillsData,
    languagesData,
    projectsData,
    contactData,
    headerData,
    footerData
};
