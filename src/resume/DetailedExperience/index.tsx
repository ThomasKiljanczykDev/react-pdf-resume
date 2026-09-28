import Section from '@/resume/components/Section';
import DetailedExperienceEntry from '@/resume/DetailedExperience/DetailedExperienceEntry';
import { detailedExperienceData } from '@/resume/misc/data';

function DetailedExperience() {
    return (
        <Section
            title="Experience"
            items={detailedExperienceData}
            renderItem={entry => (
                <DetailedExperienceEntry key={entry.company + entry.position} {...entry} />
            )}
        />
    );
}

export default DetailedExperience;
