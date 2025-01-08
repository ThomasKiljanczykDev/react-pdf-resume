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
            "Took over and lead client's contractor to successfully finish major app modernization effort",
            'Chose optimal Chrome extension tech stack which led to multiple quick and successful Chrome extension implementations in the company',
            'Actively contributed to internal libraries and development tools',
            'Introduced OpenTelemetry usage at the company resulting in faster bug analysis',
            'Introduced AWS superwerker usage which led to safer AWS configuration and easier app environment creation',
            'Responsible for implementation of small to medium sized Node.js/.Net projects, including AWS lambda APIs, ECS apps and Chrome extensions'
        ],
        position: 'Software Engineer (.Net, Node.js, React, AWS)'
    },
    {
        company: 'CapGemini',
        date: '04/2022 - 06/2023',
        details: [
            'Successfully negotiated with the client to allow usage of JetBrains tools in the project',
            'Successfully convinced the client to introduce CI/CD pipelines in the project',
            'Responsible for development of ASP.NET MVC (.NET Framework) app'
        ],
        position: 'Software Engineer (.Net)'
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
        position: 'Junior Software Engineer (.Net)'
    }
];

const previousExperienceData: PreviousExperienceEntryProps[] = [
    {
        company: 'Inetum',
        date: '10/2019 - 12/2020',
        position: 'Junior QA Automation Engineer (.Net, Azure)'
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
        skills: ['ASP.NET Core', 'ABP.IO', 'Entity Framework Core']
    },
    {
        name: 'React / Node.js',
        skills: ['TypeScript', 'Vite', 'Webpack', 'NestJS', 'Next.js', 'Tanstack']
    },
    {
        name: 'Databases',
        skills: ['SQL Server', 'PostgreSQL', 'Redis', 'MongoDB']
    },
    {
        name: 'AWS',
        skills: [
            'CDK',
            'EC2',
            'RDS',
            'Lambda',
            'ECS',
            'S3',
            'CloudFront',
            'Route 53',
            'CloudWatch',
            'IAM',
            'Code Deploy'
        ]
    },
    {
        name: 'Tools and Software',
        skills: ['JetBrains IDEs', 'Visual Studio 2022', 'Git', 'SSMS']
    },
    {
        name: 'Languages',
        skills: ['Polish - native', 'English - C1']
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
    contactData,
    headerData,
    footerData
};
