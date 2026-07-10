import { Certification } from '../types';
import CertificationCard from './CertificationCard';

interface Props {
  certifications: Certification[];
}

const CertificationsSection = ({ certifications }: Props) => (
  <section id="certifications" className="py-16 px-4">
    <div className="max-w-5xl mx-auto">
      <h2 className="font-display font-bold text-3xl mb-12 text-bone">Certifications</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert) => (
          <CertificationCard key={cert.id} cert={cert} />
        ))}
      </div>
    </div>
  </section>
);

export default CertificationsSection;
